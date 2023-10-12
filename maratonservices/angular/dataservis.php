<?php
ini_set('max_execution_time', '300');
ini_set('memory_limit', -1);



header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

function escapeNewLineChars($valueToEscape) {
   if ($valueToEscape != null && $valueToEscape != "") {
      return $valueToEscape.replace("\n", " ");
   } else {
      return $valueToEscape;
   } 
}

ob_start();


function smsgonderfunc($telefon,$mesaj){
    ?>
    <html lang="en">
                  <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <!-- Required meta tags -->
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                
                    <!-- Bootstrap CSS -->
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                  </head>
                  <body>
                   <?php
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL,"http://api2.ekomesaj.com/json/syncreply/SendInstantSms");
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                        'Content-Type: application/json'                                                                     
                    )); 
                    curl_setopt($ch, CURLOPT_POSTFIELDS,
                              '{
                        "Credential": {
                            "Username": "5327134271",
                            "Password": "5327134271",
                            "ResellerID": 2174
                        },
                        "Sms": {
                            "ToMsisdns": [
                			{
                            "Msisdn":9'.$telefon.',
                            "Name": "",
                            "Surname": "",
                            "CustomField1": ""
                                } 
                            ],
                            "ToGroups": [],
                            "IsCreateFromTeplate": false,
                            "SmsTitle": "DR.C.VURAL",
                            "SmsContent": "'.$mesaj.'",
                            "RequestGuid": "",
                            "CanSendSmsToDuplicateMsisdn": false,
                            "SmsSendingType": "ByNumber",
                            "SenderName": "DR.C.VURAL",
                            "Route": 0,
                            "ValidityPeriod": 0,
                            "DataCoding": "Default"
                        }
                    }');
                
                // In real life you should use something like:
                // curl_setopt($ch, CURLOPT_POSTFIELDS, 
                //          http_build_query(array('postvar1' => 'value1')));
                
                // Receive server response ...
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                $server_output = curl_exec($ch);
                
                curl_close ($ch);

                    ?>
                
                    <!-- Optional JavaScript -->
                    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                  </body>
                </html>
    <?php
}

ini_set('display_errors', 0);

error_reporting(E_ERROR | E_WARNING | E_PARSE); 


