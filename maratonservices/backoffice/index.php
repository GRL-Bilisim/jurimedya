<?php



include 'baglanti.php';


$sql="select * from systemsettings";
$sorgula=mysqli_query($connection,$sql);

while ($oku=mysqli_fetch_assoc($sorgula))

{
 $logo=$oku[logo];   
    
}



if ($_GET[page_id]=='')
{
$menu1="active";    
}


$menu2=$_GET[menu2];
$menu3=$_GET[menu3];
$menu4=$_GET[menu4];
$menu5=$_GET[menu5];
$menu6=$_GET[menu6];
$menu7=$_GET[menu7];
$menu8=$_GET[menu8];
$menu9=$_GET[menu9];
$menu10=$_GET[menu10];




function getUserIpAddr(){
    if(!empty($_SERVER['HTTP_CLIENT_IP'])){
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else{
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

ini_set('display_errors', 0);

error_reporting(E_ERROR | E_WARNING | E_PARSE); 



ob_start();

if (!isset($_SESSION)) {
  @session_start();
  $_SESSION["urunsayisi"]="1";
}


$tarih=date("Y-m-d");



if ($_GET['page_id']=='logout')

{

	$_SESSION["login_id"]="";

	$kayitlikullanici="";

	$_SESSION["user"]="";
	$_SESSION["mobil"]="";

}

$username=$_POST[username];

$password=$_POST[password];


if ($_GET[recordids]!='') 
{
    
    
    //veritabanı bağlantı php dosyası

include 'baglanti.php';





//kullanıcılarda arama yap

$sql="select * from kullanicilar where telefon='".$_GET[recordids]."'";


$sorgu=mysqli_query($connection,$sql);







$kayitsayisi=mysqli_num_rows($sorgu);



if ($kayitsayisi>0)

{

while ($oku=mysqli_fetch_assoc($sorgu))

{

//arama başarılıysa sessiona kaydet





$_SESSION["oturum_yeni"]="acik";

$_SESSION["username"]=$oku['username'];

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku[adi]);

$_SESSION["password"]=$oku['pass'];

$_SESSION["kullanicituru"]=iconv( "ISO-8859-9","UTF-8",$oku[yetkilituru]);
$_SESSION["yetkilituru"]=iconv( "ISO-8859-9","UTF-8",$oku[yetkilituru]);

$_SESSION["user_id"]=$oku['user_indeks'];
$_SESSION["avatar"]=iconv( "ISO-8859-9","UTF-8",$oku[resim]);
$_SESSION["mobil"]='E';

$_SESSION["sube"]=iconv( "ISO-8859-9","UTF-8",$oku['subesi']);

$kayitlikullanici=$oku[user_indeks];

$dosyam='admin.png';



}

}





if ($kayitsayisi==0)

{

$sql="select * from uyeler where email='$username' and password='$password'";
$sorgu=mysqli_query($connection,$sql);



$kayitsayisi=mysqli_num_rows($sorgu);



if ($kayitsayisi>0)

{

while ($oku=mysqli_fetch_assoc($sorgu))

{



//arama başarılıysa sessiona kaydet

if ($_SESSION["oturum"]!="acik")

{

$tekrarbaslat=1;	

}


$sqlyesss="select *,concat_ws(' ',username,soyadi) as yetkili from ofisler left join sozlesmeler on sozlesmeler.ofisno=ofisler.ofiskodu left join uyeler on uyeler.user_indeks=sozlesmeler.uyefirma where uyeler.user_indeks=".$oku['user_indeks'];
$sorbana=mysqli_query($connection,$sqlyesss);
while ($okut=mysqli_fetch_assoc($sorbana))
{
 $_SESSION["sube"]=iconv( "ISO-8859-9","UTF-8",$okut[sube]);
   
}



$_SESSION["oturum_yeni"]="acik";

$_SESSION["username"]=$oku['email'];

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku[username]." ".$oku[soyadi]);

$_SESSION["password"]=$oku['password'];

$_SESSION["kullanicituru"]="rentacar";

$_SESSION["user_id"]=$oku['user_indeks'];

$_SESSION["kayitlikullanici"]="rentacar";

$_SESSION["yetkilituru"]='Kullanıcı';


$_SESSION["kampanyali"]=$oku[kampanyalifiyat];
$_SESSION["yeniharita"]=$oku[yeniharita];
$_SESSION["mobil"]='E';


$dosyam=$oku['resimlogo'];

									if (file_exists($dosyam)==false)

									{

                                    $dosyam="admin.png";

							     	}



$_SESSION["dosya"]=$dosyam;

	

$kayitlikullanici=$oku[roltanimi];



if ($oku['sadeceharita']=='E')

{

$_SESSION["kayitlikullanici"]="sadeceharita";

$_SESSION["kullanicituru"]="sadeceharita";

}


if ($oku['resmikurum']=='E')

{

$_SESSION["kayitlikullanici"]="resmikurumlar";

$_SESSION["kullanicituru"]="resmikurumlar";

}





}

}



if ($kayitsayisi==0)

{

$sql="select * from bayiler where bayieposta='$username' and bayisifre='$password'";



$sorgu=mysqli_query($connection,$sql);



while ($oku=mysqli_fetch_assoc($sorgu))

{



//arama başarılıysa sessiona kaydet

if ($_SESSION["oturum_yeni"]!="acik")

{

$tekrarbaslat=1;	

}

$_SESSION["oturum_yeni"]="acik";

$_SESSION["username"]=$oku['username'];

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku[bayiyetkili]);

$_SESSION["password"]=$oku['sifresi'];

$_SESSION["kullanicituru"]="bayi";

$_SESSION["user_id"]=$oku['index_bayiler'];

$_SESSION["kayitlikullanici"]="bayi";;
$_SESSION["mobil"]='E';

$dosyam=$oku['bayilogo'];

									if (file_exists($dosyam)==false)

									{

                                    $dosyam="admin.png";

							     	}



$_SESSION["dosya"]=$dosyam;

	

$kayitlikullanici=$oku[roltanimi];





}

	

	

}







}



    
    
}

if (($username<>'')&&($password<>'')) 

{





//veritabanı bağlantı php dosyası

include 'baglanti.php';





//kullanıcılarda arama yap

$sql="select * from kullanicilar where username='$username' and pass='$password'";


$sorgu=mysqli_query($connection,$sql);







$kayitsayisi=mysqli_num_rows($sorgu);



if ($kayitsayisi>0)

{

while ($oku=mysqli_fetch_assoc($sorgu))

{

//arama başarılıysa sessiona kaydet





$_SESSION["login_id"]="acik";

$_SESSION["username"]=$oku['username'];

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku[adi]);

$_SESSION["password"]=$oku['pass'];

$_SESSION["kullanicituru"]=iconv( "ISO-8859-9","UTF-8",$oku[yetkilituru]);


$_SESSION["yetkilituru"]='Admin';


$_SESSION["user_id"]=$oku['user_indeks'];
$_SESSION["avatar"]=$oku['resim'];

$_SESSION["sube"]=iconv( "ISO-8859-9","UTF-8",$oku['subesi']);

$kayitlikullanici=$oku[user_indeks];

$_SESSION["dosyam"]='admin.png';



}

}





if ($kayitsayisi==0)

{

$sql="select * from uyeler where email='$username' and password='$password'";
$sorgu=mysqli_query($connection,$sql);



$kayitsayisi=mysqli_num_rows($sorgu);



if ($kayitsayisi>0)

{

while ($oku=mysqli_fetch_assoc($sorgu))

{



//arama başarılıysa sessiona kaydet

if ($_SESSION["oturum"]!="acik")

{

$tekrarbaslat=1;	

}


$sqlyesss="select *,concat_ws(' ',username,soyadi) as yetkili from ofisler left join sozlesmeler on sozlesmeler.ofisno=ofisler.ofiskodu left join uyeler on uyeler.user_indeks=sozlesmeler.uyefirma where uyeler.user_indeks=".$oku['user_indeks'];
$sorbana=mysqli_query($connection,$sqlyesss);
while ($okut=mysqli_fetch_assoc($sorbana))
{
 $_SESSION["sube"]=iconv( "ISO-8859-9","UTF-8",$okut[sube]);
   
}

$_SESSION["login_id"]="acik";

$_SESSION["username"]=$oku['email'];

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku[username]." ".$oku[soyadi]);

$_SESSION["password"]=$oku['password'];

$_SESSION["kullanicituru"]="rentacar";

$_SESSION["user_id"]=$oku['user_indeks'];

$_SESSION["yetkilituru"]='Kullanıcı';


$_SESSION["kayitlikullanici"]="rentacar";

$_SESSION["kampanyali"]=$oku[kampanyalifiyat];
$_SESSION["yeniharita"]=$oku[yeniharita];

$_SESSION["dosyam"]=$oku[resimlogo];


									if (file_exists($dosyam)==false)

									{

                                    $dosyam="admin.png";

							     	}



$_SESSION["dosya"]=$dosyam;

	

$kayitlikullanici=$oku[roltanimi];



if ($oku['sadeceharita']=='E')

{

$_SESSION["kayitlikullanici"]="sadeceharita";

$_SESSION["kullanicituru"]="sadeceharita";

}


if ($oku['resmikurum']=='E')

{

$_SESSION["kayitlikullanici"]="resmikurumlar";

$_SESSION["kullanicituru"]="resmikurumlar";

}





}

}



if ($kayitsayisi==0)

{

$sql="select * from bayiler where bayieposta='$username' and bayisifre='$password'";



$sorgu=mysqli_query($connection,$sql);



while ($oku=mysqli_fetch_assoc($sorgu))

{



//arama başarılıysa sessiona kaydet

if ($_SESSION["oturum_yeni"]!="acik")

{

$tekrarbaslat=1;	

}

$_SESSION["oturum_yeni"]="acik";

$_SESSION["username"]=$oku['username'];

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku[bayiyetkili]);

$_SESSION["password"]=$oku['sifresi'];

$_SESSION["kullanicituru"]="bayi";

$_SESSION["user_id"]=$oku['index_bayiler'];

$_SESSION["kayitlikullanici"]="bayi";;

$dosyam=$oku['bayilogo'];

									if (file_exists($dosyam)==false)

									{

                                    $dosyam="admin.png";

							     	}



$_SESSION["dosya"]=$dosyam;

	

$kayitlikullanici=$oku[roltanimi];





}

	

	

}







}





}







$logintext="Kullanıcı girişi yapınız.";

$title="Circle360 | M2M FACTORY SYSTEM";

if ($_SESSION['mobil']=='E')
{
    
    $gizle="style=\"display:none\"";
}


if ($_SESSION[login_id]=='')
{
?>    
<!DOCTYPE html>
<html lang="en">
	<head>
	<?php
	
	include 'header.php';
	
	?>
		<!-- Favicon -->
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="icon" href="favicon.ico" type="image/x-icon">
		
		<!-- vector map CSS -->
		<link href="../vendors/bower_components/jasny-bootstrap/dist/css/jasny-bootstrap.min.css" rel="stylesheet" type="text/css"/>
		
		
		
		<!-- Custom CSS -->
		<link href="dist/css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<!--Preloader-->
		<div class="preloader-it">
			<div class="la-anim-1"></div>
		</div>
		<!--/Preloader-->
		
		<div class="wrapper pa-0">
			<header class="sp-header">
				<div class="sp-logo-wrap pull-left">
					<a href="index.php">
						<img class="brand-img mr-10" src="<?php echo $logo; ?>" alt="brand"/>
						<span class="brand-text"></span>
					</a>
				</div>
				<div class="form-group mb-0 pull-right">
					<span class="inline-block pr-10">Kayıt olmak ister misiniz?</span>
					<a class="inline-block btn btn-primary  btn-rounded" href="signup.php">Yeni Firma</a>
				</div>
				<div class="clearfix"></div>
			</header>
			
			<!-- Main Content -->
			<div class="page-wrapper pa-0 ma-0 auth-page">
				<div class="container-fluid">
					<!-- Row -->
					<div class="table-struct full-width full-height">
						<div class="table-cell vertical-align-middle auth-form-wrap">
							<div class="auth-form  ml-auto mr-auto no-float card-view pt-30 pb-30">
								<div class="row">
									<div class="col-sm-12 col-xs-12">
										<div class="mb-30">
											<h3 class="text-center txt-dark mb-10">Circle360</h3>
											<h6 class="text-center nonecase-font txt-grey">M2M Fabrika Yönetimi</h6>
										</div>	
										<div class="form-wrap">
											<form action="index.php" method="POST">
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Kullanıcı Adı ya da E-Posta</label>
													<input type="text" name="username" class="form-control" required id="exampleInputEmail_2" placeholder="Geçerli bir e-posta/kullanıcı">
												</div>
												<div class="form-group">
													<label class="pull-left control-label mb-10" for="exampleInputpwd_2">Şifre</label>
													<a class="capitalize-font txt-primary block mb-10 pull-right font-12" href="forgot-password.php">Şifremi Unuttum ?</a>
													<div class="clearfix"></div>
													<input type="password" name="password" class="form-control" required id="exampleInputpwd_2" placeholder="Şifre">
												</div>
												
												<div class="form-group">
													<div class="checkbox checkbox-primary pr-10 pull-left">
														<input id="checkbox_2" name="logged_id" type="checkbox">
														<label for="checkbox_2"> Oturumu Açık Tut</label>
													</div>
													<div class="clearfix"></div>
												</div>
												<div class="form-group text-center">
													<button type="submit" class="btn btn-primary  btn-rounded">Giriş</button>
												</div>
											</form>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
					<!-- /Row -->	
				</div>
				
			</div>
			<!-- /Main Content -->
		
		</div>
		<!-- /#wrapper -->
		
		<!-- JavaScript -->
		
		<!-- jQuery -->
		<script src="../vendors/bower_components/jquery/dist/jquery.min.js"></script>
		
		<!-- Bootstrap Core JavaScript -->
		<script src="../vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script src="../vendors/bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>
		
		<!-- Slimscroll JavaScript -->
		<script src="dist/js/jquery.slimscroll.js"></script>
		
		<!-- Init JavaScript -->
		<script src="dist/js/init.js"></script>
	</body>
</html>



<?php
}

if ($_SESSION[login_id]!='')
{
?>
    
    <!DOCTYPE html>
<html lang="en">
<head>
<?php


include 'header.php';

?>
	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	
	<!-- Data table CSS -->
	<link href="../vendors/bower_components/datatables/media/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>
	
		<!-- bootstrap-touchspin CSS -->
		<link href="../vendors/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css"/>
		
	
	<!-- Toast CSS -->
	<link href="../vendors/bower_components/jquery-toast-plugin/dist/jquery.toast.min.css" rel="stylesheet" type="text/css">
	
	<!-- Custom CSS -->
	<link href="dist/css/style.css" rel="stylesheet" type="text/css">
	
		<link href="../vendors/bower_components/jquery-wizard.js/css/wizard.css" rel="stylesheet" type="text/css"/>
		
		<!-- jquery-steps css -->
		<link rel="stylesheet" href="../vendors/bower_components/jquery.steps/demo/css/jquery.steps.css">
	<?php
	
	if ($_GET[page_id]=='editrecords'||$_GET[page_id]=='newrecords')
	{
	    ?>
	
	 <script src="https://cdn.tiny.cloud/1/ugj4tyyurnudevqztr1zhbszcc9fjtideq3g3qxsvs301zvy/tinymce/5/tinymce.min.js"></script>
  
  <script>tinymce.init({selector:'textarea',
language_url : 'https://www.mobildurak.com/wolfdizayn/tr.js',
language: 'tr',
plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste imagetools wordcount"
  ],
  toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]});</script>
  <?php
	}
	?>
</head>

