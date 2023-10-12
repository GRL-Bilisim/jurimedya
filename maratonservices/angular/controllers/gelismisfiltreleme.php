<?php 
if($_GET['page_id']=='pdo_gelismisfiltreleme')
    {
       include 'pdo_baglanti.php';
       $formid = $_GET[formid];
       $alanadi = $_GET[alanadi];
       $degeri=iconv("UTF-8","ISO-8859-9",$_GET[degeri]);
  
       $sql=$db->prepare("select * from formlar where form_index=? and deleted='false' ");
       $sql->execute([$formid]);
       
       if($sql !== false)
       {
           while($oku=$sql-> fetch(PDO::FETCH_ASSOC))
           {
                $tablosu=$oku[tablosu];
                
                $c = $db->prepare("select * from $tablosu where $alanadi=? limit 1");
                $c->execute([$degeri]);
                
                        if($c !== false)
                        {
                               $kayitlar=$c->fetchAll(PDO::FETCH_ASSOC);
                                       echo json_turkce(($kayitlar));
                        }
                
         
           }
    }
    }
?>