if (!isset($_SESSION)) {

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'pdo_baglanti.php';

 header("Access-Control-Allow-Origin: *");

if ($_GET['page_id']!="teksayfa")
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
            $colm[]='"'.$key.'":"'.preg_replace( "/\r|\n/", "", str_replace('"',"'",$og)).'"';
            }
            
            if ($key!='islemmenu')
            {
                
                
                
                $sirasi=array_search($key, $pieces);
                
                if ($_GET[sutunlar]!='')
                {
                if (false !== $sirasi||$key=='id') {
      $colm[]='"'.$key.'":"'.iconv( "ISO-8859-9","UTF-8",$og).'"';
          }
                }
                
                  if ($_GET[sutunlar]=='')
                {
                   $colm[]='"'.$key.'":"'.preg_replace( "/\r|\n/", "", iconv( "ISO-8859-9","UTF-8",$og)).'"';   
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

  
function json_formgeir($dizi){
    

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
                // yeni eklendi sutunlar if bloğu
                  if($_GET['sutunlar']==''){
                    $colm[]='"'.$key.'":"'.preg_replace( "/\r|\n/", "", iconv( "ISO-8859-9","UTF-8",$og)).'"';   

                  }else{
                    $sirasi=array_search($key, $pieces);
                    if (false !== $sirasi||$key=='id'||$key=='renklendirme') {
          $colm[]='"'.$key.'":"'.preg_replace( "/\r|\n/", "", iconv( "ISO-8859-9","UTF-8",$og)).'"';
              }
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



if($_GET['page_id']=='widgetbaslik'){
       include 'baglanti.php';

       
       $query = "select * from widgetler where deleted='false' order by sirasi";
      
           $sorgula=mysqli_query($connection,$query);
           
    
                                            
            $rows = array();
        while($row=mysqli_fetch_assoc($sorgula))
        
        $kayitlar[]=$row;
        
        
        echo json_turkce(($kayitlar));
    
   }
   
   
     if($_GET['page_id']=='tedavisec'){
           include 'baglanti.php';

         
             $sql=$db->prepare("select * from usertakip where userid=".$_GET['userid']);
        $sql->execute();
        
                      if($sql !== false)
{
    $kayitsayisi=0;
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  mysqli_query($connection,"update usertakip set secilenislem='".iconv( "UTF-8","ISO-8859-9",$_GET['tedavi'])."' where userid=".$_GET['userid']);
                  
                  $kayitsayisi++;
              }
              if ($kayitsayisi==0)
              {
       mysqli_query($connection,"insert into usertakip(index_usertakip,secilenislem,userid) values(null,'".iconv( "UTF-8","ISO-8859-9",$_GET['tedavi'])."',".$_GET['userid'].")");
      
              }
}
else
{
    
   mysqli_query($connection,"insert into usertakip(index_usertakip,secilenislem,userid) values(null,'".iconv( "UTF-8","ISO-8859-9",$_GET['tedavi'])."',".$_GET['userid'].")");
                  
}
         
     }
     
     
       
     if($_GET['page_id']=='doktorsec'){
         
           include 'baglanti.php';

             $sql=$db->prepare("select * from usertakip where userid=".$_GET['userid']);
        $sql->execute();
        
                      if($sql !== false)
{
    

    $kayitsayisi=0;
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  mysqli_query($connection,"update usertakip set secilendoktor='".iconv( "UTF-8","ISO-8859-9",$_GET['doktor'])."' where userid=".$_GET['userid']);
                  
         
                  
                     $kayitsayisi++;
              }
              
              if ($kayitsayisi==0)
              {
                 mysqli_query($connection,"insert into usertakip(index_usertakip,secilendoktor,userid) values(null,'".iconv( "UTF-8","ISO-8859-9",$_GET['doktor'])."',".$_GET['userid'].")");
        
              }
}
else
{
       mysqli_query($connection,"insert into usertakip(index_usertakip,secilendoktor,userid) values(null,'".iconv( "UTF-8","ISO-8859-9",$_GET['doktor'])."',".$_GET['userid'].")");
                  
}
         
     }
   
   
   if($_GET['page_id']=='widgetalti'){
       include 'baglanti.php';

       
    
       
                $sql=$db->prepare("select * from widgetalti where deleted='false'");
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                 
                 
                 $sql2=$db->prepare($okut['sorgu']);
        $sql2->execute();
        
        $degerler='';
        $etiketler='';
                      if($sql !== false)
{
            while( $okut2 =$sql2->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  if ($okut['tipi']=='Tek Veri')
                  {
                   mysqli_query($connection,"update widgetalti set deger='".$okut2['ozet']."' where index_widgetalti=".$okut[index_widgetalti]);
                  }
                  
                   if ($okut['tipi']!='Tek Veri')
                  {
                      if ($degerler!='')
                      {
                          $degerler=$degerler.";".$okut2['ozet'];
                          $etiketler=$etiketler.";".$okut2['etiket'];
                      }
                      else
                      {
                          $degerler=$okut2['ozet'];
                          $etiketler=$okut2['etiket'];  
                      }
                      
                  }
                  
              }
              
               if ($okut['tipi']!='Tek Veri')
                  {
                      
                     mysqli_query($connection,"update widgetalti set degerler='".$degerler."',etiketler='".$etiketler."' where index_widgetalti=".$okut[index_widgetalti]);
                    
                  }
                 
                  
                  
              }
}
    
    
}
       
       $query = "select * from widgetalti where deleted='false' order by sirasi";
      
           $sorgula=mysqli_query($connection,$query);
           
    
                                            
            $rows = array();
        while($row=mysqli_fetch_assoc($sorgula))
        
        $kayitlar[]=$row;
        
        
        echo json_turkce(($kayitlar));
    
   }

    