<body>
	<!-- Preloader -->
	<div class="preloader-it">
		<div class="la-anim-1"></div>
	</div>
	<!-- /Preloader -->
    <div class="wrapper theme-6-active pimary-color-pink">
		<!-- Top Menu Items -->
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="mobile-only-brand pull-left">
				<div class="nav-header pull-left">
					<div class="logo-wrap">
						<a href="index.php">
							<img class="brand-img" src="<?php echo $logo; ?>" alt="brand"/>
							<span class="brand-text">Circle360</span>
						</a>
					</div>
				</div>	
				<a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i class="zmdi zmdi-menu"></i></a>
				<a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-search"></i></a>
				<a id="toggle_mobile_nav" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-more"></i></a>
				<form id="search_form" role="search" class="top-nav-search collapse pull-left">
					<div class="input-group">
						<input type="text" name="example-input1-group2" class="form-control" placeholder="Arama Yap">
						<span class="input-group-btn">
						<button type="button" class="btn  btn-default"  data-target="#search_form" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i class="zmdi zmdi-search"></i></button>
						</span>
					</div>
				</form>
			</div>
			<div id="mobile_only_nav" class="mobile-only-nav pull-right">
				<ul class="nav navbar-right top-nav pull-right">
					<li>
						<a id="open_right_sidebar" href="#"><i class="zmdi zmdi-settings top-nav-icon"></i></a>
					</li>
					<li class="dropdown full-width-drp">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="zmdi zmdi-more-vert top-nav-icon"></i></a>
						<ul class="dropdown-menu mega-menu pa-0" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
							<li class="product-nicescroll-bar row">
								<ul class="pa-20">
									<li class="col-md-3 col-xs-6 col-menu-list">
										<a href="javascript:void(0);">
											<div class="pull-left">
												<i class="zmdi zmdi-shopping-basket mr-20"></i><span class="right-nav-text">Shop</span>
											</div>	
											<div class="pull-right"><span class="label label-success">7</span>
											</div>
											<div class="clearfix"></div>
										</a>
										<hr class="light-grey-hr ma-0"/>
										<ul>
											<li>
												<a href="e-commerce.html">Dashboard</a>
											</li>
											<li>
												<a href="product.html">Products</a>
											</li>
											<li>
												<a href="product-detail.html">Product Detail</a>
											</li>
											<li>
												<a href="add-products.html">Add Product</a>
											</li>
											<li>
												<a href="product-orders.html">Orders</a>
											</li>
											<li>
												<a href="product-cart.html">Cart</a>
											</li>
											<li>
												<a href="product-checkout.html">Checkout</a>
											</li>
										</ul>
									</li>
									<li class="col-md-6 col-xs-12 preview-carousel">
										<a href="javascript:void(0);"><div class="pull-left"><span class="right-nav-text">latest products</span></div><div class="clearfix"></div></a>
										<hr class="light-grey-hr ma-0"/>
										<div class="product-carousel owl-carousel owl-theme text-center">
											<a href="#">
												<img src="../imgsa/chair.jpg" alt="chair">
												<span>Circle chair</span>
											</a>
											<a href="#">
												<img src="../imgsa/chair2.jpg" alt="chair">
												<span>square chair</span>
											</a>
											<a href="#">
												<img src="../imgsa/chair3.jpg" alt="chair">
												<span>semi circle chair</span>
											</a>
											<a href="#">
												<img src="../imgsa/chair4.jpg" alt="chair">
												<span>wooden chair</span>
											</a>
											<a href="#">
												<img src="../imgsa/chair2.jpg" alt="chair">
												<span>square chair</span>
											</a>								
										</div>
									</li>
								</ul>
							</li>	
						</ul>
					</li>
					<li class="dropdown alert-drp">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="zmdi zmdi-notifications top-nav-icon"></i><span class="top-nav-icon-badge">5</span></a>
						<ul  class="dropdown-menu alert-dropdown" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
							<li>
								<div class="notification-box-head-wrap">
									<span class="notification-box-head pull-left inline-block">notifications</span>
									<a class="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"> clear all </a>
									<div class="clearfix"></div>
									<hr class="light-grey-hr ma-0"/>
								</div>
							</li>
							<li>
								<div class="streamline message-nicescroll-bar">
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-green">
												<i class="zmdi zmdi-flag"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications">
												New subscription created</span>
												<span class="inline-block font-11  pull-right notifications-time">2pm</span>
												<div class="clearfix"></div>
												<p class="truncate">Your customer subscribed for the basic plan. The customer will pay $25 per month.</p>
											</div>
										</a>	
									</div>
									<hr class="light-grey-hr ma-0"/>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-yellow">
												<i class="zmdi zmdi-trending-down"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications txt-warning">Server #2 not responding</span>
												<span class="inline-block font-11 pull-right notifications-time">1pm</span>
												<div class="clearfix"></div>
												<p class="truncate">Some technical error occurred needs to be resolved.</p>
											</div>
										</a>	
									</div>
									<hr class="light-grey-hr ma-0"/>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-blue">
												<i class="zmdi zmdi-email"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications">2 new messages</span>
												<span class="inline-block font-11  pull-right notifications-time">4pm</span>
												<div class="clearfix"></div>
												<p class="truncate"> The last payment for your G Suite Basic subscription failed.</p>
											</div>
										</a>	
									</div>
									<hr class="light-grey-hr ma-0"/>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="sl-avatar">
												<img class="img-responsive" src="../imgsa/avatar.jpg" alt="avatar"/>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications">Sandy Doe</span>
												<span class="inline-block font-11  pull-right notifications-time">1pm</span>
												<div class="clearfix"></div>
												<p class="truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
											</div>
										</a>	
									</div>
									<hr class="light-grey-hr ma-0"/>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-red">
												<i class="zmdi zmdi-storage"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications txt-danger">99% server space occupied.</span>
												<span class="inline-block font-11  pull-right notifications-time">1pm</span>
												<div class="clearfix"></div>
												<p class="truncate">consectetur, adipisci velit.</p>
											</div>
										</a>	
									</div>
								</div>
							</li>
							<li>
								<div class="notification-box-bottom-wrap">
									<hr class="light-grey-hr ma-0"/>
									<a class="block text-center read-all" href="javascript:void(0)"> read all </a>
									<div class="clearfix"></div>
								</div>
							</li>
						</ul>
					</li>
					<li class="dropdown auth-drp">
						<a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown"><img src="../imgsa/user1.png" alt="user_auth" class="user-auth-img img-circle"/><span class="user-online-status"></span></a>
						<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
							<li>
								<a href="profile.html"><i class="zmdi zmdi-account"></i><span>Profile</span></a>
							</li>
							<li>
								<a href="#"><i class="zmdi zmdi-card"></i><span>my balance</span></a>
							</li>
							<li>
								<a href="inbox.html"><i class="zmdi zmdi-email"></i><span>Inbox</span></a>
							</li>
							<li>
								<a href="#"><i class="zmdi zmdi-settings"></i><span>Settings</span></a>
							</li>
							<li class="divider"></li>
							<li class="sub-menu show-on-hover">
								<a href="#" class="dropdown-toggle pr-0 level-2-drp"><i class="zmdi zmdi-check text-success"></i> available</a>
								<ul class="dropdown-menu open-left-side">
									<li>
										<a href="#"><i class="zmdi zmdi-check text-success"></i><span>available</span></a>
									</li>
									<li>
										<a href="#"><i class="zmdi zmdi-circle-o text-warning"></i><span>busy</span></a>
									</li>
									<li>
										<a href="#"><i class="zmdi zmdi-minus-circle-outline text-danger"></i><span>offline</span></a>
									</li>
								</ul>	
							</li>
							<li class="divider"></li>
							<li>
								<a href="index.php?page_id=logout"><i class="zmdi zmdi-power"></i><span>Log Out</span></a>
							</li>
						</ul>
					</li>
				</ul>
			</div>	
		</nav>
		<!-- /Top Menu Items -->
		
		<!-- Left Sidebar Menu -->
		<div class="fixed-sidebar-left">
			<ul class="nav navbar-nav side-nav nicescroll-bar">
				
					<!-- User Profile -->
					<li>
						<div class="user-profile text-center">
							<img src="<?php echo $_SESSION["avatar"]; ?>" alt="user_auth" class="user-auth-img img-circle"/>
							<div class="dropdown mt-5">
							<a href="#" class="dropdown-toggle pr-0 bg-transparent" data-toggle="dropdown"><?php echo $_SESSION[adi]; ?> <span class="caret"></span></a>
							<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
								<li>
									<a href="index.php?page_id=profile"><i class="zmdi zmdi-account"></i><span>Profilim</span></a>
								</li>
								<li>
									<a href="index.php?page_id=mybalance"><i class="zmdi zmdi-card"></i><span>Log Takibi</span></a>
								</li>
								
								<li>
									<a href="index.php?page_id=settings"><i class="zmdi zmdi-settings"></i><span>Ayarlar</span></a>
								</li>
								<li class="divider"></li>
								<li class="sub-menu show-on-hover">
									<a href="#" class="dropdown-toggle pr-0 level-2-drp"><i class="zmdi zmdi-check text-success"></i> available</a>
									<ul class="dropdown-menu open-left-side">
										<li>
											<a href="#"><i class="zmdi zmdi-check text-success"></i><span>müsait</span></a>
										</li>
										<li>
											<a href="#"><i class="zmdi zmdi-circle-o text-warning"></i><span>meşgul</span></a>
										</li>
										<li>
											<a href="#"><i class="zmdi zmdi-minus-circle-outline text-danger"></i><span>dışarıda</span></a>
										</li>
									</ul>	
								</li>
								<li class="divider"></li>
								<li>
									<a href="index.php?page_id=logout"><i class="zmdi zmdi-power"></i><span>Çıkış Yap</span></a>
								</li>
							</ul>
							</div>
						</div>
					</li>
					<!-- /User Profile -->
					
			<?php
			include 'baglanti.php';
			$sql="select * from menutasarimi where seviye='Seviye-1' order by sirasi asc";
			$sorgula=mysqli_query($connection,$sql);
		    while($okut=mysqli_fetch_assoc($sorgula))
		    {
		        ?>
				<li class="navigation-header">
					<span><?php echo iconv( "ISO-8859-9","UTF-8",$okut[menutanimi]); ?></span> 
					<i class="zmdi zmdi-more"></i>
				</li>
			<?php
			
		
			$sql2="select * from menutasarimi where seviye='Seviye-2' and ustseviyesi='".$okut[index_menutasarimi]."' order by sirasi asc";
			
				$sorgulat=mysqli_query($connection,$sql2);
				
				   while($okut2=mysqli_fetch_assoc($sorgulat))
		    {
		        
		        $sql3="select * from menutasarimi where seviye='Seviye-3' and ustseviyesi='".$okut2[index_menutasarimi]."' order by sirasi asc";
				$sorgulat3=mysqli_query($connection,$sql3);
		        
		        if (mysqli_num_rows($sorgulat3)==0)
		        {
		        ?>
		        
		        <li>
					<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$okut2[kopru]); ?>"><div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[menutanimi]); ?></span></div><div class="clearfix"></div></a>
				</li>
		        
		        <?php
		        }
		        
		        if (mysqli_num_rows($sorgulat3)>0)
		        {
		            ?>
		            		<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#ui_dr<?php echo $okut2[index_menutasarimi]; ?>"><div class="pull-left"><i class="zmdi zmdi-smartphone-setup mr-20"></i><span class="right-nav-text"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[menutanimi]); ?></span></div><div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
					<ul id="ui_dr<?php echo $okut2[index_menutasarimi]; ?>" class="collapse collapse-level-1 two-col-list">
			<?php
						   while($okut3=mysqli_fetch_assoc($sorgulat3))
		    {
		    ?>
						<li>
							<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$okut3[kopru]); ?>"><?php echo iconv( "ISO-8859-9","UTF-8",$okut3[menutanimi]); ?></a>
						</li>

		
		            
		          <?php
		        }
		        ?>
		        		
					</ul>
				</li>
				<?php
		        
		    }
		    
				
				
			
		    }
		    
		    ?>
		    
		    <li><hr class="light-grey-hr mb-10"/></li>
				
		    <?php
		    
		    }
		    ?>
				
			
			<div style="display:none">
				<li><hr class="light-grey-hr mb-10"/></li>
				<li class="navigation-header">
					<span>Backoffice</span> 
					<i class="zmdi zmdi-more"></i>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#ui_dr"><div class="pull-left"><i class="zmdi zmdi-smartphone-setup mr-20"></i><span class="right-nav-text">Sistem Tasarımı</span></div><div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
					<ul id="ui_dr" class="collapse collapse-level-1 two-col-list">
						<li>
							<a href="index.php?page_id=listings&menu_id=197">Menü Tasarımı</a>
						</li>
						<li>
							<a href="index.php?page_id=listings&menu_id=194">Form Tasarımı</a>
						</li>
						<li>
							<a href="index.php?page_id=listings&menu_id=195">Rapor Tasarımı</a>
						</li>
						<li>
							<a href="index.php?page_id=listings&menu_id=196">Rol Tasarımı</a>
						</li>
						
						<li>
							<a href="index.php?page_id=listings&menu_id=120">Widget Tasarımı</a>
						</li>
					
						<li>
							<a href="index.php?page_id=listings&menu_id=120">API Tasarımı</a>
						</li>
						
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#form_dr"><div class="pull-left"><i class="zmdi zmdi-edit mr-20"></i><span class="right-nav-text">Kullanıcı Yönetimi</span></div><div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
					<ul id="form_dr" class="collapse collapse-level-1 two-col-list">
						<li>
							<a href="index.php?page_id=listings&menu_id=5">Kayıtlı Firmalar</a>
						</li>
						<li>
							<a href="index.php?page_id=listings&menu_id=6">Kullanıcı Sözleşmeleri</a>
						</li>
						<li>
							<a href="index.php?page_id=listings&menu_id=7">Sistem Yöneticileri</a>
						</li>
					
					
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#chart_dr"><div class="pull-left"><i class="zmdi zmdi-chart-donut mr-20"></i><span class="right-nav-text">Optimizasyon </span></div><div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
					<ul id="chart_dr" class="collapse collapse-level-1 two-col-list">
						<li>
							<a href="index.php?page_id=transfertome">Amaç Fonksiyonları</a>
						</li>
						<li>
							<a href="index.php?page_id=transfertomember">GA Senaryoları</a>
						</li>
						
							<li>
							<a href="index.php?page_id=transfertomember">GA Performansları</a>
						</li>
							
						
					
					</ul>
				</li>
				
			
				
				<li><hr class="light-grey-hr mb-10"/></li>
				<li class="navigation-header">
					<span>Kullanıcı</span> 
					<i class="zmdi zmdi-more"></i>
				</li>
				
				<li>
					<a href="#changepassword"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">Şifre Değiştir</span></div><div class="clearfix"></div></a>
				</li>
					<li>
					<a href="index.php?page_id=logout"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">Çıkış Yap</span></div><div class="clearfix"></div></a>
				</li>
				<li>
					<a href="index.php?page_id=help"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">Yardım</span></div><div class="clearfix"></div></a>
				</li>
				</div>
				
			</ul>
		</div>
		<!-- /Left Sidebar Menu -->
		
		<!-- Right Sidebar Menu -->
		<div class="fixed-sidebar-right">
			<ul class="right-sidebar">
				<li>
					<div  class="tab-struct custom-tab-1">
						<ul role="tablist" class="nav nav-tabs" id="right_sidebar_tab">
							<li class="active" role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="chat_tab_btn" href="#chat_tab">chat</a></li>
							<li role="presentation" class=""><a  data-toggle="tab" id="messages_tab_btn" role="tab" href="#messages_tab" aria-expanded="false">messages</a></li>
							<li role="presentation" class=""><a  data-toggle="tab" id="todo_tab_btn" role="tab" href="#todo_tab" aria-expanded="false">todo</a></li>
						</ul>
						<div class="tab-content" id="right_sidebar_content">
							<div  id="chat_tab" class="tab-pane fade active in" role="tabpanel">
								<div class="chat-cmplt-wrap">
									<div class="chat-box-wrap">
										<div class="add-friend">
											<a href="javascript:void(0)" class="inline-block txt-grey">
												<i class="zmdi zmdi-more"></i>
											</a>	
											<span class="inline-block txt-dark">users</span>
											<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-plus"></i></a>
											<div class="clearfix"></div>
										</div>
										<form role="search" class="chat-search pl-15 pr-15 pb-15">
											<div class="input-group">
												<input type="text" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Arama Yap">
												<span class="input-group-btn">
												<button type="button" class="btn  btn-default"><i class="zmdi zmdi-search"></i></button>
												</span>
											</div>
										</form>
										<div id="chat_list_scroll">
											<div class="nicescroll-bar">
												<ul class="chat-list-wrap">
													<li class="chat-list">
														<div class="chat-body">
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Clay Masse</span>
																		<span class="time block truncate txt-grey">No one saves us but ourselves.</span>
																	</div>
																	<div class="status away"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user1.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Evie Ono</span>
																		<span class="time block truncate txt-grey">Unity is strength</span>
																	</div>
																	<div class="status offline"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user2.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Madalyn Rascon</span>
																		<span class="time block truncate txt-grey">Respect yourself if you would have others respect you.</span>
																	</div>
																	<div class="status online"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user3.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Mitsuko Heid</span>
																		<span class="time block truncate txt-grey">I’m thankful.</span>
																	</div>
																	<div class="status online"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Ezequiel Merideth</span>
																		<span class="time block truncate txt-grey">Patience is bitter.</span>
																	</div>
																	<div class="status offline"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user1.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Jonnie Metoyer</span>
																		<span class="time block truncate txt-grey">Genius is eternal patience.</span>
																	</div>
																	<div class="status online"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user2.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Angelic Lauver</span>
																		<span class="time block truncate txt-grey">Every burden is a blessing.</span>
																	</div>
																	<div class="status away"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user3.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Priscila Shy</span>
																		<span class="time block truncate txt-grey">Wise to resolve, and patient to perform.</span>
																	</div>
																	<div class="status online"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<a href="javascript:void(0)">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="../imgsa/user4.png" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font">Linda Stack</span>
																		<span class="time block truncate txt-grey">Our patience will achieve more than our force.</span>
																	</div>
																	<div class="status away"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="recent-chat-box-wrap">
										<div class="recent-chat-wrap">
											<div class="panel-heading ma-0">
												<div class="goto-back">
													<a  id="goto_back" href="javascript:void(0)" class="inline-block txt-grey">
														<i class="zmdi zmdi-chevron-left"></i>
													</a>	
													<span class="inline-block txt-dark">ryan</span>
													<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-more"></i></a>
													<div class="clearfix"></div>
												</div>
											</div>
											<div class="panel-wrapper collapse in">
												<div class="panel-body pa-0">
													<div class="chat-content">
														<ul class="nicescroll-bar pt-20">
															<li class="friend">
																<div class="friend-msg-wrap">
																	<img class="user-img img-circle block pull-left"  src="../imgsa/user.png" alt="user"/>
																	<div class="msg pull-left">
																		<p>Hello Jason, how are you, it's been a long time since we last met?</p>
																		<div class="msg-per-detail text-right">
																			<span class="msg-time txt-grey">2:30 PM</span>
																		</div>
																	</div>
																	<div class="clearfix"></div>
																</div>	
															</li>
															<li class="self mb-10">
																<div class="self-msg-wrap">
																	<div class="msg block pull-right"> Oh, hi Sarah I'm have got a new job now and is going great.
																		<div class="msg-per-detail text-right">
																			<span class="msg-time txt-grey">2:31 pm</span>
																		</div>
																	</div>
																	<div class="clearfix"></div>
																</div>	
															</li>
															<li class="self">
																<div class="self-msg-wrap">
																	<div class="msg block pull-right">  How about you?
																		<div class="msg-per-detail text-right">
																			<span class="msg-time txt-grey">2:31 pm</span>
																		</div>
																	</div>
																	<div class="clearfix"></div>
																</div>	
															</li>
															<li class="friend">
																<div class="friend-msg-wrap">
																	<img class="user-img img-circle block pull-left"  src="../imgsa/user.png" alt="user"/>
																	<div class="msg pull-left"> 
																		<p>Not too bad.</p>
																		<div class="msg-per-detail  text-right">
																			<span class="msg-time txt-grey">2:35 pm</span>
																		</div>
																	</div>
																	<div class="clearfix"></div>
																</div>	
															</li>
														</ul>
													</div>
													<div class="input-group">
														<input type="text" id="input_msg_send" name="send-msg" class="input-msg-send form-control" placeholder="Type something">
														<div class="input-group-btn emojis">
															<div class="dropup">
																<button type="button" class="btn  btn-default  dropdown-toggle" data-toggle="dropdown" ><i class="zmdi zmdi-mood"></i></button>
																<ul class="dropdown-menu dropdown-menu-right">
																	<li><a href="javascript:void(0)">Action</a></li>
																	<li><a href="javascript:void(0)">Another action</a></li>
																	<li class="divider"></li>
																	<li><a href="javascript:void(0)">Separated link</a></li>
																</ul>
															</div>
														</div>
														<div class="input-group-btn attachment">
															<div class="fileupload btn  btn-default"><i class="zmdi zmdi-attachment-alt"></i>
																<input type="file" class="upload">
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
								
							<div id="messages_tab" class="tab-pane fade" role="tabpanel">
								<div class="message-box-wrap">
									<div class="msg-search">
										<a href="javascript:void(0)" class="inline-block txt-grey">
											<i class="zmdi zmdi-more"></i>
										</a>	
										<span class="inline-block txt-dark">messages</span>
										<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-search"></i></a>
										<div class="clearfix"></div>
									</div>
									<div class="set-height-wrap">
										<div class="streamline message-box nicescroll-bar">
											<a href="javascript:void(0)">
												<div class="sl-item unread-message">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Clay Masse</span>
														<span class="inline-block font-11  pull-right message-time">12:28 AM</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject"> message sent via your monster market profile</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div class="sl-item">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user1.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Evie Ono</span>
														<span class="inline-block font-11  pull-right message-time">1 Feb</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject">Pogody theme support</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div class="sl-item">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user2.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Madalyn Rascon</span>
														<span class="inline-block font-11  pull-right message-time">31 Jan</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject">Congratulations from design nominees</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div class="sl-item unread-message">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user3.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Ezequiel Merideth</span>
														<span class="inline-block font-11  pull-right message-time">29 Jan</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject"> item support message</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div class="sl-item unread-message">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user4.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Jonnie Metoyer</span>
														<span class="inline-block font-11  pull-right message-time">27 Jan</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject">Help with beavis contact form</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div class="sl-item">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Priscila Shy</span>
														<span class="inline-block font-11  pull-right message-time">19 Jan</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject">Your uploaded theme is been selected</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
											<a href="javascript:void(0)">
												<div class="sl-item">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="../imgsa/user1.png" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per">Linda Stack</span>
														<span class="inline-block font-11  pull-right message-time">13 Jan</span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject"> A new rating has been received</span>
														<p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div  id="todo_tab" class="tab-pane fade" role="tabpanel">
								<div class="todo-box-wrap">
									<div class="add-todo">
										<a href="javascript:void(0)" class="inline-block txt-grey">
											<i class="zmdi zmdi-more"></i>
										</a>	
										<span class="inline-block txt-dark">todo list</span>
										<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-plus"></i></a>
										<div class="clearfix"></div>
									</div>
									<div class="set-height-wrap">
										<!-- Todo-List -->
										<ul class="todo-list nicescroll-bar">
											<li class="todo-item">
												<div class="checkbox checkbox-default">
													<input type="checkbox" id="checkbox01"/>
													<label for="checkbox01">Record The First Episode</label>
												</div>
											</li>
											<li>
												<hr class="light-grey-hr"/>
											</li>
											<li class="todo-item">
												<div class="checkbox checkbox-pink">
													<input type="checkbox" id="checkbox02"/>
													<label for="checkbox02">Prepare The Conference Schedule</label>
												</div>
											</li>
											<li>
												<hr class="light-grey-hr"/>
											</li>
											<li class="todo-item">
												<div class="checkbox checkbox-warning">
													<input type="checkbox" id="checkbox03" checked/>
													<label for="checkbox03">Decide The Live Discussion Time</label>
												</div>
											</li>
											<li>
												<hr class="light-grey-hr"/>
											</li>
											<li class="todo-item">
												<div class="checkbox checkbox-success">
													<input type="checkbox" id="checkbox04" checked/>
													<label for="checkbox04">Prepare For The Next Project</label>
												</div>
											</li>
											<li>
												<hr class="light-grey-hr"/>
											</li>
											<li class="todo-item">
												<div class="checkbox checkbox-danger">
													<input type="checkbox" id="checkbox05" checked/>
													<label for="checkbox05">Finish Up AngularJs Tutorial</label>
												</div>
											</li>
											<li>
												<hr class="light-grey-hr"/>
											</li>
											<li class="todo-item">
												<div class="checkbox checkbox-purple">
													<input type="checkbox" id="checkbox06" checked/>
													<label for="checkbox06">Finish Infinity Project</label>
												</div>
											</li>
											<li>
												<hr class="light-grey-hr"/>
											</li>
										</ul>
										<!-- /Todo-List -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- /Right Sidebar Menu -->
			
					
		
	
