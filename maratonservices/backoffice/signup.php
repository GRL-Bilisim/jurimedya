<?php


include 'baglanti.php';

$sql="select * from systemsettings";
$sorgula=mysqli_query($connection,$sql);

while ($oku=mysqli_fetch_assoc($sorgula))

{
 $logo=$oku[logo];   
    
}


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
					<a href="index.html">
						<img class="brand-img mr-10" src="<?php echo $logo; ?>" alt="brand"/>
						<span class="brand-text"></span>
					</a>
				</div>
				<div class="form-group mb-0 pull-right">
					<span class="inline-block pr-10">Kayıtlı bir kullanıcı mısınız?</span>
					<a class="inline-block btn btn-primary btn-rounded" href="index.php">Giriş Yap</a>
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
											<h3 class="text-center txt-dark mb-10">Circle 360 Kayıt Sayfası</h3>
											<h6 class="text-center nonecase-font txt-grey">Gerekli bilgileri doldurun</h6>
										</div>	
										<div class="form-wrap">
											<form action="index.php" method="POST">
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputName_1">Kullanıcı adı/Gerçek Adınız</label>
													<input type="email" name="register_username" class="form-control" required id="exampleInputName_1" placeholder="Kullanıcı Adı Giriniz">
												</div>
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">E-posta Adresi</label>
													<input type="email" name="register_email" class="form-control" required id="exampleInputEmail_2" placeholder="E-posta giriniz">
												</div>
												<div class="form-group">
													<label class="pull-left control-label mb-10" for="exampleInputpwd_2">Şifre Girin</label>
													<input type="password" name="register_password" class="form-control" required id="exampleInputpwd_2" placeholder="Güçlü bir şifre oluşturun">
												</div>
												<div class="form-group">
													<label class="pull-left control-label mb-10" for="exampleInputpwd_3">Şifreyi Doğrula</label>
													<input type="password" name="register_password_again" class="form-control" required id="exampleInputpwd_3" placeholder="Şifreyi tekrar giriniz">
												</div>
												
												
												
												
													
												
												<div class="form-group">
													<div class="checkbox checkbox-primary pr-10 pull-left">
														<input id="checkbox_2" required="" type="checkbox">
														<label for="checkbox_2"> Kullanım Koşullarını kabul ediyorum. Üyeliğim oluşturulduktan sonra benimle iletişime geçilmesini onaylıyorum. <span class="txt-primary">Kullanım Koşulları için tıklayın</span></label>
													</div>
													<div class="clearfix"></div>
												</div>
												<div class="form-group text-center">
													<button type="submit" class="btn btn-primary btn-rounded">Kayıt Ol</button>
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
