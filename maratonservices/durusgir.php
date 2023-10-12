	<div class="modal-header col-xs-12">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">Duruş Giriş Ekranı</h5>
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
$sql="select * from durustanimlari where duruskodu='01' or duruskodu='02'";
$seviye=0;
}



$noktasayisi=0;

if ($_GET[oncekiseviye]!='')
{
$sql="select * from durustanimlari where duruskodu like '".$_GET[oncekiseviye].".%'";
$noktasayisi=1+substr_count($_GET[oncekiseviye],".");
}



$sorgula=mysqli_query($connection,$sql);




while($okut=mysqli_fetch_assoc($sorgula))
{
    $duruskodu=iconv( "ISO-8859-9","UTF-8",$okut[duruskodu]);
    $durustanimi=iconv( "ISO-8859-9","UTF-8",$okut[durustanimi]);
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
       $clas="sonrakiseviye";
       
       $altsayisi=mysqli_num_rows(mysqli_query($connection,"select * from durustanimlari where duruskodu like '".$duruskodu.".%'"));
       
       if ($altsayisi==0)
       {
           $clas="durusolustur";
           $datadismis="data-dismiss=\"modal\"";
       }
       
       
    
?>
	    	        
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pa-0 bg-gradient2 <?php echo $clas; ?>" <?php echo $datadismis; ?> title="<?php echo $duruskodu; ?>">
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
?>
					
					
				
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Vazgeç</button>
														
													</div>