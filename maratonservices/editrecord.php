  <?php  	
            			if ($_GET[page_id]=='editrecord')
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

	<!-- Row -->
				<div class="row">
				    
				    <?php
				    $uzunluk="12";
				    if ($_GET[menu_id]=='254')
				    {
				        $uzunluk="9";
				        
				        $sql="select * from malzemeler where index_malzemeler=".$_GET[recordid];
				        $sorgulat=mysqli_query($connection,$sql);
				        
				        while($okuts=mysqli_fetch_assoc($sorgulat))
				        {
				            
				            if ($okuts[malzemeturu]=='Mamul')
				            {
				                  $elemanlar[0]=$okuts[index_malzemeler];
				                  $anaurun=$okuts[index_malzemeler];
				                $sql="select * from malzemerecete where malzemeid=".$okuts[index_malzemeler];
				                $sorgulat=mysqli_query($connection,$sql);
				                $i=1;
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[altmalzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                
				                }
				                
				                
				                for ($j=1;$j<=100;$j++)
				                {
				                    
				                    if ($elemanlar[$j]!='')
				                    {
				                        
				                         $sql="select * from malzemerecete where malzemeid=".$elemanlar[$j];
				                $sorgulat=mysqli_query($connection,$sql);
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[altmalzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                
				                }
				                
				                        
				                    }
				                    
				                    
				                    
				                }
				                
				                
				                
				            }
				            
				            
				             if ($okuts[malzemeturu]!='Mamul')
				            {
				                
				                
				                  $elemanlar[0]=$okuts[index_malzemeler];
				                $sql="select * from malzemerecete where altmalzemeid=".$okuts[index_malzemeler];
				                $sorgulat=mysqli_query($connection,$sql);
				                $i=1;
				              
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[malzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                
				                }
				                
				         
				                for ($j=1;$j<=100;$j++)
				                {
				                   
				                    if ($elemanlar[$j]!='')
				                    {
				                      
				                         $sql="select * from malzemerecete where altmalzemeid=".$elemanlar[$j];
				                         
				                $sorgulat=mysqli_query($connection,$sql);
				                
				                if (mysqli_num_rows($sorgulat)==0)
				                {
				                    $anaurun=$elemanlar[$j];
				                
				                 
				                }
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[malzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                
				                }
				                
				                        
				                    }
				
				                }
				                
				                
				                if ($anaurun!='')
				                {
				                    
				                    
				                         
				        $sql="select * from malzemeler where index_malzemeler=".$anaurun;
				        $sorgulat2a=mysqli_query($connection,$sql);
				                    
				            while($okuts=mysqli_fetch_assoc($sorgulat2a))
				        
				            {
				                  $elemanlar[0]=$okuts[index_malzemeler];
				                  $anaurun=$okuts[index_malzemeler];
				                $sql="select * from malzemerecete where malzemeid=".$okuts[index_malzemeler];
				                $sorgulat=mysqli_query($connection,$sql);
				                $i=1;
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[altmalzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                
				                }
				                
				                
				                for ($j=1;$j<=100;$j++)
				                {
				                    
				                    if ($elemanlar[$j]!='')
				                    {
				                        
				                         $sql="select * from malzemerecete where malzemeid=".$elemanlar[$j];
				                $sorgulat=mysqli_query($connection,$sql);
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[altmalzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                
				                }
				                
				                        
				                    }
				                    
				                    
				                    
				                }
				                
				                
				                
				            }
				            
				                    
				                    
				                    
				                }
				                
				                
				                
				
				            }
				            
				        }
				        
				        
				       
				        
				        ?>
				    
				        <div class="col-sm-3" style="display:none;">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<h6 class="panel-title txt-dark">Malzeme Ürün Ağacı</h6>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body">
										
										
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row" style="margin-left:-50px;">
        <div class="col-md-12">
            <ul id="tree1">
                
                <?php
                
            
             if ($anaurun!='')
				        {
				            ?>
				            
                        
				            <?php
				            $sql="select * from malzemeler where index_malzemeler=".$anaurun;
				        $sorgulat=mysqli_query($connection,$sql);
				        
				        while($okuts=mysqli_fetch_assoc($sorgulat))
				        {
				            $secili="";
				            if ($okuts[index_malzemeler]==$_GET[recordid])
				            {
				                $secili='secili';
				            }
				            
				            if ($okuts[ureticikodu]=='')
				            {
				                
				                
				                
				             echo "<li class='dugum <?php echo $secili; ?>' title='$okuts[index_malzemeler]'><a class='$secili' href=\"#\">".$okuts[malzemekodu]."</a>
                          <ul>";
                          
				            }
				            
				             if ($okuts[ureticikodu]!='')
				            {
				             echo "<li class='dugum  <?php echo $secili; ?>' title='$okuts[index_malzemeler]'><a class='$secili' href=\"#\">".$okuts[ureticikodu]."</a>
                          <ul>";
                          
				            }
				            
				            if ($okuts[malzemeturu]=='Mamul')
				            {
				                  $elemanlar[0]=$okuts[index_malzemeler];
				                $sql="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=".$okuts[index_malzemeler];
				                $sorgulat=mysqli_query($connection,$sql);
				                $i=1;
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                $elemanlar[$i]=$al[altmalzemeid];
				                $ustdugum[$i]=$elemanlar[$j];
				                 $i++;
				                 
				                  $secili="";
				            if ($al[index_malzemeler]==$_GET[recordid])
				            {
				                $secili='secili';
				            }
				            
				                 
				                 if ($al[ureticikodu]=='')
				            {
				                 echo "<li class=\"dugum $secili\" title=\"$al[index_malzemeler]\"><span class='$secili'>".$al[malzemekodu]."</span><a href=\"index.php?page_id=editrecord&menu_id=254&recordid=".$al[index_malzemeler]."\"><i class=\"icon-arrow-right-circle\"></i></a><ul id=\"node_".$al[index_malzemeler]."\" class=\"node_".$al[index_malzemeler]."\"></ul></li>";
				            }
				            
				            if ($al[ureticikodu]!='')
				            {
				                 echo "<li class=\"dugum $secili\" title=\"$al[index_malzemeler]\"><a class='$secili' href=\"index.php?page_id=editrecord&menu_id=254&recordid=".$al[index_malzemeler]."\">".$al[ureticikodu]."</a><ul id=\"node_".$okuts[index_malzemeler]."\" class=\"node_".$al[index_malzemeler]."\"></ul></li>";
				            }
				                
				                }
				                
				                
				               
				                
				            }
				            
				            
				        }
				            
				            
				            
				        }
            
            
                ?>
                
               
                        
                        
                        
                        
                        
                        
                    </ul>
                </li>
               
            </ul>
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
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
							    	<?php
												
												if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
												    ?>	
												    
												    <a class="inline-block alanlariduzelt" data-effect="fadeOut">
											<button type="button" class="btn btn-primary btn-square"><i class="icon-settings"></i></button>
										</a>
									
												    
										
							
									
									<?php
												}
												?>
								<div class="pull-left">
									<h6 class="panel-title txt-dark"><?php echo $formbasligi;?> ---> Düzenle</h6>
									
						
			
								</div>
										<?php
															if ($_GET[menu_id]=='489')
												{
												    ?>	
												    
											<a class="inline-block "  data-effect="fadeOut">
										<button class="btn btn-primary btn-sm btn-anim" id="isakisiaktar" title="<?php echo $_GET[recordid]; ?>"><i class="fa fa-sign-out"></i><span class="btn-text">İş Akışı Aktar</span></button>
										    </a>
										   <a class="inline-block "  data-effect="fadeOut">
										<button class="btn btn-warning btn-sm btn-anim" id="contatanimindanguncelle" title="<?php echo $_GET[recordid]; ?>"><i class="fa fa-pencil"></i><span class="btn-text">Conta Tanımından Güncelle</span></button>
										   </a> 
										   <?php } ?>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
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
                                    
                                    
                                    
                                       <div class="modal fade" id="odemeonaymodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ödeme Bildirimi</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Ödemeniz ile ilgili detayları lütfen bizimle paylaşınız
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Bildirimi Gerçekleştir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                   
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
                                                  Kayıt işlemi başarıyla gerçekleşti!
                                                </div>
                                                <div class="modal-footer">
                                                      <a href="index.php?page_id=listings&menu_id=<?php echo $_GET[menu_id]; ?>"><button type="button" class="btn btn-danger waves-effect"
                                                        >Listeye Dön</button></a>
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">OK</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                
                                
                                
                          <div class="modal fade" id="acikhesapModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel2">Açık Hesap</h5>
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                 
                                                    
                                                     <div class="ps-section__content">
              <div class="table-responsive">
             
             

