<?php 
include 'pdo_baglanti.php';

if($_GET['page_id']=='isistasyonfiltreli'){
$ismerkez = iconv( "UTF-8","ISO-8859-9",$_GET['ismerkez']);
$sqm = $db -> prepare("select is_istasyon_adi  as isistasyonu from is_istasyonlari where is_merkezi_adi like ?");
$sqm->execute(['%'.$ismerkez.'%']);
if($sqm != false)
{
        $kayitlar=$sqm->fetchAll(PDO::FETCH_ASSOC);
        echo json_turkce(($kayitlar));
}

}




?>