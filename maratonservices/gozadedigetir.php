<?php 
include 'baglanti.php';

$sql = "select * from kaliptanitim where kalip_no='".$_GET[kalip_no]."' ";
$sorgula = mysqli_query($connection,$sql);

while($oku=mysqli_fetch_assoc($sorgula)){
    
    $goz_adedi = iconv( "ISO-8859-9","UTF-8",$oku[goz_adedi]);
    
    echo $goz_adedi; 
    
}
?>