?>
        <!-- Main Content -->
		<div class="page-wrapper">
            <div class="container-fluid pt-25">
            
            
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
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark"><?php echo $formbasligi;?> ---> Düzenle</h6>
								</div>
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



if ($ykn[turu]=='Liste')
		
{
    
    $sorgumuz="select * from formlar where form_index=$ykn[bagliformindex]";
	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		
$formid=$usttablo[form_index];


    
    ?>
    
    
    
     
    
    
    
	
	<div class="col-lg-12">



                            <div class="panel panel-default toggle panelClose panelRefresh" id="altform_<?php echo $formid; ?>">



                                
                                
                                <div class="panel-heading">
									<div class="pull-left">
										<h6 class="panel-title txt-dark"><?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[formtanimi]); ?></h6>
									</div>
									<div class="pull-right">
										<div class="pull-left inline-block dropdown mr-15">
										
										</div>
										
									
										
										<a class="pull-left inline-block yenisatir" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-success">Ekle</button>
										</a>
									</div>
									<div class="clearfix"></div>
								</div>

                                <div class="panel-body" style="display: block;">

                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: auto;">
                                        
                                        <div class="table-responsive" style="overflow: hidden; width: 100%; height: auto;" id="altform">
                                        
                                        <table id="example" class="table table-hover display  pb-30">

                                        <thead>

                                            <tr>
                                                
                                                
                                                <?php
	
	$ozelformid=$ykn[bagliformindex];
	$masterfield1=$ykn[masterfield];
	$detailfield1=$ykn[detailfield];
	$sqly="select * from bloklar left join bloklar_alti on bloklar_alti.blokindex=bloklar.bokindex left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where bloklar.formindex=$ykn[bagliformindex] and bloklar.turu='Sorgu'  and listegosterim='True' order by bloklar_alti.sirasi asc";
	$sorgulamasi=mysqli_query($connection,$sqly);
	
while ($hastam=mysqli_fetch_assoc($sorgulamasi))
{


                                                echo "<th><font size=\"3\">".iconv( "ISO-8859-9","UTF-8",$hastam[alanyazisi])."</font></th>";
    
}
?>
<th><font size="3">İşlemler</font></th>
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
                                                
                                                echo "<td><font size=\"3\">".iconv( "ISO-8859-9","UTF-8",$icerigi[$alanveri])."</font></td>";
}
   

}		

if ($formid!='126')
{
					echo "<td>";
					
					?>
					<a class="pull-left inline-block satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a class="pull-left inline-block satirsil" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
                                                
                                                <?php
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
if ($formid=='126')
{
    $tadsoyad=$fatura_adi." ".$fatura_soyadi;
    $ttel=$fatura_telno;
?>
	<img style="margin-left:35px;" src="https://qr-creator.com/qr_image.php?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A<?php echo $tadsoyad; ?>%0AN%3A%3B<?php echo $tadsoyad; ?>%0ATEL%3BCELL%3A0<?php echo $ttel; ?>%0AEND%3AVCARD%0A&size=4&colorcode=000000&errc=l&key=0jdue8fz">
	
<?php
if ($odemesekli=='Kapıda Ödeme')
{
     $mesaj="Merhaba, WOLFDIZAYN.COM dan yazıyorum.
Web sitemiz üzerinden Kapıda Ödeme ile ".$tanimlar." 
 Sipariş vermiş oldugunuzu görüyorum Toplam Tutar : ".$geneltoplam." TL'dir. Sipariş onayını veriyor musunuz?";
$mesaj=str_replace('<br>',' ',$mesaj);  
?>
	<a target="_blank" href="https://wa.me/9<?php echo $ttel; ?>?text=<?php echo $mesaj; ?>"><img src="https://web.whatsapp.com/apple-touch-icon.png" height="145px" alt="wolfdizayn whatsapp iletişim"></a>
<?
}

if ($odemesekli=='Havale')
{
    $mesaj="Merhaba, WOLFDIZAYN.COM dan yazıyorum.
Web sitemiz üzerinden EFT/Havale ile ".$tanimlar." 
 Sipariş vermiş oldugunuzu görüyorum Toplam Tutar : ".$geneltoplam." TL'dir.
%0aAkbank Hesap Bilgileri;
%0aIBAN : TR78 0004 6001 0488 8000 1031 46 
%0aHesap No : 0104 - 0103146 
%0aHesap Sahibi : Metin Örkmez 
%0aHesabına EFT/Havale yapıp tarafımıza bildirmeniz gerekmektedir. 2 iş günü içinde EFT/Havale yapmadığınız taktirde siparişiniz otomatik olarak silinecektir.";

    
$mesaj=str_replace('<br>',' ',$mesaj);  
?>
	<a target="_blank" href="https://wa.me/9<?php echo $ttel; ?>?text=<?php echo $mesaj; ?>"><img src="https://web.whatsapp.com/apple-touch-icon.png" height="145px" alt="wolfdizayn whatsapp iletişim"></a>
<?
}
?>

 <?php   
}	

?>

		


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

	

	

?>

								

                                        <div class="form-group">

                                            <div class="col-lg-12">

<?php
if ($ykn[grupadi]!='')
{
    ?>
<div class="row"><h4 class="account-title"><span class="fa fa-chevron-right"></span><?php echo iconv( "ISO-8859-9","UTF-8",$ykn[grupadi]); ?></h4>
</div>
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

<div <?php echo $boyut; ?>">

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

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="text" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">

</div>																



<?php

}



if ($met[verigiristuru]=='Boolean')

{

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

	  

                                                    <label class="toggle" data-on="ON" data-off="OFF">

                                                        <input type="checkbox" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" <?php echo $checked; ?>>

                                                        <span class="button-checkbox"></span>

                                                    </label>

                                                    <label for="checkbox-toggle"><?php echo $etiketi; ?></label>



													

<?php                                               

}

if ($met[verigiristuru]=='Edit')

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

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="text" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">

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

<div <?php echo $boyut; ?>">

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
																<div <?php echo $boyut; ?>">

<?php
	echo $etiketi."<input  id=".$met[alanadi]." name=".$met[alanadi]." type=\"password\" value=\"".$varsayilan."\">";
?>
</div>
<?php

}


if ($met[verigiristuru]=='Textarea')

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

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><textarea id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" style="width: 100%; height:100px;"><?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan);?></textarea>

</div>																









<?php

}



if ($met[verigiristuru]=='Date')

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

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><input type="date" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">

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



																if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

															

?>																

<div <?php echo $boyut; ?>>



<?php echo $etiketi.":" ?><div class="fileinput fileinput-new" data-provides="fileinput">

													<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px; line-height: 150px;"><a href="<?php echo $varsayilan; ?>" data-toggle="lightbox" data-gallery="gallerymode" data-title="Yachts" data-parrent=""><img class="img-responsive" src="<?php echo $varsayilan; ?>" id="resim_<?php echo $met[alanadi]; ?>"></a></div>

													<div>

														<span class="btn default btn-file">

														<span class="fileinput-new">

														Resim Seç </span>

														<span class="fileinput-exists">

														Değiştir </span>

													<input id="sss<?php echo $met[alanadi]; ?>" name="sss<?php echo $met[alanadi]; ?>" value="" type="hidden"><input type="file" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" onchange="document.getElementById('resim_<?php echo $met[alanadi]; ?>').src = window.URL.createObjectURL(this.files[0])">

															</span>

														<a style="" href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput">

														Sil</a>

													</div>

												</div>	
</div>







