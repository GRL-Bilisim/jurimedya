<?php


ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


include 'baglanti.php';



if ($_GET[ids]!='')
{
  

$secilenler = $_GET[ids];
$secpar = explode(',',$secilenler);



for($i=0;$i<count($secpar);$i++)
{

    if($secpar[$i]>0){ 
        
        $qu = "update satinalma set siparisdurumu='".iconv("UTF-8","ISO-8859-9","Kabul Edildi")."' where index_satinalma='".$secpar[$i]."' ";
         $result = mysqli_query($connection,$qu);
      
    }
}
  echo $result;
}