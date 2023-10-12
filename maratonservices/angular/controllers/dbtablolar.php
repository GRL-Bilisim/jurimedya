<?php 


if($_GET['page_id']=='dbtablolar'){


	$jsondata= "[";
	
	 include 'pdo_baglanti.php';
		   $userid = $_GET['userid'];
		   
	 
	
			 
		  
			
	
		$sth = $db->prepare("select * from kullanicirolleri where userid=?  and (yetkituru like '".iconv( "UTF-8","ISO-8859-9",'%ekli Yetki%')."' or (yetkituru not like '%".iconv("UTF-8","ISO-8859-9",'%ekli Yetki%')."' and yetkibaslama>='$tarih' and yetkibitisi<='$tarih'))");
	$sth->execute([$userid]);
	
	$result = $sth->fetchAll();
		
		 
	foreach ($result as $link => $row) {
	
	
	
		$sth = $db->prepare("select * from roller where index_roller=".$row['rolid'] );
	$sth->execute();
	
	$result2 = $sth->fetchAll();
	
	
	foreach ($result2 as $link2 => $row2) {
		
	  
		if ($row2['superuser']!='E')
		{
				$sql="select * from yetkiler left join menutasarimi on menutasarimi.index_menutasarimi=yetkiler.formu where seviye='Seviye-1'  and yetkiler.deleted='false'  and yetkiler.rolid='".$row['rolid']."' order by sirasi asc";
		
			
		}
		
		 if ($row2['superuser']=='E')
		{
				$sql="select * from menutasarimi where seviye='Seviye-1' and deleted='false'  order by sirasi asc";
		}
		
		
		
			
		$sth = $db->prepare($sql);
	$sth->execute();
	
	$result3 = $sth->fetchAll();
		 
		 $y=0;
		 foreach($result3 as $link3 => $row3) {
			 
			 if ($y>0)
			 {
				 
			 }
		
		$y++;
			   $sql2="select * from menutasarimi where seviye='Seviye-2' and deleted='false'  and ustseviyesi='".$row3['index_menutasarimi']."' order by sirasi asc";
		
		$sth1 = $db->prepare($sql2);
	$sth1->execute();
	
	$result4 = $sth1->fetchAll();
				
	
		 if (count($result4)==0)
		 {
			 
			 if ($row3['kopru']=='')
			 {
				 $link='listings/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row3['menutanimi']));
			 }
			 
			 if ($row3['kopru']!='')
			 {
				 
				 $link='/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row3['kopru']));
			 }
			 


		 }
		 
		  if (count($result4)>0)
		 {
		
			 $r=0;
					   foreach($result4 as $link4 => $row4) {
				   

						if ($row4['kopru']=='')
						{
							$link='listings/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row4['menutanimi']));
						}
						
						if ($row4['kopru']!='')
						{
							
							$link='/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row4['kopru']));
						}

			
				   
				   $r++;   
				   $jsondata=$jsondata."{ \"url\": \"$link\", \"name\": \"".iconv( "ISO-8859-9","UTF-8",$row4['menutanimi'])."\", \"icon\": \"ft-arrow-right submenu-icon\", \"class\": \"\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": [] },";

						  $sql2="select * from menutasarimi where seviye='Seviye-3'  and deleted='false' and ustseviyesi='".$row4['index_menutasarimi']."' order by sirasi asc";
					 $sth2 = $db->prepare($sql2);
	$sth2->execute();
	
	$result5= $sth2->fetchAll();


		 
		   if (count($result5)>0)
		 {
			 
					  
	$j=0;
				  foreach($result5 as $link5 => $row5) {
		
				
				
				   if ($row5['kopru']=='')
			 {
				 $link='listings/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row5['menutanimi']));
			 }
			 
			 if ($row5['kopru']!='')
			 {
				 
			   $link='/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row5['kopru']));
			 }
			 
				 	 
			
			 $jsondata=$jsondata."{ \"url\": \"$link\", \"name\": \"".iconv( "ISO-8859-9","UTF-8",$row5['menutanimi'])."\", \"icon\": \"ft-arrow-right submenu-icon\", \"class\": \"\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": [] },";
			
				 
			 }
			 $j++; 
		 }
					  
		  }			 
		 }
		  
		 }

	}
	  
	
	}
		   
	
	
		 
	$jsondata=$jsondata."]";    

	$jsonv = str_replace(',]',']',$jsondata);

	echo $jsonv;

	 }
?>