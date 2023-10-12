<?php

ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


include 'baglanti.php';






$sql="select * from kullanicilar where user_indeks=".$_GET[kullanici];
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
														    {
														        
														   $isim=iconv( "ISO-8859-9","UTF-8",$okut[adi]);     
														     
														    }


echo $isim."|";
$tarih=date("Y-m-d");
$saat=date("H:i:s");


if ($_GET[mesaj]!='')
{
    
    
    mysqli_query($connection,"insert into mesajlarim values(null,'".iconv( "UTF-8","ISO-8859-9",$_GET[mesaj])."','".$_SESSION['user_id']."','".$_GET[kullanici]."','".$saat."','".$tarih."','','','')");

    
    
}

?>


							
														<ul class="nicescroll-bar pt-20" style="height: 100%; overflow: auto" id="mesajlistesi">
														    
														    <?php
														    
														    $sql="select * from mesajlarim where (gonderen='".$_SESSION[user_id]."' or alici='".$_SESSION[user_id]."') and (gonderen='".$_GET[kullanici]."' or alici='".$_GET[kullanici]."')";
														    $sorgula=mysqli_query($connection,$sql);
														    while($okut=mysqli_fetch_assoc($sorgula))
														    {
														        
														        if ($okut[gonderen]==$_GET[kullanici])
														        {
														        ?>
															<li class="friend">
																<div class="friend-msg-wrap">
																	<img class="user-img img-circle block pull-left"  src="./imgsa/user.png" alt="user"/>
																	<div class="msg pull-left">
																		<p><?php echo iconv( "ISO-8859-9","UTF-8",$okut[mesaj]); ?></p>
																		<div class="msg-per-detail text-right">
																			<span class="msg-time txt-grey"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[olusturma_saati]); ?></span>
																		</div>
																	</div>
																	<div class="clearfix"></div>
																</div>	
															</li>
															<?php
														        }
														          if ($okut[gonderen]==$_SESSION[user_id])
														        {
														            ?>
															<li class="self mb-10">
																<div class="self-msg-wrap">
																	<div class="msg block pull-right"> <?php echo iconv( "ISO-8859-9","UTF-8",$okut[mesaj]); ?>
																		<div class="msg-per-detail text-right">
																			<span class="msg-time txt-grey"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[olusturma_saati]); ?></span>
																		</div>
																	</div>
																	<div class="clearfix"></div>
																</div>	
															</li>
															<?php
														        }
														    }
														    ?>
															
															
														
															
														</ul>
												