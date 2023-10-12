<?php


  if ($_GET['page_id']=='listealanlari')
    {
        
        
            if ($_GET['formid']!='')
        {

        

       if ($_GET['turu']=='')
       {
          $sqlys=$db->prepare("select alanadi as 'Name',alanyazisi as 'prop',alanadi as 'dataKey',alanyazisi as 'header' from formalanlari where listegosterim='true' and form_index=? and deleted='false'  order by alansirasi asc" );
       }
       
       
       if ($_GET['turu']=='sorgu')
       {
          $sqlys=$db->prepare("select alanadi as 'Name',alanyazisi as 'prop',alanadi as 'dataKey',alanyazisi as 'header'  from bloklar_alti left join bloklar on bloklar.bokindex=bloklar_alti.blokindex left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where listegosterim='true' and bloklar.formindex=?  and bloklar_alti.deleted='false' and bloklar.turu='Sorgu' order by bloklar_alti.sirasi");
       
     
       }
       
       
       
         $sqlys->execute([$_GET['formid']]);
        
        
      //  $sqlys="select *,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where kayitformu=1 and  formalanlari.form_index=".$_GET[formid];
      //  $sorgula=mysqli_query($connection,$sqlys);
       
        if($sqlys !== false)
{
       $kayitlar=$sqlys->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}

}



        
        
        if ($_GET['menulink']!='')
        {

        $sqlys=$db->prepare("select * from menutasarimi where menu_seo=? and deleted='false' limit 1");
         $sqlys->execute([$_GET['menulink']]);
         
         
         
$result3 = $sqlys->fetchAll();
	 
	 $y=0;
	 foreach($result3 as $link3 => $row3) {

       
          $sqlys=$db->prepare("select alanadi as 'Name',alanyazisi as 'prop',alanadi as 'dataKey',alanyazisi as 'header'  from formalanlari where listegosterim='true' and deleted='false' and form_index=? order by alansirasi asc");
         $sqlys->execute([$row3['formbaglantisi']]);
        
        
      //  $sqlys="select *,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where kayitformu=1 and  formalanlari.form_index=".$_GET[formid];
      //  $sorgula=mysqli_query($connection,$sqlys);
       
        if($sqlys !== false)
{
       $kayitlar=$sqlys->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}

}

}
}


?>