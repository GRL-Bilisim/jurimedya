<?php 

ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}
header('Access-Control-Allow-Origin: *'); ?>

<?php



			
        if ($_GET[menu_id]!=""&&$_GET[page_id]=="yenikayit")

{
 
	



include 'baglanti.php';





$sorgulan="select * from formlar where form_index=$_GET[menu_id]";



$sorbanami=mysqli_query($connection,$sorgulan);



while ($okuspokus=mysqli_fetch_assoc($sorbanami))

{

	

$formtablosu=$okuspokus["tablosu"];	

$formbasligi=iconv( "ISO-8859-9","UTF-8",$okuspokus[formtanimi]);	

	

}

	

	

	

?>	
  <div class="row col-md-12 clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">     
                    <!-- Start .row -->
                    
                    
                    
 <div class="body">
                    <div class="row col-md-12 row clearfix">

					

					

 <!-- End .panel -->

                            <div class="col-md-12">

                                <!-- Start .panel -->

                           
                                <div class="panel-body">

								

<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                   
                                    <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Hata</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Bu tarih ve saatte bir rezervasyon mevcuttur.
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Tamam</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                   
                                    <div class="modal fade" id="basariliModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Başarılı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Kayıt Başarıyla Gerçekleşti
                                                </div>
												<div id="sonuc">
												</div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Tamam</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


							<div id="kayitformuicerik">

									

									</div>

									

								

									

									

									

									<?php
									if ($_GET[onizleme]=='')
									{
									    $idsi='satirdetayformu';
									    
									}
										if ($_GET[onizleme]!='')
									{
									    $idsi='onizleme';
									    
									}
									?>

                                    <form class="form-horizontal" role="form" method="POST" name="<?php echo $idsi; ?>" id="<?php echo $idsi; ?>" action="sender.php?form_id=<?php 








if ($_GET[menu_id]!="")

{

echo $_GET[menu_id]."&username=".$_SESSION["username"]; 	

}



if ($_GET[menu_id]=="")

{

echo "36&username=".$_SESSION["username"]; 	

}





?>" enctype="multipart/form-data">

									

<?php



if ($bagliformid=="")

{

$sqlye="select * from bloklar where formindex=$_GET[menu_id] order by sirasi asc,bokindex asc";

}



if ($bagliformid!="")

{

$sqlye="select * from bloklar where formindex=$bagliformid order by sirasi asc,bokindex asc";

}



$sorgulakardes=mysqli_query($connection,$sqlye);





$sqlsa="select DATE_FORMAT(Now(), '%Y-%m-%d') DATEONLY, 

       DATE_FORMAT(Now(),'%H:%i:%s') TIMEONLY";

$sorbana=mysqli_query($connection,$sqlsa);



while ($ykn=mysqli_fetch_assoc($sorbana))

{	

$saat=$ykn["TIMEONLY"];

$tarih=$ykn["DATEONLY"];

}









while ($ykn=mysqli_fetch_assoc($sorgulakardes))

{	

if ($ykn[turu]=="Liste")

{
	

	
?>



                                        <div class="form-group">

                                          <div class="col-lg-12" style="padding-right:5px;">

                                                <div class="row">
												
												<?php
												
												if ($ykn[turu]=='Liste')
		
{
    
    $sorgumuz="select * from formlar where form_index=$ykn[bagliformindex]";
	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		
$formid=$usttablo[form_index];


    
    ?>
    
    
    
	
	<div id="tablo_<?php echo $formid; ?>" class="col-lg-12">



                            <div class="panel panel-default toggle panelClose panelRefresh" id="supr3" style="margin-top:20px;">



                                <div class="panel-heading white-bg">

								
								                                    <div class="row"><div class="col-md-10"><h4 class="panel-title"><?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[formtanimi]); ?></h4></div><div class="col-md-2">
																	
																	
													
                            
																	
																	
																	
																	</div></div>
                                <div class="panel-controls panel-controls-right"><a href="#" class="panel-refresh"><i class="brocco-icon-refresh s12"></i></a><a href="#" class="toggle panel-minimize"><i class="icomoon-icon-plus"></i></a><a href="#" class="panel-close"><i class="icomoon-icon-close"></i></a></div></div>

                                <div class="panel-body" style="display: block;">

                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: auto;">
                                        
                                        <div class="table-responsive" style="overflow: hidden; width: 100%; height: auto;" id="altform">
                                        
                                        
                                       
                                        <div id="kayitsilme"  style="display:none">

                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>

                                <h4>Kayıt Siliniyor</h4>

                                <p>Kayıtı silmek istediğinizden emin misiniz? Değişiklikler geri alınamayacaktır.</p>

								<p><button type="button" class="btn btn-danger mr5 mb10" id="evetsil">Evet Sil</button></p>

                            </div>
                                        <table id="tableExport" class="table table-bordered">

                                        <thead>

                                            <tr>
                                                
                                                
                                                <?php
	
	$ozelformid=$ykn[bagliformindex];
	$masterfield1=$ykn[masterfield];
	$detailfield1=$ykn[detailfield];
	$sqly="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$ykn[bagliformindex] and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi asc";
	$sorgulamasi=mysqli_query($connection,$sqly);
	
while ($hastam=mysqli_fetch_assoc($sorgulamasi))
{


                                                echo "<th><font size=\"1\">".iconv( "ISO-8859-9","UTF-8",$hastam[alanyazisi])."</font></th>";
    
}
?>
<th><font size="1">İşlemler</font></th>
                                            </tr>

                                        </thead>


                                        <tbody>
<?php

		$sqls=$usttablo[sorgusu];
		
		
$anahtarsor="SHOW KEYS FROM ".$usttablo[tablosu]." WHERE Key_name = 'PRIMARY'";
$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
    
$anahtar2=$gel['Column_name'];
    
}
		
		
$anahtarsor="SHOW KEYS FROM ".$formtablosu." WHERE Key_name = 'PRIMARY'";
$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
    
$anahtars=$gel['Column_name'];
    
}


$sordurtma="select * from $formtablosu where $anahtars=$_GET[kayitid]";



$sorbanas=mysqli_query($connection,$sordurtma);



while ($okukardesim=mysqli_fetch_assoc($sorbanas))

{
$ortak=$ykn[masterfield];
$alan=$okukardesim[$ortak];   
    
}
	
		
		$sqls=$sqls." and ".$ykn[detailfield]."='".$alan."'";
		
		if ($formid=='189')
		{
		mysqli_query($connection,"SET NAMES 'utf8'");
		}
		$sorgulamasi2=mysqli_query($connection,$sqls);
		

		while ($icerigi=mysqli_fetch_assoc($sorgulamasi2))
		{
								
							echo "<tr>";
							
	mysqli_data_seek($sorgulamasi,0);
                                          
							while ($hastam=mysqli_fetch_assoc($sorgulamasi))
{
    $alanveri=$hastam[alanadi];
    
    
    
    if ($hastam[verigiristuru]=='File(JPG)')
{
                                      
                                                
                                                echo "<td>";
                                             
                                                if ($formid=='126')
                                                {
                                                    if ($icerigi[tasarlakod]=='')
                                                    {
                                                echo "<a href=\"".$icerigi[$alanveri]."\" target=\"_blank\">
                                                <img src=\"".$icerigi[$alanveri]."\" width=\"100px\"></a>";
                                                    }
                                                    
                                                      if ($icerigi[tasarlakod]!='')
                                                    {
                                                        $hedef="https://www.mobildurak.com/wolfdizayn/kendin-tasarla/view.php?id=".$icerigi[tasarlakod]."&modelsecimi=".$icerigi[model1]."&renk=".$icerigi[renk1];
                                                        
                                                echo "<a href=\"".$hedef."\" target=\"_blank\">
                                                <img src=\"".$icerigi[$alanveri]."\" width=\"100px\"></a>";
                                                    }
                                              
                                                }
                                                
                                                 if ($formid!='126')
                                                {
                                                
                                                echo "<img src=\"".$icerigi[$alanveri]."\" width=\"100px\">";
                                                
                                                }
                                                echo "</td>";
}

if ($hastam[verigiristuru]!='File(JPG)')
{
    
    if ($alanveri=='uruntanimi')
    {
        $tanimlar=$tanimlar.", ".iconv( "ISO-8859-9","UTF-8",$icerigi[uruntanimi])." : ".$icerigi[miktar]." Adet";
        
    }
    
    if ($formid!='189')
    {
                                       echo "<td><font size=\"1\">".iconv( "ISO-8859-9","UTF-8",$icerigi[$alanveri])."</font></td>";
    }
    
     if ($formid=='189')
    {
                                                echo "<td><font size=\"1\">".$icerigi[$alanveri]."</font></td>";
    }
    
}
   

}		

if ($formid!='126')
{
    
    $alanim=$ykn[detailfield];
    
    
					echo "<button style=\"margin-left:5px\" type=\"button\" class=\"btn btn-danger tip\" title=\"Sil\" id=\"kayitid=".$icerigi[$anahtar2]."&menu_id=$ozelformid\"><font size=\"1\">Sil</font></button></td>";
}

if ($formid=='126')
{
?>
<td>
    
            <button type="button" title="Değiştir" id="degistir_<?php echo $icerigi[$anahtar2]; ?>" class="btn btn-success btn-s  mr10 mb10">
                <i class="icomoon-icon-eye-4"></i></button>
                
                
                        
                       
                        </td>
<?php
}

								
								echo "</tr>";
															
		}	
								?>
										  

										  

										  

                                        </tbody>

                                    </table></div><div class="slimScrollBar ui-draggable" style="background: rgb(243, 243, 243); height: 5px; position: absolute; bottom: 3px; opacity: 0.4; display: none; border-radius: 5px; z-index: 99; width: 674px; left: 0px;"></div><div class="slimScrollRail" style="width: 100%; height: 5px; position: absolute; bottom: 3px; display: none; border-radius: 5px; background: rgb(51, 51, 51); opacity: 0.3; z-index: 90;"></div></div>

                                </div>

                            </div>



                        </div>

<?php
if ($formid=='126')
{
    $tadsoyad=$fatura_adi." ".$fatura_soyadi;
    $ttel=$fatura_telno;
?>
	<img style="margin-left:35px;" src="https://qr-creator.com/qr_image.php?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A<?php echo $tadsoyad; ?>%0AN%3A%3B<?php echo $tadsoyad; ?>%0ATEL%3BCELL%3A0<?php echo $ttel; ?>%0AEND%3AVCARD%0A&size=4&colorcode=000000&errc=l&key=0jdue8fz">
	
<?php
if ($odemesekli=='Kapıda Ödeme')
{
     $mesaj="Merhaba, WOLFDIZAYN.COM dan yazıyorum.
Web sitemiz üzerinden Kapıda Ödeme ile ".$tanimlar." 
 Sipariş vermiş oldugunuzu görüyorum Toplam Tutar : ".$geneltoplam." TL'dir. Sipariş onayını veriyor musunuz?";
$mesaj=str_replace('<br>',' ',$mesaj);  
?>
	<a target="_blank" href="https://wa.me/9<?php echo $ttel; ?>?text=<?php echo $mesaj; ?>"><img src="https://web.whatsapp.com/apple-touch-icon.png" height="145px" alt="wolfdizayn whatsapp iletişim"></a>
<?
}

if ($odemesekli=='Havale')
{
    $mesaj="Merhaba, WOLFDIZAYN.COM dan yazıyorum.
Web sitemiz üzerinden EFT/Havale ile ".$tanimlar." 
 Sipariş vermiş oldugunuzu görüyorum Toplam Tutar : ".$geneltoplam." TL'dir.
%0aAkbank Hesap Bilgileri;
%0aIBAN : TR78 0004 6001 0488 8000 1031 46 
%0aHesap No : 0104 - 0103146 
%0aHesap Sahibi : Metin Örkmez 
%0aHesabına EFT/Havale yapıp tarafımıza bildirmeniz gerekmektedir. 2 iş günü içinde EFT/Havale yapmadığınız taktirde siparişiniz otomatik olarak silinecektir.";

    
$mesaj=str_replace('<br>',' ',$mesaj);  
?>
	<a target="_blank" href="https://wa.me/9<?php echo $ttel; ?>?text=<?php echo $mesaj; ?>"><img src="https://web.whatsapp.com/apple-touch-icon.png" height="145px" alt="wolfdizayn whatsapp iletişim"></a>
<?
}
?>

 <?php   
}	

?>

		


<?php
}

}	

}
												
												
												?>
											


