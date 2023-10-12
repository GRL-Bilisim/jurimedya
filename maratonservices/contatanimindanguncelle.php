<?php 
include 'baglanti.php';



if($_GET[contakodu]!=''){
    $yfk = $_GET[contakodu];
    
    $unhap = mysqli_query($connection,"select * from malzemeler where ureticikodu = '".$yfk."' ");

    while($caney = mysqli_fetch_assoc($unhap)){
        $boruboyutu = $caney[boru_boyu];
        $figur = $caney[figur];
        $formulno = $caney[formulno];
        $discap = $caney[discapd];
        $iccap = $caney[iccapd];
        $yukseklik = $caney[yukseklik];
        $uretimkodu = $caney[uretim_kodu];
    }

echo $boruboyutu.'-'.$figur.'-'.$formulno.'-'.$discap.'-'.$iccap.'-'.$yukseklik.'-'.$uretimkodu;

}



?>