<div class="container">
    <div class="row">
    
        <div class="col-md-12">
          <script src="https://js.stripe.com/v2/" type="text/javascript"></script>
         
            <div class="form-row">
              <div class="col-xs-12 form-group required">
                <label class="control-label"><font size="3">Üye hesabınıza bu talebiniz onaylandığında, ilgili tutar borç olarak eklenecektir. <span id="rezervasyonno2"> </span> rezervasyon numarası ile üye cari hesap ekstrenize işlenecektir.</font></label>
                
              </div>
            </div>
                            
                
            
           
            <div class="form-row">
              <div class="col-md-12">
                <div class="form-control total btn btn-info">
                  Ödenecek Tutar: <span id="odenecek2">0.00 TL</span>
                
                </div>
              </div>
            </div>
            
           
        </div>
  
    </div>
</div>
              
              
              </div>
              
              </div>
            
                                                    
                                                    
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect" id="acikhesapode" name="acikhesapode"
                                                        >Tamam</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                    
                                    
                                    
                                      <div class="modal fade" id="havaleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel2">Havale ile Ödeme</h5>
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                 
                                                    
                                                    
                                                     <div class="ps-section__content">
              <div class="table-responsive">
              <table class="table ps-table--shopping-cart">
                <thead>
                  <tr>
                    <th>Banka</th>
                    <th>IBAN</th>
                    <th>Hesap Sahibi</th>
                  
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    <?php
                    
                     $sql="select * from kiralar where index_kiralar=".$_GET[islemid];
                    $sorgula=mysqli_query($connection,$sql);
                    while ($okut=mysqli_fetch_assoc($sorgula))
                    {
                     $tutar=$okut[odenecek];   
                      $kirano=$okut[kirano]; 
                    }
                    
                    
                    $sql="select * from ibanbilgileri";
                    $sorgula=mysqli_query($connection,$sql);
                    while ($okut=mysqli_fetch_assoc($sorgula))
                    {
                        ?>
    
                    <tr>
                        <th><?php echo iconv( "ISO-8859-9","UTF-8",$okut[bankaadi]); ?></th>
                    <th><?php echo iconv( "ISO-8859-9","UTF-8",$okut[iban]); ?></th>
                    <th><?php echo iconv( "ISO-8859-9","UTF-8",$okut[hesapsahibi]); ?></th>
                  
                    <th></th>
                        </tr>
                    <?php
                    }
                    ?>
                        
                   
                        </tbody>
                    </table>
             

