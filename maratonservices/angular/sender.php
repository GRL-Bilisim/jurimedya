 	<?php
 	


ini_set('display_errors', 0);
error_reporting(E_ERROR | E_WARNING | E_PARSE); 

ob_start();

if (!isset($_SESSION)) {
        @session_name("yetisenerp");

  @session_start();
}

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$form_id=$_GET[form_id];


$username=$_SESSION[user_id];




$kayitid=$_GET[recordid];


$alanca=$_GET[alanadi];


date_default_timezone_set("Turkey");



$zaman=date("H:i:s");





$tarih=date("Y-m-d");











function degistir($veri)


{





$dilimler = explode("/", $veri);





$degerim=str_replace("--","",$dilimler[2]."-".$dilimler[1]."-".$dilimler[0]);


return $degerim;


}







function degistir2($veri)


{





$dilimler = explode(".", $veri);








return $veri;


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











include 'pdo_baglanti.php';



if($form_id=='489'){

        $sql=$db->prepare("select * from kullanicilar where tanimlidashboard='3' ");
        $sql->execute();

    if($sql !== false)
{
            while( $ekle =$sql->fetch(PDO::FETCH_ASSOC) )
              {
       $eklece=$db->prepare("INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('Information','".iconv( "UTF-8","ISO-8859-9","Maliyet Analizi Oluşturuldu")."','$tarih','$saat','','','".$ekle[user_indeks]."')");
        $eklece->execute();
              }
}
    
    /**
          $sql ="select * from kullanicilar where tanimlidashboard='3' ";
  $eklece=mysqli_query($connection,$sql);
  while($ekle = mysqli_fetch_assoc($eklece)){
$ek= "INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('Information','".iconv( "UTF-8","ISO-8859-9","Maliyet Analizi Oluşturuldu")."','$tarih','$saat','','','".$ekle[user_indeks]."')";
 mysqli_query($connection,$ek);
  }
**/
    
    
}

if($form_id=='231'){

        $sql=$db->prepare("select * from kullanicilar where tanimlidashboard='5' ");
        $sql->execute();

    if($sql !== false)
{
            while( $ekle =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  $eklece = $db->prepare("INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('Information','".iconv( "UTF-8","ISO-8859-9","Veri Dağıtım Formu Oluşturuldu")."','$tarih','$saat','','','".$ekle[user_indeks]."')");
                   $eklece->execute();
              }
}

/***
  $sql ="select * from kullanicilar where tanimlidashboard='5' ";
  $eklece=mysqli_query($connection,$sql);
  while($ekle = mysqli_fetch_assoc($eklece)){
$ek= "INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('Information','".iconv( "UTF-8","ISO-8859-9","Veri Dağıtım Formu Oluşturuldu")."','$tarih','$saat','','','".$ekle[user_indeks]."')";
 mysqli_query($connection,$ek);
  }
***/
}


        $query=$db->prepare("select * from formlar where form_index=? ");
         $query->execute([$form_id]);
         
                 if($query !== false)
{
            while( $oku =$query->fetch(PDO::FETCH_ASSOC) )
              {

          $hareketcalistir = $oku['hareketcalistir'];
$tablosu=$oku[tablosu];
$formtanimi=$oku[formtanimi];

if ($kayitid!="")
{
            $alak=$db->prepare("SHOW INDEX FROM `$tablosu` WHERE Key_name = 'PRIMARY' ");
         $alak->execute();
         
                 if($alak !== false)
{
            while( $alancek =$alak->fetch(PDO::FETCH_ASSOC) )
              {
                  $alancak=$alancek[Column_name];
              }
}
    

 
	
}


$sqls=$db->prepare("select * from formalanlari where form_index=? and alanadi<>'' and kayitformu=1 and deleted='false' order by alansirasi asc");
$sqls->execute([$oku[form_index]]);

$i=0;

$valuesorgusu='';
$alansorgusu='';
    
    if($sqls !== false)
{
while($okusana=$sqls->fetch(PDO::FETCH_ASSOC))
{
        $alanadi=$okusana[alanadi];



$alantanimi=$okusana[alanyazisi];


$alanturu=$okusana[verigiristuru];


$yol='';


if ($okusana[verigiristuru]!='')


{


if ($okusana[verigiristuru]=='File(PDF)')

{

	$deger=sifre_uret(10).".pdf";


    $kaynakdosya = $_POST[$alanadi]; 




  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);


   $yol=$oku[tablosu].'/'.$deger;

}


if ($okusana[verigiristuru]=='File(MP4)')


{

	$deger=sifre_uret(10).".mp4";

    $kaynakdosya = $_POST[$alanadi]; 



  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);


  $yol=$oku[tablosu].'/'.$deger;



}

if ($okusana[verigiristuru]=='File(GIF)')


{

	$deger=sifre_uret(10).".gif";

	$kaynakdosya = $_POST[$alanadi]; 



  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);



  $yol=$oku[tablosu].'/'.$deger;



}

if ($okusana[verigiristuru]=='File(PNG)')


{


	$deger=sifre_uret(10).".png";

    $kaynakdosya = $_POST[$alanadi]; 



   move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);
 
   $yol=$oku[tablosu].'/'.$deger;



}



if ($okusana[verigiristuru]=='File(JPG)')


{


	$deger=sifre_uret(10).".jpg";



    $kaynakdosya = $_POST[$alanadi]; 




  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/".$deger);
  
  $yol=$oku[tablosu].'/'.$deger;

echo "RRS../$oku[tablosu]/".$deger;

}



if ($okusana[verigiristuru]=='File(MP4)')


{


	$deger=sifre_uret(10).".mp4";


	

    $kaynakdosya = $_POST[$alanadi]; 



  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);
  
  $yol=$oku[tablosu].'/'.$deger;
  

}

if ($okusana[verigiristuru]=='File(GIF)')


{

	$deger=sifre_uret(10).".gif";


    $kaynakdosya = $_POST[$alanadi]; 


  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);
  
  $yol=$oku[tablosu].'/'.$deger;

}







