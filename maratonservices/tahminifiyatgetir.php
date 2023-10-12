<?php
include 'baglanti.php';

$kod = $_GET[urcode];

if($kod!=''){
 $mysq = mysqli_query($connection,"select * from malzemetedarikcileri where ureticikodu='$kod' ");
while($asc = mysqli_fetch_assoc($mysq)){
   $fiyat =  $asc[birimfiyat];
}
echo str_replace(',','.',$fiyat);   
}


?>