<div class="container">
    <div class="row">
        <div class="col-md-12"></div>
        <div class="col-md-12">
          <script src="https://js.stripe.com/v2/" type="text/javascript"></script>
         
            <div class="form-row">
              <div class="col-xs-12 form-group required">
                <label class="control-label"><font size="3">Havale Gönderirken Açıklamaya Lütfen Ekleyiniz <span id="rezervasyonno"> </span> rezervasyon numarası olarak yazınız.</font></label>
                
              </div>
            </div>
                            
                
            
           
            <div class="form-row">
              <div class="col-md-12">
                <div class="form-control total btn btn-info">
                  Ödenecek Tutar: <span id="odenecek" style="margin-top:0px !important">0.00 TL</span>
                
                </div>
              </div>
            </div>
            
           
        </div>
        <div class="col-md-4"></div>
    </div>
</div>
              
              
              </div>
              
              </div>
            
                                                    
                                                    
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" id="havaleodemeyap" name="havaleodemeyap" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Tamam</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    
                                   
                                   
                           
                                    
                                      <div class="modal fade" id="kartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel2">Kredi Kartı Ödeme Sayfası</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Rezervasyonu tamamlamak için ödeme girmelisiniz.<br>
                                                    
                                                    <form class="checkout" id="odemeformu">
    
    <p>
      <input type="text" class="checkout-input checkout-name" id="adsoyad" placeholder="Ad Soyad">
      <input type="text" class="checkout-input checkout-exp" id="card_aa" placeholder="AA">
      <input type="text" class="checkout-input checkout-exp" id="card_yy" placeholder="YY">
    </p>
    <p>
      <input type="text" class="checkout-input checkout-card" id="card_number" placeholder="**** **** **** ****">
      <input type="text" class="checkout-input checkout-cvc" id="card_cvv" placeholder="CCV">
    </p>
    <p>
      <input type="text" class="checkout-input checkout-cvc" id="kartodemesi" placeholder="0.00" value="0.00" read only>
    </p>
    <p>
      <input type="button" value="ÖDEME YAP" id="odemeyaps" name="odemeyaps" class="checkout-btn">
    </p>
  </form>
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    
                                    
                                     <div class="modal fade" id="iptalneden" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Lütfen İptal Nedeni Giriniz</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    	<?php echo "<input  id=".$met[alanadi]." name=".$met[alanadi]." type=\"hidden\" value=\"".$varsayilan."\">"; ?>

                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">İptal Et</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>


							<div id="kayitformuicerik">

									

									</div>
									
<?php


$sqlye="select * from bloklar where formindex=$_GET[menu_id] order by sirasi asc,bokindex asc";

$sorgulakardes=mysqli_query($connection,$sqlye);


while ($ykn=mysqli_fetch_assoc($sorgulakardes))

{	


	$ek="";
if ($ykn[tabbar]!='')
{
    
    for ($i=0;$i<20;$i++)
    {
        if ($dizim[$i]==$ykn[tabbar])
        {
         $ek="home".$i;   
        }
        
        
    }
    
    
}



if ($ykn[turu]=='Liste')
		
{	
    
       $sorgumuz="select * from formlar where form_index=$ykn[bagliformindex]";
	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		
$formid=$usttablo[form_index];


}
    
    ?>
    
                                    <div class="modal fade" id="yenisatirModal_<?php echo $formid; ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_<?php echo $formid; ?>">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
    <?php
}

}
?>
									 <div class="modal fade" id="tablosecimModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ara ve Seçim Yap</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="tablosecimicerik" name="tablosecimicerik">
                                                  
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">OK</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	 	
                                    
                                    
                                                       <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        
                        <div class="body">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                
                            <?php
                             $sqlt="select tabbar from bloklar where formindex=$_GET[menu_id] and tabbar<>'' group by tabbar order by bloklar.sirasi";
                            $sorgulat=mysqli_query($connection,$sqlt);
                            $i=-1;
                            
                            if (mysqli_num_rows($sorgulat)>0)
                            {
                                
                                $tabvar="E";
                                
                            }
                            
                            
                            while($okut=mysqli_fetch_assoc($sorgulat))
                            {
                                $i++;
                                $aktif="";
                                
                                $dizim[$i]=$okut[tabbar];
                                
                                
                                if ($i==0)
                                {
                                    $aktif="active show";
                                }
                             ?>   
                                <li role="presentation" class="<?php echo $aktif;  ?>">
                                    <a href="#home<?php echo $i; ?>" data-toggle="tab" class="<?php echo $aktif;  ?>"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[tabbar]); ?></a>
                                </li>
                            <?php
                            }  
                            ?>
                            </ul>
                            
                        </div>
                    </div>
                </div>
           
           
            <div class="modal fade" id="excelimport_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Excelden Aktar</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                   
                                                    <form action="" method="post" name="frmExcelImport_genel" id="frmExcelImport_genel" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-4"><input type="file" name="file"
                    id="file" accept=".xls,.xlsx"></div>
                    
                    
                    <input type="hidden" name="menu_id"
                    id="menu_id" value="<?php echo $_GET[menu_id]; ?>">
                  <div class="col-md-4">  
                <button type="submit" id="submit" name="import"
                    class="btn-submit">Yükle</button>
        </div>
            </div>
            </form>
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                       <div class="modal fade" id="yenisatirModal_199" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_199">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
		    
                   
    
         
                                    <form class="form-horizontal" role="form" method="POST" id="kayitformu" action="sender.php?form_id=<?php 







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



