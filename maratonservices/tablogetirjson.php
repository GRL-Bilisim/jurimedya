<?php

include 'baglanti.php';

if ($_GET[menu_id]!='')
{
    include 'baglanti.php';





$sorgulan="select * from formlar where `form_index`=$_GET[menu_id]";


$sorbanami=mysqli_query($connection,$sorgulan);


while ($okuspokus=mysqli_fetch_assoc($sorbanami))

{


$formtablosu=$okuspokus["tablosu"];	

$formbasligi=iconv( "ISO-8859-9","UTF-8",$okuspokus[formtanimi]);	
}
		    
		    
		    ?>
		    
		    
		    	
		                  
				
				<!-- Row -->
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark"><?php echo $formbasligi;?></h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="table-wrap">
										<div class="table-responsive">
										    
										    
										    
										
<?php										
$sorgulan="select * from formlar where form_index=$_GET[menu_id]";



$sorbanami=mysqli_query($connection,$sorgulan);



while ($okuspokus=mysqli_fetch_assoc($sorbanami))

{

	

$formtablosu=$okuspokus["tablosu"];	

$baglialan1=$okuspokus["baglialan1"];	

$formbasligi=iconv( "ISO-8859-9","UTF-8",$okuspokus[formtanimi]);	

$bagliformid=$okuspokus["bagliformindex"];	

$tarihalani=$okuspokus["tarihalani"];	

$altgrup=$okuspokus["altgrup"];	









if ($okuspokus["yenikayit"]=="False")

{

$islemyok="1";	

}


if ($_GET[menu_id]=='199')
{
    
    
    	echo "<select id=\"formsec\" name=\"formsec\" class=\"select2_category form-control\">";
    $sql="select * from formlar order by formtanimi asc";
    $sorgula=mysqli_query($connection,$sql);
    while($okut=mysqli_fetch_assoc($sorgula))
    {
  
    if ($_GET[tasarimid]==$okut[form_index])
    {
							echo "<option value=\"".$okut[form_index]."\" selected>";
										echo iconv( "ISO-8859-9","UTF-8",$okut[formtanimi]);
										echo "</option>";
    }
		
		  if ($_GET[tasarimid]!=$okut[form_index])
    {
							echo "<option value=\"".$okut[form_index]."\" >";
										echo iconv( "ISO-8859-9","UTF-8",$okut[formtanimi]);
										echo "</option>";
    }							
  
    }
    echo "</select><br>";
}
                
            ?>    										
										
									<div class="row col-md-12">
									    
									    	
												<a class="inline-block" title="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET[menu_id]."|".''); ?>" data-effect="fadeOut" style="display:none;" >
											<button type="button" class="btn btn-success teklifolustur" id="teklifolustur" title="<?php echo $_GET[talepgor]; ?>" style="display:none;">Teklif İsteme Formu Oluştur</button>
										</a>
									
									    </div>
									 
											<table id="example1s" class="table table-hover display"  style="width:100%;">
												<thead>
											
											
												<tr>
												    <th>ID</th>
									
<?php

//veritabanından listede görünecek form alanlarını getir.



if ($bagliformid=="")

{
    
    if ($_GET[menu_id]!='287')
    {

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";
}


    if ($_GET[menu_id]=='287')
    {


        	$sqli="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$_GET[menu_id] and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi,formalanlari.alansirasi";

        
    }

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}



$sorgula=mysqli_query($connection,$sqli);

$i=1;

while ($okun=mysqli_fetch_assoc($sorgula))

{	

    
    
    ?>
                                            
                                            <th><?php echo iconv( "ISO-8859-9","UTF-8",$okun[alanyazisi]);
                                            
                                            
                                            
                                            
                                            ?></th>
                                    
    <?php
}
?>
<?php
if ($islemyok=='')
{
?>
                                           <th>İşlem</th>
<?php
}
?>
                                             
                                        </tr>									
									
									
									
												</thead>
												
										
													
													
														<?php



$sqly="select * from formlar where form_index=$_GET[menu_id]";





												$sorbeni=mysqli_query($connection,$sqly);



												while ($okun_1=mysqli_fetch_assoc($sorbeni))

												{

													

													if ($okun_1[where]=="")

													{

													$sorgusu="select * from $okun_1[tablosu]";

													}

													

													

													if ($okun_1[where]!="")

													{

													$sorgusu="select * from $okun_1[tablosu] where $okun_1[where]";

													}

													

													

													if ($okun_1[sorgu2]!="")

													{

													$islemler=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgu2]);

												   

													}

													

													if ($okun_1[islemmenu]!="")

													{

													$islemmenu=iconv( "ISO-8859-9","UTF-8",$okun_1[islemmenu]);

												   

													}



$grup=$okun_1[where];

$sorgusu=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgusu]);







