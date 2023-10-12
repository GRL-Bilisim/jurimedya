<?php



ob_start();



if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();

  $_SESSION["urunsayisi"]="1";

}
include 'baglanti.php';

if ($_GET[menu_id]!='')
{
    include 'baglanti.php';
    
    
    
       $sorgumuz="select * from formlar where form_index=".$_GET[ustformid];
	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		    $formtablosu=$usttablo[tablosu];
		    
		}
    
    $sorgumuz="select * from formlar where form_index=".$_GET[menu_id];
	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		    $formid=$usttablo[form_index];
		    
		    
		  
		  
    
    
?>
 <table class="table table-hover  example" style="width:100%;">

                                        <thead style="width:100% !important;">

                                            <tr>
                                                
                                                
                                                <?php
	
	$ozelformid=$_GET[menu_id];
	$masterfield1=$_GET[masterfield];
	$detailfield1=$_GET[detailfield];
	$sqly="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$formid and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi asc";
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


$sordurtma="select ".$_GET['masterfield']." from $formtablosu where $anahtars=$_GET[recordid]";


$sorbanas=mysqli_query($connection,$sordurtma);



while ($okukardesim=mysqli_fetch_row($sorbanas))

{
$ortak=$_GET['masterfield'];
$alan=$okukardesim[0];   
}
	
		
		if ($alan!='')
		{
		$sqls=$sqls." and ".$_GET[detailfield]."='".$alan."'";
		}
		
		
			
		if ($alan=='')
		{
		$sqls=$sqls." and ".$_GET[detailfield]."='-".$_SESSION["user_id"]."'";
		}
		
	
		
		
		
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
					<a class="pull-left inline-block satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$_GET[masterfield]."|".$_GET[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a class="pull-left inline-block satirsil" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$_GET[masterfield]."|".$_GET[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
                                                
                                                <?php
                                                
                                                if ($usttablo[form_index]=='555')
                                                {
                                                    ?>
                                                 
                                                  <a class="pull-left inline-block rafbarkodu" href="barkodyazdir.php?tipi=rafbarkodu&rafid=<?php echo $icerigi[$anahtar2]; ?>" target="_blank" title="<?php echo iconv( "ISO-8859-9","UTF-8","raf_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-warning btn-icon-anim btn-square"><i class="fa fa-qrcode"></i></button></a>
                                                   
                                                    <?php
                                                }
                                                
                                                if ($formid=='278')
{
    
    if ($icerigi[kod_rezervasyon]=='')
    {
       ?> 
        
        
          <a class="pull-left inline-block rezervyap" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$_GET[masterfield]."|".$_GET[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-success btn-icon-anim btn-square tip"><i class="icon-action-redo"></i></button></a>
                                                
        
        <?php
    }
    
     if ($icerigi[kod_rezervasyon]!='')
    {
        ?>
          <a class="pull-left inline-block rezervgerial" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$_GET[masterfield]."|".$_GET[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-warning btn-icon-anim btn-square tip"><i class="icon-action-undo"></i></button></a>
             
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


<?php    

		    
		}
}

if ($_GET[listeleme]=='E')
{

?>

<script>

$(document).ready( function () {
    $('.example').DataTable();
} );


</script>

<?php
}

if ($_GET[listeleme]=='')
{

?>

<script>

$(document).ready( function () {
    $('#example1s').DataTable();
} );


</script>

<?php
}
?>