
<?php 

 if ($_GET['page_id']=='todopage')
    {
  
         include 'pdo_baglanti.php';
           $userid=$_GET[userid];
           
                   $query=$db->prepare("select * from kullanicilar where user_indeks=?  and deleted='false' ");
         $query->execute([$userid]);
         
                 if($query !== false)
{
            while( $kulcek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                  $username=$kulcek[username];
              }
}

echo "[";    
if ($_GET[departman]=='')
{
$sth = $db->prepare(" select gorevler.*,kullanicilar.adi as adi,k1.adi as sorumlu FROM `gorevler` left join kullanicilar on kullanicilar.user_indeks=gorevler.olusturan left join kullanicilar k1 on k1.username=gorevler.sorumlusu where gorevler.deleted='false' and ( gorevler.olusturan=? or sorumlusu like ?  or onaylayacak like ?  ) order by sira asc  ");
}

if ($_GET[departman]!='')
{
    
    
    $pieces = explode(",", $_GET[departman]);
    for ($i=0;$i<count($pieces);$i++)
    {
        if ($i==0)
        {
            $filtre_ek="ilgilidepartman like '%".$pieces[$i]."%'";
        }
        else
        {
           $filtre_ek=$filtre_ek." or ilgilidepartman like '%".$pieces[$i]."%'"; 
        }
        
        
    }
    

$sth = $db->prepare(" select gorevler.*,kullanicilar.adi as adi FROM `gorevler` left join kullanicilar on kullanicilar.user_indeks=gorevler.olusturan where gorevler.deleted='false' and ( gorevler.olusturan=? or sorumlusu like ?  or onaylayacak like ?  )  order by sira asc  ");
}


$sth->execute([$userid,'%'.$username.'%','%'.$username.'%']);
$result3 = $sth->fetchAll();
	 $y=0;
	 foreach($result3 as $link => $row) {
	     
	     	            $olusturan=iconv( "ISO-8859-9","UTF-8",$row[adi]);
$sorumlu=iconv( "ISO-8859-9","UTF-8",$row[sorumlu]);
	     
	     $sp = explode(',',$row[sorumlusu]);
	      for($i=0;$i<count($sp);$i++)
			 {
			     $sorumlu=$sp[$i];
			     
			     	     $sickC = $db->prepare("select * from kullanicilar where user_indeks=? or username like ? ");
	        $sickC->execute([$sorumlu,'%'.$sorumlu.'%']);
	        $resim="";
	        while($dd = $sickC->fetch(PDO::FETCH_ASSOC)){
	            if($dd[resim]!='' && $dd[resim]!=null){
	                $resim='https://salon.bulutfabrika.net/maratonservices/'.$dd[resim].'';
	            }else{
	                $resim='https://salon.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png';
	            }
	           
	        }
	     
			     
			     
			 }
	     

	        if(iconv( "ISO-8859-9","UTF-8",$row[yapildi])=='Atandı'){
	            $badge="primary";
	        }
	         if(iconv( "ISO-8859-9","UTF-8",$row[yapildi])=='Yapılacak'){
	            	            $badge="warning";

	        }
	         if(iconv( "ISO-8859-9","UTF-8",$row[yapildi])=='Yapılıyor'){
	          	            $badge="success";
  
	        }
	         if(iconv( "ISO-8859-9","UTF-8",$row[yapildi])=='Tamamlandı'){
	            	            $badge="info";

	        }
	     
	     if ($y>0)
	     {
	         echo ",";
	     }
	     $y++;
	     echo "{ \"sırası\":\"$row[sira]\" ,\"taskId\": \"$row[gorevindex]\", \"taskTitle\": \"".iconv( "ISO-8859-9","UTF-8",$row['gorevbasligi'])."\", \"badgeClass\": \"$badge\", \"taskMessage\":  \"".preg_replace( "/\r|\n/", "", iconv( "ISO-8859-9","UTF-8",$row['gorevaciklamasi']))."\", \"messageType\": \"text\", \"messageCount\": \"1\",\"linkCount\": \"1\" ,\"createdOn\":\"$row[deadline]\" , \"createdBy\": \"$olusturan\", \"sorumlular\":\"$sorumlu\", \"assignedTo\":\"$resim\", \"isUserImg\":\"true\", \"status\": \"".iconv( "ISO-8859-9","UTF-8",$row['yapildi'])."\",\"department\": \"".iconv( "ISO-8859-9","UTF-8",$row['ilgilidepartman'])."\" }";
	 }
	 
	 
echo "]";


}

?>