<?php

include 'baglanti.php';


if ($_GET[yetkinlik]!='')
{
    
    mysqli_query($connection,"insert into isgucupolivalanslari values(null,'".$_GET[personelid]."','".iconv( "UTF-8","ISO-8859-9",$_GET[id])."','".$_GET[yetkinlik]."')");
    
}


?>