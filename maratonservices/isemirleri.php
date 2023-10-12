<?php

include 'baglanti.php';

$sql="select *,TIME_TO_SEC(planlanansoktak) as soktaksuresi,TIME_TO_SEC(planlanancevrim) as planlanancevrimsuresi  from isemrioperasyonlari where index_isemrioperasyonlari>0 and (ismerkezi='".$_GET[secilen]."' or isistasyonu='".$_GET[secilen]."')";

$sorgula=mysqli_query($connection,$sql);


while($okut=mysqli_fetch_assoc($sorgula))
{

?>

<div class="col-lg-3 col-md-4 col-sm-4 col-xs-5">
							<div class="panel panel-default contact-card card-view">
								<div class="panel-heading bg-gradient2" onclick="myFunction()">
									<div class="">
									
										<div class="text-center user-detail-wrap">	
											<span class="block card-user-name">
												<?php echo iconv( "ISO-8859-9","UTF-8",$okut[operasyonno]); ?>
											</span>
											<span class="block card-user-desn">
											<?php echo iconv( "ISO-8859-9","UTF-8",$okut[projekodu]); ?>
											</span>
										</div>
									</div>
							
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in " style="display:none;" id="acildi">
									<div class="panel-body row">
										<div class="user-others-details pl-15 pr-15">
											<div class="mb-15 mt-15">
												<span class="inline-block txt-dark">Durum : Başlamadı</span>
											</div>
											<div class="mb-15 mt-15">
												
												<span class="inline-block txt-dark">P. Miktarı : 	<?php echo $okut[siparismiktari] ?> Adet</span>
											</div>
											<div class="mb-15 mt-15">
									            <?php 
									                $sql2 = "select SUM(uygunmiktar) AS uygunmiktari from uretimler where isemriid='".$okut[index_isemrioperasyonlari]."' group by isemriid";
									                $sorgula = mysqli_query($connection,$sql2);
									                while($okut2 = mysqli_fetch_assoc($sorgula)){ ?>
									                    <span class="inline-block txt-dark">G. Miktarı : <?php echo $okut2[uygunmiktari] ?> Adet</span>
									               <?php 
									                $gerceklesenmiktar = $okut2[uygunmiktari];
									               } ?>
												
											</div>
											<div class="mt-15">
											  <?php
											  
											  $kalansure = $okut[soktaksuresi] * ($okut[siparismiktari] - $gerceklesenmiktar) / $okut[partimiktari];
											  $kalansure = $kalansure + ($okut[planlanancevrimsuresi] * ($okut[siparismiktari] - $gerceklesenmiktar) / $okut[partimiktari]);
											  ?>
												<span class="inline-block txt-dark">P. Kalan Süre : <?php echo gmdate("H:i:s", $kalansure); ?></span>
											</div>
										</div>
									
									
											<div class="mb-5 pl-15 mt-5 ">
												<span class="inline-block capitalize-font mr-5 mt-10 txt-dark">Hazırlık : </span>
												<span class="txt-dark">%70</span>
											</div>
											
											<div class="emp-detail pl-15 pr-15 mt-15">
										    	<div class="text-center txt-dark">
												<button class="btn btn-primary btn-rounded btn-sm btn-anim analizmodal" data-toggle="modal"  data-whatever="@getbootstrap" title="<?php echo $okut[index_isemrioperasyonlari]; ?>"><i class="fa fa-exclamation"></i><span class="btn-text">İş Emri Analizi</span></button>
										        </div>
										</div>
											  	<div class="emp-detail pl-15 pr-15 mt-15">
										    	<div class="text-center txt-dark">
												<button class="btn btn-warning btn-rounded btn-sm btn-anim ihtiyacmodal" data-toggle="modal"  data-whatever="@getbootstrap"><i class="fa fa-exclamation"></i><span class="btn-text">İhtiyaç Bildir</span></button>
										        </div>
										</div>  
										        	<div class="emp-detail pl-15 pr-15 mt-15">
										    	<div class="text-center txt-dark">
												<button class="btn btn-info btn-rounded btn-sm btn-anim kalitemodal" data-toggle="modal" style="width:135px;" data-whatever="@getbootstrap" title="<?php echo $okut[index_isemrioperasyonlari]; ?>"><i class="fa fa-exclamation"></i><span class="btn-text">Kalite</span></button>
										        </div>
										</div> 
										
										    
										
											<div class="emp-detail pl-15 pr-15 mt-15">
										    	<div class="text-center txt-dark">
												<button class="btn btn-success btn-rounded btn-sm btn-anim uretimmodal" data-toggle="modal" title="<?php echo $okut[index_isemrioperasyonlari]; ?>"  data-whatever="@getbootstrap"><i class="fa fa-exclamation"></i><span class="btn-text">Üretim Verileri</span></button>
										        </div>
										</div>  
										</div>
										
										
											
										</div>
									</div>
									
								</div>
							


<?php
}

?>

<script>
    function myFunction() {
  var x = document.getElementById("acildi");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>