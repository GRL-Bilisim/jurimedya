<?php

 header("Access-Control-Allow-Origin: *");

ob_start();

if (!isset($_SESSION)) {

  @session_start();
}


include 'baglanti.php';



ini_set('display_errors', 0);
error_reporting(E_ERROR | E_WARNING | E_PARSE); 


$ekleme="_bulk_".$_SESSION[user_id];


if ($_GET[menu_id]!='198')
{
    
 $sql="select * from formlar where form_index=".$_GET[menu_id];
 $sorbana=mysqli_query($connection,$sql);
 while($okut=mysqli_fetch_assoc($sorbana))
 {
     $tablosu=$okut[tablosu];
 }
 
 if ($tablosu!='')
 {
   
    mysqli_query($connection,"drop TABLE `".$_GET[hedef]."`.$tablosu".$ekleme);
  
  
    mysqli_query($connection,"CREATE TABLE `".$_GET[hedef]."`.$tablosu".$ekleme." AS SELECT * FROM `".$_GET[kaynak]."`.$tablosu limit 0");
    
    
    $sqls="show table status from `".$_GET[hedef]."`  where name='$tablosu'";
$sorgulattir=mysqli_query($connection,$sqls);
while ($okuma=mysqli_fetch_assoc($sorgulattir))
{
$otosayi_form=$okuma[Auto_increment]+1;
mysqli_query($connection,"ALTER TABLE `".$_GET[hedef]."`.$tablosu".$ekleme." AUTO_INCREMENT=$otosayi_form;");



$sqlcs="SHOW INDEX FROM `".$_GET[kaynak]."`.$tablosu WHERE Key_name = 'PRIMARY'";
													
													$sorcun=mysqli_query($connection,$sqlcs);
													
													while ($yokn=mysqli_fetch_assoc($sorcun))
													{
														
														$anahtar=$yokn[Column_name];
														
														
													}

   mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.$tablosu".$ekleme."
SELECT d.*
FROM `".$_GET[kaynak]."`.$tablosu d
WHERE $anahtar = ".$_GET[recordid]);


mysqli_query($connection,"update `".$_GET[hedef]."`.$tablosu".$ekleme." set $anahtar=".$otosayi_form." where $anahtar=".$_GET[recordid]);



mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.$tablosu
SELECT d.*
FROM `".$_GET[hedef]."`.$tablosu".$ekleme." d");


$sql="select * from `".$_GET[kaynak]."`.bloklar left join `".$_GET[kaynak]."`.formlar on `".$_GET[kaynak]."`.formlar.form_index=`".$_GET[kaynak]."`.bloklar.bagliformindex where formindex=".$_GET[menu_id]." and `".$_GET[kaynaklar]."`.bloklar.turu='Liste'";
$sorbanat=mysqli_query($connection,$sql);

while ($okumas=mysqli_fetch_assoc($sorbanat))
{
    
    echo "cc";
    $alttablo=$okumas[tablosu];
    
    
    $sqls="show table status `".$_GET[hedef]."`.where name='$alttablo'";
$sorgulattir2=mysqli_query($connection,$sqls);
while ($okuma2=mysqli_fetch_assoc($sorgulattir2))
{
$otosayi_form2=$okuma2[Auto_increment]+1;
}


	$sqlcs="SHOW INDEX FROM `".$_GET[kaynak]."`.$alttablo WHERE Key_name = 'PRIMARY'";
													
													$sorcun=mysqli_query($connection,$sqlcs);
													
													while ($yokn=mysqli_fetch_assoc($sorcun))
													{
														
														$birincilanahtar=$yokn[Column_name];
														
														
													}
    
    
    if ($alttablo!='')
    {
        
     
       mysqli_query($connection,"drop TABLE `".$_GET[hedef]."`.$alttablo".$ekleme);
  
       mysqli_query($connection,"CREATE TABLE `".$_GET[hedef]."`.$alttablo".$ekleme." AS SELECT * FROM `".$_GET[kaynak]."`.$alttablo where $okumas[detailfield]='".$_GET[recordid]."'");
       
       $i=0;
           $sqls="select * from `".$_GET[hedef]."`.$alttablo".$ekleme;
$sorgulattir2=mysqli_query($connection,$sqls);
while ($okuma2=mysqli_fetch_assoc($sorgulattir2))
{

mysqli_query($connection,"update `".$_GET[hedef]."`.$alttablo".$ekleme." set $birincilanahtar=".($otosayi_form2+$i).",$okumas[detailfield]=$otosayi_form where $birincilanahtar=".$okuma2[$birincilanahtar]);
$i++;
 
}


mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.$alttablo
SELECT d.*
FROM `".$_GET[hedef]."`.$alttablo".$ekleme." d");

   
        
    }
    
    
}



}
    
     
 }
    
 
}