if ($okusana[verigiristuru]=='File(TIFF)')


{


if ($_FILES["$alanadi"]["size"]>0)


{


        $deger=sifre_uret(10).'.tiff';


  move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"../$oku[tablosu]/" .$deger);


        $yol=$oku[tablosu].'/'.$deger;


}


}
if ($okusana[zorunlu]=='Trues')


{


if ($_POST[$alanadi]=='')


{


$hata=$alantanimi." Boş bırakılamaz";

}


}



if ($i==0)


{




if ($alanturu<>'File(JPG)'&&$alanturu<>'File(PDF)'&&$alanturu<>'File(TIFF)'&&$alanturu<>'File(PNG)'&&$alanturu<>'File(GIF)'&&$alanturu<>'File(MP4)') 


{

echo $alanadi."<br>";


if ($okusana[verigiristuru]!='Date'&&$okusana[verigiristuru]!='Multiselect'&&$okusana[verigiristuru]!='Secimlis')
{


$valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";


$alansorgusu=$alanadi;


if ($okusana[anahtaralan]!='True')


{

if ($okusana[verigiristuru]!='Textarea')
{
$updatesorgusu="SET $alanadi='".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";

if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
{

$updatesorgusu="SET $alanadi='".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."'";
}
}


if ($okusana[verigiristuru]=='Textarea')
{
$updatesorgusu="SET $alanadi=\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."\"";

if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
{

$updatesorgusu="SET $alanadi=\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."\"";
}
}


}
if ($okusana[anahtaralan]=='True')


{


$i=-1;


}


}


if ($okusana[verigiristuru]=='Multiselect'||$okusana[verigiristuru]=='Secimlis')

{

$konum = strpos($_POST[$alanadi], "|");


if ($konum== true) {
    
    
    
    $degera=str_replace("|", ";", degistir($_POST[$alanadi]));
    
    
 $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
    
}

else

if (count($_POST[$alanadi])==1||count($_POST[$alanadi])==0) {
    
    
    $degera=str_replace("|", ";", degistir($_POST[$alanadi][0]));
    
    
 $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
      $updatesorgusu=" set $alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($degera))."'";

}
else


if ($konum == false&&count($_POST[$alanadi])>1) {


$verisi="";
	 for($i=0;$i<=count($_POST[$alanadi]);$i++){

	  if ($verisi!='')
	 {
	     
	     if ($_POST[$alanadi][$i]!='')
	     {
	     
		 $verisi=$verisi.";".$_POST[$alanadi][$i]; 
	     }
	 }
	 
	 if ($verisi=='')
	 {
    $verisi=$_POST[$alanadi][$i];
	 }
	 
  }
  
  $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$verisi)."'";
  $updatesorgusu=" set $alanadi='".iconv( "UTF-8","ISO-8859-9",$verisi)."'";

}
$alansorgusu=$alanadi;



}


if ($okusana[verigiristuru]=='Date')


{


$valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";


$alansorgusu=$alanadi;


if ($okusana[anahtaralan]!='True')


{

$updatesorgusu="SET $alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";


}


if ($okusana[anahtaralan]=='True')


{


$i=-1;


}


}



}
if ($alanturu=='File(JPG)'||$alanturu=='File(PDF)'||$alanturu=='File(TIFF)'||$alanturu=='File(PNG)'||$alanturu=='File(PNG)'||$alanturu=='File(MP4)') 