if($_GET['page_id']=='kullanicigirisi'){
       include 'baglanti.php';
       $username = $_GET[username];
       $password = $_GET[password];
       
       $query = "select *,concat_ws('','https://www.angosgps.com/maratonservices/',resim) as profilresim from kullanicilar where username='$username' and pass='$password' ";
      
           $sorgula=mysqli_query($connection,$query);
           
    
                                            
            $rows = array();
        while($row=mysqli_fetch_assoc($sorgula))
        
        $kayitlar[]=$row;
        
        
        echo json_turkce(($kayitlar));
    
   }
   
   
   
      if($_GET['page_id']=='onecikar'){
      include 'pdo_baglanti.php';
   
       $query = "update hizmettanimlari set onecikar='E' where index_hizmettanimlari=".$_GET[id];
       
   $dc=$db->prepare($query);
       $dc->execute();     
      
         
               echo "[{\"status\":\"OK\"}]";

    
   }
   
   
   
   //kvkk onam mesajı gonder
   
   
   if($_GET['page_id']=='kvkkonaylandi')
    {
        
         $query = "update cariler set kvkk='OK' where cariindex=".$_GET['recordid'];
       
   $dc=$db->prepare($query);
       $dc->execute();  
    }
   
   if($_GET['page_id']=='kvkkgonder')
    {
        
        
        $guvenlikkodu=sifre_uret2(5);
        
              $sql=$db->prepare("select * from cariler where deleted='false' and cariindex=".$_GET['recordid']);
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  $musteriadi=iconv( "ISO-8859-9","UTF-8",$okut[caritanimi]);
                   $telefon=iconv( "ISO-8859-9","UTF-8",$okut[yetkiligsm]);
                  
                  
              }
}


         $query = "update cariler set gonderilenkod='$guvenlikkodu' where cariindex=".$_GET['recordid'];
       
   $dc=$db->prepare($query);
       $dc->execute(); 
        
            $sql=$db->prepare("select * from kvkkmesajlari where deleted='false' ");
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  $mesaj=iconv( "ISO-8859-9","UTF-8",$okut['mesajicerigi']);
                  
                  $mesaj='Sn '.$musteriadi.' '.$mesaj;
                  
                  if ($okut['sonunakodekle']=='E')
                  {
                      $mesaj=$mesaj." Kod:".$guvenlikkodu;
                  }
                  smsgonderfunc($telefon,$mesaj);
                  //buraya da sms kodu yaz
                  ?>
                         
                  <?php
                  
                  
                  
              }
}
}
   
   //bekleyen randevu hatırlatmaları gönderiliyor
   
        $sql=$db->prepare("select * from randevuhatirlatma where (isnull(gonderim) or gonderim='') and deleted='false' ");
        $sql->execute();
        
                      if($sql !== false)
{
    
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                                $ilkhatirtarih = $okut['hatirlatilacakgun'];
                                $sonhatirtarih = $okut['hatirlatmasongun'];
                                $hatirlatmamesaji=iconv( "ISO-8859-9","UTF-8",$okut['hatirlatmamesaji']);


                              //randevu hatırlatma işlemi burada yapılacak hatirlatilacakilkgun ve hatirlatmasongun arasındaki silinmemiş ya da iptal edilmemiş randevulara hatırlatma mesajı gönderilecek
                                $randevufiltrele = $db->prepare("select cariler.yetkiligsm,randevular.randevu_tarih,randevular.randevu_saat,randevular.musteri_kodu,randevular.musteri_adi,randevular.bitis_saati from randevular left join cariler on cariler.cariindex=randevular.musteri_kodu where ( randevu_tarih>='$ilkhatirtarih' and randevu_tarih<='$sonhatirtarih' ) and ( randevular.durumu='Beklemede' or randevular.durumu like '%Erteledi%' or randevular.durumu like 'De%') and randevular.deleted='false' ");
                                $randevufiltrele->execute();
                           
                                while($okutrand =$randevufiltrele->fetch(PDO::FETCH_ASSOC)){
                                    
                                    $adi = iconv('ISO-8859-9','UTF-8',$okutrand['musteri_adi']);
                                    $tarih = $okutrand['randevu_tarih'];
                                    $saat = $okutrand['randevu_saat'];
                                    
                                    $eski   = array("[ADI]","[TARIH]", "[SAAT]");
                                    $yeni  = array($adi,$tarih,$saat);
                                     
                                    $newphrase = str_replace($eski,$yeni, $hatirlatmamesaji);
                                    
                                            //yukarıdaki hatirlatmamesaji alanında mesajda ilgili yerler randevuya göre değiştirilecek herkese ayrı bir mesaj gidecek haliylen. 
                              
                                            //örnek: SAYIN [ADI] SALONUMUZDA [TARIH] TARIHINDE [SAAT] SAATLI RANDEVUNUZ BULUNMAKTADIR. LUTFEN RANDEVUNUZA ZAMANINDA GELINIZ
                                           
                                           ?>	


                <!doctype html>
                <html lang="en">
                  <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <!-- Required meta tags -->
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                
                    <!-- Bootstrap CSS -->
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                  </head>
                  <body>
                   <?php
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL,"http://api2.ekomesaj.com/json/syncreply/SendInstantSms");
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                        'Content-Type: application/json'                                                                     
                    )); 
                    curl_setopt($ch, CURLOPT_POSTFIELDS,
                              '{
                        "Credential": {
                            "Username": "5327134271",
                            "Password": "5327134271",
                            "ResellerID": 2174
                        },
                        "Sms": {
                            "ToMsisdns": [
                			{
                            "Msisdn":9'.$okutrand['yetkiligsm'].',
                            "Name": "",
                            "Surname": "",
                            "CustomField1": ""
                                } 
                            ],
                            "ToGroups": [],
                            "IsCreateFromTeplate": false,
                            "SmsTitle": "DR.C.VURAL",
                            "SmsContent": "'.$newphrase.'",
                            "RequestGuid": "",
                            "CanSendSmsToDuplicateMsisdn": false,
                            "SmsSendingType": "ByNumber",
                            "SenderName": "DR.C.VURAL",
                            "Route": 0,
                            "ValidityPeriod": 0,
                            "DataCoding": "Default"
                        }
                    }');
                
                // In real life you should use something like:
                // curl_setopt($ch, CURLOPT_POSTFIELDS, 
                //          http_build_query(array('postvar1' => 'value1')));
                
                // Receive server response ...
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                $server_output = curl_exec($ch);
                
                curl_close ($ch);

                    ?>
                
                    <!-- Optional JavaScript -->
                    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                  </body>
                </html>
