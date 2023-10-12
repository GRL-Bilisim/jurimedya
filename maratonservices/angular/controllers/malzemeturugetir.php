<?php 
include 'pdo_baglanti.php';

if($_GET['page_id']=='malzemeturugetir'){

    $userid = $_GET['kayitid'];
    $sql=$db->prepare("select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where index_malzemerecete=?");
    $sql->execute([$userid]);
    
        if($sql !== false)
{
   $kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
           echo json_turkce(($kayitlar));
}



}

?>