if ($_GET[menu_id]=='198')
{
    
    

    
     mysqli_query($connection,"drop TABLE `".$_GET[hedef]."`.formlar$ekleme");
  
     mysqli_query($connection,"drop TABLE `".$_GET[hedef]."`.formalanlari$ekleme");

     mysqli_query($connection,"drop TABLE `".$_GET[hedef]."`.bloklar$ekleme");
    
    
     mysqli_query($connection,"drop TABLE `".$_GET[hedef]."`.bloklar_alti$ekleme");
    
    
     mysqli_query($connection,"CREATE TABLE `".$_GET[hedef]."`.formlar$ekleme AS SELECT * FROM `".$_GET[kaynak]."`.formlar limit 0");
    
     mysqli_query($connection,"CREATE TABLE `".$_GET[hedef]."`.formalanlari$ekleme AS SELECT * FROM `".$_GET[kaynak]."`.formalanlari  limit 0");
    
    
     mysqli_query($connection,"CREATE TABLE `".$_GET[hedef]."`.bloklar$ekleme AS SELECT * FROM `".$_GET[kaynak]."`.bloklar  limit 0");
    
    
     mysqli_query($connection,"CREATE TABLE `".$_GET[hedef]."`.bloklar_alti$ekleme AS SELECT * FROM `".$_GET[kaynak]."`.bloklar_alti  limit 0");
    
 
   
   
   
$sqls="show table status from `".$_GET[hedef]."`  where name='formlar'";
$sorgulattir=mysqli_query($connection,$sqls);
while ($okuma=mysqli_fetch_assoc($sorgulattir))
{
    
    // auto increment calismiyor +1 veriyorsun sonuna;
$otosayi_form=$okuma[Auto_increment]+2;

mysqli_query($connection,"ALTER TABLE `".$_GET[hedef]."`.formlar$ekleme AUTO_INCREMENT=$otosayi_form;");
}

$sqls="show table status from `".$_GET[hedef]."` where name='formalanlari'";
$sorgulattir=mysqli_query($connection,$sqls);
while ($okuma=mysqli_fetch_assoc($sorgulattir))
{
$otosayi_formalan=$okuma[Auto_increment]+2;
mysqli_query($connection,"ALTER TABLE `".$_GET[hedef]."`.formalanlari$ekleme AUTO_INCREMENT=$otosayi_formalan;");
}


$sqls="show table status from `".$_GET[hedef]."` where name='bloklar'";
$sorgulattir=mysqli_query($connection,$sqls);
while ($okuma=mysqli_fetch_assoc($sorgulattir))
{
$otosayi_blok=$okuma[Auto_increment]+2;
mysqli_query($connection,"ALTER TABLE `".$_GET[hedef]."`.bloklar$ekleme AUTO_INCREMENT=$otosayi_blok;");
}


$sqls="show table status from `".$_GET[hedef]."` where name='bloklar_alti'";
$sorgulattir=mysqli_query($connection,$sqls);
while ($okuma=mysqli_fetch_assoc($sorgulattir))
{
$otosayi_blokalti=$okuma[Auto_increment]+2;
mysqli_query($connection,"ALTER TABLE `".$_GET[hedef]."`.bloklar_alti$ekleme AUTO_INCREMENT=$otosayi_blokalti;");
}
   
   
   
   mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.formlar$ekleme
SELECT d.*
FROM `".$_GET[kaynak]."`.formlar d
WHERE form_index = ".$_GET[recordid]);



mysqli_query($connection,"update `".$_GET[hedef]."`.formlar$ekleme set form_index=".($otosayi_form)." where form_index=".$_GET[recordid]);


    
    $i=0;
         $sql="select * from `".$_GET[kaynak]."`.bloklar where formindex=".$_GET[recordid];
    $sorgula=mysqli_query($connection,$sql);
    while($okut=mysqli_fetch_assoc($sorgula))
    {
        
        mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.bloklar$ekleme
SELECT d.*
FROM `".$_GET[kaynak]."`.bloklar d
WHERE bokindex = ".$okut[bokindex]);



mysqli_query($connection,"update `".$_GET[hedef]."`.bloklar$ekleme set bokindex=".($otosayi_blok+$i).",formindex=$otosayi_form where bokindex=".$okut[bokindex]);



        mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.bloklar_alti$ekleme
SELECT d.*
FROM `".$_GET[kaynak]."`.bloklar_alti d
WHERE blokindex = ".$okut[bokindex]);



mysqli_query($connection,"update `".$_GET[hedef]."`.bloklar_alti$ekleme set blokindex=".($otosayi_blok+$i)." where blokindex=".$okut[bokindex]);

$i++;   
    }
    
   
    $sql="select * from `".$_GET[kaynak]."`.formalanlari where form_index=".$_GET[recordid];
    $sorgula=mysqli_query($connection,$sql);
    $i=0;
    while($okut=mysqli_fetch_assoc($sorgula))
    {
    
        mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.formalanlari$ekleme
SELECT d.*
FROM `".$_GET[kaynak]."`.formalanlari d
WHERE alan_index = ".$okut[alan_index]);

mysqli_query($connection,"update `".$_GET[hedef]."`.formalanlari$ekleme set alan_index=".($otosayi_formalan+$i).",form_index=$otosayi_form where alan_index=".$okut[alan_index]);

mysqli_query($connection,"update `".$_GET[hedef]."`.bloklar_alti$ekleme set alanindex=".($otosayi_formalan+$i)." where alanindex=".$okut[alan_index]);
$i++;    
    }
    
    $i=0;
    $sql="select * from `".$_GET[hedef]."`.bloklar_alti$ekleme";
    $sorgula=mysqli_query($connection,$sql);
    while($okut=mysqli_fetch_assoc($sorgula))
    {
       
        mysqli_query($connection,"update `".$_GET[hedef]."`.bloklar_alti$ekleme  set altindex=".($otosayi_blokalti+$i)." where altindex=".$okut[altindex]);
         $i++;
    }
    
    

//formlar aktarılıyor


  mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.formlar
SELECT d.*
FROM `".$_GET[hedef]."`.formlar$ekleme d");



 mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.formalanlari
SELECT d.*
FROM `".$_GET[hedef]."`.formalanlari$ekleme d");


 mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.bloklar
SELECT d.*
FROM `".$_GET[hedef]."`.bloklar$ekleme d");


 mysqli_query($connection,"INSERT INTO `".$_GET[hedef]."`.bloklar_alti
SELECT d.*
FROM `".$_GET[hedef]."`.bloklar_alti$ekleme d");
    
echo "[{\"status\":\"OK\"}]";

}


?>