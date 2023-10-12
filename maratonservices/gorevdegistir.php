<?php



include 'baglanti.php';


$sql="select * from gorevler where index_gorevler=".$_GET[gorevid];
$sorgula=mysqli_query($connection,$sql);

while($okut=mysqli_fetch_assoc($sorgula))
{
    
    if ($okut[yapildi]=='E')
    {
        mysqli_query($connection,"update gorevler set yapildi='H' where index_gorevler=".$_GET[gorevid]);
    }
    
       
    if ($okut[yapildi]!='E')
    {
        mysqli_query($connection,"update gorevler set yapildi='E' where index_gorevler=".$_GET[gorevid]);
    }
    
}


?>