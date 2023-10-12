<?php

include 'baglanti.php';
$tarih=date("Y-m-d");
$saat=date("H:i:s");


$sqlyes="select * from index_isemirleri=".$_GET[isemriid];
$sorgitsin=mysqli_query($connection,$sqlyes);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    $operasyonno=$okut[operasyonno];
}


if ($_GET[numunekaydet]=='E')
{
    
   foreach ($_POST as $key => $value) {
       
       
       $dilimler = explode("_", htmlspecialchars($key));
       
       mysqli_query($connection,"update numuneler set $dilimler[2]='".htmlspecialchars($value)."' where isemriid='".$_GET[isemriid]."' and kontrolid='".$dilimler[1]."'");
       
       
       
    
} 

}

  $sql2 = "select * from uretimler where index_uretimler=".$_GET[uretimid];
									               
$sorgula=mysqli_query($connection,$sql2);


$output="00:00:00";

while($okut=mysqli_fetch_assoc($sorgula))
{
    
    
   
if ($_GET[firemiktari]!='')
{
    
    if ($okut[firemiktari]=='')
    {
        

        mysqli_query($connection,"update uretimler set firemiktari='".$_GET[firemiktari]."',hatakodu='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);
    }
    else
    if ($okut[firemiktari_2]=='')
    {
              mysqli_query($connection,"update uretimler set firemiktari_2='".$_GET[firemiktari]."',hatakodu_2='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  
    }
    else
     if ($okut[firemiktari_3]=='')
    {
                 mysqli_query($connection,"update uretimler set firemiktari_3='".$_GET[firemiktari]."',hatakodu_3='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  
     
    }
    else
     if ($okut[firemiktari_4]=='')
    {
                      mysqli_query($connection,"update uretimler set firemiktari_4='".$_GET[firemiktari]."',hatakodu_4='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  

    }
    else
     if ($okut[firemiktari_5]=='')
    {
                      mysqli_query($connection,"update uretimler set firemiktari_5='".$_GET[firemiktari]."',hatakodu_5='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  

    }
    else
     if ($okut[firemiktari_6]=='')
    {
                     mysqli_query($connection,"update uretimler set firemiktari_6='".$_GET[firemiktari]."',hatakodu_6='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  
 
    }
    else
     if ($okut[firemiktari_7]=='')
    {
                    mysqli_query($connection,"update uretimler set firemiktari_7='".$_GET[firemiktari]."',hatakodu_7='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  
  
    }
    else
     if ($okut[firemiktari_8]=='')
    {
                    mysqli_query($connection,"update uretimler set firemiktari_8='".$_GET[firemiktari]."',hatakodu_8='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  
  
    }
    else
     if ($okut[firemiktari_9]=='')
    {
                      mysqli_query($connection,"update uretimler set firemiktari_9='".$_GET[firemiktari]."',hatakodu_9='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  

    }
    else
     if ($okut[firemiktari_10]=='')
    {
                      mysqli_query($connection,"update uretimler set firemiktari_10='".$_GET[firemiktari]."',hatakodu_10='".$_GET[secilenhata]."' where index_uretimler=".$okut[index_uretimler]);  

    }
  
    
    
    
}



}


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


if ($_GET[baslat]=='E')
{
    
    mysqli_query($connection,"insert into uretimler(tarih,operator,baslamasaati,isemriid) values('$tarih','$operatorid','$saat','$_GET[isemriid]')");
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










    $sql="select *,cast((TIME_TO_SEC(bitissaati) - TIME_TO_SEC(baslamasaati))/60 as integer) AS `minutes` from uretimler where index_uretimler>0 and isemriid='".$okut[index_isemrioperasyonlari]."'";


$sorgulat_uretim=mysqli_query($connection,$sql);

$basladi='H';

        while($okut2=mysqli_fetch_assoc($sorgulat_uretim))
{
    
    
 $uretilen=$uretilen+$okut2[uygunmiktar];   
  $firemiktari=$firemiktari+$okut2[firemiktari]+$okut2[firemiktari_2]+$okut2[firemiktari_3]+$okut2[firemiktari_4]+$okut2[firemiktari_5]+$okut2[firemiktari_6]+$okut2[firemiktari_7]+$okut2[firemiktari_8]+$okut2[firemiktari_9]+$okut2[firemiktari_10];
  $uretimsuresi=$uretimsuresi+$okut2[minutes];
  
  if ($okut2[baslamasaati]!=''&&$okut2[bitissaati]=='')
  {
      $duruyor='H';
      $output=$okut2[tarih]." ".$okut2[baslamasaati];
      $uretimid=$okut2[index_uretimler];
      
      if ($_GET[bitir]=='E')
      {
          $duruyor='E';
                $output=$okut2[tarih]." ".$saat;
          mysqli_query($connection,"update uretimler set bitissaati='".$saat."',uygunmiktar='".$_GET[uretimmiktari]."' where index_uretimler=".$okut2[index_uretimler]);
      }
      
  }
  
  if ($okut2[baslamasaati]!=''&&$okut2[bitissaati]!='')
  {
      $duruyor='E';
      $output=$okut2[tarih]." ".$okut2[bitissaati];
      
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
														<h5 class="modal-title" id="exampleModalLabel2">Kalite Kontrol Ekranı</h5>
													</div>
													<div class="modal-body col-md-12 col-xs-12">
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
				
				
				
					<?php
					if ($okus[index_numuneler]=='')
										    {
					mysqli_query($connection,"insert into numuneler values(null,'','','','','','','','','".$_GET[isemriid]."','".$okus[index_kontrolplani]."')");
										    }
										    
					
					$deger="";
					
					$sira=1;
				
				   
					?>
				
				<div class="row align-items-start  mt-10 mb-15">
				    
				                <?php
				               for($i=1;$i<=$sira;$i++)
				               {
				                   if ($i==$sira)
				                   {
				                ?>
					            <div class="col-md-1 ml-25">
									<button class="btn btn-sm btn-primary btn-anim"><i class="icon-rocket"></i><span class="btn-text" >N<?php echo $i; ?></span></button>
								</div>
					           <?php
				                   }
				                   
				                    if ($i!=$sira)
				                   {
				                ?>
					            <div class="col-md-1 ml-25">
									<button class="btn btn-sm btn-default btn-anim"><i class="icon-rocket"></i><span class="btn-text">N<?php echo $i; ?></span></button>
								</div>
					           <?php
				                   }
				                   
				               }
				               ?>
													

				</div>
				
				
				<form  id="numuneformu" name="numuneformu">
				
				<?php
				
				
					$sql="select * from kontrolplani left join uretimprosesi on uretimprosesi.index_uretimprosesi=kontrolplani.ilgiliproses left join malzemeler on malzemeler.index_malzemeler=uretimprosesi.malzemeid left join numuneler on (numuneler.kontrolid=kontrolplani.index_kontrolplani and numuneler.isemriid='".$_GET[isemriid]."') where index_kontrolplani>0 and operasyonkodu='".$okut[operasyonno]."'";
	
$sira=2;
		$getir=mysqli_query($connection,$sql);
			while($okus=mysqli_fetch_assoc($getir))
			{
			  
			    if ($okus[index_kontrolplani]!='')
			    {
			    if ($okus[ilkonay]=='')
			    {
			        if ($sira>1)
			        {
			        $sira=1;
			        $kod="numune_"."5"."_ilkonay";
			        $alan="ilkonay";
			        }
			    }
			    if ($okus[ilkonay]!=''&&$okus[n2]=='')
			    {
			         if ($sira>1)
			        {
			        $sira=2;
			        $kod="numune_".$okus['index_kontrolplani']."_n2";
			        $alan="n2";
			        }
			    }
			    if ($okus[ilkonay]!=''&&$okus[n2]!=''&&$okus[n3]=='')
			    {
			        if ($sira>2)
			        {
			        $sira=3;
			        $kod="numune_".$okus['index_kontrolplani']."_n3";
			          $alan="n3";
			        }
			    }
			    if ($okus[ilkonay]!=''&&$okus[n2]!=''&&$okus[n3]!=''&&$okus[n4]=='')
			    {
			        if ($sira>4)
			        {
			        $sira=4;
			        $kod="numune_".$okus['index_kontrolplani']."_n4";
			          $alan="n4";
			        }
			    }
			    if ($okus[ilkonay]!=''&&$okus[n2]==''&&$okus[n3]!=''&&$okus[n4]!=''&&$okus[n5]=='')
			    {
			        if ($sira>5)
			        {
			        $sira=5;
			        $kod="numune_".$okus['index_kontrolplani']."_n5";
			          $alan="n5";
			        }
			    }
			       if ($okus[ilkonay]!=''&&$okus[n2]==''&&$okus[n3]!=''&&$okus[n4]!=''&&$okus[n5]!=''&&$okus[n6]=='')
			    {
			        if ($sira>6)
			        {
			        $sira=6;
			        $kod="numune_".$okus['index_kontrolplani']."_n6";
			          $alan="n6";
			        }
			    }
			          if ($okus[ilkonay]!=''&&$okus[n2]==''&&$okus[n3]!=''&&$okus[n4]!=''&&$okus[n5]!=''&&$okus[n6]!=''&&$okus[n7]=='')
			    {
			        if ($sira>7)
			        {
			        $sira=7;
			        $kod="numune_".$okus['index_kontrolplani']."_n7";
			          $alan="n7";
			        }
			    }
			    
			          if ($okus[ilkonay]!=''&&$okus[n2]==''&&$okus[n3]!=''&&$okus[n4]!=''&&$okus[n5]!=''&&$okus[n6]!=''&&$okus[n7]!='')
			    {
			        if ($sira>8)
			        {
			        $sira=8;
			        $kod="numune_".$okus['index_kontrolplani']."_n8";
			          $alan="n8";
			        }
			    }
			    
			    }
			}
			
			
				
				
				
				$sql="select * from kontrolplani left join uretimprosesi on uretimprosesi.index_uretimprosesi=kontrolplani.ilgiliproses left join malzemeler on malzemeler.index_malzemeler=uretimprosesi.malzemeid left join numuneler on (numuneler.kontrolid=kontrolplani.index_kontrolplani and numuneler.isemriid='".$_GET[isemriid]."') where index_kontrolplani>0 and operasyonkodu='".$okut[operasyonno]."'";
	
		$getir=mysqli_query($connection,$sql);
			while($okus=mysqli_fetch_assoc($getir))
			{
			    ?>
			
	            <div class="row">
	    	        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Kodu</span>
													<span class="txt-light" style="font-size:16px;"><?php echo $okus[kriterkodu]; ?></span>
													
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">N. D.</span>
													<span class="txt-light"><?php echo $okus[nominaldeger]; ?></span>
													<br><span class="txt-light">K.S: <?php echo $okus[kontrolsikligi]; ?></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Tolerans</span>
													<span class="txt-light"><?php echo $okus[toleransust]; ?></span>
													<span class="txt-light"><?php echo $okus[tolerans]; ?></span>
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
				
					
						<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block"><?php echo $no; ?></span>
												
														<input type="number" id="<?php echo "numune_".$okus[index_kontrolplani]."_".$alan; ?>" name="<?php echo "numune_".$okus[index_kontrolplani]."_".$alan; ?>" class="form-control" placeholder="Ölçülen" style="font-size:8pt;" value="<?php echo $okus[$alan]; ?>" >
													 
												
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
				
					
					
	            </div>
	<?php
			}
			?>
				</form>
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
															<button type="button" class="btn btn-success numunekaydet" >Güncelle</button>
														<button type="button" class="btn btn-danger olcumtablosu" title="<?php echo $_GET[isemriid]; ?>"  data-dismiss="modal">Ölçüm Tablosu</button>
														
													</div>
												
												
											


<?php
}
?>

	<!-- EasyPieChart JavaScript -->
	<script src="../vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"></script>

	<script src="dist/js/easypiechart-data.js"></script>