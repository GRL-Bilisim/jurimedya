<?php 




if($_GET['page_id']=='gantistatistikler'){
include 'pdo_baglanti.php';

$plansizIsemri="";
$baslanmamisIsemri="";
$surenIsemri="";
$kompresyonIsemri="";
$hamurIsemri="";
$azotIsemri="";
$tesviyeIsemri="";
$dofIsemri="";




$be = $db->prepare("select *,malzemeler.malzemekodu as malzemekodu,planlananhazirlik+round(siparismiktari/isemrioperasyonlari.partimiktari)*(planlanancevrim+planlanansoktak) as tahminisure  from isemrioperasyonlari left join malzemeler on malzemeler.index_malzemeler=isemrioperasyonlari.mamulkodu left join uretimprosesi on uretimprosesi.index_uretimprosesi=isemrioperasyonlari.operasyonno left join uretimemirleri on uretimemirleri.index_uretimemirleri=isemrioperasyonlari.isemriid where index_isemrioperasyonlari>0 and isemrioperasyonlari.deleted='false' and uretimemirleri.deleted='false' and isnull(isemrioperasyonlari.isistasyonu) ");
$be->execute([]);
$plansizIsemri= $be->rowCount();



$bs = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and (isistasyonu<>'' or isistasyonu=='null') and isnull(baslamatarihi) and isnull(baslamasaati)");
$bs->execute([]);
$baslanmamisIsemri= $bs->rowCount();


$br = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and  isistasyonu<>'' and (  baslamatarihi<>NULL and   baslamasaati<>NULL  ) and  (isnull(bitistarihi) and isnull(bitissaati))");
$br->execute([]);
$surenIsemri= $br->rowCount();

$ba = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and ismerkezi='Komp' ");
$ba->execute([]);
$kompresyonIsemri= $ba->rowCount();

$bc = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and ismerkezi='Hamur' ");
$bc->execute([]);
$hamurIsemri= $bc->rowCount();

$bx = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and ismerkezi='Azot' ");
$bx->execute([]);
$azotIsemri= $bx->rowCount();


$by = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and ismerkezi='Tesviye' ");
$by->execute([]);
$tesviyeIsemri= $by->rowCount();

$bz = $db->prepare("SELECT * FROM isemrioperasyonlari where  deleted='false' and dofid<>'' and isemrituru='DOF' ");
$bz->execute([]);
$dofIsemri= $bz->rowCount();
echo "[{\"plansizIsemri\":\"$plansizIsemri\",\"baslanmamisIsemri\":\"$baslanmamisIsemri\",\"surenIsemri\":\"$surenIsemri\",\"kompresyonIsemri\":\"$kompresyonIsemri\",\"hamurIsemri\":\"$hamurIsemri\",\"azotIsemri\":\"$azotIsemri\",\"tesviyeIsemri\":\"$tesviyeIsemri\",\"dofIsemri\":\"$dofIsemri\"}]";

 
}




?>