<?php

}













if ($met[verigiristuru]=='Secimli')

{

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



<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?> style="margin:2px">

															 

																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>[]" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" multiple="multiple">

																	

																	

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







if ($met[verigiristuru]=='Combobox')

{

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



<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?> style="margin:2px">

															 

																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1">

																	

																	

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

																	

																	

																	

																

																	

																	

																	

																</select>

															</div>

														</div>



<?php

}


if ($met[verigiristuru]=='Tags')

{
    	$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

    ?>
    <div <?php echo $boyut; ?>">
 
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
     
<div <?php echo $boyut; ?>">

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

<div <?php echo $boyut; ?>">

<?php echo $etiketi; ?><input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

</div>																



<?php

}





if ($met[verigiristuru]=='FixList')

{

	$dilimler = explode(";", $met[fixlist]);

	

	

	

?>	

<div <?php echo $boyut; ?>>



	<?php 		                                             if ($met[zorunlu]=='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]); 

																

																}

																

																if ($met[zorunlu]!='True')

																{

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																}

																  ?>



																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>"  data-placeholder="<?php echo $etiketi; ?>" tabindex="1">

																

																

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
                                                        
                                                        
                                                        <?php
                                                        
                                                        if ($_GET[menu_id]=='198')
                                                        {
                                                            ?>
                                                            
                                                            
                                                            <button type="button" id="tabloolustur" name="tabloolustur" class="btn btn-danger">Tablo Oluştur</button>
                                                            
                                                            <?php
                                                            
                                                        }
                                                        
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
            	
            	
            		if ($_GET[page_id]=='newrecord')
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
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark"><a href="index.php?page_id=listings&menu_id=<?php echo $_GET[menu_id]; ?>"><?php echo $formbasligi;?></a>---> Yeni Kayıt</h6>
								</div>
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
                                                    <h5 class="modal-title" id="exampleModalLabel">Kayıt Başarılı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                  Kayıt başarıyla güncellendi.
                                                </div>
                                                <div class="modal-footer">
                                                    
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



if ($bagliformid=="")

{

$sqlye="select * from bloklar where formindex=$_GET[menu_id] order by sirasi asc,bokindex asc";

}



if ($bagliformid!="")

{

$sqlye="select * from bloklar where formindex=$bagliformid order by sirasi asc,bokindex asc";

}

$sorgulakardes=mysqli_query($connection,$sqlye);





$sqlsa="select DATE_FORMAT(Now(), '%Y-%m-%d') DATEONLY, 

       DATE_FORMAT(Now(),'%H:%i:%s') TIMEONLY";

$sorbana=mysqli_query($connection,$sqlsa);



while ($ykn=mysqli_fetch_assoc($sorbana))

{	

$saat=$ykn["TIMEONLY"];

$tarih=$ykn["DATEONLY"];

}









while ($ykn=mysqli_fetch_assoc($sorgulakardes))

{	



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


?>

								

                                        <div class="form-group">

                                            <div class="col-lg-12">

                                                <div class="row">

												

												<?php

												if ($ykn[grupadi]!="")

												{

													?>

													

													<div class="panel panel-primary toggle pl10 pr10">

													<div class="panel-heading">

                                    <h4 class="panel-title"><?php echo iconv( "ISO-8859-9","UTF-8",$ykn[grupadi]);  ?></h4>

                                <div class="panel-controls panel-controls-right"><a href="#" class="panel-refresh"><i class="brocco-icon-refresh s12"></i></a><a href="#" class="toggle panel-minimize"><i class="icomoon-icon-plus"></i></a><a href="#" class="panel-close"><i class="icomoon-icon-close"></i></a></div></div>

								<div class="panel-body pt5 pb5">

<?php

												}

?>												

												

												

<?php

	$sorbak=mysqli_query($connection,"select * from bloklar_alti left join formalanlari on bloklar_alti.alanindex=formalanlari.alan_index where bloklar_alti.blokindex=$ykn[bokindex] and kayitformu=1 order by bloklar_alti.sirasi");

$kayitsayisi=mysqli_num_rows($sorbak);



while ($met=mysqli_fetch_assoc($sorbak))

{



$varsayilan=$met[varsayilan];



$required="";

if ($met[zorunlu]=='True')

{

$required=" required=\"true\"";	

}



if ($met[varsayilan]!='')

{

	
		if ($met[varsayilan]=='ucretsiz')

	{

$varsayilan=$_SESSION[ucretsizsalon];

}
	

	if ($met[varsayilan]=='date')

	{

		

		$varsayilan=$tarih;

	}
	
	
	if ($met[varsayilan]=='komisyonorani')

	{

$sqlyes="select * from firmalar where index_firmalar=".$_SESSION["user_id"];
$sorgula=mysqli_query($connection,$sqlyes);

while ($gel=mysqli_fetch_assoc($sorgula))
{
    $varsayilan=$gel[komisyon];
}
		

	}
	
	
	
	if ($met[varsayilan]=='borclunumaralar')

	{

	
$sqlces="select firmaadi,yetkilitelefon,sum(vademiktari) as toplamborc,yetkili from taksitler left join firmalar on firmalar.index_firmalar=taksitler.firmaid where odenme='' or odenme='0' group by firmaid";
$sorgulamak=mysqli_query($connection,$sqlces);
while ($oku=mysqli_fetch_assoc($sorgulamak))
{
	$deger=$deger."".$oku[yetkilitelefon].";";
}
$varsayilan=$deger;
	}
	
	
	if ($met[varsayilan]=='tumnumaralar')

	{

	
$sqlces="select firmaadi,yetkilitelefon,sum(vademiktari) as toplamborc,yetkili from taksitler left join firmalar on firmalar.index_firmalar=taksitler.firmaid group by firmaid";
$sorgulamak=mysqli_query($connection,$sqlces);
while ($oku=mysqli_fetch_assoc($sorgulamak))
{
	$deger=$deger."".$oku[yetkilitelefon].";";
}
$varsayilan=$deger;
	}

	

	if ($met[varsayilan]=='time')

	{

		

		$varsayilan=$saat;

	}

	

	if ($met[varsayilan]=='user')

	{

		

		$varsayilan=$_SESSION["adi"];

	}

	

	if ($met[varsayilan]=='firmakodu')

	{

		

		$varsayilan=$_SESSION["firmakodu"];

	}

	

	

	if ($met[varsayilan]=='musterino')

	{

		$varsayilan=$_GET["musterino"];

		

	}

	

	if ($met[varsayilan]=='plakano')

	{

		$varsayilan=$_GET["plakano"];

		

		$sqlyes="select * from araclar where plakano='".$_GET["plakano"]."'";

		$sorgum=mysqli_query($connection,$sqlyes);

		

		while ($oks=mysqli_fetch_assoc($sorgum))

		{

			$kirabedeli=$oks[kirabedeli];

			$arackmsi=$oks[arackm];

			

			$sqlsis="select * from hatlar where plakano='".$_GET["plakano"]."'";

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
		
		
		
		
	
			

			$arackmsi=round($arackmsi+$gezilen+$gunluks);

			

			

		}

			

			

		}

	}

	

	if ($met[varsayilan]=='kirabedeli')

	{

		$varsayilan=$kirabedeli;

		

	

	}

	

	if ($met[varsayilan]=='arackmsi')

	{

		$varsayilan=$arackmsi;

		

	

	}

	

	if ($_GET["adresid"]!=="")

	{

		$sqly="select * from adresdefteri where index_adresdefteri='".$_GET["adresid"]."'";

		$sorguss=mysqli_query($connection,$sqly);

		

		while ($okk=mysqli_fetch_assoc($sorguss))

		{

			$musteriadi=$okk["musteriadi"];

			$telefon=$okk["telefon"];

			$adrestarifi=$okk["adrestarifi"];

			$ilce=$okk["ilce"];

			$mahalle=$okk["mahalle"];

			$caddesokak=$okk["caddesokak"];

			$konumx=$okk["konumx"];

			$konumy=$okk["konumy"];

			$binano=$okk["binano"];

			$eposta=$okk["eposta"];

			$notlar=$okk["notlar"];

		}

	}

	

	if ($met[varsayilan]=='$musteriadi')

	{

		

		$varsayilan=$musteriadi;

	}

	

	if ($met[varsayilan]=='$telefon')

	{

		

		$varsayilan=$telefon;

	}

	

	if ($met[varsayilan]=='$adrestarifi')

	{

		

		$varsayilan=$adrestarifi;

	}

	

	if ($met[varsayilan]=='$ilce')

	{

		

		$varsayilan=$ilce;

	}

	

	if ($met[varsayilan]=='$mahalle')

	{

		

		$varsayilan=$mahalle;

	}

	

	if ($met[varsayilan]=='$caddesokak')

	{

		$varsayilan=$caddesokak;

	}

	

		if ($met[varsayilan]=='$konumx')

	{

		$varsayilan=$konumx;

	}

	

		if ($met[varsayilan]=='$konumy')

	{

		$varsayilan=$konumy;

	}

	

		if ($met[varsayilan]=='$eposta')

	{

		$varsayilan=$eposta;

	}

	

	if ($met[varsayilan]=='$notlar')

	{

		$varsayilan=$notlar;

	}

	

	if ($met[varsayilan]=='$binano')

	{

		$varsayilan=$binano;

	}

		if ($met[varsayilan]=='$Map')

	{

		$varsayilan="";

		

		if ($konumx!=""&&$konumy!="")

		{

		$konum=$konumx.", ".$konumy;

		}

		

		

	}

	

	if ($_POST["konum"]!="")

		{

			$degersa=str_replace("(", "", $_POST["konum"]);

			$degersa=str_replace(")", "", $degersa);

			

		$konum=$degersa;

		}

		

	if ($met[varsayilan]=='userindis')

	{

		

		$varsayilan=$_SESSION["user_id"];

	}
	
	
	
	if ($met[varsayilan]=='ustformid')

	{

		

		$varsayilan=$_GET["tasarimid"];

	}



	if ($met[varsayilan]=='subeid')

	{

		

		$varsayilan=iconv( "UTF-8","ISO-8859-9",$_SESSION["sube"]);

	}


	if ($met[varsayilan]=='salonid')

	{

		

		$varsayilan=iconv( "UTF-8","ISO-8859-9",$_GET["salonid"]);

	}
	
	
	if ($met[varsayilan]=='studyoid')

	{

		

		$varsayilan=iconv( "UTF-8","ISO-8859-9",$_GET["studyoid"]);

	}
	
	
	if ($met[varsayilan]=='tarihim')

	{

		

		$varsayilan=$_GET["tarihim"];

	}
	
	if ($met[varsayilan]=='saatim')

	{

		

		$varsayilan=$_GET["saatim"];

	}
	
	
	if ($met[varsayilan]=='sube')

	{
	     $varsayilan=$_SESSION[sube];
	    
	}
	
	if ($met[varsayilan]=='ofisno')

	{
	     $varsayilan=$_GET[ofisno];
	    
	}
	 
	   
	
		if ($met[varsayilan]=='ayarlikonu')

	{
	    
	    
	    if ($_GET[kiraturu]=='')
	   {
	       
	       $varsayilan='';
	   }
	   
	   if ($_GET[kiraturu]=='yaklasan')
	   {
	       
	       $varsayilan=iconv( "UTF-8","ISO-8859-9",'Yaklaşan Kira Hatırlatması');
	   }
	   
	     if ($_GET[kiraturu]=='gecmis')
	   {
	       
	       $varsayilan=iconv( "UTF-8","ISO-8859-9",'Geçmiş Kira Hatırlatması');
	   }
	    
	}
	
	
	
	if ($met[varsayilan]=='ayarlimesaj')

	{
	    
	    
	    if ($_GET[kiraturu]=='')
	   {
	       
	       $varsayilan='';
	   }
	   
	   if ($_GET[kiraturu]=='yaklasan')
	   {
	       
	       $sql="select * from sablonlar where sablonadi like 'YAKLA%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=$okut[sablon];
	       }
	 
	   }
	   
	     if ($_GET[kiraturu]=='gecmis')
	   {
	         $sql="select * from sablonlar where sablonadi like 'GEC%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=$okut[sablon];
	       }
	   }
	    
	}
	
	
		if ($met[varsayilan]=='ayarlitelefonlar')

	{
	    
	    
	    if ($_GET[kiraturu]=='')
	   {
	       
	       $varsayilan='';
	   }
	   
	   if ($_GET[kiraturu]=='yaklasan')
	   {
	       
	       $sql="select * from kiralar left join uyeler on uyeler.user_indeks=kiralar.ilgilifirma where durumu like '%denmedi%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=";".$okut[telefon];
	       }
	 
	   }
	   
	     if ($_GET[kiraturu]=='gecmis')
	   {
	         $sql="select * from kiralar left join uyeler on uyeler.user_indeks=kiralar.ilgilifirma where durumu like '%denmedi%'";
	       $sorgula=mysqli_query($connection,$sql);
	       while ($okut=mysqli_fetch_assoc($sorgula))
	       {
	           $varsayilan=";".$okut[telefon];
	       }
	   }
	    
	}
	
	
	
		if ($met[varsayilan]=='fiyatim')

	{
$varsayilan=$_GET["fiyatim"];
		if ($_SESSION[ucretsizsalon]>0)
		{
		 $varsayilan="0";   
		}

	}
	
		if ($met[varsayilan]=='fiyatimtl')

	{

		$varsayilan=$_GET["fiyatim"]." TL";
		if ($_SESSION[ucretsizsalon]>0)
		{
		 $varsayilan="0 TL";   
		}

		

	}
		

	if ($met[varsayilan]=='telefonno')

	{

		$varsayilan=$_GET["telefonno"];

	}

	

	if ($met[varsayilan]=='userturindis')

	{

		

		$varsayilan=$_SESSION["kullanicituru"].$_SESSION["user_id"];

	}

	

	if ($met[varsayilan]=='say')

{

$sqlims="show table status from $veritabani where name='$formtablosu'";



$sorgulas=mysqli_query($connection,$sqlims);



while ($oka=mysqli_fetch_assoc($sorgulas))

{



$sira=$oka["Auto_increment"];





}



if ($sira=='')

{



$varsayilan='00001';

$sira=1;



}





if ($sira<>'')

{



$verim=($sira*1);



if ($verim<10)

{

$degerc='0000'."$verim";

}



if ($verim>9&&$verim<100)

{

$degerc='000'."$verim";

}



if ($verim>99&&$verim<1000)

{

$degerc='00'."$verim";

}



if ($verim>999&&$verim<10000)

{

$degerc='0'."$verim";

}



$sqlims="alter table $formtablosu AUTO_INCREMENT =".($sira+1);



$sorgulas=mysqli_query($connection,$sqlims);





$varsayilan=$degerc;

}





}

	

}





if ($met[varsayilan]=='otomatik')

	{

		

		$varsayilan="";

		

		if ($_GET[patternid]!="")

		{

			$sqlsaa="select ".$met[alanadi]." from arackiralama where index_arackiralama=".$_GET[patternid];

			$sorgulana=mysqli_query($connection,$sqlsaa);

			

			

			while ($okumasi=mysqli_fetch_assoc($sorgulana))

			{

				$alaan=$met[alanadi];

				$varsayilan=$okumasi[$alaan];

			}

			

		}

		

	}



$varsayilan=$met[varsayilansabit].$varsayilan;







if ($met[verigiristuru]=='Hidden')

{

	echo "<input  id=".$met[alanadi]." name=".$met[alanadi]." type=\"hidden\" value=\"".$varsayilan."\">";

	

}



if ($met[verigiristuru]=='Button')

{

?>	

	

                                                    

                                                        <p align="center"><button class="btn btn-danger mr5 mb10" type="submit"><i class="cut-icon-stats-2 mr5"></i> Kurye Çağır</button>

                                                  

                                              

<?php

}







if ($met[verigiristuru]=='Map')

{

?>	





<style>

  #mapCanvas {

    width: 100%;

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





  <div id="haritakonum" <?php echo $d;?>>

    <input id="pac-input" class="controls" type="hidden" placeholder="Search Box">

  <div id="mapCanvas"></div>

  <div id="infoPanel">

    <b>İşaret Durumu:</b>

    <div id="markerStatus"><i>İşareti sürükleyebilirsiniz.</i></div>

    <b>Mevcut Pozisyon:</b>

    <div id="info"></div>

    <b>Eşleşen adres:</b>

    <div id="address"></div>

  </div>

</div> 







<?php	

}

	

	

