
	<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">Fire Giriş Ekranı</h5>
													</div>
													<div class="modal-body col-md-12 col-xs-12">
																			<!-- Row -->
				<div class="row" >
				    
				    
					
					
		
				</div>
				<!-- /Row -->
			
	            <div class="row">
	                
	                
<?php




include 'baglanti.php';

if ($_GET[oncekiseviye]=='')
{
$sql="select sinifi as turaciklamasi from hataturleri group by sinifi";
$seviye=0;
}



$noktasayisi=0;

if ($_GET[oncekiseviye]!='')
{
$sql="select * from hataturleri where sinifi='".iconv( "UTF-8","ISO-8859-9",$_GET[oncekiseviye])."' order by hataturkodu";
}

if ($_GET[secilenhata]!='')
{
$sql="select * from hataturleri where turaciklamasi='".iconv( "UTF-8","ISO-8859-9",$_GET[secilenhata])."' order by hataturkodu";
}


$sorgula=mysqli_query($connection,$sql);




while($okut=mysqli_fetch_assoc($sorgula))
{
    $duruskodu=iconv( "ISO-8859-9","UTF-8",$okut[hataturkodu]);
    $durustanimi=iconv( "ISO-8859-9","UTF-8",$okut[turaciklamasi]);
    if ($_GET[oncekiseviye]!='')
    {
        $oncekiseviye=$_GET[oncekiseviye].".".$duruskodu;
    }
       if ($_GET[oncekiseviye]=='')
    {
        $oncekiseviye=$duruskodu;
    }
    
   
   $bulunannoktasayisi=substr_count($duruskodu,".");
   
   if ($noktasayisi==0||($bulunannoktasayisi<=$noktasayisi))
   {
       
       $datadismis="";
       $clas="hataturleri";
       
    
       if ($_GET[oncekiseviye]!='')
       {
           $clas="fireolustur";
           
       }
       
       
         if ($_GET[secilenhata]!='')
       {  
           $datadismis="data-dismiss=\"modal\"";
           ?>
           
           
           	<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pa-0 bg-gradient2 <?php echo $clas; ?>" title="<?php echo $durustanimi; ?>">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Hata Türü</span>
												    
												    <span class="txt-light  weight-500  block"><?php echo $durustanimi; ?></span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo $duruskodu; ?></span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pa-0 bg-gradient2 " title="<?php echo $durustanimi; ?>">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Fire Miktarı</span>
												    	
													<span class="txt-light  block counter"><div class="input-group mb-15">
														<input type="number" id="firemiktari" name="firemiktari" class="form-control" placeholder="Miktar Giriniz" >
														<span class="input-group-btn">
														<button type="button" class="btn btn-danger btn-anim firekaydet" title="<?php echo $duruskodu; ?>"><i class="icon-rocket"></i><span class="btn-text">Kaydet</span></button>
														</span> 
													</div></span>
													
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
       
    if ($_GET[secilenhata]=='')
       {  
?>
	    	        
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pa-0 bg-gradient2 <?php echo  $clas; ?>" <?php echo $datadismis; ?> title="<?php echo $durustanimi; ?>">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    
												    <span class="txt-light  weight-500  block"><?php echo $durustanimi; ?></span>
													<span class="txt-light  block counter"><span class="counter-anim"><?php echo $duruskodu; ?></span></span>
													
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
}
}
?>
					
					
				
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Vazgeç</button>
														
													</div>