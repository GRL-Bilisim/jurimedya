<?php 
if($_GET[page_id]=='perMerkezGuncelle'){
    
    include 'pdo_baglanti.php';
    
        $perID = $_GET[personelid];
        $isistasyonu = $_GET[isistasyonu];
        $userid = $_GET[userid];

        $qup = $db->prepare("update personel_ozluk_bilgileri set istasyon=? where index_personel_ozluk_bilgileri=?");
        $qup->execute([iconv('UTF-8','ISO-8859-9',$isistasyonu),$perID]);
        if($qup!=false){
                echo "[{\"status\":\"OK\"}]";
        }
        
    
    
}




?>