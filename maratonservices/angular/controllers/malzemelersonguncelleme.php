<?php 
include 'pdo_baglanti.php';

if($_GET['page_id']=='malzemelersonguncelleme'){
    $cSql = $db->prepare("SHOW TABLE STATUS FROM bulutfab_znr LIKE 'malzemeler'");
    $cSql -> execute([]);
    $kayitlar=$cSql->fetchAll(PDO::FETCH_ASSOC);
    echo json_turkce(($kayitlar));
}
?>