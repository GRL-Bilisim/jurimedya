<?php 
    

  if ($_GET['page_id']=='prosesalanlari')
    {

        include 'pdo_baglanti.php';
        
        
        
        
        $sqls=$db->prepare("select * from uretimprosesi left join prosesler on prosesler.prosestanimi=uretimprosesi.prosestanimi where index_uretimprosesi=?");
        $sqls->execute([$_GET['prosesid']]);
        
                      if($sqls !== false)
{
            while( $okuty =$sqls->fetch(PDO::FETCH_ASSOC) )
              {
        
    
        

        $sql=$db->prepare("select * from prosesalanlari where (verigiristuru='Combobox' or verigiristuru='FixList' or verigiristuru='Secimli' or verigiristuru='Radiobutton') where prosesid=".$okuty[index_prosesler]);
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
           
           
                 
            $updatesorg=$db->prepare("update prosesalanlari set degerleri=?,etiketleri=? where alan_index=? and deleted='false' ");
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
           
           
                 
            $updatesorg=$db->prepare("update prosesalanlari set degerleri=?,etiketleri=? where alan_index=? and deleted='false' ");
            $updatesorg->execute([$veribiriktir,$etiketbiriktir,$okut[alan_index]]);

             //mysqli_query($connection,"update formalanlari set degerleri='".$veribiriktir."',etiketleri='".$etiketbiriktir."' where alan_index=".$okut[alan_index]); 
                
            }
            
            if ($okut[verigiristuru]=='FixList')
            {
                
                $dilimler = explode(";", $okut[fixlist]);
       
            $updatesorg=$db->prepare("update prosesalanlari set degerleri=?, etiketleri=? where alan_index=? and deleted='false' ");
            $updatesorg->execute([$okut[fixlist],$okut[fixlist],$okut[alan_index]]);

            //  mysqli_query($connection,"update formalanlari set degerleri='".$okut[fixlist]."',etiketleri='".$okut[fixlist]."' where alan_index=".$okut[alan_index]);  
                
            }

           if ($okut[verigiristuru]=='Radiobutton')
            {
                
                $dilimler = explode(";", $okut[fixlist]);
       
            $updatesorg=$db->prepare("update prosesalanlari set degerleri=?, etiketleri=? where alan_index=? and deleted='false' ");
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

         $sqlys=$db->prepare("select *,'col-md-6' as alanboyutu,'true' as saatgoster,(case when verigiristuru='Edit' then 'false' else 'true' end) as inputgoster,(case when verigiristuru='Disabled' then 'false' else 'true' end) as disabledgoster,(case when verigiristuru='Date' then 'false' else 'true' end) as tarihgoster,(case when verigiristuru='Hidden' then 'true' else 'false' end) as gizle,(case when verigiristuru='Combobox' then 'false' else 'true' end) as combogoster,(case when verigiristuru='Fixlist' then 'false' else 'true' end) as fixlistgoster,(case when verigiristuru='Textarea' then 'false' else 'true' end) as textgoster,(case when verigiristuru='File(JPG)' or verigiristuru='File(PDF)' then 'false' else 'true' end) as filegoster from prosesalanlari where prosesid=".$okuty[index_prosesler]." and deleted='false'  order by prosesalanlari.alansirasi asc");


         $sqlys->execute([$_GET['formid']]);

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
        
}    
    }    
    
        
?>