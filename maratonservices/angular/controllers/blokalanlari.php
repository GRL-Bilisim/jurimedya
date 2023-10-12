<?php 
    

  if ($_GET['page_id']=='blokalanlari')
    {

        include 'pdo_baglanti.php';
        

        $sql=$db->prepare("select * from formalanlari where (verigiristuru='Combobox' or verigiristuru='FixList' or verigiristuru='Secimli' or verigiristuru='Radiobutton') and form_index=? and deleted='false' ");
        $sql->execute([$_GET['formid']]);
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  
                  
                                if ($okut[verigiristuru]=='Secimli')
            {
           
              $sqlmn = $db->prepare("select * from formlar where form_index=? and deleted='false' ");
              $sqlmn ->execute([$okut[bagliform_index]]) ;
              
              if($sqlmn !=='false'){
                  while($okubeni=$sqlmn->fetch(PDO::FETCH_ASSOC)){
                      	    $sorgu=$okubeni[sorgusu];
							$tablom=$okubeni[tablosu];
                  }
              }
              
        /**      
        $sqlmn="select * from formlar where form_index=$okut[bagliform_index]";
           $sorc=mysqli_query($connection,$sqlmn);
           while ($okubeni=mysqli_fetch_assoc($sorc))
            {

																	

																

										$sorgu=$okubeni[sorgusu];

									    $tablom=$okubeni[tablosu];

																	

																}
			**/
			
			$etiketbiriktir="";
			$veribiriktir="";
			 $verigetir=$db->prepare($sorgu);
                $verigetir->execute();
                  if($verigetir !=='false'){
                  while($okn=$verigetir->fetch(PDO::FETCH_ASSOC)){
                      
                        $alanadi=$okut[keyfield];  
			            $verialani=$okut[valuefield]; 
			        
			          $etiket=$okn[$verialani]; 
			            $verisi=$okn[$alanadi]; 
			            
			     if ($etiketbiriktir!='')
                    {
 
                        $etiketbiriktir=$etiketbiriktir.";".$etiket;
                         $veribiriktir=$veribiriktir.";".$verisi;
                        
                    }
                    if ($etiketbiriktir=='')
                    {   
                         $etiketbiriktir=$etiket;
                         $veribiriktir=$verisi;
                    }
			            
                  }
                  
                     
              }
			
			/**
			$verigetir=mysqli_query($connection,$sorgu);								
																
			while ($okn=mysqli_fetch_assoc($verigetir))

				{

															
				$alanadi=$okut[keyfield];
			    $verialani=$okut[valuefield];
			    
				$etiket=$okn[$verialani];
			    $verisi=$okn[$alanadi];
			    

if ($etiketbiriktir!='')
{
    $etiketbiriktir=$etiketbiriktir.";".$etiket;
     $veribiriktir=$veribiriktir.";".$verisi;
    
}

if ($etiketbiriktir=='')
{
    $etiketbiriktir=$etiket;
     $veribiriktir=$verisi;
    
}
    
																
																
				}
           
           **/
           // $etiketbiriktir = 'paketleme;laboratuar;son montaj;fırın ve vakum;mekanik;elektrik';
           // $veribiriktir = 'paketleme;laboratuar;son montaj;fırın ve vakum;mekanik;elektrik'
           
           
                 
            $updatesorg=$db->prepare("update formalanlari set degerleri=?,etiketleri=? where alan_index=? and deleted='false' ");
            $updatesorg->execute([$veribiriktir,$etiketbiriktir,$okut[alan_index]]);

             //mysqli_query($connection,"update formalanlari set degerleri='".$veribiriktir."',etiketleri='".$etiketbiriktir."' where alan_index=".$okut[alan_index]); 
                
            }
             
                   
                  
                
                           if ($okut[verigiristuru]=='Combobox')
            {
                
              
              $sqlmn = $db->prepare("select * from formlar where form_index=? and deleted='false' ");
              $sqlmn ->execute([$okut[bagliform_index]]) ;
              
              if($sqlmn !=='false'){
                  while($okubeni=$sqlmn->fetch(PDO::FETCH_ASSOC)){
                      	    $sorgu=$okubeni[sorgusu];
							$tablom=$okubeni[tablosu];
                  }
              }
              
        /**      
        $sqlmn="select * from formlar where form_index=$okut[bagliform_index]";
           $sorc=mysqli_query($connection,$sqlmn);
           while ($okubeni=mysqli_fetch_assoc($sorc))
            {

																	

																

										$sorgu=$okubeni[sorgusu];

									    $tablom=$okubeni[tablosu];

																	

																}
			**/
			
			$etiketbiriktir="";
			$veribiriktir="";
			 $verigetir=$db->prepare($sorgu);
                $verigetir->execute();
                  if($verigetir !=='false'){
                  while($okn=$verigetir->fetch(PDO::FETCH_ASSOC)){
                      
                        $alanadi=$okut[keyfield];  
			            $verialani=$okut[valuefield]; 
			        
			          $etiket=$okn[$verialani]; 
			            $verisi=$okn[$alanadi]; 
			            
			     if ($etiketbiriktir!='')
                    {
 
                        $etiketbiriktir=$etiketbiriktir.";".$etiket;
                         $veribiriktir=$veribiriktir.";".$verisi;
                        
                    }
                    if ($etiketbiriktir=='')
                    {   
                         $etiketbiriktir=$etiket;
                         $veribiriktir=$verisi;
                    }
			            
                  }
                  
                     
              }
			
			/**
			$verigetir=mysqli_query($connection,$sorgu);								
																
			while ($okn=mysqli_fetch_assoc($verigetir))

				{

															
				$alanadi=$okut[keyfield];
			    $verialani=$okut[valuefield];
			    
				$etiket=$okn[$verialani];
			    $verisi=$okn[$alanadi];
			    

if ($etiketbiriktir!='')
{
    $etiketbiriktir=$etiketbiriktir.";".$etiket;
     $veribiriktir=$veribiriktir.";".$verisi;
    
}

if ($etiketbiriktir=='')
{
    $etiketbiriktir=$etiket;
     $veribiriktir=$verisi;
    
}
    
																
																
				}
           
           **/
           // $etiketbiriktir = 'paketleme;laboratuar;son montaj;fırın ve vakum;mekanik;elektrik';
           // $veribiriktir = 'paketleme;laboratuar;son montaj;fırın ve vakum;mekanik;elektrik'
           
           
                 
            $updatesorg=$db->prepare("update formalanlari set degerleri=?,etiketleri=? where alan_index=? and deleted='false' ");
            $updatesorg->execute([$veribiriktir,$etiketbiriktir,$okut[alan_index]]);

             //mysqli_query($connection,"update formalanlari set degerleri='".$veribiriktir."',etiketleri='".$etiketbiriktir."' where alan_index=".$okut[alan_index]); 
                
            }
            
            if ($okut[verigiristuru]=='FixList')
            {
                
                $dilimler = explode(";", $okut[fixlist]);
       
            $updatesorg=$db->prepare("update formalanlari set degerleri=?, etiketleri=? where alan_index=? and deleted='false' ");
            $updatesorg->execute([$okut[fixlist],$okut[fixlist],$okut[alan_index]]);

            //  mysqli_query($connection,"update formalanlari set degerleri='".$okut[fixlist]."',etiketleri='".$okut[fixlist]."' where alan_index=".$okut[alan_index]);  
                
            }

           if ($okut[verigiristuru]=='Radiobutton')
            {
                
                $dilimler = explode(";", $okut[fixlist]);
       
            $updatesorg=$db->prepare("update formalanlari set degerleri=?, etiketleri=? where alan_index=? and deleted='false' ");
            $updatesorg->execute([$okut[fixlist],$okut[fixlist],$okut[alan_index]]);

            //  mysqli_query($connection,"update formalanlari set degerleri='".$okut[fixlist]."',etiketleri='".$okut[fixlist]."' where alan_index=".$okut[alan_index]);  
                
            }

              }
              
}




