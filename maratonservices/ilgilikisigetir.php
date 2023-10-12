<?php 
include 'baglanti.php';

$sql = "select * from cariler where index_cariler='".$_GET[cariid]."' ";
$sorgula = mysqli_query($connection,$sql);

while($oku=mysqli_fetch_assoc($sorgula)){
    
    $ilgilikisi = iconv( "ISO-8859-9","UTF-8",$oku[ilgili_kisi]);
    
    echo $ilgilikisi; 
    
}
?>