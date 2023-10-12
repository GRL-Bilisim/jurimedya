<?php

include 'baglanti.php';

	$sqlyes="select * from menutasarimi where seviye='Seviye-2'";
		$sorgulat=mysqli_query($connection,$sqlyes);
		while($okut=mysqli_fetch_assoc($sorgulat))
		{
		    
		    		$sorbana="select menutasarimi.index_menutasarimi,menutasarimi.menutanimi,menutasarimi.formbaglantisi,kopru from menutasarimi where menutasarimi.seviye='Seviye-3' and  ustseviyesi='".$okut[index_menutasarimi]."' order by menutasarimi.sirasi";
	
		$sormus=mysqli_query($connection,$sorbana);
		
		if (mysqli_num_rows($sormus)>0)
		{
		    
		    
	
		
		?>
		
		   <div class="col-lg-3 col-md-4 col-sm-5 col-xs-12 menuliste" title="<?php echo $okut[index_menutasarimi]; ?>" id="menuliste_<?php echo $okut[index_menutasarimi]; ?>"> 
		<div class="panel panel-default card-view bg-gradient">
							<div class="panel-wrapper collapse in">
                                <div class="panel-body sm-data-box-1">
									<span class="uppercase-font weight-500 font-14 block text-center txt-light"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[menutanimi]); ?></span>	
									
									<div class="progress-anim mt-20">
										<div class="progress">
											<div class="progress-bar progress-bar-light wow animated progress-animated" role="progressbar" aria-valuenow="93.12" aria-valuemin="0" aria-valuemax="100" style="width: 93.12%;"></div>
										</div>
									</div>
									
								</div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="menu_<?php echo $okut[index_menutasarimi]; ?>" class="menuitem" style="display:none;">
<?php
		while($okus=mysqli_fetch_assoc($sormus))
		{
		    
		    
		       if ($okus[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okus[formbaglantisi];
		        }
		        
		        if ($okus[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okus[kopru]);
		        }
		     
		    
		    $sqlci="select * from formlar where form_index=".$okus[formbaglantisi];

		    $sorgitsin=mysqli_query($connection,$sqlci);
		    $kayitsayisi=0;
		    	while($okus2=mysqli_fetch_assoc($sorgitsin))
		{
		    
		    $sorgumuz=$okus2[sorgusu];
		    
		    
		    if ($okus[index_menutasarimi]=='78')
		    {
		        $sorgumuz=$sorgumuz." and malzemeler.malzemeturu='Hammadde'";
		    }
		    
		     if ($okus[index_menutasarimi]=='103')
		    {
		       $sorgumuz=$sorgumuz." and malzemeler.malzemeturu='Mamul'";  
		    }
		    
		     if ($okus[index_menutasarimi]=='102')
		    {
		         $sorgumuz=$sorgumuz." and malzemeler.malzemeturu='".iconv( "UTF-8","ISO-8859-9",'Yarımamul')."'";
		    }
		 
		    $kayitsayisi=0+mysqli_num_rows(mysqli_query($connection,$sorgumuz));
		    
		}
		    
		    $sqltek="select * from kullaniciloglari where formtanimi='".$okus[menutanimi]."' and islemturu like '%Yeni%' and tarih='".$tarih."'";
		    $sorgitsin=mysqli_query($connection,$sqltek);
		    
		    $eklenen=0+mysqli_num_rows($sorgitsin);
		    
		    
		     $sqltek="select * from kullaniciloglari where formtanimi='".$okus[menutanimi]."' and islemturu like '%Sil%' and tarih='".$tarih."'";
		    $sorgitsin=mysqli_query($connection,$sqltek);
		    
		    $silinen=0+mysqli_num_rows($sorgitsin);
		    
		    ?>
		    <div class="col-lg-3 col-md-4 col-sm-5 col-xs-12">
						
						
						<div class="panel panel-default card-view bg-gradient2">
								<div class="panel-heading">
								<div class="pull-left">
									<a href="<?php echo $baglanti; ?>"><h6 class="panel-title txt-light"><?php echo iconv( "ISO-8859-9","UTF-8",$okus[menutanimi]); ?></h6></a>
								</div>
								<div class="clearfix"></div>
							</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row">
										<div class="">
											<div class="pl-15 pr-15 mb-15">
												<div class="pull-left">
													<i class="zmdi zmdi-collection-folder-image inline-block mr-10 font-16 txt-light"></i>
													<span class="inline-block txt-light">Kayıt Sayısı</span>
												</div>	
												<span class="inline-block txt-light pull-right weight-500"><?php echo $kayitsayisi; ?></span>
												<div class="clearfix"></div>
											</div>
											<div class="pl-15 pr-15 mb-15">
												<div class="pull-left">
													<i class="zmdi zmdi-format-list-bulleted inline-block mr-10 font-16 txt-light"></i>
													<span class="inline-block txt-light">Bugün Eklenen</span>
												</div>	
												<span class="inline-block txt-light pull-right weight-500"><?php echo $eklenen; ?></span>
												<div class="clearfix"></div>
											</div>
											<div class="pl-15 pr-15 mb-15">
												<div class="pull-left">
													<i class="zmdi zmdi-ticket-star inline-block mr-10 font-16 txt-light"></i>
													<span class="inline-block txt-light">Bugün Silinen</span>
												</div>	
												<span class="inline-block txt-light pull-right weight-500"><?php echo $silinen; ?></span>
												<div class="clearfix"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
					</div>
		    
		    <?php
		    
		}
		
		echo "</div>";
		}
		}


?>