$sqlye="select * from bloklar where formindex=$_GET[menu_id] order by sirasi asc,bokindex asc";

$sorgulakardes=mysqli_query($connection,$sqlye);





$saat=date("H:i:s");

$tarih=date("yyyy-MM-dd");





while ($ykn=mysqli_fetch_assoc($sorgulakardes))

{	



	$ek="";
if ($ykn[tabbar]!='')
{
    
    for ($i=0;$i<20;$i++)
    {
        if ($dizim[$i]==$ykn[tabbar])
        {
         $ek="home".$i;   
        }
        
        
    }
    
    
}

$satirboyut=$ykn[boyut];


if($ykn[turu]=='Sayfa'){ 

?>
 <div class="col-lg-<?php echo $satirboyut; ?> <?php echo $ek; ?>">
       <iframe src="<?php echo $ykn[link]; ?>" width="100%" height="770" ></iframe>
     </div>
 

    
<?php }

if ($ykn[turu]=='Liste')
		
{
    
    $satirboyut=$ykn[boyut];
    
    $sorgumuz="select * from formlar where form_index=$ykn[bagliformindex]";
	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		
$formid=$usttablo[form_index];


    
    ?>
    
    
    
     
     
    
	
	<div class="col-lg-<?php echo $satirboyut; ?> <?php echo $ek; ?>">



                            <div class="panel panel-default toggle panelClose panelRefresh" id="altform_<?php echo $formid; ?>" style="width:100% !important;">



                                
                                
                                <div class="panel-heading">
									<div class="pull-left">
										<h6 class="panel-title txt-dark"><?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[formtanimi]); ?></h6>
									</div>
									<div class="pull-right">
										<div class="pull-left inline-block dropdown mr-15">
										
										</div>
										
									    
												  <?php
										    
										    if($usttablo[islemmenu]==' '){ ?>
										    
										   <?php }
										  else {
										  ?>
									
												<a class="inline-block excelimport" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$ykn[detailfield]); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-warning">Excelden Aktar</button>
										</a>
										<a class="inline-block yenisatir" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$ykn[masterfield]."|".$ykn[detailfield]); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-success">Ekle</button>
										</a>
										
											<?php
										  }
										
										
												
												if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
												    ?>	
												    
												    <a class="inline-block" data-effect="fadeOut" href="index.php?page_id=editrecord&menu_id=198&recordid=<?php echo $usttablo[form_index]; ?>">
											<button type="button" class="btn btn-primary btn-square"><i class="icon-settings"></i></button>
										</a>
										
										
										<a class="inline-block" href="index.php?page_id=design&tasarimid=<?php echo $usttablo[form_index]; ?>" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-default btn-square"><i class="icon-folder"></i></button>
										</a>
												    
										
							
									
									<?php
												}
												?>
										
										
										
									</div>
									<div class="clearfix"></div>
								</div>

                                <div class="panel-body" style="width:100%;">

                                    <div class="slimScrollDiv" style="width: 100%;">
                                        
                                        <div class="table-responsive" style="width: 100%; height: auto;" id="alttablo_<?php echo $formid; ?>">
                                        
                                        <table class="table table-hover  example" style="width:100%;">

                                        <thead style="width:100% !important;">

                                            <tr>
                                                
                                                
                                                <?php
	
	$ozelformid=$ykn[bagliformindex];
	$masterfield1=$ykn[masterfield];
	$detailfield1=$ykn[detailfield];
	$sqly="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$ykn[bagliformindex] and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi asc";
	$sorgulamasi=mysqli_query($connection,$sqly);
	
while ($hastam=mysqli_fetch_assoc($sorgulamasi))
{


                                                echo "<th><font size=\"2\">".iconv( "ISO-8859-9","UTF-8",$hastam[alanyazisi])."</font></th>";
    
}
?>
<th><font size="2">İşlemler</font></th>
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


$sordurtma="select * from $formtablosu where $anahtars=$_GET[recordid]";



$sorbanas=mysqli_query($connection,$sordurtma);



while ($okukardesim=mysqli_fetch_assoc($sorbanas))

