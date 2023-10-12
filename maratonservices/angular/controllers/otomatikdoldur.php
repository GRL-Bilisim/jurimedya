<?php
    
    date_default_timezone_set("Turkey");

if($_GET['page_id']=='otomatikdoldur'&&$_GET[blokid]=='1135')
{



$zaman=date("H:i:s");



$sqlx=$db->prepare("delete from donemselgiderler where giderid=?");
           
$sqlx->execute([$_GET[mastervalue]]);  



$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


      

$sql=$db->prepare("select * from giderturleri");
           
                 $sql->execute([$recordid]);

                 while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {

               

                      $sqlx=$db->prepare("insert into donemselgiderler(giderturu,gidertoplami,giderbirimi,giderid,kayittarihi,deleted) values(?,?,?,?,'$tarih','false')");
           
                      $sqlx->execute([$okut[giderkodu],'0.00','TL',$_GET[mastervalue]]);  

                
 


}

}


if($_GET['page_id']=='otomatikdoldur'&&$_GET[blokid]=='1517')
{

        $sqlx=$db->prepare("delete from donemseliscilikler where giderid=?");
           
        $sqlx->execute([$_GET[mastervalue]]);  
        

$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


      

$sql=$db->prepare("select * from is_merkezleri where masraf_merkezi='007'");
           
                 $sql->execute([$recordid]);

                 while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {

               

                      $sqlx=$db->prepare("insert into donemseliscilikler(ismerkezi,normalmesai,fazlamesai,normalmesaibedeli,fazlamesaibedeli,giderid,kayittarihi,deleted) values(?,?,?,?,?,?,'$tarih','false')");
           
                      $sqlx->execute([$okut[is_merkezi_kodu],'0.00','0.00','0.00','0.00',$_GET[mastervalue]]);  

                
 


}

}
?>