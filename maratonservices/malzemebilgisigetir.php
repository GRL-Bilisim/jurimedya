<?php 
include 'baglanti.php';

$sql = "select * from malzemeler where malzemekodu='".$_GET[malzemeid]."'";
$sorgula = mysqli_query($connection,$sql);

while($oku=mysqli_fetch_assoc($sorgula)){
    
    $aciklamasi = iconv( "ISO-8859-9","UTF-8",$oku[malzemeaciklamasi]);
    
    echo $aciklamasi; 
    
}
?>