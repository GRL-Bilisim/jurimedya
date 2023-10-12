<?php




ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';


if ($_SESSION["login_id"]!="")
{
  
  if($_GET[kod]!='')
  {
      $kodum=$_GET[kod];
      mysqli_query($connection,iconv( "UTF-8","ISO-8859-9","$kodum"));
      echo "OK";
  }
    
}




?>