<?php	
	




if ($ykn[turu]=="Alan")

{

	$modu=$ykn[kolonsayisi];

$i=1;





if ($modu==2)

{

	$boyut="class=\"col-md-6\"";

}



if ($modu==3)

{

	$boyut="class=\"col-md-4\"";

}



if ($modu==4)

{

	$boyut="class=\"col-md-3\"";



}



if ($modu==1)

{

	$boyut="class=\"col-md-12\"";

}



if ($modu==6)

{

	$boyut="class=\"col-md-2\"";

}


?>

								

                                        <div class="form-group">

                                           <div class="col-lg-12" style="padding-right:5px;">

                                                <div class="row">

												

												<?php

												if ($ykn[grupadi]!="")

												{

													?>

													

													<div class="panel panel-primary toggle pl10 pr10" style="margin-top:10px;">

													<div class="panel-heading">

                                    <h4 class="panel-title"><?php echo iconv( "ISO-8859-9","UTF-8",$ykn[grupadi]);  ?></h4>

                                <div class="panel-controls panel-controls-right"><a href="#" class="panel-refresh"><i class="brocco-icon-refresh s12"></i></a><a href="#" class="toggle panel-minimize"><i class="icomoon-icon-plus"></i></a><a href="#" class="panel-close"><i class="icomoon-icon-close"></i></a></div></div>

								<div class="panel-body pt5 pb5">

<?php

												}

?>												

												

												

<?php

	$sorbak=mysqli_query($connection,"select * from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where bloklar_alti.blokindex=$ykn[bokindex] and kayitformu=1 order by bloklar_alti.sirasi");

$kayitsayisi=mysqli_num_rows($sorbak);



while ($met=mysqli_fetch_assoc($sorbak))

{



$varsayilan=$met[varsayilan];



$required="";

if ($met[zorunlu]=='True')

{

$required=" required=\"true\"";	

}



if ($met[varsayilan]!='')

{




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
	
		if ($met[varsayilan]=='konum')

	{

		

		$varsayilan=$_GET[konumu];

	}
	
	
	if ($met[varsayilan]=='komisyonorani')

	{

$sqlyes="select * from firmalar where index_firmalar=".$_SESSION["user_id"];
$sorgula=mysqli_query($connection,$sqlyes);

while ($gel=mysqli_fetch_assoc($sorgula))
{
    $varsayilan=$gel[komisyon];
}
		

	}
	
	
	
	if ($met[varsayilan]=='borclunumaralar')

	{

	
$sqlces="select firmaadi,yetkilitelefon,sum(vademiktari) as toplamborc,yetkili from taksitler left join firmalar on firmalar.index_firmalar=taksitler.firmaid where odenme='' or odenme='0' group by firmaid";
$sorgulamak=mysqli_query($connection,$sqlces);
while ($oku=mysqli_fetch_assoc($sorgulamak))
{
	$deger=$deger."".$oku[yetkilitelefon].";";
}
$varsayilan=$deger;
	}
	
	
	if ($met[varsayilan]=='tumnumaralar')

	{

	
$sqlces="select firmaadi,yetkilitelefon,sum(vademiktari) as toplamborc,yetkili from taksitler left join firmalar on firmalar.index_firmalar=taksitler.firmaid group by firmaid";
$sorgulamak=mysqli_query($connection,$sqlces);
while ($oku=mysqli_fetch_assoc($sorgulamak))
{
	$deger=$deger."".$oku[yetkilitelefon].";";
}
$varsayilan=$deger;
	}

	

	if ($met[varsayilan]=='time')

	{

		

		$varsayilan=$saat;

	}
	
			if ($met[varsayilan]=='konum')

	{

		

		$varsayilan=$_GET[konumu];

	}

	

	if ($met[varsayilan]=='user')

	{

		

		$varsayilan=$_SESSION["adi"];

	}

	

	if ($met[varsayilan]=='firmakodu')

	{

		

		$varsayilan=$_SESSION["firmakodu"];

	}

	

	

	if ($met[varsayilan]=='musterino')

	{

		$varsayilan=$_GET["musterino"];

		

	}

	

	if ($met[varsayilan]=='plakano')

	{

		$varsayilan=$_GET["plakano"];

		

		$sqlyes="select * from araclar where plakano='".$_GET["plakano"]."'";

		$sorgum=mysqli_query($connection,$sqlyes);

		

		while ($oks=mysqli_fetch_assoc($sorgum))

		{

			$kirabedeli=$oks[kirabedeli];

			$arackmsi=$oks[arackm];

			

			$sqlsis="select * from hatlar where plakano='".$_GET["plakano"]."'";

		$sorbanas=mysqli_query($connection,$sqlsis);

		

		while ($okto=mysqli_fetch_assoc($sorbanas))

		{

		
		
							$tarih=date("Y-m-d")." 00:00";

                            $tarih2=date("Y-m-d")." 23:59";



							$baslama=date('Y-m-d H:i',strtotime('+5 hours',strtotime($tarih)));

						    $bitis=date('Y-m-d H:i',strtotime('+5 hours',strtotime($tarih2)));

						

						$baslama=str_replace(" ","%20",$baslama);

						$bitis=str_replace(" ","%20",$bitis);

							

							
$json = file_get_contents("https://www.gps902.net/api/GetHistory.aspx?id=".$okto['cihazimei']."&mapType=baidu&key=20161222HLXTJDMW730XY&startTime=".$baslama."&endTime=".$bitis);

$img = json_decode($json);



$oncekikonumx="";

$oncekikonumy="";	

$oncekizaman="";

$oncekihiz=0;

$gunluks=0;

	foreach ($img->devices as $obj)

{

	                         $konumx=$obj->{'lat'};

							$konumy=$obj->{'lng'};
								$acisi=$obj->{'c'};

							$hiz=($obj->{'s'})/3600;

							$hizi=($obj->{'s'});

							if ($obj->{'s'}>0)

								{

							    $konumzaman=date('Y-m-d H:i',strtotime('-5 hours',strtotime($obj->{'pt'})));

								}

								

								

								if ($obj->{'s'}==0&&$oncekihiz>0)

								{

							    $sonkontakkapama=date('Y-m-d H:i',strtotime('-5 hours',strtotime($obj->{'pt'})));

								}

							if ($oncekikonumx!="")

							{

								$timeFirst  = strtotime($oncekizaman);

                                $timeSecond = strtotime($obj->{'pt'});

                                $differenceInSeconds = $timeSecond - $timeFirst;

								

								

								$gunluks=$gunluks+(0.70*0.5*($oncekihiz+$hiz)*$differenceInSeconds);

								

							

								

	

							}

							

							$oncekikonumx=$konumx;

							$oncekikonumy=$konumy;

							$oncekizaman=$obj->{'pt'};

							$oncekihiz=($obj->{'s'})/3600;

	

}

							

							

							

							$oncekigun=date('Y-m-d',strtotime('-1 day',strtotime($tarih)));

						

						

						$sqlopt="select * from sabitkm where plakano='".$_GET[plakano]."' and tarih<='".$oncekigun."'";

						$sorgulama=mysqli_query($connection,$sqlopt);

						

						if (mysqli_num_rows($sorgulama)>0)

						{

							while ($gez=mysqli_fetch_assoc($sorgulama))

							{
								if ($gez[tarih]==$oncekigun)
								{
									$gezilen=$gez[km];	
								}
								
								if ($gez[tarih]!=$oncekigun)
								{
									$gezilen=$gez[km];	
									$yap=1;
									$ilktarih=date('Y-m-d H:i',strtotime('+5 hours',strtotime($gez[tarih])));
	$ilktarih=str_replace(" ","%20",$ilktarih);

								}

							

							}

							

						}

						

						if (mysqli_num_rows($sorgulama)==0||$yap==1)

						{

							

							if ($yap!=1)
							{
							$json = file_get_contents("https://www.gps902.net/api/GetHistory.aspx?id=".$okto['cihazimei']."&mapType=baidu&key=20161222HLXTJDMW730XY&startTime=2018-01-01%2000:00&endTime=".$baslama);
							}
							
							if ($yap==1)
							{
							$json = file_get_contents("https://www.gps902.net/api/GetHistory.aspx?id=".$okto['cihazimei']."&mapType=baidu&key=20161222HLXTJDMW730XY&startTime=".$ilktarih."&endTime=".$baslama);
							}
							
$img = json_decode($json);



$oncekikonumx="";

$oncekikonumy="";	

$oncekizaman="";

$oncekihiz=0;

$gezilen=0;

	foreach ($img->devices as $obj)

{

	                         $konumx=$obj->{'lat'};

							$konumy=$obj->{'lng'};

							$hiz=$obj->{'s'}/3600;

							if ($oncekikonumx!=""&&$oncekikonumx!=$konumx&&$oncekikonumy!=$konumy)

							{

								$timeFirst  = strtotime($oncekizaman);

                                $timeSecond = strtotime($obj->{'pt'});

                                $differenceInSeconds = $timeSecond - $timeFirst;

								

								

								$gezilen=$gezilen+(0.70*0.5*($oncekihiz+$hiz)*$differenceInSeconds);

								

								

								

								

						

							}

							

							$oncekikonumx=$konumx;

							$oncekikonumy=$konumy;

							$oncekizaman=$obj->{'pt'};

							$oncekihiz=$obj->{'s'}/3600;

	

}


if ($yap!=1)
{
mysqli_query($connection,"insert into sabitkm values('','".$_GET[plakano]."','".$oncekigun."','".$gezilen."')");
}

if ($yap==1)
{
mysqli_query($connection,"update sabitkm set tarih='".$oncekigun."',km='".$gezilen."' where plakano='".$_GET[plakano]."'");
}

					}
		
		
		
		
	
			

			$arackmsi=round($arackmsi+$gezilen+$gunluks);

			

			

		}

			

			

		}

	}

	

	if ($met[varsayilan]=='kirabedeli')

	{

		$varsayilan=$kirabedeli;

		

	

	}

	

	if ($met[varsayilan]=='arackmsi')

	{

		$varsayilan=$arackmsi;

		

	

	}

	

	if ($_GET["adresid"]!=="")

	{

		$sqly="select * from adresdefteri where index_adresdefteri='".$_GET["adresid"]."'";

		$sorguss=mysqli_query($connection,$sqly);

		

		while ($okk=mysqli_fetch_assoc($sorguss))

		{

			$musteriadi=$okk["musteriadi"];

			$telefon=$okk["telefon"];

			$adrestarifi=$okk["adrestarifi"];

			$ilce=$okk["ilce"];

			$mahalle=$okk["mahalle"];

			$caddesokak=$okk["caddesokak"];

			$konumx=$okk["konumx"];

			$konumy=$okk["konumy"];

			$binano=$okk["binano"];

			$eposta=$okk["eposta"];

			$notlar=$okk["notlar"];

		}

	}

	

	if ($met[varsayilan]=='$musteriadi')

	{

		

		$varsayilan=$musteriadi;

	}

	

	if ($met[varsayilan]=='$telefon')

	{

		

		$varsayilan=$telefon;

	}

	

	if ($met[varsayilan]=='$adrestarifi')

	{

		

		$varsayilan=$adrestarifi;

	}

	

	if ($met[varsayilan]=='$ilce')

	{

		

		$varsayilan=$ilce;

	}

	

	if ($met[varsayilan]=='$mahalle')

	{

		

		$varsayilan=$mahalle;

	}

	

	if ($met[varsayilan]=='$caddesokak')

	{

	
	
	
		$varsayilan=$caddesokak;

	}

	

		if ($met[varsayilan]=='$konumx')

	{

		$varsayilan=$konumx;

	}

	

		if ($met[varsayilan]=='$konumy')

	{

		$varsayilan=$konumy;

	}

	

		if ($met[varsayilan]=='$eposta')

	{

		$varsayilan=$eposta;

	}

	

	if ($met[varsayilan]=='$notlar')

	{

		$varsayilan=$notlar;

	}

	

	if ($met[varsayilan]=='$binano')

	{

		$varsayilan=$binano;

	}

		if ($met[varsayilan]=='$Map')

	{

		$varsayilan="";

		

		if ($konumx!=""&&$konumy!="")

		{

		$konum=$konumx.", ".$konumy;

		}

		

		

	}

	

	if ($_POST["konum"]!="")

		{

			$degersa=str_replace("(", "", $_POST["konum"]);

			$degersa=str_replace(")", "", $degersa);

			

		$konum=$degersa;

		}

		

	if ($met[varsayilan]=='userindis')

	{

		

		$varsayilan=$_SESSION["user_id"];

	}
	
	
		if ($met[varsayilan]=='oturum')

	{

		
if ($_GET["kurumid"]!='')
{

		$varsayilan=$_GET["kurumid"];
}

	}



	if ($met[varsayilan]=='subeid')

	{

		

		$varsayilan=$_SESSION["sube"];

	}


	if ($met[varsayilan]=='salonid')

	{

		

		$varsayilan=$_GET["salonid"];

	}
	
	
	if ($met[varsayilan]=='studyoid')

	{

		

		$varsayilan=iconv( "UTF-8","ISO-8859-9",$_GET["studyoid"]);

	}
	
	if ($met[varsayilan]=='randevubirimi')

	{

		

		$varsayilan=$_GET["randevubirimi"];

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
	
	
			if ($met[varsayilan]=='doktorum')

	{

		

		$varsayilan=$_GET[doktorum];

	}
	
	
		
	
			if ($met[varsayilan]=='birimi')

	{

		

		$varsayilan=$_GET[birimi];

	}
	
	
	if ($met[varsayilan]=='sube')

	{
	     $varsayilan=$_SESSION[sube];
	    
	}
	
	if ($met[varsayilan]=='ofisno')

	{
	     $varsayilan=$_GET[ofisno];
	    
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
	 
	 
	 
		if ($met[varsayilan]=='ayarlikonu')

	{
	    
	    
	    if ($_GET[kiraturu]=='')
	   {
	       
	       $varsayilan='';
	   }
	   
	   if ($_GET[kiraturu]=='yaklasan')
	   {
	       
	       $varsayilan=iconv( "UTF-8","ISO-8859-9",'Yaklaşan Kira Hatırlatması');
	   }
	   
	     if ($_GET[kiraturu]=='gecmis')
	   {
	       
	       $varsayilan=iconv( "UTF-8","ISO-8859-9",'Geçmiş Kira Hatırlatması');
	   }
	    
	}
	
	
	
	if ($met[varsayilan]=='ayarlimesaj')

	{
	    
	    
	    if ($_GET[kiraturu]=='')
	   {
	       
	       $varsayilan='';
	   }
	   
	   if ($_GET[kiraturu]=='yaklasan')
	   {
	       
	       $sql="select * from sablonlar where sablonadi like 'YAKLA%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=$okut[sablon];
	       }
	 
	   }
	   
	     if ($_GET[kiraturu]=='gecmis')
	   {
	         $sql="select * from sablonlar where sablonadi like 'GEC%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=$okut[sablon];
	       }
	   }
	    
	}
	
	
		if ($met[varsayilan]=='ayarlitelefonlar')

	{
	    
	    
	    if ($_GET[kiraturu]=='')
	   {
	       
	       $varsayilan='';
	   }
	   
	   if ($_GET[kiraturu]=='yaklasan')
	   {
	       
	       $sql="select * from kiralar left join uyeler on uyeler.user_indeks=kiralar.ilgilifirma where durumu like '%denmedi%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=";".$okut[telefon];
	       }
	 
	   }
	   
	     if ($_GET[kiraturu]=='gecmis')
	   {
	         $sql="select * from kiralar left join uyeler on uyeler.user_indeks=kiralar.ilgilifirma where durumu like '%denmedi%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=";".$okut[telefon];
	       }
	   }
	    
	}
	
	
	
		if ($met[varsayilan]=='fiyatim')

	{

		

		$varsayilan=$_GET["fiyatim"];

	}
	
		if ($met[varsayilan]=='fiyatimtl')

	{

		

		$varsayilan=$_GET["fiyatim"]." TL";

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

$sqlims="show table status from $veritabani where name='$formtablosu'";



$sorgulas=mysqli_query($connection,$sqlims);



while ($oka=mysqli_fetch_assoc($sorgulas))

{



$sira=$oka["Auto_increment"];





}



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



$sqlims="alter table $formtablosu AUTO_INCREMENT =".($sira+1);



$sorgulas=mysqli_query($connection,$sqlims);





$varsayilan=$degerc;

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



$varsayilan=$met[varsayilansabit].$varsayilan;







if ($met[verigiristuru]=='Hidden')

{

	echo "<input  id=".$met[alanadi]." name=".$met[alanadi]." type=\"hidden\" value=\"".$varsayilan."\">";

	

}



if ($met[verigiristuru]=='Button')

{

?>	

	

                                                    

                                                        <p align="center" style="margin-top: 25px;"><button class="btn btn-danger mr5 mb10 eklemeyap_<?php echo $met[alanadi]; ?>" type="button"><i class="cut-icon-stats-2 mr5"></i> Ekle</button>
                                                  

                                              

<?php

}







if ($met[verigiristuru]=='Map')

{

?>	





<style>

  #mapCanvas {

    width: 100%;

    height: 400px;

    float: left;

  }

  #infoPanel {

    float: left;

    margin-left: 10px;

  }

  #infoPanel div {

    margin-bottom: 5px;

  }

  </style>





  <div id="haritakonum" <?php echo $d;?>>

    <input id="pac-input" class="controls" type="hidden" placeholder="Search Box">

  <div id="mapCanvas"></div>

  <div id="infoPanel">

    <b>İşaret Durumu:</b>

    <div id="markerStatus"><i>İşareti sürükleyebilirsiniz.</i></div>

    <b>Mevcut Pozisyon:</b>

    <div id="info"></div>

    <b>Eşleşen adres:</b>

    <div id="address"></div>

  </div>