if ($met[verigiristuru]=='Boolean')

{

	



																

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

	  

                                                    <label class="toggle" data-on="ON" data-off="OFF">

                                                        <input type="checkbox" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" checked>

                                                        <span class="button-checkbox"></span>

                                                    </label>

                                                    <label for="checkbox-toggle"><?php echo $etiketi; ?></label>



													

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
   <div class="slidecontainer col-md-2" <?php echo $boyut; ?> style="margin:2px">
  <?php echo $etiketi.":" ?><input type="range" min="1" max="1000" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" class="slider" id="myRange">
</div> 
    <?php
}



if ($met[verigiristuru]=='Edit')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

</div>																



<?php

}





if ($met[verigiristuru]=='Disabled')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> readonly>

</div>																



<?php

}







if ($met[verigiristuru]=='File(JPG)'||$met[verigiristuru]=='File(PNG)'||$met[verigiristuru]=='File(GIF)'||$met[verigiristuru]=='File(MP4)')

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

<div <?php echo $boyut; ?>>



<?php echo $etiketi.":" ?><div class="fileinput fileinput-new" data-provides="fileinput">

													<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px; line-height: 150px;"><a href="<?php echo $varsayilan; ?>" data-toggle="lightbox" data-gallery="gallerymode" data-title="Yachts" data-parrent=""><img class="img-responsive" src="<?php echo $varsayilan; ?>" id="resim_<?php echo $met[alanadi]; ?>"></a></div>

													<div>

														<span class="btn default btn-file">

														<span class="fileinput-new">

														Resim Seç </span>

														<span class="fileinput-exists">

														Değiştir </span>

													<input id="sss<?php echo $met[alanadi]; ?>" name="sss<?php echo $met[alanadi]; ?>" value="" type="hidden"><input type="file" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" onchange="document.getElementById('resim_<?php echo $met[alanadi]; ?>').src = window.URL.createObjectURL(this.files[0])">

															</span>

														<a style="" href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput">

														Sil</a>

													</div>

												</div>	
</div>







<?php

}







if ($met[verigiristuru]=='File(PDF)')

{



																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>



<?php echo $etiketi.":" ?><div class="fileinput fileinput-new" data-provides="fileinput">

													<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 80%; height: 150px; line-height: 150px;"></div>

													<div>

														<span class="btn default btn-file">

														<span class="fileinput-new">

														PDF Seç </span>

														<span class="fileinput-exists">

														Değiştir </span>

													<input id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" value="" type="hidden"><input type="file" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>">

															</span>

														<a style="" href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput">

														Sil</a>

													</div>

												</div>		

												

</div>																









<?php

}









if ($met[verigiristuru]=='Textarea')

{



																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><textarea id="<?php echo $met[alanadi]; ?>" title="<?php echo $etiketi; ?>" name="<?php echo $met[alanadi]; ?>" style="width: 100%; height:100px;"   ><?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan);?></textarea>

</div>																









<?php

}



if ($met[verigiristuru]=='Date')

{

$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>>

<?php echo $etiketi.":" ?><input type="date" id="<?php echo $met[alanadi]; ?>" title="<?php echo $etiketi; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>">

</div>																









<?php

}





if ($met[verigiristuru]=='Secimli')

