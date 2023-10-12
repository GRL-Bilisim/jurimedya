<?php


ob_start();



ini_set('display_errors', 0);

error_reporting(E_ERROR | E_WARNING | E_PARSE); 


if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';

 header("Access-Control-Allow-Origin: *");

if ($_GET[page_id]!="teksayfa")
{
	header('Content-type: application/json');
}

$password=$_GET['kod'];


$zaman=date("H:i:s");





$tarih=date("Y-m-d");



 function sifre_uret2($uzunluk) {


   


              $karakterler = "123456789";


   


              $karakter_sayi = strlen($karakterler);





             





              for ($ras = 0; $ras <$uzunluk; $ras++) {


  


                  $rakam_ver = rand(0,$karakter_sayi-1);


   


                  $sifre_ver .= $karakterler[$rakam_ver];


  


              }


  


              return $sifre_ver;


 


          }  



  function sifre_uret($uzunluk) {


   


              $karakterler = "abcdefghijklmnopqrstuvwxyz1234567890";


   


              $karakter_sayi = strlen($karakterler);





             





              for ($ras = 0; $ras <$uzunluk; $ras++) {


  


                  $rakam_ver = rand(0,$karakter_sayi-1);


   


                  $sifre_ver .= $karakterler[$rakam_ver];


  


              }


  


              return $sifre_ver;


 


          }  




function cevir($string){


	 


	 $gkod=array('\u0131','ý','þ','ð','Ý','Þ','Ä±','Ã‡','Åž','ÅŸ','ÄŸ','Ã¼','Ã¶','Ä°','\n');


	 $dkod=array('ı','ı','ş','ğ','İ','Ş','ı','Ç','Ş','ş','ğ','ü','ö','İ','');


	


	 $ykod=str_replace($gkod,$dkod,$string);


	


	


	 return $ykod;


	


	 }


function containsWord($str, $word)
{
    return !!preg_match('#\\b' . preg_quote($word, '#') . '\\b#i', $str);
}

function json_turkce($dizi){
    

$pizza  = $_GET[sutunlar];
$pieces = explode(",", $pizza);

    
    
    if ($_GET[page_id]!='bildirimler'&&$_GET[formid]!='61'&&$_GET[formid]!='62'&&$_GET[formid]!='71'&&$_GET[formid]!='91'&&$_GET[formid]!='72'&&($_GET[formid]!='93'||$_GET[page_id]=='formbilgisi'))
    {
    foreach($dizi as $record){
        foreach($record as $key=>$og){
            
            if ($key=='islemmenu')
            {
            $colm[]='"'.$key.'":"'.str_replace('"',"'",$og).'"';
            }
            
            if ($key!='islemmenu')
            {
                
                
                
                if (strpos(",".$_GET['sutunlar'].",id", ",".$key) !== false) {
      $colm[]='"'.$key.'":"'.iconv( "ISO-8859-9","UTF-8",$og).'"';
          }
                
           
            
        
            }
        }
        $rec[]="{".implode(",",$colm)."}";
        unset($colm);
    }
    $sonuc='['.implode(",",$rec).']';
    }
    
    if ($_GET[page_id]=='bildirimler'||$_GET[formid]=='61'||$_GET[formid]=='62'||$_GET[formid]=='71'||$_GET[formid]=='91'||$_GET[formid]=='72'||($_GET[formid]=='93'&&$_GET[page_id]!='formbilgisi'))
    {
    foreach($dizi as $record){
        foreach($record as $key=>$og){
 
           $colm[]='"'.$key.'":"'.$og.'"';
    
     
        }
        $rec[]="{".implode(",",$colm)."}";
        unset($colm);
    }
    $sonuc='['.implode(",",$rec).']';
    }
    
    return $sonuc;
}



ini_set('display_errors', 0);

error_reporting(E_ERROR | E_WARNING | E_PARSE); 



ob_start();

