<?php
    
    date_default_timezone_set("Turkey");

if($_GET['page_id']=='receteonayla')
{



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


           $sql=$db->prepare("update recetedenemeleri set denemedurumu='".iconv( "UTF-8","ISO-8859-9",'Reçete Onaylandı')."',onaytarihi='$tarih' where index_recetedenemeleri=? limit 1");
           
                 $sql->execute([$recordid]);


//mamul kartına gönder

$sql=$db->prepare("select * from recetedenemeleri where index_recetedenemeleri=? limit 1");
           
                 $sql->execute([$recordid]);

                 while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {

                $malzemeid=$okut[urunid];
                $tip=$okut[recetetipi];
                if ($tip=='Tip 1')
                {
                        $tip='1';
                }
                if ($tip=='Tip 2')
                {
                        $tip='2';
                }
                if ($tip=='Tip 3')
                {
                        $tip='3';
                }
                if ($tip=='Tip 4')
                {
                        $tip='4';
                }
                      //önce ilgili ürün ve reçete tipi siliniyor

                      $sqlx=$db->prepare("update malzemerecete set deleted='true' where malzemeid=? and tip=?");
           
                      $sqlx->execute([$malzemeid,$tip]);  

                //sonrada ürüne bağlanıyor yeni reçete 

                $sqlx=$db->prepare("update malzemerecete set malzemeid='$malzemeid',tip='$tip' where receteid=?");
           
                      $sqlx->execute([$recordid]);  

              }
 


}


if($_GET['page_id']=='recetereddet')
{

    date_default_timezone_set("Turkey");



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];
   

           $sql=$db->prepare("update recetedenemeleri set denemedurumu='Reçete Reddedildi',rednedeni='".iconv( "UTF-8","ISO-8859-9",$_GET['rednedeni'])."' where index_recetedenemeleri=? limit 1");
           
            $sql->execute([$recordid]);
      


   


}


?>