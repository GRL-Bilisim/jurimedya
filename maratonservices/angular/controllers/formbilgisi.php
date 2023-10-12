<?php


  if ($_GET['page_id']=='formbilgisi')
    {



if ($_GET['formid']!='')
{


       
          if ($_GET['turu']=='')
       {
          $sqlys=$db->prepare("select alanadi as 'Name',alanyazisi as 'prop' from formalanlari where listegosterim='true' and form_index=?");
       }
       
       
       if ($_GET['turu']=='sorgu')
       {
          $sqlys=$db->prepare("select alanadi as 'Name',alanyazisi as 'prop' from bloklar_alti left join bloklar on bloklar.bokindex=bloklar_alti.blokindex left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where listegosterim='true' and bloklar.formindex=? and bloklar.turu='Sorgu' order by bloklar_alti.sirasi");
     
       }
         $sqlys->execute([$_GET['formid']]);
        
        
      //  $sqlys="select *,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where kayitformu=1 and  formalanlari.form_index=".$_GET[formid];
      //  $sorgula=mysqli_query($connection,$sqlys);
       
        if($sqlys !== false)
{
    
    
    
    $result4 = $sqlys->fetchAll();
	 
	 $sutunlar="";
	 
    	 foreach($result4 as $link4 => $row4) {
    	     
    	     if ($sutunlar!='')
    	     {
    	         $sutunlar=$sutunlar.",".$row4[Name];
    	     }
    	     else
    	     {
    	         $sutunlar=$row4[Name];
    	     }
    	     
    	 }
    	 
    	 
    	     
          $sqlys=$db->prepare("select formturu,tarihalani,formtanimi,form_index,toplamalani,'".$sutunlar."' as sutunlar from formlar where form_index=?");
          
        $sqlys->execute([$_GET['formid']]);
        
    	 
    	 
    
       $kayitlar=$sqlys->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}



}

if ($_GET['menulink']!='')
{
        $sqlys=$db->prepare("select * from menutasarimi where menu_seo=? limit 1");
         $sqlys->execute([$_GET['menulink']]);
         
         
         
$result3 = $sqlys->fetchAll();
	 
	 $y=0;
	 foreach($result3 as $link3 => $row3) {

       
          $sqlys=$db->prepare("select alanyazisi as 'Name',alanadi as 'prop' from formalanlari where listegosterim='true' and form_index=?");
         $sqlys->execute([$row3['formbaglantisi']]);
        
        
      //  $sqlys="select *,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where kayitformu=1 and  formalanlari.form_index=".$_GET[formid];
      //  $sorgula=mysqli_query($connection,$sqlys);
       
        if($sqlys !== false)
{
    
    
    
    $result4 = $sqlys->fetchAll();
	 
	 $sutunlar="";
	 
    	 foreach($result4 as $link4 => $row4) {
    	     
    	     if ($sutunlar!='')
    	     {
    	         $sutunlar=$sutunlar.",".$row4[prop];
    	     }
    	     else
    	     {
    	         $sutunlar=$row4[prop];
    	     }
    	     
    	 }
    	
    	 
    	     
          $sqlys=$db->prepare("select formturu,tarihalani, formtanimi,form_index,toplamalani,'".$sutunlar."' as sutunlar from formlar where form_index=?");
          
        $sqlys->execute([$row3['formbaglantisi']]);
        
    	 
    	 
    
       $kayitlar=$sqlys->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}

}

}
}

?>