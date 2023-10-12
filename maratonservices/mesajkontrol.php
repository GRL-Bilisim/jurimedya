<?php

ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


include 'baglanti.php';





 $sql="select * from mesajlarim where (gonderen='".$_SESSION[user_id]."' or alici='".$_SESSION[user_id]."') and (gonderen='".$_GET[kullanici]."' or alici='".$_GET[kullanici]."') order by olusturma_tarihi desc,olusturma_saati desc limit 1";
														    $sorgula=mysqli_query($connection,$sql);
														    while($okut=mysqli_fetch_assoc($sorgula))
														    {
														        
														      echo $okut[index_mesajlarim];  
														        
														    }




?>