</div> 







<?php	

}

	

	

if ($met[verigiristuru]=='Boolean')

{

	
$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}


																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}	if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);   

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>	

<div <?php echo $boyut; ?>">	  

                                                    <label class="toggle" data-on="ON" data-off="OFF">

                                                        <input type="checkbox" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" <?php echo $ekkod; ?>>

                                                        <span class="button-checkbox"></span>

                                                    </label>

                                                    <label for="checkbox-toggle"><?php echo $etiketi; ?></label>

</div>

													

<?php                                               

}


if ($met[verigiristuru]=='Radiobutton')

{
    
    
    $ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

	$dilimler = explode(";", $met[fixlist]);

	

	

	

?>	

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">

  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>


	<?php 		                                             if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]); 

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																  ?>



																<div><?php echo $etiketi.":" ?></div>
																
																

																<?php	
																
																
																
																
																


																
																
																

																

														
												

for ($im=0;$im<count($dilimler);$im++)

	{

		$etiket=$dilimler[$im];

		

			

																if ($_GET[islem]!=""&&$met[alanadi]=='kiradurumu')

																{

																$varsayilan=iconv( "UTF-8","ISO-8859-9","Teslim Alındı");

																}

		

		

		if ($varsayilan==$etiket)

		{
		   $x=12/count($dilimler);
		    
		?>    
		    
		    
															<div class="form-check form-check-inline col-md-<?php echo $x ?> class="form-group mb-30"">
  <input
    class="form-check-input"
    type="radio"
    name="<?php echo $met[alanadi]; ?>"
    id="radio<?php echo $met[alanadi]."_".$im; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>"
    checked
  />
  <label class="form-check-label" for="flexRadioDefault1"> <?php echo iconv( "ISO-8859-9","UTF-8",$etiket); ?> </label>
</div>
		
	
	<?php

		}

		if ($varsayilan!=$etiket)

		{
		      $x=12/count($dilimler);
?>
		

															<div class="form-check form-check-inline col-md-<?php echo $x; ?> class="form-group mb-30"">
  <input
    class="form-check-input"
    type="radio"
    name="<?php echo $met[alanadi]; ?>"
    id="radio<?php echo $met[alanadi]."_".$im; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>"
  /> 
  <label class="form-check-label" for="flexRadioDefault1"> <?php echo iconv( "ISO-8859-9","UTF-8",$etiket); ?> </label>
</div>
	
	<?php

		}

		

																		

	}

		

																echo "</div>";															

																  

}