if (!isset($_SESSION)) {
  @session_start();
  $_SESSION["urunsayisi"]="1";
}


































































    
    
    


    

    

 
    
  
  
    
    
   
    

    

    
    
    
    
    
    

    function httpPost($url, $data)
{
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}
    
    

    


  
    
    
    
    
   
  
    
  
    
                       
                                    
                                    
        
        
   
    
    
  




    
    
    
    
    
      
 



  
    
    
   

    
 




 

  

  
  

 if ($_GET[page_id]=='formgetir')
    {
        
        $formid=$_GET[formid];
        
        $sqlys="select * from formlar where form_index=".$_GET[formid];
        $sorgula=mysqli_query($connection,$sqlys);
        
        while ($okut=mysqli_fetch_assoc($sorgula))
        {
            
            $sql=$okut[sorgusu];
            $tablosu=$okut[tablosu];
             $tarihalani=$okut[tarihalani];
             $grup=$okut[where];
             $islemmenu=$okut[islemmenu];             
        }
        
        
        
                 $anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";

$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
$anahtars=$gel['Column_name'];
    
}
        
        
        
        		if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[formid]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}

$kayitoku=mysqli_query($connection,$sqli);
$sutunlar="";
while($okut=mysqli_fetch_assoc($kayitoku))
{
    
    if ($sutunlar=='')
    {
	
            $sutunlar=$okut[alanadi];

    }
    else
    {
      $sutunlar=$sutunlar.",".$okut[alanadi];  
    }
}

        
        
        
          $anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";

$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
$anahtar2=$gel['Column_name'];
    
}
        
        if ($_GET[kayitsil]!='')
        {
        
        mysqli_query($connection,"delete from ".$tablosu." where anahtar2=".$_GET[kayitsil]);
            
            
        }
        
        
        $anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";

$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
$anahtar2=$gel['Column_name'];
    
}




if ($_GET[filtreturu]!='')
{

if ($_GET[filtreturu]=='aylik')
{
    $ilktarih=$_GET[param1]."-".$_GET[param2]."-"."01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, $_GET[param2], $_GET[param1]);
    
    $sontarih=$_GET[param1]."-".$_GET[param2]."-".$gunsayisi;

}



if ($_GET[filtreturu]=='ikitariharasi')
{
   $ilktarih=$_GET[param1];
   $sontarih=$_GET[param2];
    
}

if ($_GET[filtreturu]=='ucaylik')
{
    if ($_GET[param2]=='0')
    {
       
       $ilktarih=$_GET[param1]."-01-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 3, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-03-".$gunsayisi;
       
       
    }
    if ($_GET[param2]=='1')
    {
        
          
       $ilktarih=$_GET[param1]."-04-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 6, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-06-".$gunsayisi;
        
    }
    if ($_GET[param2]=='2')
    {
        
         $ilktarih=$_GET[param1]."-07-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 9, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-09-".$gunsayisi;
        
    }
    if ($_GET[param2]=='3')
    {
        
         $ilktarih=$_GET[param1]."-10-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 12, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-12-".$gunsayisi;
        
    }
    
}

if ($_GET[filtreturu]=='yillik')
{
      $ilktarih=$_GET[param1]."-01-01";

    $sontarih=$_GET[param1]."-12-31";
    
}

if ($_GET[filtreturu]=='haftalik')
{
 
 if ($_GET[param1]==0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));   

$sontarih=date("Y-m-d", strtotime('sunday this week'));
 }  
 
  if ($_GET[param1]>0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));  

$say=$_GET[param1];

$ilktarih=date('Y-m-d', strtotime($ilktarih.' -'.($say*7).' days')); 

$sontarih=date('Y-m-d', strtotime($ilktarih.' 6 days')); 

 }  
    
}


if ($tarihalani!=''&&$_GET[filtreturu]=='')
{
    $filtre=$filtre." and month(".$tarihalani.")=month(CURRENT_DATE) and year(".$tarihalani.")=year(CURRENT_DATE)";
    
}


if ($_GET[filtreturu]!='')

{

	$filtre=$filtre." and (".$tarihalani.">='".$ilktarih."' and ".$tarihalani."<='".$sontarih."') ";

}







}


if ($_GET[sorgusu]!='')

{
    
 $filtre=$_GET[sorgusu];   
}

$sql=$sql.$filtre.$grup;







 if ($islemmenu!="")

 {

	 

	



$islemmenu=str_replace("tutars",$okun[odenecek],str_replace("kayitidsi",$anahtars,$islemmenu));	 

	 

 }

 

 if ($islemmenu=="")

 {

 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{



   $islemmenu=$islemmenu.'<a href="index.php?page_id=editrecord&menu_id='.$_GET[formid].'&recordid='.$anahtars.'" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id='.$_GET[formid].'&recordid='.$anahtars.'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>';


												
												if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
												 
												    
												     $islemmenu=$islemmenu.'<a class="inline-block" data-effect="fadeOut" href="index.php?page_id=listings&menu_id=199&tasarimid='.$anahtars.'"><button type="button" class="btn btn-primary btn-square"><i class="icon-settings"></i></button></a>
										<a class="inline-block" href="index.php?page_id=design&tasarimid="'.$_GET[formid].'" title="'.$_GET[formid].'" data-effect="fadeOut">
											<button type="button" class="btn btn-default btn-square"><i class="icon-folder"></i></button>
										</a>';
												    
												}
							





}



