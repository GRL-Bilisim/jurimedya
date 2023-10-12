<?php


function duzelt($string){
    
$yenisi=str_replace("Ü","U",$string);
$yenisi=str_replace("Ç","C",$yenisi);
$yenisi=str_replace("Ş","S",$yenisi);
$yenisi=str_replace("Ğ","G",$yenisi);
$yenisi=str_replace("Ö","O",$yenisi);
$yenisi=str_replace("İ","I",$yenisi);


$yenisi=str_replace("ü","u",$yenisi);
$yenisi=str_replace("ç","c",$yenisi);
$yenisi=str_replace("ş","s",$yenisi);
$yenisi=str_replace("ğ","g",$yenisi);
$yenisi=str_replace("ö","o",$yenisi);
$yenisi=str_replace("ı","i",$yenisi);

return $yenisi;    
}

function seoUrl($string) {
    //Lower case everything
    $string = strtolower($string);
    //Make alphanumeric (removes all other characters)
    $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
    //Clean up multiple dashes or whitespaces
    $string = preg_replace("/[\s-]+/", " ", $string);
    //Convert whitespaces and underscore to dash
    $string = preg_replace("/[\s_]/", "_", $string);
    return $string;
}

ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
}

$conn = mysqli_connect("localhost","netbulut__asaluser","p6ow=D2.m5SJ","netbulut_asalyapi");


require_once('vendor/php-excel-reader/excel_reader2.php');
require_once('vendor/SpreadsheetReader.php');
 
     
  $allowedFileType = ['application/vnd.ms-excel','text/xls','text/xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  
  if(in_array($_FILES["file"]["type"],$allowedFileType)){
 
 


 $targetPath = 'uploads/'.$_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'], $targetPath);
        
        $Reader = new SpreadsheetReader($targetPath);
        
        $sheetCount = count($Reader->sheets());
        
        $j=0;
        
        
        
                        $query = "delete from aratablo where menuid='".$_POST["menu_id"]."'";
                    $result = mysqli_query($conn, $query);
        
        for($i=0;$i<$sheetCount;$i++)
        {
            $Reader->ChangeSheet($i);
            
            foreach ($Reader as $Row)
            {
          
                $name = "";
                if(isset($Row[0])) {
                    $name = mysqli_real_escape_string($conn,$Row[0]);
                }
                
                $description = "";
                if(isset($Row[1])) {
                    $description = mysqli_real_escape_string($conn,$Row[1]);
                }
                
                if ((!empty($name) || !empty($description))&&$j>0) {
                    
                    
                  
if ($description=="NUMBER"||$description=="Number")
                    {
                        $verigiristuru='Edit';
                        $alanturu="Sayı";
                        $kayitalani="1";
                    }
                    
                        
                    if ($description=="TEXT"||$description=="Text")
                    {
                        $verigiristuru='Edit';
                        $alanturu="Karakter";
                        $kayitalani="1";
                    }
                    
                     if ($description=="CALCULATION"||$description=="Calculation"||$description=="Calculation (Text)")
                    {
                        $verigiristuru='Disabled';
                        $alanturu="Karakter";
                        $kayitalani="1";
                    }
                    
                    
                      if ($description=="Calculation (Number)")
                    {
                        $verigiristuru='Disabled';
                        $alanturu="Sayı";
                        $kayitalani="1";
                    }
                    
                      if ($description=="DATE"||$description=="Date")
                    {
                        $verigiristuru='Date';
                        $alanturu="Tarih";
                        $kayitalani="1";
                    }
                    
                       if ($description=="TIME"||$description=="Time")
                    {
                        $verigiristuru='Saat';
                        $alanturu="Time";
                        $kayitalani="1";
                    }
                    
                        if ($description=="TIMESTAMP"||$description=="Timestamp")
                    {
                        $verigiristuru='Tarih-Saat';
                        $alanturu="Datetime";
                        $kayitalani="1";
                    }
                    
                      if ($description=="CONTAINER"||$description=="Container")
                    {
                        $verigiristuru='File(JPG)';
                        $alanturu="Dosya";
                        $kayitalani="1";
                    }
                    
                     if ($description=="SUMMARY"||$description=="Summary"||$description=="Summary (Number)")
                    {
                        $verigiristuru='Disabled';
                        $alanturu="Sayı";
                        $kayitalani="0";
                    }    
                    
                    $query = "insert into aratablo(name,description,userid,menuid,onerilenalanadi,onerilenetiket,onerilenalanturu,onerilenverigiristuru,kayitalani) values('".iconv( "UTF-8","ISO-8859-9",$name)."','".iconv( "UTF-8","ISO-8859-9",$description)."','".$_SESSION["user"]."','".$_POST["menu_id"]."','".seoUrl(duzelt($name))."','".iconv( "UTF-8","ISO-8859-9",mb_convert_case(str_replace("I","ı",$name), MB_CASE_TITLE, "UTF-8"))."','".iconv( "UTF-8","ISO-8859-9",$alanturu)."','".iconv( "UTF-8","ISO-8859-9",$verigiristuru)."','".$kayitalani."')";
                    $result = mysqli_query($conn, $query);
                
                    if (! empty($result)) {
                        $type = "success";
                        $message = "Excel Data Imported into the Database";
                    } else {
                        $type = "error";
                        $message = "Problem in Importing Excel Data";
                    }
                }
                
                $j++;
             }

 
 
        }
  }
  else
  { 
        $type = "error";
        $message = "Geçersiz dosya uzantısı";
  }
  
  
  
    $sqlSelect = "SELECT * FROM aratablo where menuid='".$_POST[menu_id]."'";
    $result = mysqli_query($conn, $sqlSelect);
 
if (mysqli_num_rows($result) > 0)
{
?>



    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-6"><h6 class="panel-title txt-dark">Tüm Alanlar </h6></div><div class="col-md-6">
										
										<a class="pull-left inline-block yenisatir" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim alanlariyansit" title="<?php echo $_POST[menu_id]; ?>" >ALANLARI SİSTEME AKTAR</button>
										</a>
										
									
										</div></div>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0" id="example1">
											<thead>
												<tr>
													<th>#</th>
													<th>Alan Adı</th>
													<th>Veri Alanı</th>
													<th>Önerilen Alan Adı</th>
												<th>Önerilen Etiket</th>
												<th>Alan Türü</th>
												<th>Veri Giriş Türü</th>
												<th>Kayıt Alanı</th>
												
												</tr>
											</thead>
											<tbody>
											
											<?php
										
											$j=0;
											while($row=mysqli_fetch_array($result))
											{
											    $j++;
											?>
												<tr class="active">
													<td><?php echo $j; ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["name"]); ?></td>
													<td><?php echo $row["description"]; ?></td>
												    <td><?php echo $row["onerilenalanadi"]; ?></td>
												<td><?php echo $row["onerilenetiket"]; ?></td>
												<td><?php echo $row["onerilenalanturu"]; ?></td>
												<td><?php echo $row["onerilenverigiristuru"]; ?></td>
												<td><?php echo $row["kayitalani"]; ?></td>
												
												</tr>
											<?php
											}
											?>
											
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
				


    
    <?php
}
?>