{


if ($yol<>'')


{


$valuesorgusu="'".$yol."'";


$alansorgusu=$alanadi;



$updatesorgusu="SET $alanadi='".$yol."'";


}


}


}


if ($i>0)


{



if ($alanturu<>'File(JPG)'&&$alanturu<>'File(PDF)'&&$alanturu<>'File(TIFF)'&&$alanturu<>'File(PNG)'&&$alanturu<>'File(GIF)'&&$alanturu<>'File(MP4)') 


{


if ($okusana[verigiristuru]!='Date'&&$okusana[verigiristuru]!='Multiselect'&&$okusana[verigiristuru]!='Secimlis')


{



if ($okusana[verigiristuru]!='Textarea')
{

if ($alanadi!='mesaj'||$_GET[form_id]!='53')
{

$valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";
}

if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
{
    
$valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."'";

}
}


if ($okusana[verigiristuru]=='Textarea')

{

if ($alanadi!='mesaj'||$_GET[form_id]!='53')

{

$valuesorgusu=$valuesorgusu.",\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."\"";
}

if ($alanadi=='mesaj'&&$_GET[form_id]=='53')

{
$valuesorgusu=$valuesorgusu.",\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."\"";

}
}




if ($alanadi=="komisyontesekkulu")

{

$komisyontesekkulu=$_POST[$alanadi];

}

if ($alanadi=="imzametni")

{

$imzametni=$_POST[$alanadi];


}

if ($okusana[anahtaralan]!='True')


{

if ($okusana[verigiristuru]=='Textarea')
{
$updatesorgusu=$updatesorgusu.','."$alanadi=\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."\"";
}


if ($okusana[verigiristuru]!='Textarea')
{
$updatesorgusu=$updatesorgusu.','."$alanadi='".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";
}


}


}



if ($okusana[verigiristuru]=='Multiselect'||$okusana[verigiristuru]=='Secimlis')

{

$konum = strpos($_POST[$alanadi], "|");


if ($konum== true) {
    
    
    
    $degera=str_replace("|", ";", degistir($_POST[$alanadi]));
    
    
 $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
    
}

else

if (count($_POST[$alanadi])==1||count($_POST[$alanadi])==0) {
    
    
    $degera=str_replace("|", ";", degistir($_POST[$alanadi][0]));
    
    
 $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
      $updatesorgusu=$updatesorgusu.",$alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($degera))."'";

}
else


if ($konum == false&&count($_POST[$alanadi])>1) {


$verisi="";
	 for($i=0;$i<=count($_POST[$alanadi]);$i++){

	  if ($verisi!='')
	 {
	     
	     if ($_POST[$alanadi][$i]!='')
	     {
	     
		 $verisi=$verisi.";".$_POST[$alanadi][$i]; 
	     }
	 }
	 
	 if ($verisi=='')
	 {
    $verisi=$_POST[$alanadi][$i];
	 }
	 
  }
  
  $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$verisi)."'";
  $updatesorgusu=$updatesorgusu.",$alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($verisi))."'";

}



}


if ($okusana[verigiristuru]=='Date')


{


$valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";



if ($okusana[anahtaralan]!='True')


{

$updatesorgusu=$updatesorgusu.",$alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";


}



if ($okusana[anahtaralan]=='True')


{


$i=-1;

}


}

$alansorgusu=$alansorgusu.','.$alanadi;



}



if ($alanturu=='File(JPG)'||$alanturu=='File(PDF)'||$alanturu=='File(TIFF)'||$alanturu=='File(PNG)'||$alanturu=='File(PNG)'||$alanturu=='File(MP4)') 

