<?php 
if($_GET['page_id']=='bloklar')
    {
       include 'pdo_baglanti.php';
       $formid = $_GET[formid];
    
    if ($_GET[turu]!='design')
    {
         $query=$db->prepare("select formlar.formturu,formlar.formtanimi,bloklar.*,concat_ws('-','form-row col',boyut) as blokboyutu from bloklar left join formlar on formlar.form_index=bloklar.bagliformindex where bloklar.formindex=? and bloklar.deleted='false' and bloklar.turu<>'Sorgu' order by bloklar.sirasi,bloklar.grupadi");
    }
    
    
     if ($_GET[turu]=='design')
    {
         $query=$db->prepare("select formlar.formturu,formlar.formtanimi,bloklar.*,concat_ws('-','form-row col',boyut) as blokboyutu from bloklar left join formlar on formlar.form_index=bloklar.bagliformindex where bloklar.formindex=? and bloklar.deleted='false' order by bloklar.sirasi,bloklar.grupadi");
    }
    
    
         $query->execute([$formid]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}



?>