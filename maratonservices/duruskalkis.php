<?php

include 'baglanti.php';
$tarih=date("Y-m-d");
$saat=date("H:i:s");


$sql="select *,TIME_TO_SEC(planlanansoktak) as soktaksuresi,TIME_TO_SEC(planlanancevrim) as planlanancevrimsuresi  from isemrioperasyonlari where index_isemrioperasyonlari=".$_GET[isemriid];

$sorgula=mysqli_query($connection,$sql);


$output="00:00:00";

while($okut=mysqli_fetch_assoc($sorgula))
{
    
    
    
    

$sqlyes="select * from is_istasyonlari left join calisanlar on concat_ws(' ',calisanlar.adi,calisanlar.soyadi)=is_istasyonlari.aktifoperator where istasyon_kodu='".$okut[isistasyonu]."'";
$sorbana=mysqli_query($connection,$sqlyes);
while($okut2=mysqli_fetch_assoc($sorbana))
{
    $operatorum=iconv( "ISO-8859-9","UTF-8",$okut2[aktifoperator]);
    $operatorid=iconv( "ISO-8859-9","UTF-8",$okut2[index_calisanlar]);
}



if ($_GET[bitir]=='E')
{
    
    mysqli_query($connection,"update duruskalkislar set durussaati='".$saat."' where isemriid='".$_GET[isemriid]."' and (isnull(durussaati) or durussaati='')");
}

if ($_GET[baslat]=='E')
{
    
    mysqli_query($connection,"insert into duruskalkislar(tarih,operator,baslamasaati,isemriid,durusnedeni) values('$tarih','$operatorid','$saat','$_GET[isemriid]','$_GET[duruskodu]')");
}


									                $sql2 = "select SUM(uygunmiktar) AS uygunmiktari,sum(firemiktari+firemiktari_2+firemiktari_3+firemiktari_4+firemiktari_5+firemiktari_6+firemiktari_7+firemiktari_8+firemiktari_9+firemiktari_10) as toplamfire from uretimler where isemriid='".$okut[index_isemrioperasyonlari]."' group by isemriid";
									               
									             
									                $sorgula = mysqli_query($connection,$sql2);
									                while($okut2 = mysqli_fetch_assoc($sorgula)){
									                    
									                $gerceklesenmiktar = $okut2[uygunmiktari];
									                $hataliuretim = $okut2[toplamfire];
									              
}


$kalanuretim=$okut[siparismiktari]-$gerceklesenmiktar;

if ($kalanuretim>0)
{
    
    $cevrimsay=floor($kalanuretim/$okut[partimiktari]);
    $kalansure=$cevrimsay*($okut[soktaksuresi]+$okut[planlanancevrimsuresi]);
}








$sql="select *,cast((TIME_TO_SEC(durussaati) - TIME_TO_SEC(baslamasaati))/60 as integer) AS `minutes` from duruskalkislar where isemriid='".$okut[index_isemrioperasyonlari]."' order by tarih,baslamasaati";

$sorgulat_durus=mysqli_query($connection,$sql);


$duruyor='E';
if (mysqli_num_rows($sorgulat_durus)==0)
{
    $suretoplami=0;
    $i=0;
    while($okut2=mysqli_fetch_assoc($sorgula_uretim))
{
    
    $operator=$okut2[operator];
   
    if ($i==0)
    {
        $baslama=$okut2[baslamasaati];
        $baslamatarihi=$okut2[tarih];
        $suretoplami=$suretoplami+$okut2['minutes']*1;
    }
    
    $i++;
    
     if ($i==mysqli_num_rows($sorgula_uretim))
    {
        $bitis=$okut2[bitissaati];
           $bitistarihi=$okut2[tarih];
              $suretoplami=$suretoplami+$okut2['minutes']*1;
    }
    
    
}
    

}


if (mysqli_num_rows($sorgulat_durus)>0)
{
    
    $suretoplami=0;
    
    $i=0;
        while($okut2=mysqli_fetch_assoc($sorgulat_durus))
{
    
    $operator=$okut2[operator];
    
    
      if ($okut2[baslamasaati]!=''&&$okut2[durussaati]=='')
    {
        
        $duruyor='E';
        
        $output=$okut2[tarih]." ".$okut2[baslamasaati];
        $duruskodu=$okut2[durusnedeni];
        
    }
    
    
    if ($okut2[durussaati]!=''&&$okut2[baslamasaati]!='')
    {
        $duruyor='H';
  $suretoplami=$suretoplami+$okut2['minutes']*1;
    if ($i==0)
    {
        $baslama=$okut2[baslamasaati];
        $baslamatarihi=$okut2[tarih];
         
    }
    
    $i++;
    
     if ($i==mysqli_num_rows($sorgulat_durus))
    {
        $bitis=$okut2[durussaati];
        $bitistarihi=$okut2[tarih];
     
    }
    }
    
    
}
    

}
    
    $sql="select *,cast((TIME_TO_SEC(bitissaati) - TIME_TO_SEC(baslamasaati))/60 as integer) AS `minutes` from uretimler where index_uretimler>0 and isemriid='".$okut[index_isemrioperasyonlari]."'";


$sorgulat_uretim=mysqli_query($connection,$sql);
        while($okut2=mysqli_fetch_assoc($sorgulat_uretim))
{
    
    
 $uretilen=$uretilen+$okut2[uygunmiktar];   
  $firemiktari=$firemiktari+$okut2[firemiktari]+$okut2[firemiktari_2]+$okut2[firemiktari_3]+$okut2[firemiktari_4]+$okut2[firemiktari_5];
  $uretimsuresi=$uretimsuresi+$okut2[minutes];
  
  if ($okut2[baslamasaati]!=''&&$okut2[bitissaati]=='')
  {
      
     // $output=$okut2[tarih]." ".$okut2[baslamasaati];
  }
  
  if ($okut2[baslamasaati]!=''&&$okut2[bitissaati]!='')
  {
     
      //$output=$okut2[tarih]." ".$okut2[bitissaati];
      
  }
}    
    

$suretoplami=$suretoplami*60;

if ($baslama!=''&&$bitis!=''&&$operator!='')
{

 $baslamasaati=$baslama;
 $bitissaati=$bitis;
    //vardiya bulma
    $sql="select * from calisanlar where index_calisanlar=".$operator;
    
    $sorgulamasi=mysqli_query($connection,$sql);
    
            while($okut2=mysqli_fetch_assoc($sorgulamasi))
            {
    
    $vardiyasi=$okut2[vardiyakodu];
    
            }
            
            
if ($vardiyasi!='')
{
    
$harcanansure=0;

$sql="select * from zamanlar left join vardiya on vardiya.index_vardiya=zamanlar.vardiyaid where vardiyakodu='".$vardiyasi."'";


$sorgu_vardiyalar=mysqli_query($connection,$sql);


    if ($baslamatarihi==$bitistarihi)
    {
        
        
        while($okut2=mysqli_fetch_assoc($sorgu_vardiyalar))
            {
               
               if ($baslamasaati>=$okut2[baslama]&&$bitissaati>=$okut2[bitis])
               {
                  $harcanansure = $harcanansure+strtotime($okut2[bitis]) - strtotime($okut2[baslama]) ;
                   
               }
               
                if ($baslamasaati>=$okut2[baslama]&&$bitissaati<=$okut2[bitis])
               {
                  $harcanansure = $harcanansure+strtotime($bitissaati) - strtotime($baslamasaati);
                   
               }
               
                   if ($baslamasaati<$okut2[baslama]&&$bitissaati<=$okut2[bitis])
               {
                  $harcanansure = $harcanansure+strtotime($bitissaati) - strtotime($okut2[baslama]);
                   
               }
               
               
                    if ($baslamasaati<$okut2[baslama]&&$bitissaati>$okut2[bitis])
               {
                  $harcanansure = $harcanansure+strtotime($okut2[bitis]) - strtotime($okut2[baslama]) ;
                   
               }
                
                
            }
        
        
    }
    
    
      if ($baslamatarihi!=$bitistarihi)
    {
        
        
    }
    
    
    $kullanilan=number_format(($harcanansure-($suretoplami*60))/$harcanansure,2);
    
    
}
    
    
}



?>

													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">Duruş-Kalkış Ekranı</h5>
													</div>
													<div class="modal-body col-md-12">
																			<!-- Row -->
				<div class="row" >
				    
				    
					
							<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark "><?php echo iconv( "ISO-8859-9","UTF-8",$okut[operasyonno]); ?></h3>
									<h6 class="panel-title txt-dark "><?php echo iconv( "ISO-8859-9","UTF-8",$okut[projekodu]); ?></h6>
									<h6 class="panel-title txt-dark "><?php echo iconv( "ISO-8859-9","UTF-8",$okut[isistasyonu]); ?></h6>
										<h5 class="panel-title txt-dark mt-10 "><?php echo $operatorum; ?></h5>
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
		
				</div>
				<!-- /Row -->
			
	            <div class="row">
	    	        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Toplam Süre</span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo sprintf('%02d:%02d:%02d', ($harcanansure/ 3600),($harcanansure/ 60 % 60), $harcanansure% 60); ?></span></span>
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Toplam Duruş</span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo sprintf('%02d:%02d:%02d', ($suretoplami/ 3600),($suretoplami/ 60 % 60), $suretoplami% 60); ?></span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Aktif Süre</span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo sprintf('%02d:%02d:%02d', (($uretimsuresi)/ 3600),(($uretimsuresi)/ 60 % 60), ($uretimsuresi)% 60); ?></span></span>
													
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
					<?php
					if ($duruyor=='H')
					{
					    ?>
					
					<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Başlama Zamanı</h3>
									<h6 class="panel-title txt-dark "><?php echo $output; ?></h6>
									
									<button type="button" class="btn btn-danger isemridurdur" title="<?php echo $_GET[isemriid]; ?>">Duruş Başlat</button>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
					<?php
					}
					?>
					
						<?php
					if ($duruyor=='E')
					{
					    ?>
					
					<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Duruş Kodu: <?php echo $duruskodu; ?></h3>
									<h6 class="panel-title txt-dark "><?php echo $output; ?></h6>
									
									<button type="button" class="btn btn-danger durusbitir" title="<?php echo $_GET[isemriid]; ?>">Duruş Bitir</button>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
					<?php
					}
					?>
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
														
													</div>
											


<?php
}
?>

	<!-- EasyPieChart JavaScript -->
	<script src="../vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"></script>

	<script src="dist/js/easypiechart-data.js"></script>