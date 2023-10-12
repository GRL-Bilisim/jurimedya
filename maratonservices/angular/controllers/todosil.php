<?php 
if($_GET[page_id]=='todosil'){
    
    include 'pdo_baglanti.php';
        $index=$_GET[index];
        
        $qup = $db->prepare("update gorevler set deleted=? where index_gorevler=?");
        $qup->execute(['true',$index]);
    echo "[{\"status\":\"OK\"}]";
    
}


?>