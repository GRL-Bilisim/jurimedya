<?php


ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';


$id = $_GET[ids];

if($id!='' && $id!=NULL){
 

    mysqli_query($connection,"INSERT INTO maliyetprosesleri (`prosestanimi`, `isistasyonu`, `fire`, `doluluk`, `islemsayisi`, `gecismiktari`, `islemsuresi`, `maliyetid`, `sirano`) SELECT prosestanimi, isistasyonu,fire,doluluk,islemsayisi,gecismiktari,islemsuresi,'".$id."',sirano FROM maliyetprosesleri");
    
  echo 'OK';
}
if($id=='' && $id==NULL){

 

        mysqli_query($connection,"INSERT INTO maliyetprosesleri (`prosestanimi`, `isistasyonu`, `fire`, `doluluk`, `islemsayisi`, `gecismiktari`, `islemsuresi`, `maliyetid`, `sirano`) SELECT prosestanimi, isistasyonu,fire,doluluk,islemsayisi,gecismiktari,islemsuresi,'-".$_SESSION[user_id]."',sirano FROM maliyetprosesleri");
 echo 'OK';

    }
else{
    echo 'Warning';
}
?>