<?php



include 'baglanti.php';

$sql="select * from kuraktarimlari where parabirimi='".$_GET[kur]."' order by tarih desc,saat desc limit 1";

$sorgula=mysqli_query($connection,$sql);

while($okut=mysqli_fetch_assoc($sorgula))

{
    
    echo $okut[satisfiyat];
}


?>