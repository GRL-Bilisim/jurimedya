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
			<!-- Main Content -->
			<div class="page-wrapper pa-0 ma-0 auth-page">
				<div class="container-fluid">
					<!-- Row -->
					<div class="table-struct full-width full-height">
						<div class="table-cell vertical-align-middle auth-form-wrap">
							<div class="auth-form  ml-auto mr-auto no-float card-view pt-30 pb-30">
								<div class="row">
									<div class="col-sm-12 col-xs-12">
										<div class="sp-logo-wrap text-center pa-0 mb-30">
											<a href="index.html">
												
												<span class="brand-text">Circle360</span>
											</a>
											<div class="form-group text-center">
													<a href="index.php"><button type="button" class="btn btn-primary btn-rounded">Girişe Dön!</button></a>
												</div>
										</div>
										<div class="mb-30">
											<h3 class="text-center txt-dark mb-10">Şifrenizi sıfırlamak ister misiniz?</h3>
											<h6 class="text-center txt-grey nonecase-font">E-posta adresinize geçerli bir şifre sıfırlama linki gönderilecektir.</h6>
										</div>	
										<div class="form-wrap">
											<form action="forgot-password.php" method="POST">
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Kayıtlı E-Posta</label>
													<input type="email" name="newpassword_email" class="form-control" required id="exampleInputEmail_2" placeholder="Geçerli bir e-posta giriniz">
												</div>
												
												<div class="form-group text-center">
													<button type="submit" class="btn btn-primary btn-rounded">Sıfırlama Linki Gönder</button>
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