if ($met[verigiristuru]=='Form')

{

	

	 echo "<a href=\"mailorder.pdf\" target=\"_blank\">

                                <img src=\"pdficon.png\" alt=\"\" class=\"image\" />

                                <span class=\"txt\">Mail Order Formu İndir</span>

                                

                            </a>";

	

	

}


if ($met[verigiristuru]=='Spinner')

{
    
    if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}
    ?>
   <div class="slidecontainer col-md-2" <?php echo $boyut; ?> >
  <?php echo $etiketi.":" ?><input type="range" min="1" max="1000" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" class="slider" id="myRange">
</div> 
    <?php
}



if ($met[verigiristuru]=='Edit')

{
    
    
    $ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}


    $ek="";
    
    $tip="text";
    if (iconv( "ISO-8859-9","UTF-8",$met[alanturu])=='Sayı')

{
    $tip="text";
    $ek="pattern=\"\d*\" input pattern=\"[0-9]*\" inputmode=\"numeric\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');\"";
    
}

	

	

																

																if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>																

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="<?php echo $tip;?>" <?php echo $ek; ?> id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

</div>																



<?php

}


if ($met[verigiristuru]=='Color')

{

	
$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}
	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="color" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> <?php echo $ekkod; ?>>

</div>																



<?php

}




if ($met[verigiristuru]=='Time')

