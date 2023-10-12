<?php 
 if ($_GET['page_id']=='durustanimlaricek'){
    
         include 'pdo_baglanti.php';
         
         date_default_timezone_set("Turkey");

$tarih=date("Y-m-d");

$saat = date("H:i:s");


$duquery = $db->prepare("select * from makinadurusgruplari where index_makinadurusgruplari>0");
$duquery->execute([]);


if($duquery!=false){
        $kayitlar=$duquery->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
    
}





}


 if ($_GET['page_id']=='durusgrupalt'){
    
         include 'pdo_baglanti.php';
         
         date_default_timezone_set("Turkey");

$tarih=date("Y-m-d");

$durusgrupkodu = $_GET[durusgrupkodu];


$duquery = $db->prepare("Select * from durustanimlari where grupkodu=? ");
$duquery->execute([$durusgrupkodu]);


if($duquery!=false){
        $kayitlar=$duquery->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
    
}






}



if($_GET[page_id]=='durusbaslat'){
   
   $isemriid= $_GET[isemriid];
   $duruskodu = $_GET[duruskodu];
   $operatorid = $_GET[personelid];
   
   
   
if ($_GET[bitir]=='E')
{
    
    $sql = "update duruskalkislar set durussaati='".$saat."' where isemriid='".$_GET[isemriid]."' and (isnull(durussaati) or durussaati='')";
    $kaquery = $db->prepare($sql);
$kaquery->execute([]);

if($kaquery!=false){
    
    echo "[{\"status\":\"OK\"}]";
    
}
}

if ($_GET[baslat]=='E')
{
    
  $sql= "insert into duruskalkislar(tarih,operator,baslamasaati,isemriid,durusnedeni) values('$tarih','$operatorid','$saat','$isemriid','$duruskodu')";
$kaquery = $db->prepare($sql);
$kaquery->execute([]);

if($kaquery!=false){
    
    echo "[{\"status\":\"OK\",\"baslamazamani\":\"$saat\"}]";
    
}
  
}
   
    
}



if($_GET[page_id]=='durussorgula'){
    
    $isemriid = $_GET[isemriid];
    
$duquery = $db->prepare("Select * from duruskalkislar where isemriid=? and (isnull(durussaati) or durussaati='')  ");
$duquery->execute([$isemriid]);

 $count= $duquery->rowCount();

if($duquery!=false){
      
    if($count>0){
    
     while( $kulcek =$duquery->fetch(PDO::FETCH_ASSOC) )
              {
                  $saatic=$kulcek[baslamasaati];
                  $saatix = $kulcek[durussaati];
                  if($saatix==''){
                 echo "[{\"status\":\"OK\",\"saat\":\"$saatic\"}]";
                  }else{
                   echo "[{\"status\":\"ERR\",\"saat\":\"yok\"}]";
                  }
              }
  
    }else{
            echo "[{\"status\":\"ERR\",\"saat\":\"yok\"}]";
    }  
    
    
}
    
}


?>