{
$ortak=$ykn[masterfield];
$alan=$okukardesim[$ortak];   
    
}
	
		
		$sqls=$sqls." and ".$ykn[detailfield]."='".$alan."'";
		
		
		if ($usttablo[tablosu]=='isemrioperasyonlari')
		{
		    $sqls=$sqls." order by sirano desc";
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
                                                <img src=\"".iconv( "ISO-8859-9","UTF-8",$icerigi[$alanveri])."\" width=\"100px\"></a>";
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
                                                
                                                echo "<td><font size=\"2\">".iconv( "ISO-8859-9","UTF-8",$icerigi[$alanveri])."</font></td>";
}
   

}		

if ($formid!='126')
{
					echo "<td>";
					
					?>
					<a class="pull-left inline-block satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$ykn[masterfield]."|".$ykn[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a class="pull-left inline-block satirsil" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$ykn[masterfield]."|".$ykn[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
                                                
                                                
                                        <?php 
                                            if($formid=='513'){?>
                        <a href="https://bulutfabrika.net/asalyapi/index.php?page_id=editrecord&menu_id=231&recordid=<?php echo $icerigi[$anahtar2]; ?>" data-original-title="VDF Git"><button class="btn btn-success btn-icon-anim btn-square" type="button"><i class="icon-rocket"></i></button></a>
                        <a href="https://bulutfabrika.net/asalyapi/index.php?page_id=editrecord&menu_id=489&recordid=<?php echo $icerigi[$anahtar2]; ?>" data-original-title="Maliyet Analizi Git"><button class="btn btn-primary btn-icon-anim btn-square" type="button"><i class="icon-settings"></i></button></a>
                        
                                          <?php  }
                                       
                                                     if($formid=='521'){?>
                                        <button type="button" id="kalibaaktar" name="kalibaaktar" class="btn btn-warning" title="<?php echo $_GET[recordid] ?>">Kalıba Aktar</button>

                        
                                          <?php }
                                              
                                                
                                                
                                                if ($formid=='278')
{
    
    if ($icerigi[kod_rezervasyon]=='')
    {
       ?> 
        
        
          <a class="pull-left inline-block rezervyap" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-success btn-icon-anim btn-square tip"><i class="icon-action-redo"></i></button></a>
                                                
        
        <?php
    }
    
     if ($icerigi[kod_rezervasyon]!='')
    {
        ?>
          <a class="pull-left inline-block rezervgerial" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-warning btn-icon-anim btn-square tip"><i class="icon-action-undo"></i></button></a>
             
        <?php
    }
    
    
}



                           if ($formid=='250')
{
    
    if ($icerigi[varsayilan]=='EVET')
    {
       ?> 
        
        
          <a class="pull-left inline-block varsayilangerial" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-success btn-icon-anim btn-square"><i class="icon-check"></i></button></a>
                                                
        
        <?php
    }
    
     if ($icerigi[varsayilan]!='EVET')
    {
        ?>
          <a class="pull-left inline-block varsayilanyap" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-warning btn-icon-anim btn-square"><i class="icon-action-undo"></i></button></a>
             
        <?php
    }
    
    
}



					echo "</td>";
}

if ($formid=='126')
{
?>
<td>
    
            <button type="button" title="Değiştir" id="degistir_<?php echo $formid; ?>_<?php echo $icerigi[$anahtar2]; ?>" class="btn btn-success btn-s  mr10 mb10">
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
}

}	




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


	$ek="";
if ($ykn[tabbar]!='')
{
    
    for ($i=0;$i<20;$i++)
    {
        if ($dizim[$i]==$ykn[tabbar])
        {
         $ek="home".$i;   
        }
        
        
    }
    
    
}


	
$satirboyut=$ykn[boyut];
	

?>

								

                                        <div class="form-group col-lg-<?php echo $satirboyut; ?> <?php echo $ek; ?>" style="margin-left:5px;padding-left:0px;padding-right:0px;">

                                            <div id="tablo_<?php echo $formid; ?>" class="col-lg-12" style="padding-left:0px;padding-right:0px;">

<?php
if ($ykn[grupadi]!='')
{
    ?>



													<div class="panel panel-default card-view">

													<div class="panel-heading">

                                    <h4 class="panel-title"><?php echo iconv( "ISO-8859-9","UTF-8",$ykn[grupadi]);  ?></h4>
                                    
                                    <div class="pull-right">
										<div class="dropdown  pull-left">
											<a class="dropdown-toggle weight-500 formac" id="examplePanelDropdown_<?php echo $ykn[bokindex]; ?>" data-toggle="dropdown" href="#" aria-expanded="false" role="button" title="ac">
											
												<i class="zmdi zmdi-chevron-down caret-up" style="top:-16px;"></i>
											</a>
											
										</div>
									</div>

                               </div>

								<div class="panel-body"  id="body_<?php echo $ykn[bokindex]; ?>">

<?php
}
?>

                                                <div class="row">
                                                    
                                                    
                                                  
												

												

<?php


$anahtarsor="SHOW KEYS FROM ".$formtablosu." WHERE Key_name = 'PRIMARY'";
$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
    
$anahtars=$gel['Column_name'];
    
}


$sordurtma="select * from $formtablosu where $anahtars=$_GET[recordid]";