{

	$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="time" step="2" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> <?php echo $ekkod; ?>>

</div>																



<?php

}




if ($met[verigiristuru]=='Disabled')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="text" style="text-align:right;" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> readonly>

</div>																



<?php

}







if ($met[verigiristuru]=='File(JPG)'||$met[verigiristuru]=='File(PNG)'||$met[verigiristuru]=='File(GIF)'||$met[verigiristuru]=='File(MP4)')

{



																if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>																

<div <?php echo $boyut; ?>>



<?php echo $etiketi.":" ?><div class="fileinput fileinput-new" data-provides="fileinput">

													<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px; line-height: 150px;"><a href="<?php echo $varsayilan; ?>" data-toggle="lightbox" data-gallery="gallerymode" data-title="Yachts" data-parrent=""><img class="img-responsive" src="<?php echo $varsayilan; ?>" id="resim_<?php echo $met[alanadi]; ?>"></a></div>

													<div>

														<span class="btn default btn-file">

														<span class="fileinput-new">

														Resim Seç </span>

														<span class="fileinput-exists">

														Değiştir </span>

													<input id="sss<?php echo $met[alanadi]; ?>" name="sss<?php echo $met[alanadi]; ?>" value="" type="hidden"><input type="file" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" onchange="document.getElementById('resim_<?php echo $met[alanadi]; ?>').src = window.URL.createObjectURL(this.files[0])">

															</span>

														<a style="" href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput">

														Sil</a>

													</div>

												</div>	
</div>







<?php

}







