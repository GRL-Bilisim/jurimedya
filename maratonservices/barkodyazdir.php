
<html>
    <head>
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <title>Barkod Fişi</title>
        <script type="text/javascript">
        window.print();
        </script>
        
        
        <style>
table, tr, td {
  border:1px solid black;
}
table {
  border-collapse: collapse;
}
</style>
        </head>
        <body>
<?php


include 'baglanti.php';

if ($_GET[tipi]=='rafbarkodu')
{
    
    $sql="select * from ambarraflari left join ambarlar on ambarlar.index_ambarlar=ambarraflari.ambarid where index_ambarraflari=".$_GET[rafid];
    $sorbana=mysqli_query($connection,$sql);
    
    while($okut=mysqli_fetch_assoc($sorbana))
    {
        
   ?> 
  <div style="width:200px;text-align:center;"><img src="https://chart.googleapis.com/chart?chs=160x160&cht=qr&chl=https%3A%2F%2Fwww.znr.bulutfabrika.net%2Findex.php?raf=<?php echo $_GET[rafid];  ?>" title="Raf Listesi Linki" />  
    <?php  
    
    echo "<div style=\"margin-left: -13px;text-align: center;line-height: 0.8;font-size: 40px;\">".$okut[raftanimi]."<p style=\"
    font-size: 12px;
\">".$okut[ambarkodu]."</p></div>";
    
        
    }
    
    
    
    
    
    
}




if ($_GET[tipi]=='rafbarkodtumu')
{

$rafkodu = $_GET[rafkodu];

    $sql="select * from ambarraflari left join ambarlar on ambarlar.index_ambarlar=ambarraflari.ambarid where ambarid='".$_GET[ambarid]."' and raftanimi like '".$rafkodu."%' " ;
    $sorbana=mysqli_query($connection,$sql);
    
  while($okut=mysqli_fetch_assoc($sorbana))
    {
        
   ?> 
  <div style="width:200px;text-align:center;"><img src="https://chart.googleapis.com/chart?chs=160x160&cht=qr&chl=https%3A%2F%2Fwww.znr.bulutfabrika.net%2Findex.php?raf=<?php echo $_GET[index_ambarraflari];  ?>" title="Raf Listesi Linki" />  
    <?php  
    
    echo "<div style=\"margin-left: -13px;text-align: center;line-height: 0.8;font-size: 40px;\">".$okut[raftanimi]."<p style=\"
    font-size: 12px;
\">".$okut[ambarkodu]."</p></div>";
    
        
    }
    
    
    
    
    
    
}

if ($_GET[tipi]=='paletbarkodu')
{
    
        $sql="select uretimpaletleri.*,malzemeler.ureticikodu as birlesik,malzemeler.malzemeaciklamasi as malzemeack from uretimpaletleri left join uretimemirleri on uretimemirleri.index_uretimemirleri=uretimpaletleri.uretimid left join malzemeler on (malzemeler.index_malzemeler=uretimemirleri.malzemeid or malzemeler.index_malzemeler=uretimpaletleri.malzemeid)  where (uretimpaletleri.index_uretimpaletleri='".$_GET[id]."' or uretimpaletleri.paletno='".$_GET[id]."' ) limit 1";
    

    $sorbana=mysqli_query($connection,$sql);
    
    while($okut=mysqli_fetch_assoc($sorbana))
    {
        $sira=$okut[index_uretimpaletleri];
        
        if ($sira<>'')

{



$verim=($sira*1);



if ($verim<10)

{

$degerc='00000'."$verim";

}



if ($verim>9&&$verim<100)

{

$degerc='0000'."$verim";

}



if ($verim>99&&$verim<1000)

{

$degerc='000'."$verim";

}



if ($verim>999&&$verim<10000)

{

$degerc='00'."$verim";

}

if ($verim>9999&&$verim<100000)

{

$degerc='0'."$verim";

}
if ($verim>99999&&$verim<1000000)

{

$degerc="$verim";

}


$tarih=date("Y-m-d");
$zaman=date("H:i:s");



}
$sarjno='XXXXXX';
if ($okut[sarjno]!="")
{
    $sarjno=$okut[sarjno];
}
        
   ?> 
    <div style="width:250px;text-align:center;"><img src="https://chart.googleapis.com/chart?chs=140x140&cht=qr&chl=<?php echo $_GET[id];  ?>_<?php echo $okut[malzemeid]; ?>_<?php echo $sarjno; ?>" title="Malzeme Barkodu" />  
    
    <table style="width:100%;font-size:14px;font-family: 'Roboto', sans-serif;">
        <tr><td style="width:35%;">Kod:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[birlesik]); ?></td></tr>
        <tr><td style="width:35%;">Tanımı:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[malzemeack]); ?></td></tr>
        <tr><td style="width:35%;">Tarih-Saat:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[tarih]." ".$okut[saat]); ?></td></tr>
        <tr><td style="width:35%;">Şarj No:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[sarjno]); ?></td></tr>
        <tr><td style="width:35%;">Palet Kodu:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[paletno]); ?></td></tr>
    </table>    
    
    <?php  
    

        
    }
    
    
    
    
    
    
}


