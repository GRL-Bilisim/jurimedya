<?php 
if($_GET[page_id]=='todoguncelle'){
    
    include 'pdo_baglanti.php';
    
        $status=iconv( "UTF-8","ISO-8859-9",$_GET[durumu]);
        $index=$_GET[index];
        
        $qup = $db->prepare("update gorevler set yapildi=? where index_gorevler=?");
        $qup->execute([$status,$index]);
    echo "[{\"status\":\"OK\"}]";
    
}


?>