<?php

			                                            
                                            
                                            
                                }
                                
                                
                                
                              //tüm randevular hatırlatıldıktan sonra burası çalışacak
                                $query = "update randevuhatirlatma set gonderim='OK' where index_randevuhatirlatma=".$okut['index_randevuhatirlatma'];
       
                                $dc=$db->prepare($query);
                                $dc->execute(); 
                              
                              
                              
              }
}
   
   
    
      if($_GET['page_id']=='onecikar_gerial'){
      include 'pdo_baglanti.php';
   
       $query = "update hizmettanimlari set onecikar='H' where index_hizmettanimlari=".$_GET[id];
       
   $dc=$db->prepare($query);
       $dc->execute();     
      
         
               echo "[{\"status\":\"OK\"}]";

    
   }
   
   
   if($_GET['page_id']=='istasyonlar'){
       include 'baglanti.php';
       $username = $_GET[username];
       $password = $_GET[password];
       
       $query = "select firmaistasyonlari.*,sirketler.sirketunvani,count(index_depolar) as deposayisi from firmaistasyonlari left join sirketler on sirketler.index_sirketler=firmaistasyonlari.firmaid left join depolar on (depolar.istasyonid=firmaistasyonlari.index_firmaistasyonlari and depolar.deleted='false') where firmaistasyonlari.deleted='false' group by firmaistasyonlari.index_firmaistasyonlari";
      
           $sorgula=mysqli_query($connection,$query);
           
    
                                            
            $rows = array();
        while($row=mysqli_fetch_assoc($sorgula))
        
        $kayitlar[]=$row;
        
        
        echo json_turkce(($kayitlar));
    
   }
   
   
     if($_GET['page_id']=='depostokdurumlari'){
       include 'baglanti.php';
       $username = $_GET[username];
       $password = $_GET[password];
       
       $query = "SELECT *,round(depoturleri.depokapasitesi*(depoturleri.yukseklik-angoscihazlar.sonmesafe)/depoturleri.yukseklik) as depodurumu,round(100*(depoturleri.depokapasitesi*(depoturleri.yukseklik-angoscihazlar.sonmesafe)/depoturleri.yukseklik)/depoturleri.depokapasitesi) as yuzdesi FROM depolar left join stokturleri on stokturleri.index_stokturleri=depolar.depomalzeme left join angoscihazlar on angoscihazlar.imeino=depolar.cihazimei left join firmaistasyonlari on firmaistasyonlari.index_firmaistasyonlari=depolar.istasyonid left join depoturleri on depoturleri.index_depoturleri=depolar.depoturu where depolar.deleted='false'";
      
           $sorgula=mysqli_query($connection,$query);
           
    
                                            
            $rows = array();
        while($row=mysqli_fetch_assoc($sorgula))
        
        $kayitlar[]=$row;
        
        
        echo json_turkce(($kayitlar));
    
   }


   


