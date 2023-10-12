<?php


function sluggable($text) {
   $text = trim($text);
   $search = array('Ç','ç','Ğ','ğ','ı','İ','Ö','ö','Ş','ş','Ü','ü',' ');
   $replace = array('c','c','g','g','i','i','o','o','s','s','u','u','-');
   $fonktmp = str_replace($search,$replace,$text);
   
       $fonktmp = preg_replace("/ +/"," ",$fonktmp);
    // Boşukları - işaretine çevir
    $fonktmp = preg_replace("/ /","-",$fonktmp);
    // Tüm beyaz karekterleri sil
    $fonktmp = preg_replace("/\s/","",$fonktmp);
    // Karekterleri küçült
    $fonktmp = strtolower($fonktmp);
    // Başta ve sonda - işareti kaldıysa yoket
    $fonktmp = preg_replace("/^-/","",$fonktmp);
    $fonktmp = preg_replace("/-$/","",$fonktmp);
   return $fonktmp;
} 



 if($_GET['page_id']=='pdo_kullanicimenusu')
 {


echo "[";


       $userid = $_GET['userid'];
       
 

         
      
         
                if($query !== false)
{
    

    $sth = $db->prepare("select * from kullanicirolleri where userid=? and kullanicirolleri.deleted='false'  and (yetkituru like '".iconv( "UTF-8","ISO-8859-9",'%ekli Yetki%')."' or (yetkituru not like '%".iconv("UTF-8","ISO-8859-9",'%ekli Yetki%')."' and yetkibaslama>='$tarih' and yetkibitisi<='$tarih'))");
$sth->execute([$userid]);

$result = $sth->fetchAll();
    
	 
foreach ($result as $link => $row) {



    $sth = $db->prepare("select * from roller where deleted='false' and index_roller=".$row['rolid'] );
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
	         echo ",";
	     }
	
	$y++;
	   	$sql2="select * from menutasarimi where seviye='Seviye-2' and deleted='false'  and ustseviyesi='".$row3['index_menutasarimi']."' order by sirasi asc";
	
    $sth1 = $db->prepare($sql2);
$sth1->execute();

$result4 = $sth1->fetchAll();
			

	 if (count($result4)==0)
	 {
	     $icon='ft-server';
	     
	     if ($row3['kopru']=='')
	     {
	         $link='listings/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row3['menutanimi']));
	     }
	     
	     if ($row3['kopru']!='')
	     {
	         
	         $link='/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row3['kopru']));
	     }
	     
	     if ($row3['menuicon']!='')
	     {
	         
	         $icon=$row3['menuicon'];
	     }
	     
	     echo "{ \"path\": \"/$link\", \"title\": \"".iconv( "ISO-8859-9","UTF-8",$row3['menutanimi'])."\", \"icon\": \"".$icon."\", \"class\": \"\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": []}";
	 }
	 
	  if (count($result4)>0)
	 {
	     
	      $icon='ft-server';
if ($row3['menuicon']!='')
	     {
	         
	         $icon=$row3['menuicon'];
	     }
	     
	     echo "{ \"path\": \"\", \"title\": \"".iconv( "ISO-8859-9","UTF-8",$row3['menutanimi'])."\", \"icon\": \"".$icon."\", \"class\": \"has-sub\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": [";
	     
	     $r=0;
	     	 	 foreach($result4 as $link4 => $row4) {
	     	  
	     	  if ($r>0)
	     	  {
	     	      echo ",";
	     	  }
	     	  
	     	  $r++;   
	     	     
	     	     	$sql2="select * from menutasarimi where seviye='Seviye-3'  and deleted='false' and ustseviyesi='".$row4['index_menutasarimi']."' order by sirasi asc";
			     $sth2 = $db->prepare($sql2);
$sth2->execute();

$result5= $sth2->fetchAll();
	  
	  
	   if (count($result5)==0)
	 {
	       $icon='ft-server';
	       if ($row4['kopru']=='')
	     {
	         $link='listings/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row4['menutanimi']));
	     }
	     
	     if ($row4['kopru']!='')
	     {
	         
	           $link='/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row4['kopru']));
	     }
	     
	     if ($row4['menuicon']!='')
	     {
	         
	         $icon=$row4['menuicon'];
	     }
	     
	     
	            echo "{ \"path\": \"/$link\", \"title\": \"".iconv( "ISO-8859-9","UTF-8",$row4['menutanimi'])."\", \"icon\": \"".$icon."\", \"class\": \"\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": []}";
	
	 }
	 
	 
	   if (count($result5)>0)
	 {
	       $icon='ft-server';
	        echo "{ \"path\": \"\", \"title\": \"".iconv( "ISO-8859-9","UTF-8",$row4['menutanimi'])."\", \"icon\": \"".$icon."\", \"class\": \"has-sub\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": [";
	     
	     $j=0;
	     	 foreach($result5 as $link5 => $row5) {
	         
	         if ($j>0)
	         {
	             echo ",";
	         }
	         
	           if ($row5['kopru']=='')
	     {
	         $link='listings/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row5['menutanimi']));
	     }
	     
	     if ($row5['kopru']!='')
	     {
	         
	       $link='/'.sluggable(iconv( "ISO-8859-9","UTF-8",$row5['kopru']));
	     }
	     
	     if ($row5['menuicon']!='')
	     {
	         
	         $icon=$row5['menuicon'];
	     }
	     
	         
	         echo "{ \"path\": \"$link\", \"title\": \"".iconv( "ISO-8859-9","UTF-8",$row5['menutanimi'])."\", \"icon\": \"ft-arrow-right submenu-icon\", \"class\": \"\", \"badge\": \"\", \"badgeClass\": \"\", \"isExternalLink\": false, \"submenu\": [] }";
	         
	         $j++;
	         
	     }
	     
	   echo "]}";
	 }
	 	      

	 
	 
	  
	     	     
	     	 }
	     
	        echo "]}";
	 }
	 
	 
	     
	     
	     
	     
	     
	 }
	 

	
	
  
}
  

}
       
       
} 
		
		


     
 echo "]";    
     
     
 }


?>