<?php

include 'baglanti.php';

ob_start();

session_name("asalyapi");

session_start();

$tarih=date("Y-m-d");

$zaman=date("H:i:s");


    $usdtalis = $_GET['usdalis'];
    $usdtsatis = $_GET['usdsatis'];
    
    $eualis = $_GET['eualis'];
    $eusatis = $_GET['eusatis'];
    
    $gbpalis = $_GET['gbpalis'];
    $gbpsatis = $_GET['gbpsatis'];

if($_GET[dovizguncelle]=='evet'){
    
 
            if($dovizaktar[parabirimi]=='USD'){
                            $usdguncelle =  "update kuraktarimlari set tarih='$tarih',saat='$zaman',alisfiyat='$usdtalis',satisfiyat='$usdtsatis' where index_kuraktarimlari='1' or parabirimi='USD' ";
                        $usdakit = mysqli_query($connection,$usdguncelle);
            }
            if($dovizaktar[parabirimi]=='EURO'){
                   $eurouncelle =  "update kuraktarimlari set tarih='$tarih',saat='$zaman',alisfiyat='$eualis',satisfiyat='$eusatis' where index_kuraktarimlari='2' or parabirimi='EURO' ";
                        $eurokit = mysqli_query($connection,$eurouncelle);
            }
             if($dovizaktar[parabirimi]=='GBP'){
                   $gbpguncelle =  "update kuraktarimlari set tarih='$tarih',saat='$zaman',alisfiyat='$gbpalis',satisfiyat='$gbpsatis' where index_kuraktarimlari='3' or parabirimi='GBP' ";
                        $gbpgit = mysqli_query($connection,$gbpguncelle);
            }
        
 
          
       
        }
  
    
?>