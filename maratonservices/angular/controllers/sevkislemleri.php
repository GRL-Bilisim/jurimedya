<?php
    

    echo "RR";

    date_default_timezone_set("Turkey");


    if($_GET['page_id']=='sevkedildi')
{



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[kayitid];
   $userid = $_GET[userid];


           $sql=$db->prepare("update uretimpaletleri set sevkid=? where index_uretimpaletleri=? limit 1");
           
                 $sql->execute([$_GET['kayitid'],$recordid]);


           
          
  
                 echo "[{\"status\":\"SUCREZ\"}]";

}


if($_GET['page_id']=='sevkonayla')
{



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


           $sql=$db->prepare("update stokhareketleri set sonduzenlemetarihi='$tarih',sonduzenleyen='$userid', hareketturu='".iconv( "UTF-8","ISO-8859-9",'Sevk Bekliyor')."',belgeno='".iconv( "UTF-8","ISO-8859-9",$_GET['belgeno'])."' where index_stokhareketleri=? limit 1");
           
                 $sql->execute([$recordid]);


           
          
  

}


if($_GET['page_id']=='sevkreddet')
{

    date_default_timezone_set("Turkey");



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $rednedeni = $_GET[rednedeni];
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];
   

   $sql=$db->prepare("update stokhareketleri set  notlar='".iconv( "UTF-8","ISO-8859-9",$rednedeni)."',sonduzenlemetarihi='$tarih',sonduzenleyen='$userid', hareketturu='".iconv( "UTF-8","ISO-8859-9",'Sevk Reddedildi')."' where index_stokhareketleri=? limit 1");
           
            $sql->execute([$recordid]);
      

            echo "[{\"status\":\"SUCREZ\"}]";
   


}






?>