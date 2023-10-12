<?php
 header("Access-Control-Allow-Origin: *");

include 'baglanti.php';


$sqlsor="select * from formlar where `form_index`=".$_GET[formid];

$sorgula=mysqli_query($connection,$sqlsor);
while($okut=mysqli_fetch_assoc($sorgula))
{


$formalanlari="select * from formalanlari where kayitformu='1' and form_index=".$_GET[formid];
$sor=mysqli_query($connection,$formalanlari);

while($formalan=mysqli_fetch_assoc($sor))
{
    
    
    $sqlyes="show columns from ".$okut[tablosu]." where field='".$formalan[alanadi]."'";
    $alansayisi=mysqli_num_rows(mysqli_query($connection,$sqlyes));
    
  
 if ($alansayisi==0)
 {  
    $sql="alter table ".$okut[tablosu]." add column ";
if ($formalan[verigiristuru]<>'Sorgu'&&$formalan[anahtaralan]<>'True')
{

if ($formalan[alanturu]=='Tamsayi'||iconv( "ISO-8859-9","UTF-8",$formalan[alanturu])=='Sayı') 
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql." `".$formalan[alanadi]."` INT( 3 ) NOT NULL";
}
if ($formalan[zorunlu]<>'True') 
{
$sql=$sql." `".$formalan[alanadi]."` INT( 3 )";
}
}

if ($formalan[alanturu]=='Karakter'||$formalan[alanturu]=='Dosya') 
{
if ($formalan[zorunlu]=='True')
{
    
    if ($formalan[alangenisligi]!='0')
{    
$sql=$sql." `".$formalan[alanadi]."` VARCHAR(".$formalan[alangenisligi]." ) NOT NULL";
}

    if ($formalan[alangenisligi]=='0')
{    
$sql=$sql." `".$formalan[alanadi]."` text NOT NULL";
}

}
if ($formalan[zorunlu]<>'True')
{
     if ($formalan[alangenisligi]!='0')
{       
$sql=$sql." `".$formalan[alanadi]."` VARCHAR(".$formalan[alangenisligi]." )";
}

    if ($formalan[alangenisligi]=='0')
{       
$sql=$sql." `".$formalan[alanadi]."` text";
}

}
}

if ($formalan[alanturu]=='Tarih')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql." `".$formalan[alanadi]."` DATE NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql." `".$formalan[alanadi]."` DATE";
}
}


if ($formalan[alanturu]=='Saat')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql." `".$formalan[alanadi]."` time NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql." `".$formalan[alanadi]."` time";
}
}

if ($formalan[alanturu]=='Para')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql." `".$formalan[alanadi]."` float(10,2) NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql." `".$formalan[alanadi]."` float(10,2)";
}
}

if ($formalan[alanturu]=='Tarih-Saat')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql." `".$formalan[alanadi]."` datetime NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql." `".$formalan[alanadi]."` datetime";
}
}


}

mysqli_query($connection,$sql);

    
 }   
    
    
    
}

echo "[{\"status\":\"OK\"}]";

    
    
}


?>