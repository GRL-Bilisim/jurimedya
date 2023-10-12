<?php 

include 'pdo_baglanti.php';

$recsql = $db->prepare("select * from cihazloglarim where (islendi='' or isnull(islendi)) order by tarih asc,saat asc");
$recsql -> execute();

while($roku = $recsql->fetch(PDO::FETCH_ASSOC)){

$imeino=$roku[imeino];
$sontarih=$roku[tarih];
$sonsaat=$roku[saat];
$sonmesafe=$roku[olculenmesafe];
$sonsicaklik=$roku[olculensicaklik];
$sonnem=$roku[olculennem];
$logno=$roku[index_cihazloglarim];


$recsql2 = $db->prepare("update angoscihazlar set sonsinyaltarihi='$sontarih',sinyalsaati='$sonsaat',sonmesafe='$sonmesafe',sonsicaklik='$sonsicaklik',sonnem='$sonnem' where imeino='$imeino'");
$recsql2 -> execute();


$recsql2 = $db->prepare("update cihazloglarim set islendi='E' where index_cihazloglarim='$logno'");
$recsql2 -> execute();


}


?>