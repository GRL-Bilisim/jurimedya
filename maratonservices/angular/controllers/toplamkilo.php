<?php 
include 'pdo_baglanti.php';

if($_GET['page_id']=='toplamkilo'){

    $userid = $_GET['kayitid'];
    if ($_GET['blok']=='610')
    {
        $tip='1';
    }
    if ($_GET['blok']=='614')
    {
        $tip='2';
    }
    if ($_GET['blok']=='616')
    {
        $tip='3';
    }
    if ($_GET['blok']=='618')
    {
        $tip='4';
    }
    $sql=$db->prepare("select round(100*sum(case when malzemeler.birimkg>0 then malzemeler.birimkg*miktar else kilo end))/100 as toplamkg from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=? and malzemerecete.tip=?");
    $sql->execute([$userid,$tip]);
    
        if($sql !== false)
{
   $kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
           echo json_turkce(($kayitlar));
}



}

?>