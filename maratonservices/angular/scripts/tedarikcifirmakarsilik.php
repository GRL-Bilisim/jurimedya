<?php



include 'pdo_baglanti.php';



 if ($_GET['page_id']=='tedarikcifirmakarsilik')
    {



        $firma=$_GET[firma];
         $ureticikodu=$_GET[ureticikodu];
        
        $query=$db->prepare("select tedarikciurunkartlari.urunadi from tedarikciurunkartlari left join malzemeler on malzemeler.index_malzemeler=tedarikciurunkartlari.hammadde left join talepicerigi on talepicerigi.talepedilen=malzemeler.index_malzemeler where tedarikciadi=? and index_talepicerigi=? and deleted='false' ");
         $query->execute([$firma,$ureticikodu]);
         
                 if($query !== false)
{
              $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
}}

?>