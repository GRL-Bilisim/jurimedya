<?php 
if($_GET['page_id']=='mastervaluegetir')
    {
       include 'pdo_baglanti.php';
       
       $formid = $_GET[formid];
       $recordid = $_GET[recordid];
       $masterfield = $_GET[masterfield];
       
      
        $query=$db->prepare("select * from formlar where form_index=?  and deleted='false' ");
         $query->execute([$formid]);
         
                 if($query !== false)
{
            while( $formcek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                $tablosu=$formcek['tablosu'];
              }
              
                 $anahtarsor=$db->prepare("SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY' ");
                 $anahtarsor->execute();

         while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
        {
            $anahtar2=$agel['Column_name'];
        }
        
              $queryZ=$db->prepare("select $masterfield as mastervalue  from $tablosu where  $anahtar2=?  and deleted='false' ");
              $queryZ->execute([$recordid]);
              
                          $rows = array();

                      if($queryZ !== false)
                {
       $kayitlar=$queryZ->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
        }
            
}
   
}



?>