if ((($_SESSION["kullanicituru"]=="rentacar")||($_SESSION["kullanicituru"]=="sadeceharita")||($_SESSION["kullanicituru"]=="resmikurumlar"))&&$_GET[menu_id]!="65"&&$_GET[menu_id]!="87")

{

	

if (strpos($sorgusu, 'where') == "") 

{

	$sorgusu=$sorgusu." where ".$okun_1[baglialan1]."='".$_SESSION["user_id"]."'";

}






	

	

}





 if ($_GET["kuryeid"]!=""&&$okun_1["tablosu"]=="talimat")

													{

$sorgusu=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgusu]." and kuryeGSM='".$_GET["kuryeid"]."'");

														

													}

													

													if ($_SESSION["firmakodu"]!=""&&($okun_1["tablosu"]=="paketlerimson"||$okun_1["tablosu"]=="paketlerimson2"))

													{

$sorgusu=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgusu]." and firmaid='".$_SESSION["firmakodu"]."'");

														

													}

$tablosu=$okun_1[tablosu];												

													

													$sqlcs="SHOW INDEX FROM $okun_1[tablosu] WHERE Key_name = 'PRIMARY'";

													

													$sorcun=mysqli_query($connection,$sqlcs);

													

													while ($yokn=mysqli_fetch_assoc($sorcun))

													{

														

														$anahtars=$yokn[Column_name];

														

														

													}

												}



					



													



if ($_SESSION["kullanicituru"]=="bayi"&&($formtablosu=="firmalar"||$formtablosu=="altkullanicilar"))

{

	$sorgusu=$sorgusu." and firmalar.bayiid='".$_SESSION["user_id"]."'";

}


if ($_POST["secilenplakas"]!="")

{

	$sorgusu=$sorgusu." and gunkm.plakano='".$_POST["secilenplakas"]."'";

}





if ($_SESSION["kullanicituru"]=="bayi"&&($formtablosu=="hatlar"))

{

	$sorgusu=$sorgusu." and bayiid='".$_SESSION["user_id"]."'";

}



if ($_SESSION["kullanicituru"]=="bayi"&&($formtablosu=="smsgonderims"))

{

	$sorgusu=$sorgusu." and firmaid='".$_SESSION["kullanicituru"].$_SESSION["user_id"]."'";

}






if ($tarihalani!=''&&$_GET[filtreturu]=='')
{
    $filtre=$filtre." and month(".$tarihalani.")=month(CURRENT_DATE) and year(".$tarihalani.")=year(CURRENT_DATE)";
    
}


if ($_GET["ilktarih"]!=""||$_GET[filtreturu]!='')

{

	$filtre=$filtre." and (".$tarihalani.">='".$ilktarih."' and ".$tarihalani."<='".$sontarih."') ";

}

if ($_GET["menu_id"]=="199"&&$_GET[tasarimid]!='')

{

	$filtre=$filtre." and (form_index=$_GET[tasarimid])";

}

if ($_GET["menu_id"]=="229"&&$_GET[tip]!='')

{

	$filtre=$filtre." and satinalma.siparisdurumu='".iconv( "UTF-8","ISO-8859-9",$_GET[tip])."'";

}


if ($_GET["menu_id"]=="229"&&$_GET[siparisgor]!='')

{

	$filtre=$filtre." and satinalmakodu='".$_GET[siparisgor]."'";

}




if ($_GET["menu_id"]=="287"&&$_GET[teklifgor]!='')

{

	$filtre=$filtre." and baglantilitalep='".$_GET[teklifgor]."'";

}


if ($_GET["menu_id"]=="283"&&$_GET[talepgor]!='')