date_default_timezone_set("Turkey");

 $saat=date("H:i:s");
 
 

$tarih=date("Y-m-d");

 
 
         // Kullanıcı Menüsü Servisi
     include 'controllers/kullanicimenusu.php';
        
        // Kullanıcı Girişi Kontrol Servisi
    include 'controllers/kullanicigetir.php';
    
       // Tablo Getirme Servisi
    include 'controllers/formgetir.php';

       // Tablodaki Alanları Getirme Servisi
    include 'controllers/formalanlari.php';


     // Form Bilgileri Getirme Servisi
    include 'controllers/formbilgisi.php';
    
    
  // Kayıt düzenle gelen veriler Servisi
    include 'controllers/formverileri.php';



    
    
    // Listedeki Alanları Getirme Servisi
    include 'controllers/listealanlari.php';


  // form bloklar Getirme Servisi
    include 'controllers/bloklar.php';

  // form bloklar alanları Getirme Servisi
  include 'controllers/blokalanlari.php';

  // form tüm alanları Getirme Servisi
  include 'controllers/tumalanlar.php';




  // kullanıcı sifre guncelleme Servisi
    include 'controllers/kullanicisifreguncelle.php';



  // kullanıcı bilgileri guncelleme Servisi
    include 'controllers/kullaniciguncelle.php';


  // kullanıcıları getirme Servisi
    include 'controllers/kullanicilarigetir.php';

  // kullanıcı mesajlaşma Servisi
    include 'controllers/messagging.php';

  // kullanıcı mesajları Servisi
    include 'controllers/getmessage.php';
    
  // kullanıcı mesajları Servisi
    include 'controllers/getmessagebyuser.php';


  // tümünü okundu yap Servisi
    include 'controllers/messageallread.php';
         
  // birini okundu yap Servisi
    include 'controllers/messagereadyap.php';

      // kayıt sil Servisi
    include 'controllers/deleterecord.php';                                  
    
      // list masterfield Servisi
    include 'controllers/mastervalue.php';                                  
    
    // formları getir Servisi
    include 'controllers/dbtablolar.php';

    
    // todo list getir Servisi
    include 'controllers/todolist.php';

    // todo update  Servisi
    include 'controllers/todoguncelle.php';
    
    // todo sil  Servisi
    include 'controllers/todosil.php';
    
    // gelişmiş filtreleme Servisi
    include 'controllers/gelismisfiltreleme.php';
    
    // seçilen iş emri analiz istatistik Servisi
    include 'controllers/isemrianaliz.php';
    
    // seçilen iş emri kalite istatistik Servisi
    include 'controllers/isemrikalite.php';
    
    // Duruş Gruplarını Çekme Servisi
    include 'controllers/durusicerik.php';
    
    // Fire Nedenlerini Çekme Servisi
    include 'controllers/isemrifire.php';
    
    // Sipariş Rezerve Servisi
    include 'controllers/siparisrezervyap.php';
    
    // Sipariş Üretim Emri Servisi
    include 'controllers/siparisuretimemri.php';
    
    // Sevk Üretim Emri Servisi
    include 'controllers/sevkemri.php';
       
    // Sevk Onay Red  İşlemleri Servisi
 

    // Personel Polivalans Ekleme Servisi
    include 'controllers/perpolivalansekle.php';
    
    // Personel Çalıştığı İstasyon Güncelleme Servisi
    include 'controllers/isgucuistasyon.php';
 
        // Personel Çalıştığı İstasyon Güncelleme Servisi
    include 'controllers/uretimbaslat.php';
    
          // Satınalma GKK  Servisi
    include 'controllers/girdikabulicerik.php';

       // Form Favoriler Servisi
    include 'controllers/favoriler.php';
    
    // Üretim Emirleri formu pres grubu seçtidiğinde kalip karşılık no gelmesi
    include 'controllers/isistasyonpreskalip.php';

    include 'controllers/isistasyonufiltre.php';


    // Malzemeler tablosu combobox verileri servisi
    include 'controllers/malzemelersonguncelleme.php';


    // bekleyen fırsat kalemlerini teklife dönüştür
    include 'controllers/firsatteklifedonustur.php';

        // bekleyen fırsat kalemlerini siparişe dönüştür
        include 'controllers/firsatsiparisedonustur.php';

        // gant istatistik verileri
        include 'controllers/gantistatistik.php';

         // Tablodaki Alanların Sıralaması Değiştirme
    include 'controllers/listesiralariniguncelle.php';

    //gider kalemlerini otomatik doldurma
    include 'controllers/otomatikdoldur.php';


    include 'controllers/satinalmamaliyetleri.php';

    include 'controllers/mixislemleri.php';


        //sarj girdileri otomatik doldurma
        include 'controllers/sarjdoldur.php';


                //mix kalite onay red işlemleri form id 670
                include 'controllers/kaliteislemleri.php';


    //******************************* SCRIPTS SERVICE ********************************** //
    
    // alt tablo buton yönlendirmesi
    include 'scripts/formyonlendirme.php';
    
    // ilgili kisi getir Script servisi
    include 'scripts/ilgilikisigetir.php';
    
    // Tedarikci Firma Karsilik Script servisi
    include 'scripts/tedarikcifirmakarsilik.php';
    
    include 'scripts/firmakarsilik.php';

    include 'scripts/faturatoplamhesapla.php';
    
    include 'scripts/malzemebilgisigetir.php';
    
    include 'scripts/gozadedigetir.php';
    
    include 'scripts/guncelkurgetir.php';

    include 'controllers/prosesalanlari.php';
  include 'controllers/prosesverileri.php';

  include 'controllers/recetedenemeleri.php';

  include 'controllers/talepislemleri.php';

  include 'controllers/recetedoldur.php';
  include 'controllers/malzemeturugetir.php';

  include 'controllers/toplamkilo.php';
  
  if ($_GET[formid]=='419'||$_GET[formid]=='758')
  {
     include 'controllers/faturayansit.php';  
  }

?>