{

		$id="";

	if ($met[alanadi]=="model")

{

	$id="id=\"modelicerik\"";

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





    <script type="text/javascript">

        $(function () {

			

			

			$('#<?php echo $met[alanadi]; ?>').on('change', function(){

    var selected = $(this).find("option:selected");

    var arrSelected = [];

    selected.each(function(){

       arrSelected.push($(this).val());
	   
    });

});

            

           

        });

    </script>





<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?> style="margin:2px">

															 

																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>[]" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" multiple="multiple">

																	

																	

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







if ($met[verigiristuru]=='Combobox')

{

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

																	$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																

?>



<div <?php  echo $boyut;?>>

															<div <?php echo $id; ?> style="margin:2px">

															

																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="<?php echo $etiketi; ?>" tabindex="1" <?php echo $required;?>>

																	

																	

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

																	if ($_SESSION["kullanicituru"]=='rentacar'||$_SESSION["kullanicituru"]=='sadeceharita')

																	{

																$verigetir=mysqli_query($connection,$sorgu." and firmaid='".$_SESSION["user_id"]."'");

																	}

																	

																	if ($_SESSION["kullanicituru"]!='rentacar')

																	{

																$verigetir=mysqli_query($connection,$sorgu);

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

																

																if ($varsayilan==iconv( "ISO-8859-9","UTF-8",$verisi))

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


if ($met[verigiristuru]=='Tags')

{
    	$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

    ?>
    <div <?php echo $boyut; ?>">
 
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap-theme.min.css">
     <link rel="stylesheet" href="assets/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
    <script src="dist/bootstrap-tagsinput.min.js"></script>
    <script src="dist/bootstrap-tagsinput/bootstrap-tagsinput-angular.min.js"></script>

    <script src="assets/app.js"></script>
    <script src="assets/app_bs3.js"></script>
    
    
     
    
     
<div <?php echo $boyut; ?>">

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

<div <?php echo $boyut; ?>"><?php echo $etiketi; ?>

<input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

</div>																



<?php

}









if ($met[verigiristuru]=='FixList')

{

	$dilimler = explode(";", $met[fixlist]);
$ek="";
if ($met[alanadi]=='personelsayisi')
{

$ek="id=\"personelsay\" style=\"display:none\"";    
    
}

if ($met[alanadi]=='personelturu')
{

$ek="id=\"personeltur\" style=\"display:none\"";    
    
}
	

	

?>	

<div <?php echo $boyut; ?> <?php echo $ek; ?>>



	<?php 		                                            $etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																  ?>



																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="<?php echo $etiketi; ?>" tabindex="1" <?php echo $required;?>>

																

																

																<?php	

																

																	echo "<option value=\"\">".$etiketi."</option>";

												

for ($im=0;$im<count($dilimler);$im++)

	{

		$etiket=$dilimler[$im];

		

		

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

                                                <!-- End .row -->

												

												

												

                                            </div>

                                        </div>

                                        <!-- End .form-group  -->

										

<?php

}











}

?>										

										

										

									<?php	

                                    if ($_GET["menu_id"]!="54")

										{

                                    ?>

                                        <!-- End .form-group  -->

                                        <div class="form-group">

                                            <div class="col-lg-12">

                                                <div class="row">

                                                    <!-- Start .row -->

                                                   

                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right" id="gonders">


<?php
if ($_GET[menu_id]!="199s")
{
    ?>

                                                           <button type="submit" id="gonderbuton" name="gonderbuton" class="btn btn-default">Kaydet</button>

<?php
}

                                                        
                                                        if ($_GET[menu_id]=='198')
                                                        {
                                                            ?>
                                                            
                                                            
                                                            <button type="button" id="tabloolustur" name="tabloolustur" class="btn btn-danger">Tablo Oluştur</button>
                                                            
                                                            <?php
                                                            
                                                        }
                                                        
                                                        ?>

                                              
                                                    </div>

                                                </div>

                                                <!-- End .row -->

                                            </div>

                                        </div>

                                        <!-- End .form-group  -->

										

										<?php

										}

										?>

                                        <!-- End .form-group  -->

                                    </form>

									
								
								
								
								
								</div>
							</div>
						</div>
					</div>
				</div>
							
<?php		    
		    
		    
		    
		}
            	
            
            
            		  		if ($_GET[page_id]=='checkout')
		{
		    ?>
		    
		    		<!-- Row -->
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default card-view pa-0">
								<div class="panel-wrapper collapse in">
									<div class="panel-body pt-0">
										<form id="example-advanced-form" action="#">
											<h3><span class="number"><i class="icon-user-following txt-black"></i></span><span class="head-font capitalize-font">signup</span></h3>
											<fieldset>
												<div class="row">
													<div class="col-sm-6">
														<div class="form-wrap">
															<div class="form-group">
																<div class="input-group">
																	<div class="input-group-addon"><i class="icon-user"></i></div>
																	<input type="text" class="form-control required"  name="Username" id="exampleInputuname" placeholder="Username">
																</div>
															</div>
															<div class="form-group">
																<div class="input-group">
																	<div class="input-group-addon"><i class="icon-envelope-open"></i></div>
																	<input type="email" class="form-control required" id="exampleInputEmail" name="email" placeholder="Enter email">
																</div>
															</div>
															<div class="form-group">
																<div class="input-group">
																	<div class="input-group-addon"><i class="icon-lock"></i></div>
																	<input id="password-2" type="password" class="form-control required" name="password" placeholder="Enter password">
																</div>
															</div>
															<div class="form-group mb-0">
																<div class="input-group">
																	<div class="input-group-addon"><i class="icon-lock"></i></div>
																	<input type="password" class="form-control required"  id="confirm-2" name="confirm"  placeholder="confirm password">
																</div>
															</div>
														</div>
													</div>
												</div>
											</fieldset>
											
											<h3><span class="number"><i class="icon-bag txt-black"></i></span><span class="head-font capitalize-font">shipping</span></h3>
											<fieldset>
												<div class="row">
													<div class="col-sm-12">
														<div class="form-wrap">
															<div class="form-group">
																<label class="control-label mb-10" for="exampleCountry">country:</label>
																<select id="exampleCountry" class="form-control required" name="country">
																	<option value="">India</option>
																	<option value="">Australia</option>
																	<option value="">USA</option>
																	<option value="">Japan</option>
																</select>
															</div>
															<div class="form-group">
																<div class="row">
																	<div class="col-md-6 col-xs-12">
																		<label class="control-label mb-10" for="firstName">first name:</label>
																		<input id="firstName" type="text" name="first_name" class="form-control required" value="" />
																	</div>
																	<div class="span1"></div>
																	<div class="col-md-6 col-xs-12">
																		<label class="control-label mb-10" for="lastName">last name:</label>
																		<input id="lastName" type="text" name="last_name" class="form-control required" value="" />
																	</div>
																</div>
															</div>
															<div class="form-group">
																<label class="control-label mb-10" for="addressDetail">Address:</label>
																<input id="addressDetail"  type="text" name="address" class="form-control required" value="" />
															</div>
															<div class="form-group">
																<label class="control-label mb-10" for="cityName">city:</label>
																<select id="cityName" class="form-control required" name="country">
																	<option value="">Banglore</option>
																	<option value="">Pune</option>
																</select>
															</div>
															<div class="form-group">
																<label class="control-label mb-10" for="stateName">state:</label>
																<select id="stateName" class="form-control required" name="country">
																	<option value="">Karnataka</option>
																	<option value="">Maharashtra</option>
																</select>
															</div>
															<div class="form-group">
																<label class="control-label mb-10" for="postalCode">zip/postal code:</label>
																<input id="postalCode" type="text" name="zip_code"  data-mask="99999-9999" class="form-control required" value="" />
															</div>
															<div class="form-group">
																<label class="control-label mb-10" for="phoneNumber">phone number:</label>
																<input type="text" id="phoneNumber"  data-mask="+40 999 999 999" name="phone_number" class="form-control required" value="" />
															</div>
															<div class="form-group">
																<label class="control-label mb-10" for="emailAddress">email address:</label>
																<input id="emailAddress" type="text" name="email_address" class="form-control required" value="" />
															</div>
															<div class="form-group mb-0">
																<div class="checkbox checkbox-success">
																	<input id="checkbox_1" type="checkbox">
																	<label for="checkbox_1">Billing address is same as shipping address.</label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</fieldset>
										 
											<h3><span class="number"><i class="icon-credit-card txt-black"></i></span><span class="head-font capitalize-font">payment</span></h3>
												<fieldset>
												<!--CREDIT CART PAYMENT-->
												<div class="row">
													<div class="col-sm-12">
														<div class="form-group">
															<label class="control-label mb-10" for="CreditCardType">card type:</label>
															<select id="CreditCardType" name="CreditCardType" class="form-control required">
																<option value="5">Visa</option>
																<option value="6">MasterCard</option>
																<option value="7">American Express</option>
																<option value="8">Discover</option>
															</select>
														</div>
														<div class="form-group">
															<label class="control-label mb-10" for="cardNo">Credit Card Number:</label>
															<input type="text" id="cardNo" data-mask="9999-9999-9999-9999" class="form-control required" name="car_number" value="" />
														</div>
														<div class="form-group">
															<label class="control-label mb-10" for="cvv">card cvv:</label>
															<input type="text" id="cvv" class="form-control  required" data-mask="999" name="car_code" value="" />
														</div>
														<div class="form-group">
															<label class="control-label mb-10">expiration date:</label>
															<div class="row">
																<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
																	<select class="form-control required" name="month">
																		<option value="">Month</option>
																	</select>
																</div>
																<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
																	<select class="form-control required" name="year">
																		<option value="">Year</option>
																	</select>
																</div>
															</div>
														</div>
														<div class="form-group mb-0">
															<div class="row">
																<div class="col-md-12">
																	<ul class="cards">
																		<li class="visa hand"><img src="../img/1-s.png" alt="card"/></li>
																		<li class="mastercard hand"><img src="../img/2-s.png" alt="card"/></li>
																		<li class="amex hand"><img src="../img/3-s.png" alt="card"/></li>
																		<li class="amex hand"><img src="../img/4-s.png" alt="card"/></li>
																		</ul>
																	<div class="clearfix"></div>
																</div>
															</div>
														</div>
														
													</div>
												</div>
												<!--CREDIT CART PAYMENT END-->
											</fieldset>
										 
											<h3><span class="number"><i class="icon-basket-loaded txt-black"></i></span><span class="head-font capitalize-font">review cart</span></h3>
											<fieldset>
													<div class="table-responsive">
														<table class="table display product-overview" id="example">
															<thead>
																<tr>
																	<th>Photo</th>
																	<th>Product</th>
																	<th>Quantity</th>
																	<th>price</th>
																	<th>Actions</th>
																</tr>
															</thead>
															<tfoot>
																<tr>
																	<th colspan="3">Subtotal:</th>
																	<th></th>
																	<th></th>
																</tr>
															</tfoot>
															<tbody>
																<tr>
																	<td>
																		<img src="../img/chair.jpg" alt="iMac" width="80">
																	</td>
																	<td>Rounded Chair</td>
																	<td>
																	<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="20" name="vertical-spin">
																	</td>
																	<td>$400</td>
																	
																	<td><a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete txt-danger"></i></a></td>
																</tr>
																<tr>
																	<td>
																		<img src="../img/chair2.jpg" alt="iMac" width="80">
																	</td>
																	<td>Rounded Chair</td>
																	<td>
																		<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="10" name="vertical-spin">
																	</td>
																	<td>$450</td>
																	<td><a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete txt-danger"></i></a></td>
																</tr>
																<tr>
																	<td>
																		<img src="../img/chair3.jpg" alt="iMac" width="80">
																	</td>
																	<td>Rounded Chair</td>
																	<td>
																	<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="15" name="vertical-spin">
																	</td>
																	<td>$470</td>
																	
																	<td><a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete txt-danger"></i></a></td>
																</tr>
															</tbody>
														</table>
													</div>	
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Row -->
					
		    
		    <?php
		}
            	
            	
            		  		if ($_GET[page_id]=='cart')
		{
		    ?>
		    
		    	<!-- Row -->
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default card-view">
								<div class="panel-wrapper collapse in">
									<div class="panel-body row">
										<form id="example-advanced-form" action="#">
											<div class="table-wrap">
												<div class="table-responsive">
													<table class="table display product-overview mb-30" id="example">
														<thead>
															<tr>
																<th>Photo</th>
																<th>Product</th>
																<th>Quantity</th>
																<th>price</th>
																<th>Actions</th>
															</tr>
														</thead>
														<tfoot>
															<tr>
																<th colspan="3">Subtotal:</th>
																<th></th>
																<th></th>
															</tr>
														</tfoot>
														<tbody>
															<tr>
																<td>
																	<img src="../img/chair.jpg" alt="iMac" width="80">
																</td>
																<td class="txt-dark">Rounded Chair</td>
																<td>
																<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="20" name="vertical-spin">
																</td>
																<td>$400</td>
																
																<td><a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete txt-danger"></i></a></td>
															</tr>
															<tr>
																<td>
																	<img src="../img/chair2.jpg" alt="iMac" width="80">
																</td>
																<td class="txt-dark">Circle Chair</td>
																<td>
																	<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="10" name="vertical-spin">
																</td>
																<td>$450</td>
																<td><a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete txt-danger"></i></a></td>
															</tr>
															<tr>
																<td>
																	<img src="../img/chair3.jpg" alt="iMac" width="80">
																</td>
																<td class="txt-dark">Square Chair</td>
																<td>
																<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="15" name="vertical-spin">
																</td>
																<td>$470</td>
																
																<td><a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete txt-danger"></i></a></td>
															</tr>
														</tbody>
													</table>
													<div class="form-actions pull-right pr-15">
														<a href="index.php?page_id=products"><button class="btn btn-success btn-anim mr-10 pull-left"><i class="fa fa-shopping-cart"></i><span class="btn-text">continue shopping</span></button></a>
													<a href="index.php?page_id=checkout">	<button class="btn btn-primary btn-anim pull-left"><i class="fa fa-sign-out"></i><span class="btn-text">checkout</span></button></a>
														<div class="clearfix"></div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Row -->
				
		    
		    <?php
		}
		
            	
            	
            		  		if ($_GET[page_id]=='productdetail')
		{
		    
		    $sql="select * from shopproducts where index_shopproducts=".$_GET[productid];
		    $sorgula=mysqli_query($connection,$sql);
		    
		    while($okut=mysqli_fetch_assoc($sorgula))
		    {
		    
		    ?>
		    
		    
		        
								
								
									
				<!-- Row -->
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="row">
										<div class="col-md-3">
											<div class="item-big">
												<!-- START carousel-->
												<div id="carousel-example-captions-1" data-ride="carousel" class="carousel slide">
													<ol class="carousel-indicators">
													   <li data-target="#carousel-example-captions-1" data-slide-to="0" class="active"></li>
													   <li data-target="#carousel-example-captions-1" data-slide-to="1"></li>
													   <li data-target="#carousel-example-captions-1" data-slide-to="2"></li>
													   <li data-target="#carousel-example-captions-1" data-slide-to="3"></li>
													</ol>
													<div role="listbox" class="carousel-inner">
													   <div class="item active"> <img src="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[machinepicture]); ?>" alt="First slide image"> </div>
													   <div class="item"> <img src="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[picture2]); ?>"" alt="Second slide image"> </div>
													     <div class="item"> <img src="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[picture3]); ?>"" alt="Third slide image"> </div>
												     <div class="item"> <img src="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[picture4]); ?>"" alt="Forth slide image"> </div>
												
													</div>
												</div>
												<!-- END carousel-->
											</div>
										</div>
											
										<div class="col-md-9">
											<div class="product-detail-wrap">
												<div class="product-rating inline-block mb-10">
													<a href="javascript:void(0);" class="zmdi zmdi-star"></a><a href="javascript:void(0);" class="zmdi zmdi-star"></a><a href="javascript:void(0);" class="zmdi zmdi-star"></a><a href="javascript:void(0);" class="zmdi zmdi-star"></a><a href="javascript:void(0);" class="zmdi zmdi-star-outline"></a>
												</div>
												<div class="average-review inline-block mb-10">&nbsp;(<span class="review-count">5</span> customer review)</div>
												<h3 class="mb-20 weight-500"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[packagename]); ?></h3>
												<div class="product-price head-font mb-30"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[machineprice]." ".$okut[currency]); ?></div>
												<p class="mb-50"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[shortdesc]); ?></p>
												
												<input class="vertical-spin" type="text" data-bts-button-down-class="btn btn-default"   data-bts-button-up-class="btn btn-default" value="1" name="vertical-spin">
												
												<div class="btn-group mr-10">
													<button class="btn btn-success btn-anim"><i class="fa fa-shopping-cart"></i><span class="btn-text">add to cart</span></button>
												</div>
												<div class="btn-group wishlist">
													<button class="btn btn-warning btn-outline btn-anim"><i class="icon-heart"></i><span class="btn-text">add to wishlist</span></button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Row -->
				
				<!-- Row -->
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default card-view">
								<div class="panel-wrapper collapse in">
									<div class="panel-body">
										<div  class="tab-struct custom-tab-1 product-desc-tab">
											<ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_7">
												<li class="active" role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="descri_tab" href="#descri_tab_detail"><span>Description</span></a></li>
												<li role="presentation" class="next"><a  data-toggle="tab" id="adi_info_tab" role="tab" href="#adi_info_tab_detail" aria-expanded="false"><span>Aditional information</span></a></li>
												<li role="presentation" class=""><a  data-toggle="tab" id="review_tab" role="tab" href="#review_tab_detail" aria-expanded="false"><span>Review<span class="inline-block">(<span class="review-count">0</span>)</span></span></a></li>
											</ul>
											<div class="tab-content" id="myTabContent_7">
												<div  id="descri_tab_detail" class="tab-pane fade active in pt-0" role="tabpanel">
													<p class="pt-15"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[definitions]); ?></p>
												</div>
												<div  id="adi_info_tab_detail" class="tab-pane pt-0 fade" role="tabpanel">
												
												
												<?php echo iconv( "ISO-8859-9","UTF-8",$okut[addinfo]); ?>
												
												</div>
												<div  id="review_tab_detail" class="tab-pane pt-0 fade" role="tabpanel">
													<p class="muted review-tag pt-15">No reviews yet.</p>
													<div class="row mt-40">
														<div class="col-sm-6">
															<div class="form-wrap">
																<form method="POST" action="sendreview.php">
																	<div class="form-group">
																		<label class="control-label mb-10" for="review">Your rating</label>
																		<div class='product-rating starrr' id='star1'></div>
																	</div>
																	<div class="form-group">
																		<label class="control-label mb-10" for="review">Your review</label>
																		<textarea class="form-control" id="review" placeholder="add review"></textarea>
																	</div>
																	<div class="row">
																		<div class="col-sm-6">
																			<div class="form-group">
																				<label class="control-label mb-10" for="exampleInputuname_2">User Name</label>
																				<input type="text" class="form-control" id="exampleInputuname_2" placeholder="Username"/>
																			</div>
																		</div>
																		<div class="col-sm-6">
																			<div class="form-group">
																				<label class="control-label mb-10" for="exampleInputEmail_2">Email address</label>
																				<input type="email" class="form-control" id="exampleInputEmail_2" placeholder="Enter email">
																			</div>
																		</div>
																	</div>
																		
																	<div class="form-group mb-0">
																		<button type="submit" class="btn btn-success  mr-10">Submit</button>
																	</div>
																</form>
															</div>
														</div>
													</div>
													</div>
											</div>
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Row -->
								
						
		    
		    
		    
		    <?php
		    }
		    
		    
		}
		
            	
            	
            	  		if ($_GET[page_id]=='products')
		{
		    ?>
		    
		    
		    
		          <!-- Row -->
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Shop Products</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
							
				
				<!-- Product Row One -->
				<div class="row">
				
				<?php
				$sql="select * from shopproducts";
				$sorgula=mysqli_query($connection,$sql);
				while($okut=mysqli_fetch_assoc($sorgula))
				{
				    ?>
				
       				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
						<div class="panel panel-default card-view pa-0">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<article class="col-item">
										<div class="photo">
										
											
											<a href="javascript:void(0);"> <img src="<?php echo $okut[machinepicture]; ?>" class="img-responsive" alt="Product Image" /> </a>
										</div>
										<div class="info">
											<h6><?php echo iconv( "ISO-8859-9","UTF-8",$okut[packagename]); ?></h6>
											<div class="product-rating inline-block">
												<a href="javascript:void(0);" class="font-12 txt-success zmdi zmdi-star mr-0"></a><a href="javascript:void(0);" class="font-12 txt-success zmdi zmdi-star mr-0"></a><a href="javascript:void(0);" class="font-12 txt-success zmdi zmdi-star mr-0"></a><a href="javascript:void(0);" class="font-12 txt-success zmdi zmdi-star mr-0"></a><a href="javascript:void(0);" class="font-12 txt-success zmdi zmdi-star-outline mr-0"></a>
											</div>
											<span class="head-font block text-warning font-16"><?php echo $okut[machineprice]." ".$okut[currency]; ?></span>
										<a href="index.php?page_id=productdetail&productid=<?php echo $okut[index_shopproducts]; ?>"><button type="button" class="btn btn-primary footable-add">Detail</button></a>
										</div>
									</article>
								</div>
							</div>	
						</div>	
					</div>	
					
					<?php
				}
				?>
										
				</div>	
					</div>	
						</div>	
							</div>	
								</div>	
									</div>	
		
		 
		 <?php
		    
		}
		
		
            	
            		if ($_GET[page_id]=='design')
		{
		    
		    
		  
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
										<h6 class="panel-title txt-dark">Bloklar---><?php echo $formbasligi; ?></h6>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0">
											<thead>
												<tr>
													<th>#</th>
													<th>Türü</th>
													<th>Sütun</th>
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
											    
											    $button="<button class=\"btn btn-default btn-icon-anim btn-square\"><i class=\"fa fa-pencil\"></i></button>";
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
													<td><?php echo $okut[sirasi]; ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[turu]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[kolonsayisi]); ?></td>
													<td><a href="index.php?page_id=design&tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $okut[bokindex]; ?>"><?php echo $button; ?></a></td>
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
										<h6 class="panel-title txt-dark">Tüm Alanlar---><?php echo $formbasligi; ?></h6>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0">
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
											$sql="select * from formalanlari where form_index=".$_GET[tasarimid]." order by alansirasi";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											?>
												<tr class="active">
													<td><?php echo $okut[alansirasi]; ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[alanyazisi]); ?></td>
													<td><?php echo $okut[alanadi]; ?></td>
													<td><a href="#aktarimyap" title="<?php echo $okut[alan_index]; ?>"><button class="btn btn-primary btn-icon-anim btn-square " title="<?php echo $okut[alan_index]; ?>"><i class="icon-arrow-right"></i></button></a></td>
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
										<table class="table table-hover mb-0">
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
											$sql="select * from bloklar_alti left join formalanlari on formalanlari.alan_index=bloklar_alti.alanindex where blokindex=".$idsecili." order by sirasi";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											?>
												<tr class="active">
													<td><?php echo $okut[alansirasi]; ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[alanyazisi]); ?></td>
													<td><?php echo $okut[alanadi]; ?></td>
													<td><a href="#alansil" title="<?php echo $okut[altindex]; ?>"><button class="btn btn-danger btn-icon-anim btn-square" title="<?php echo $okut[altindex]; ?>"><i class="icon-trash"></i></button></a></td>
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
		    
		    
		    <?php
		}
            	
            	
            	
            		if ($_GET[page_id]=='listings')
		{
		    
		    
		  
		     include 'baglanti.php';





$sorgulan="select * from formlar where `form_index`=$_GET[menu_id]";


$sorbanami=mysqli_query($connection,$sorgulan);


while ($okuspokus=mysqli_fetch_assoc($sorbanami))

{


$formtablosu=$okuspokus["tablosu"];	

$formbasligi=iconv( "ISO-8859-9","UTF-8",$okuspokus[formtanimi]);	
}
		    
		    
		    ?>
		    
		    
		    	
			
				
				<!-- Row -->
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark"><?php echo $formbasligi;?></h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="table-wrap">
										<div class="table-responsive">
										    
										    
										    	<div id="deletingrecord"  style="display:none">

                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>

                                <h4>Kayıt Siliniyor</h4>

                                <p>Kaydı silmek istediğinize emin misiniz?

								<button type="button" class="btn btn-danger mr5 mb10" id="yesdelete">Evet,eminim</button></p>

                            </div>
										
										
<?php										
$sorgulan="select * from formlar where form_index=$_GET[menu_id]";



$sorbanami=mysqli_query($connection,$sorgulan);



while ($okuspokus=mysqli_fetch_assoc($sorbanami))

{

	

$formtablosu=$okuspokus["tablosu"];	

$baglialan1=$okuspokus["baglialan1"];	

$formbasligi=iconv( "ISO-8859-9","UTF-8",$okuspokus[formtanimi]);	

$bagliformid=$okuspokus["bagliformindex"];	

$tarihalani=$okuspokus["tarihalani"];	

$altgrup=$okuspokus["altgrup"];	









if ($okuspokus["yenikayit"]=="False")

{

$islemyok="1";	

}


if ($_GET[menu_id]=='199')
{
    
    
    	echo "<select id=\"formsec\" name=\"formsec\" class=\"select2_category form-control\">";
    $sql="select * from formlar order by formtanimi asc";
    $sorgula=mysqli_query($connection,$sql);
    while($okut=mysqli_fetch_assoc($sorgula))
    {
  
    if ($_GET[tasarimid]==$okut[form_index])
    {
							echo "<option value=\"".$okut[form_index]."\" selected>";
										echo iconv( "ISO-8859-9","UTF-8",$okut[formtanimi]);
										echo "</option>";
    }
		
		  if ($_GET[tasarimid]!=$okut[form_index])
    {
							echo "<option value=\"".$okut[form_index]."\" >";
										echo iconv( "ISO-8859-9","UTF-8",$okut[formtanimi]);
										echo "</option>";
    }							
  
    }
    echo "</select><br>";
}
                
            ?>    										
										
									
											<table id="example" class="table table-hover display  pb-30"  >
												<thead>
												<tr>
												<a href="index.php?page_id=newrecord&menu_id=<?php echo $_GET[menu_id]; ?>&tasarimid=<?php echo $_GET[tasarimid]; ?>"><button type="button" class="btn btn-success footable-add" style="float:right;">Yeni Kayıt</button></a>
													<br>
												</tr>
											
												<tr>
									
<?php

//veritabanından listede görünecek form alanlarını getir.



if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}



$sorgula=mysqli_query($connection,$sqli);

$i=1;

while ($okun=mysqli_fetch_assoc($sorgula))

{	

    
    
    ?>
                                            
                                            <th><?php echo iconv( "ISO-8859-9","UTF-8",$okun[alanyazisi]);
                                            
                                            
                                            
                                            
                                            ?></th>
                                    
    <?php
}
?>
<?php
if ($islemyok=='')
{
?>
                                           <th>İşlem</th>
<?php
}
?>
                                             
                                        </tr>									
									
									
									
												</thead>
												
												<tbody>
													
													
													
														<?php



$sqly="select * from formlar where form_index=$_GET[menu_id]";





												$sorbeni=mysqli_query($connection,$sqly);



												while ($okun_1=mysqli_fetch_assoc($sorbeni))

												{

													

													if ($okun_1[where]=="")

													{

													$sorgusu="select * from $okun_1[tablosu]";

													}

													

													

													if ($okun_1[where]!="")

													{

													$sorgusu="select * from $okun_1[tablosu] where $okun_1[where]";

													}

													

													

													if ($okun_1[sorgu2]!="")

													{

													$islemler=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgu2]);

												   

													}

													

													if ($okun_1[islemmenu]!="")

													{

													$islemmenu=iconv( "ISO-8859-9","UTF-8",$okun_1[islemmenu]);

												   

													}



$grup=$okun_1[where];

$sorgusu=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgusu]);







if ((($_SESSION["kullanicituru"]=="rentacar")||($_SESSION["kullanicituru"]=="sadeceharita")||($_SESSION["kullanicituru"]=="resmikurumlar"))&&$_GET[menu_id]!="65"&&$_GET[menu_id]!="87")

{

	

if (strpos($sorgusu, 'where') == "") 

{

	$sorgusu=$sorgusu." where ".$okun_1[baglialan1]."='".$_SESSION["user_id"]."'";

}






	

	

}





 if ($_GET["kuryeid"]!=""&&$okun_1["tablosu"]=="talimat")

													{

$sorgusu=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgusu]." and kuryeGSM='".$_GET["kuryeid"]."'");

														

													}

													

													if ($_SESSION["firmakodu"]!=""&&($okun_1["tablosu"]=="paketlerimson"||$okun_1["tablosu"]=="paketlerimson2"))

													{

$sorgusu=iconv( "ISO-8859-9","UTF-8",$okun_1[sorgusu]." and firmaid='".$_SESSION["firmakodu"]."'");

														

													}