/**
        $sql="select * from formalanlari where (verigiristuru='Combobox' or verigiristuru='FixList') and form_index='".$_GET[formid]."'";
        $sorgula=mysqli_query($connection,$sql);
        
        
        
        while ($okut=mysqli_fetch_assoc($sorgula))
        {
            
        
             if ($okut[verigiristuru]=='Combobox')
            {
              
        $sqlmn="select * from formlar where form_index=$okut[bagliform_index]";

           $sorc=mysqli_query($connection,$sqlmn);
           
           
           while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

										$sorgu=$okubeni[sorgusu];

									    $tablom=$okubeni[tablosu];

																	

																}
																
									$verigetir=mysqli_query($connection,$sorgu);								
																
			while ($okn=mysqli_fetch_assoc($verigetir))

				{

															
				$alanadi=$okut[keyfield];

			    $verialani=$okut[valuefield];
			    
			    
			    
				$etiket=$okn[$verialani];

			    $verisi=$okn[$alanadi];
			    

if ($etiketbiriktir!='')
{
    $etiketbiriktir=$etiketbiriktir.";".$etiket;
     $veribiriktir=$veribiriktir.";".$verisi;
    
}

if ($etiketbiriktir=='')
{
    $etiketbiriktir=$etiket;
     $veribiriktir=$verisi;
    
}
    
																
																
				}
           
             mysqli_query($connection,"update formalanlari set degerleri='".$veribiriktir."',etiketleri='".$etiketbiriktir."' where alan_index=".$okut[alan_index]); 
                
            }
            
            if ($okut[verigiristuru]=='FixList')
            {
               
                $dilimler = explode(";", $okut[fixlist]);



              mysqli_query($connection,"update formalanlari set degerleri='".$okut[fixlist]."',etiketleri='".$okut[fixlist]."' where alan_index=".$okut[alan_index]);  
                
            }
            
        
 
            
            
        }
        
**/    

         $sqlys=$db->prepare("select *,(case when bloklar.kolonsayisi='6' then 'col-md-2' when bloklar.kolonsayisi='4' then 'col-md-3' when bloklar.kolonsayisi='3' then 'col-md-4' when bloklar.kolonsayisi='2' then 'col-md-6' when bloklar.kolonsayisi='1' then 'col-md-12' when bloklar.kolonsayisi='12' then 'col-md-1' else 'col-md-3' end) as alanboyutu,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster,bloklar_alti.sirasi as sirano from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index left join bloklar on bloklar.bokindex = bloklar_alti.blokindex where  bloklar.bokindex=? and bloklar_alti.deleted='false'  order by bloklar_alti.sirasi asc");


  $sqlys->execute([$_GET['blokid']]);

      //  $sqlys="select *,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where kayitformu=1 and  formalanlari.form_index=".$_GET[formid];
      //  $sorgula=mysqli_query($connection,$sqlys);
       
        if($sqlys !== false)
{
       $kayitlar=$sqlys->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
                                 
                                        
/**        
        $rows = array();
while($row=mysqli_fetch_assoc($sorgula))

$kayitlar[]=$row;


echo json_turkce(($kayitlar));
**/    

    }    
        
    
        
?>