<?php 
include 'pdo_baglanti.php';

if($_GET['page_id']=='pdo_favoriler'){

    $userid = $_GET['userid'];
    $sql=$db->prepare("select * from favoriler where userid=? order by index_favoriler desc ");
    $sql->execute([$userid]);
    
        if($sql !== false)
{
   $kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
           echo json_turkce(($kayitlar));
}



}

if($_GET['page_id']=='pdo_favorilerdencikar'){

    $indid = $_GET['indexid'];
    $sql=$db->prepare("delete from favoriler where index_favoriler=?  ");
    $sql->execute([$indid]);
    
        if($sql !== false)
{
    echo "[{\"status\":\"OK\"}]";
}


}


?>