$sorbanas=mysqli_query($connection,$sordurtma);



while ($okukardesim=mysqli_fetch_assoc($sorbanas))

{



	$sorbak=mysqli_query($connection,"select * from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where bloklar_alti.blokindex=$ykn[bokindex] and kayitformu=1 order by bloklar_alti.sirasi");

$kayitsayisi=mysqli_num_rows($sorbak);



while ($met=mysqli_fetch_assoc($sorbak))

{

	

	$degers=$met[alanadi];

if ($degers=='siparisdurumu')
{
    $siparisdurumu=iconv( "ISO-8859-9","UTF-8",$okukardesim[$degers]);
    
}

if ($degers=='geneltoplam')
{
    $geneltoplam=iconv( "ISO-8859-9","UTF-8",$okukardesim[$degers]);
    
}



if ($degers=='fatura_adi')
{
    $fatura_adi=iconv( "ISO-8859-9","UTF-8",$okukardesim[$degers]);
    
}

if ($degers=='optradio')
{
    $odemesekli=iconv( "ISO-8859-9","UTF-8",$okukardesim[$degers]);
    
}

if ($degers=='fatura_soyadi')
{
    $fatura_sadi=iconv( "ISO-8859-9","UTF-8",$okukardesim[$degers]);
    
}
if ($degers=='fatura_telno')
{
    $fatura_telno=$okukardesim[$degers];
    
}


if ($degers=='siparisno')
{
    $siparisno=$okukardesim[$degers];
    
}

if ($degers=='optradio')
{
    $odemesekli=iconv( "ISO-8859-9","UTF-8",$okukardesim[$degers]);
    
    
    
    
}

$varsayilan=$okukardesim[$degers];





if ($met[verigiristuru]=='Hidden')

{

	

		if ($_GET[islem]!=""&&$met[alanadi]=='kiradurumu')

																{

																$varsayilan=iconv( "UTF-8","ISO-8859-9","Teslim Alındı");

																}	

	echo "<input  id=".$met[alanadi]." name=".$met[alanadi]." type=\"hidden\" value=\"".$varsayilan."\">";

	

}










if ($met[verigiristuru]=='Map')

{

?>	





<style>

  #mapCanvas {

    width: 600px;

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



  

  <input type="text" value="" id="searchbox" style=" width:800px;height:30px; font-size:15px;">

  <div id="mapCanvas"></div>

  <div id="infoPanel">

    <b>Marker status:</b>

    <div id="markerStatus"><i>Click and drag the marker.</i></div>

    <b>Current position:</b>

    <div id="info"></div>

    <b>Closest matching address:</b>

    <div id="address"></div>

  </div>	



<?php	

}

	

	

	

	if ($met[verigiristuru]=='DonusHesap')

{

	

	$sqlyes="select * from arackiralama where index_arackiralama='".$_GET[kayitid]."'";

	$sorgulaman=mysqli_query($connection,$sqlyes);

	

	while ($okuyan=mysqli_fetch_assoc($sorgulaman))

	{

		$plakasi=$okuyan[aracplakano];

		$tarih=$okuyan[kirayaverilis];

		$saat=$okuyan[verildigisaat];

		$verildigikm=$okuyan[arackm];

		

		

		

		
		$sqlyes="select * from araclar where plakano='".$plakasi."'";

		$sorgum=mysqli_query($connection,$sqlyes);

		

		while ($oks=mysqli_fetch_assoc($sorgum))

		{

			$kirabedeli=$oks[kirabedeli];

			$arackmsi=$oks[arackm];

			

			$sqlsis="select * from hatlar where plakano='".$plakasi."'";

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
		
		
		
		
	
			

			$varsayilan=round($arackmsi+$gezilen+$gunluks);

			

			

		}

			

			

		}

		

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

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi.":" ?><input type="text" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">

</div>																



<?php

}





if ($met[verigiristuru]=='DonusYapilan')

{

$varsayilan=round($arackmsi+$gezilen+$gunluks)-$verildigikm;

			
																

																if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>																

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi.":" ?><input type="text" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">

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



if ($met[verigiristuru]=='Boolean')

{
    
    $ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

if ($varsayilan=='on')
{
    $checked="checked";
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

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;margin-top:20px;">
	  

                                                    <label class="toggle" data-on="ON" data-off="OFF">

                                                        <input type="checkbox" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" <?php echo $checked; ?> <?php echo $ekkod; ?>>

                                                        <span class="button-checkbox"></span>

                                                    </label>

                                                    <label for="checkbox-toggle"><?php echo $etiketi; ?></label>


</div>
													

<?php                                               

}

if ($met[verigiristuru]=='Edit')

{
?>



<?php	
if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
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

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">
    <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?><input type="text" autocomplete="off" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"   class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

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
	

																

																if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>																

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?><input type="time" step="2" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

</div>																



<?php

}



if ($met[verigiristuru]=='Disabled')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

													if ($_GET[islem]!=""&&$met[alanadi]=='kiradurumu')

																{

																$varsayilan=iconv( "UTF-8","ISO-8859-9","Teslim Alındı");

																}		

															

?>																

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi.":" ?><input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> readonly>

</div>																



<?php

}





if ($met[verigiristuru]=='Form')

{

	

	 echo "<a href=\"mailorder.pdf\" target=\"_blank\">

                                <img src=\"pdficon.png\" alt=\"\" class=\"image\" />

                                <span class=\"txt\">Mail Order Formu İndir</span>

                                

                            </a>";

	

	

}



if ($met[verigiristuru]=='Password')

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
																<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">

<?php
	echo $etiketi."<input  id=".$met[alanadi]." name=".$met[alanadi]." type=\"password\" value=\"".$varsayilan."\">";
?>
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

																if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]); 

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi.":" ?><textarea id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" style="width: 100%; height:100px;" <?php echo $ekkod; ?>><?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan);?></textarea>

</div>																









<?php

}



