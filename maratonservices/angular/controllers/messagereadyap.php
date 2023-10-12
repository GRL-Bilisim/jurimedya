<?php 
if($_GET['page_id']=='pdo_okunducevir')
    {
       include 'pdo_baglanti.php';
  
       $recordid=$_GET[recordid];
       
       $sql=$db->prepare("update mesajlarim set durumu='Read'  where index_mesajlarim=? ");
       $sql->execute([$recordid]);
       
    
    }
?>