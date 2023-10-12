<?php 



if($_GET[page_id]=='pdo_mesajcek'){


 include 'pdo_baglanti.php';
    
        $gonderenid=$_GET['userid'];
         $mesajkisi=$_GET['mesajlasilan'];


        $sql=$db->prepare("select * from mesajlarim where  gonderen=? and alici=? or alici=? and gonderen=? and deleted='false' order by index_mesajlarim asc ");
        $sql->execute([$gonderenid,$mesajkisi,$gonderenid,$mesajkisi]);
        
            if($sql !== false)
{
       $kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}

?>