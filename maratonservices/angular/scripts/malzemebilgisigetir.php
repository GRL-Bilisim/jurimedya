<?php 

include 'pdo_baglanti.php';



 if ($_GET['page_id']=='malzemebilgisigetir')
 {

        $malzemeid=$_GET[malzemeid];
        
        $query=$db->prepare("select malzemeler.malzemeaciklamasi from malzemeler where malzemekodu=?  and deleted='false' ");
         $query->execute([$malzemeid]);
         
 if($query !== false)
{
    
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
     
}
        
 }

?>