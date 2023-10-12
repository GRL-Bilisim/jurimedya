<?php




include 'baglanti.php';


if ($_GET[eski]!=''&&$_GET[yeni]!='')
{
    
    
mysqli_query($connection,"update formalanlari set alanyazisi='".iconv("UTF-8","ISO-8859-9",$_GET[yeni])."' where alanyazisi='".iconv( "UTF-8","ISO-8859-9",$_GET[eski])."'");    
    
    echo "OK";
    
}


?>