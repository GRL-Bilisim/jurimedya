<?php 

include 'pdo_baglanti.php';

 if ($_GET['page_id']=='gozadedigetir')
 {
        $kalipno=$_GET[kalip_no];
        
        $query=$db->prepare("select kaliptanitim.goz_adedi from kaliptanitim where kalip_no=?  and deleted='false' ");
         $query->execute([$kalipno]);
                 
         if($query !== false)
        {
            
           $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
            echo json_turkce($kayitlar);
             
        }
 }


?>