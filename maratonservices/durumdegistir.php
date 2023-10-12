<?php
ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';






if ($_SESSION["user_id"]!='')
							{
							 $sql="update kullanicilar set musaitlik='".$_GET[yenidurum]."' where user_indeks=".$_SESSION["user_id"];
							 $sorbana=mysqli_query($connection,$sql);
							
							
							$musaitlik=$_GET[yenidurum];
							 if ($musaitlik==''||$musaitlik=='0')
							 {
							     $clas="check text-success";
							     $metin="müsait";
							 }
							 
							  if ($musaitlik=='1')
							 {
							     $clas="circle-o text-warning";
							     $metin="meşgul";
							 }
							 
							 
							  if ($musaitlik=='2')
							 {
							     $clas="minus-circle-outline text-danger";
							     $metin="çevrimdışı";
							 }
							 
							 
							 
							 
							}
							?>
							
							<i class="zmdi zmdi-<?php echo $clas; ?>"></i> <?php echo $metin; ?>