if ($met[verigiristuru]=='Date')

{


$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
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

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?><input type="date" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

</div>																









<?php

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
   <div class="slidecontainer col-md-2" <?php echo $boyut; ?>>
  <?php echo $etiketi.":" ?><input type="range" min="-360" max="700" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" class="slider" id="myRange" oninput="range_weight_disp_<?php echo $met[alanadi]; ?>.value = <?php echo $met[alanadi]; ?>.value"><output id="range_weight_disp_<?php echo $met[alanadi]; ?>"><?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?></output>
<button type="button" class="btn btn-default" title="Önizle" id="onizle_<?php echo $met[alanadi]; ?>"><font size="1">Önizleme</font></button></div> 
    <?php
}



if ($met[verigiristuru]=='File(JPG)'||$met[verigiristuru]=='File(PNG)'||$met[verigiristuru]=='File(GIF)'||$met[verigiristuru]=='File(MP4)')

{

$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
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

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">



<?php echo $etiketi.":" ?><div class="fileinput fileinput-new" data-provides="fileinput">

													<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px; line-height: 150px;"><a href="<?php echo $varsayilan; ?>" data-toggle="lightbox" data-gallery="gallerymode" data-title="Yachts" data-parrent=""><img class="img-responsive" src="<?php echo $varsayilan; ?>" id="resim_<?php echo $met[alanadi]; ?>"></a></div>

													<div>

														<span class="btn default btn-file">

														<span class="fileinput-new">

														Resim Seç </span>

														<span class="fileinput-exists">

														Değiştir </span>

													<input id="sss<?php echo $met[alanadi]; ?>" name="sss<?php echo $met[alanadi]; ?>" value="" type="hidden"><input type="file" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" onchange="document.getElementById('resim_<?php echo $met[alanadi]; ?>').src = window.URL.createObjectURL(this.files[0])" <?php echo $ekkod; ?>>

															</span>

														<a style="" href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput">

														Sil</a>

													</div>

												</div>	
</div>







<?php

}













if ($met[verigiristuru]=='Multiselect')