{


if ($yol<>'')


{


$valuesorgusu=$valuesorgusu.",'".$yol."'";


$alansorgusu=$alansorgusu.",".$alanadi;




$updatesorgusu=$updatesorgusu.",$alanadi='".$yol."'";



}



}



}

}


$i=$i+1;


}

}

$alanca=$_GET[alanca];

if ($kayitid=='')
{
//kardeşim

if ($_GET[form_id]!="108")
{


  $sql=$db->prepare("select * from bildirimkurallari where olay='".iconv( "UTF-8","ISO-8859-9","Kayıt Ekleme")."' ");
  $sql->execute();
    if($sql !== false)
{
while ($notificat = $sql-> fetch(PDO::FETCH_ASSOC))
{
    

    $deger1=$notificat[deger1];
    $deger2=$notificat[deger2];
    $deger3=$notificat[deger3];
    $deger4=$notificat[deger4];
    $bildirimtext = $notificat[bildirimtext];
    $bildirimunvan = $notificat[departmanadi];
    $bildirimkisi = $notificat[bildirimkisi];
      
    if($_GET[form_id]==$notificat[formadi]){
        
        if($bildirimunvan!=''){
            
             $sql=$db->prepare("select * from kullanicilar where unvani=? ");
           $sql->execute([$bildirimunvan]);
           
           while ($oku= $sql ->fetch(PDO::FETCH_ASSOC))
  {
     
            $id=$oku[user_indeks];
            
            $cc = $_POST[$deger1];
            $cx = $_post[$deger2];
            $cz = $_POST[$deger3];
            $cy = $_POST[$deger4];
            
              $eski   = array("[deger1]","[deger2]", "[deger3]","[deger4]");
              $yeni  = array(iconv( "UTF-8","ISO-8859-9",$cc),iconv( "UTF-8","ISO-8859-9",$cx),iconv( "UTF-8","ISO-8859-9",$cz),iconv( "UTF-8","ISO-8859-9",$cy));
                                     
              $newphrase = str_replace($eski,$yeni, $bildirimtext);
            
             
           
             $eklece=$db->prepare("INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('".iconv( "UTF-8","ISO-8859-9","Yeni Kayıt")."','".$newphrase."','$tarih','$saat','','','".$id."')");
        $eklece->execute();
             
  }
            
}
}
else {
    $dilimler = explode(";",$bildirimkisi);
    
    for($i=0;$i<count($dilimler);$i++)
    {
        $sql=$db->prepare("select * from kullanicilar where username=?");
        
        $sql->execute([$dilimler[$i]]);
        
        while ($yet=$sql -> fetch (PDO:: FETCH_ASSOC))
        {
            $id = $yet[user_indeks];
            
            $cc = $_POST[$deger1];
            $cx = $_post[$deger2];
            $cz = $_POST[$deger3];
            $cy = $_POST[$deger4];
            
            $eski = array("[deger1]","[deger2]","[deger3]","[deger4]");
 $yeni  = array(iconv( "UTF-8","ISO-8859-9",$cc),iconv( "UTF-8","ISO-8859-9",$cx),iconv( "UTF-8","ISO-8859-9",$cz),iconv( "UTF-8","ISO-8859-9",$cy));
             
            
            $newphrase= str_replace($eski,$yeni,$bildirimtext.'--'.$notificat[formadi]);
            
            $sql=$db -> prepare ("insert into bildirimler values(NULL,'Bilgi','$newphrase','$tarih','$zaman','','','$id','$tarih','','','','false','','','')"); 
            
            $sql-> execute();
            
        }
    }
  }
  

 }
}  

    if($form_id=='381'){
            $c=$alansorgusu.',kayittarihi,sonduzenlemetarihi';
            $e =$valuesorgusu.",'$tarih','$tarih'  ";

    }else{
            $c=$alansorgusu.',kayittarihi,sonduzenlemetarihi,olusturan,deleted';
            $e =$valuesorgusu.",'$tarih','$tarih','$_GET[userid]' ,'false' ";

    }

   $sorgu="insert into $tablosu ($c) values(".$e.") ";
   
echo $sorgu;

}

if ($_GET[form_id]=="108")
{
$sorgu="insert into $tablosu ($alansorgusu) values(".iconv( "UTF-8","ISO-8859-9",$valuesorgusu).")";


if ($_POST['tumunegonder']!='')
{
    
   $sql=$db->prepare("select * from kullanicilar where username=?");
   
   $sql->execute([$dilimler[$i]]);
   
   while($okut = $sql -> fetch(PDO::FETCH_ASSOC))
   

{
$numaralar=$numaralar.";".$okut['telefonu'];
}

	
}
$sorgu=str_replace('##',$numaralar,$sorgu);
}

}