if ($_GET[tipi]=='sayimbarkodu')
{
    
    $sql="select sayimlistesi.*,malzemeler.ureticikodu as birlesik,malzemeler.malzemeaciklamasi as malzemeack,index_malzemeler from sayimlistesi left join malzemeler on (malzemeler.index_malzemeler=sayimlistesi.malzemeid)  where index_sayimlistesi='".$_GET[malzemeid]."' limit 1";

    $sorbana=mysqli_query($connection,$sql);
    
    while($okut=mysqli_fetch_assoc($sorbana))
    {
        $sira=$okut[index_sayimlistesi];
        
        if ($sira<>'')

{



$verim=($sira*1);



if ($verim<10)

{

$degerc='00000'."$verim";

}



if ($verim>9&&$verim<100)

{

$degerc='0000'."$verim";

}



if ($verim>99&&$verim<1000)

{

$degerc='000'."$verim";

}



if ($verim>999&&$verim<10000)

{

$degerc='00'."$verim";

}

if ($verim>9999&&$verim<100000)

{

$degerc='0'."$verim";

}
if ($verim>99999&&$verim<1000000)

{

$degerc="$verim";

}


$tarih=date("Y-m-d");
$zaman=date("H:i:s");



}

        
   ?> 
  <div style="width:250px;text-align:center;"><img src="https://chart.googleapis.com/chart?chs=140x140&cht=qr&chl=sayimbarkodu=<?php echo $_GET[malzemeid];  ?>_<?php echo $okut[index_malzemeler]; ?>" title="Malzeme Barkodu" />  
    
    <table style="width:100%;font-size:14px;font-family: 'Roboto', sans-serif;">
        <tr><td style="width:35%;">Kod:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[birlesik]); ?></td></tr>
        <tr><td style="width:35%;">Tanımı:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[malzemeack]); ?></td></tr>

        <tr><td style="width:35%;">SKT:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[sonkullanmatarihi]); ?></td></tr>
    </table>    
    
    <?php  
    

        
    }
    
    
    
    
    
    
}

if ($_GET[tipi]=='uretimbarkodu')
{
    
    $sql="select *,ureticikodu as birlesik  from malzemeler where ureticikodu='".$_GET[malzemeid]."' limit 1";

    $sorbana=mysqli_query($connection,$sql);
    
    while($okut=mysqli_fetch_assoc($sorbana))
    {
        $sira=$okut[index_malzemeler];
        
        if ($sira<>'')

{



$verim=($sira*1);



if ($verim<10)

{

$degerc='00000'."$verim";

}



if ($verim>9&&$verim<100)

{

$degerc='0000'."$verim";

}



if ($verim>99&&$verim<1000)

{

$degerc='000'."$verim";

}



if ($verim>999&&$verim<10000)

{

$degerc='00'."$verim";

}

if ($verim>9999&&$verim<100000)

{

$degerc='0'."$verim";

}
if ($verim>99999&&$verim<1000000)

{

$degerc="$verim";

}


$tarih=date("Y-m-d");
$zaman=date("H:i:s");


$varsayilan=$degerc;

$sqlyes="select * from serilotlar where tarih='".$tarih."' and baslamasaati<='".$zaman."' and bitissaati>='".$zaman."'";


$sorbanas=mysqli_query($connection,$sqlyes);

  while($okut2=mysqli_fetch_assoc($sorbana))
    {
        $varsayilan=$varsayilan.$okut2[lot];
        
    }


}

        
   ?> 
  <div style="width:250px;text-align:center;"><img src="https://chart.googleapis.com/chart?chs=140x140&cht=qr&chl==https%3A%2F%2Fwww.znr.bulutfabrika.net%2Findex.php?uretimbarkodu=<?php echo $_GET[malzemeid];  ?>_<?php echo $okut[index_malzemeler]; ?>" title="Malzeme Barkodu" />  
    
    <table style="width:100%;font-size:14px;font-family: 'Roboto', sans-serif;">
        <tr><td style="width:35%;">Kod:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[birlesik]); ?></td></tr>
        <tr><td style="width:35%;">Tanımı:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[malzemeaciklamasi]); ?></td></tr>
        <tr><td style="width:35%;">Depo ve Raf:</td><td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[ambar]."/".$okut[raf]." ".$okut[goz]); ?></td></tr>
    </table>    
    
    <?php  
    

        
    }
    
    
    
    
    
    
}



?> 
</body>
</html>