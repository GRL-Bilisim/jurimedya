<?php


if ($_GET[page_id]=='recetedoldur')
{


  $sql="select * from uretimemirleri where index_uretimemirleri=? order by index_uretimemirleri desc limit 1";
                    
  $zquery2 = $db->prepare($sql);
  $zquery2->execute([$_GET[uretimemri]]);
   $countyes2= $zquery2->rowCount();
if($countyes2>0){
while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
{
$uretimid=$okutyes2[index_uretimemirleri];
$planmiktar=$okutyes2[planmiktar];

$malzemeid=$okutyes2[malzemeid];
}
}


//önceden atanmış girdiler var ise siliniy

$sql="delete from uretimgirdileri where uretimid=?";
                    
$zquery2 = $db->prepare($sql);
$zquery2->execute([$uretimid]);

//yenileri ekleniyor 
$sql="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=? and concat_ws(' ','Tip',malzemerecete.tip)='".$_GET[recetetipi]."'  and malzemerecete.deleted='false' ";
                    
$zquery2 = $db->prepare($sql);
$zquery2->execute([$malzemeid]);
 $countyes2= $zquery2->rowCount();
if($countyes2>0){
while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
{

  
$ihtiyac=$planmiktar*$okutyes2[miktar];

$altmalzemeid=$okutyes2[altmalzemeid];
$turu=$okutyes2[malzemeturu];
$malzemebirimi=$okutyes2[malzemebirimi];

//girdiler ekleniyor

if ($okutyes2[miktar]!='')
{

$Stquery = $db->prepare("insert into uretimgirdileri (uretimid,planlananmiktaradet,girdimalzemeid,deleted,turu,stokbirimi) 
values('$uretimid','$ihtiyac','$altmalzemeid','false','$turu','$malzemebirimi')");
$Stquery->execute([]);

$sql="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=? and malzemeler.malzemeturu like '%Yar%' and malzemerecete.deleted='false' ";


$zquery3 = $db->prepare($sql);
$zquery3->execute([$altmalzemeid]);
 $countyes3= $zquery3->rowCount();
if($countyes3>0){
while( $okutyes3 =$zquery3->fetch(PDO::FETCH_ASSOC) )
{

  if ($okutyes3[miktar]!='')
{
  $ihtiyac2=$ihtiyac*$okutyes3[miktar];
}

if ($okutyes3[kilo]!='')
{
  $ihtiyac2=$ihtiyac*$okutyes3[kilo];
}

$turu2=$okutyes3[malzemeturu];
$malzemebirimi2=$okutyes3[malzemebirimi];



  $Stquery = $db->prepare("insert into uretimgirdileri (uretimid,planlananmiktarkg,girdimalzemeid,deleted,turu,stokbirimi) 
values('$uretimid','$ihtiyac2','".$okutyes3[altmalzemeid]."','false','$turu2','$malzemebirimi2')");
$Stquery->execute([]);
  

}

}

}

if ($okutyes2[kilo]!='')
{
  $ihtiyac=$planmiktar*$okutyes2[kilo];

$Stquery = $db->prepare("insert into uretimgirdileri (uretimid,planlananmiktarkg,girdimalzemeid,deleted,turu,stokbirimi) 
values('$uretimid','$ihtiyac','$altmalzemeid','false','$turu','$malzemebirimi')");
$Stquery->execute([]);
$sql="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=? and malzemeler.malzemeturu like '%Yar%' malzemerecete.deleted='false' ";


$zquery3 = $db->prepare($sql);
$zquery3->execute([$altmalzemeid]);
 $countyes3= $zquery3->rowCount();
if($countyes3>0){
while( $okutyes3 =$zquery3->fetch(PDO::FETCH_ASSOC) )
{
  if ($okutyes3[miktar]!='')
  {
    $ihtiyac2=$ihtiyac*$okutyes3[miktar];
  }
  
  if ($okutyes3[kilo]!='')
  {
    $ihtiyac2=$ihtiyac*$okutyes3[kilo];
  }

$turu2=$okutyes3[malzemeturu];
$malzemebirimi2=$okutyes3[malzemebirimi];



  $Stquery = $db->prepare("insert into uretimgirdileri (uretimid,planlananmiktarkg,girdimalzemeid,deleted,turu,stokbirimi) 
values('$uretimid','$ihtiyac2','".$okutyes3[altmalzemeid]."','false','$turu2','$malzemebirimi2')");
$Stquery->execute([]);
  

}

}



}

//yarımamul
}

}

    echo "[{\"status\":\"Success\"}]";



}


?>