$tablosu=$okun_1[tablosu];												

													

													$sqlcs="SHOW INDEX FROM $okun_1[tablosu] WHERE Key_name = 'PRIMARY'";

													

													$sorcun=mysqli_query($connection,$sqlcs);

													

													while ($yokn=mysqli_fetch_assoc($sorcun))

													{

														

														$anahtars=$yokn[Column_name];

														

														

													}

												}



					



													



if ($_SESSION["kullanicituru"]=="bayi"&&($formtablosu=="firmalar"||$formtablosu=="altkullanicilar"))

{

	$sorgusu=$sorgusu." and firmalar.bayiid='".$_SESSION["user_id"]."'";

}


if ($_POST["secilenplakas"]!="")

{

	$sorgusu=$sorgusu." and gunkm.plakano='".$_POST["secilenplakas"]."'";

}





if ($_SESSION["kullanicituru"]=="bayi"&&($formtablosu=="hatlar"))

{

	$sorgusu=$sorgusu." and bayiid='".$_SESSION["user_id"]."'";

}



if ($_SESSION["kullanicituru"]=="bayi"&&($formtablosu=="smsgonderims"))

{

	$sorgusu=$sorgusu." and firmaid='".$_SESSION["kullanicituru"].$_SESSION["user_id"]."'";

}






if ($tarihalani!=''&&$_GET[filtreturu]=='')
{
    $filtre=$filtre." and month(".$tarihalani.")=month(CURRENT_DATE) and year(".$tarihalani.")=year(CURRENT_DATE)";
    
}


if ($_GET["ilktarih"]!=""||$_GET[filtreturu]!='')

{

	$filtre=$filtre." and (".$tarihalani.">='".$ilktarih."' and ".$tarihalani."<='".$sontarih."') ";

}

if ($_GET["menu_id"]=="199"&&$_GET[tasarimid]!='')

{

	$filtre=$filtre." and (form_index>=$_GET[tasarimid])";

}







$sorsana=mysqli_query($connection,$sorgusu.$filtre.$grup);		


$i=0;	



if (mysqli_num_rows($sorsana)==0)

{



if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}



$sorgula=mysqli_query($connection,$sqli);

$i=1;



while ($okun=mysqli_fetch_assoc($sorgula))

{	

?>								

			



			

                                              <td></td>

                                      											

                                            

								

<?php

}		

  



  if ($islemyok=="")

{

echo "<td></td>";

}

  

?>

	

 

	

<?php	

}





while ($okun=mysqli_fetch_assoc($sorsana))

{

													

					echo "<tr title=\"".$_GET[menu_id]."+".$okun[$anahtars]."+".$anahtars."\" name=\"".$anahtars."\">";

	





				//veritabanından listede görünecek form alanlarını getir.

if ($bagliformid=="")

{

$sqlim="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqlim="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}







$sorgulalan=mysqli_query($connection,$sqlim);

				

while ($okun2=mysqli_fetch_assoc($sorgulalan))

{

	

	

$alanveri=$okun2[alanadi];

$turu=$okun2[verigiristuru];

 

$veri=iconv( "ISO-8859-9","UTF-8",$okun[$alanveri]);




if ($turu=="Date")

{

$originalDate = $veri;

$newDate = date("d.m.Y", strtotime($originalDate));

	

echo "<td>

										 $newDate

									</td>";

}









if ($turu!="File(PDF)"&&$turu!="File(PNG)"&&$turu!="File(JPG)"&&$turu!="Friend"&&$turu!="Adres"&&$turu!="Date"&&$turu!="Bakiye")

{

if ($alanveri!='siparisdurumu')
{
echo "<td>

										 $veri";
								     
    if ($_GET[menu_id]=='199')
    {

                                              if ($okun[ozelnot]!=''&&$alanveri=='musteriadi')
                                              {
                                                  ?>
                                                  <img src="icons/no.png" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okun[ozelnot]); ?>" style="width:32px;height:32px">
                                                  <?php
                                              }
                                          
    }
										 
										 

									echo "</td>";
}


if ($alanveri=='siparisdurumu')
{
    if ($veri=='Hazırlanıyor')
    {
echo "<td style=\"background-color:#009900\">

										 $veri

									</td>";
    }
    
    
    
     if ($veri=='Onaylandı')
    {
echo "<td style=\"background-color:#39f\">

										 $veri

									</td>";
    }
    
    
    
    
     if ($veri=='Onay Bekliyor')
    {
echo "<td style=\"background-color:#FFF000\">

										 $veri

									</td>";
    }
    
     if ($veri=='Havale Bekliyor')
    {
echo "<td style=\"background-color:#dddddd\">

										 $veri

									</td>";
    }
    
     if ($veri=='Teslim Edildi')
    {
echo "<td style=\"background-color:#666\">

										 $veri

									</td>";
    }
    
    
    
      if ($veri=='İade')
    {
echo "<td style=\"background-color:#e67e22\">

										 $veri

									</td>";
    }
    
    
    
   
    if ($veri=='Kargoya Verildi')
    {
echo "<td style=\"background-color:#3366FF\">

										 $veri

									</td>";
    }
    else
    {
        ?>
        
        <?php
    }
}

}







if ($turu=="Bakiye")

{

$bakiye=$bakiye+($okun[borc]-$okun[alacak]);

echo "<td><div align=\"right\">

										 $bakiye</div>

									</td>";

}





if ($turu=="File(JPG)"||$turu=="File(PNG)"||$met[verigiristuru]=='File(GIF)'||$met[verigiristuru]=='File(MP4)')

{

echo "<td>";



 echo "<a href=\"".$veri."\" target=\"_blank\">

                                <img src=\"".$veri."\" alt=\"\" height=\"50px\" class=\"image\" />

                                
                                

                            </a></td>";

}


if ($turu=="File(PDF)")

{

echo "<td>";



 echo "<a href=\"".$veri."\" target=\"_blank\">

                                <img src=\"pdficon.png\" alt=\"\" class=\"image\" />

                                <span class=\"txt\">Dosya Göster</span>

                                

                            </a></td>";

}





if ($turu=="Adres")

{

echo "<td>";	


if ($_POST['adresgetir']=='on')
{
	
	if ($okun[konumx].",".$okun[konumy]!=$sonkonum)
	{
	$sonkonum=$okun[konumx].",".$okun[konumy];
	$sonadres=getAddress($okun[konumx],$okun[konumy]);
	}

echo "<div><a href=\"https://www.google.com/maps/?q=".$okun[konumx].",".$okun[konumy]."\" target=\"_blank\">".$sonadres."</a></div>";

	
}

if ($_POST['adresgetir']!='on')
{
echo "<div><a href=\"https://www.google.com/maps/?q=".$okun[konumx].",".$okun[konumy]."\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary mr5 mb5\" title=\"\">Haritada Gör</button></a></div>";
}

echo "</td>";	



}



if ($turu=="Friend")

{

	echo "<td>";

	if ($veri=='')

	{

		echo "<div id=\"islemicerik_".$okun[$anahtars]."\">";

		

		$sqlyes="select * from firmalar where index_firmalar=".$_SESSION[user_id];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$ilim=$sehiroku[faturaili];

		}

		

			$sqlyes="select * from firmalar where index_firmalar=".$okun[$anahtars];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$firmaili=$sehiroku[faturaili];

		}

		

		

		

		if ($ilim==$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"istekgonder\">İstek Gönder</button></div>";

        }

		

		if ($ilim!=$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-default mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"mesajgonder\">Mesaj Gönder</button></div>";

        }



 	

	echo "<div id=\"gerial_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"gerial_".$okun[$anahtars]."\" title=\"gerial\">Geri Al</button></div>";

	

echo "<div id=\"onaybekle_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<table><tr><td><button type=\"button\" class=\"btn btn-danger mr5 mb10\" id=\"reddet_".$okun[$anahtars]."\" title=\"reddet\">Reddet</button><td><td><button type=\"button\" class=\"btn btn-success mr5 mb10\" id=\"onayla_".$okun[$anahtars]."\" title=\"onayla\">Onayla</button></td></tr></table></div>";

	

	}

	

	 

	

	if ($veri=='Onay Bekliyor'&&$okun[gonderen]==$_SESSION[user_id])

	{

		

		

		echo "<div id=\"islemicerik_".$okun[$anahtars]."\" style=\"display: none;\">";



 echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"istekgonder\">İstek Gönder</button></div>";

	

	echo "<div id=\"gerial_".$okun[$anahtars]."\">";



  echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"gerial_".$okun[$anahtars]."\" title=\"gerial\">Geri Al</button></div>";

	

echo "<div id=\"onaybekle_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<table><tr><td><button type=\"button\" class=\"btn btn-danger mr5 mb10\" id=\"reddet_".$okun[$anahtars]."\" title=\"reddet\">Reddet</button><td><td><button type=\"button\" class=\"btn btn-success mr5 mb10\" id=\"onayla_".$okun[$anahtars]."\" title=\"onayla\">Onayla</button></td></tr></table></div>";

	

	}

	

	

	if ($veri=='Onay Bekliyor'&&$okun[gonderen]!=$_SESSION[user_id])

	{

		

		$sqlyes="select * from firmalar where index_firmalar=".$_SESSION[user_id];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$ilim=$sehiroku[faturaili];

		}

		

			$sqlyes="select * from firmalar where index_firmalar=".$okun[$anahtars];

		$sorcum=mysqli_query($connection,$sqlyes);

		while ($sehiroku=mysqli_fetch_assoc($sorcum))

		{

			$firmaili=$sehiroku[faturaili];

		}

		

		

		echo "<div id=\"islemicerik_".$okun[$anahtars]."\" style=\"display: none;\">";



		if ($ilim==$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"istekgonder\">İstek Gönder</button></div>";

		}

		

		if ($ilim!=$firmaili)

		{

 echo "<button type=\"button\" class=\"btn btn-default mr5 mb10\" id=\"facebook_".$okun[$anahtars]."\" title=\"mesajgonder\">Mesaj Gönder</button></div>";

		}

		

	echo "<div id=\"gerial_".$okun[$anahtars]."\" style=\"display: none;\">";



  echo "<button type=\"button\" class=\"btn btn-primary mr5 mb10\" id=\"gerial_".$okun[$anahtars]."\" title=\"gerial\">Geri Al</button></div>";

	

echo "<div id=\"onaybekle_".$okun[$anahtars]."\">";

 echo "<table><tr><td><button type=\"button\" class=\"btn btn-danger mr5 mb10\" id=\"reddet_".$okun[$anahtars]."\" title=\"reddet\">Reddet</button><td><td><button type=\"button\" class=\"btn btn-success mr5 mb10\" id=\"onayla_".$okun[$anahtars]."\" title=\"onayla\">Onayla</button></td></tr></table></div>";



	}

	

	echo "</td>";

	



}



}	

?>							

	



<?php

if ($islemyok=="")

