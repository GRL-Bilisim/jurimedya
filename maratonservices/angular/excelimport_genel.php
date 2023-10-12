<?php

 header("Access-Control-Allow-Origin: *");

 function donustur2($veri)
 {
     
      $dilimler = explode(".",$veri);  
      
         if ($dilimler[0]=='')
      {
          return '';
      }
      else
      
      if ($dilimler[2]>99)
      {
      return $dilimler[2]."-".$dilimler[1]."-".$dilimler[0];
      }
      else
      
     if ($dilimler[2]<=22)
      {
      return "20".$dilimler[2]."-".$dilimler[1]."-".$dilimler[0];
      }
      else
      
       if ($dilimler[2]>22&&$dilimler[2]<99)
      {
      return "19".$dilimler[2]."-".$dilimler[1]."-".$dilimler[0];
      }
      
   
 } 

function donustur($veri)
{
    
   	$dilimler = explode("-",$veri);  
   	
   	 	if ($dilimler[0]=='')
   	{
   	    return '';
   	}
   	else
   	
   	if ($dilimler[2]>99)
   	{
   	return $dilimler[2]."-".$dilimler[0]."-".$dilimler[1];
   	}
   	else
   	
    if ($dilimler[2]<21)
   	{
   	return "20".$dilimler[2]."-".$dilimler[0]."-".$dilimler[1];
   	}
   	else
   	
   	 if ($dilimler[2]>21&&$dilimler[2]<99)
   	{
   	return "19".$dilimler[2]."-".$dilimler[0]."-".$dilimler[1];
   	}
   	
  
    
}


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


  session_start();



$conn = new mysqli("localhost","netbulut_metin2_1","928501Mo*","netbulut_netlaminatdb");




$veritabani="netbulut_netlaminatdb";


$veriDB="netbulut_netlaminatdb";

mysqli_set_charset($conn,'latin1');

$masteralan=$_GET[masteralan];
$mastervalue=$_GET[mastervalue];

if ($mastervalue=='')
{
    
  $mastervalue="-".$_SESSION[user_id];  
    
}



 $sqlSelect = "SELECT * FROM formlar where form_index=".$_GET[menu_id];
 
 echo $sqlSelect;
    $result = mysqli_query($conn,$sqlSelect);
 
if (mysqli_num_rows($result) > 0)
{
    
    	while($row=mysqli_fetch_array($result))
											{
											   
											   
$dilimler = explode(",",$row[excelimport]);
$excelimport = $row[excelimport];
	  	$tablosu =$row[tablosu];
                      
      $hareketcalistir = $row['hareketcalistir'];
											    
											}
    
}



require_once('../vendor/php-excel-reader/excel_reader2.php');
require_once('../vendor/SpreadsheetReader.php');
 
     
  $allowedFileType = ['application/vnd.ms-excel','text/xls','text/xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  
  if(in_array($_FILES["file"]["type"],$allowedFileType)){
 
 


 $targetPath = '../uploads/'.$_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'], $targetPath);
        
         $Reader = new SpreadsheetReader($targetPath);
        
        $sheetCount = count($Reader->sheets());
        
        
        $j=0;
        
  
       
        for($i=0;$i<1;$i++)
        {
            
          $Reader->ChangeSheet($i);
            foreach ($Reader as $Row)
            {
          
              $deger='';
                
                for ($t=0;$t<count($dilimler);$t++)
                {
                    
                    
                    $sqlyes="select * from formalanlari where alanadi='".$dilimler[$t]."' and deleted='false' and form_index=".$_GET[menu_id];
                   
 $sorgulama=mysqli_query($conn,$sqlyes);
 while($okut=mysqli_fetch_assoc($sorgulama))
 {
     
     
     
    if ($okut[verigiristuru]!='Date')
    {
                    if ($deger!='')
                    {
                        $deger=$deger.",'".iconv( "UTF-8","ISO-8859-9",$Row[$t])."'";
                    }
                   if ($deger=='')
                    {
                     $deger="'".iconv( "UTF-8","ISO-8859-9",$Row[$t])."'";
                    }
    }
    
     if ($okut[verigiristuru]=='Date')
    {

                    if ($deger!='')
                    {
                       
                        
                        if (donustur2($Row[$t])=='')
                        {
                          $deger=$deger.",null";   
                        }
                        
                        if (donustur2($Row[$t])!='')
                        {
                          $deger=$deger.",'".iconv( "UTF-8","ISO-8859-9",donustur2($Row[$t]))."'";   
                        }
                        
                    }
                   if ($deger=='')
                    {
              
                     
                      if (donustur2($Row[$t])=='')
                        {
                              $deger="null"; 
                        }
                        
                        if (donustur2($Row[$t])!='')
                        {
                                 $deger="'".iconv( "UTF-8","ISO-8859-9",donustur2($Row[$t]))."'";
                        }
                     
                     
                    }
    }
     
 }
                  
                    
                }
                
              
                if(isset($Row[0])&&$j>0) {
                    
                    
                    if ($_GET[firmaid]=='')
                    {
                    
                    if ($masteralan!='')
                    {
 
                        
 
                    $query = "insert into $tablosu($excelimport,$masteralan) values(".$deger.",'".$mastervalue."')";
               
                    }
                    
                      if ($masteralan=='')
                    {
                        
                 
                        
 
                    $query = "insert into $tablosu($excelimport) values(".$deger.")";
                    
                   
                    }
                    }
                    
                    
                     if ($_GET[firmaid]!='')
                    {
                        
                        $sqls="select * from firma_karsiliklari left join malzemeler on malzemeler.index_malzemeler=firma_karsiliklari.malzemeid where karsilik_no='".$Row[0]."' and firmaid=".$_GET[firmaid];
                        $sorgus=mysqli_query($conn,$sqls);
                        
                         while($okur=mysqli_fetch_assoc($sorgus))
                        {
                         
     $kodurun=$okur[malzemekodu];
                        }
                    
                    if ($masteralan!='')
                    {

                    $query = "insert into $tablosu($excelimport,$masteralan,kod_urun) values(".iconv( "UTF-8","ISO-8859-9",$deger).",'".$mastervalue."','".iconv( "UTF-8","ISO-8859-9",$kodurun)."')";
                    }
                    
                      if ($masteralan=='')
                    {
                        
                        
                        
 
                    $query = "insert into $tablosu($excelimport,kod_urun) values(".iconv( "UTF-8","ISO-8859-9",$kodurun).")";
                    }
                    }
                 
           echo $query;
           echo "<br>";
                  
                    $result = mysqli_query($conn,$query);
                
                    if (!empty($result)) {

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

  if($type=='success'){
    if($hareketcalistir=='EVET'){
     
    }else{
      
    }
  }

echo $type;
  
?>
