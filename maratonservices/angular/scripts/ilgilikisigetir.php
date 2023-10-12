<?php 
include 'pdo_baglanti.php';



 if ($_GET['page_id']=='ilgilikisigetir')
    {



        $cariid=$_GET[cariid];
        
        
        
        $query=$db->prepare("select cariler.ilgili_kisi from cariler where index_cariler=?  and deleted='false' ");
         $query->execute([$cariid]);
         
                 if($query !== false)
{
          
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
}
        
    }
    
    
     if ($_GET['page_id']=='musteriindexgetir')
    {



        $cariid=iconv('UTF-8','ISO-8859-9',$_GET[caritanimi]);
        
        
        $query=$db->prepare("select cariler.cariindex from cariler where caritanimi like ?  and deleted='false' ");
         $query->execute(['%'.$cariid.'%']);
         
                 if($query !== false)
{
          
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
}
        
    }
?>