<?php
    

    date_default_timezone_set("Turkey");



    if($_GET['page_id']=='siparisonayla')
    {

        $zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


   $sql=$db->prepare("update satinalma set siparisdurumu='".iconv( "UTF-8","ISO-8859-9",'Onaylandı')."' where index_satinalma=? and siparisdurumu='".iconv( "UTF-8","ISO-8859-9",'Finans Onayı Bekliyor')."' limit 1");
           
   $sql->execute([$recordid]);

           $sql=$db->prepare("update satinalma set siparisdurumu='".iconv( "UTF-8","ISO-8859-9",'Finans Onayı Bekliyor')."' where index_satinalma=? and siparisdurumu='".iconv( "UTF-8","ISO-8859-9",'Yönetim Onayı Bekliyor')."' limit 1");
           
                 $sql->execute([$recordid]);

    }

if($_GET['page_id']=='taleponayla')
{



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


           $sql=$db->prepare("update talepicerigi set durumu='".iconv( "UTF-8","ISO-8859-9",'Teklif Bekliyor')."' where index_talepicerigi=? limit 1");
           
                 $sql->execute([$recordid]);


//mamul kartına gönder
           
          
  

}


if($_GET['page_id']=='talepreddet')
{

    date_default_timezone_set("Turkey");



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];
   

           $sql=$db->prepare("update talepicerigi set durumu='Talep Reddedildi',rednedeni='".iconv( "UTF-8","ISO-8859-9",$_GET['rednedeni'])."' where index_talepicerigi=? limit 1");
           
            $sql->execute([$recordid]);
      


   


}


if($_GET['page_id']=='siparisreddet')
{

    date_default_timezone_set("Turkey");



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];
   

           $sql=$db->prepare("update satinalma set siparisdurumu='Reddedildi',rednedeni='".iconv( "UTF-8","ISO-8859-9",$_GET['rednedeni'])."' where index_satinalma=? limit 1");
           
            $sql->execute([$recordid]);
      


   


}



?>