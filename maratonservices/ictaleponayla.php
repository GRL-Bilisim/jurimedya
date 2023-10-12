<?php 
include 'baglanti.php';

$talepkid = $_GET[talepkid];

$genel = mysqli_query($connection,"select * from geneltanimlar where index_geneltanimlar='1' ");
while($sor = mysqli_fetch_assoc($genel)){
    $geneltanimmal = $sor[kosulfiyat];
}




if($talepkid!=''){

    $priceth = mysqli_query($connection,"select * from talepicerigi where index_talepicerigi = '$talepkid'  ");
    while($wop = mysqli_fetch_assoc($priceth)){
        $tahmaliyet = $wop[tahminimaliyet];
        $durumu = iconv("ISO-8859-9","UTF-8",$wop[durumu]);
    }
     if($durumu == 'Son Onay Bekliyor'){
            $my = mysqli_query($connection,"update talepicerigi set durumu='".iconv("UTF-8","ISO-8859-9","Onaylandı")."' where index_talepicerigi='$talepkid' ");
          echo 'OK';
    }
    else{
         if($tahmaliyet>=$geneltanimmal){
            $my = mysqli_query($connection,"update talepicerigi set durumu='".iconv("UTF-8","ISO-8859-9","Son Onay Bekliyor")."' where index_talepicerigi='$talepkid' ");
          echo 'UST';
    }else{
        $my = mysqli_query($connection,"update talepicerigi set durumu='".iconv("UTF-8","ISO-8859-9","Onaylandı")."' where index_talepicerigi='$talepkid' ");
          echo 'OK';
    }
    
    }

   



            
    
}






?>