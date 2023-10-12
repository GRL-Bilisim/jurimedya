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
									    
									    	
										
									
									    </div>
									 
											<?php
									    if ($_GET[listeleme]!='E')
									    {
									        ?>
										<table class="table table-hover mb-0" id="example1s">
										<?php
										    if($_GET[menu_id]=='412'){?>
										        	<a class="inline-block" title="" data-effect="fadeOut" style="display:none;" >
											<button type="button" class="btn btn-success kalemsiparisedonustur" id="kalemsiparisedonustur" style="display:none;">Siparişe Dönüştür</button>
										</a>
										    <?php }
										    
										        if($_GET[menu_id]=='462'){?>
										        	<a class="inline-block" title="" data-effect="fadeOut" style="display:none;" >
											<button type="button" class="btn btn-success sipkabul" id="sipkabul" style="display:none;">Siparişi Onayla</button>
										</a>
										    <?php }
										
									    }
									    
									     if ($_GET[listeleme]=='E')
									    {
									        ?>
										<table class="table table-hover example" style="width:100%;">
										<?php
									    }
									    
									    
									    ?>
												<thead style="width:100% !important;">
											
											
												<tr>
									
<?php

//veritabanından listede görünecek form alanlarını getir.



if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

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
												
												<tbody>
													
													
													
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

if ($_GET["menu_id"]=="462"&&$_GET[tip]!='')

{

	$filtre=$filtre." and satinalma.siparisdurumu='".iconv( "UTF-8","ISO-8859-9",$_GET[tip])."'";

}

if ($_GET["menu_id"]=="462" && $_GET[siparisgor]!='')

{

	$filtre=$filtre." and satinalma.satinalmakodu='".$_GET[siparisgor]."'";

}

if ($formtablosu=="firma_karsiliklari"&&$_GET[firmaid]!='')

{

	$filtre=$filtre." and firmaid='".iconv( "UTF-8","ISO-8859-9",$_GET[firmaid])."'";

}




if ($_GET[ekstra]!="")

{

	$filtre=$filtre." and ismerkezi='".iconv( "UTF-8","ISO-8859-9",$_GET[ekstra])."'";

}



if ($_GET[ekstra_urun]!="")

{

	$filtre=$filtre." and malzemeid='".iconv( "UTF-8","ISO-8859-9",$_GET[ekstra_urun])."'";

}

if($_GET[firmakalemlerisec]!=''){
    	$filtre=$filtre." and teklif_kalemleri.sip_id='".$_GET[firmakalemlerisec]."' ";
}


if($_GET[talepgor]!='' && $_GET[ustdurum]=='2'){

    	$filtre=$filtre."   and durumu='Onay Bekliyor' and talepicerigi.talepno='".$_GET[talepgor]."' ";
}

if($_GET[talepgor]!='' && $_GET[ustdurum]=='3'){

    	$filtre=$filtre."   and durumu like '%Onaylan%' and talepicerigi.talepno='".$_GET[talepgor]."' ";
}

if($_GET[talepgor]!='' && $_GET[ustdurum]=='1'){

    	$filtre=$filtre."   and durumu='Son Onay Bekliyor' and talepicerigi.talepno='".$_GET[talepgor]."' ";
}


if($_GET["menu_id"]=="462"){

    	$filtre=$filtre."   and (satinalma.siparisdurumu<>'Kabul Edildi' or satinalma.siparisdurumu<>'Kabul Edilmedi' ) ";
}



$sorsana=mysqli_query($connection,$sorgusu.$filtre.$grup);		


$i=0;	



if (mysqli_num_rows($sorsana)==0)

{



if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

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

$sqlim="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

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

  if ($_GET[menu_id]=='462')
  {
      ?>
      
    <a href="#" title="<?php echo $okun[index_satinalma]; ?>"  ><button class="btn btn-warning btn-icon-anim btn-square sipkalemsec" title="<?php echo $okun[index_satinalma]; ?>" ><i class="icon-check"></i></button></a>
 
 
      <?php
      
  }

 
  if ($_GET[menu_id]=='412')
  {
      ?>
      
    <a href="#" title="<?php echo $okun[sip_id]; ?>"  ><button class="btn btn-warning btn-icon-anim btn-square kalemlerisec" title="<?php echo $okun[sip_id]; ?>" ><i class="icon-check"></i></button></a>
 
 
      <?php
      
  }


 if ($islemmenu=="")

 {
     
     $verisec=$_GET[verialani];
   
    
    if($_GET[menu_id]=='564'){ ?>
           <a href="#" title="<?php echo $okun[$anahtars]; ?>" class="ictaleponayla" ><button class="btn btn-success btn-icon-anim btn-square " ><i class="icon-check"></i></button></a>
    <a href="#" title="<?php echo $okun[$anahtars]; ?>" class="ictalepred" ><button class="btn btn-danger btn-icon-anim btn-square " ><i class="icon-close"></i></button></a>
 
    <?php }


 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="" && $_GET[menu_id]!="412" && $_GET[menu_id]!='564' && $_GET[menu_id]!='462')

{

?>

   <a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_<?php echo $okun[$anahtars]; ?>"  ><button class="btn btn-warning btn-icon-anim btn-square bunusec" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okun[$anahtars]); ?>"><i class="icon-check"></i></button></a>
 

 
 
 
  <?php
  
  if ($_GET[menu_id]=='160'&&$okun[siparisdurumu]=='Teslim Edildi'&&$okun[yeniteslim]=='')
  {
      ?>
      
      <a href="#" id="recordid=<?php echo $okun[$anahtars]."_".$okun[fatura_telno]; ?>" class="whatsapp" title="Teslim" data-original-title="Whatsapp"><i class="s12 icomoon-icon-mobile"></i></a>
      
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



?>		

							

									

											

											

                                          

													
													
												</tbody>
											
											
											
										
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

if ($_GET[listeleme]=='E')
{

?>

<script>

$(document).ready( function () {
    $('.example').DataTable();
} );


</script>

<?php
}

if ($_GET[listeleme]=='')
{

?>

<script>

$(document).ready( function () {
    $('#example1s').DataTable();
} );


</script>

<?php
}
?>