if ($met[verigiristuru]=='File(PDF)')

{



																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>



<?php echo $etiketi.":" ?><div class="fileinput fileinput-new" data-provides="fileinput">

													<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 80%; height: 150px; line-height: 150px;"></div>

													<div>

														<span class="btn default btn-file">

														<span class="fileinput-new">

														PDF Seç </span>

														<span class="fileinput-exists">

														Değiştir </span>

													<input id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" value="" type="hidden"><input type="file" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>">

															</span>

														<a style="" href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput">

														Sil</a>

													</div>

												</div>		

												

</div>																









<?php

}









if ($met[verigiristuru]=='Textarea')

{

$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><textarea id="<?php echo $met[alanadi]; ?>" title="<?php echo $etiketi; ?>" name="<?php echo $met[alanadi]; ?>" style="width: 100%; height:100px;"  <?php echo $ekkod; ?> ><?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan);?></textarea>

</div>																









<?php

}



if ($met[verigiristuru]=='Date')

{

$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																
$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}
															

?>																

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><input type="date" style="min-width:180px;" id="<?php echo $met[alanadi]; ?>" title="<?php echo $etiketi; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

</div>																









<?php

}


if ($met[verigiristuru]=='Secimli')

{

$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?>



<div class="input-group mb-15"> 
														<input type="text" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" class="form-control" placeholder="Seçiniz"><span class="input-group-btn" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">
														<button type="button" class="btn  btn-warning secimyap" title="<?php echo $met[bagliform_index]; ?>|<?php echo $met[keyfield]; ?>|<?php echo $met[alanadi]; ?>"><i class="fa fa-search"></i></button>
														</span>
													</div>

</div>																









<?php

}


if ($met[verigiristuru]=='Secimliz')

{

		$id="";

	if ($met[alanadi]=="model")

{

	$id="id=\"modelicerik\"";

}

	if ($met[alanadi]=="kategorisi")


{

	$id="id=\"modelicerik\"";

}


	if ($met[alanadi]=="altkategorisi")


{

	$id="id=\"altkategoriicerik\"";

}


	

	

		$sqlmn="select * from formlar where form_index=$met[bagliform_index]";

																	$sorc=mysqli_query($connection,$sqlmn);

																	

																	  if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

?>





    <script type="text/javascript">

        $(function () {

			

			

			$('#<?php echo $met[alanadi]; ?>').on('change', function(){

    var selected = $(this).find("option:selected");

    var arrSelected = [];

    selected.each(function(){

       arrSelected.push($(this).val());
	   
    });

});

            

           

        });

    </script>





<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?> >

															 

																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>[]" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" multiple="multiple">

																	

																	

																<?php	

																

																

																

																

																

																while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

																	$sorgu=$okubeni[sorgusu];

																	$tablom=$okubeni[tablosu];

																	

																}

																

																if ($tablom=='firmalar')

																{

																	if ($_SESSION["kullanicituru"]=='bayi')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and bayiid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='bayi')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and index_firmalar>0");

																	}

																	

																}

																

																	if ($tablom=='araclar')

																{

																	if ($_SESSION["kullanicituru"]=='rentacar')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='rentacar')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid>0");

																	}

																	

																}

																

																if ($tablom!='firmalar'&&$tablom!='araclar')

																{

																$verigetir=mysqli_query($connection,$sorgu);

																	

																}

																

																

															

																echo "<option value=\"\">".$etiketi."</option>";

																

																while ($okn=mysqli_fetch_assoc($verigetir))

																{

																

																$alanadi=$met[keyfield];

																$verialani=$met[valuefield];

																

																$etiket=$okn[$verialani];

																$verisi=$okn[$alanadi];

																

																if ($_GET[islem]!=""&&$met[alanadi]=='kiradurumu')

																{

																$varsayilan=iconv( "ISO-8859-9","UTF-8","Teslim Alındı");

																}

																

																if ($varsayilan==$verisi)

																{

		

																	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$verisi)."\" selected>".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

																

																}

																

																			if ($varsayilan!=$verisi)

																{

		

																	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$verisi)."\">".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

																

																}

																

																	

																}

																

																	?>

																	

																	

																	

																

																	

																	

																	

																</select>

															</div>

														</div>



<?php

}


if ($met[verigiristuru]=='Autocomplete')

{

	$id="";

	if ($met[alanadi]=="model")

{

	$id="id=\"modelicerik\"";

}

if ($met[alanadi]=='personelturu')
{

$id="id=\"personeltur\" style=\"display:none\"";    
    
}

	if ($met[alanadi]=="kategorisi")


{

	$id="id=\"modelicerik\"";

}


	if ($met[alanadi]=="altkategorisi")


{

	$id="id=\"altkategoriicerik\"";

}


	

	

		$sqlmn="select * from formlar where form_index=$met[bagliform_index]";

																	$sorc=mysqli_query($connection,$sqlmn);

																	$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																

?>



<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?> >

															

																<?php echo $etiketi.":" ?><select class="form-control select2" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="<?php echo $etiketi; ?>" tabindex="1" <?php echo $required;?>>

																	

																	

																<?php	

																

																

																

																

																

																	while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

																	$sorgu=$okubeni[sorgusu];

																	$tablom=$okubeni[tablosu];

																	

																}

																

																if ($tablom=='firmalar')

																{

																	if ($_SESSION["kullanicituru"]=='bayi')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and bayiid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='bayi')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and index_firmalar>0");

																	}

																	

																}

																

																	if ($tablom=='araclar')

																{

																	if ($_SESSION["kullanicituru"]=='rentacar'||$_SESSION["kullanicituru"]=='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='rentacar')

																	{

																$verigetir=mysqli_query($connection,$sorgu);

																	}

																	

																}

																

																		if ($tablom=='musteriler')

																{

																	if ($_SESSION["kullanicituru"]=='rentacar'||$_SESSION["kullanicituru"]=='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='rentacar'&&$_SESSION["kullanicituru"]!='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid>0");

																	}

																	

																}

																

																

																if ($tablom!='firmalar'&&$tablom!='araclar'&&$tablom!='musteriler')

																{

																$verigetir=mysqli_query($connection,$sorgu);

																	

																}

																

																echo "<option value=\"\">".$etiketi."</option>";

																

																while ($okn=mysqli_fetch_assoc($verigetir))

																{

																

																$alanadi=$met[keyfield];

																$verialani=$met[valuefield];

																

																$etiket=$okn[$verialani];

																$verisi=$okn[$alanadi];

																

																if ($varsayilan==$verisi)

													{

		

																	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$verisi)."\" selected>".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

																

																}

																

																			if ($varsayilan!=$verisi)

																{

		

																	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$verisi)."\">".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

																

																}

																

																	

																}

																

																	?>

																	

																	

																	

																

																	

																	

																	

																</select>

															</div>

														</div>



