<?php

include 'baglanti.php';


$tarih=date("Y-m-d");

$lot=date("Y")."".date("m")."".date("d");


$sql="select * from vardiya";
$sorbana=mysqli_query($connection,$sql);

while($okut=mysqli_fetch_assoc($sorbana))
{
    
    $sorbanayes=mysqli_query($connection,"select * from serilotlar where vardiya='".$okut[index_vardiya]."' and tarih='".$tarih."'");
    
    if (mysqli_num_rows($sorbanayes)==0)
    {
        $sql_alt="select min(baslama) as baslamasi,max(bitis) as bitisi from zamanlar where vardiyaid='".$okut[index_vardiya]."'";
        
        echo $sql_alt;
        $sorbana_alt=mysqli_query($connection,$sql_alt);

        while($okuts=mysqli_fetch_assoc($sorbana_alt))
{
    $lot=date("Y")."".date("m")."".date("d")."".$okut[vardiyakodu];
    
   echo $okuts['baslamasi'];
    mysqli_query($connection,"insert into serilotlar values(null,'".$tarih."','$lot','".$okut[index_vardiya]."','".$okuts['baslamasi']."','".$okuts['bitisi']."')");
    
}
        
    }
    
    
}


?>