<?php


include 'baglanti.php';


 $query = "select *  from aratablo where menuid='".$_GET["menu_id"]."'";
 
$sorgula=mysqli_query($connection,$query);

while($okut=mysqli_fetch_assoc($sorgula))
{
    

$description=$okut[description];

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
                    
                    
                    $name=$okut[name];
                    
                    mysqli_query($connection,"update aratablo set onerilenverigiristuru='".$verigiristuru."',onerilenalanturu='".iconv("UTF-8","ISO-8859-9",$alanturu)."',kayitalani='".$kayitalani."',onerilenetiket='".iconv( "UTF-8","ISO-8859-9",mb_convert_case(str_replace("I","ı",$name), MB_CASE_TITLE, "UTF-8"))."' where index_aratablo=".$okut[index_aratablo]);
 
     
}
                    
             
          
          $conn = mysqli_connect("localhost","u9280736_metin2_1","p6ow=D2.m5SJ","u9280736_asalyapi");

             
             
                $sqlSelect = "SELECT * FROM aratablo where menuid='".$_GET[menu_id]."'";
    $result = mysqli_query($conn, $sqlSelect);
 
if (mysqli_num_rows($result) > 0)
{
?>



    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-6"><h6 class="panel-title txt-dark">Tüm Alanlar </h6></div><div class="col-md-6">
										
										<a class="pull-left inline-block sistemeaktar" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim alanlariyansit" title="<?php echo $_POST[menu_id]; ?>" >ALANLARI SİSTEME AKTAR</button>
										</a>
										
										<a class="pull-left inline-block alanlariduzelt" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim alanlariyansit" title="<?php echo $_POST[menu_id]; ?>" >ALANLARI DÜZELT</button>
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
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["description"]); ?></td>
												    <td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenalanadi"]); ?></td>
												<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenetiket"]); ?></td>
												<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenalanturu"]); ?></td>
												<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenverigiristuru"]); ?></td>
												<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["kayitalani"]); ?></td>
												
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