<?php
}




if ($met[verigiristuru]=='MultiAutocomplete')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																
	                                                           $alanadi_1=$met[keyfield];

																$verialani_1=$met[valuefield];

																

															
																
															

?>																
  <link rel="stylesheet" href="assets/app.css">
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
    <script src="dist/bootstrap-tagsinput.min.js"></script>
    <script src="dist/bootstrap-tagsinput/bootstrap-tagsinput-angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/rainbow.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/generic.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/html.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/javascript.js"></script>
    <script src="assets/app.js"></script>
    <script src="assets/app_bs3.js"></script>
    
  
<div <?php echo $boyut; ?>">

<?php echo $etiketi; ?><input type="text" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" />
<script>
var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'assets/cities.php?formid=<?php echo $met[bagliform_index]; ?>&etiketalani=<?php echo $verialani_1; ?>&degeralani=<?php echo $alanadi_1; ?>'
});
cities.initialize();

var elt = $('input');
elt.tagsinput({
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'cities',
    displayKey: 'text',
    source: cities.ttAdapter()
  }
});

</script>


</div>																



<?php

}



if ($met[verigiristuru]=='Combobox')

{

		$id="";

	if ($met[alanadi]=="model")


{

	$id="id=\"modelicerik\"";

}


if ($met[alanadi]=='personelturu')
{

$id="id=\"personeltur\" style=\"display:none\"";    
    
}


	if ($met[alanadi]=="kategorisi")


{

	$id="id=\"modelicerik\"";

}


	if ($met[alanadi]=="altkategorisi")


{

	$id="id=\"altkategoriicerik\"";

}

	

	

		$sqlmn="select * from formlar where form_index=$met[bagliform_index]";

																	$sorc=mysqli_query($connection,$sqlmn);

																	

																	  if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

?>



<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?>  class="row" >

															 

																<span><?php echo $etiketi.":" ?></span><div class="col-md-10" style="padding-right:0px;padding-left:0px;"><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" style="width:100%;">

																	

																	

																<?php	

																

																

																

																

																

																while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

																	$sorgu=$okubeni[sorgusu];

																	$tablom=$okubeni[tablosu];

																	

																}

																

																if ($tablom=='firmalar')

																{

																	if ($_SESSION["kullanicituru"]=='bayi')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and bayiid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='bayi')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and index_firmalar>0");

																	}

																	

																}

																

																	if ($tablom=='araclar')

																{

																	if ($_SESSION["kullanicituru"]=='rentacar'||$_SESSION["kullanicituru"]=='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='rentacar')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid>0");

																	}

																	

																}

																

																

																		if ($tablom=='musteriler')

																{

																	if ($_SESSION["kullanicituru"]=='rentacar'||$_SESSION["kullanicituru"]=='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='rentacar'&&$_SESSION["kullanicituru"]!='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid>0");

																	}

																	

																}
																
																
																
																
																		if ($tablom=='firma_karsiliklari')

																{


																	if ($_GET["firmaid"]!='')

																	{
																	    
																	    
																	  

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_GET[firmaid]."'");

																	}

																	

																}

																
echo "BB";
																

																if ($tablom!='firmalar'&&$tablom!='araclar'&&$tablom!='musteriler'&&$tablom!='firma_karsiliklari')

																{

																$verigetir=mysqli_query($connection,$sorgu);

																	

																}

																

																

																

															

																echo "<option value=\"\">".$etiketi."</option>";

																

																while ($okn=mysqli_fetch_assoc($verigetir))

																{

																

																$alanadi=$met[keyfield];

																$verialani=$met[valuefield];

																

																$etiket=$okn[$verialani];

																$verisi=$okn[$alanadi];

																

																if ($_GET[islem]!=""&&$met[alanadi]=='kiradurumu')

																{

																$varsayilan=iconv( "ISO-8859-9","UTF-8","Teslim Alındı");

																}

																

																if ($varsayilan==$verisi)

																{

		

																	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$verisi)."\" selected>".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

																

																}

																

																			if ($varsayilan!=$verisi)

																{

		

																	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$verisi)."\">".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

																

																}

																

																	

																}

																

																	?>

																	

																	

																	

																

																	

																	

																	

																</select></div><div class="col-md-2"><button type="button" class="btn btn-warning btn-icon-anim btn-square verisec" style="margin-left:-14px;" title="<?php echo $met[bagliform_index]; ?>|<?php echo $alanadi; ?>|<?php echo $met[alanadi]; ?>|<?php echo $_GET[firmaid]; ?>"><i class="icon-rocket"></i></button></div>

															</div>

														</div>



<?php

}



if ($met[verigiristuru]=='Tags')

{
    	$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

    ?>
    <div <?php echo $boyut; ?>">
 
<?php echo $etiketi; ?><div class="body">
                            <div class="form-group demo-tagsinput-area">
                                <div class="form-line">
                                    <input type="text" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" class="form-control" data-role="tagsinput"
                                        value="<?php echo $varsayilan; ?>">
                                </div>
                            </div>
                        </div>
     
     
                        </div>
    
    <?php
    
}

if ($met[verigiristuru]=='MultiAutocomplete')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																
	                                                           $alanadi_1=$met[keyfield];

																$verialani_1=$met[valuefield];

																

															
																
															

?>																
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap-theme.min.css">
     <link rel="stylesheet" href="assets/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
    <script src="dist/bootstrap-tagsinput.min.js"></script>
    <script src="dist/bootstrap-tagsinput/bootstrap-tagsinput-angular.min.js"></script>

    <script src="assets/app.js"></script>
    <script src="assets/app_bs3.js"></script>
    
    
     
    
     
<div <?php echo $boyut; ?>">

<?php echo $etiketi; ?><input type="text" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" />
<script>
var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'assets/cities.php?formid=<?php echo $met[bagliform_index]; ?>&etiketalani=<?php echo $verialani_1; ?>&degeralani=<?php echo $alanadi_1; ?>'
});
cities.initialize();

var elt = $('input');
elt.tagsinput({
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'cities',
    displayKey: 'text',
    source: cities.ttAdapter()
  }
});

</script>


</div>																



<?php

}





if ($met[verigiristuru]=='Autocompletes')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>"><?php echo $etiketi; ?>

<input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

</div>																



<?php

}









if ($met[verigiristuru]=='FixList')

