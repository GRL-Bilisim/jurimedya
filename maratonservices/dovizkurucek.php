<?php 

include 'baglanti.php';

ob_start();

session_name("asalyapi");

session_start();
date_default_timezone_set("Turkey");

$tarih=date("Y-m-d");

$zaman=date("H:i:s");


$doviz = simplexml_load_file('https://www.tcmb.gov.tr/kurlar/today.xml');
    
$usd_alis = $doviz ->Currency[0]->ForexBuying;
$usd_satis = $doviz ->Currency[0]->ForexSelling;
 
$euro_alis = $doviz ->Currency[3]->ForexBuying;
$euro_satis = $doviz ->Currency[3]->ForexSelling;

$gbp_alis = $doviz ->Currency[4]->ForexBuying;
$gbp_satis = $doviz ->Currency[4]->ForexSelling;
 


    
$usdguncelle =  "update kuraktarimlari set sonmu='H'";
                      
mysqli_query($connection,$usdguncelle);
                            $usdguncelle =  "insert into kuraktarimlari (index_kuraktarimlari,tarih,saat,alisfiyat,satisfiyat,parabirimi,sonmu) values(null,'$tarih','$zaman','$usd_alis','$usd_satis','USD','E')";
                        $usdakit = mysqli_query($connection,$usdguncelle);
       
             $usdguncelle =  "insert into kuraktarimlari (index_kuraktarimlari,tarih,saat,alisfiyat,satisfiyat,parabirimi,sonmu) values(null,'$tarih','$zaman','$euro_alis','$euro_satis','EUR','E')";
                        $usdakit = mysqli_query($connection,$usdguncelle);
                        
       
                    $gbpguncelle =  "insert into kuraktarimlari (index_kuraktarimlari,tarih,saat,alisfiyat,satisfiyat,parabirimi,sonmu) values(null,'$tarih','$zaman','$gbp_alis','$gbp_satis','GBP','E')";
                   $gbpgit = mysqli_query($connection,$gbpguncelle);
         
        
 



?>