{

	$filtre=$filtre." and index_ictalepler='".$_GET[talepgor]."'";

}


if ( $_GET["menu_id"]=='395' && $_GET[durumgor]!='')

{

	$filtre=$filtre." and stokhareketleri.malzemeid='".$_GET[durumgor]."'  group by islemyeri ORDER BY `stokhareketleri`.`islemyeri` DESC ";
   
}




if ($_GET[ekstra]!=""&&$_GET[ekstra]!="undefined")

{
if ($_GET[menu_id]=='199')
{
     $filtre=$filtre." and form_index='".iconv( "UTF-8","ISO-8859-9",$_GET[ekstra])."'";   

}
else
if ($_GET[menu_id]=='229')
{
     $filtre=$filtre." and satinalmano='".iconv( "UTF-8","ISO-8859-9",$_GET[ekstra])."'";   

}
else
{
	$filtre=$filtre." and ismerkezi='".iconv( "UTF-8","ISO-8859-9",$_GET[ekstra])."'";
}
}



$sorsana=mysqli_query($connection,$sorgusu.$filtre.$grup);		


$i=0;	


/**
if (mysqli_num_rows($sorsana)==0)

{



if ($bagliformid=="")

{

if ($_GET[menu_id]!='287')
    {

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";
}


    if ($_GET[menu_id]=='287')
    {


        	$sqli="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$_GET[menu_id] and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi,formalanlari.alansirasi";

        
    }
}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}





$sorgula=mysqli_query($connection,$sqli);

$i=1;



while ($okun=mysqli_fetch_assoc($sorgula))

{	

?>								

			



			

                                              <td></td>

                                      											

                                            

								

<?php

}		

  



  if ($islemyok=="")

{

echo "<td></td>";

}

  

?>

	

 

	

<?php	

}





while ($okun=mysqli_fetch_assoc($sorsana))

{

													

					echo "<tr title=\"".$_GET[menu_id]."+".$okun[$anahtars]."+".$anahtars."\" name=\"".$anahtars."\">";

	





				//veritabanından listede görünecek form alanlarını getir.

if ($bagliformid=="")

{

if ($_GET[menu_id]!='287')
    {

$sqlim="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";
}


    if ($_GET[menu_id]=='287')
    {


        	$sqlim="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$_GET[menu_id] and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi,formalanlari.alansirasi";

        
    }
}



if ($bagliformid!="")

{

$sqlim="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}







$sorgulalan=mysqli_query($connection,$sqlim);

				

while ($okun2=mysqli_fetch_assoc($sorgulalan))

{

	

	

$alanveri=$okun2[alanadi];

$turu=$okun2[verigiristuru];

 

$veri=iconv( "ISO-8859-9","UTF-8",$okun[$alanveri]);




if ($turu=="Date")

{

$originalDate = $veri;

$newDate = date("d.m.Y", strtotime($originalDate));

	

echo "<td>

										 $newDate

									</td>";

}









if ($turu!="File(PDF)"&&$turu!="File(PNG)"&&$turu!="File(JPG)"&&$turu!="Friend"&&$turu!="Adres"&&$turu!="Date"&&$turu!="Bakiye")

{

if ($alanveri!='siparisdurumu')
{
echo "<td>

										 $veri";
								     
    if ($_GET[menu_id]=='199')
    {

                                              if ($okun[ozelnot]!=''&&$alanveri=='musteriadi')
                                              {
                                                  ?>
                                                  <img src="icons/no.png" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okun[ozelnot]); ?>" style="width:32px;height:32px">
                                                  <?php
                                              }
                                          
    }
										 
										 

									echo "</td>";
}


if ($alanveri=='siparisdurumu')
{
    if ($veri=='Hazırlanıyor')
    {
echo "<td style=\"background-color:#009900\">

										 $veri

									</td>";
    }
    
    
    
     if ($veri=='Onaylandı')
    {
echo "<td style=\"background-color:#39f\">

										 $veri

									</td>";
    }
    
    
    
    
     if ($veri=='Onay Bekliyor')
    {
echo "<td style=\"background-color:#FFF000\">

										 $veri

									</td>";
    }
    
     if ($veri=='Havale Bekliyor')
    {
echo "<td style=\"background-color:#dddddd\">

										 $veri

									</td>";
    }
    
     if ($veri=='Teslim Edildi')
    {
echo "<td style=\"background-color:#666\">

										 $veri

									</td>";
    }
    
    
    
      if ($veri=='İade')
    {
echo "<td style=\"background-color:#e67e22\">

										 $veri

									</td>";
    }
    
    
    
   
    if ($veri=='Kargoya Verildi')
    {
echo "<td style=\"background-color:#3366FF\">

										 $veri

									</td>";
    }
    else
    {
        ?>
        
        <?php
    }
}

}







if ($turu=="Bakiye")

{

$bakiye=$bakiye+($okun[borc]-$okun[alacak]);

echo "<td><div align=\"right\">

										 $bakiye</div>

									</td>";

}





if ($turu=="File(JPG)"||$turu=="File(PNG)"||$met[verigiristuru]=='File(GIF)'||$met[verigiristuru]=='File(MP4)')

{

echo "<td>";



 echo "<a href=\"".$veri."\" target=\"_blank\">

                                <img src=\"".$veri."\" alt=\"\" height=\"50px\" class=\"image\" />

                                
                                

                            </a></td>";

}


if ($turu=="File(PDF)")

{

echo "<td>";



 echo "<a href=\"".$veri."\" target=\"_blank\">

                                <img src=\"pdficon.png\" alt=\"\" class=\"image\" />

                                <span class=\"txt\">Dosya Göster</span>

                                

                            </a></td>";

}





if ($turu=="Adres")

{

echo "<td>";	


if ($_POST['adresgetir']=='on')
{
	
	if ($okun[konumx].",".$okun[konumy]!=$sonkonum)
	{
	$sonkonum=$okun[konumx].",".$okun[konumy];
	$sonadres=getAddress($okun[konumx],$okun[konumy]);
	}

echo "<div><a href=\"https://www.google.com/maps/?q=".$okun[konumx].",".$okun[konumy]."\" target=\"_blank\">".$sonadres."</a></div>";

	
}

if ($_POST['adresgetir']!='on')
{
echo "<div><a href=\"https://www.google.com/maps/?q=".$okun[konumx].",".$okun[konumy]."\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary mr5 mb5\" title=\"\">Haritada Gör</button></a></div>";
}

echo "</td>";	



}



if ($turu=="Friend")

{

	echo "<td>";

	if ($veri=='')

	{

		echo "<div id=\"islemicerik_".$okun[$anahtars]."\">";

		

		$sqlyes="select * from firmalar where index_firmalar=".$_SESSION[user_id];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$ilim=$sehiroku[faturaili];

		}

		

			$sqlyes="select * from firmalar where index_firmalar=".$okun[$anahtars];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$firmaili=$sehiroku[faturaili];

		}

		

		

		

		if ($ilim==$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"istekgonder\">İstek Gönder</button></div>";

        }

		

		if ($ilim!=$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-default mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"mesajgonder\">Mesaj Gönder</button></div>";

        }



 	

	echo "<div id=\"gerial_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"gerial_".$okun[$anahtars]."\" title=\"gerial\">Geri Al</button></div>";

	

echo "<div id=\"onaybekle_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<table><tr><td><button type=\"button\" class=\"btn btn-danger mr5 mb10\" id=\"reddet_".$okun[$anahtars]."\" title=\"reddet\">Reddet</button><td><td><button type=\"button\" class=\"btn btn-success mr5 mb10\" id=\"onayla_".$okun[$anahtars]."\" title=\"onayla\">Onayla</button></td></tr></table></div>";

	

	}

	

	 

	

	if ($veri=='Onay Bekliyor'&&$okun[gonderen]==$_SESSION[user_id])

	{

		

		

		echo "<div id=\"islemicerik_".$okun[$anahtars]."\" style=\"display: none;\">";



 echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"istekgonder\">İstek Gönder</button></div>";

	

	echo "<div id=\"gerial_".$okun[$anahtars]."\">";



  echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"gerial_".$okun[$anahtars]."\" title=\"gerial\">Geri Al</button></div>";

	

echo "<div id=\"onaybekle_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<table><tr><td><button type=\"button\" class=\"btn btn-danger mr5 mb10\" id=\"reddet_".$okun[$anahtars]."\" title=\"reddet\">Reddet</button><td><td><button type=\"button\" class=\"btn btn-success mr5 mb10\" id=\"onayla_".$okun[$anahtars]."\" title=\"onayla\">Onayla</button></td></tr></table></div>";

	

	}

	

	

	if ($veri=='Onay Bekliyor'&&$okun[gonderen]!=$_SESSION[user_id])

	{

		

		$sqlyes="select * from firmalar where index_firmalar=".$_SESSION[user_id];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$ilim=$sehiroku[faturaili];

		}

		

			$sqlyes="select * from firmalar where index_firmalar=".$okun[$anahtars];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$firmaili=$sehiroku[faturaili];

		}

		

		

		echo "<div id=\"islemicerik_".$okun[$anahtars]."\" style=\"display: none;\">";



		if ($ilim==$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"istekgonder\">İstek Gönder</button></div>";

		}

		

		if ($ilim!=$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-default mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"mesajgonder\">Mesaj Gönder</button></div>";

		}

		

	echo "<div id=\"gerial_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"gerial_".$okun[$anahtars]."\" title=\"gerial\">Geri Al</button></div>";

	

echo "<div id=\"onaybekle_".$okun[$anahtars]."\">";

 echo "<table><tr><td><button type=\"button\" class=\"btn btn-danger mr5 mb10\" id=\"reddet_".$okun[$anahtars]."\" title=\"reddet\">Reddet</button><td><td><button type=\"button\" class=\"btn btn-success mr5 mb10\" id=\"onayla_".$okun[$anahtars]."\" title=\"onayla\">Onayla</button></td></tr></table></div>";



	}

	

	echo "</td>";

	



}



}	

?>							

	



<?php

if ($islemyok=="")

{

	?>

 <td>

 

 <?php

 

 

 if ($islemmenu!="")

 {

	 

	



echo str_replace("tutars",$okun[odenecek],str_replace("kayitidsi",$okun[$anahtars],$islemmenu));	 

	 

 }

 

 if ($islemmenu=="")

 {
     
     $verisec=$_GET[verialani];
 

 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{
    
    $kod=$okun[$anahtars];
    
if ($_GET[menu_id]=='229'&&$_GET[ekstra]!='')
{
    $kod=$okun[index_malzemeler];
}

?>

   <a href="#" title="form|<?php echo $_GET[menu_id]; ?>|recordid|<?php echo $okun[$anahtars]; ?>"  ><button class="btn btn-warning btn-icon-anim btn-square bunusec" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okun[$verisec]); ?>"><i class="icon-check"></i></button></a>
 
 
  <?php
  
  if ($_GET[menu_id]=='160'&&$okun[siparisdurumu]=='Teslim Edildi'&&$okun[yeniteslim]=='')
  {
      ?>
      
      <a href="#" id="recordid=<?php echo $okun[$anahtars]."|".$okun[fatura_telno]; ?>" class="whatsapp" title="Teslim" data-original-title="Whatsapp"><i class="s12 icomoon-icon-mobile"></i></a>
      
      <?php
      
  }

  ?>

<?php


if ($_SESSION['yeniharita']=='E')
{
 if ($tablosu=="firmalar"&&($_SESSION["user_id"]=="1"||$_SESSION["kullanicituru"]=="bayi"))

													{

														?>

														  <a href="ymap/index.php?izlemci_id=<?php echo $okun[$anahtars]; ?>" target="_blank" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-map"></i>Harita</a>

  

														<?php

													}
}



if ($_SESSION['yeniharita']!='E')
{
 if ($tablosu=="firmalar"&&($_SESSION["user_id"]=="1"||$_SESSION["kullanicituru"]=="bayi"))

													{

														?>

														  <a href="ototakip/index.php?izlemci_id=<?php echo $okun[$anahtars]; ?>" target="_blank" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-map"></i>Harita</a>

  

														<?php

													}
}



}



if ($bagliformid!=""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{

	?>

	

  <a href="index.php?page_id=editrecord&menu_id=<?php echo $bagliformid; ?>&recordid=<?php echo $okun[$anahtars]; ?>" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-pencil"></i></a>

  <?php

}

 

 ?>

 

  

 <?php

 if ($tablosu=='paketlerimson') 

 {  



if ($okun["durumum"]=="Beklemede"||$_SESSION["oturumturu"]!="isletme"&&$islemyok=="")

{

 ?>	  

		  

		  

                    <a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>

<?php

  }

 }



 if ($tablosu!='paketlerimson'&&$islemyok=="") 

 {  

 ?>	  

		  

                    <a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>

<?php

  }

 ?>

 

 <?php

 if ($tablosu=='adresdefteri'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=yenikayit&menu_id=54&adresid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  title="Kurye Çağır"><i class="s12 icomoon-icon-basket"></i></a>

 <?php

 } 

 ?>

 

 <?php

 if ($tablosu=='talimat'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=talimatharitasi&talimatid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Kurye Çağır"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 

  <?php

 if ($tablosu=='paketlerimson'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=paketharitasi&paket_id=<?php echo $okun["paketkodu"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Paket Haritası"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 

  <?php

 if ($tablosu=='cariler'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=altsayfa&menu_id=169&recordid=<?php echo $okun["cariindex"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Hesap Kartı"><button type="button" class="btn btn-default">Hesap Kartı</button></a>

 <?php

 } 

 ?>

 

  <?php

 if ($tablosu=='kuryeler'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=altsayfa&menu_id=75&kuryeid=<?php echo $okun["personelkodu"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Kurye Çağır"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 </td>

 <?php

}

}

?> 

	

<?php											

				echo "</tr>";									

							}


*/