if ($bagliformid!=""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{



	

  $islemmenu=$islemmenu.'<a href="index.php?page_id=editrecord&menu_id='.$_GET[formid].'&recordid='.$anahtars.'" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-pencil"></i></a>';

  

}

 





 if ($tablosu!='paketlerimson'&&$islemyok=="") 

 {  

 

		  

                    $islemmenu=$islemmenu.'<a href="#" id="menu_id='.$_GET[formid].'&recordid='.$anahtars.' class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>';



  }


 




 

 

 if ($tablosu=='cariler'&&$islemyok=="") 

 {


 $islemmenu=$islemmenu.'<a href="index.php?page_id=altsayfa&menu_id=169&recordid=cariindex" id="menus_id='.$_GET[formid].'&recordid='.$anahtars.'"  data-original-title="Hesap Kartı"><button type="button" class="btn btn-default">Hesap Kartı</button></a>';



 } 



 

 




}



$pos = strpos($sql, ",");





$sql=str_replace(" from $tablosu", ",$anahtars as id from $tablosu", $sql);




           $sorgula=mysqli_query($connection,$sql);
                                            
        
                                        
                                        
        
    $rows = array();
while($row=mysqli_fetch_assoc($sorgula))

$kayitlar[]=$row;


echo json_turkce(($kayitlar));
    
        
        
    }
    
    
 
    
    
    
 




  if ($_GET[page_id]=='formalanlari')
    {
        
        //tüm seçenekli alanların içini doldur
        
        
        $sql="select * from formalanlari where (verigiristuru='Combobox' or verigiristuru='FixList') and form_index='".$_GET[formid]."'";
        $sorgula=mysqli_query($connection,$sql);
        
        
        
        while ($okut=mysqli_fetch_assoc($sorgula))
        {
            
        
             if ($okut[verigiristuru]=='Combobox')
            {
              
        $sqlmn="select * from formlar where form_index=$okut[bagliform_index]";

           $sorc=mysqli_query($connection,$sqlmn);
           
           
           while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

										$sorgu=$okubeni[sorgusu];

									    $tablom=$okubeni[tablosu];

																	

																}
																
									$verigetir=mysqli_query($connection,$sorgu);								
																
			while ($okn=mysqli_fetch_assoc($verigetir))

				{

															
				$alanadi=$okut[keyfield];

			    $verialani=$okut[valuefield];
			    
			    
			    
				$etiket=$okn[$verialani];

			    $verisi=$okn[$alanadi];
			    

if ($etiketbiriktir!='')
{
    $etiketbiriktir=$etiketbiriktir.";".$etiket;
     $veribiriktir=$veribiriktir.";".$verisi;
    
}

if ($etiketbiriktir=='')
{
    $etiketbiriktir=$etiket;
     $veribiriktir=$verisi;
    
}
    
																
																
				}
           
             mysqli_query($connection,"update formalanlari set degerleri='".$veribiriktir."',etiketleri='".$etiketbiriktir."' where alan_index=".$okut[alan_index]); 
                
            }
            
            if ($okut[verigiristuru]=='FixList')
            {
               
                $dilimler = explode(";", $okut[fixlist]);



              mysqli_query($connection,"update formalanlari set degerleri='".$okut[fixlist]."',etiketleri='".$okut[fixlist]."' where alan_index=".$okut[alan_index]);  
                
            }
            
        
 
            
            
        }
        
        
        
        
        
        
        
        $sqlys="select *,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where kayitformu=1 and  formalanlari.form_index=".$_GET[formid];
        $sorgula=mysqli_query($connection,$sqlys);
                                            
        
                                        
                                        
        
        $rows = array();
while($row=mysqli_fetch_assoc($sorgula))

$kayitlar[]=$row;


echo json_turkce(($kayitlar));
    
        
        
    }
    
    









                                        
                                        
    






?>