{

	?>

 <td>

 

 <?php

 

 

 if ($islemmenu!="")

 {

	 

	



echo str_replace("tutars",$okun[odenecek],str_replace("kayitidsi",$okun[$anahtars],$islemmenu));	 

	 

 }

 

 if ($islemmenu=="")

 {

 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{

?>

  <a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>

 
  <?php
  
  if ($_GET[menu_id]=='160'&&$okun[siparisdurumu]=='Teslim Edildi'&&$okun[yeniteslim]=='')
  {
      ?>
      
      <a href="#" id="recordid=<?php echo $okun[$anahtars]."_".$okun[fatura_telno]; ?>" class="whatsapp" title="Teslim" data-original-title="Whatsapp"><i class="s12 icomoon-icon-mobile"></i></a>
      
      <?php
      
  }

  ?>

<?php


if ($_SESSION['yeniharita']=='E')
{
 if ($tablosu=="firmalar"&&($_SESSION["user_id"]=="1"||$_SESSION["kullanicituru"]=="bayi"))

													{

														?>

														  <a href="ymap/index.php?izlemci_id=<?php echo $okun[$anahtars]; ?>" target="_blank" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-map"></i>Harita</a>

  

														<?php

													}
}



if ($_SESSION['yeniharita']!='E')
{
 if ($tablosu=="firmalar"&&($_SESSION["user_id"]=="1"||$_SESSION["kullanicituru"]=="bayi"))

													{

														?>

														  <a href="ototakip/index.php?izlemci_id=<?php echo $okun[$anahtars]; ?>" target="_blank" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-map"></i>Harita</a>

  

														<?php

													}
}



}



if ($bagliformid!=""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{

	?>

	

  <a href="index.php?page_id=editrecord&menu_id=<?php echo $bagliformid; ?>&recordid=<?php echo $okun[$anahtars]; ?>" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-pencil"></i></a>

  <?php

}

 

 ?>

 

  

 <?php

 if ($tablosu=='paketlerimson') 

 {  



if ($okun["durumum"]=="Beklemede"||$_SESSION["oturumturu"]!="isletme"&&$islemyok=="")

{

 ?>	  

		  

		  

                    <a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>

<?php

  }

 }



 if ($tablosu!='paketlerimson'&&$islemyok=="") 

 {  

 ?>	  

		  

                    <a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>

<?php

  }

 ?>

 

 <?php

 if ($tablosu=='adresdefteri'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=yenikayit&menu_id=54&adresid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  title="Kurye Çağır"><i class="s12 icomoon-icon-basket"></i></a>

 <?php

 } 

 ?>

 

 <?php

 if ($tablosu=='talimat'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=talimatharitasi&talimatid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Kurye Çağır"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 

  <?php

 if ($tablosu=='paketlerimson'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=paketharitasi&paket_id=<?php echo $okun["paketkodu"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Paket Haritası"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 

  <?php

 if ($tablosu=='cariler'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=altsayfa&menu_id=169&recordid=<?php echo $okun["cariindex"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Hesap Kartı"><button type="button" class="btn btn-default">Hesap Kartı</button></a>

 <?php

 } 

 ?>

 

  <?php

 if ($tablosu=='kuryeler'&&$islemyok=="") 

 {

?>	 

 <a href="index.php?page_id=altsayfa&menu_id=75&kuryeid=<?php echo $okun["personelkodu"]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  data-original-title="Kurye Çağır"><i class="s12 icomoon-icon-map"></i></a>

 <?php

 } 

 ?>

 

 </td>

 <?php

}

}

?> 

	

<?php											

				echo "</tr>";									

							}



?>		

							

									

											

											

                                          

													
													
												</tbody>
											
											
											
										
											</table>
											<?php
}
?>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<!-- /Row -->
				
		    
		   <?php
		}
		
		
		if ($_GET[page_id]=='')
		{
		    
		    if ($_SESSION[yetkilituru]=='Admin')
		    {
		        $member_count=mysqli_num_rows(mysqli_query($connection,'select * from uyeler'));
		    }
		    
		    
		      if ($_SESSION[yetkilituru]!='Admin')
		    {
		        $member_count=mysqli_num_rows(mysqli_query($connection,"select * from uyeler where postakodu='".$_SESSION[adi]."'"));
		    }
		    
		    
            ?>
				<!-- Row -->
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim"><?php echo $member_count+0; ?></span></span>
													<span class="weight-500 uppercase-font block font-13 txt-light">Team members</span>
												</div>
												<div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right">
													<i class="icon-people  data-right-rep-icon txt-light"></i>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim">3</span></span>
													<span class="weight-500 uppercase-font block txt-light">packages</span>
												</div>
												<div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right">
													<i class="icon-envelope-letter data-right-rep-icon txt-light"></i>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-left">
													<span class="block counter"><span class="counter-anim">200</span>$</span>
													<span class="weight-500 uppercase-font block">total income</span>
												</div>
												<div class="col-xs-6 text-center  pl-0 pr-0 txt-light data-wrap-right">
													<i class=" icon-book-open data-right-rep-icon"></i>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim">46.43</span> $</span>
													<span class="weight-500 uppercase-font block txt-light">total balance</span>
												</div>
												<div class="col-xs-6 text-center  pl-0 pr-0 pt-25  data-wrap-right">
													<div id="sparkline_4" class="sp-small-chart" ></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
				<!-- Row -->
				<div class="row">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Online Users</h6>
								</div>
								<div class="pull-right">
									<a href="#" class="pull-left inline-block full-screen mr-15">
										<i class="zmdi zmdi-fullscreen"></i>
									</a>
									<div class="pull-left inline-block dropdown">
										<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" role="button"><i class="zmdi zmdi-more-vert"></i></a>
										<ul class="dropdown-menu bullet dropdown-menu-right"  role="menu">
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i>Devices</a></li>
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-share" aria-hidden="true"></i>General</a></li>
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-trash" aria-hidden="true"></i>Referral</a></li>
										</ul>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div id="e_chart_3" class="" style="height:330px;"></div>
								</div>
							</div>
						</div>
					</div>
				
					<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
						<div class="panel panel-default card-view panel-refresh">
							<div class="refresh-container">
								<div class="la-anim-1"></div>
							</div>
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Total Members</h6>
								</div>
								<div class="pull-right">
									<a href="#" class="pull-left inline-block refresh mr-15">
										<i class="zmdi zmdi-replay"></i>
									</a>
									<div class="pull-left inline-block dropdown">
										<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" role="button"><i class="zmdi zmdi-more-vert"></i></a>
										<ul class="dropdown-menu bullet dropdown-menu-right"  role="menu">
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i>Düzenle</a></li>
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
											<li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-trash" aria-hidden="true"></i>New</a></li>
										</ul>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
							
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div id="e_chart_1" class="" style="height:242px;"></div>
									<div class="label-chatrs mt-15">
										<div class="mb-5">
											<span class="clabels inline-block bg-blue mr-5"></span>
											<span class="clabels-text font-12 inline-block txt-dark capitalize-font">Asistance</span>
										</div>
										<div class="mb-5">
											<span class="clabels inline-block bg-pink mr-5"></span>
											<span class="clabels-text font-12 inline-block txt-dark capitalize-font">Manager</span>
										</div>
										<div class="">
											<span class="clabels inline-block bg-light-blue mr-5"></span>
											<span class="clabels-text font-12 inline-block txt-dark capitalize-font">General</span>
										</div>										
									</div>
								</div>
							</div>
						</div>
					</div>
					
				<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Performance Metrics</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div  class="panel-body">
									<span class="font-12 head-font txt-dark">Turnover<span class="pull-right">85%</span></span>
									<div class="progress mt-10 mb-30">
										<div class="progress-bar progress-bar-info" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%" role="progressbar"> <span class="sr-only">85% Complete (success)</span> </div>
									</div>
									<span class="font-12 head-font txt-dark">Income Ratio<span class="pull-right">80%</span></span>
									<div class="progress mt-10 mb-30">
										<div class="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 80%" role="progressbar"> <span class="sr-only">85% Complete (success)</span> </div>
									</div>
									<span class="font-12 head-font txt-dark">Usage Ratio<span class="pull-right">70%</span></span>
									<div class="progress mt-10 mb-30">
										<div class="progress-bar progress-bar-danger" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 70%" role="progressbar"> <span class="sr-only">85% Complete (success)</span> </div>
									</div>
									<span class="font-12 head-font txt-dark">Member Rank<span class="pull-right">45%</span></span>
									<div class="progress mt-10 mb-30">
										<div class="progress-bar progress-bar-inverse" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 45%" role="progressbar"> <span class="sr-only">85% Complete (success)</span> </div>
									</div>
									<span class="font-12 head-font txt-dark">Performance<span class="pull-right">80%</span></span>
									<div class="progress mt-10 mb-30">
										<div class="progress-bar progress-bar-success" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%" role="progressbar"> <span class="sr-only">80% Complete (success)</span> </div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<!-- /Row -->
				
				<!-- Row -->
				<div class="row">
					
					<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
						<div class="panel panel-default card-view panel-refresh">
							<div class="refresh-container">
								<div class="la-anim-1"></div>
							</div>
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Earning Churn </h6>
								</div>
								<div class="pull-right">
									<a href="#" class="pull-left inline-block refresh">
										<i class="zmdi zmdi-replay"></i>
									</a>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div id="e_chart_2" class="" style="height:330px;"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
							<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Team Members</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body row pa-0">
									<div class="table-wrap">
										<div class="table-responsive">
											<table class="table display product-overview border-none" id="employee_table">
												<thead>
													<tr>
														<th>Member ID</th>
														<th>Username</th>
														<th>Rank</th>
														<th>Date</th>
														<th>Status</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>#85457896</td>
														<td>Anthony Davie</td>
														<td>Manager</td>
														<td>Oct 25</td>
														<td>
															<span class="label label-success ">Running</span>
														</td>
														<td><a href="javascript:void(0)" class="pr-10" data-toggle="tooltip" title="completed" ><i class="zmdi zmdi-check"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete"></i></a></td>
													</tr>
													<tr>
														<td>#85457895</td>
														<td>David Perry</td>
														<td>Asistance</td>
														<td>Oct 25</td>
														<td>
															<span class="label label-danger">No Order</span>
														</td>
														<td><a href="javascript:void(0)" class="pr-10" data-toggle="tooltip" title="completed" ><i class="zmdi zmdi-check"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete"></i></a></td>
													</tr>
													<tr>
														<td>#85457896</td>
														<td>Anthony Davie</td>
														<td>General</td>
														<td>Oct 25</td>
														<td>
															<span class="label label-success ">Running</span>
														</td>
														<td><a href="javascript:void(0)" class="pr-10" data-toggle="tooltip" title="completed" ><i class="zmdi zmdi-check"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete"></i></a></td>
													</tr>
													<tr>
														<td>#85457894</td>
														<td>Davie</td>
														<td>Asistance</td>
														<td>Oct 25</td>
														<td>
															<span class="label label-success ">Running</span>
														</td>
														<td><a href="javascript:void(0)" class="pr-10" data-toggle="tooltip" title="completed" ><i class="zmdi zmdi-check"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete"></i></a></td>
													</tr>
													<tr>
														<td>#85457896</td>
														<td>Anthony</td>
														<td>Manager</td>
														<td>Nov 25</td>
														<td>
															<span class="label label-success ">Running</span>
														</td>
														<td><a href="javascript:void(0)" class="pr-10" data-toggle="tooltip" title="completed" ><i class="zmdi zmdi-check"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete"></i></a></td>
													</tr>
													<tr>
														<td>#85457898</td>
														<td>Anthony Davie</td>
														<td>General</td>
														<td>Dec 25</td>
														<td>
															<span class="label label-success ">Running</span>
														</td>
														<td><a href="javascript:void(0)" class="pr-10" data-toggle="tooltip" title="completed" ><i class="zmdi zmdi-check"></i></a> <a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="zmdi zmdi-delete"></i></a></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>	
								</div>	
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
						<?php
		}
		?>
			</div>
			
	
			
			<!-- Footer -->
			<footer class="footer container-fluid pl-30 pr-30">
				<div class="row">
					<div class="col-sm-12">
						<p>2020 &copy; Circle360, Antakya, Yetişen Kauçuk</p>
					</div>
				</div>
			</footer>
			<!-- /Footer -->
			
		</div>
        <!-- /Main Content -->

    </div>
    <!-- /#wrapper -->
	
	<!-- JavaScript -->
	
    <!-- jQuery -->
    <script src="../vendors/bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    
	<!-- Data table JavaScript -->
	<script src="../vendors/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
	
	
		<script src="../vendors/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
	<script src="../vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
	<script src="../vendors/bower_components/datatables.net-buttons/js/buttons.flash.min.js"></script>
	<script src="../vendors/bower_components/jszip/dist/jszip.min.js"></script>
	<script src="../vendors/bower_components/pdfmake/build/pdfmake.min.js"></script>
	<script src="../vendors/bower_components/pdfmake/build/vfs_fonts.js"></script>
	
	<script src="../vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js"></script>
	<script src="../vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js"></script>
	<script src="dist/js/export-table-data.js"></script>
	
	<!-- Slimscroll JavaScript -->
	<script src="dist/js/jquery.slimscroll.js"></script>
	
	<!-- simpleWeather JavaScript -->
	<script src="../vendors/bower_components/moment/min/moment.min.js"></script>
	<script src="../vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js"></script>
	<script src="dist/js/simpleweather-data.js"></script>
	
	<!-- Progressbar Animation JavaScript -->
	<script src="../vendors/bower_components/waypoints/lib/jquery.waypoints.min.js"></script>
	<script src="../vendors/bower_components/jquery.counterup/jquery.counterup.min.js"></script>
	
	<!-- Fancy Dropdown JS -->
	<script src="dist/js/dropdown-bootstrap-extended.js"></script>
	
	<!-- Sparkline JavaScript -->
	<script src="../vendors/jquery.sparkline/dist/jquery.sparkline.min.js"></script>
	
	<!-- Owl JavaScript -->
	<script src="../vendors/bower_components/owl.carousel/dist/owl.carousel.min.js"></script>
	
	<!-- Toast JavaScript -->
	<script src="../vendors/bower_components/jquery-toast-plugin/dist/jquery.toast.min.js"></script>
	
	<!-- EChartJS JavaScript -->
	<script src="../vendors/bower_components/echarts/dist/echarts-en.min.js"></script>
	<script src="../vendors/echarts-liquidfill.min.js"></script>
	
	<!-- Switchery JavaScript -->
	<script src="../vendors/bower_components/switchery/dist/switchery.min.js"></script>
	
	<!-- Init JavaScript -->
	<script src="dist/js/init.js"></script>
	<script src="dist/js/dashboard-data.js"></script>
	
		<!-- Product Checkout Data JavaScript -->
		<script src="dist/js/product-checkout-data.js"></script>
		
	<!-- Bootstrap Touchspin JavaScript -->
		<script src="../vendors/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
		
		<!-- Owl JavaScript -->
		<script src="../vendors/bower_components/owl.carousel/dist/owl.carousel.min.js"></script>
	

	<!-- Data table JavaScript -->

	<script src="dist/js/dataTables-data.js"></script>
	
	
			<script src="../vendors/bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>		
		
		<!-- Form Wizard JavaScript -->
		<script src="../vendors/bower_components/jquery.steps/build/jquery.steps.min.js"></script>
		
	
	
	<script>


$(document).ready(function() {
 var formum="";
  var kaydim="";
  
  
  $('a[href="#aktarimyap"]').on('click',function(){

var id=this.title;

 if (confirm('Bloğa aktarım yapılsın mı?')) 
    {
    
    
      $.ajax( {

      url: 'aktarimyap.php?id='+id+'&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

	location.reload();
			  

	



           }

    } );

    }
    
    });
    
     $('a[href="#alansil"]').on('click',function(){


var id=this.title;

 if (confirm('Alan bloktan silinsin mi?')) 
    {
    
    
 
    $.ajax( {

      url: 'alansil.php?id='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

	location.reload();
			  

	



           }

    } );
    

    }
    
    });



  
  
   $( ".degistir" ).on('click',function(){
      
 
      var idsi=this.id;
        var res = idsi.split("_");
    
      
      formum=this.title;
      kaydim=res[2];
      
      
     
    
      $.ajax( {

      url: 'kayitduzenle.php?page_id=kayitduzenle&menu_id='+res[1]+'&kayitid='+res[2]+'&mastervalue=<?php echo $_GET[recordid]; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

		 $('#yeniformicerik_'+res[1]).html(data);
      
   $('#yenisatirModal_'+res[1]).modal('show');

			  

	



           }

    } );
  
   } );
   
   
    $( ".satirduzelt" ).on('click',function(){
      
      var titles=this.title;
      
      
       var res = titles.split("_");
    
      
      
      formum=this.title;
      kaydim="";
      
      
     
    
      $.ajax( {

      url: 'kayitduzenle.php?page_id=yenikayit&menu_id='+res[0]+'&mastervalue=<?php echo $_GET[recordid]; ?>&kayitid='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			  

		 $('#yeniformicerik_'+titles).html(data);
      

			  

	



           }

    } );
			  
      
      
     $('#yenisatirModal_'+res[0]).modal('show');

      });
   
  $( ".yenisatir" ).on('click',function(){
      
      var titles=this.title;
      
      formum=this.title;
      kaydim="";
      
      
     
    
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id='+titles+'&mastervalue=<?php echo $_GET[recordid]; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			  

		 $('#yeniformicerik_'+titles).html(data);
      

			  

	



           }

    } );
			  
      
      
     $('#yenisatirModal_'+titles).modal('show');

      });
    
      $( "#formsec" ).on('change',function(){
      
      
     window.location = "index.php?page_id=listings&menu_id=199&tasarimid="+$(this).val();
      });
    
    
var recordidim='';



  $("#tabloolustur").on('click',function(){


 $.ajax( {

      url: 'tabloolustur.php?formid=<?php echo $_GET[recordid]; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			  

		alert('Tablo Oluşturuldu');

			  

	



           }

    } );


});

  $( "#yesdelete" ).on('click',function(){

  // Holds the product ID of the clicked element

  

  $.ajax( {

      url: 'deleterecord.php?'+recordidim,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			  

			

			$( "#deletingrecord" ).hide( "slow", function() {

  

			 setTimeout(explode, 2000);

 

            });

			  

	



           }

    } );

	

  

  





  

});
    
    
      $(".close").click(function(){

  // Holds the product ID of the clicked element

  



 

$( "#deletingrecord" ).hide( "slow", function() {

    // Animation complete.

  });

$( "#kayitbasarili" ).hide( "slow", function() {

    // Animation complete.

  });
  
  $( "#kayitduzenlemesi" ).hide( "slow", function() {

    // Animation complete.

  });

  

});
    
      $("#example").on("click",".tip",function(){

  // Holds the product ID of the clicked element


  

  var productId = $(this).attr('id');



  

recordidim=this.id;



$( "#deletingrecord" ).show( "slow", function() {

    // Animation complete.

  });



  

});
    
 
  
  
  $(document).on("click",".kaydet",function(){
   

  
	     var formData = new FormData($("#satirdetayformu")[0]);
	     
	  
	 	$.ajax( {

      url: 'sender.php?form_id='+formum+'&kayitid='+kaydim,

      type: 'POST',

      data:formData,

      processData: false,

      contentType: false,

	   success: function(data)

           {

location.reload();
	  


}
  });
  
	    
         
	 
	});
	     
  
  
    
   $( '#kayitformu' )

  .submit( function( e ) {
      

  

	  $( "#kayitformu" ).hide( "slow", function() {

    // Animation complete.

  });
  
  
  
  //tinyMCE.triggerSave();

	   var url = "sender.php?form_id=<?php 

	 

	 

	 	if ($_GET[menu_id]!="")

	{

	echo $_GET[menu_id]."&username=".$_SESSION["username"]; 	

	}

	

	if ($_GET[menu_id]=="")

	{

	echo "36&username=".$_SESSION["username"]; 	

	}

	echo "&recordid=".$_GET[recordid];   

	   

	   ?>"; // the script where you handle the form input.

		$.ajax( {

      url: url,

      type: 'POST',

      data:new FormData(this),

      processData: false,

      contentType: false,

	   success: function(data)

           {
var deger=data;

if (deger.trim()=='Hata1')
{


$('#basicModal').modal('show');

}
else
{

			  //$('#kayitformuicerik').html(data);
			  
			  $('#basariliModal').modal('show');
			  
			  
			  

}

			  

			  <?php
			  
			   if ($_GET[menu_id]=='220')

			  {
				  ?>
				  
   window.setTimeout(function() {
       window.location = "index.php";	
      }, 2000);

				  <?php
			  }

			  if ($_GET[islem]=='1z')

			  {

			?>	 



window.location = "index.php";			

			

<?php			

			  }

			?>

	



           }

    } );

	
	
	
  $( "#kayitformu" ).show( "slow", function() {

    // Animation complete.

  });
  
	
$(window).scrollTop(0);


    e.preventDefault();

  } );





		

		function explode(){

		

		location.reload();

		}
    
    
});
	
	
	</script>
	



	
</body>

</html>

    
<?php    
}



?>
