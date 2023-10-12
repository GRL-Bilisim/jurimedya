<?php

include 'baglanti.php';


$sqlsor="select * from formlar where `form_index`=".$_GET[formid];

$sorgula=mysqli_query($connection,$sqlsor);
while($okut=mysqli_fetch_assoc($sorgula))
{
    $sql="create table `".$okut[tablosu]."` (`"."index_".$okut[tablosu]."` INT( 6 ) NOT NULL AUTO_INCREMENT PRIMARY KEY";


$formalanlari="select * from formalanlari where form_index=".$_GET[formid];
$sor=mysqli_query($connection,$formalanlari);

while($formalan=mysqli_fetch_assoc($sor))
{
    
if ($formalan[verigiristuru]<>'Sorgu'&&$formalan[anahtaralan]<>'True')
{

if ($formalan[alanturu]=='Tamsayi') 
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql.",`".$formalan[alanadi]."` INT( 3 ) NOT NULL";
}
if ($formalan[zorunlu]<>'True') 
{
$sql=$sql.",`".$formalan[alanadi]."` INT( 3 )";
}
}

if ($formalan[alanturu]=='Karakter'||$formalan[alanturu]=='Dosya') 
{
if ($formalan[zorunlu]=='True')
{
    
    if ($formalan[alangenisligi]!='0')
{    
$sql=$sql.",`".$formalan[alanadi]."` VARCHAR(".$formalan[alangenisligi]." ) NOT NULL";
}

    if ($formalan[alangenisligi]=='0')
{    
$sql=$sql.",`".$formalan[alanadi]."` text NOT NULL";
}

}
if ($formalan[zorunlu]<>'True')
{
     if ($formalan[alangenisligi]!='0')
{       
$sql=$sql.",`".$formalan[alanadi]."` VARCHAR(".$formalan[alangenisligi]." )";
}

    if ($formalan[alangenisligi]=='0')
{       
$sql=$sql.",`".$formalan[alanadi]."` text";
}

}
}

if ($formalan[alanturu]=='Tarih')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql.",`".$formalan[alanadi]."` DATE NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql.",`".$formalan[alanadi]."` DATE";
}
}


if ($formalan[alanturu]=='Saat')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql.",`".$formalan[alanadi]."` time NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql.",`".$formalan[alanadi]."` time";
}
}

if ($formalan[alanturu]=='Para')
{
if ($formalan[zorunlu]=='True')
{
$sql=$sql.",`".$formalan[alanadi]."` float(10,2) NOT NULL";
}
if ($formalan[zorunlu]<>'True')
{
$sql=$sql.",`".$formalan[alanadi]."` float(10,2)";
}
}




}

    
    
    
    
    
}


mysqli_query($connection,$sql.")");

echo "OK";
    
    
}


?>