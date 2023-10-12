<?php 

function timeToSeconds($time)
{
     $timeExploded = explode(':', $time);
     if (isset($timeExploded[2])) {
         return $timeExploded[0] * 3600 + $timeExploded[1] * 60 + $timeExploded[2];
     }
     return $timeExploded[0] * 3600 + $timeExploded[1] * 60;
}

include 'baglanti.php';





$sql = "select * from reometrecizelgedegerleri where formulno='".$_GET['formulno']."' ";


$sorg = mysqli_query($connection,$sql);
while($sor = mysqli_fetch_assoc($sorg)){
    $tolerans = $sor['tolerans'];
    $sqlz = "select * from reometrecizelgekayit where reoid='".$sor['index_reometrecizelgedegerleri']."' ";
    $ok = mysqli_query($connection,$sqlz);
    while($oku = mysqli_fetch_assoc($ok)){
    
       if($oku['sicaklik'] == $_GET[sicaklik]){
           $sicaklik = $oku['sicaklik'];
       }
       $tdoksan = $oku['t90'];
     
    }
}  
  
$rtd =  timeToSeconds($tdoksan); 
    $td =  timeToSeconds($_GET['tdoksan']);
    $sonuc = 0;
    $sonuc =  $td - $rtd ;
    
    
    if($sicaklik==$_GET['sicaklik'] && $sonuc < $tolerans ){
     
        echo 'EVET';
    }
    else {

        echo 'HAYIR';
    }



?>