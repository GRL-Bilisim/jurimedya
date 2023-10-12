<?php 
include 'pdo_baglanti.php';

if($_GET['page_id']=='preskalipkarsilik'){
$ispresid = $_GET['ispresid'];
$malzemekod = $_GET['malzemeid'];

$sqm = $db -> prepare("select * from is_istasyonlari where index_is_istasyonlari=?");
$sqm->execute([$ispresid]);
if($sqm != false)
{
while( $cek =$sqm->fetch(PDO::FETCH_ASSOC) )
{
        $isistasyongpres = $cek['is_istasyon_grubu_pres'];

        $sqKa = $db -> prepare("select kalip_no from kalip_karsiliklari where makina_grup=? and urunid=? and kalip_no<>''");
        $sqKa->execute([$isistasyongpres,$malzemekod]);
    if($sqKa!=false){

        $kayitlar=$sqKa->fetchAll(PDO::FETCH_ASSOC);
        echo json_turkce(($kayitlar));

}
    }

}

}




?>