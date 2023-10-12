<?php

    if($_GET['page_id']=='satinalmamaliyetleri'&&$_GET['blokid']=='1530')
    {

  
       include 'pdo_baglanti.php';



if ($_GET[tip]=='Tip 1')
{
    $tip='1';

    
}
if ($_GET[tip]==='Tip 2')
{
    $tip='2';
}
if ($_GET[tip]==='Tip 3')
{
    $tip='3';
}
if ($_GET[tip]==='Tip 4')
{
    $tip='4';

}


$sqlyes="delete from satinalmamaliyetleri where malzemeid=".$_GET['kayitid'];
$zquery = $db->prepare($sqlyes);
$zquery->execute();

$sqlyes="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=".$_GET['kayitid']." and malzemerecete.tip='$tip' and malzemerecete.deleted='false'";
$zquery = $db->prepare($sqlyes);


$zquery->execute();

while( $okutyes =$zquery->fetch(PDO::FETCH_ASSOC) )
{
    if ($okutyes[malzemeturu]=='Hammadde')
    {
$miktaradet='0';
$miktarkg='0';
        $sqlyes="select * from malzemetedarikcileri where malzemeid='".$okutyes['altmalzemeid']."' and malzemetedarikcileri.deleted='false' limit 1";
        $zquery2 = $db->prepare($sqlyes);
        $zquery2->execute();
        
        while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
        {
            $birimfiyat=$okutyes2[birimfiyat];
            $fiyatbirimi=$okutyes2[fiyatbirimi];

        }

    

        if ($okutyes[kilo]!='')
        {
            $miktarkg=$_GET[miktar]*$okutyes[kilo];
            $tlmaliyet=$_GET[miktar]*$okutyes[kilo]*$birimfiyat;
        }
        if ($okutyes[miktar]!='')
        {
            $miktaradet=$_GET[miktar]*$okutyes[miktar];
            $tlmaliyet=$_GET[miktar]*$okutyes[miktar]*$birimfiyat;
        }
        $malzemesid=$okutyes[altmalzemeid];

      
        //sisteme ekle

     

        $Stquery = $db->prepare("insert into satinalmamaliyetleri (altmalzemeid,miktar,toplamkg,brfiyat,fiyatbirimi,malzemeid,tlmaliyet,deleted) 
        values('$malzemesid','$miktaradet','$miktarkg','$birimfiyat','$fiyatbirimi','".$_GET[kayitid]."','$tlmaliyet','false')");
        $Stquery->execute();

  


    }
    if (iconv( "ISO-8859-9","UTF-8",$okutyes[malzemeturu])=='Yarımamul')
    {

        
        if ($okutyes[kilo]!='')
        {
            $ymmiktar=$_GET[miktar]*$okutyes[kilo];

        }
        if ($okutyes[miktar]!='')
        {
            $ymmiktar=$_GET[miktar]*$okutyes[miktar];
           
        }

        $sqlyes="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid='".$okutyes['altmalzemeid']."' and malzemerecete.deleted='false'";

    
        $zquerys = $db->prepare($sqlyes);
$zquerys->execute();

while( $okutyes3 =$zquerys->fetch(PDO::FETCH_ASSOC) )
{

    if ($okutyes3[malzemeturu]=='Hammadde')
    {

        $sqlyes="select * from malzemetedarikcileri where malzemeid='".$okutyes3['altmalzemeid']."' and malzemetedarikcileri.deleted='false' limit 1";
   
        $zquery2 = $db->prepare($sqlyes);
        $zquery2->execute();
        
        while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
        {
            $birimfiyat=$okutyes2[birimfiyat];
            $fiyatbirimi=$okutyes2[fiyatbirimi];

        
        }

        if ($okutyes3[kilo]!='')
        {
            $miktarkg=$ymmiktar*$okutyes3[kilo];
            $tlmaliyet=$ymmiktar*$okutyes3[kilo]*$birimfiyat;
        }
        if ($okutyes3[miktar]!='')
        {
            $miktaradet=$ymmiktar*$okutyes[miktar];
            $tlmaliyet=$ymmiktar*$okutyes[miktar]*$birimfiyat;
        }
        $malzemesid=$okutyes3[altmalzemeid];

         //sisteme ekle


         $Stquery = $db->prepare("insert into satinalmamaliyetleri (altmalzemeid,miktar,toplamkg,brfiyat,fiyatbirimi,malzemeid,tlmaliyet,deleted) 
         values('$malzemesid','$miktaradet','$miktarkg','$birimfiyat','$fiyatbirimi','".$_GET[kayitid]."','$tlmaliyet','false')");
         $Stquery->execute();





    }

}

    }






}


$urunid=$_GET[kayitid];
$miktar=$_GET[miktar];
$sql=$db->prepare("select sum(case when fiyatbirimi='TL' then round(tlmaliyet,2) else round(satisfiyat*tlmaliyet,2) end) as toplammaliyet,sum(case when fiyatbirimi='TL' then round(tlmaliyet,2) else round(satisfiyat*tlmaliyet,2) end)/$miktar as birimmaliyet from satinalmamaliyetleri left join malzemeler on malzemeler.index_malzemeler=satinalmamaliyetleri.altmalzemeid left join kuraktarimlari on (kuraktarimlari.parabirimi=satinalmamaliyetleri.fiyatbirimi and kuraktarimlari.sonmu='E') where index_satinalmamaliyetleri>0 and satinalmamaliyetleri.malzemeid='$urunid' GROUP by satinalmamaliyetleri.malzemeid");
$sql->execute();

    if($sql !== false)
{
$kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
       echo json_turkce(($kayitlar));
}

}






?>