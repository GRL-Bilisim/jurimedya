<?php 

include 'pdo_baglanti.php';

$recsql = $db->prepare("select malzemeler.malzemekodu,malzemeler.index_malzemeler, malzemeler.malzemeturu,uretimprosesi.*,prosesler.proseskodu as operasyonkodu from uretimprosesi left join malzemeler on malzemeler.index_malzemeler=uretimprosesi.malzemeid left join prosesler on prosesler.prosestanimi=uretimprosesi.prosestanimi where index_uretimprosesi>0 and uretimprosesi.prosestanimi like '%HazIrlama%' and malzemeler.malzemeturu='Mamul' and  malzemeler.malzemekodu like 'M%'  and uretimprosesi.deleted='false'");
$recsql -> execute([]);

while($roku = $recsql->fetch(PDO::FETCH_ASSOC)){


$Zecsql = $db->prepare("SELECT malzemeler.index_malzemeler,malzemeler.malzemekodu, malzemerecete.* FROM malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid  where malzemeid=? and malzemerecete.deleted='false' and malzemeler.malzemekodu like 'M%' and malzemeler.malzemeturu like '%Yar%' ");
$Zecsql -> execute([$roku['index_malzemeler']]);

while($zoku = $Zecsql->fetch(PDO::FETCH_ASSOC)){

    echo  $roku['index_malzemeler'].'-'.$roku['index_uretimprosesi'].'-'.$zoku['index_malzemeler'].'<br>';


}


}


?>