if ($kayitid<>'')
{

	if ($_GET[form_id]!="75" && $_GET[form_id]!='491')
	{
    echo 'Girdi';
	    $sql =$db->prepare("select * from bildirimkurallari where olay='".iconv( "UTF-8","ISO-8859-9","Kayıt Güncelleme")."' ");
      $sql-> execute();
      
      while( $notificat = $sql -> fetch(PDO::FETCH_ASSOC))
      {     
                 $deger1=$notificat[deger1];
                 $deger2=$notificat[deger2];
                 $deger3=$notificat[deger3];
                 $deger4=$notificat[deger4];

                 $bildirimtext = $notificat[bildirimtext];
                 $bildirimunvan = $notificat[departmanadi];
                 $bildirimkisi = $notificat[bildirimkisi];

          if($_GET[form_id]==$notificat[formadi])
            {
            
                  if($bildirimunvan!=''){
                  
                  
                      $sql =$db->prepare("select * from kullanicilar where unvani=?");
                      $sql -> execute([$bildirimunvan]);
                  
                      while ($yet=$sql -> fetch(PDO::FETCH_ASSOC))
                      {
                           $id = $yet[user_indeks];
                      
                                                  $cc = $_POST[$deger1];
                                                  $cx = $_POST[$deger2];
                                                  $cz = $_POST[$deger3];
                                                  $cy = $_POST[$deger4];
                      
                      
                                              $eski   = array("[deger1]", "[deger2]", "[deger3]","[deger4]");
                      
                                             $yeni  = array(iconv( "UTF-8","ISO-8859-9",$cc),iconv( "UTF-8","ISO-8859-9",$cx),iconv( "UTF-8","ISO-8859-9",$cz),iconv( "UTF-8","ISO-8859-9",$cy));
             
                      
                                              $newphrase = str_replace($eski,$yeni, $bildirimtext);
                      
                                             
             $eklece=$db->prepare("INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('".iconv( "UTF-8","ISO-8859-9","Kayıt Güncellendi")."','".$newphrase."','$tarih','$saat','','','".$id."')");
        $eklece->execute();
                      
                      }
                }
                  else{
                  
                                  $dilimler = explode(";",$bildirimkisi);
                  
                                 for($i=0;$i<count($dilimler);$i++)
                                 { 
                                     $sql=$db->prepare("select * from kullanicilar where username=?");
                                     $sql-> execute([$dilimler[$i]]);
                                
                                     while ($yet=$sql -> fetch(PDO::FETCH_ASSOC))
                                     {
                                      $id = $yet[user_indeks];
                                    
                                                  $cc = $_POST[$deger1];
                                                  $cx = $_POST[$deger2];
                                                  $cz = $_POST[$deger3];
                                                  $cy = $_POST[$deger4];
                                    
                                    
                                              $eski   = array("[deger1]", "[deger2]", "[deger3]","[deger4]");
                                              $yeni  = array(iconv( "UTF-8","ISO-8859-9",$cc),iconv( "UTF-8","ISO-8859-9",$cx),iconv( "UTF-8","ISO-8859-9",$cz),iconv( "UTF-8","ISO-8859-9",$cy));
             
                                    
                                              $newphrase = str_replace($eski,$yeni, $bildirimtext);
                                    
                                            
             $eklece=$db->prepare("INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('".iconv( "UTF-8","ISO-8859-9","Yeni Kayıt")."','".$newphrase."','$tarih','$zaman','','','".$id."')");
        $eklece->execute();
                                     }
                                   
                        }
                 }
               
            }
          
      }
    
          $m=$updatesorgusu.",sonduzenlemetarihi='$tarih',sonduzenleyen='$_GET[userid]' ";


      $sorgu="update $tablosu ".$m." where $tablosu.$alancak=$kayitid";


	}
	
	if ($_GET[form_id]=="75")
	{  
    $sorgu="update $tablosu ".iconv( "UTF-8","ISO-8859-9",$updatesorgusu).",kiradurumu='".iconv( "UTF-8","ISO-8859-9","Teslim Alındı")."' where $alancak=$kayitid";
	}

}





