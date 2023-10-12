<?php





include 'baglanti.php';


 $query = "select *  from aratablo where menuid='".$_GET["menu_id"]."'";
 
$sorgula=mysqli_query($connection,$query);

$i=0;
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    
    $i++;
    mysqli_query($connection,"insert into formalanlari(alanyazisi,form_index,alangenisligi,alanturu,alansirasi,listegosterim,kayitformu,verigiristuru,alanadi) values('".$okut[onerilenetiket]."','".$_GET[menu_id]."','100','".$okut[onerilenalanturu]."','$i','False','$okut[kayitalani]','$okut[onerilenverigiristuru]','".$okut[onerilenalanadi]."')");
    
    
}


?>