{
    
    $ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

		$id="";

	if ($met[alanadi]=="model")

{

	$id="id=\"modelicerik\"";

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



<div <?php  echo $boyut;?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

															<div <?php echo $id; ?> >

															 

																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>[]" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" multiple="multiple" <?php echo $ekkod; ?>>

																	

																	

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





if ($met[verigiristuru]=='Secimli')

{
    
    $ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?>



<div class="input-group mb-15"> 
														<input type="text" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" class="form-control" placeholder="Seçiniz" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>"><span class="input-group-btn"  <?php echo $ekkod; ?>>
														<button type="button" class="btn  btn-warning secimyap" title="<?php echo $met[bagliform_index]; ?>|<?php echo $met[keyfield]; ?>|<?php echo $met[alanadi]; ?>"><i class="fa fa-search"></i></button>
														</span>
													</div>

</div>																









<?php

}




if ($met[verigiristuru]=='Combobox')

{


$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}

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



<div <?php  echo $boyut;?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

															<div <?php echo $id; ?>  class="row" >

															 

																<span><?php echo $etiketi.":" ?></span><div class="col-md-10" style="padding-right:0px;padding-left:0px;"><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" style="width:100%;" <?php echo $ekkod; ?>>

																	

																	

																<?php	

																

																

																

																

																

																while ($okubeni=mysqli_fetch_assoc($sorc))

																{

																	

																

																	$sorgu=$okubeni[sorgusu];

																	$tablom=$okubeni[tablosu];

																	

																}
																
																
																
																	if ($met[eksorgu]!='')

																{
																    $sorgu=$sorgu." and ".$met[eksorgu];
																    
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

																	

																	

																	

																

																	

																	

																	

																</select></div><div class="col-md-2"><button type="button" class="btn btn-warning btn-icon-anim btn-square verisec" style="margin-left:-14px;" title="<?php echo $met[bagliform_index]; ?>|<?php echo $alanadi; ?>|<?php echo $met[alanadi]; ?>"><i class="icon-rocket"></i></button></div>

															</div>

														</div>



<?php

}


if ($met[verigiristuru]=='Tags')

{
    	$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

    ?>
    <div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
 
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
    <script src="dist/js/dropdown-bootstrap-extended.js"></script>
	
    
  
<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">

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


if ($met[verigiristuru]=='Autocomplete')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi; ?><input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

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




if ($met[verigiristuru]=='FixList')

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



																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>"  data-placeholder="<?php echo $etiketi; ?>" tabindex="1" <?php echo $ekkod; ?>>

																

																

																<?php	

																

																	echo "<option value=\"\">".$etiketi."</option>";

												

for ($im=0;$im<count($dilimler);$im++)

	{

		$etiket=$dilimler[$im];

		

			

																if ($_GET[islem]!=""&&$met[alanadi]=='kiradurumu')

																{

																$varsayilan=iconv( "UTF-8","ISO-8859-9","Teslim Alındı");

																}

		

		

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

												

?>												

                                                </div>

                                                <!-- End .row -->

	<?php											
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

                                        </div>

                                        <!-- End .form-group  -->

										

<?php

}











}

}

?>										

										

										

										

                                    

                                        <!-- End .form-group  -->

                                        <div class="form-group">

                                            <div class="col-lg-12">

                                                <div class="row">

                                                    <!-- Start .row -->

                                                   

                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right" id="gonders">

<?php
if ($formid=="126"&&$siparisdurumu=='Onay Bekliyor')
{
    ?>
    

                                                        <button type="button" id="onaylabuton" name="onaylabuton" class="btn btn-success" title="Sipariş Onayla">Onayla</button>

<?php    
}
?>

<?php
if ($formid=="126"&&$siparisdurumu=='Onaylandı'&&$odemesekli=='Kapıda Ödeme')
{
    ?>
    

                                                        <a href="../wolfdizayn/yurtici-kargo-api/orderShipment.php?no=<?php echo $siparisno; ?>&tutar=<?php echo $geneltoplam; ?>" target="_blank"><button type="button" id="kargolabuton" name="kargolabuton" class="btn btn-warning" title="Kargola">Kargola</button></a>

<?php    
}





if ($formid=="126"&&$siparisdurumu=='Onaylandı'&&$odemesekli!='Kapıda Ödeme')
{
    ?>
    

                                                        <a href="../wolfdizayn/yurtici-kargo-api/orderShipment.php?no=<?php echo $siparisno; ?>" target="_blank"><button type="button" id="kargolabuton" name="kargolabuton" class="btn btn-warning" title="Kargola">Kargola</button></a>

<?php    
}
?>








                                                        <button type="submit" id="gonderbuton" name="gonderbuton" class="btn btn-default">Kaydet</button>
                                                        
                                                        
                                                        <?php if($_GET[menu_id]=='491') {   ?>
                                                                <button type="button" id="vdfolustur" name="vdfolustur" class="btn btn-warning" title="<?php echo $_GET[recordid] ?>">Veri Dağıtım Formları</button>
                                                      
                                                        <?php } ?>
                                                        
                                                        <?php  
                                                        if ($_GET[menu_id]=='198')
                                                        {
                                                            ?>
                                                            
                                                            
                                                            <button type="button" id="tabloolustur" name="tabloolustur" class="btn btn-danger" title="<?php echo $_GET[recordid] ?>">Tablo Oluştur</button>
                                                             <button type="button" id="eksikalanolustur" name="eksikalanolustur" class="btn btn-danger" title="<?php echo $_GET[recordid] ?>">Eksik Alanları Oluştur</button>
                                                            
                                                            <?php
                                                            
                                                        }
                                                        
                                                        ?>
                                                        
                                                         <?php
                                                          if($_GET[menu_id]=='459')
                                                        { ?>
                                                            
                                                            <button type="button" id="teklifformuyazdir" name="teklifformuyazdir" class="btn btn-danger">Teklif Formu Yazdır</button>
                                                             <button type="button" id="siparisedonustur2" name="siparisedonustur2" class="btn btn-success" title="<?php echo $_GET[recordid] ?>" >Siparişe Dönüştür</button>
                                                            
                                                       <?php }
                                                        
                                                        if($_GET[menu_id]=='282'){ ?>
                                                           <button type="button" id="siparisedonustur" name="siparisedonustur" class="btn btn-success" title="<?php echo $_GET[recordid] ?>" >Siparişe Dönüştür</button>

                                                       <?php }
                                                       
                                                        
                                                          if($_GET[menu_id]=='231'){ ?>
                                                           <button type="button" id="vdfformuyazdir" name="vdfformuyazdir" class="btn btn-success" title="<?php echo $_GET[recordid] ?>" >Veri Dağıtım Formu Yazdır</button>

                                                       <?php }
                                                      
                                                          
                                                          if($_GET[menu_id]=='489'){ ?>
                                                           <button type="button" id="analizformuyazdir" name="analizformuyazdir" class="btn btn-success" title="<?php echo $_GET[recordid] ?>" >Analiz Formu Yazdır</button>

                                                       <?php }
                                                        ?>
                                                        

                                                                       <?php 
                                                            if($_GET[menu_id]=='472'){ ?>
                                                                 <button type="button" id="dofformuyazdir" name="dofformuyazdir" class="btn btn-danger">DÖF Formu Yazdır</button>
                                                          <?php  }
                                                        ?>


                                                    </div>

                                                </div>

                                                <!-- End .row -->

                                            </div>

                                        </div>

                                        <!-- End .form-group  -->
                

                                    </form>
                                    
                                    
                                    	
								
								
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<?php
                                       	
		}
		?>