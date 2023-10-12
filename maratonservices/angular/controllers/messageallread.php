<?php 
if($_GET['page_id']=='pdo_tumunuokunduyap')
    {
       include 'pdo_baglanti.php';
  
       $userid=$_GET[userid];
       
       $sql=$db->prepare("update mesajlarim set durumu='Read'  where alici=?");
       $sql->execute([$userid]);
       
    
    }
?>