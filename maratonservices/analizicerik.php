<?php

include 'baglanti.php';


$sql="select *,TIME_TO_SEC(planlanansoktak) as soktaksuresi,TIME_TO_SEC(planlanancevrim) as planlanancevrimsuresi  from isemrioperasyonlari where index_isemrioperasyonlari=".$_GET[isemriid];

$sorgula=mysqli_query($connection,$sql);


$output="00:00:00";

while($okut=mysqli_fetch_assoc($sorgula))
{

$sqlyes="select * from is_istasyonlari where istasyon_kodu='".$okut[isistasyonu]."'";
$sorbana=mysqli_query($connection,$sqlyes);
while($okut2=mysqli_fetch_assoc($sorbana))
{
    $operator=iconv( "ISO-8859-9","UTF-8",$okut2[aktifoperator]);
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
    $output = sprintf('%02d:%02d:%02d', ($kalansure/ 3600),($kalansure/ 60 % 60), $kalansure% 60);
}

?>

													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">İş Emri Analizi</h5>
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
										<h5 class="panel-title txt-dark mt-10 "><?php echo $operator; ?></h5>
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
		
					        <div class="col-lg-12 col-sm-12 col-xs-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									
										<div class="col-sm-12 col-xs-12  mb-15  text-center ">
											<span id="pie_chart_1" class="easypiechart" data-percent="<?php echo floor($okut[oee]*100); ?>">
												<span class="percent head-font"><?php echo floor($okut[oee]*100); ?> </span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">OEE</h5>
										</div>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body pb-0">
									<div class="row">
									   
										<div class="col-sm-4 mb-15 text-center col-xs-4">
											<span id="pie_chart_2" class="easypiechart" data-percent="<?php echo floor($okut[kalite]*100); ?>">
												<span class="percent head-font"><?php echo floor($okut[kalite]*100); ?> </span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kalite</h5>
										</div>
										
									
										<div class="col-sm-4 mb-15 text-center col-xs-4">
											<span id="pie_chart_3" class="easypiechart" data-percent="<?php echo floor($okut[performans]*100); ?>">
												<span class="percent head-font"><?php echo floor($okut[performans]*100); ?> </span>
											</span>
												<h5 class="panel-title txt-dark mt-10 ">Performans</h5>
										</div>
										<div class="col-sm-4 mb-15 text-center col-xs-4">
											<span id="pie_chart_4" class="easypiechart" data-percent="<?php echo floor($okut[kullanilan]*100); ?>">
												<span class="percent head-font"><?php echo floor($okut[kullanilan]*100); ?> </span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kullanılabilirlik</h5>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
			
	            <div class="row">
	    	        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Planlanan Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo $okut[siparismiktari]; ?></span></span>
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Hatasız Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo $gerceklesenmiktar; ?></span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Hatalı Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo $hataliuretim; ?></span></span>
													
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-lg-12 col-sm-12 col-xs-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Kalan İş Emri Süresi</h3>
									<h6 class="panel-title txt-dark "><?php echo $output; ?></h6>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
														<button type="button" class="btn btn-primary">Talep Bildir</button>
													</div>
											


<?php
}
?>

	<!-- EasyPieChart JavaScript -->
	<script src="../vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"></script>

	<script src="dist/js/easypiechart-data.js"></script>