<?php 

     if ($_GET[page_id]=='formverileri')
    {
        
               include 'pdo_baglanti.php';
        

        $sql=$db->prepare("select * from formlar where form_index=? and deleted='false' ");
        $sql->execute([$_GET['formid']]);
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                              $tablosu=$okut[tablosu];
              }
}
        
           $anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";

 $sorgulamaci=$db->prepare($anahtarsor);
        $sorgulamaci->execute();
                      if($sorgulamaci !== false)
{
            while( $gel =$sorgulamaci->fetch(PDO::FETCH_ASSOC) )
              {
                            $anahtar2=$gel['Column_name'];
              }
}


if ($_GET[kayitid]=='')
{

 $sqlys=$db->prepare("select * from formalanlari where form_index=? and kayitformu='1'");
        $sqlys->execute([$_GET['formid']]);
        
 
        $result3 = $sqlys->fetchAll();
	 
	 $y=0;
	 
	 echo "[{";
	 foreach($result3 as $link3 => $met) {
	     
	     if ($met['alanadi']!='')
	     {
	     
	     if ($y==0)
	     {
	     
	    echo '"'.$met['alanadi'].'": ';
	     }
	     
	     if ($y>0)
	     {
	     
	    echo ',"'.$met['alanadi'].'": ';
	     }
	    
	    $varsayilan=iconv('ISO-8859-9','UTF-8',$met['varsayilan']);
	    


	  if ($met[varsayilan]!='')

{
    
    
    



	if ($met[varsayilan]=='Atandı')

	{
		$varsayilan="Atandı";

	}

	if ($met[varsayilan]=='tarihim')

	{
		$varsayilan=$_GET[tarih];

	}
	
	
		if ($met[varsayilan]=='saatim')

	{

		

		$varsayilan=$_GET[saat];

	}
	

	if ($met[varsayilan]=='date')

	{

		

		$varsayilan=$tarih;

	}
	


	if ($met[varsayilan]=='time')

	{

		

		$varsayilan=$saat;

	}
	
	
	

	if ($met[varsayilan]=='user')

	{
    
    $cl=$db->prepare("select * from kullanicilar where user_indeks=?");
    $cl->execute([$_GET[userid]]);
        
                      if($cl !== false)
{
            while( $oka =$cl->fetch(PDO::FETCH_ASSOC) )
              {
                 $names=iconv('ISO-8859-9','UTF-8',$oka["adi"]); 
              }
		
}
		$varsayilan=$names;

	}

	

	if ($met[varsayilan]=='firmakodu')

	{

		

		$varsayilan=$_SESSION["firmakodu"];

	}

	

	

	if ($met[varsayilan]=='musterino')

	{

		$varsayilan=$_GET["musterino"];

		

	}

	

	if ($met[varsayilan]=='userindis')

	{

		

		$varsayilan=$_GET["userid"];

	}
	
	
		if ($met[varsayilan]=='oturum')

	{

		
if ($_GET["kurumid"]!='')
{

		$varsayilan=$_GET["kurumid"];
}

	}






	
		if ($met[varsayilan]=='personel')

	{

		

		$varsayilan=$_GET["personel"];

	}
	
	
	if ($met[varsayilan]=='tarihim')

	{

		

		$varsayilan=$_GET["tarihim"];

	}
	
	if ($met[varsayilan]=='saatim')

	{

		

		$varsayilan=$_GET["saatim"];

	}
	
	
	
	
	
		
	
			if ($met[varsayilan]=='birimi')

	{

		

		$varsayilan=$_GET[birimi];

	}
	
	

	

	 
	  		if ($met[varsayilan]=='mastervalue'||$met[varsayilan]=='ustformid')

	{
	    
	    if ($_GET[mastervalue]!='')
	    {
	     $varsayilan=$_GET[mastervalue].$_GET[ustformid].$_GET[tasarimid];
	    }
	    
	    
	    if ($_GET[mastervalue]=='')
	    {
	     $varsayilan="-".$_SESSION[user_id];
	    }
	    
	    
	}
	 


	if ($met[varsayilan]=='telefonno')

	{

		$varsayilan=$_GET["telefonno"];

	}

	

	if ($met[varsayilan]=='userturindis')

	{

		

		$varsayilan=$_SESSION["kullanicituru"].$_SESSION["user_id"];

	}

	if ($met[varsayilan]=='carino')

	{
			$varsayilan=$_GET[carino];
		
	}

	if ($met[varsayilan]=='say')

{

       $sqlX=$db->prepare("show table status from bulutfab_znr where name='$tablosu'");
        $sqlX->execute();
        
                      if($sqlX !== false)
{
            while( $oka =$sqlX->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  $sira=$oka["Auto_increment"];

              }
}

$sqlims="";


if ($sira=='')

{



$varsayilan='00001';

$sira=1;



}





if ($sira<>'')

{



$verim=($sira*1);



if ($verim<10)

{

$degerc='0000'."$verim";

}



if ($verim>9&&$verim<100)

{

$degerc='000'."$verim";

}



if ($verim>99&&$verim<1000)

{

$degerc='00'."$verim";

}



if ($verim>999&&$verim<10000)

{

$degerc='0'."$verim";

}

       $sqls=$db->prepare("alter table $tablosu AUTO_INCREMENT =?");
        $sqls->execute([($sira+1)]);


$varsayilan=$degerc;

}





}

	

}



	if ($met[varsayilan]=='doktor')

	{
		     include 'baglanti.php';

             $sql=$db->prepare("select * from usertakip where userid=".$_GET['userid']);
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                 $varsayilan=iconv('ISO-8859-9','UTF-8',$okut['secilendoktor']);
                  
                  
              }
}

	}
	
	if ($met[varsayilan]=='islem')

	{
			     include 'baglanti.php';

             $sql=$db->prepare("select * from usertakip where userid=".$_GET['userid']);
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                 $varsayilan=iconv('ISO-8859-9','UTF-8',$okut['secilenislem']);
                  
                  
              }
}

	}



if ($met[varsayilan]=='carino')

	{
			$varsayilan=$_GET[carino];
		
	}


if ($met[varsayilan]=='otomatik')

	{

		

		$varsayilan="";

		

		if ($_GET[patternid]!="")

		{

			$sqlsaa="select ".$met[alanadi]." from arackiralama where index_arackiralama=".$_GET[patternid];

			$sorgulana=mysqli_query($connection,$sqlsaa);

			

			

			while ($okumasi=mysqli_fetch_assoc($sorgulana))

			{

				$alaan=$met[alanadi];

				$varsayilan=$okumasi[$alaan];

			}

			

		}

		

	}



$varsayilan=iconv('ISO-8859-9','UTF-8',$met['varsayilansabit']).$varsayilan;
  
  
  echo '"'.$varsayilan.'"';
	   
	    
	  $y++;   
	     }
	     
	 }
        
echo "}]";

} 


if ($_GET[kayitid]!='')
{

 $sqlys=$db->prepare("select * from $tablosu where $tablosu.$anahtar2=? and deleted='false'");

        $sqlys->execute([$_GET[kayitid]]);
        
  $kayitlar=$sqlys->fetchAll(PDO::FETCH_ASSOC);
  
               echo json_turkce(($kayitlar));


} 
        
        
    }


?>