if($hata=='')


{

$sorgu=str_replace("''","null",$sorgu);


echo $sorgu;

    $kayitgonder=$db->prepare($sorgu);
    $kayitgonder ->execute();
    
    
    //ürün satış kayıtlarının etki etmesi
    
  -
    include 'baglanti.php';
    
    if ($_GET[form_id]=='742')
    {
        $sql="select carihesaphareketleri.*,cariler.caritanimi as musteriadi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where carihesaphareketleri.deleted='false' and (islendi='' or isnull(islendi)) and stok_index<>''";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{

   
         mysqli_query($connection,"delete from stokhareketleri where islemindex=".$okut[index_carihesaphareketleri]);
         $malzemeid=$okut[stok_index];
     $tarih=$okut[tarih];
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Ürün Satışı');
       $hareketsaati=$saat;
       $miktar=$okut[miktar];
       $belgeno=$okut[hareketkodu];
       $aciklama=$okut[musteriadi].iconv( "UTF-8","ISO-8859-9"," isimli müşteriye satış");
       $islemyeri='1';
       $olusturanform='742';
       $fiyati=$okut[brfiyat];
       $olusturanid=$okut[index_carihesaphareketleri];
       mysqli_query($connection,"insert into stokhareketleri(belgeno,harekettarihi,hareketturu,islemmiktari,islemyeri,aciklama,stok_index,dishekimi,satisfiyati,kayittarihi,sonduzenlemetarihi,olusturan,deleted,islemindex) values('$belgeno','$tarih','$hareketturu','$miktar','MAMUL DEPO-1','$aciklama',$malzemeid,'','$fiyati','$tarih','$tarih','1' ,'false',$olusturanid)");
       
    
    mysqli_query($connection,"update carihesaphareketleri set islendi='E' where index_carihesaphareketleri=".$okut[index_carihesaphareketleri]);
}
    
    
        
    }
    
    
    
    
 

if ($kayitid=='')

{   
    $sql=$db-> prepare("SHOW INDEX FROM $tablosu WHERE Key_name = 'PRIMARY'");
    $sql ->execute();
 
 while($yokn = $sql -> fetch(PDO::FETCH_ASSOC))

{
    	$alancak=$yokn[Column_name];
														
}

 $sql=$db-> prepare("select * from $tablosu order by $alancak desc limit 1");
 $sql -> execute();
 
 while ($getir = $sql ->fetch(PDO::FETCH_ASSOC))
 {
        $gelecekid=$getir[$alancak];
 }


  $sql=$db-> prepare("select * from bloklar left join formlar on bloklar.bagliformindex=formlar.form_index where formindex=? and bloklar.turu='Liste' order by bloklar.sirasi asc,bokindex asc");
$sql-> execute([$form_id]);

while ($ykn =$sql ->fetch(PDO::FETCH_ASSOC))
{
      $sql=$db-> prepare("update ".$ykn['tablosu']." set ".$ykn['detailfield']."='".$gelecekid."' where ".$ykn['detailfield']."=? ");
      $sql-> execute([$_GET["tokenid"]]);
}


}


    
   
}

$zaman=date("H:i:s");


$saat=$zaman;


$tarih=date("Y-m-d");


if ($kayitid=='')

{

$sql=$db->prepare("show table status from netbulut_netlaminatdb where name=?");

$sql ->execute([$oku[tablosu]]);

while ($okut=$sql ->fetch(PDO::FETCH_ASSOC))

{
    $kaym=$okut[Auto_increment];
}
$sql=$db->prepare("insert into kullaniciloglari values(NULL,'".$_SESSION["user_id"]."','$tarih','$zaman','".$oku[formtanimi]."','".iconv( "UTF-8","ISO-8859-9","Yeni Kayıt")."','$kaym','')");

$sql->execute();


}



if ($kayitid<>'')

{
$sql=$db ->prepare ("insert into kullaniciloglari values(NULL,'".$_SESSION["user_id"]."','$tarih','$zaman','".$oku[formtanimi]."','".iconv( "UTF-8","ISO-8859-9","Güncelleme")."','$kayitid','')");

$sql -> execute();
}


    
}






?>

	
								

             









<?php





}
















?>