{
    	$dilimler = explode(";", $met[fixlist]);
    if ($met[alanadi]=='referansbirim')
    {
        	$dilimler = explode(";", $_GET[birimler]);
    }



if ($met[alanadi]=='personelsayisi')
{

$ek="id=\"personelsay\" style=\"display:none\"";    
    
}

if ($met[alanadi]=='personelturu')
{

$ek="id=\"personeltur\" style=\"display:none\"";    
    
}
	

	

?>	

<div <?php echo $boyut; ?> <?php echo $ek; ?>>



	<?php 		                                            $etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																  ?>



																<?php echo $etiketi.":"; ?><select class="custom-select form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="<?php echo $etiketi; ?>" tabindex="1" <?php echo $required;?>>

																

																

																<?php	

																

																	echo "<option value=\"\">".$etiketi."</option>";

												

for ($im=0;$im<count($dilimler);$im++)

	{

		$etiket=$dilimler[$im];

		


		if ($varsayilan==$etiket)

		{

		

	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$etiket)."\" selected>".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

		}

		if ($varsayilan!=$etiket)

		{

		

	echo "<option value=\"".iconv( "ISO-8859-9","UTF-8",$etiket)."\">".iconv( "ISO-8859-9","UTF-8",$etiket)."</option>";

		}

		

																		

	}

		

																echo "</select></div>";															

																  

}



													

													

}													

												

												if ($ykn[grupadi]!="")

												{

													?>

													<p>

													</div>

													</div>

<?php

												}

?>																						

                                                </div>

                                                <!-- End .row -->

												

												

												

                                            </div>

                                        </div>

                                        <!-- End .form-group  -->

										

<?php

}











}
    


?>										

										
	</div>
												</div>
												
												</div>
										

									<?php	

                                    if ($_GET["menu_id"]!="54")

										{

                                    ?>

                                        <!-- End .form-group  -->

                                        <div class="form-group">

                                            <div class="col-lg-12" style="padding-right:5px;">

                                                <div class="row">

                                                    <!-- Start .row -->

                                                   

                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right" id="gonders">


<?php
if ($_GET[menu_id]!="556")

{
    ?>
                                                        <button type="submit" id="gonderbuton" name="gonderbuton" class="btn btn-primary kaydet" title="sender.php?form_id=<?php 







if ($_GET[menu_id]!="")

{

echo $_GET[menu_id]."&username=".$_SESSION["username"]; 	

}



if ($_GET[menu_id]=="")

{

echo "36&username=".$_SESSION["username"]; 	

}





?>">Kaydet</button><?php
}
?>

                                                    </div>

                                                </div>

                                                <!-- End .row -->

                                            </div>

                                        </div>

                                        <!-- End .form-group  -->

										

										<?php

										}

										?>

                                        <!-- End .form-group  -->

                                    </form>
									
									
									
									<div class="modal fade modal-right" id="exampleModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body" id="kayitformudinamik">

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

									

										<div id="kayitduzenlemesi" class="bs-callout bs-callout-danger fade in" style="display:none">

                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>

                                <h4>Kayıt Düzenleme</h4>

                               <div id="detayicerik">
                                   </div>

                            </div>

									

									

									

									

									

									

                                </div>

                            </div>

                            <!-- End .panel -->					

					

					

                    </div>

                    <!-- End .row -->

</div>
</div>
</div>
</div>


<?php
    
}

	include 'baglanti.php';

	

	$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and verigiristuru='Autocompletes' order by formalanlari.alansirasi";

	

	$sorgulasan=mysqli_query($connection,$sqli);

	 

		

	if (mysqli_num_rows($sorgulasan)>0)

	{



	?>
	
	 

<script>

$(document).ready(function() {

	alert('BB'); 



	

<?php

	while ($okut=mysqli_fetch_assoc($sorgulasan))

	{

?>		

	 

    var <?php echo $okut[alanadi]; ?>Tags = [

	<?php

	

	

	$sqlmn="select * from formlar where form_index=$okut[bagliform_index]";

																	$sorc=mysqli_query($connection,$sqlmn);



																

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																

																

																while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

																	$sorgu=$okubeni[sorgusu];
																	
																	if ($okubeni[tablosu]=='musteriler')
																	{
																		$sorgu=$okubeni[sorgusu]." and firmaid='".$_SESSION["userid"]."'";
																		
																	}

																	

																	

																}

																

																$verigetir=mysqli_query($connection,$sorgu);

															

															

															

																while ($okn=mysqli_fetch_assoc($verigetir))

																{

																

																$alanadi=$okut[keyfield];

																$verialani=$okut[valuefield];

																

																$etiket=$okn[$verialani];

																$verisi=$okn[$alanadi];

																

																if ($deger!="")

																{

		

		$deger=$deger.",{label:\"".iconv( "ISO-8859-9","UTF-8",$etiket)."\", idx:\"".$verisi."\"}";

																	

																}

																

																			if ($deger=="")

																{

		

																			$deger="{label:\"".iconv( "ISO-8859-9","UTF-8",$etiket)."\", idx:\"".$verisi."\"}";

																}

																

																	

																}

									

	echo $deger;

?>	

   

    ];

    $( "#<?php echo $okut[alanadi]; ?>" ).autocomplete({

<?php
 if ($_GET[menu_id]=="35")
		   {
			   ?>
minLength: 11,
<?php
		   }
?>		   

      source: <?php echo $okut[alanadi]; ?>Tags,

	   select: function( event, ui ) {

		   <?php
		   
		   if ($_GET[menu_id]=="85"||$_GET[menu_id]=="76")
		   {
?>

$("#Cari_index").val(ui.item.idx);

<?php	   
		  
		   }
		   
		   
		   if ($_GET[menu_id]=="39"||$_GET[menu_id]=="61")
		   {
?>

$("#verildigifirma").val(ui.item.idx);

<?php	   
		  
		   }
		   
		   if ($_GET[menu_id]=="22")
		   {
?>

$("#firmasi").val(ui.item.idx);

<?php	   
		  
		   }
		   
		   
		   
		   if ($_GET[menu_id]=="35")
		   {
?>


$.ajax({
   type:'GET',
   url:'kisibilgilerigetir.php?firmano='+ui.item.idx,
   cache:true,
   processData:false,
    async: false,
   success:function(msg){
    
	var veri = msg.split('|');
	
	$("#kiralayantc").val(veri[0]);
$("#pasaportno").val(veri[1]);
$("#adi").val(veri[2]);
$("#soyadim").val(veri[3]);
$("#dogumtarihi").val(veri[4]);
$("#belgeseri").val(veri[5]);
$("#belgeno").val(veri[6]);
$("#telefon").val(veri[7]);
$("#adres").val(veri[8]);
$("#isadresi").val(veri[9]);
$("#ehliyetno").val(veri[10]);
$("#verildigitarih").val(veri[11]);
$("#verildigiyer").val(veri[12]);
$("#dogumyeri").val(veri[13]);

   },
   error:function(msg)
   {
	   alert('Hata');
   }
  }); 


<?php	   
		  
		   }
		   
		   ?>
		   
		   
	   }
		   

	  

    });

	

	

	

  } );

  </script>  

  <?php

  }

  

}



?>