?>		

							

									

											

											

                                          

													
													
											
											
										
											</table>
											<?php
}
?>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<!-- /Row -->
				<?php
				 
    
}



?>

<script>

$(document).ready( function () {
    
    
    
<?php
 
  		if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}

$kayitoku=mysqli_query($connection,$sqli);
$sutunlar="";
$alansayisi=0;
while($okut=mysqli_fetch_assoc($kayitoku))
{
    $alansayisi=$alansayisi+1;
    if ($sutunlar=='')
    {
	
            $sutunlar=$okut[alanadi];

    }
    else
    {
      $sutunlar=$sutunlar.",".$okut[alanadi];  
    }
}


  
?>


var sutunlar='<?php echo $sutunlar;?>';


  var jsondata="";
  
  	$.ajax( {

      url: 'dataservis.php?page_id=formgetir&tip=<?php echo $_GET[tip]; ?>&malzemeid=<?php echo $_GET[malzemeid]; ?>&tedi=<?php echo $_GET[tedi]; ?>&formid=<?php echo $_GET[menu_id]; ?>&sutunlar='+sutunlar,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,
	   async: false,

	   success: function(data)

           {

         jsondata=data;
         
         
           	$('#example1s').DataTable({
		"language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Turkish.json"
        },
		
		<?php
if ( $_GET[menu_id]=='230' &&$_GET[page_id]=='listings')
{
    ?>
"createdRow": function( row, data, dataIndex){
                if( data[4] == data[5] ){
                    $(row).addClass('success');
                }
                 if( data[4] != data[5]&&data[5]!='0' ){
                    $(row).addClass('warning');
                }
                if(data[5]=='0' ){
                    $(row).addClass('danger');
                }
},

    <?php
}

if ( $_GET[menu_id]=='318' &&$_GET[page_id]=='listings')
{
    ?>
"createdRow": function( row, data, dataIndex){
                if( data[4] == data[5] ){
                    $(row).addClass('success');
                }
                 if( data[4] != data[5]&&data[5]!='0' ){
                    $(row).addClass('warning');
                }
                if(data[5]=='0' ){
                    $(row).addClass('danger');
                }
},

    <?php
}
?>
		 dom: "Bfrtip",
		data:jsondata,
		"pageLength": 50,
		"processing": true, // shows loading image while fetching data
	"serverSide": false,
	select:true,
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		"columns" : [{ data: 'id', name: 'id', visible: false },
		
		<?php
		
		if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}

$kayitoku=mysqli_query($connection,$sqli);
$sutunlar="";
$alansayisi=0;
while($okut=mysqli_fetch_assoc($kayitoku))
{
    $alansayisi=$alansayisi+1;
    if ($sutunlar=='')
    {
	
            $sutunlar="{ \"data\" : \"".$okut[alanadi]."\" }";

    }
    else
    {
      $sutunlar=$sutunlar.",{ \"data\" : \"".$okut[alanadi]."\" }";  
    }
}
echo $sutunlar=$sutunlar.",";
?>
{ data: null, sortable: false,
            render: function ( data, type, full, meta )
            {
  
  <?php
   if ($islemmenu!="")

 {

	 



echo str_replace("tutars",$okun[odenecek],str_replace("kayitidsi",$okun[$anahtars],$islemmenu));	 

	 

 }

 

 if ($islemmenu=="")

 {

 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{
    
    
    if ($_GET[menu_id]=='198')
{
    
if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
?>

  return '<a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"><button class="btn btn-warning btn-icon-anim btn-square bunusec" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okun[$verisec]); ?>"><i class="icon-check"></i></button></a>';


<?php
}

if ($_SESSION[superkullanici]!='E'&&$_SESSION[tasarimyetkisi]!='E')
												{
?>

  return '<a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a>'


<?php
}


}


if($_GET[menu_id]=='240'){?>
    
     return '<a href="index.php?page_id=listings&menu_id=239&malzemeid='+full.id+' " title="" data-original-title="Değiştir" target="_blank"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" title="395|'+full.id+'"   class="durumgor" data-original-title="gor"><button class="btn btn-success btn-icon-anim btn-square"><i class="icon-rocket"></i></button></a>'

<?php }


if ($_GET[menu_id]!='198')
{
    $verisec=$_GET[verialani];
?>

  return '<a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"><button class="btn btn-warning btn-icon-anim btn-square bunusec" title="'+full.<?php echo $verisec; ?>+'"><i class="icon-check"></i></button></a>';


<?php
}



if ($_SESSION['yeniharita']=='E')
{
 if ($tablosu=="firmalar"&&($_SESSION["user_id"]=="1"||$_SESSION["kullanicituru"]=="bayi"))

													{

														?>

														  <a href="ymap/index.php?izlemci_id=<?php echo $okun[$anahtars]; ?>" target="_blank" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-map"></i>Harita</a>

  

														<?php

													}
}



if ($_SESSION['yeniharita']!='E')
{
 if ($tablosu=="firmalar"&&($_SESSION["user_id"]=="1"||$_SESSION["kullanicituru"]=="bayi"))

													{

														?>

														  <a href="ototakip/index.php?izlemci_id=<?php echo $okun[$anahtars]; ?>" target="_blank" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-map"></i>Harita</a>

  

														<?php

													}
}



}




if ($bagliformid!=""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{

	?>
  <a href="index.php?page_id=editrecord&menu_id=<?php echo $bagliformid; ?>&recordid=<?php echo $okun[$anahtars]; ?>" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-pencil"></i></a>
  <?php

}

 

 ?>

 

  

 <?php

 if ($tablosu=='paketlerimson') 

 {  



if ($okun["durumum"]=="Beklemede"||$_SESSION["oturumturu"]!="isletme"&&$islemyok=="")

{

 echo '<a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>';


  }

 }



 ?><?php

 if ($tablosu=='adresdefteri'&&$islemyok=="") 

 {
 echo '<a href="index.php?page_id=yenikayit&menu_id=54&adresid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  title="Kurye Çağır"><i class="s12 icomoon-icon-basket"></i></a>';
 } 
 ?>
 <?php

 if ($tablosu=='talimat'&&$islemyok=="") 

 {

?>	
 <a href="index.php?page_id=talimatharitasi&talimatid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Kurye Çağır"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 

  <?php

 if ($tablosu=='paketlerimson'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=paketharitasi&paket_id=<?php echo $okun["paketkodu"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Paket Haritası"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 

  <?php

 if ($tablosu=='cariler'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=altsayfa&menu_id=169&recordid=<?php echo $okun["cariindex"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Hesap Kartı"><button type="button" class="btn btn-default">Hesap Kartı</button></a>

 <?php

 } 

 ?>

 

  <?php

 if ($tablosu=='kuryeler'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=altsayfa&menu_id=75&kuryeid=<?php echo $okun["personelkodu"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Kurye Çağır"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

}
  ?>
                
            }
        }

        ]
	});

           }

    });
  

    

} );


</script>