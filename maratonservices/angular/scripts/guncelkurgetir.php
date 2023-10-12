<?php 

include 'pdo_baglanti.php';

 if ($_GET['page_id']=='guncelkurgetir')
 {
        $kur=$_GET[kur];
        
        $query=$db->prepare("select kuraktarimlari.satisfiyat from kuraktarimlari where parabirimi=? and deleted='false' order by tarih desc,saat desc limit 1   ");
         $query->execute([$kur]);
                 
         if($query !== false)
        {
            
           $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
            echo json_turkce($kayitlar);
             
        }
 }

?>