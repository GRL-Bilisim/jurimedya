<?php 

 header("Access-Control-Allow-Origin: *");

include 'pdo_baglanti.php';

 if ($_GET['page_id']=='firmakarsilik')
 {
        $firma=$_GET[firma];
        $ureticikodu=$_GET[ureticikodu];
        
        $query=$db->prepare("select malzemeler.malzemekodu from firma_karsiliklari left join malzemeler on malzemeler.index_malzemeler=firma_karsiliklari.malzemeid where firmaid=? and karsilik_no=? and firma_karsiliklari.deleted='false'");
         $query->execute([$firma,$ureticikodu]);
                 
         if($query !== false)
        {
            
           $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
            echo json_turkce($kayitlar);
             
        }
 }

?>