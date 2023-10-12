<?php


ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';



$tarih=date("Y-m-d");

  


$saat=date("H:i:s");

$tarih=date("Y-m-d");




if ($_GET[ids]!='')
{

$sqlyes="select firsatkalemleri.*,satisfirsatlari.tnno,satisfirsatlari.firma,satisfirsatlari.turu,satisfirsatlari.ilgili from firsatkalemleri left join satisfirsatlari on satisfirsatlari.index_satisfirsatlari=firsatkalemleri.firsatid where firsatid='".$_GET[ids]."'";
$sorbana=mysqli_query($connection,$sqlyes);
$i=0;
while($okut=mysqli_fetch_assoc($sorbana))
{

$sql="select * from veridagitimformu where firsatid='".$okut[index_firsatkalemleri]."'";
$sorgula=mysqli_query($connection,$sql);

$i++;


$formno=$okut[tnno]."-".$i;

if (mysqli_num_rows($sorgula)==0&&$okut[vdfolusturma]=='EVET')
{
 
 mysqli_query($connection,"insert into veridagitimformu(tarih,musteri_adi,urun_proje_adi,firsatid,ilgili,yurtici,no,musteri_urun_kodu,aktaran) values('$tarih','".$okut[firma]."','".$okut[kalemadi]."','".$okut[firsatid]."','".$okut[ilgili]."','".$okut[turu]."','$formno','".$okut[kalemkodu]."','".iconv( "UTF-8","ISO-8859-9",$_SESSION["adi"])."')");
}


} 

    
}



echo "OK";



?>