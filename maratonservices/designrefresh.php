<?php

include 'baglanti.php';



$sorgulan="select * from formlar where `form_index`=$_GET[tasarimid]";


$sorbanami=mysqli_query($connection,$sorgulan);


while ($okuspokus=mysqli_fetch_assoc($sorbanami))

{


$formtablosu=$okuspokus["tablosu"];	

$formbasligi=iconv( "ISO-8859-9","UTF-8",$okuspokus[formtanimi]);	
}



?>

		    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-10"><h6 class="panel-title txt-dark">Bloklar---><?php echo $formbasligi; ?></h6></div><div class="col-md-2">
										
										<a class="pull-left inline-block yenisatir" title="200" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim btn-square"><i class="icon-plus"></i></button>
										</a>
										
										</div></div>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0 example">
											<thead>
												<tr>
												
													<th>Türü</th>
													<th>Sütun</th>
														<th>GrupB</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
												<?php
												$i=1;
											$sql="select * from bloklar where formindex=".$_GET[tasarimid]." order by sirasi";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    
											    $button="<button class=\"btn btn-default btn-icon-anim btn-square\"><i class=\"icon-arrow-right\"></i></button>";
											    if ($i==1&&$_GET[blokid]=='')
											    {
											        $idsecili=$okut[bokindex];
											        
											        $button="<button class=\"btn btn-warning btn-icon-anim btn-square\"><i class=\"icon-rocket\"></i></button>";
											    }
											    
											     if ($_GET[blokid]==$okut[bokindex])
											    {
											        $idsecili=$okut[bokindex];
											        
											        $button="<button class=\"btn btn-warning btn-icon-anim btn-square\"><i class=\"icon-rocket\"></i></button>";
											    }
											    $i++;
											    
											    
											    
											?>
												<tr>
												
											
												<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[turu]."<br><font size='1' color='red'>".$okut[tabbar]."</font>"); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[kolonsayisi]); ?></td>
													 	<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[grup_b]); ?></td>
													<td><a href="index.php?page_id=design&tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $okut[bokindex]; ?>"><?php echo $button; ?></a>
													
													  <a href="#" class="satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","200|".$okut[bokindex]); ?>" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a href="#" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[bokindex]); ?>" class="bloksil" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>
  
 
											
											</tr>
											<?php
											}
											?>
											
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
		    
		    
		    
		    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-6"><h6 class="panel-title txt-dark">Tüm Alanlar </h6></div><div class="col-md-6">
										
										<a class="pull-left inline-block yenisatir" title="199" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim btn-square"><i class="icon-plus"></i></button>
										</a>
										
										<a href="#hepsiniaktar" class="hepsiniaktar" title=""><button class="btn btn-primary btn-icon-anim btn-square" style="margin-left:5px;"><i class="icon-arrow-right"></i></button></a>
										
										</div></div>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0" id="example1">
											<thead>
												<tr>
													<th>#</th>
													<th>Alan Adı</th>
													<th>Veri Alanı</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
											<?php
											$sql="select * from formalanlari where form_index=".$_GET[tasarimid]." order by alan_index desc";
											$sorgula=mysqli_query($connection,$sql);
											$j=0;
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    $j++;
											?>
												<tr class="active">
													<td><?php echo $j; ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[alanyazisi]); ?></td>
													<td><?php echo $okut[alanadi]; ?></td>
													<td>
													    
													    		  <a href="#" class="satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","199|".$okut[alan_index]); ?>" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a href="#" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[alan_index]); ?>" class="formalansil" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>
  
 
													    <a href="#aktarimyap" class="aktarimyap" title="<?php echo $okut[alan_index]; ?>"><button class="btn btn-primary btn-icon-anim btn-square " title="<?php echo $okut[alan_index]; ?>"><i class="icon-arrow-right"></i></button></a>	<a href="#" title="form_199_recordid_<?php echo $okut[alan_index]; ?>" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a>
											</td>
												</tr>
											<?php
											}
											?>
											
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						
						
						
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<h6 class="panel-title txt-dark">Bloktaki Alanlar</h6>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0 example">
											<thead>
												<tr>
													<th>#</th>
													<th>Alan Adı</th>
													<th>Veri Alanı</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
											<?php
											$sql="select *,bloklar_alti.sirasi as sirasiz from bloklar_alti left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where blokindex=".$idsecili." order by sirasi";
										
									
										
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											?>
												<tr class="active">
													<td><?php echo $okut[sirasiz]; ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[alanyazisi]); ?></td>
													<td><?php echo $okut[alanadi]; ?></td>
													<td><a href="#alansil" class="alansil" title="<?php echo $okut[altindex]; ?>"><button class="btn btn-danger btn-icon-anim btn-square" title="<?php echo $okut[altindex]; ?>"><i class="icon-trash"></i></button></a>
													
													  <a href="#" class="satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","266_".$okut[altindex]); ?>" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                             
													</td>
												</tr>
											<?php
											}
											?>
											
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

<script>


$(document).ready(function() {
      $('#example1').dataTable( {
	        "pageLength": 100,
	        "scrollX": true,
	        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
	      } );
	      
    
});
</script>