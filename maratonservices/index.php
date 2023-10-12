<?php

ini_set('session.save_handler', 'files'); // line 53
session_save_path('tmp/');            // line 54
session_start(); 

ob_start();


if (!isset($_SESSION)) {
    @session_name("asalyapi");
  @session_start();
  
  $_SESSION["urunsayisi"]="1";
}

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






$tarih=date("Y-m-d");



if ($_GET['page_id']=='logout')

{

	$_SESSION["login_id"]="";

	$kayitlikullanici="";

	$_SESSION["user"]="";
	$_SESSION["mobil"]="";

}

$username=$_POST['username'];

$password=$_POST['password'];


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

$_SESSION["adi"]=iconv( "ISO-8859-9","UTF-8",$oku['adi']);

$_SESSION["password"]=$oku['pass'];

$_SESSION["kullanicituru"]=iconv( "ISO-8859-9","UTF-8",$oku['yetkilituru']);
$_SESSION["yetkilituru"]=iconv( "ISO-8859-9","UTF-8",$oku['yetkilituru']);

$_SESSION["user_id"]=$oku['user_indeks'];
$_SESSION["avatar"]=iconv( "ISO-8859-9","UTF-8",$oku['resim']);
$_SESSION["mobil"]='E';

$_SESSION["sube"]=iconv( "ISO-8859-9","UTF-8",$oku['subesi']);

$kayitlikullanici=$oku['user_indeks'];

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

$_SESSION["tanimlidashboard"]=$oku["tanimlidashboard"];
$_SESSION["ismerkezi"]=iconv( "ISO-8859-9","UTF-8",$oku[ismerkezi]);
$_SESSION["istasyonu"]=iconv( "ISO-8859-9","UTF-8",$oku[isistasyonu]);


   $_SESSION["tasarimyetkisi"]='';
        $_SESSION["superkullanici"]='';  

$sql="select * from kullanicirolleri left join roller on roller.index_roller=kullanicirolleri.rolid where index_kullanicirolleri>0 and userid='".$oku[user_indeks]."'";
$yetkisorgula=mysqli_query($connection,$sql);
while($getir=mysqli_fetch_assoc($yetkisorgula))
{
   if ($getir[superuser]=='E')
   {
     $_SESSION["superkullanici"]=$getir[superuser];  
   }
   
     if ($getir[tasarimyetkisi]=='E')
   {
   $_SESSION["tasarimyetkisi"]=$getir[tasarimyetkisi];

   }
    
}





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

$title="Maraton | Open Source ERP";

if ($_SESSION['mobil']=='E')
{
    
    $gizle="style=\"display:none\"";
}


if ($_SESSION["login_id"]=='')
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
		
		<!-- Bootstrap Treeview -->
		<link href="../vendors/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.css" rel="stylesheet" type="text/css">
		
		
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
											<h3 class="text-center txt-dark mb-10">Maraton</h3>
											<h6 class="text-center nonecase-font txt-grey">Open Source ERP</h6>
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
	
	<!-- Bootstrap Treeview -->
		<link href="../vendors/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.css" rel="stylesheet" type="text/css">
		
	<!-- Custom CSS -->
	<link href="dist/css/style.css" rel="stylesheet" type="text/css">
	
		<link href="../vendors/bower_components/jquery-wizard.js/css/wizard.css" rel="stylesheet" type="text/css"/>
		
		<!-- jquery-steps css -->
		<link rel="stylesheet" href="../vendors/bower_components/jquery.steps/demo/css/jquery.steps.css">
		
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		
		<!-- select2 CSS -->
		<link href="../vendors/bower_components/select2/dist/css/select2.min.css" rel="stylesheet" type="text/css"/>
		
		
		
		<!-- bootstrap-select CSS -->
		
		
		<link href="../vendors/bower_components/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" type="text/css"/>
		
		
			<link href="../vendors/bower_components/switchery/dist/switchery.min.css" rel="stylesheet" type="text/css"/>
		
			<script src="../vendors/bower_components/switchery/dist/switchery.min.js"></script>
		
		<link href="../vendors/bower_components/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" type="text/css"/>
		
		

		
		
		

<style>

th, td { white-space: nowrap; }
    div.dataTables_wrapper {
        margin: 0 auto;
    }
 
    div.container {
        width: 100%;
    }


table.dataTable td {
  font-size: 1em;
}


table.dataTable tr.dtrg-level-0 td {
  font-size: 1.1em;
}

.dataTables_scrollHeadInner{
    
    width:100%;
    
}

.modal-body{
    max-height: 70vh;
    overflow-y: auto;
}

.tree, .tree ul {
    margin:0;
    padding:0;
    list-style:none
}
.tree ul {
    margin-left:1em;
    position:relative
}
.tree ul ul {
    margin-left:.5em
}
.tree ul:before {
    content:"";
    display:block;
    width:0;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    border-left:1px solid
}
.tree li {
    margin:0;
    padding:0 1em;
    line-height:2em;
    color:#369;
    font-weight:700;
    position:relative
}
.tree ul li:before {
    content:"";
    display:block;
    width:10px;
    height:0;
    border-top:1px solid;
    margin-top:-1px;
    position:absolute;
    top:1em;
    left:0
}
.tree ul li:last-child:before {
    background:#fff;
    height:auto;
    top:1em;
    bottom:0
}
.indicator {
    margin-right:5px;
}
.tree li a {
    text-decoration: none;
    color:#369;
}
.tree li button, .tree li button:active, .tree li button:focus {
    text-decoration: none;
    color:#369;
    border:none;
    background:transparent;
    margin:0px 0px 0px 0px;
    padding:0px 0px 0px 0px;
    outline: 0;
}
</style>
		
		
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
	
	<style>
	
	.secili{
	    color:red;
	}
	
	.row {
    margin-right: 0px;
   margin-left: 0px;
}
	</style>
	
		
	<style>



/*the container must be positioned relative:*/
.autocomplete {
  position: relative;
  display: inline-block;
}

input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}

input[type=text] {
 
  width: 100%;
}

input[type=submit] {
  background-color: DodgerBlue;
  color: #fff;
  cursor: pointer;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9; 
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important; 
  color: #ffffff; 
}
</style>
	
	
</head>

<body>
    
    
    
	<!-- Preloader -->
	<div class="preloader-it">
		<div class="la-anim-1"></div>
	</div>
	<!-- /Preloader -->
	
	
	
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  

  $( function() {
      
      
      
    var availableTags = [
        <?php
        
        include 'siteyonetimi/baglanti.php';
        
        $sql="select * from konumlar order by konum";
        $sorbana=mysqli_query($connection,$sql);
        $i=0;
        while($okut=mysqli_fetch_assoc($sorbana))
        {
            if ($i==0)
            {
               echo '"'.iconv( "ISO-8859-9","UTF-8",$okut[konum]).'"';
                
            }
            else
            {
              echo ",".iconv( "ISO-8859-9","UTF-8",'"'.$okut[konum].'"');   
            }
            
            $i++;
            
        }
        ?>
  
    ];
    
  
    
    $( "#aramayap" ).autocomplete({
        minLength: 3,
      source: availableTags2
    });
  
  } );
  </script>

	
	     	
    <div class="wrapper theme-6-active pimary-color-pink">
		<!-- Top Menu Items -->
	<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="mobile-only-brand pull-left">
				<div class="nav-header pull-left">
					<div class="logo-wrap">
						<a href="index.php">
							<img class="brand-img" src="<?php echo $logo; ?>" alt="brand"/>
							<span class="brand-text">Maraton</span>
						</a>
					</div>
				</div>	
				<a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i class="zmdi zmdi-menu"></i></a>
				<a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-search"></i></a>
				<a id="toggle_mobile_nav" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-more"></i></a>
				
				
					<form autocomplete="off" id="search_form" role="search" class="top-nav-search collapse pull-left">
					<div class="input-group">
					
    <input id="myInput" autocomplete="off" type="text" name="myCountry" placeholder="Arama Yap">
						
						<span class="input-group-btn">
						<button type="button" class="btn  btn-default"  data-target="#search_form" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i class="zmdi zmdi-search"></i></button>
						</span>
					</div>
				</form>
				
				
				<!--Make sure the form has the autocomplete function switched off:-->

<script>

/*An array containing all the country names in the world:*/
  var availableTags2 = [
        <?php
        
        include 'siteyonetimi/baglanti.php';
        
        $sql="select * from formlar order by formtanimi";
        $sorbana=mysqli_query($connection,$sql);
        $i=0;
        while($okut=mysqli_fetch_assoc($sorbana))
        {
            if ($i==0)
            {
               echo '"'.iconv( "ISO-8859-9","UTF-8",$okut[formtanimi]).'"';
                
            }
            else
            {
              echo ",".iconv( "ISO-8859-9","UTF-8",'"'.$okut[formtanimi].'"');   
            }
            
            $i++;
            
        }
        ?>
  
    ];
    
    
    var availableTags = [
        <?php
        
        include 'siteyonetimi/baglanti.php';
        
        $sql="select * from formlar order by formtanimi";
        $sorbana=mysqli_query($connection,$sql);
        $i=0;
        while($okut=mysqli_fetch_assoc($sorbana))
        {
            if ($i==0)
            {
               echo '"'.iconv( "ISO-8859-9","UTF-8",$okut[form_index]).'"';
                
            }
            else
            {
              echo ",".iconv( "ISO-8859-9","UTF-8",'"'.$okut[form_index].'"');   
            }
            
            $i++;
            
        }
        ?>
  
    ];


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              
            

              var sirano=availableTags2.indexOf(inp.value);
              
         var ekranlari=$("#gorebilecegiekranlar").val();
         
         var bul=ekranlari.includes("#"+availableTags[sirano]+"#");
         
         
         
              
         if (ekranlari=='Hepsi'||bul)
         {
              window.location="index.php?page_id=listings&menu_id="+availableTags[sirano];
         }
         else
         {
                 			          Swal.fire({
  icon: 'error',
  title: 'Uyarı',
  text: 'Bu ekrana giriş yetkiniz bulunmamaktadır.',
  confirmButtonText: `Tamam`,

});
         }
         
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
     
        
        
        
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}


/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), availableTags2);
</script>
				
				
			</div>
			<div id="mobile_only_nav" class="mobile-only-nav pull-right">
				<ul class="nav navbar-right top-nav pull-right">
					<li>
						<a id="open_right_sidebar" href="#"><i class="zmdi zmdi-settings top-nav-icon"></i></a>
					</li>
				
					<li class="dropdown alert-drp">
								
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="zmdi zmdi-notifications top-nav-icon"></i><span class="top-nav-icon-badge"><?php echo 0+mysqli_num_rows(mysqli_query($connection,"select * from bildirimler where bildirimsahibi='".$_SESSION[user_id]."' and okundu=''"));?></span></a>
						<ul  class="dropdown-menu alert-dropdown" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
							<li>
								<div class="notification-box-head-wrap">
									<span class="notification-box-head pull-left inline-block">Bildirimler</span>
									<a class="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"  id="bildirimleritemizle"> Temizle</a>
									<div class="clearfix"></div>
									<hr class="light-grey-hr ma-0"/>
								</div>
							</li>
							<li>
								<div class="streamline message-nicescroll-bar" id="bildirimler">
									
									
								<?php
								
								$sql="select * from bildirimler where bildirimsahibi='".$_SESSION[user_id]."' and okundu='' ";
								$sorgula=mysqli_query($connection,$sql);
								while($okut=mysqli_fetch_assoc($sorgula))
								{
								    
								    if ($okut[bildirimturu]==iconv( "UTF-8","ISO-8859-9",'Bilgi'))
								    {
								         ?>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-green">
												<i class="zmdi zmdi-flag"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications">
												 <?php echo iconv( "ISO-8859-9","UTF-8",$okut[bildirimbasligi]);?></span>
												<span class="inline-block font-11  pull-right notifications-time"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[olusturmasaati]);?></span>
												<div class="clearfix"></div>
												<p class="truncate"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[bildirimmetni]);?></p>
											</div>
										</a>	
									</div>
									<?php
								    }
								    
									
								
									
									 if ($okut[bildirimturu]==iconv( "UTF-8","ISO-8859-9",'Hata'))
								    {
								         ?>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-yellow">
												<i class="zmdi zmdi-trending-down"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications txt-warning"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[bildirimbasligi]);?></span>
												<span class="inline-block font-11 pull-right notifications-time"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[olusturmasaati]);?></span>
												<div class="clearfix"></div>
												<p class="truncate"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[bildirimmetni]);?></p>
											</div>
										</a>	
									</div>
									<?php
								    }
								
									 if ($okut[bildirimturu]==iconv( "UTF-8","ISO-8859-9",'Hatırlatma'))
								    {
								       
								         ?>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-blue">
												<i class="zmdi zmdi-email"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications"><?php echo iconv( "ISO-8859-9","UTF-8",$okut['bildirimbasligi']);?></span>
												<span class="inline-block font-11  pull-right notifications-time"><?php echo iconv( "ISO-8859-9","UTF-8",$okut['olusturmasaati']);?></span>
												<div class="clearfix"></div>
												<p class="truncate"> <?php echo iconv( "ISO-8859-9","UTF-8",$okut['bildirimmetni']);?></p>
											</div>
										</a>	
									</div>
									<?php
								    }
									
									
							
									
										 if ($okut[bildirimturu]==iconv( "UTF-8","ISO-8859-9",'Uyarı'))
								    {
								        ?>
									<div class="sl-item">
										<a href="javascript:void(0)">
											<div class="icon bg-red">
												<i class="zmdi zmdi-storage"></i>
											</div>
											<div class="sl-content">
												<span class="inline-block capitalize-font  pull-left truncate head-notifications txt-danger"><?php iconv( "ISO-8859-9","UTF-8",$okut[bildirimbasligi]);?></span>
												<span class="inline-block font-11  pull-right notifications-time"><?php iconv( "ISO-8859-9","UTF-8",$okut[olusturmasaati]);?></span>
												<div class="clearfix"></div>
												<p class="truncate"><?php iconv( "ISO-8859-9","UTF-8",$okut[bildirimmetni]);?></p>
											</div>
										</a>	
									</div>
									<?php
								    }
								    ?>
									
									
									<hr class="light-grey-hr ma-0"/>
									<?php
									
								}
									?>
								</div>
							</li>
							<li>
								<div class="notification-box-bottom-wrap">
									<hr class="light-grey-hr ma-0"/>
									<a class="block text-center read-all" href="index.php?page_id=listings&menu_id=241&uid=<?php echo $_SESSION[user_id]; ?>"> Tümünü Gör </a>
										
									<div class="clearfix"></div>
								</div>
							</li>
						</ul>
					</li>
					<li class="dropdown auth-drp">
		
						
						<a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown"><img src="<?php echo $_SESSION["avatar"]; ?>" alt="user_auth" class="user-auth-img img-circle"/><span class="user-online-status"></span></a>
						<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
							<li>
								<a href="index.php?page_id=profilim"><i class="zmdi zmdi-account"></i><span>Profilim</span></a>
							</li>
							<li>
								<a href="index.php?page_id=newticket"><i class="zmdi zmdi-card"></i><span>Yeni Ticket</span></a>
							</li>
							<li>
								<a href="index.php?page_id=ticketsistemi"><i class="zmdi zmdi-email"></i><span>Ticketlarım</span></a>
							</li>
								
				<li>
									<a href="#" class="sifredegistir" data-toggle="modal" title="<?php echo $_SESSION["user_id"]; ?>" ><i class="zmdi zmdi-settings"></i><span>Şifre Değiştir</span></a>
				</li>
							<li>
								<a href="#"><i class="zmdi zmdi-settings"></i><span>Durum</span></a>
							</li>
							<li class="divider"></li>
							
							
							
							<?php
							
							if ($_SESSION["user_id"]!='')
							{
							 $sql="select * from kullanicilar where user_indeks=".$_SESSION["user_id"];
							 $sorbana=mysqli_query($connection,$sql);
							 while($okut=mysqli_fetch_assoc($sorbana))
							 {
							     $musaitlik=$okut[musaitlik];
							     
						
							 }
							 
							 
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
							
							
							
							<li class="sub-menu show-on-hover">
								<a href="#" class="dropdown-toggle pr-0 level-2-drp"><span id="durumbilgisi"><i class="zmdi zmdi-<?php echo $clas; ?>"></i> <?php echo $metin; ?></span></a>
								<ul class="dropdown-menu open-left-side">
									<li>
										<a class="durumdegistir" title="0"><i class="zmdi zmdi-check text-success"></i><span>müsait</span></a>
									</li>
									<li>
										<a class="durumdegistir" title="1"><i class="zmdi zmdi-circle-o text-warning"></i><span>meşgul</span></a>
									</li>
									<li>
										<a class="durumdegistir" title="2"><i class="zmdi zmdi-minus-circle-outline text-danger"></i><span>çevrimdışı</span></a>
									</li>
								</ul>	
							</li>
							<li class="divider"></li>
							<li>
								<a href="index.php?page_id=logout"><i class="zmdi zmdi-power"></i><span>Çıkış Yap</span></a>
							</li>
						</ul>
					</li>
				</ul>
			</div>	
		</nav>
		<!-- /Top Menu Items -->
		
		<!-- Left Sidebar Menu -->
		<div class="fixed-sidebar-left">
			<ul class="nav navbar-nav side-nav nicescroll-bar aranacakkısım">
				
					<!-- User Profile -->
					<li>
						<div class="user-profile text-center">
							<img src="<?php echo $_SESSION["avatar"]; ?>" alt="user_auth" class="user-auth-img img-circle"/>
							<div class="dropdown mt-5">
							<a href="#" class="dropdown-toggle pr-0 bg-transparent" data-toggle="dropdown"><?php echo $_SESSION[adi]; ?> <span class="caret"></span></a>
							<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
								<li>
									<a href="index.php?page_id=profilim"><i class="zmdi zmdi-account"></i><span>Profilim</span></a>
								</li>
								<li>
									<a href="index.php?page_id=ticketsistemi"><i class="zmdi zmdi-card"></i><span>DÖF Kutusu</span></a>
								</li>
								
								<li>
									<a href="index.php?page_id=settings"><i class="zmdi zmdi-settings"></i><span>Durum</span></a>
								</li>
								
								<?php
							
							if ($_SESSION["user_id"]!='')
							{
							 $sql="select * from kullanicilar where user_indeks=".$_SESSION["user_id"];
							 $sorbana=mysqli_query($connection,$sql);
							 while($okut=mysqli_fetch_assoc($sorbana))
							 {
							     $musaitlik=$okut[musaitlik];
							     
						
							 }
							 
							 
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
							
								
								
								
								<li class="divider"></li>
								<li class="sub-menu show-on-hover">
									<a href="#" class="dropdown-toggle pr-0 level-2-drp"><span id="durumbilgisi2"><i class="zmdi zmdi-<?php echo $clas; ?>"></i> <?php echo $metin; ?></span></a>
									<ul class="dropdown-menu open-left-side">
										<li>
											<a class="durumdegistir" title="0"><i class="zmdi zmdi-check text-success"></i><span>müsait</span></a>
										</li>
										<li>
											<a class="durumdegistir" title="1"><i class="zmdi zmdi-circle-o text-warning"></i><span>meşgul</span></a>
										</li>
										<li>
											<a class="durumdegistir" title="2"><i class="zmdi zmdi-minus-circle-outline text-danger"></i><span>dışarıda</span></a>
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
					<input type="text" name="example-input1-group2" class="form-control filled-input rounded-input aranacakkelime" style="width:80%;margin-left:10%;font-size:12px;" placeholder="Menülerde Arama Yap">
			<?php
			include 'baglanti.php';
		
		
		
		
			if ($_SESSION[superkullanici]!='E')
			{
			$sql="select * from kullanicirolleri where userid='".$_SESSION[user_id]."' and (yetkituru='".iconv( "UTF-8","ISO-8859-9",'Sürekli Yetki')."' or (yetkituru='".iconv("UTF-8","ISO-8859-9",'Geçici Yetki')."' and yetkibaslama>='$tarih' and yetkibitisi<='$tarih'))";
			
		
			$sorgulat=mysqli_query($connection,$sql);
			
			 while($okus=mysqli_fetch_assoc($sorgulat))
		    {
		       
		    
		    
		    
		    //
		    
		    
		      	$sql="select * from yetkiler left join menutasarimi on menutasarimi.index_menutasarimi=yetkiler.formu where seviye='Seviye-2' and yetkiler.rolid='".$okus[rolid]."' order by sirasi asc";
			
		
			$sorgula=mysqli_query($connection,$sql);
		    while($okut=mysqli_fetch_assoc($sorgula))
		    {
		        
		        $sql="select * from menutasarimi where index_menutasarimi=".$okut[ustseviyesi];
		     
		        $sorgitsin=mysqli_query($connection,$sql);
		        while($okur=mysqli_fetch_assoc($sorgitsin))
		        {
		            $menutanimi=iconv("ISO-8859-9","UTF-8",$okur[menutanimi]);
		        }
		        
		        
		        ?>
				<li class="navigation-header">
					<span><?php echo $menutanimi; ?></span> 
					<i class="zmdi zmdi-more"></i>
				</li>
			<?php
			
		
			$sql2="select * from yetkiler left join menutasarimi on menutasarimi.index_menutasarimi=yetkiler.formu where seviye='Seviye-2' and yetkiler.rolid='".$okus[rolid]."' and ustseviyesi='".$okut[ustseviyesi]."' order by sirasi asc";
			
				$sorgulat=mysqli_query($connection,$sql2);
				
				   while($okut2=mysqli_fetch_assoc($sorgulat))
		    {
		        
		        $sql3="select * from menutasarimi where seviye='Seviye-3' and ustseviyesi='".$okut2[index_menutasarimi]."' order by sirasi asc";
				$sorgulat3=mysqli_query($connection,$sql3);
		        
		        if (mysqli_num_rows($sorgulat3)==0)
		        {
		            
		            
		             
		 
		        if ($okut2[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okut2[formbaglantisi];
		            
		            $gorebilecegiekranlar=$gorebilecegiekranlar."#".$okut2[formbaglantisi]."#";
		            
		        }
		        if ($okut2[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okut2[kopru]);
		        }
		        ?>
		        
		        <li>
					<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$baglanti); ?>"><div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[menutanimi]); ?></span></div><div class="clearfix"></div></a>
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
		        
		         
		     if ($okut3[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okut3[formbaglantisi];
		        }
		        if ($okut3[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okut3[kopru]);
		        }
		    ?>
						<li>
							<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$baglanti); ?>"><?php echo iconv( "ISO-8859-9","UTF-8",$okut3[menutanimi]); ?></a>
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
		    
		    
		    
		    //
		     
		     
		        
		       	$sql="select * from yetkiler left join menutasarimi on menutasarimi.index_menutasarimi=yetkiler.formu where seviye='Seviye-1' and yetkiler.rolid='".$okus[rolid]."' order by sirasi asc";
			
			
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
		            
		            
		             
		 
		        if ($okut2[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okut2[formbaglantisi];
		                 $gorebilecegiekranlar=$gorebilecegiekranlar."#".$okut2[formbaglantisi]."#";
		        }
		        if ($okut2[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okut2[kopru]);
		        }
		        ?>
		        
		        <li>
					<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$baglanti); ?>"><div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[menutanimi]); ?></span></div><div class="clearfix"></div></a>
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
		        
		         
		     if ($okut3[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okut3[formbaglantisi];
		        }
		        if ($okut3[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okut3[kopru]);
		        }
		    ?>
						<li>
							<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$baglanti); ?>"><?php echo iconv( "ISO-8859-9","UTF-8",$okut3[menutanimi]); ?></a>
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
		      
		        
		        
		    }
			
			}
			
			if ($_SESSION[superkullanici]=='E')
			{
			   
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
		            
		            
		             
		 
		        if ($okut2[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okut2[formbaglantisi];
		                 $gorebilecegiekranlar=$gorebilecegiekranlar."#".$okut2[formbaglantisi]."#";
		        }
		        if ($okut2[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okut2[kopru]);
		        }
		        ?>
		        
		        <li>
					<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$baglanti); ?>"><div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[menutanimi]); ?></span></div><div class="clearfix"></div></a>
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
		        
		         
		     if ($okut3[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okut3[formbaglantisi];
		        }
		        if ($okut3[kopru]!='')
		        {
		          $baglanti=iconv( "ISO-8859-9","UTF-8",$okut3[kopru]);
		        }
		    ?>
						<li>
							<a href="<?php echo iconv( "ISO-8859-9","UTF-8",$baglanti); ?>"><?php echo iconv( "ISO-8859-9","UTF-8",$okut3[menutanimi]); ?></a>
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
		    
			}
			
			
			if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
		    ?>
		    
		    <input type="hidden" name="gorebilecegiekranlar" id="gorebilecegiekranlar" value="Hepsi">
		
		<?php
												}
												else
												{
												    ?>
												    
												   	    <input type="hidden" name="gorebilecegiekranlar" id="gorebilecegiekranlar" value="<?php echo $gorebilecegiekranlar; ?>"> 
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
					<a href="index.php?page_id=newrecord&menu_id=366"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">Yeni Ticket</span></div><div class="clearfix"></div></a>
				</li>
				
				<li>
					<a href="#" class="sifredegistir" data-toggle="modal" title="<?php echo $_SESSION[user_id]; ?>" ><i class="zmdi zmdi-settings"></i><span>Şifre Değiştir</span></a>
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
							<li role="presentation" class=""><a  data-toggle="tab" id="messages_tab_btn" role="tab" href="#messages_tab" aria-expanded="false">Mesajlar</a></li>
							<li role="presentation" class=""><a  data-toggle="tab" id="todo_tab_btn" role="tab" href="#todo_tab" aria-expanded="false">Görevler</a></li>
						</ul>
						<div class="tab-content" id="right_sidebar_content">
							<div  id="chat_tab" class="tab-pane fade active in" role="tabpanel">
								<div class="chat-cmplt-wrap">
									<div class="chat-box-wrap">
										<div class="add-friend">
											<a href="javascript:void(0)" class="inline-block txt-grey">
												<i class="zmdi zmdi-more"></i>
											</a>	
											<span class="inline-block txt-dark">Kullanıcılar</span>
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
														    
														    <?php
														    $sql="select * from kullanicilar where user_indeks<>".$_SESSION[user_id];
														    $sorgula=mysqli_query($connection,$sql);
														    while($okut=mysqli_fetch_assoc($sorgula))
														    {
														       ?>
															<a href="javascript:void(0)" class="chatekrani" title="<?php echo $okut[user_indeks]; ?>" id="chat_<?php echo $okut[user_indeks]; ?>">
																<div class="chat-data">
																	<img class="user-img img-circle"  src="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[resim]); ?>" alt="user"/>
																	<div class="user-data">
																		<span class="name block capitalize-font"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[adi]); ?></span>
																		<span class="time block truncate txt-grey"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[unvani]); ?></span>
																	</div>
																	<div class="status away"></div>
																	<div class="clearfix"></div>
																</div>
															</a>
															<?php
														    }
														    ?>
														
														
															
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="recent-chat-box-wrap" >
										<div class="recent-chat-wrap">
											<div class="panel-heading ma-0">
												<div class="goto-back">
													<a  id="goto_back" href="javascript:void(0)" class="inline-block txt-grey">
														<i class="zmdi zmdi-chevron-left"></i>
													</a>	
													<span class="inline-block txt-dark" id="konusulan">ryan</span>
													<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-more"></i></a>
													<div class="clearfix"></div>
												</div>
											</div>
											<div class="panel-wrapper collapse in">
												<div class="panel-body pa-0">
													<div class="chat-content" id="chaticerik">
														<ul class="nicescroll-bar pt-20" id="mesajlistesi">
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
														<input type="text" id="input_msg_send" name="send-msg" class="input-msg-send form-control" placeholder="Mesaj yazın...">
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
										<span class="inline-block txt-dark">Son Mesajlar</span>
										<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-search"></i></a>
										<div class="clearfix"></div>
									</div>
									<div class="set-height-wrap">
										<div class="streamline message-box nicescroll-bar">
										    
										    
										     <?php
														    
														    $sql="select * from kullanicilar where user_indeks<>".$_SESSION[user_id];
														   
														    $sorgula=mysqli_query($connection,$sql);
														    while($okut=mysqli_fetch_assoc($sorgula))
														    {
														        
														        
														        $sql="select * from mesajlarim where (gonderen='".$_SESSION[user_id]."' or alici='".$_SESSION[user_id]."') and (gonderen='".$okut[user_indeks]."' or alici='".$okut[user_indeks]."') limit 1";
														    $sorgulat=mysqli_query($connection,$sql);
														    
														    if (mysqli_num_rows($sorgulat)>0)
														    {
														      while($okut2=mysqli_fetch_assoc($sorgulat))
														    {  
														       ?>
														       
														     
														       	<a aria-expanded="true" data-toggle="tab" role="tab" href="#chat_tab" class="chatekraninagec" title="<?php echo $okut[user_indeks]; ?>">
												<div class="sl-item unread-message">
													<div class="sl-avatar avatar avatar-sm avatar-circle">
														<img class="img-responsive img-circle" src="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[resim]); ?>" alt="avatar"/>
													</div>
													<div class="sl-content">
														<span class="inline-block capitalize-font   pull-left message-per"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[adi]); ?></span>
														<span class="inline-block font-11  pull-right message-time"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[olusturma_saati]); ?></span>
														<div class="clearfix"></div>
														<span class=" truncate message-subject"><?php echo iconv( "ISO-8859-9","UTF-8",$okut2[mesaj]); ?></span>
													
													</div>
												</div>
											</a>
														       
														    
															<?php
														    }
														    }
														    }
														    ?>
										    
										    
										
										
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
										<span class="inline-block txt-dark">Görevler</span>
										<a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-plus yenisatir" title="381"></i></a>
										<div class="clearfix"></div>
									</div>
									<div class="set-height-wrap" id="gorevlistem">
										<!-- Todo-List -->
										<ul class="todo-list nicescroll-bar">
										    
										    
										    <?php
										    
										    $sql="select * from gorevler where sorumlusu like '%".$_SESSION[kullanici]."%' order by yapildi asc,deadline asc";
										    $sorgula=mysqli_query($connection,$sql);
										    while($okut=mysqli_fetch_assoc($sorgula))
										    {
										        if($okut[yapildi]!='E')
										        {
										    ?>
											<li class="todo-item">
												<div class="checkbox checkbox-default" >
													<input type="checkbox" class="gorevdegistir" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[index_gorevler]); ?>" id="checkbox<?php echo iconv( "ISO-8859-9","UTF-8",$okut[index_gorevler]); ?>"/>
													<label for="checkbox01"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[gorevbasligi]); ?></label>
												</div>
											</li>
											
										     <?php   
										            
										        }
										          if($okut[yapildi]=='E')
										        {
										?>
											<li class="todo-item">
												<div class="checkbox checkbox-success gorevdegistir">
													<input type="checkbox" class="gorevdegistir"  id="checkbox<?php echo iconv( "ISO-8859-9","UTF-8",$okut[index_gorevler]); ?>" checked/>
													<label for="checkbox04"><?php echo iconv( "ISO-8859-9","UTF-8",$okut[gorevbasligi]); ?></label>
												</div>
											</li>
										 <?php       
										            
										            
										        }
										    }
										?>
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
		
        <!-- Main Content -->
		<div class="page-wrapper">
            <div class="container-fluid pt-25">
            
           
                                    
                                    <?php
            	
            	
            	
            	
            	if ($_GET[page_id]!='newrecord'&&$_GET[page_id]!='editrecord')
            	{
            	    
            	    
            	    ?>
            	    
            	    
            	    	 <div class="modal fade" id="tablosecimModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true" style="z-index:99999;">
                                        <div class="modal-dialog" role="document" <?php if($_GET[menu_id]=='542' || $_GET[menu_id]=='243'){ echo 'style="width:75%;" '; } ?>>
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
                                    
                                    
            	    
            	    <?php
            	    
            	} 
            	?>
            
                   <div class="modal fade" id="yenisatirModal_381" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_381">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <div class="modal-dialog" role="document" <?php if($_GET[menu_id]=='243'){ echo 'style="width:75%;" '; } ?>>
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
                                        
                                        <table class="table table-striped  example" style="width:100%;">

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


$sordurtma="select ".$ykn['masterfield']." from $formtablosu where $anahtars=$_GET[recordid]";


$sorbanas=mysqli_query($connection,$sordurtma);



while ($okukardesim=mysqli_fetch_row($sorbanas))

{
$ortak=$ykn['masterfield'];
$alan=$okukardesim[0];   
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


 if ($_GET[menu_id]=='253')
                                                {
                                                    ?>
                                                 
                                                  <a class="pull-left inline-block rafbarkodu" href="barkodyazdir.php?tipi=rafbarkodu&rafid=<?php echo $icerigi[$anahtar2]; ?>" target="_blank" title="<?php echo iconv( "ISO-8859-9","UTF-8","raf_".$icerigi[$anahtar2]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-warning btn-icon-anim btn-square"><i class="fa fa-qrcode"></i></button></a>
                                                   
                                                    <?php
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

<?php echo $etiketi.":" ?><input type="text" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"   class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

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
                
           
           
             <div class="modal fade" id="yenisatirModal_381" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_381">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                      

	<!-- Row -->
				<div class="row">
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
												
															if ($_GET[menu_id]=='489')
												{
												    ?>	
												    
											<a class="inline-block "  data-effect="fadeOut">
										<button class="btn btn-primary btn-sm btn-anim" id="isakisiaktar" title="<?php echo $_GET[record_id]; ?>"><i class="fa fa-sign-out"></i><span class="btn-text">İş Akışı Aktar</span></button>
										    </a>
										   <a class="inline-block "  data-effect="fadeOut">
										<button class="btn btn-warning btn-sm btn-anim" id="contatanimindanguncelle" title="<?php echo $_GET[record_id]; ?>"><i class="fa fa-pencil"></i><span class="btn-text">Conta Tanımından Güncelle</span></button>
										   </a>
									<?php }
												?>
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
                                    
                                    
                                    
                                    
                                    <div class="modal fade" id="kopyalaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Kopyalama Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    
                                                    
                                                    		<div class="form-wrap">
									
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Kaynak Veritabanı</label>
													<input type="text" name="kaynak" class="form-control" id="kaynak" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Hedef Veritabanı</label>
													<input type="text" name="hedef" class="form-control" id="hedef" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												
											
												<div class="form-group text-center">
													<button type="button" class="btn btn-primary btn-rounded kopyala">Kopyala</button>
												</div>
											<
										</div>
								
                                                 
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
		    
                                
                                    
                                    
                                      <div class="modal fade" id="sqlModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel2">SQL Çalıştırma Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Lütfen geçerli bir SQL kodu çalıştırınız.<br>
                                                    
                                                    <form class="checkout" id="odemeformu">
    
    <p>
      <input type="text" class="checkout-input checkout-name" id="sqlkodu" name="sqlkodu" placeholder="SQL kodu">
     
    </p>
 
  </form>
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                           <button type="button" class="btn btn-success waves-effect calistir"
                                                        >Çalıştır</button>
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
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
     <div class="modal fade" id="tablosecimModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true" style="z-index:9999;"> 
                                        <div class="modal-dialog" role="document" <?php if($_GET[menu_id]=='243'){ echo 'style="width:75%;" '; } ?>>
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


if ($ykn[turu]=='Liste')
		
{
    $satirboyut=$ykn[boyut];
    $sorgumuz="select * from formlar where form_index=$ykn[bagliformindex]";

	$sorgula1=mysqli_query($connection,$sorgumuz);
	
	while ($usttablo=mysqli_fetch_assoc($sorgula1))
		
		{
		
$formid=$usttablo[form_index];


    
    ?>
    
    
    
     
     
    
	
	<div class="col-lg-<?php echo $satirboyut; ?> <?php echo $ek; ?>" >



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
                                        
                                        <table class="table table-striped   example" style="width:100%;">

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
	
		
		if ($alan!='')
		{
		$sqls=$sqls." and ".$ykn[detailfield]."='".$alan."'";
		}
		
		
			
		if ($alan=='')
		{
		$sqls=$sqls." and ".$ykn[detailfield]."='-".$_SESSION[user_id]."'";
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
					<a class="pull-left inline-block satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$ykn[masterfield]."|".$ykn[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a class="pull-left inline-block satirsil" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$icerigi[$anahtar2]."|".$ykn[masterfield]."|".$ykn[detailfield]); ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
                                                
                                                <?php
                                                
                                                
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

$satirboyut=$ykn[boyut];

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





?>

								

                                        <div class="form-group <?php echo $ek; ?> col-lg-<?php echo $satirboyut; ?>" style="margin-left:5px;">

                                            <div id="tablo_<?php echo $formid; ?>" class="col-lg-12">

                                                <div class="row">

												

												<?php

												if ($ykn[grupadi]!="")

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



	if ($met[varsayilan]=='tedarikciid')

	{

		

		$varsayilan=$_GET[tedarikciid];

	}


	if ($met[varsayilan]=='termintar')

	{

		

		$varsayilan=$_GET[termin];

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

		

		$varsayilan=iconv( "UTF-8","ISO-8859-9",$_SESSION["adi"]);

	}

	

	if ($met[varsayilan]=='firmakodu')

	{

		

		$varsayilan=$_SESSION["firmakodu"];

	}

	
	   		if ($met[varsayilan]=='musteri_adi')

	{

$varsayilan=$_GET["tedarikciid"];


}
	   		if ($met[varsayilan]=='tnno')

	{

$varsayilan=$_GET["tnno"];


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

$sqlims="select max(index_$formtablosu) as 'Auto_increment' from $formtablosu";



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

	
$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
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

                                                        <input type="checkbox" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" checked <?php echo $ekkod; ?>>

                                                        <span class="button-checkbox"></span>

                                                    </label>

                                                    <label for="checkbox-toggle"><?php echo $etiketi; ?></label>


</div>
													

<?php                                               

}



if ($met[verigiristuru]=='Color')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>">

<?php echo $etiketi.":" ?><input type="color" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

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
   <div class="slidecontainer col-md-2" <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <?php echo $etiketi.":" ?><input type="range" min="1" max="1000" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" class="slider" id="myRange">
</div> 
    <?php
}



if ($met[verigiristuru]=='Edit')

{

if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?><input type="text"  title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> <?php echo $ekkod; ?>>

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

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?><input type="time" step="2" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> <?php echo $ekkod; ?>>

</div>																



<?php

}




if ($met[verigiristuru]=='Disabled')

{

	

	

																

																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi.":" ?><input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?> readonly>

</div>																



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







if ($met[verigiristuru]=='File(PDF)')

{



																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">



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


$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}
																$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">

<?php echo $etiketi.":" ?><textarea id="<?php echo $met[alanadi]; ?>" title="<?php echo $etiketi; ?>" name="<?php echo $met[alanadi]; ?>" style="width: 100%; height:100px;" <?php echo $ekkod; ?>  ><?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan);?></textarea>

</div>																









<?php

}



if ($met[verigiristuru]=='Date')

{

$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

			$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}													

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?><input type="date" id="<?php echo $met[alanadi]; ?>" title="<?php echo $etiketi; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $ekkod; ?>>

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

$etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

			$ekkod="";    
    if ($met[readonly]=='EVET')
{
    
    $ekkod='readonly';
}													

															

?>																

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

<?php echo $etiketi.":" ?>



<div class="input-group mb-15"> 
														<input type="text" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" class="form-control" placeholder="Seçiniz" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>"><span class="input-group-btn" <?php echo $ekkod; ?>>
														<button type="button" class="btn  btn-warning secimyap" title="<?php echo $met[bagliform_index]; ?>|<?php echo $met[keyfield]; ?>|<?php echo $met[alanadi]; ?>"><i class="fa fa-search"></i></button>
														</span>
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



<div <?php  echo $boyut;?> style="padding-left:2px;padding-rigt:2px;">
  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>

															<div <?php echo $id; ?>  class="row" >

															 

																<span style="margin-left:14px;"><?php echo $etiketi.":" ?></span><div class="col-md-10"><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="$etiketi" tabindex="1" style="width:107%;">

																	

																	

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
    <div <?php echo $boyut; ?>" style="padding-left:2px;padding-rigt:2px;">
 
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
    <script src="dist/js/dropdown-bootstrap-extended.js"></script>
	
    
     
    
     
<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;">

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

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;"><?php echo $etiketi; ?>

<input type="text" title="<?php echo $etiketi; ?>" id="<?php echo $met[alanadi]; ?>" name="<?php echo $met[alanadi]; ?>"  class="form-control" placeholder="<?php echo $etiketi; ?>" value="<?php echo iconv( "ISO-8859-9","UTF-8",$varsayilan); ?>" <?php echo $required;?>>

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

<div <?php echo $boyut; ?> style="padding-left:2px;padding-rigt:2px;" <?php echo $ek; ?>>

  <i class="zmdi zmdi-edit mr-20 alanedit" style="display:none;position:absolute;z-index:999;margin-left:85%;margin-top:30px;" title="<?php echo $met[alanindex]; ?>|199"></i>


	<?php 		                                            $etiketi=iconv( "ISO-8859-9","UTF-8",$met[alanyazisi]);  

																

																  ?>



																<?php echo $etiketi.":" ?><select class="select2_category form-control" name="<?php echo $met[alanadi]; ?>" id="<?php echo $met[alanadi]; ?>" data-placeholder="<?php echo $etiketi; ?>" tabindex="1" <?php echo $required;?> <?php echo $ekkod; ?>>

																

																

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
        if($_GET[menu_id]=='491') {   ?>
                                                                <button type="button" id="vdfolustur" name="vdfolustur" class="btn btn-warning" title="<?php echo $_GET[recordid] ?>">Veri Dağıtım Formları</button>
                                                      
                                                        <?php } 
                                                        
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
		
		
		
		if ($_GET[page_id]=='talepyonetimi')
		{
		    ?>
		    
		    
		    <div class="modal fade" id="yenisatirModal_547" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Düzelt</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_547">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
		
		
		  <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
						    
						    <div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Malzeme Talep Takibi</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							
							
								    	<div id="deletingrecord"  style="display:none">

                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>

                                <h4>Kayıt Siliniyor</h4>

                                <p>Kaydı silmek istediğinize emin misiniz?

								<button type="button" class="btn btn-danger mr5 mb10" id="yesdelete">Evet,eminim</button></p>

                            </div>
						    
						   
						       
						       	<a class="inline-block yenisatir" style="float:right;" title="<?php echo iconv( "ISO-8859-9","UTF-8",$usttablo[form_index]."|".$ykn[masterfield]."|".$ykn[detailfield]); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-success">Yeni Talep</button>
										</a>
										<br>
						       <table class="table table-hover mb-0 example" id="tableexport_yeni">
											<thead>
												<tr>
												
													<th>Talep No</th>
													<th>Talep Eden</th>
													<th>Talep Tarih-Saat</th>
													<th>İlgili Depo</th>
													<th>Kalem Sayısı</th>
														<th>Durumu</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
												<?php
												$i=1;
											$sql="select talepeden,talepno,count(index_uretimictaleplistesidetay) as kalemsayisi,olusturulmatarihi,olusturulmasaati,durumu,talepedilendepo,uretimictalepid,index_uretimictaleplistesi from uretimictaleplistesi left join uretimictaleplistesidetay on uretimictaleplistesidetay.uretimictalepid=uretimictaleplistesi.index_uretimictaleplistesi GROUP BY index_uretimictaleplistesi";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    
											    $button="<button class=\"btn btn-default btn-icon-anim btn-square\"><i class=\"icon-arrow-right\"></i></button>";
											  
											    
											 
											    $i++;
											    
											    
											    
											?>
												<tr>
													
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[talepno]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[talepeden]); ?></td>
														<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[olusturulmatarihi]." ".$okut[olusturulmasaati]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[talepedilendepo]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[kalemsayisi]); ?></td>
													
													
													<?php
													
														if (iconv( "ISO-8859-9","UTF-8",$okut[durumu])=='Teslim Alındı')
													{
													    ?>
													
													<td><div class="alert alert-success">
											Tamamlandı
										</div></td>
													<?php
													}
													
														
													if (iconv( "ISO-8859-9","UTF-8",$okut[durumu])=='Hazırlanıyor')
													{
													    ?>
													
													<td><div class="alert alert-warning">
											Hazırlanıyor
										</div></td>
													<?php
													}
													
													if ($okut[durumu]=='Bekliyor')
													{
													    ?>
													
													<td><div class="alert alert-danger">
											Bekliyor
										</div></td>
													<?php
													}
													?>
													<td><a class="detaygor" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[index_uretimictaleplistesi]); ?>"><?php echo $button; ?></a>
													<a class="pull-left inline-block tip" id="menu_id=557&recordid=<?php echo $okut[index_uretimictaleplistesi]; ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
													</td>
												</tr>
											<?php
											}
											?>
											
											</tbody>
										</table>
						       
						       
						 
						   
						   
						    </div>
		</div>
		
		<div id="onizleme" name="onizleme">
		    
		    
		    </div>
		
		  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"  id="malzemelistesi">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-12"><h6 class="panel-title txt-dark">Malzemeler</h6></div></div>
												
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0 example">
											<thead>
												<tr>
												
													<th>Malzeme Kodu</th>
													<th>Malzeme Tanımı</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
												<?php
												$i=1;
											$sql="select * from malzemeler order by malzemeaciklamasi desc";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    
											    $button="<button class=\"btn btn-default btn-icon-anim btn-square\"><i class=\"icon-arrow-right\"></i></button>";
											  
											    
											 
											    $i++;
											    
											    
											    
											?>
												<tr>
													
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[malzemekodu]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[malzemeaciklamasi]); ?></td>
													<td><a class="listeyeekle" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[index_malzemeler]); ?>"><?php echo $button; ?></a>
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
			    
	
			
		
	  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"   id="taleplistesi">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-12"><h6 class="panel-title txt-dark">Talep Listesi</h6></div></div>
												
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
									    
									     <div class="table-responsive" style="width: 100%; height: auto;" id="alttablo_558">
                                        
										<table class="table table-hover mb-0 example">
											<thead>
												<tr>
												
													<th>Malzeme Tanımı</th>
													<th>Talep Miktarı</th>
													<th>Durum</th>
												
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
												<?php
												$i=1;
											$sql="SELECT malzemekodu,malzemeaciklamasi,concat_ws(' ',miktar,stokbirimi) as talepmiktari,index_uretimictaleplistesidetay FROM `uretimictaleplistesidetay` left join malzemeler on malzemeler.index_malzemeler=uretimictaleplistesidetay.talepedilenurunadi";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    
											   
											    
											 
											    $i++;
											    
											    
											    
											?>
												<tr>
													
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[malzemeaciklamasi]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[talepmiktari]); ?></td>
													<td><input type="checkbox" class="js-switch js-switch-1"  data-color="#76c880" data-secondary-color="#e3c94b" />
														</td>
													<td><a class="pull-left inline-block satirsil" title="<?php echo iconv( "ISO-8859-9","UTF-8","558|".$okut[index_uretimictaleplistesidetay]."|index_uretimictaleplistesi|uretimictalepid"); ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
                                                
													
													
 
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
			    
		    	</div>
		    
		   <?php
		}
		
		
		if ($_GET[page_id]=='polivalans')
		{
		?>    
		
		
		    <div class="modal fade" id="yenisatirModal_547" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Düzelt</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_547">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
		
		
		  <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
						    
						    <div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Personel Polivalans Tablosu</h6>
								</div>
								<div class="clearfix"></div>
							</div>
						    
						   <div id="onizleme" name="onizleme"></div>
						   
						   
						    </div>
		</div>
		
		  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-12"><h6 class="panel-title txt-dark">Polivalanslar</h6></div></div>
												
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0 exampleyes">
											<thead>
												<tr>
												
													<th>Birimi</th>
													<th>Görev Tanımı</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
												<?php
												$i=1;
											$sql="select * from polivalans";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    
											    $button="<button class=\"btn btn-default btn-icon-anim btn-square\"><i class=\"icon-arrow-right\"></i></button>";
											  
											    
											 
											    $i++;
											    
											    
											    
											?>
												<tr>
													
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[birimi]."<br><font size='1' color='red'>".$okut[tabbar]."</font>"); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[gorevtanimi]); ?></td>
													<td><a class="polivalansaktarimyap" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[gorevtanimi]); ?>"><?php echo $button; ?></a>
													
													
 
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
			    
	
			
		
	  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-12"><h6 class="panel-title txt-dark">Atanmış Polivalanslar</h6></div></div>
												
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
									    
									     <div class="table-responsive" style="width: 100%; height: auto;" id="alttablo_547">
                                        
										<table class="table table-hover mb-0 exampleyes">
											<thead>
												<tr>
												
													<th>Polivalans Görevi</th>
													<th>Yetkinlik</th>
													<th>İşlem</th>
												</tr>
											</thead>
											<tbody>
											
												<?php
												$i=1;
											$sql="SELECT * FROM `isgucupolivalanslari` where personelid='-1'";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{
											    
											   
											    
											 
											    $i++;
											    
											    
											    
											?>
												<tr>
													
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[gorevi]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[yetkinlik]); ?></td>
													<td><a class="pull-left inline-block satirsil" title="<?php echo iconv( "ISO-8859-9","UTF-8","547|".$okut[index_isgucupolivalanslari]."|index_personel_ozluk_bilgileri|personelid"); ?>" data-effect="fadeOut"><button type="button" class="btn btn-danger btn-icon-anim btn-square tip"><i class="icon-trash"></i></button></a>
                                                
													
													
 
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
		    
		    
		          
                                    <div class="modal fade" id="kopyalaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Kopyalama Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    
                                                    
                                                    		<div class="form-wrap">
									
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Kaynak Veritabanı</label>
													<input type="text" name="kaynak" class="form-control" id="kaynak" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Hedef Veritabanı</label>
													<input type="text" name="hedef" class="form-control" id="hedef" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												
											
												<div class="form-group text-center">
													<button type="button" class="btn btn-primary btn-rounded kopyala">Kopyala</button>
												</div>
											<
										</div>
								
                                                 
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
		    
		    
		    <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
						
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="pills-struct">
										<ul role="tablist" class="nav nav-pills" id="myTabs_6">
											<li class="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="home_tab_6" href="#home_6">Tasarım</a></li>
											<li role="presentation" class=""><a data-toggle="tab" id="profile_tab_6" role="tab" href="#profile_6" aria-expanded="false">Önizleme</a></li>
											<li role="presentation" class=""><a data-toggle="tab" id="profile_tab_7" role="tab" href="#profile_7" aria-expanded="false">Excel Import</a></li>
											
										</ul>
										<div class="tab-content" id="myTabContent_6">
											<div id="home_6" class="tab-pane fade active in" role="tabpanel">
											</div>
											<div id="profile_6" class="tab-pane fade" role="tabpanel">
												<div id="onizleme" name="onizleme"></div>
											</div>
										
										</div>
										
										<div class="tab-content" id="myTabContent_7">
											<div id="home_7" class="tab-pane fade active in" role="tabpanel">
											</div>
											<div id="profile_7" class="tab-pane fade" role="tabpanel">
											
    
    <div class="outer-container">
        <form action="" method="post" name="frmExcelImport" id="frmExcelImport" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-4"><input type="file" name="file"
                    id="file" accept=".xls,.xlsx"></div>
                    
                    
                    <input type="hidden" name="menu_id"
                    id="menu_id" value="<?php echo $_GET[tasarimid]; ?>">
                  <div class="col-md-4">  
                <button type="submit" id="submit" name="import"
                    class="btn-submit">Yükle</button>
        </div>
            </div>
            
            
             <div class="row" id="excelimport" name="excelimport">
                 
                 
                 
                 
                 <?php
                 
$conn = mysqli_connect("localhost","u9280736_metin2_1","p6ow=D2.m5SJ","u9280736_asalyapi");

                   $sqlSelect = "SELECT * FROM aratablo where menuid='".$_GET[tasarimid]."'";
    $result = mysqli_query($conn, $sqlSelect);
 
if (mysqli_num_rows($result) > 0)
{
?>



    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="panel panel-default card-view">
								<div class="panel-heading">
									<div class="pull-left">
										<div class="row"><div class="col-md-6"><h6 class="panel-title txt-dark">Tüm Alanlar </h6></div><div class="col-md-6">
										
										<a class="pull-left inline-block sistemeaktar" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim alanlariyansit" title="<?php echo $_POST[menu_id]; ?>" >ALANLARI SİSTEME AKTAR</button>
										</a>
										
											<a class="pull-left inline-block alanlariduzelt" data-effect="fadeOut">
											<button class="btn btn-success btn-icon-anim alanlariyansit" title="<?php echo $_POST[menu_id]; ?>" >ALANLARI DÜZELT</button>
										</a>
										
										
									
									
										</div></div>
									</div>
									
									<div class="clearfix"></div>
								</div>
								<div class="panel-wrapper collapse in">
									<div class="panel-body row pa-0">
										<table class="table table-hover mb-0" id="example1ds">
											<thead>
												<tr>
												
													<th>Alan Adı</th>
													<th>Veri Alanı</th>
													<th>Önerilen Alan Adı</th>
												     <th>Önerilen Etiket</th>
												<th>Alan Türü</th>
												<th>Veri Giriş Türü</th>
												<th>Kayut Alanı</th>
												
												</tr>
											</thead>
											<tbody>
											
											<?php
										
											$j=0;
											while($row=mysqli_fetch_array($result))
											{
											    $j++;
											?>
												<tr>
												
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["name"]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["description"]); ?></td>
												    <td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenalanadi"]); ?></td>
											     	<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenetiket"]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenalanturu"]); ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$row["onerilenverigiristuru"]); ?></td>
												    <td><?php echo $row["kayitalani"]; ?></td>
												
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
                 
                 
                 
                 ?>
                 
                 
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
		    
		    
		    
		    <div class="modal fade" id="yenisatirModal_200" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_200">
                                                   
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
		    
		    
		    <div class="row col-md-12" id="designicerik">
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
													<th>Grup B</th>
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
														<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[grupadi]); ?></td>
													<td><a href="index.php?page_id=design&tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $okut[bokindex]; ?>"><?php echo $button; ?></a>
													
													  <a href="#" class="satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","200|".$okut[bokindex]); ?>" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a href="#" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[bokindex]); ?>" class="bloksil" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>
  
 
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
										<table  class="table table-hover display mb-30" id="edit_datable_1">
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
													<td><?php echo $j ?></td>
													<td><?php echo iconv( "ISO-8859-9","UTF-8",$okut[alanyazisi]); ?></td>
													<td><?php echo $okut[alanadi]; ?></td>
													<td>
													    
													    		    		  <a href="#" class="satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","199|".$okut[alan_index]); ?>" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                                <a href="#" title="<?php echo iconv( "ISO-8859-9","UTF-8",$okut[alan_index]); ?>" class="formalansil" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>
  
													    <a href="#aktarimyap" class="aktarimyap" title="<?php echo $okut[alan_index]; ?>"><button class="btn btn-primary btn-icon-anim btn-square " title="<?php echo $okut[alan_index]; ?>"><i class="icon-arrow-right"></i></button></a>
												<a href="#" title="form_199_recordid_<?php echo $okut[alan_index]; ?>" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a>
												</td></tr>
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
													  <a href="#" class="satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","266|".$okut[altindex]); ?>" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a>
                                             
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
		    
		    </div>
		    <?php
		}
            	
            	
            	 	
            	?> 	
            	
            	
            	<?php
            	    if($_GET[page_id]=='ticketmanager')
            	    {
            	        
            	        $tumu = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi"));
            	        $cokacil = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where aciliyetdurumu='".iconv( "UTF-8","ISO-8859-9",ÇokAcil)."' "));
            	        $normal = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where aciliyetdurumu='".iconv( "UTF-8","ISO-8859-9",Normal)."' "));
            	        $dusuk = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where aciliyetdurumu='".iconv( "UTF-8","ISO-8859-9",Düşük)."' "));
            	        
            	         
            	        $bekliyor = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where ticketdurumu='".iconv( "UTF-8","ISO-8859-9",Bekliyor)."' "));
            	        $tamamlandi = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where ticketdurumu='".iconv( "UTF-8","ISO-8859-9",Tamamlandı)."' "));
            	        $askida = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where ticketdurumu='".iconv( "UTF-8","ISO-8859-9",Askıda)."' "));
            	        $islemde = mysqli_num_rows(mysqli_query($connection,"select * from ticketsistemi where ticketdurumu='".iconv( "UTF-8","ISO-8859-9",İşlemde)."' "));
            	?>
            	
            	
            	<div class="modal fade" id="yenisatirModal_369" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Ekle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_369">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            	
            	    		
				<!-- Row -->
				<div class="row" >
					<div class="col-lg-12">
						<div class="panel panel-default card-view pa-0">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="contact-list">
										<div class="row">
											<aside class="col-lg-2 col-md-4 pr-0">
												<div class="mt-20 mb-20 ml-15 mr-15">
													<a href="index.php?page_id=newrecord&menu_id=368" data-toggle="modal"  title="Compose"    class="btn btn-success btn-block">
													Yeni Ticket
													</a>
													<!-- Modal -->
													<div aria-hidden="true" role="dialog" tabindex="-1" id="myModal" class="modal fade" style="display: none;">
														<div class="modal-dialog">
															<div class="modal-content">
																<div class="modal-header">
																	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
																	<h4 class="modal-title" id="myModalLabel">Add New Contact</h4>
																</div>
																<div class="modal-body">
																	<form class="form-horizontal form-material">
																		<div class="form-group">
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Type name">
																			</div>
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Email">
																			</div>
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Phone">
																			</div>
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Designation">
																			</div>
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Age">
																			</div>
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Date of joining">
																			</div>
																			<div class="col-md-12 mb-20">
																				<input type="text" class="form-control" placeholder="Salary">
																			</div>
																			<div class="col-md-12 mb-20">
																				<div class="fileupload btn btn-danger btn-rounded waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload Contact Image</span>
																					<input type="file" class="upload">
																				</div>
																			</div>
																		</div>
																	</form>
																</div>
																<div class="modal-footer">
																	<button type="button" class="btn btn-info waves-effect" data-dismiss="modal">Save</button>
																	<button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
																</div>
															</div>
															<!-- /.modal-content -->
														</div>
														<!-- /.modal-dialog -->
													</div>
													<!-- /.modal -->
												</div>
												<ul class="inbox-nav mb-30">
												    	<a href="#"  title="Compose"    class="btn btn-warning btn-block btn-sm ">
													Aciliyet Durumu
													</a><br>	
													<li class="active">
														<a href="index.php?page_id=ticketmanager">Tümü<span class="label label-primary ml-10"><?php echo $tumu; ?></span></a>
													</li>
													       
													        <?php
													                 $sql2 = "SELECT DISTINCT aciliyetdurumu FROM ticketsistemi";
															         $sorgula2 = mysqli_query($connection,$sql2);
															      while($oku = mysqli_fetch_assoc($sorgula2))
															      {	?>
												                    <li>
														            <a href="index.php?page_id=ticketmanager&aciliyetdurumu=<?php echo iconv("ISO-8859-9","UTF-8", $oku[aciliyetdurumu]); ?>"><?php echo iconv("ISO-8859-9","UTF-8", $oku[aciliyetdurumu]); ?>
														            <span class="label <?php if(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='ÇokAcil'){echo 'label-danger';} elseif(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='Normal'){echo 'label-warning';} elseif(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='Düşük'){echo 'label-info';} ?> ml-10">
														                <?php if(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='ÇokAcil'){echo $cokacil;} elseif(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='Normal'){echo $normal;} elseif(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='Düşük'){echo $dusuk;} ?>
														                </span>
														                </a>
													                </li>
													            <?php } ?>


												
												</ul>
												
													<ul class="inbox-nav mb-30">
													<a href="#"  title="Compose"    class="btn btn-warning btn-block btn-sm ">
													İşlem Durumu 
													</a><br>
													<li class="active">
														<a href="index.php?page_id=ticketmanager">Hepsi<span class="label label-primary ml-10"><?php echo $tumu; ?></span></a>
													</li>
													
													
													       <?php
													                 $sql2 = "SELECT DISTINCT ticketdurumu FROM ticketsistemi";
															         $sorgula2 = mysqli_query($connection,$sql2);
															      while($oku = mysqli_fetch_assoc($sorgula2))
															        {	?>
												                    <li>
														            <a href="index.php?page_id=ticketmanager&ticketdurumu=<?php echo iconv("ISO-8859-9","UTF-8", $oku[ticketdurumu]); ?>"><?php echo iconv("ISO-8859-9","UTF-8", $oku[ticketdurumu]); ?>
														              <span class="label <?php if(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu])=='Askıda'){echo 'label-danger';} elseif(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu])=='Bekliyor'){echo 'label-warning';} elseif(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu])=='Tamamlandı'){echo 'label-success';} elseif(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu])=='İşlemde'){echo 'label-warning';}  ?> ml-10">
														              <?php if(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu]) == 'Bekliyor'){echo $bekliyor;} elseif(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu]) == 'Tamamlandı'){echo $tamamlandi;} elseif(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu]) == 'Askıda'){echo $askida;} elseif(iconv("ISO-8859-9","UTF-8",$oku[ticketdurumu]) == 'İşlemde'){echo $islemde;} ?>
														              </span>
														            </a>
													                </li>
													            <?php } ?>
													
													
												
												
												</ul>
											
												
											</aside>
											
											<aside class="col-lg-10 col-md-8 pl-0">
												<div class="panel pa-0">
												<div class="panel-wrapper collapse in">
												<div class="panel-body  pa-0">
													<div class="table-responsive mb-30"><br>
														<table id="example" class="table  display table-hover mb-30" data-page-size="10">
															<thead>
																<tr>
																	<th>No</th>
																	<th>Oluşturan</th>
																	<th>Türü</th>
																	<th>Oluşturma Zamanı</th>
																	<th>Durumu</th>
																	<th>Cevaplayan</th>
																	<th>Cevap Zaman</th>
																	<th>İşlem</th>
																</tr>
															</thead>
															<tbody>
															    <?php
															    
															    if($_GET[page_id]=='ticketmanager'){
															        $sql = "select * from ticketsistemi";
															    }
															    if($_GET[aciliyetdurumu]!='' || $_GET[ticketdurumu]!=''){
															         $sql = "select * from ticketsistemi where aciliyetdurumu = '".iconv("UTF-8","ISO-8859-9", $_GET[aciliyetdurumu])."' or ticketdurumu = '".iconv("UTF-8","ISO-8859-9", $_GET[ticketdurumu])."' " ;
															    }
															        $sorgula = mysqli_query($connection,$sql);
															        while($oku = mysqli_fetch_assoc($sorgula))
															        {
															    ?>
																<tr>
																	<td><?php echo $oku[ticketno]; ?></td>
																	<td><a href="#"><?php echo $oku[ticketolusturan]; ?></a></td>
																	<td><?php echo iconv("ISO-8859-9","UTF-8",$oku[ticketturu]); ?></td>
																	<td><?php echo $oku[olusturmatarihi]; ?></td>
																	<td><span class="label <?php if(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='ÇokAcil'){echo 'label-danger';} elseif(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='Normal'){echo 'label-warning';} elseif(iconv("ISO-8859-9","UTF-8",$oku[aciliyetdurumu])=='Düşük'){echo 'label-info';} ?>"><?php echo iconv( "ISO-8859-9","UTF-8", $oku[aciliyetdurumu]); ?></span></td>
																	<td><?php echo iconv("ISO-8859-9","UTF-8",$oku[cevaplayan]); ?></td>
																	<td><?php echo $oku[cevapzaman]; ?></td>
																	<td><a href="#" class="text-inverse pr-10 satirduzelt" title="369|<?php echo $oku[index_ticketsistemi]; ?>"><i class="zmdi zmdi-edit txt-warning"></i></a>
																
																	</td>
																</tr>
															<?php } ?>
														
															
															</tbody>
														</table>
													</div>
												</div>
												</div>
												</div>
											</aside>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
            	
            	
            	
            	
            	<?php } ?>
            	
            	
            	
            
            	<?php
            		if ($_GET[page_id]=='listings_eski')
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
		    
		    
		    
		    	 <div class="modal fade" id="tablosecimModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document" style="min-width:800px;">
                                            <div class="modal-content" >
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Detay Gör</h5>
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
                   
    
		    
		    	    
		     <div class="modal fade" id="yenisatirModal_198" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Düzenle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_198">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    
                                                      <button type="button" id="tabloolustur" name="tabloolustur" class="btn btn-danger" title="<?php echo $_GET[menu_id] ?>">Tablo Oluştur</button>
                                                             <button type="button" id="eksikalanolustur" name="eksikalanolustur" class="btn btn-danger" title="<?php echo $_GET[menu_id] ?>">Eksik Alanları Oluştur</button>
                                                            
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
		    
		    
		          
                                    <div class="modal fade" id="kopyalaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Kopyalama Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    
                                                    
                                                    		<div class="form-wrap">
									
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Kaynak Veritabanı</label>
													<input type="text" name="kaynak" class="form-control" id="kaynak" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Hedef Veritabanı</label>
													<input type="text" name="hedef" class="form-control" id="hedef" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												
											
												<div class="form-group text-center">
													<button type="button" class="btn btn-primary btn-rounded kopyala">Kopyala</button>
												</div>
											<
										</div>
								
                                                 
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
		    
		    	
			        
                                      <div class="modal fade" id="sqlModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel2">SQL Çalıştırma Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Lütfen geçerli bir SQL kodu çalıştırınız.<br>
                                                    
                                                    <form class="checkout" id="odemeformu">
    
    <p>
      <input type="text" class="checkout-input checkout-name" id="sqlkodu" name="sqlkodu" placeholder="SQL kodu" style="width:100%;">
     
    </p>
 
  </form>
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                     <button type="button" class="btn btn-success waves-effect calistir"
                                                        >Çalıştır</button>
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
				
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
										
									<div class="row col-md-12">
									    
									    	
												<a href="index.php?page_id=newrecord&menu_id=<?php echo $_GET[menu_id]; ?>&tasarimid=<?php echo $_GET[tasarimid]; ?>" ><button class="btn btn-success btn-icon-anim btn-square" style="width:100px;"><i class="icon-plus"></i> Yeni</button></a>	
										
											
												<?php
												
												if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
												    ?>			
												<a href="index.php?page_id=listings&menu_id=199&tasarimid=<?php echo $_GET[menu_id]; ?>" id="menu_id=198&recordid=196" class="alanlar" data-original-title="Alanlar"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-settings"></i></button></a>	
													<a href="index.php?page_id=design&tasarimid=<?php echo $_GET[menu_id]; ?>" class="alanlar" data-original-title="Tasarla"><button class="btn btn-primary btn-icon-anim btn-square"><i class="icon-folder"></i></button></a>
													<a  class="sqlcalistir" data-original-title="SQL"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-fire"></i></button></a>
												<a class="s" data-original-title="SQL"><button class="btn btn-flickr btn-icon-anim btn-square satirduzelt" title="198|<?php echo $_GET[menu_id]; ?>"><i class="fa fa-flickr"></i></button></a>
									
										<a class="inline-block excelimport" title="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET[menu_id]."|".''); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-warning">Excelden Aktar</button>
										</a>
									
									<?php
												}
												?>
												
													<a class="inline-block" title="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET[menu_id]."|".''); ?>" data-effect="fadeOut" style="display:none;" >
											<button type="button" class="btn btn-success teklifolustur" id="teklifolustur" style="display:none;">Teklif İsteme Formu Oluştur</button>
										</a>	
									
									    </div>
									    <br>
									    
									    <br><br>
									    
									    
									    
	<?php
	
	if ($tarihalani!='')
	{
	    ?>
	
	<form method="POST" action="index.php?page_id=listings&menu_id=<?php echo $_GET[menu_id]; ?>">
                              
                          


<div class="row">

<div class="col-md-3">


<?php

if ($_POST[filtreturu]=='')
{
$sel1="";
$sel2="";
$sel3="";
$sel4="";
$sel5="selected";
$stil5="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil3="style=\"display:none\"";
    
}

if ($_POST[filtreturu]!='')
{
if ($_POST[filtreturu]=='Aylık')
{
$sel1="selected";
$stil5="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil3="style=\"display:none\"";
}

if ($_POST[filtreturu]=='Haftalık')
{
$sel2="selected";
$stil5="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil1="style=\"display:none\"";
$stil2="style=\"display:none\"";
}

if ($_POST[filtreturu]=='3 Aylık')
{
$sel3="selected";
$stil5="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil2="style=\"display:none\"";
}

if ($_POST[filtreturu]=='Tarih Aralığı')
{
$sel4="selected";
$stil4="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil1="style=\"display:none\"";
$stil2="style=\"display:none\"";
}

if ($_POST[filtreturu]=='Yıllık')
{
$sel5="selected";
$stil5="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil2="style=\"display:none\"";
}


}


?>

Filtre Türü: <select class="select2_category form-control" name="filtreturu" id="filtreturu"  data-placeholder="Seçiniz" tabindex="1">
<option <?php echo $sel4; ?>>Tarih Aralığı</option>
<option <?php echo $sel2; ?>>Haftalık</option>
<option <?php echo $sel1; ?>>Aylık</option>
<option <?php echo $sel3; ?>>3 Aylık</option>
<option <?php echo $sel5; ?>>Yıllık</option>
</select>

</div>	


<div class="col-md-3" id="yilsecim" <?php echo $stil1; ?>>

Yıl: <select class="select2_category form-control" name="yilfiltre" id="yilfiltre"  data-placeholder="Seçiniz" tabindex="1">
<?php
if ($_POST[yilfiltre]==date('Y'))
{
?>
<option selected><?php echo date('Y'); ?></option>
<option>2020</option>
<?php
}


if ($_POST[yilfiltre]=='2020')
{
?>
<option selected>2020</option>
<option>2021</option>
<?php
}

if ($_POST[yilfiltre]!=date('Y')&&$_POST[yilfiltre]!='2020')
{
?>
<option><?php echo date('Y'); ?></option>
<option>2020</option>
<?php
}
?>
</select>

</div>

<?php



if ($_POST[ayfiltre]!='')
{
if ($_POST[ayfiltre]==1)
{
    $sec1="selected";
}

if ($_POST[ayfiltre]==2)
{
    $sec2="selected";
}if ($_POST[ayfiltre]==3)
{
    $sec3="selected";
}if ($_POST[ayfiltre]==4)
{
    $sec4="selected";
}if ($_POST[ayfiltre]==5)
{
    $sec5="selected";
}if ($_POST[ayfiltre]==6)
{
    $sec6="selected";
}if ($_POST[ayfiltre]==7)
{
    $sec7="selected";
}if ($_POST[ayfiltre]==8)
{
    $sec8="selected";
}

if ($_POST[ayfiltre]==9)
{
    $sec9="selected";
}if ($_POST[ayfiltre]==10)
{
    $sec10="selected";
}if ($_POST[ayfiltre]==11)
{
    $sec11="selected";
}if ($_POST[ayfiltre]==12)
{
    $sec12="selected";
}
}


if ($_POST[ayfiltre]=='')
{
if (date('m')==1)
{
    $sec1="selected";
}

if (date('m')==2)
{
    $sec2="selected";
}if (date('m')==3)
{
    $sec3="selected";
}if (date('m')==4)
{
    $sec4="selected";
}if (date('m')==5)
{
    $sec5="selected";
}if (date('m')==6)
{
    $sec6="selected";
}if (date('m')==7)
{
    $sec7="selected";
}if (date('m')==8)
{
    $sec8="selected";
}

if (date('m')==9)
{
    $sec9="selected";
}if (date('m')==10)
{
    $sec10="selected";
}if (date('m')==11)
{
    $sec11="selected";
}if (date('m')==12)
{
    $sec12="selected";
}
}


if ($_POST[ilktarih]!='')
{
       $ilktarih=$_POST[ilktarih];
}
if ($_POST[sontarih]!='')
{
      $sontarih=$_POST[sontarih];
}

if ($_POST[ilktarih]=='')
{
    $ilktarih=date('Y')."-".date('m')."-01";
    
}




if ($_POST[sontarih]=='')
{
    
    $gunsayisi=cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
    
    $sontarih=date('Y')."-".date('m')."-".$gunsayisi;
    
}

if ($_POST[filtreturu]=='Aylık')
{
    $ilktarih=$_POST[yilfiltre]."-".$_POST[ayfiltre]."-"."01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, $_POST[ayfiltre], $_POST[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-".$_POST[ayfiltre]."-".$gunsayisi;

}


if ($_POST[filtreturu]=='3 Aylık')
{
    if ($_POST[ucayfiltre]=='0')
    {
       
       $ilktarih=$_POST[yilfiltre]."-01-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 3, $_POST[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-03-".$gunsayisi;
       
       
    }
    if ($_POST[ucayfiltre]=='1')
    {
        
          
       $ilktarih=$_POST[yilfiltre]."-04-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 6, $_POST[yilfiltre]);
    
    $sontarih=$_GET[yilfiltre]."-06-".$gunsayisi;
        
    }
    if ($_GET[ucayfiltre]=='2')
    {
        
         $ilktarih=$_GET[yilfiltre]."-07-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 9, $_POST[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-09-".$gunsayisi;
        
    }
    if ($_POST[ucayfiltre]=='3')
    {
        
         $ilktarih=$_POST[yilfiltre]."-10-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 12, $_GET[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-12-".$gunsayisi;
        
    }
    
}

if ($_POST[filtreturu]=='Yıllık')
{
      $ilktarih=$_POST[yilfiltre]."-01-01";

    $sontarih=$_POST[yilfiltre]."-12-31";
    
}

if ($_POST[filtreturu]=='Haftalık')
{
 
 if ($_POST[haftafiltre]==0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));   

$sontarih=date("Y-m-d", strtotime('sunday this week'));
 }  
 
  if ($_POST[haftafiltre]>0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));  

$say=$_POST[haftafiltre];

$ilktarih=date('Y-m-d', strtotime($ilktarih.' -'.($say*7).' days')); 

$sontarih=date('Y-m-d', strtotime($ilktarih.' 6 days')); 

 }  
    
}


?>
<div class="col-md-3" id="aysecim" <?php echo $stil2; ?>>

Ay: <select class="select2_category form-control" name="ayfiltre" id="ayfiltre"  data-placeholder="Seçiniz" tabindex="1">
<option value="01" <?php echo $sec1; ?>>Ocak</option>
<option value="02" <?php echo $sec2; ?>>Şubat</option>
<option value="03" <?php echo $sec3; ?>>Mart</option>
<option value="04" <?php echo $sec4; ?>>Nisan</option>
<option value="05" <?php echo $sec5; ?>>Mayıs</option>
<option value="06" <?php echo $sec6; ?>>Haziran</option>
<option value="07" <?php echo $sec7; ?>>Temmuz</option>
<option value="08" <?php echo $sec8; ?>>Ağustos</option>
<option value="09" <?php echo $sec9; ?>>Eylül</option>
<option value="10" <?php echo $sec10; ?>>Ekim</option>
<option value="11" <?php echo $sec11; ?>>Kasım</option>
<option value="12" <?php echo $sec12; ?>>Aralık</option>

</select>

</div>


<div class="col-md-3" id="haftasecim" <?php echo $stil3; ?>>

Ay: <select class="select2_category form-control" name="haftafiltre" id="haftafiltre"  data-placeholder="Seçiniz" tabindex="1">

<?php
if ($_POST[haftafiltre]==''||$_POST[haftafiltre]=='0')
{
    ?>
<option value="0" selected>Bu Hafta</option>
<?php
}

if ($_GET[haftafiltre]!=''&&$_POST[haftafiltre]!='0')
{
    ?>
<option value="0">Bu Hafta</option>
<?php
}



for ($i=1;$i<52;$i++)
{
    
 if ($_POST[haftafiltre]==$i)
{   
echo "<option value=\"$i\" selected>Hafta (-".$i.")</option>";
}

    
 if ($_POST[haftafiltre]!=$i)
{   
echo "<option value=\"$i\">Hafta (-".$i.")</option>";
}
    
}
?>
</select>

</div>


<?php

if ($_POST[ucayfiltre]==''||$_POST[ucayfiltre]=='0')
{
  $a1="selected";
}

if ($_POST[ucayfiltre]=='1')
{
  $a2="selected";
}

if ($_POST[ucayfiltre]=='2')
{
  $a3="selected";
}

if ($_POST[ucayfiltre]=='3')
{
  $a4="selected";
}
?>
<div class="col-md-3" <?php echo $stil4; ?> id="ucaysecim">

3 Aylık: <select class="select2_category form-control" name="ucayfiltre" id="ucayfiltre"  data-placeholder="Seçiniz" tabindex="1">

<option value="0" <?php echo $a1; ?>>Oca-Şub-Mar</option>
<option value="1" <?php echo $a2; ?>>Nsi-May-Haz</option>
<option value="2" <?php echo $a3; ?>>Tem-Ağu-Eyl</option>
<option value="3" <?php echo $a4; ?>>Eki-Kas-Ara</option>


</select>

</div>

<div <?php echo $boyut; ?> <?php echo $stil5; ?> id="tarih1"> 

İlk Tarih: <input type="date" title="<?php echo $etiketi; ?>" id="ilktarih" name="ilktarih"  class="form-control" placeholder="Başlangıç Tarihini Seçin" value="<?php echo iconv( "ISO-8859-9","UTF-8",$ilktarih); ?>">

</div>	

<div <?php echo $boyut; ?> <?php echo $stil5; ?> id="tarih2">

Son Tarih: <input type="date" title="<?php echo $etiketi; ?>" id="sontarih" name="sontarih"  class="form-control" placeholder="Bitiş Tarihini Seçin" value="<?php echo iconv( "ISO-8859-9","UTF-8",$sontarih); ?>">

</div>

<?php 

if ($menu_id=='160')
{
    ?>


<div class="col-md-3">

Adı: <input type="text" title="Ad Soyad" id="fatura_adi" name="fatura_adi"  class="form-control" placeholder="Adı" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["adsoyad"]); ?>">

</div>

<div class="col-md-3">

Soyadı:<input type="text" title="Soyadı" id="fatura_soyadi" name="fatura_soyadi"  class="form-control" placeholder="Soyadı" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["eposta"]); ?>">

</div>

</div>

<div class="row">
    
    <div class="col-md-3">

E-Posta:<input type="text" title="E-Posta" id="eposta" name="eposta"  class="form-control" placeholder="E-Posta" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["eposta"]); ?>">

</div>



<div class="col-md-3">

Sipariş No: <input type="text" title="Sipariş No" id="siparisno" name="siparisno"  class="form-control" placeholder="Sipariş No" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["siparisno"]); ?>">

</div>

<div class="col-md-3">

Telefon: <input type="text" title="Telefon" id="fatura_telno" name="fatura_telno"  class="form-control" placeholder="Telefon" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["telefon"]); ?>">

</div>


</div>
<div class="row">
<div class="col-md-3">

Ödeme Şekli: <select class="select2_category form-control" name="optradio[]" id="optradio" data-placeholder="Ödeme Tipi" tabindex="1" multiple="multiple">
<option value="">Tümü</option>
						<option value="Kredi">Kredi/Banka Kartı</option>
						<option value="Kapıda">Kapıda Ödeme</option>
						<option value="Havale">EFT/Havale</option>
</select>
</div>

<div <?php echo $boyut; ?>>

Sipariş Durumu: <select class="select2_category form-control" name="siparisdurumu[]" id="siparisdurumu" data-placeholder="Sipariş Durumu" tabindex="1" multiple="multiple">
	<option value="Onay Bekliyor">Onay Bekliyor</option>
						<option value="Onaylandı">Onaylandı</option>
						<option value="Hazırlanıyor">Hazırlanıyor</option>
						<option value="Kargolandı">Kargolandı</option>
						<option value="Teslim Edildi">Teslim Edildi</option>
						<option value="İptal Edildi">İptal Edildi</option>
						<option value="İade Edildi">İade</option>
</select>
</div>
</div>
    
    <?php
    
}
?>
<br>
								<div class="col-md-3">
<button type="submit" class="btn btn-danger mr10 mb15">Filtrele</button></div>
	</form>
	
		<br><br><br>
	

	
	</div>
	<div class="row">
	<?php
	}
	?>									    
									    
									    
											<table id="example" class="table table-hover display"  >
												<thead>
											
											
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
                                           <th>İşlem Menüsü</th>
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








if ($_GET["menu_id"]=="199"&&$_GET[tasarimid]!='')

{

	$filtre=$filtre." and (form_index=$_GET[tasarimid])";

}


if ($_GET["menu_id"]=="232"&&$_GET[siparisno]!='')

{

	$filtre=$filtre." and (siparisno=$_GET[siparisno])";

}



if ($tarihalani!=''&&$_POST[filtreturu]=='')
{
    $filtre=$filtre." and month(".$tarihalani.")=month(CURRENT_DATE) and year(".$tarihalani.")=year(CURRENT_DATE)";
    
}


if ($_POST["ilktarih"]!=""||$_POST[filtreturu]!='')

{

	$filtre=$filtre." and (".$tarihalani.">='".$ilktarih."' and ".$tarihalani."<='".$sontarih."') ";

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
                                                <a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_<?php echo $okun[$anahtars]; ?>"  title="kopyala" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a>
 
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
		    
		   
                                    
                                    
                                    		    	    
		     <div class="modal fade" id="yenisatirModal_198" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Düzenle</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body" id="yeniformicerik_198">
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                    
                                                    
                                                      <button type="button" id="tabloolustur" name="tabloolustur" class="btn btn-danger" title="<?php echo $_GET[menu_id] ?>">Tablo Oluştur</button>
                                                             <button type="button" id="eksikalanolustur" name="eksikalanolustur" class="btn btn-danger" title="<?php echo $_GET[menu_id] ?>">Eksik Alanları Oluştur</button>
                                                            
                                                    
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
		    
		    
		    
		     
                                    <div class="modal fade" id="kopyalaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Kopyalama Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    
                                                    
                                                    		<div class="form-wrap">
									
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Kaynak Veritabanı</label>
													<input type="text" name="kaynak" class="form-control" id="kaynak" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												<div class="form-group">
													<label class="control-label mb-10" for="exampleInputEmail_2">Hedef Veritabanı</label>
													<input type="text" name="hedef" class="form-control" id="hedef" placeholder="<?php echo $veritabani; ?>" value="<?php echo $veritabani; ?>">
												</div>
												
											
												<div class="form-group text-center">
													<button type="button" class="btn btn-primary btn-rounded kopyala">Kopyala</button>
												</div>
										
										</div>
								
                                                 
                                                </div>
                                                <div class="modal-footer">
                                                      <button type="button" id="tabloolustur" name="tabloolustur" class="btn btn-danger">Tablo Oluştur</button>
                                                             <button type="button" id="eksikalanolustur" name="eksikalanolustur" class="btn btn-danger">Eksik Alanları Oluştur</button>
                                                            
                                                    <button type="button" class="btn btn-success waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
		    
		    
		    	
			        
                                      <div class="modal fade" id="sqlModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel2">SQL Çalıştırma Ekranı</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Lütfen geçerli bir SQL kodu çalıştırınız.<br>
                                                    
                                                    <form class="checkout" id="odemeformu">
    
    <p>
      <input type="text" class="checkout-input checkout-name" id="sqlkodu" name="sqlkodu" placeholder="SQL kodu" style="width:100%;">
     
    </p>
 
  </form>
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                     <button type="button" class="btn btn-success waves-effect calistir"
                                                        >Çalıştır</button>
                                                    <button type="button" class="btn btn-danger waves-effect"
                                                        data-dismiss="modal">Vazgeç</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
				
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
										
									<div class="row col-md-12">
									    
									    	
												<a href="index.php?page_id=newrecord&menu_id=<?php echo $_GET[menu_id]; ?>&tasarimid=<?php echo $_GET[tasarimid]; ?>" ><button class="btn btn-success btn-icon-anim btn-square" style="width:100px;"><i class="icon-plus"></i> Yeni</button></a>	
													
												
											
												
												
												<?php
												
												if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
												    ?>
												    <a href="index.php?page_id=listings&menu_id=199&tasarimid=<?php echo $_GET[menu_id]; ?>" id="menu_id=198&recordid=196" class="alanlar" data-original-title="Alanlar"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-settings"></i></button></a>	
												
													<a href="index.php?page_id=design&tasarimid=<?php echo $_GET[menu_id]; ?>" class="alanlar" data-original-title="Tasarla"><button class="btn btn-primary btn-icon-anim btn-square"><i class="icon-folder"></i></button></a>
												
													<a  class="sqlcalistir" data-original-title="SQL"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-fire"></i></button></a>
												<a  class="s" data-original-title="SQL"><button class="btn btn-flickr btn-icon-anim btn-square satirduzelt" title="<?php echo iconv( "ISO-8859-9","UTF-8","198|".$_GET[menu_id]); ?>"><i class="fa fa-flickr"></i></button></a>
									            
										<a class="inline-block excelimport" title="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET[menu_id]."|".''); ?>" data-effect="fadeOut">
											<button type="button" class="btn btn-warning">Excelden Aktar</button>
										</a>
									          <?php
												}
												?>
												
												
															<a class="inline-block" title="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET[menu_id]."|".''); ?>" data-effect="fadeOut" style="display:none;" >
											<button type="button" class="btn btn-success proformaolustur" id="proformaolustur" style="display:none;">Proforma Oluştur</button>
										</a>
									    </div>
									    <br>
									    
									     <br>
									     
									      <br>
	
	<?php
	
	if ($tarihalani!='')
	{
	    ?>
	
	<form method="POST" action="index.php?page_id=listings&menu_id=<?php echo $_GET[menu_id]; ?>">
                              
                          


<div class="row">

<div class="col-md-3">


<?php

if ($_POST[filtreturu]=='')
{
$sel1="";
$sel2="";
$sel3="";
$sel4="";
$sel5="selected";
$stil5="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil2="style=\"display:none\"";
    
}

if ($_POST[filtreturu]!='')
{
if ($_POST[filtreturu]=='Aylık')
{
$sel1="selected";
$stil5="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil3="style=\"display:none\"";
}

if ($_POST[filtreturu]=='Haftalık')
{
$sel2="selected";
$stil5="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil1="style=\"display:none\"";
$stil2="style=\"display:none\"";
}

if ($_POST[filtreturu]=='3 Aylık')
{
$sel3="selected";
$stil5="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil2="style=\"display:none\"";
}

if ($_POST[filtreturu]=='Tarih Aralığı')
{
$sel4="selected";
$stil4="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil1="style=\"display:none\"";
$stil2="style=\"display:none\"";
}

if ($_POST[filtreturu]=='Yıllık')
{
$sel5="selected";
$stil5="style=\"display:none\"";
$stil3="style=\"display:none\"";
$stil4="style=\"display:none\"";
$stil2="style=\"display:none\"";
}


}


?>

Filtre Türü: <select class="select2_category form-control" name="filtreturu" id="filtreturu"  data-placeholder="Seçiniz" tabindex="1">
<option <?php echo $sel4; ?>>Tarih Aralığı</option>
<option <?php echo $sel2; ?>>Haftalık</option>
<option <?php echo $sel1; ?>>Aylık</option>
<option <?php echo $sel3; ?>>3 Aylık</option>
<option <?php echo $sel5; ?>>Yıllık</option>
</select>

</div>	


<div class="col-md-3" id="yilsecim" <?php echo $stil1; ?>>

Yıl: <select class="select2_category form-control" name="yilfiltre" id="yilfiltre"  data-placeholder="Seçiniz" tabindex="1">
<?php
if ($_POST[yilfiltre]==date('Y'))
{
?>
<option selected><?php echo date('Y'); ?></option>
<option>2020</option>
<?php
}


if ($_POST[yilfiltre]=='2020')
{
?>
<option selected>2020</option>
<option>2021</option>
<?php
}

if ($_POST[yilfiltre]!=date('Y')&&$_POST[yilfiltre]!='2020')
{
?>
<option><?php echo date('Y'); ?></option>
<option>2020</option>
<?php
}
?>
</select>

</div>

<?php



if ($_POST[ayfiltre]!='')
{
if ($_POST[ayfiltre]==1)
{
    $sec1="selected";
}

if ($_POST[ayfiltre]==2)
{
    $sec2="selected";
}if ($_POST[ayfiltre]==3)
{
    $sec3="selected";
}if ($_POST[ayfiltre]==4)
{
    $sec4="selected";
}if ($_POST[ayfiltre]==5)
{
    $sec5="selected";
}if ($_POST[ayfiltre]==6)
{
    $sec6="selected";
}if ($_POST[ayfiltre]==7)
{
    $sec7="selected";
}if ($_POST[ayfiltre]==8)
{
    $sec8="selected";
}

if ($_POST[ayfiltre]==9)
{
    $sec9="selected";
}if ($_POST[ayfiltre]==10)
{
    $sec10="selected";
}if ($_POST[ayfiltre]==11)
{
    $sec11="selected";
}if ($_POST[ayfiltre]==12)
{
    $sec12="selected";
}
}


if ($_POST[ayfiltre]=='')
{
if (date('m')==1)
{
    $sec1="selected";
}

if (date('m')==2)
{
    $sec2="selected";
}if (date('m')==3)
{
    $sec3="selected";
}if (date('m')==4)
{
    $sec4="selected";
}if (date('m')==5)
{
    $sec5="selected";
}if (date('m')==6)
{
    $sec6="selected";
}if (date('m')==7)
{
    $sec7="selected";
}if (date('m')==8)
{
    $sec8="selected";
}

if (date('m')==9)
{
    $sec9="selected";
}if (date('m')==10)
{
    $sec10="selected";
}if (date('m')==11)
{
    $sec11="selected";
}if (date('m')==12)
{
    $sec12="selected";
}
}


if ($_POST[ilktarih]!='')
{
       $ilktarih=$_POST[ilktarih];
}
if ($_POST[sontarih]!='')
{
      $sontarih=$_POST[sontarih];
}

if ($_POST[ilktarih]=='')
{
    $ilktarih=date('Y')."-".date('m')."-01";
    
}




if ($_POST[sontarih]=='')
{
    
    $gunsayisi=cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
    
    $sontarih=date('Y')."-".date('m')."-".$gunsayisi;
    
}

if ($_POST[filtreturu]=='Aylık')
{
    $ilktarih=$_POST[yilfiltre]."-".$_POST[ayfiltre]."-"."01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, $_POST[ayfiltre], $_POST[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-".$_POST[ayfiltre]."-".$gunsayisi;

}


if ($_POST[filtreturu]=='3 Aylık')
{
    if ($_POST[ucayfiltre]=='0')
    {
       
       $ilktarih=$_POST[yilfiltre]."-01-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 3, $_POST[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-03-".$gunsayisi;
       
       
    }
    if ($_POST[ucayfiltre]=='1')
    {
        
          
       $ilktarih=$_POST[yilfiltre]."-04-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 6, $_POST[yilfiltre]);
    
    $sontarih=$_GET[yilfiltre]."-06-".$gunsayisi;
        
    }
    if ($_GET[ucayfiltre]=='2')
    {
        
         $ilktarih=$_GET[yilfiltre]."-07-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 9, $_POST[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-09-".$gunsayisi;
        
    }
    if ($_POST[ucayfiltre]=='3')
    {
        
         $ilktarih=$_POST[yilfiltre]."-10-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 12, $_GET[yilfiltre]);
    
    $sontarih=$_POST[yilfiltre]."-12-".$gunsayisi;
        
    }
    
}

if ($_POST[filtreturu]=='Yıllık')
{
      $ilktarih=$_POST[yilfiltre]."-01-01";

    $sontarih=$_POST[yilfiltre]."-12-31";
    
}

if ($_POST[filtreturu]=='Haftalık')
{
 
 if ($_POST[haftafiltre]==0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));   

$sontarih=date("Y-m-d", strtotime('sunday this week'));
 }  
 
  if ($_POST[haftafiltre]>0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));  

$say=$_POST[haftafiltre];

$ilktarih=date('Y-m-d', strtotime($ilktarih.' -'.($say*7).' days')); 

$sontarih=date('Y-m-d', strtotime($ilktarih.' 6 days')); 

 }  
    
}


?>
<div class="col-md-3" id="aysecim" <?php echo $stil2; ?>>

Ay: <select class="select2_category form-control" name="ayfiltre" id="ayfiltre"  data-placeholder="Seçiniz" tabindex="1">
<option value="01" <?php echo $sec1; ?>>Ocak</option>
<option value="02" <?php echo $sec2; ?>>Şubat</option>
<option value="03" <?php echo $sec3; ?>>Mart</option>
<option value="04" <?php echo $sec4; ?>>Nisan</option>
<option value="05" <?php echo $sec5; ?>>Mayıs</option>
<option value="06" <?php echo $sec6; ?>>Haziran</option>
<option value="07" <?php echo $sec7; ?>>Temmuz</option>
<option value="08" <?php echo $sec8; ?>>Ağustos</option>
<option value="09" <?php echo $sec9; ?>>Eylül</option>
<option value="10" <?php echo $sec10; ?>>Ekim</option>
<option value="11" <?php echo $sec11; ?>>Kasım</option>
<option value="12" <?php echo $sec12; ?>>Aralık</option>

</select>

</div>


<div class="col-md-3" id="haftasecim" <?php echo $stil3; ?>>

Ay: <select class="select2_category form-control" name="haftafiltre" id="haftafiltre"  data-placeholder="Seçiniz" tabindex="1">

<?php
if ($_POST[haftafiltre]==''||$_POST[haftafiltre]=='0')
{
    ?>
<option value="0" selected>Bu Hafta</option>
<?php
}

if ($_GET[haftafiltre]!=''&&$_POST[haftafiltre]!='0')
{
    ?>
<option value="0">Bu Hafta</option>
<?php
}



for ($i=1;$i<52;$i++)
{
    
 if ($_POST[haftafiltre]==$i)
{   
echo "<option value=\"$i\" selected>Hafta (-".$i.")</option>";
}

    
 if ($_POST[haftafiltre]!=$i)
{   
echo "<option value=\"$i\">Hafta (-".$i.")</option>";
}
    
}
?>
</select>

</div>


<?php

if ($_POST[ucayfiltre]==''||$_POST[ucayfiltre]=='0')
{
  $a1="selected";
}

if ($_POST[ucayfiltre]=='1')
{
  $a2="selected";
}

if ($_POST[ucayfiltre]=='2')
{
  $a3="selected";
}

if ($_POST[ucayfiltre]=='3')
{
  $a4="selected";
}
?>
<div class="col-md-3" <?php echo $stil4; ?> id="ucaysecim">

3 Aylık: <select class="select2_category form-control" name="ucayfiltre" id="ucayfiltre"  data-placeholder="Seçiniz" tabindex="1">

<option value="0" <?php echo $a1; ?>>Oca-Şub-Mar</option>
<option value="1" <?php echo $a2; ?>>Nsi-May-Haz</option>
<option value="2" <?php echo $a3; ?>>Tem-Ağu-Eyl</option>
<option value="3" <?php echo $a4; ?>>Eki-Kas-Ara</option>


</select>

</div>

<div <?php echo $boyut; ?> <?php echo $stil5; ?> id="tarih1"> 

İlk Tarih: <input type="date" title="<?php echo $etiketi; ?>" id="ilktarih" name="ilktarih"  class="form-control" placeholder="Başlangıç Tarihini Seçin" value="<?php echo iconv( "ISO-8859-9","UTF-8",$ilktarih); ?>">

</div>	

<div <?php echo $boyut; ?> <?php echo $stil5; ?> id="tarih2">

Son Tarih: <input type="date" title="<?php echo $etiketi; ?>" id="sontarih" name="sontarih"  class="form-control" placeholder="Bitiş Tarihini Seçin" value="<?php echo iconv( "ISO-8859-9","UTF-8",$sontarih); ?>">

</div>

<?php 

if ($menu_id=='160')
{
    ?>


<div class="col-md-3">

Adı: <input type="text" title="Ad Soyad" id="fatura_adi" name="fatura_adi"  class="form-control" placeholder="Adı" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["adsoyad"]); ?>">

</div>

<div class="col-md-3">

Soyadı:<input type="text" title="Soyadı" id="fatura_soyadi" name="fatura_soyadi"  class="form-control" placeholder="Soyadı" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["eposta"]); ?>">

</div>

</div>

<div class="row">
    
    <div class="col-md-3">

E-Posta:<input type="text" title="E-Posta" id="eposta" name="eposta"  class="form-control" placeholder="E-Posta" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["eposta"]); ?>">

</div>



<div class="col-md-3">

Sipariş No: <input type="text" title="Sipariş No" id="siparisno" name="siparisno"  class="form-control" placeholder="Sipariş No" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["siparisno"]); ?>">

</div>

<div class="col-md-3">

Telefon: <input type="text" title="Telefon" id="fatura_telno" name="fatura_telno"  class="form-control" placeholder="Telefon" value="<?php echo iconv( "ISO-8859-9","UTF-8",$_GET["telefon"]); ?>">

</div>


</div>
<div class="row">
<div class="col-md-3">

Ödeme Şekli: <select class="select2_category form-control" name="optradio[]" id="optradio" data-placeholder="Ödeme Tipi" tabindex="1" multiple="multiple">
<option value="">Tümü</option>
						<option value="Kredi">Kredi/Banka Kartı</option>
						<option value="Kapıda">Kapıda Ödeme</option>
						<option value="Havale">EFT/Havale</option>
</select>
</div>

<div <?php echo $boyut; ?>>

Sipariş Durumu: <select class="select2_category form-control" name="siparisdurumu[]" id="siparisdurumu" data-placeholder="Sipariş Durumu" tabindex="1" multiple="multiple">
	<option value="Onay Bekliyor">Onay Bekliyor</option>
						<option value="Onaylandı">Onaylandı</option>
						<option value="Hazırlanıyor">Hazırlanıyor</option>
						<option value="Kargolandı">Kargolandı</option>
						<option value="Teslim Edildi">Teslim Edildi</option>
						<option value="İptal Edildi">İptal Edildi</option>
						<option value="İade Edildi">İade</option>
</select>
</div>
</div>
    
    <?php
    
}
?>
<br>
								<div class="col-md-3">
<button type="submit" class="btn btn-danger mr10 mb15">Filtrele</button></div>
	</form>
	
		<br><br><br>
	

	
	</div>
	<div class="row">
	<?php
	}
	?>
	

											<table id="tableexport_yeni" class="table table-striped"  >
												<thead>
											
											
											
												<tr>
									<th>ID</th>
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
                                           <th>İşlem Menüsü</th>
<?php
}
?>
                                             
                                        </tr>									
									
									
									
												</thead>
												
										
										
										
											
											
										
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
				
				<div class="row" id="formduzenle" name="formduzenle">
				    
				    </div>
				
		    
		   <?php
		} 
		
		
		
			    if($_GET[page_id]=='durusraporu'){ ?>
	        
	        
	        	 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">		
		           <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 " title="4" > 
	        	<div class="panel panel-default card-view bg-gradient" >
							<div class="panel-wrapper collapse in">
                                <div class="panel-body sm-data-box-1">
									<span class="uppercase-font weight-500 font-14 block text-center txt-light">Üretim Duruş Raporları</span>	
							<div class="progress-anim mt-20">
										<div class="progress">
											<div class="progress-bar progress-bar-light wow animated progress-animated" role="progressbar" aria-valuenow="93.12" aria-valuemin="0" aria-valuemax="100" style="width: 93.12%;"></div>
										</div>
									</div>
									<select class="form-control" data-placeholder="Choose a Category" tabindex="1" id="durusraporlari">
									    <?php
									            
									            if($_SESSION[ismerkezi]!=''){
									            ?>
									            <optgroup label="İş Merkezi">
									           
									           <?php
									           
									           $dilimler = explode(";", $_SESSION[ismerkezi]);
									           
									           for($i=0;$i<count($dilimler);$i++)
									           {
									           
									            echo "<option value=\"$dilimler[$i]\">".$dilimler[$i]."</option>";
									            
									            
									           }
									           ?>
									           
									            </optgroup>
									  
									           
									         
									          
									          
										<?php } ?>
										
										
								
									</select>
							        
							        <?php
                                        //get the current year
                                        $Startyear=date('Y');
                                        $endYear=$Startyear-2;
                                        
                                        // set start and end year range i.e the start year
                                        $yearArray = range($Startyear,$endYear);
                                        ?>
                                        <!-- here you displaying the dropdown list -->
                                        <select class="form-control mt-5" id="durusyili">
                                            <option value="">Yıl Seçin</option>
                                            <?php
                                            foreach ($yearArray as $year) {
                                                // this allows you to select a particular year
                                                $selected = ($year == $Startyear) ? 'selected' : '';
                                                echo '<option '.$selected.' value="'.$year.'">'.$year.'</option>';
                                            }
                                            ?>
                                        </select>
							   
							
								</div>
                            </div>
                        </div>
                </div>
                        <div id="durusraporlarilistesi">
		                		
						</div>
							
							
							
						</div>
	        
	     <?php   }
		   
		
			if ($_GET[page_id]=='')
		{
		   	echo " <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">";
		
	        ?>
	                	<div id="sifredegistirmodal" class="modal fade " tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-body" id="sifredegistiricerik">
													</div>
														
												</div>
											
											</div>
										</div>
									
            
	        <?php
	    	
		if ($_SESSION["tanimlidashboard"]=='1'||$_SESSION["tanimlidashboard"]=='2')
		{
		    
		    //İş İstasyonu-1
		     //İş Merkezi-2
		     
		     ?>
		     
		    
		    
	
				
            	 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">		
		           <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 " title="4" > 
	        	<div class="panel panel-default card-view bg-gradient" >
							<div class="panel-wrapper collapse in">
                                <div class="panel-body sm-data-box-1">
									<span class="uppercase-font weight-500 font-14 block text-center txt-light">İş Emirleri Listesi</span>	
							<div class="progress-anim mt-20">
										<div class="progress">
											<div class="progress-bar progress-bar-light wow animated progress-animated" role="progressbar" aria-valuenow="93.12" aria-valuemin="0" aria-valuemax="100" style="width: 93.12%;"></div>
										</div>
									</div>
									<select class="form-control" data-placeholder="Choose a Category" tabindex="1" id="istasyonsecimi">
									    <?php 
									    
									    
									      
									            
									            if($_SESSION[ismerkezi]!=''){
									            ?>
									            <optgroup label="İş Merkezi">
									           
									           <?php
									           
									           $dilimler = explode(";", $_SESSION[ismerkezi]);
									           
									           for($i=0;$i<count($dilimler);$i++)
									           {
									           
									            echo "<option value=\"$dilimler[$i]\">".$dilimler[$i]."</option>";
									            
									            
									           }
									           ?>
									           
									            </optgroup>
									            <optgroup label="İş İstasyonları">
									                
									              <?php
									              
									              $sql="select * from is_istasyonlari ";
									              
									           
									              $sorgula=mysqli_query($connection,$sql);
									              while($okut=mysqli_fetch_assoc($sorgula))
									              {
									                  
									                    echo "<option value=\"".$okut[is_istasyon_adi]."\">".$okut[is_istasyon_adi]."</option>";
									                 
									                  
									               }
									                
									               ?>
									                
									            </optgroup>
									           
									         
									          
									          
										<?php }
										
										
										 if($_SESSION[istasyonu]!=''){
									            ?>
									           
									            <optgroup label="İş İstasyonları">
									                
									              <?php
									              
									              $sql="select * from is_istasyonlari where instr('".$_SESSION[istasyonu]."',is_istasyon_adi)";
									              
									            
									              $sorgula=mysqli_query($connection,$sql);
									              while($okut=mysqli_fetch_assoc($sorgula))
									              {
									                  
									                    echo "<option value=\"".$okut[is_istasyon_adi]."\">".$okut[is_istasyon_adi]."</option>";
									                 
									                  
									               }
									                
									               ?>
									                
									            </optgroup>
									           
									         
									          
									          
										<?php }
										
										?>
									</select>
								</div>
                            </div>
                        </div>
                </div>
                        <div id="isemrilistesi">
		                		
						</div>
							
						</div>
							<div class="modal fade" id="ihtiyacmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
											<div class="modal-dialog" role="document">
												<div class="modal-content">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel1">Bir Talebim Var !</h5>
													</div>
													<div class="modal-body" id="ihtiyacicerik">
														<form>
																<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Operasyon İht. Haz. :</label>
																<input type="text" class="form-control" id="recipient-name1">
															</div>
															<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Teknik Resim : </label>
																<input type="file" class="form-control" id="recipient-name1">
															</div>
																<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Malafa / Fikstür / Ayak : </label>
																<input type="text" class="form-control" id="recipient-name1">
															</div>
															<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Hammaddde : </label>
																<input type="text" class="form-control" id="recipient-name1">
															</div>
																<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Kesici Takım : </label>
																<input type="text" class="form-control" id="recipient-name1">
															</div>
																<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Kalite Ölçüm Ekip : </label>
																<input type="text" class="form-control" id="recipient-name1">
															</div>
																<div class="form-group">
																<label for="recipient-name" class="control-label mb-10">Paketleme Malz : </label>
																<input type="text" class="form-control" id="recipient-name1">
															</div>
														</form>
													</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
														<button type="button" class="btn btn-primary">Talep Bildir</button>
													</div>
												</div>
											</div>
										</div>
										
										
										
								 					
							<div class="modal fade" id="kalitemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2">
											<div class="modal-dialog" role="document">
												<div class="modal-content" id="kaliteicerik">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">Kalite Kontrol Ekranı !</h5>
													</div>
													<div class="modal-body col-md-12">
																			<!-- Row -->
				<div class="row" >
				    
				    
					
							<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Ü.E 200001 - 01</h3>
									<h6 class="panel-title txt-dark ">EB20019</h6>
									<h6 class="panel-title txt-dark ">CNC - T1</h6>
										<h5 class="panel-title txt-dark mt-10 ">İbrahim Beyazgül</h5>
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
		
					        <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">OEE</h3>
									<h6 class="panel-title txt-dark ">80 % </h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body pb-0">
									<div class="row">
									   
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_1" class="easypiechart" data-percent="86">
												<span class="percent head-font">86</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kalite</h5>
										</div>
										
									
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_2" class="easypiechart" data-percent="46">
												<span class="percent head-font">46</span>
											</span>
												<h5 class="panel-title txt-dark mt-10 ">Performans</h5>
										</div>
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_3" class="easypiechart" data-percent="90">
												<span class="percent head-font">90</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kullanılabilirlik</h5>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
			
	            <div class="row">
	    	        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Planlanan Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">150</span></span>
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Hatasız Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">103</span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Hatalı Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">2</span></span>
													
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Güncel İş Emri Süresi</h3>
									<h6 class="panel-title txt-dark ">02 : 13 : 00</h6>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
													
													</div>
												</div>
											</div>
										</div>
					

	
										
							<div class="modal fade" id="analizmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2">
											<div class="modal-dialog" role="document">
												<div class="modal-content" id="analizicerik">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">İş Emri Analizi !</h5>
													</div>
													<div class="modal-body col-md-12">
																			<!-- Row -->
				<div class="row" >
				    
				    
					
							<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Ü.E 200001 - 01</h3>
									<h6 class="panel-title txt-dark ">EB20019</h6>
									<h6 class="panel-title txt-dark ">CNC - T1</h6>
										<h5 class="panel-title txt-dark mt-10 ">İbrahim Beyazgül</h5>
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
		
					        <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">OEE</h3>
									<h6 class="panel-title txt-dark ">80 % </h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body pb-0">
									<div class="row">
									   
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_1" class="easypiechart" data-percent="86">
												<span class="percent head-font">86</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kalite</h5>
										</div>
										
									
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_2" class="easypiechart" data-percent="46">
												<span class="percent head-font">46</span>
											</span>
												<h5 class="panel-title txt-dark mt-10 ">Performans</h5>
										</div>
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_3" class="easypiechart" data-percent="90">
												<span class="percent head-font">90</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kullanılabilirlik</h5>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
			
	            <div class="row">
	    	        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Planlanan Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">150</span></span>
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Hatasız Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">103</span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Hatalı Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">2</span></span>
													
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Güncel İş Emri Süresi</h3>
									<h6 class="panel-title txt-dark ">02 : 13 : 00</h6>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
														<button type="button" class="btn btn-primary">Talep Bildir</button>
													</div>
												</div>
											</div>
										</div>
					

	
			<div class="modal fade" id="durusmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2">
											<div class="modal-dialog" role="document">
												<div class="modal-content" id="durusicerik">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">Duruş Giriş Ekranı</h5>
													</div>
													<div class="modal-body col-md-12">
																			<!-- Row -->
				<div class="row" >
				    
				    
					
							<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Ü.E 200001 - 01</h3>
									<h6 class="panel-title txt-dark ">EB20019</h6>
									<h6 class="panel-title txt-dark ">CNC - T1</h6>
										<h5 class="panel-title txt-dark mt-10 ">İbrahim Beyazgül</h5>
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
		
					        <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">OEE</h3>
									<h6 class="panel-title txt-dark ">80 % </h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body pb-0">
									<div class="row">
									   
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_1" class="easypiechart" data-percent="86">
												<span class="percent head-font">86</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kalite</h5>
										</div>
										
									
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_2" class="easypiechart" data-percent="46">
												<span class="percent head-font">46</span>
											</span>
												<h5 class="panel-title txt-dark mt-10 ">Performans</h5>
										</div>
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_3" class="easypiechart" data-percent="90">
												<span class="percent head-font">90</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kullanılabilirlik</h5>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
			
	            <div class="row">
	    	        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Planlanan Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">150</span></span>
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Hatasız Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">103</span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Hatalı Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">2</span></span>
													
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Güncel İş Emri Süresi</h3>
									<h6 class="panel-title txt-dark ">02 : 13 : 00</h6>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
														<button type="button" class="btn btn-primary">Talep Bildir</button>
													</div>
												</div>
											</div>
										</div>
					
					
					
					
							<div class="modal fade" id="firemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2">
											<div class="modal-dialog" role="document">
												<div class="modal-content" id="fireicerik">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
														<h5 class="modal-title" id="exampleModalLabel2">Fire Giriş Ekranı</h5>
													</div>
													<div class="modal-body col-md-12">
																			<!-- Row -->
				<div class="row" >
				    
				    
					
							<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Ü.E 200001 - 01</h3>
									<h6 class="panel-title txt-dark ">EB20019</h6>
									<h6 class="panel-title txt-dark ">CNC - T1</h6>
										<h5 class="panel-title txt-dark mt-10 ">İbrahim Beyazgül</h5>
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
		
					        <div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">OEE</h3>
									<h6 class="panel-title txt-dark ">80 % </h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body pb-0">
									<div class="row">
									   
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_1" class="easypiechart" data-percent="86">
												<span class="percent head-font">86</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kalite</h5>
										</div>
										
									
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_2" class="easypiechart" data-percent="46">
												<span class="percent head-font">46</span>
											</span>
												<h5 class="panel-title txt-dark mt-10 ">Performans</h5>
										</div>
										<div class="col-sm-4 mb-15 text-center">
											<span id="pie_chart_3" class="easypiechart" data-percent="90">
												<span class="percent head-font">90</span>
											</span>
											<h5 class="panel-title txt-dark mt-10 ">Kullanılabilirlik</h5>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Row -->
			
	            <div class="row">
	    	        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row ">
												<div class="col-xs-12 pl-4 pr-0 data-wrap-left text-center ">
												    	<span class="txt-light  weight-500  block">Planlanan Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">150</span></span>
												
												</div>
										
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-12 text-center pl-4 pr-0 data-wrap-left">
												    <span class="txt-light  weight-500  block">Hatasız Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">103</span></span>
													
												</div>
											
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
						<div class="panel panel-default card-view pa-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box">
										<div class="container-fluid">
											<div class="row">
												<div class="col-sm-12 text-center pl-4 pr-0 data-wrap-left">
												     <span class="txt-light  weight-500  block">Hatalı Üretim Miktarı</span>
													<span class="txt-light  block counter"><span class="counter-anim">2</span></span>
													
												</div>
												
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-lg-12 col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="text-center">
									<h3 class="panel-title txt-dark ">Güncel İş Emri Süresi</h3>
									<h6 class="panel-title txt-dark ">02 : 13 : 00</h6>
								
								</div>
								<div class="clearfix"></div>
							</div>
							
						</div>
					</div>
	            </div>
	
				                                </div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
														<button type="button" class="btn btn-primary">Talep Bildir</button>
													</div>
												</div>
											</div>
										</div>
	
		    
		    <?php
		}
		
		   	if ($_SESSION["tanimlidashboard"]=='3')
		{ ?>
	            <div class="row">
	                	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pt-0 bg-gradient1">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box bg-white">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim">110</span></span>
													<span class="block"><span class="weight-500 uppercase-font txt-light font-13">Satış Fırsatı</span><i class="zmdi zmdi-caret-down txt-danger font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div class="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_4" class="sp-small-chart" ></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
	                	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pt-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box bg-white">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim">90</span></span>
													<span class="block"><span class="weight-500 uppercase-font txt-light font-13">VDF</span><i class="zmdi zmdi-caret-down txt-danger font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div class="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_y" class="sp-small-chart" ></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
							<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pt-0 bg-gradient2">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box bg-white">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim">120</span></span>
													<span class="block"><span class="weight-500 uppercase-font txt-light font-13">TEKLİF</span><i class="zmdi zmdi-caret-up txt-success font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div class="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_5" class="sp-small-chart" ></div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
						<div class="panel panel-default card-view pt-0 bg-gradient3">
							<div class="panel-wrapper collapse in">
								<div class="panel-body pa-0">
									<div class="sm-data-box bg-white">
										<div class="container-fluid">
											<div class="row">
												<div class="col-xs-6 text-left pl-0 pr-0 data-wrap-left">
													<span class="txt-light block counter"><span class="counter-anim">80</span></span>
													<span class="block"><span class="weight-500 uppercase-font txt-light font-13">SİPARİŞ</span><i class="zmdi zmdi-caret-down txt-danger font-21 ml-5 vertical-align-middle"></i></span>
												</div>
												<div class="col-xs-6 text-left  pl-0 pr-0 pt-25 data-wrap-right">
													<div id="sparkline_6" class="sp-small-chart" ></div>
												</div>
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
		$sqlyes="select * from menutasarimi where seviye='Seviye-2' and ustseviyesi='124' ";
		$sorgulat=mysqli_query($connection,$sqlyes);
		while($okut=mysqli_fetch_assoc($sorgulat))
		{
		    
		    		$sorbana="select menutasarimi.index_menutasarimi,menutasarimi.menutanimi,menutasarimi.formbaglantisi from menutasarimi where menutasarimi.seviye='Seviye-3' and  ustseviyesi='".$okut[index_menutasarimi]."'";
	
echo $sorbana;
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
		    
		    
		     $baglanti=iconv( "ISO-8859-9","UTF-8",$okus[kopru]);
		        if ($okus[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okus[formbaglantisi];
		        }
		    
		    $sqlci="select * from formlar where form_index=".$okus[formbaglantisi];

		    $sorgitsin=mysqli_query($connection,$sqlci);
		    $kayitsayisi=0;
		    	while($okus2=mysqli_fetch_assoc($sorgitsin))
		{
		    
		    $sorgumuz=$okus2[sorgusu];
		 
		    $kayitsayisi=0+mysqli_num_rows(mysqli_query($connection,$sorgumuz));
		    
		}
		    
		   
		    
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
		
		}
		   
		      	   
		   	if ($_SESSION["tanimlidashboard"]=='5')
		{
	
		$sqlyes="select * from menutasarimi where seviye='Seviye-2' and ustseviyesi='95' ";
		$sorgulat=mysqli_query($connection,$sqlyes);
		while($okut=mysqli_fetch_assoc($sorgulat))
		{
		    
		    		$sorbana="select menutasarimi.index_menutasarimi,menutasarimi.menutanimi,menutasarimi.formbaglantisi from menutasarimi where menutasarimi.seviye='Seviye-3' and  ustseviyesi='".$okut[index_menutasarimi]."'";
	

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
		    
		    
		     $baglanti=iconv( "ISO-8859-9","UTF-8",$okus[kopru]);
		        if ($okus[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okus[formbaglantisi];
		        }
		    
		    $sqlci="select * from formlar where form_index=".$okus[formbaglantisi];

		    $sorgitsin=mysqli_query($connection,$sqlci);
		    $kayitsayisi=0;
		    	while($okus2=mysqli_fetch_assoc($sorgitsin))
		{
		    
		    $sorgumuz=$okus2[sorgusu];
		 
		    $kayitsayisi=0+mysqli_num_rows(mysqli_query($connection,$sorgumuz));
		    
		}
		    
		    
		    
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
		
		}
		
		
		  	if ($_SESSION["tanimlidashboard"]=='6')
		{
	
		$sqlyes="select * from menutasarimi where seviye='Seviye-2' and ustseviyesi='149' ";
		$sorgulat=mysqli_query($connection,$sqlyes);
		while($okut=mysqli_fetch_assoc($sorgulat))
		{
		    
		    		$sorbana="select menutasarimi.index_menutasarimi,menutasarimi.menutanimi,menutasarimi.formbaglantisi from menutasarimi where menutasarimi.seviye='Seviye-3' and  ustseviyesi='".$okut[index_menutasarimi]."'";
	

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
		    
		    
		     $baglanti=iconv( "ISO-8859-9","UTF-8",$okus[kopru]);
		        if ($okus[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okus[formbaglantisi];
		        }
		    
		    $sqlci="select * from formlar where form_index=".$okus[formbaglantisi];

		    $sorgitsin=mysqli_query($connection,$sqlci);
		    $kayitsayisi=0;
		    	while($okus2=mysqli_fetch_assoc($sorgitsin))
		{
		    
		    $sorgumuz=$okus2[sorgusu];
		 
		    $kayitsayisi=0+mysqli_num_rows(mysqli_query($connection,$sorgumuz));
		    
		}
		    
		  
		    
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
		
		}
		
		  	if ($_SESSION["tanimlidashboard"]=='8')
		{
	
		$sqlyes="select * from menutasarimi where seviye='Seviye-2' and (ustseviyesi='77' or ustseviyesi='132') ";
		$sorgulat=mysqli_query($connection,$sqlyes);
		while($okut=mysqli_fetch_assoc($sorgulat))
		{
		    
		    		$sorbana="select menutasarimi.index_menutasarimi,menutasarimi.menutanimi,menutasarimi.formbaglantisi from menutasarimi where menutasarimi.seviye='Seviye-3' and  ustseviyesi='".$okut[index_menutasarimi]."'";
	

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
		    
		    
		     $baglanti=iconv( "ISO-8859-9","UTF-8",$okus[kopru]);
		        if ($okus[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okus[formbaglantisi];
		        }
		    
		    $sqlci="select * from formlar where form_index=".$okus[formbaglantisi];

		    $sorgitsin=mysqli_query($connection,$sqlci);
		    $kayitsayisi=0;
		    	while($okus2=mysqli_fetch_assoc($sorgitsin))
		{
		    
		    $sorgumuz=$okus2[sorgusu];
		 
		    $kayitsayisi=0+mysqli_num_rows(mysqli_query($connection,$sorgumuz));
		    
		}
		    
		  
		    
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
		
		}
		
		
		if ($_SESSION["tanimlidashboard"]=='4')
		{
		   
		$sqlyes="select * from menutasarimi where seviye='Seviye-2'";
		$sorgulat=mysqli_query($connection,$sqlyes);
		while($okut=mysqli_fetch_assoc($sorgulat))
		{
		    
		    		$sorbana="select menutasarimi.index_menutasarimi,menutasarimi.menutanimi,menutasarimi.formbaglantisi from menutasarimi where menutasarimi.seviye='Seviye-3' and  ustseviyesi='".$okut[index_menutasarimi]."'";
	
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
		    
		    
		     $baglanti=iconv( "ISO-8859-9","UTF-8",$okus[kopru]);
		        if ($okus[formbaglantisi]!='')
		        {
		            $baglanti="index.php?page_id=listings&menu_id=".$okus[formbaglantisi];
		        }
		    
		    $sqlci="select * from formlar where form_index=".$okus[formbaglantisi];

		    $sorgitsin=mysqli_query($connection,$sqlci);
		    $kayitsayisi=0;
		    	while($okus2=mysqli_fetch_assoc($sorgitsin))
		{
		    
		    $sorgumuz=$okus2[sorgusu];
		 
		    $kayitsayisi=0+mysqli_num_rows(mysqli_query($connection,$sorgumuz));
		    
		}
		    
	
		    
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
		
		}
	
	
			
			
			
		if ($_SESSION[superkullanici]=='E')
			{ 	  
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
		
			}
	
		
		echo "</div>";
		
		}
	
		if ($_GET[page_id]=='d')
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
						<p>2020 &copy; Maraton ERP, Hatay, Yetişen Kauçuk</p>
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
    
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- Treeview JavaScript -->
		<script src="../vendors/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.js"></script>
		
		
	<!-- Navbardaki dropdownu bozuyor <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script> -->
<script src="bom.js"></script>
		
<!-- Treeview Init JavaScript -->
		<script src="dist/js/treeview-data.js"></script>
		
		<script src="dist/js/dropdown-bootstrap-extended.js"></script>
	
		
    <!-- Bootstrap Core JavaScript -->
    <script src="../vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    
	<!-- Data table JavaScript -->
	<script src="../vendors/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
	
	

<script type="text/javascript">





   $('#istasyonsecimi').on('change',function(){


var secilen=$('#istasyonsecimi').val();
  
  $.ajax( {

      url: 'isemirleri.php?secilen='+secilen,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#isemrilistesi').html(data);
      

			  

	



           }

    } );
    
    
    });

/*global $, window*/
$.fn.editableTableWidget = function (options) {
	'use strict';
	return $(this).each(function () {
		var buildDefaultOptions = function () {
				var opts = $.extend({}, $.fn.editableTableWidget.defaultOptions);
				opts.editor = opts.editor.clone();
				return opts;
			},
			activeOptions = $.extend(buildDefaultOptions(), options),
			ARROW_LEFT = 37, ARROW_UP = 38, ARROW_RIGHT = 39, ARROW_DOWN = 40, ENTER = 13, ESC = 27, TAB = 9,
			element = $(this),
			editor = activeOptions.editor.css('position', 'absolute').hide().appendTo(element.parent()),
			active,
			showEditor = function (select) {
				active = element.find('td:focus');
				if (active.length) {
					editor.val(active.text())
						.removeClass('error')
						.show()
						.offset(active.offset())
						.css(active.css(activeOptions.cloneProperties))
						.width(active.width())
						.height(active.height())
						.focus();
					if (select) {
						editor.select();
					}
				}
			},
			setActiveText = function () {
		
				var text = editor.val(),
					evt = $.Event('change'),
					originalContent;
				if (active.text() === text || editor.hasClass('error')) {
					return true;
				}
				originalContent = active.html();
				active.text(text).trigger(evt, text);
				
				
				
				
				  $.ajax( {

      url: 'alanadiguncelle.php?menu_id=<?php echo $_GET[tasarimid]; ?>&eski='+originalContent+"&yeni="+text,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	

			  

	



           }

    } );
			
			
			
				if (evt.result === false) {
					active.html(originalContent);
				}
			},
			movement = function (element, keycode) {
				if (keycode === ARROW_RIGHT) {
					return element.next('td');
				} else if (keycode === ARROW_LEFT) {
					return element.prev('td');
				} else if (keycode === ARROW_UP) {
					return element.parent().prev().children().eq(element.index());
				} else if (keycode === ARROW_DOWN) {
					return element.parent().next().children().eq(element.index());
				}
				return [];
			};
		editor.blur(function () {
			setActiveText();
			editor.hide();
		}).keydown(function (e) {
			if (e.which === ENTER) {
				setActiveText();
				editor.hide();
				active.focus();
				e.preventDefault();
				e.stopPropagation();
			} else if (e.which === ESC) {
				editor.val(active.text());
				e.preventDefault();
				e.stopPropagation();
				editor.hide();
				active.focus();
			} else if (e.which === TAB) {
				active.focus();
			} else if (this.selectionEnd - this.selectionStart === this.value.length) {
				var possibleMove = movement(active, e.which);
				if (possibleMove.length > 0) {
					possibleMove.focus();
					e.preventDefault();
					e.stopPropagation();
				}
			}
		})
		.on('input paste', function () {
			var evt = $.Event('validate');
			active.trigger(evt, editor.val());
			if (evt.result === false) {
				editor.addClass('error');
			} else {
				editor.removeClass('error');
			}
		});
		element.on('click keypress dblclick', showEditor)
		.css('cursor', 'pointer')
		.keydown(function (e) {
			var prevent = true,
				possibleMove = movement($(e.target), e.which);
			if (possibleMove.length > 0) {
				possibleMove.focus();
			} else if (e.which === ENTER) {
				showEditor(false);
			} else if (e.which === 17 || e.which === 91 || e.which === 93) {
				showEditor(true);
				prevent = false;
			} else {
				prevent = false;
			}
			if (prevent) {
				e.stopPropagation();
				e.preventDefault();
			}
		});

		element.find('td').prop('tabindex', 1);

		$(window).on('resize', function () {
			if (editor.is(':visible')) {
				editor.offset(active.offset())
				.width(active.width())
				.height(active.height());
			}
		});
	});

};
$.fn.editableTableWidget.defaultOptions = {
	cloneProperties: ['padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
					  'text-align', 'font', 'font-size', 'font-family', 'font-weight',
					  'border', 'border-top', 'border-bottom', 'border-left', 'border-right'],
	editor: $('<input>')
};



</script>


	<script src="dist/js/editable-table-data.js"></script>
	
	
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

	<!-- Init JavaScript -->
	<script src="dist/js/init.js"></script>
	<script src="dist/js/dashboard-data.js"></script>
		<script src="dist/js/ecommerce-data.js"></script>

		<!-- Product Checkout Data JavaScript -->
		<script src="dist/js/product-checkout-data.js"></script>
		
	<!-- Bootstrap Touchspin JavaScript -->
		<script src="../vendors/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
		
		<!-- Owl JavaScript -->
		<script src="../vendors/bower_components/owl.carousel/dist/owl.carousel.min.js"></script>
	
		<!-- ChartJS JavaScript -->
	<script src="../vendors/chart.js/Chart.min.js"></script>

	<!-- Data table JavaScript -->

	<script src="dist/js/dataTables-data.js"></script>
	
	
			<script src="../vendors/bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>		
		
		<!-- Form Wizard JavaScript -->
		<script src="../vendors/bower_components/jquery.steps/build/jquery.steps.min.js"></script>
		
		
			
	  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>


		
		
		
			<!-- Select2 JavaScript -->
		<script src="../vendors/bower_components/select2/dist/js/select2.full.min.js"></script>
		<!-- Bootstrap Select JavaScript -->
		<script src="../vendors/bower_components/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
		
		
		
		
		
	
	
	<script>


<?php 
$doviz = simplexml_load_file('https://www.tcmb.gov.tr/kurlar/today.xml');
    
$usd_alis = $doviz ->Currency[0]->ForexBuying;
$usd_satis = $doviz ->Currency[0]->ForexSelling;
 
$euro_alis = $doviz ->Currency[3]->ForexBuying;
$euro_satis = $doviz ->Currency[3]->ForexSelling;

$gbp_alis = $doviz ->Currency[4]->ForexBuying;
$gbp_satis = $doviz ->Currency[4]->ForexSelling;
 



?>

$(document).ready(function() {
    
    
    
       $('#index_ozluk_bilgileri').on('change',function(){

alert('BB');



});
    
    $(document).on("change","#formulno",function(){

var formulno=  $( "#formulno" ).val();
var sicaklik=  $( "#sicaklik" ).val();
var t90=  $( "#t90" ).val();


         
      $.ajax( {

      url: 'reometredegerkontrol.php?formulno='+formulno+'&sicaklik='+sicaklik+'&tdoksan='+t90,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

 var replaces = data.replace(" ", "");

 $( "#onay" ).val(replaces);

      

			  

	



           }

    } );

 

});
    
    
      $(document).on("click",".sifredegistir",function(){
       
       
       
       $.ajax( {

      url: 'sifredegistir.php?userid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#sifredegistiricerik').html(data);
   

			  

	



           }

    } );
 
  $('#sifredegistirmodal').modal('show');
 });
	  

    
        setInterval(function(){  
     $.ajax( {
url: 'dovizkuruguncelle.php?usdalis='+<?php echo $usd_alis; ?>+'&usdsatis='+<?php echo $usd_satis; ?>+'&eualis='+<?php echo $euro_alis; ?>+'&eusatis='+<?php echo $euro_satis; ?>+'&gbpalis='+<?php echo $gbp_alis; ?>+'&gbpsatis='+<?php echo $gbp_satis; ?>+'&dovizguncelle=evet',
type: 'GET',
data:'',
processData: false,
contentType: false,
 success: function(data)
     {
       console.log(data);
     }

} );
}, 3600000); 
    
         $(".aranacakkelime").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".aranacakkısım li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
    
    
    
    
    
    $("#contatanimindanguncelle").on("click",function(){
       
       var contakodu = $('#yetisenkodu').val();
         
            $.ajax( {

      url: 'contatanimindanguncelle.php?contakodu='+contakodu,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {
               console.log(data);
            
            var splix = data.split('-');
                $('#boruboyutu').val(splix[0]);
                $('#figur').val(splix[1]);
                $('#formulno').val(splix[2]);
                $('#olculerd').val(splix[3]);
                $('#olculerd2').val(splix[4]);
                $('#olculerh').val(splix[5]);
                $('#uretimkodu').val(splix[6]);
           }

    } );
        
       
        
    });
    
    
    
    
    
    
 var formum="";
  
  var acik="";
  
  
       
   setInterval(function(){ 
       
       
       
       
       
    if (konusulankisi!='')
    {
        
        
        $.ajax( {

      url: 'mesajkontrol.php?kullanici='+konusulan,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

if (data!=sonmesajid)
{
    
    
    
    $.ajax( {

      url: 'mesagging.php?kullanici='+konusulan,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {



   var res = datam.split("|");
     $('#konusulan').html(res[0]);
     

     $('#chaticerik').html(res[1]);
     
     $('#mesajlistesi').animate({scrollTop: $('#mesajlistesi').prop("scrollHeight")}, 500);

   
   

	



           }

    } );
    
    
    
}


           }

    } );
        
        
    }
       
       
       
   }, 10000);
       
  
  
  
    
  $('#yilfiltre').on('change',function(){


  var filtreturu=$('#filtreturu').val();
 
   
  if (filtreturu=='Aylık')
  {
  var yil=$('#yilfiltre').val()*1;
  var ay=$('#ayfiltre').val()*1;
var date = new Date();
var firstDay = new Date(yil, ay, 1);
var lastDay = new Date(yil, ay + 1, 0);


  $("#ilktarih").val(yil+"-"+ay+"-"+"01");
  
   $("#sontarih").val(lastDay.getFullYear()+"-"+lastDay.getMonth()+"-"+lastDay.getDate());
  }
  
  
     
  if (filtreturu=='Yıllık')
  {
  var yil=$('#yilfiltre').val()*1;
  var ay=$('#ayfiltre').val()*1;
var date = new Date();
var firstDay = new Date(yil, ay, 1);
var lastDay = new Date(yil, ay + 1, 0);


  $("#ilktarih").val(yil+"-01-01");
  
   $("#sontarih").val(yil+"-12-31");
  }
  
  
  });


 $('#ayfiltre').on('change',function(){
  
  
  });
  
 $('#filtreturu').on('change',function(){
  
  
   var filtreturu=$('#filtreturu').val();
   
   
   
    if (filtreturu=='Tarih Aralığı')
   {
   $('#haftasecim').hide();
     $('#aysecim').hide();
       $('#tarih1').show();
       $('#tarih2').show();
       $('#yilsecim').hide();
       $('#ucaysecim').hide();
   }
   
   if (filtreturu=='Haftalık')
   {
   $('#haftasecim').show();
     $('#aysecim').hide();
       $('#tarih1').hide();
       $('#tarih2').hide();
       $('#yilsecim').hide();
       $('#ucaysecim').hide();
   }
  
  if (filtreturu=='Aylık')
   {
   $('#haftasecim').hide();
     $('#aysecim').show();
       $('#tarih1').hide();
       $('#tarih2').hide();
       $('#yilsecim').show();
       $('#ucaysecim').hide();
   }
   
   if (filtreturu=='3 Aylık')
   {
   $('#haftasecim').hide();
     $('#aysecim').hide();
       $('#tarih1').hide();
       $('#tarih2').hide();
       $('#yilsecim').show();
       $('#ucaysecim').show();
   }
   if (filtreturu=='Yıllık')
   {
    $('#haftasecim').hide();
     $('#aysecim').hide();
       $('#tarih1').hide();
       $('#tarih2').hide();
       $('#yilsecim').show();
       $('#ucaysecim').hide();
   }
  
  });
  
  
  
  
    var aktif=0;
 $('a[href="#home0"]').on('click',function(){
 
 aktif=0;
 
 
 $('.home0').show();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
 var secilenisemri="";
 
 
   $(document).on("click",".uretimmodal",function(){
       
       
       
       $.ajax( {

      url: 'uretim.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

			  

	



           }

    } );
 
   

 
  $('#analizmodal').modal('show');
 });
 
 
 	      
 
 
 
  
   $(document).on("click",".duruskalkismodal",function(){
       
       
       
       $.ajax( {

      url: 'duruskalkis.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

			  

	



           }

    } );
 
   

 
  $('#analizmodal').modal('show');
 });
 
 
 
 
   $(document).on("click",".uretimbitir",function(){
      var uretimmiktari=$('#uretimmiktari').val();
      
            Swal.fire({
  title: 'Üretim Bitir',
  icon: 'question',
  text: "Üretim bitirilsin mi ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed && uretimmiktari!='') {

        $.ajax( {

      url: 'uretim.php?isemriid='+this.title+'&bitir=E&uretimmiktari'+uretimmiktari,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

			  

	



           }

    } );
  }
})
      
   
     
 });
 
 
 
 
  $(document).on("click",".uretimbaslat",function(){
     
     
     
        $.ajax( {

      url: 'uretim.php?isemriid='+this.title+'&baslat=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

			  

	



           }

    } );
     
     
     
 });
 
 
 
 $(document).on("click",".isemribaslat",function(){
     
     
     
        $.ajax( {

      url: 'duruskalkis.php?isemriid='+this.title+'&baslat=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	// $('#analizicerik').html(data);
   

			  

	



           }

    } );
    
    
    
         $.ajax( {

      url: 'uretim.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

			  

	



           }

    } );
 
   
     
     
     
 });
 
 var secilenuretim="";
 
 
   $(document).on("click",".firekaydet",function(){
         var secilenhatakodu=this.title;
         
         var firemiktari=$('#firemiktari').val();
         
  var res = secilenisemri.split("_");
    
       
                   Swal.fire({
              title: 'Fire Oluşturma',
              icon: 'question',
              text: "Fire oluşturulsun mu ? ",
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Tamam',
              cancelButtonText: 'Vazgeç'
            }).then((result) => {
              if (result.isConfirmed) {
            
                        $.ajax( {

      url: 'uretim.php?isemriid='+res[0]+'&secilenhata='+secilenhatakodu+'&firemiktari='+firemiktari+'&uretimid='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

	    $('#firemodal').modal('hide');		  

	



           }

    } );
             
                    
              }
            })
       
       
       
   });
 
 
  $(document).on("click",".fireolustur",function(){
      
      
    
      
         $.ajax( {

      url: 'firegir.php?secilenhata='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#fireicerik').html(data);
   

			  

	



           }

    } );
      
      
  });
 
 
  
  $(document).on("click",".hataturleri",function(){
      
    
     
     $.ajax( {

      url: 'firegir.php?oncekiseviye='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#fireicerik').html(data);
   

			  

	



           }

    } );
 
    
     
     
 });
 
 
  $(document).on("click",".sonrakiseviye",function(){
      
    
     
     $.ajax( {

      url: 'durusgir.php?oncekiseviye='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#durusicerik').html(data);
   

			  

	



           }

    } );
 
    
     
     
 });
 
 
 
 
   
   $(document).on("click",".durusolustur",function(){
       
                   Swal.fire({
  title: 'Duruş Başlat',
  icon: 'question',
  text: "Duruş başlatılsın mı ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
  $.ajax( {

      url: 'duruskalkis.php?isemriid='+secilenisemri+'&baslat=E&duruskodu='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	// $('#analizicerik').html(data);
   

			  
$.ajax( {

      url: 'uretim.php?isemriid='+secilenisemri,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {


	 $('#analizicerik').html(datam);
   

			  

	



           }

    } );
	



           }

    } );
  }
})
       
   
 });
 
 
   $(document).on("click",".durusbitir",function(){
      
  var secilenisemrim=this.title;
  
                     Swal.fire({
  title: 'Duruş Bitir',
  icon: 'question',
  text: "Duruş bitirilsin mi ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
 
     $.ajax( {

      url: 'duruskalkis.php?isemriid='+this.title+'&bitir=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	// $('#analizicerik').html(data);
   




   $.ajax( {

      url: 'uretim.php?isemriid='+secilenisemrim,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {




	 $('#analizicerik').html(datam);
   

			  

	



           }

    } );
 
   
			  

	



           }

    } );
  }
})
  

     
 });
 
 
 
  
  $(document).on("click",".firegir",function(){
      
    secilenisemri=this.title;
     
     $.ajax( {

      url: 'firegir.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#fireicerik').html(data);
   

			  

	



           }

    } );
 
    
     
      $('#firemodal').modal('show');
     
 });
 
  $(document).on("click",".isemridurdur",function(){
      
    secilenisemri=this.title;
     
     $.ajax( {

      url: 'durusgir.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	   	 $('#durusicerik').html(data);
   


			  

	



           }

    } );
 
    
     
      $('#durusmodal').modal('show');
     
 });
 
 
 
   $(document).on("click",".kalitemodal",function(){
       
       secilenisemri=this.title;

       
       $.ajax( {

      url: 'kalitekontrol.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#kaliteicerik').html(data);
   

			  

	



           }

    } );
 
   

 
  $('#kalitemodal').modal('show');
 });
 
 
 
   $(document).on("click",".analizmodal",function(){
       
       
       
       $.ajax( {

      url: 'analizicerik.php?isemriid='+this.title,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	 $('#analizicerik').html(data);
   

			  

	



           }

    } );
 
   

 
  $('#analizmodal').modal('show');
 });
 
 
   $(document).on("click",".ihtiyacmodal",function(){
       
 
 
  $('#ihtiyacmodal').modal('show');
 });
 
 
 
   $('a[href="#sihirbaz"]').on('click',function(){
 
 
  $('#sihirbazModal').modal('show');
 });
 
  $('a[href="#home1"]').on('click',function(){
 
 aktif=1;
 
 
 $('.home0').hide();
 $('.home1').show();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
 
  $('a[href="#home2"]').on('click',function(){
 
 aktif=2;
 
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').show();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
 
  $('a[href="#home3"]').on('click',function(){
 
 aktif=3;
 
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').show();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
 
  $('a[href="#home4"]').on('click',function(){
 
 aktif=4;
 
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').show();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
 
  $('a[href="#home5"]').on('click',function(){
 
 aktif=5;
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').show();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 });
 
 
 
  $('a[href="#home6"]').on('click',function(){
 
 aktif=6;
 
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').show();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
  $('a[href="#home7"]').on('click',function(){
 
 aktif=7;
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').show();
$('.home8').hide();
$('.home9').hide();
 $('.home10').hide();
 
 
 });
 
 
  $('a[href="#home8"]').on('click',function(){
 
 aktif=8;
 
 
 $('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').show();
$('.home9').hide();
 $('.home10').hide();
 
 });
 
 
  $('a[href="#home9"]').on('click',function(){
 
 aktif=9;
 
  
$('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').show();
 $('.home10').hide();
 
 
 });
 
  $('a[href="#home10"]').on('click',function(){
 
 aktif=10;
 
$('.home0').hide();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();
 $('.home10').show();

 
 });
 
 
   <?php
  
  if ($tabvar!='')
  {
?>

$('.home0').show();
 $('.home1').hide();
 $('.home2').hide();
 $('.home3').hide();
 $('.home4').hide();
 $('.home5').hide();
 $('.home6').hide();
 $('.home7').hide();
$('.home8').hide();
$('.home9').hide();

<?php
  }
 ?>
   var kaydim="<";
  
  var kaydims="<?php echo $_GET[recordid]; ?>";
  <?php
  
  if ($_GET[menu_id]!='')
  {
      
      $sql="select * from scriptler where calisacagiform='".$_GET[menu_id]."'";
      $sorgula=mysqli_query($connection,$sql);
      while($okut=mysqli_fetch_assoc($sorgula))
      {
          
          
    echo $okut[script];      
          
          
      }
      
  }
  
  ?>
  
  
     $(document).on("change","#index_ozluk_bilgileri",function(){
       
     
     var formum=547;
     
     
     	
			   $.ajax( {

      url: 'tabloyenile.php?menu_id=547&listeleme=E&masterfield=index_personel_ozluk_bilgileri&detailfield=personelid&recordid='+$("#index_ozluk_bilgileri").val()+'&ustformid=243',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {


     $('#alttablo_'+formum).html(datam);
     


           }

    } );
    
			
     
     
     });
  
  

  
   $(document).on("click",".menuliste",function(){
       
     
       
       
       if (acik=='')
       {
           $('#menu_'+this.title).show();
           acik="1";
           
            
          var elements = document.getElementsByClassName('menuliste')

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
           $('#menuliste_'+this.title).show();
       }
       else
       {
          $('#menu_'+this.title).hide(); 
          
          
            var elements = document.getElementsByClassName('menuliste')

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'block';
    }
         
          
          acik="";
       }
       
       
   });
   
   
   
        <?php
  
  if ($_GET["page_id"]=='listings')
  {
  ?>
  
  


	<?php
		
		if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}

$kayitoku=mysqli_query($connection,$sqli);
$sutunlar="";
$alansayisi=0;
while($okut=mysqli_fetch_assoc($kayitoku))
{
    $alansayisi=$alansayisi+1;
    if ($sutunlar=='')
    {
	
            $sutunlar=$okut[alanadi];

    }
    else
    {
      $sutunlar=$sutunlar.",".$okut[alanadi];  
    }
}
?>


$(document).ready(function() {
    var table = $('#tableexport_yeni').DataTable();
 
    $('#tableexport_yeni tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );


var sutunlar='<?php echo $sutunlar;?>';



 
  var jsondata="";
  
  	$.ajax( {

      url: 'dataservis.php?page_id=formgetir&formid=<?php echo $_GET[menu_id]; ?>&uid=<?php echo $_GET[uid]; ?>&sutunlar='+sutunlar,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,
	   async: false,

	   success: function(data)

           {



         jsondata=data;
         
         
           	$('#tableexport_yeni').DataTable({
		"language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Turkish.json"
        },
		
		 dom: "Bfrtip",
		 "order": [[ 0, 'desc' ]],
		data:jsondata,
		"processing": true, // shows loading image while fetching data
	"serverSide": false,
	select:true,
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		"autoWidth": false,
		 columnDefs: [
            { width: 200, targets: 0 }
        ],
		"columns" : [{ data: 'id', name: 'id', visible: false },
		
		<?php
		
		if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=".$_GET[menu_id]." and listegosterim='True' order by formalanlari.alansirasi";

}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=".$bagliformid." and listegosterim='True' order by formalanlari.alansirasi";

}

$kayitoku=mysqli_query($connection,$sqli);
$sutunlar="";
$alansayisi=0;
while($okut=mysqli_fetch_assoc($kayitoku))
{
    $alansayisi=$alansayisi+1;
    if ($sutunlar=='')
    {
	
            $sutunlar="{ \"data\" : \"".$okut[alanadi]."\" }";

    }
    else
    {
      $sutunlar=$sutunlar.",{ \"data\" : \"".$okut[alanadi]."\" }";  
    }
}
echo $sutunlar=$sutunlar.",";
?>
{ data: null, sortable: false,
            render: function ( data, type, full, meta )
            {
           <?php
 if ($islemmenu!="")

 {

	 



echo str_replace("tutars",$okun[odenecek],str_replace("kayitidsi",$okun[$anahtars],$islemmenu));	 

	 

 }

 

 if ($islemmenu=="")

 {

 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{
    
    
    if ($_GET[menu_id]=='254'||$_GET[menu_id]=='304'||$_GET[menu_id]=='301')
{
    
    
?>

  return '<a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a><a class="pull-left inline-block uretimbarkodu" href="barkodyazdir.php?tipi=uretimbarkodu&malzemeid='+full.id+'" target="_blank" title="Karekod Yazdır" data-effect="fadeOut"><button type="button" class="btn btn-success btn-icon-anim btn-square"><i class="fa fa-qrcode"></i></button></a>'


<?php
}

    
    
    if($_GET[menu_id]=='231'){ ?>

    return '<a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a><button class="btn btn-success btn-icon-anim btn-square maliyetanaliziolustur" title='+full.id+'><i class="fa fa-share"></i></button>'

<?php }
    
    if ($_GET[menu_id]=='198')
{
    
if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
?>

  return '<a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a><a class="inline-block" data-effect="fadeOut" href="index.php?page_id=listings&menu_id=199&tasarimid='+full.id+'"><button type="button" class="btn btn-primary btn-square"><i class="icon-settings"></i></button></a><a class="inline-block" href="index.php?page_id=design&tasarimid='+full.id+'" title="<?php echo $_GET[formid]; ?>" data-effect="fadeOut"><button type="button" class="btn btn-default btn-square"><i class="icon-folder"></i></button></a>'


<?php
}



if ($_SESSION[superkullanici]!='E'&&$_SESSION[tasarimyetkisi]!='E')
												{
?>

  return '<a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a>'


<?php
}


}


if($_GET[menu_id]=='495' || $_GET[menu_id]=='502'){ ?>
      return '<button class="btn btn-warning btn-icon-anim btn-square talepsec" title='+full.id+' ><i class="icon-check"></i></button><a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a>'

<?php }

if($_GET[menu_id]=='542' ){ ?>
 
      return '<button class="btn btn-success btn-icon-anim btn-square firmakalemlerisec" title="412|'+full.ch_adi+'" ><i class=" icon-magnifier"></i></button>'

<?php }



if ($_GET[menu_id]!='198')
{
?>

  return '<div class="row"><div class="col-md-2"><a href="index.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'&tip=<?php echo $_GET[tip]; ?>" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a></div><div class="col-md-2"><a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+full.id+'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a></div><div class="col-md-2"><a href="#" title="form_<?php echo $_GET[menu_id]; ?>_recordid_'+full.id+'"  title="kopyalamaekrani" class="kopyalamaekrani"><button class="btn btn-warning btn-icon-anim btn-square"><i class="icon-layers"></i></button></a></div></div>'


<?php
}



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

 echo '<a href="#" id="menu_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>" class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>';


  }

 }



 ?><?php

 if ($tablosu=='adresdefteri'&&$islemyok=="") 

 {
 echo '<a href="index.php?page_id=yenikayit&menu_id=54&adresid=<?php echo $okun[$anahtars]; ?>" id="menus_id=<?php echo $_GET[menu_id]; ?>&recordid=<?php echo $okun[$anahtars]; ?>"  title="Kurye Çağır"><i class="s12 icomoon-icon-basket"></i></a>';
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

}
 ?>    
                
            }
        }

        ]
	});

           }

    });
  
  

  <?php
  }
  ?>
   
   
   
    
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
	      
	      
	      
	           $('.exampleyes').dataTable( {
   "pageLength": 100,
	        "scrollX": true,
	        dom: 'Bfrtip',
	        "autoWidth": true,
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    
	      } );
	      
	      
	         $('.example').dataTable( {
   "pageLength": 100,
	        "scrollX": true,
	        dom: 'Bfrtip',
	        "autoWidth": false,
		 columnDefs: [
            { width: 200, targets: 0 }
        ],
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    
	      } );
	      
	      
	      
	      
	      
     $('#edit_datable_1').dataTable( {
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
	      
	      
	        
	     <?php
	     
	     
	     if ($_GET[page_id]=='polivalans')
	     {
	         ?>
	         
	         masterfield='index_personel_ozluk_bilgileri';
	         detailfield='personelid';
	         
	         
	         
	              $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=556&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#onizleme').html(data);
      

			  

	



           }

    } );
	         
	        <?php 
	     }
	     
	     if ($_GET[page_id]=='design')
	     {
	         ?>
	         
	           
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=<?php echo $_GET[tasarimid]; ?>&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#onizleme').html(data);
      

			  

	



           }

    } );
			  
	         
	         
	         <?php
	     }
	     
	     ?>
	     
	     
	     
	 
	
	    
   
       $(document).on("click",".hepsiniaktar",function(){

var id=this.title;

      Swal.fire({
  title: 'Alanları Aktar',
  icon: 'question',
  text: "Tüm alanlar aktarılsın mı ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
$.ajax( {

      url: 'aktarimyap.php?id='+id+'&blokid=<?php echo $idsecili; ?>&designid=<?php echo $_GET[tasarimid]; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

	//location.reload();
	
	

	 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
	 
	 
	 
	 	           
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=<?php echo $_GET[tasarimid]; ?>&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#onizleme').html(data);
      

			  

	



           }

    } );
			  
	         
			  

	



           }

    } );
  }
})
      


    
    });
    
    
    
           $(document).on("click",".listeyeekle",function(){

var id=this.title;




Swal.fire({
  title: 'Seçilen malzeme için ihtiyaç duyulan miktarı giriniz.',
  input: 'text',
    icon: 'question',
  inputAttributes: {
    autocapitalize: 'off',
    style:'width:auto'
  },
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç',
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    

     $.ajax( {

      url: 'listeyeekle.php?urunid='+id+'&talepid='+$("#index_uretimtaleplistesi").val()+'&miktar='+result.value,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

	//location.reload();
	
	

    
    
        var formum=558;
     
     
     	
			   $.ajax( {

      url: 'tabloyenile.php?menu_id=547&listeleme=E&masterfield=index_personel_ozluk_bilgileri&detailfield=personelid&recordid='+$("#index_ozluk_bilgileri").val()+'&ustformid=243',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {


     $('#alttablo_'+formum).html(datam);
     


           }

    } );
    
    
    
  }
})


    
  }

    
    });
    
});
         
     
    
    
          $(document).on("click",".polivalansaktarimyap",function(){

var id=this.title;




Swal.fire({
  title: 'Polivalans Aktarımı İçin Yetkinlik Giriniz!',
  input: 'text',
    icon: 'question',
  inputAttributes: {
    autocapitalize: 'off',
    style:'width:auto'
  },
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç',
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    

     $.ajax( {

      url: 'polivalansekle.php?id='+id+'&personelid='+$("#index_ozluk_bilgileri").val()+'&yetkinlik='+result.value,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

	//location.reload();
	
	

	 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
			  

	



           }

    } );
    
    
    
        var formum=547;
     
     
     	
			   $.ajax( {

      url: 'tabloyenile.php?menu_id=547&listeleme=E&masterfield=index_personel_ozluk_bilgileri&detailfield=personelid&recordid='+$("#index_ozluk_bilgileri").val()+'&ustformid=243',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {


     $('#alttablo_'+formum).html(datam);
     


           }

    } );
    
    
    
  }
})




    
    });
    
    
  
      $(document).on("click",".aktarimyap",function(){

var id=this.title;


      Swal.fire({
  title: 'Bloğa Aktar',
  icon: 'question',
  text: "Bloğa aktarım yapılsın mı ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
  
      $.ajax( {

      url: 'aktarimyap.php?id='+id+'&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

	//location.reload();
	
	

	 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
			  

	



           }

    } );

  }
})


    
    });
    
    
     $(document).on("click",".calistir",function(){
         
      
       var kodum=$("#sqlkodu").val();
       
     
      $.ajax( {

      url: 'kodcalistir.php?kod='+kodum,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 if (data=='OK')
			 {
			          Swal.fire({
  icon: 'success',
  title: 'Başarılı',
  text: 'Kodunuz başarıyla çalıştırıldı.',
  confirmButtonText: `Tamam`,

});
			 }
			 

	



           }

    } );
      
      
      });
      
      
          
      var secilenform="";
      var masteralan="";
    
    
     $(document).on("click",".sqlcalistir",function(){
         
         
          $('#sqlModal').modal('show');


         
     });
    
  
     
           $(document).on("click",".formalansil",function(){


var id=this.title;

    Swal.fire({
  title: 'Alan Sil',
  icon: 'question',
  text: "Veri alanı silinsin mi ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
 $.ajax( {

      url: 'formalansil.php?id='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

		 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
			  

			  
	           
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=<?php echo $_GET[tasarimid]; ?>&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#onizleme').html(data);
      

			  

	



           }

    } );
			  
	         
	



           }

    } );
  }
})


    
    });
     
     
     
     
         $(document).on("click",".bloksil",function(){


var id=this.title;

            Swal.fire({
          title: 'Blok Sil',
          icon: 'question',
          text: "Blok silinsin mi ? ",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Tamam',
          cancelButtonText: 'Vazgeç'
        }).then((result) => {
          if (result.isConfirmed) {
            $.ajax( {

      url: 'bloksil.php?id='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

		 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
			  

			  
	           
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=<?php echo $_GET[tasarimid]; ?>&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#onizleme').html(data);
      

			  

	



           }

    } );
			  
	         
	



           }

    } );
          }
        })
        


    
    });
     
     
     
     
    
      $(document).on("click",".alansil",function(){


var id=this.title;

      Swal.fire({
          title: 'Bloktan Alan Sil',
          icon: 'question',
          text: "Alan bloktan silinsin mi ? ",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Tamam',
          cancelButtonText: 'Vazgeç'
        }).then((result) => {
          if (result.isConfirmed) {
         $.ajax( {

      url: 'alansil.php?id='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			 
			 

		 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
			  

			  
	           
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=<?php echo $_GET[tasarimid]; ?>&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#onizleme').html(data);
      

			  

	



           }

    } );
			  
	         
	



           }

    } );
          }
        })



    
    });
    
     var tiklandi=0;
   
   var konusulankisi="";
   var sonmesajid="";
   
   
   setInterval(function(){ 
       
       
       
    if (konusulankisi!='')
    {
        
        
        $.ajax( {

      url: 'mesajkontrol.php?kullanici='+konusulan,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

if (data!=sonmesajid)
{
    
    
    
    $.ajax( {

      url: 'mesagging.php?kullanici='+konusulan,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {



   var res = datam.split("|");
     $('#konusulan').html(res[0]);
     

     $('#chaticerik').html(res[1]);
     
     $('#mesajlistesi').animate({scrollTop: $('#mesajlistesi').prop("scrollHeight")}, 500);

   
   

	



           }

    } );
    
    
    
}


           }

    } );
        
        
    }
       
       
       
   }, 1000);


$( "#input_msg_send").keypress(function(event) {
  
  
  var mesaj=$('#input_msg_send').val();
  
  if ( event.which == 13 ) {

  
     $.ajax( {

      url: 'mesagging.php?kullanici='+konusulan+'&mesaj='+mesaj,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {



   var res = data.split("|");
     $('#konusulan').html(res[0]);
     

     $('#chaticerik').html(res[1]);
     
     $('#mesajlistesi').animate({scrollTop: $('#mesajlistesi').prop("scrollHeight")}, 500);

   
   

	



           }

    } );
        
  }
  
});
   
   
   
   
     $(".gorevdegistir").click(function(){
    
   var id=this.title;
       
       

       
        $.ajax( {

      url: 'gorevdegistir.php?gorevid='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {





           }

    } );
    
    
     });
   
    $(".chatekraninagec").click(function(){
       
    
       var id=this.title;
       
    
       
       $("#chat_"+id).click();
       
       
    });
   
     $(".chatekrani").click(function(){
        
        
        var kullanici=this.title;
        
        konusulan=kullanici;
        
        
      
                 $.ajax( {

      url: 'mesagging.php?kullanici='+kullanici,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {



   var res = data.split("|");
     $('#konusulan').html(res[0]);
     

     $('#chaticerik').html(res[1]);
      
$('#mesajlistesi').animate({scrollTop: $('#mesajlistesi').prop("scrollHeight")}, 500);

           }

    } );
        
        
        
        
     });

   $(".durumdegistir").click(function(){
         
         
         var yenidurum=this.title;
         
         
                 $.ajax( {

      url: 'durumdegistir.php?yenidurum='+yenidurum,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


     $('#durumbilgisi').html(data);
         $('#durumbilgisi2').html(data);
        
	



           }

    } );
         
         
         
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

			 
			 
$('#exampleModalLabel').html('Düzelt');
      
      <?php
      
      if ($_GET[page_id]=='design')
{
    ?>
    $('#yeniformicerik_199').html('');
    $('#yeniformicerik_200').html('');
    $('#yeniformicerik_236').html('');
    <?php
    
}

?>

		 $('#yeniformicerik_'+res[1]).html(data);
      
   $('#yenisatirModal_'+res[1]).modal('show');

			  

	



           }

    } );
  
   } );
   
   
   var masterfield="";
   var detailfield="";
   
     $(document).on("click",".satirduzelt",function(){
         
         

    
      var titles=this.title;
      
      
       var res = titles.split("|");
    
      
      
      formum=res[0];
      kaydim=res[1];
      
      
      if (res.length>2)
      {
         masterfield=res[2];
         detailfield=res[3];
          
      }
      var ustform='<?php echo $_GET[recordid]; ?>';
      
      <?php
      if ($_GET[page_id]=='design')
      {
       echo "ustform='".$_GET[tasarimid]."'";   
      }
      
      ?>
      
      
     
      $.ajax( {

      url: 'kayitduzenle.php?page_id=kayitduzenle&menu_id='+res[0]+'&mastervalue='+ustform+'&kayitid='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

		$('#exampleModalLabel').html('Düzelt');
      
	  
if (res[0]=='266')
{
		 $('#yeniformicerik_199').html(data);
}

if (res[0]!='266')
{
		 $('#yeniformicerik_'+res[0]).html(data);
}




			  

	



           }

    } );
			  
      
      
      if (res[0]=='266')
{
	  $('#yenisatirModal_199').modal('show');
}

if (res[0]!='266')
{
    
   
		   $('#yenisatirModal_'+res[0]).modal('show');
}
      
   

      });
      
      
          $(document).on("click",".rezervyap",function(){

   
      var titles=this.title;
      
      
       var res = titles.split("_");
    
      
      formum=res[0];
      kaydim=res[1];
      
      
      Swal.fire({
  title: 'Sipariş Rezerve',
  icon: 'question',
  text: "Siparişi Rezerve Etmek istediğinizden emin misiniz ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
   $.ajax( {

      url: 'rezervyap.php?turu=yap&kayitid='+kaydim,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


if (data!='NO')
{
    
 location.reload();
}
else
{
    			          Swal.fire({
  icon: 'error',
  title: 'Uyarı',
  text: 'Sipariş rezerv edilemedi, muhtemelen fiili stok miktarı sipariş miktarını karşılamamaktadır.',
  confirmButtonText: `Tamam`,

});
  
}
      

			  

	



           }

    } );  
  }
})
      



});
      
  
  
       $(document).on("click",".rezervgerial",function(){

 var titles=this.title;
      
      
       var res = titles.split("_");
    
      
      formum=res[0];
      kaydim=res[1];
      
         
      Swal.fire({
  title: 'Rezervi İptal',
   icon: 'question',
  text: "Rezervi İptal Etmek istediğinizden emin misiniz ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
      $.ajax( {

      url: 'rezervyap.php?turu=gerial&kayitid='+kaydim,

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
      
      



});
      
  
  
    $(document).on("click",".excelimport",function(){


 var titles=this.title;
 
  var res = titles.split("|");
 
secilenform=res[0];
masteralan=res[1];

  $('#excelimport_modal').modal('show');


});
var duzenlemeacik=0;

$(document).on("click",".alanlariduzelt",function(){


if (duzenlemeacik==0)
{
    
     $('.alanedit').show();
    duzenlemeacik=1;
}
else
{     $('.alanedit').hide();
    duzenlemeacik=0;
}


});

$(document).on("click",".alanedit",function(){



      var titles=this.title;
      
      
       var res = titles.split("|");
       
       var ustform='<?php echo $_GET[menu_id]; ?>';
       
       
       formum=res[1];
       kaydim=res[0];
       
       
             $.ajax( {

      url: 'kayitduzenle.php?page_id=kayitduzenle&menu_id='+res[1]+'&mastervalue='+ustform+'&kayitid='+res[0],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)
           {
	  

		 $('#yeniformicerik_199').html(data);



         $('#yenisatirModal_199').modal('show');
			  

	



           }

    } );
			  

      
       
       
       
       
});
  
     $(document).on("click",".yenisatir",function(){



     <?php
      
      if ($_GET[page_id]=='design')
{
    ?>
    $('#yeniformicerik_199').html('');
    $('#yeniformicerik_200').html('');
    $('#yeniformicerik_236').html('');
    <?php
    
}

?>

      
      var titles=this.title;
      
      
      
       var res = titles.split("|");
      
      
      secilenform=res[0];
      
      
      var firmaid="";
      
      
      
      
      formum=res[0];
      
      if (res.length>1)
      {
          masterfield=res[1];
           detailfield=res[2];
      }
      
    
      kaydim="";
      
      var birimler="";
     
     <?php
     
     
     if ($_GET[menu_id]=='254')
     {
     ?>
     
     birimler=$('#birimturleri').val();
     
     <?php
         
     }
     ?>
     
     
     
       <?php
     
     
     if ($_GET[menu_id]=='277'||$_GET[menu_id]=='282'||$_GET[menu_id]=='417')
     {
     ?>
     
     firmaid=$('#ch_adi').val();
     
     <?php
         
     }
     ?>
      
        var ustform='<?php echo $_GET[recordid]; ?>';
      
      <?php
      if ($_GET[page_id]=='design')
      {
       echo "ustform='".$_GET[tasarimid]."'";   
      }
      
      ?>
      
    
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id='+secilenform+'&mastervalue='+ustform+'&birimler='+birimler+'&firmaid='+firmaid,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			  
$('#exampleModalLabel').html('Ekle');
      



		 $('#yeniformicerik_'+secilenform).html(data);
      

			  

	



           }

    } );
			  
      
      
     $('#yenisatirModal_'+secilenform).modal('show');

      });

    
      
  

  
  

   $('#example tbody').on('dblclick', 'tr', function () {

  var titles=this.title;
      
      
       var res = titles.split("+");
    
      
      
      var formum=res[0];
      kaydim=res[1];
      
      window.location="index.php?page_id=editrecord&menu_id="+formum+"&recordid="+kaydim;
      


} );



       $("#example").on("click",".isemri",function(){
  
       
       var titles=this.id;
      
      
       var res = titles.split("_");
    
      
      var siparisno=res[1];
      
 
        $.ajax( {

      url: 'isemrikontrol.php?siparisno='+siparisno,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {



if (data=='')

{
    
             
      Swal.fire({
  title: 'İş Emirleri',
  icon: 'question',
  text: "Seçilen siparişin iş emirleri oluşturulsun mu ? ",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Tamam',
  cancelButtonText: 'Vazgeç'
}).then((result) => {
  if (result.isConfirmed) {
    
         $.ajax( {

      url: 'isemriolustur.php?siparisno='+siparisno,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            
            
              location.href="index.php?page_id=listings&menu_id=232&siparisno="+datam;
    
            
               
           }
           
         });
    
  }
});
    
  
    
    
    
}

if (data!='')
{
    
    
    location.href="index.php?page_id=listings&menu_id=232&siparisno="+data;
    
}

			  

	



           }

    } );
  
   
       });
       
       
       
           $(document).on("click",".blokduzelt",function(){
   

   
      var titles=this.title;
      
      
       var res = titles.split("_");
    
      
      formum=res[0];
      kaydim=res[1];
      
   
      
     
      $.ajax( {

      url: 'kayitduzenle.php?page_id=kayitduzenle&menu_id='+res[0]+'&kayitid='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

		$('#exampleModalLabel').html('Düzelt');
      
	  

		 $('#yeniformicerik_'+res[0]).html(data);
      

			  

	



           }

    } );
			  
      
      
     $('#yenisatirModal_'+res[0]).modal('show');

      });
   
   
   
        $(document).on("click",".satirduzelt",function(){
   


   
      var titles=this.title;
      
      
       var res = titles.split("|");
       
       var firmaid="";
    
      
      formum=res[0];
      kaydim=res[1];
      
         <?php
     
     
     if ($_GET[menu_id]=='277'||$_GET[menu_id]=='282'||$_GET[menu_id]=='417')
     {
     ?>
     
     firmaid=$('#ch_adi').val();
     
     <?php
         
     }
     ?>
     
      $.ajax( {

      url: 'kayitduzenle.php?page_id=kayitduzenle&menu_id='+res[0]+'&mastervalue=<?php echo $_GET[recordid]; ?>&kayitid='+res[1]+'&firmaid='+firmaid,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

		$('#exampleModalLabel').html('Düzelt');
      
	  

		 $('#yeniformicerik_'+res[0]).html(data);
      

			  

	



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

			  
$('#exampleModalLabel').html('Ekle');
      

		 $('#yeniformicerik_'+titles).html(data);
      

			  

	



           }

    } );
			  
      
      
     $('#yenisatirModal_'+titles).modal('show');

      });
    
      $( "#formsec" ).on('change',function(){
      
      
     window.location = "index.php?page_id=listings&menu_id=199&tasarimid="+$(this).val();
      });
    
    
var recordidim='';


$("#teklifformuyazdir").on('click',function(){

 window.open("teklifformuyazdir.php?teklifid=<?php echo $_GET[recordid]; ?>");



});

$("#vdfformuyazdir").on('click',function(){

 window.open("vdfformuyazdir.php?vdfid=<?php echo $_GET[recordid]; ?>");



});

$("#analizformuyazdir").on('click',function(){

 window.open("analizformuyazdir.php?analizid=<?php echo $_GET[recordid]; ?>");



});

$("#dofformuyazdir").on('click',function(){

 window.open("dofformuyazdir.php?dofid=<?php echo $_GET[recordid]; ?>");



});

 $("#eksikalanolustur").on('click',function(){


var tabloid=this.title;

 $.ajax( {

      url: 'eksikalanolustur.php?formid='+tabloid,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			     			          Swal.fire({
  icon: 'success',
  title: 'Başarılı',
  text: 'Alanlar oluşturuldu'+ data,
  confirmButtonText: `Tamam`,

});

	

	



           }

    } );


});

$(document).on("change","#donem",function(){

var id=  $( "#donem" ).val();
         
      $.ajax( {

      url: 'maliyetdonemlericerik.php?donemid='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

         var res = data.split("-");
         $( "#urtkapasite" ).val(res[0]);
         $( "#kapasitehesap" ).val(res[1]);
	     $( "#giderkatsayi" ).val(res[2]);

	



           }

    } );

 

});

$(document).on("change","#firma",function(){

var chadi=  $( "#firma" ).val();
         
      $.ajax( {

      url: 'ilgilikisigetir.php?cariid='+chadi,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

 $( "#ilgili" ).val(data);

      

			  

	



           }

    } );

 

});



      $(document).on("click",".maliyetanaliziolustur",function(){
           
             var id = this.title;
                  
                     
                   $.ajax( {

      url: 'maliyetanaliziolustur.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {
        
           
        
           window.location='index.php?page_id=listings&menu_id=489';


           }

    } );
             
             
         });
         
         $('#isakisiaktar').on("click",function(){
             var id = this.title;
             
            $.ajax( {

      url: 'isakisiaktar.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {
        
	         console.log(data);

	        	Swal.fire({
                   icon: 'success',
                   title: 'Başarılı',
                   text: 'İş Akışı Aktarıldı.',
                   confirmButtonText: `Tamam`,
                 
                 }).then((result) => {
               if (result.isConfirmed) {
                    	 
               }
             })
	
           }

    });
         });

      $(document).on("click","#vdfolustur",function(){
           
             var id = this.title;
             var tedarikci = $('#firma').val();
              var no = $('#tnno').val();
                  
                     
                   $.ajax( {

      url: 'vdfolustur.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

	    console.log(data);
        window.location='index.php?page_id=listings&menu_id=231'+'&tedarikciid='+tedarikci+'&firsatkodu='+id;
	      



           }

    } );
             
             
         });


      $(document).on("click","#kalibaaktar",function(){
           
             var id = this.title;
            
                     
                   $.ajax( {

      url: 'kalibaaktar.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

	    console.log(data);
          



           }

    } );
             
             
         });

  $("#tabloolustur").on('click',function(){




var tabloid=this.title;

 $.ajax( {

      url: 'tabloolustur.php?formid='+tabloid,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {
console.log(data);

			     			          Swal.fire({
  icon: 'success',
  title: 'Başarılı',
  text: 'Tablo Oluşturuldu',
  confirmButtonText: `Tamam`,

});
	



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

			  

			console.log(data);

			$( "#deletingrecord" ).hide( "slow", function() {

  

			 setTimeout(explode, 2000);

 

            });

			  

	



           }

    } );

	

  

  





  

});
   
   var x="";
   var i=0;
   
    <?php
   
   if ($_GET[page_id]=='editrecord'&&$_GET[menu_id]=='254')
   {
       
       for ($i=1;$i<=10;$i++)
       {
           
           if ($elemanlar[$i]!='')
           {
           
        $sql="select * from malzemerecete left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid where malzemeid=".$elemanlar[$i];
				                $sorgulat=mysqli_query($connection,$sql);
				            
				                $deger="";
				                while($al=mysqli_fetch_assoc($sorgulat))
				                {
				                    
				                    
				                     $secili="";
				            if ($al[index_malzemeler]==$_GET[recordid])
				            {
				                $secili='secili';
				            }
				                    
				                     if ($al[ureticikodu]=='')
				            {
				                    
				                    $deger=$deger."<li class='dugum $secili'  title='$al[index_malzemeler]'><span class='$secili'>".$al[malzemekodu]."</span><ul id='node_$al[index_malzemeler]' class='node_$al[index_malzemeler]'></ul></li>";
				                    
				            }
				            
				                      if ($al[ureticikodu]!='')
				            {
				                    
				                    $deger=$deger."<li class='dugum $secili'  title='$al[index_malzemeler]'><span class='$secili'>".$al[ureticikodu]."</span><ul id='node_$al[index_malzemeler]' class='node_$al[index_malzemeler]'></ul></li>";
				                    
				            }
				                    
				                }
				                ?>
				                
          // $(".node_<?php echo $elemanlar[$i]; ?>").html("<?php echo $deger; ?>");
           x=document.getElementsByClassName("node_<?php echo $elemanlar[$i]; ?>");  // Find the elements
           for(i = 0; i < x.length; i++){
    x[i].innerHTML="<?php echo $deger; ?>";    // Change the content
    
 
    }
           
           
           
           <?php
           
       }
       }
       
       
   }
   
   
   
   ?>
   
  
   var tiklandi=0;
   
    $(document).on("dblclick",".dugum",function(){
   
   if (tiklandi==0)
   {
window.location="index.php?page_id=editrecord&menu_id=254&recordid="+this.title;

tiklandi=1;
   }
    });
   
     $(".formac").click(function(){
         
           var res = this.id.split("_");
    
         
         
         if (this.title=='ac')
         {
          this.title="kapa";   
          
          $( "#body_"+res[1]).show( "slow", function() {

    // Animation complete.

  });
          
          
         }
         else
         {
             this.title='ac';
             
                       $( "#body_"+res[1]).hide( "slow", function() {

    // Animation complete.

  });
             
         }
         
     });
     
     
      var yazilacakalan="";
        var coklu="";
    
    
          $(document).on("click",".bunusec",function(){
   
         
       var tits=this.title;
       
    
         if (coklu=='')
         {

         $('#'+yazilacakalan).val(tits);
         }
         
            if (coklu!='')
         {
             
             if ($('#'+yazilacakalan).val()=='')
             {
         $('#'+yazilacakalan).val(tits);
             }
             else
             
               if ($('#'+yazilacakalan).val()!='')
             {
                 var deger=$('#'+yazilacakalan).val();
         $('#'+yazilacakalan).val(deger+';'+tits);
             }
             
         }
         
           $('#tablosecimModal').modal('hide');
         
         
     });
     
     
                $(document).on("click",".firmakalemlerisec",function(){
   
   var id=this.title;
   
        var res = id.split("|");
   
        $.ajax( {

      url: 'tablogetir.php?menu_id='+res[0]+'&verialani='+res[1]+'&firmakalemlerisec='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

     $('#tablosecimicerik').html(data);
             $('#tablosecimModal').modal('show');
         
	



           }

    } );
                });
     
 
         $(document).on("click",".verisec",function(){
   
         
           coklu="";
           var id=this.title;
           
    
           
           var ekstra="";
           
           
        var res = id.split("|");
        yazilacakalan=res[2];
        
        firmaid=res[3];
        
        
        <?php
        if ($_GET[menu_id]=='254')
        {
            ?>
            
            if (yazilacakalan=='kaynaksecimi')
            {
              ekstra=$('#ismerkezi').val();  
            }
            
             
            if (yazilacakalan=='kaynaksecimi_alternatif')
            {
                ekstra=$('#ismerkezi_alternatif').val();   
            }
            
            <?php
            
        }
        ?>
        
        
      
        
        
        $.ajax( {

      url: 'tablogetirjson.php?menu_id='+res[0]+'&verialani='+res[1]+'&ekstra='+ekstra+'&firmaid='+firmaid,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


     $('#tablosecimicerik').html(data);
             $('#tablosecimModal').modal('show');
         
	



           }

    } );
    
    
    
           
       });
   
    
    
       $(document).on("click",".secimyap",function(){
   
           
       coklu="E";
           
           var id=this.title;
           var ekstra="";
           
        var res = id.split("|");
        yazilacakalan=res[2];
        
        
         var res = id.split("|");
        firmaid=res[3];
        
        
            <?php
        if ($_GET[menu_id]=='254')
        {
            ?>
            
            if (yazilacakalan=='kaynaksecimi')
            {
              ekstra=$('#ismerkezi').val();  
            }
            
             
            if (yazilacakalan=='kaynaksecimi_alternatif')
            {
                ekstra=$('#ismerkezi_alternatif').val();   
            }
            
            <?php
            
        }
        ?>
        
        
       
       
   
        
        $.ajax( {

      url: 'tablogetirjson.php?menu_id='+res[0]+'&verialani='+res[1]+'&coklusecim=E&ekstra='+ekstra+'&firmaid='+firmaid,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


     $('#tablosecimicerik').html(data);
             $('#tablosecimModal').modal('show');
         
	



           }

    } );
    
    
    
           
       });
   
      var secilensayisi=0;
        
        var secilenler="";
        
          $(document).on("click",".proformaolustur",function(){
             
     
             
             
             secilenler = secilenler.replace(/#/g, ",");
           
                  console.log(secilenler);
             
                   $.ajax( {

      url: 'proformaolustur.php?secilenler='+secilenler,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

window.location='https://bulutfabrika.net/asalyapi/index.php?page_id=newrecord&menu_id=277';
         
	



           }

    } );
             
             
         });
         
        
          $(document).on("click",".teklifolustur",function(){
             
             
             secilenler = secilenler.replace(/#/g, ",");
           
             
                   $.ajax( {

      url: 'teklifolustur.php?secilenler='+secilenler,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


window.location='https://asalyapi.bulutfabrika.net/index.php?page_id=newrecord&menu_id=459';
         
	



           }

    } );
             
             
         });
         
            $(document).on("click","#siparisedonustur2",function(){
           
             var id = this.title;
             
                  
                   var tedarikci=$('#ch_adi').val();
                        var termin=$('#termin').val(); 
                   $.ajax( {

      url: 'siparisedonustur2.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

          
            window.location='index.php?page_id=newrecord&menu_id=461&tedarikciid='+tedarikci+'&termin='+termin;
         
	



           }

    } );
             
             
         });
            
            
                    $(document).on("click",".kalemsiparisedonustur",function(){
           
             var id = this.title;
            
             
                   $.ajax( {

      url: 'coklusiparisdonustur.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {
            console.log(data);
        
       window.location='index.php?page_id=newrecord&menu_id=461';
         
	


           }

    } );
             
             
         });
        
             
          $(document).on("click","#siparisedonustur",function(){
           
             var id = this.title;
             
                  
                   var tedarikci=$('#ch_adi').val();
                        var termin=$('#termin').val(); 
                   $.ajax( {

      url: 'siparisedonustur.php?ids='+id,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

                console.log(data);
            window.location='index.php?page_id=newrecord&menu_id=461&tedarikciid='+tedarikci+'&termin='+termin;
         
	



           }

    } );
             
             
         });
        
        
            $(document).on("click",".kalemlerisec",function(){
   

   
   if ($(this).hasClass('btn-warning'))
   {
      $(this).removeClass('btn-warning');
       $(this).addClass('btn-success');
       
          secilenler=secilenler+","+this.title+",";
    
    console.log(secilenler);
       
       secilensayisi++;
   }
   else
   {
          $(this).removeClass('btn-success');
       $(this).addClass('btn-warning');
       
       
       
secilenler = secilenler.replace(","+this.title+",", "");
       
       secilensayisi--;
   }
   
   console.log(secilenler);
       
       if (secilensayisi>0)
       {
            $('#kalemsiparisedonustur').show();
            $('#kalemsiparisedonustur').attr('title',secilenler);
           
       }
       
         if (secilensayisi==0)
       {
            $('#kalemsiparisedonustur').hide();
              $('#kalemsiparisedonustur').attr('title',secilenler);
           
       }
    

   
         });   
    
        
        
         $(document).on("click",".talepsec",function(){
   

   
   if ($(this).hasClass('btn-warning'))
   {
      $(this).removeClass('btn-warning');
       $(this).addClass('btn-success');
       
          secilenler=secilenler+"#"+this.title+"#";
    
    console.log(secilenler);
       
       secilensayisi++;
   }
   else
   {
          $(this).removeClass('btn-success');
       $(this).addClass('btn-warning');
       
       
       
secilenler = secilenler.replace("#"+this.title+"#", "");
       
       secilensayisi--;
   }
   
   console.log(secilenler);
       
       if (secilensayisi>0)
       {
            $('#proformaolustur').show();
    
           
       }
       
         if (secilensayisi==0)
       {
            $('#proformaolustur').hide();
       }
    

   
         });   
    
   $(document).on("click",".teklifgor",function(){

   var id=this.title;
   
        var res = id.split("|");
   
   
       
        $.ajax( {

      url: 'tablogetir.php?menu_id='+res[0]+'&verialani='+res[1]+'&teklifgor='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


     $('#tablosecimicerik').html(data);
             $('#tablosecimModal').modal('show');
         
	



           }

    } );
    
   
   
   
   
         });
         
      $(document).on("click",".siparisgor",function(){
   
   var id=this.title;
   
        var res = id.split("|");
   
   console.log(res[1]);
   
       
        $.ajax( {

      url: 'tablogetir.php?menu_id='+res[0]+'&verialani='+res[1]+'&siparisgor='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


     $('#tablosecimicerik').html(data);
             $('#tablosecimModal').modal('show');
         
	



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



 $(document).on("click",".kopyalamaekrani",function(){
    
   
        
        
    <?php
    
    if ($_GET[page_id]=='design')
    {
        
        ?>
        
        
        var id=this.title;

        var res = id.split("_");
        
        
        copy_menu=res[1];
        copy_record=res[3];
    
   
     var kaynak=$('#kaynak').val();

var hedef=$('#hedef').val();

   
      $.ajax( {

      url: 'kopyala.php?menu_id='+copy_menu+'&recordid='+copy_record+'&kaynak='+kaynak+'&hedef='+hedef,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


  <?php
  
  if ($_GET[page_id]!='design')
  {
?>
			location.reload();
 <?php
  }
  if ($_GET[page_id]=='design')
  {
      ?>
      
      
       $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
      
      <?php
      
  }
  
  ?>



           }

    } );

        
        
        
        
        <?php
        
    }
    
    
     if ($_GET[page_id]!='design')
    {
        ?>
        
        
        
           $('#kopyalaModal').modal('show');
      
      
      var id=this.title;

        var res = id.split("_");
        
        
        copy_menu=res[1];
        copy_record=res[3];
        
        
        <?php
    }
    
    
    ?>
         
    
 });




   $(document).on("click",".kopyala",function(){
 
    
    			 
var id=this.title;

        var res = id.split("_");
    
   
     var kaynak=$('#kaynak').val();

var hedef=$('#hedef').val();

   
      $.ajax( {

      url: 'kopyala.php?menu_id='+copy_menu+'&recordid='+copy_record+'&kaynak='+kaynak+'&hedef='+hedef,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


  <?php
  
  if ($_GET[page_id]!='design')
  {
?>
			location.reload();
 <?php
  }
  if ($_GET[page_id]=='design')
  {
      ?>
      
      
       $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
         
               
           }
	
	
	 } );
      
      <?php
      
  }
  
  ?>



           }

    } );

   
         
     });
    


  $("#tableexport_yeni").on("click",".tr",function(){
      

  });
     var table = $('#tableexport_yeni').DataTable();
 
  
   $('#tableexport_yeni').on('click', 'tr', function () {
              
       //    var rowData = table.row( this ).data();
 
  var UnitId = rowData.id;
  
  
  /*
  $.ajax( {

      url: 'editrecord.php?page_id=editrecord&menu_id=<?php echo $_GET[menu_id]; ?>&recordid='+UnitId,

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {
              
        
            $('#formduzenle').html(data);
		
		  $('html, body').animate({
        scrollTop: $("#formduzenle").offset().top
    }, 2000);
			 
           }

    } );
        
*/

              
            });
            
            
             $("#example").on("click",".tip",function(){

  // Holds the product ID of the clicked element


  

  var productId = $(this).attr('id');



  

recordidim=this.id;



$( "#deletingrecord" ).show( "slow", function() {

    // Animation complete.

  });



  

});
    
    

 
      $("#tableexport_yeni").on("click",".tip",function(){

  // Holds the product ID of the clicked element


  

  var productId = $(this).attr('id');



  

recordidim=this.id;



$( "#deletingrecord" ).show( "slow", function() {

    // Animation complete.

  });



  

});
    
    
    
      $(document).on("click",".satirsil",function(){
   




  var titles=this.title;
      
      
       var res = titles.split("|");
    
      
      
      formum=res[0];
      kaydim=res[1];
        
        
        
      if (res.length>2)
      {
         masterfield=res[2];
         detailfield=res[3];
          
      }
    
    
      Swal.fire({
          title: 'Satır Sil',
          icon: 'question',
          text: "Satır silinsin mi ? ",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Tamam',
          cancelButtonText: 'Vazgeç'
        }).then((result) => {
          if (result.isConfirmed) {
          $.ajax( {

      url: 'deleterecord.php?menu_id='+res[0]+'&recordid='+res[1],

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {

			  


  

			
			
			
			   $.ajax( {
<?php			       
 if ($_GET[page_id]=='polivalans')
	     {
	         ?>
      url: 'tabloyenile.php?menu_id='+formum+'&listeleme=E&masterfield='+masterfield+'&detailfield='+detailfield+'&recordid='+$('#index_ozluk_bilgileri').val()+'&ustformid=243',

<?php
}

 if ($_GET[page_id]!='polivalans')
	     {
	         ?>
      url: 'tabloyenile.php?menu_id='+formum+'&listeleme=E&masterfield='+masterfield+'&detailfield='+detailfield+'&recordid=<?php echo $_GET[recordid]; ?>&ustformid=<?php echo $_GET[menu_id]; ?>',

<?php
}
?>
      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {


     $('#alttablo_'+formum).html(datam);
     
     
      $('#yenisatirModal_'+formum).modal('hide');
        



           }

    } );
    
			
			
			


	



           }

    } );
          }
        })









});
 
 
 
    $( '#frmExcelImport_genel' )

  .submit( function( e ) {
      
      
      var firmaid="";
      <?php
      if ($_GET[menu_id]=='277')
      {
          ?>
          
          firmaid=$('#ch_adi').val();
  
          
          <?php
      }
      
      ?>
      
	       
	   
      $.ajax( {
          
           

      url: 'excelimport_genel.php?menu_id='+secilenform+'&masteralan='+masteralan+'&mastervalue=<?php echo $_GET[recordid]; ?>&firmaid='+firmaid,

       type: 'POST',

      data:new FormData(this),

      processData: false,

      contentType: false,

	   success: function(data)

           {
               
              console.log(data);


<?php

if ($_GET[page_id]!='listings')
{
    ?>
    
    
    
    
        $.ajax( {

      url: 'tabloyenile.php?menu_id='+secilenform+'&listeleme=E&masterfield='+masterfield+'&detailfield='+detailfield+'&recordid=<?php echo $_GET[recordid]; ?>&ustformid=<?php echo $_GET[menu_id]; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datas)

           {


     $('#alttablo_'+formum).html(datas);
     
     
      $('#yenisatirModal_'+formum).modal('hide');
        



           }

    } );
    
    
    
    
 <?php
}

if ($_GET[page_id]=='listings')
{
    ?>

		 location.reload();
<?php
    
}    
?>

			  

	



           }

    } );
      
      
      
      
      
      e.preventDefault();
  });
 
 
 
    $( '#frmExcelImport' )

  .submit( function( e ) {
      
      
      
      	           
      $.ajax( {

      url: 'excelimport.php?menu_id=<?php echo $_GET[tasarimid]; ?>',

       type: 'POST',

      data:new FormData(this),

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#excelimport').html(data);
      

			  

	



           }

    } );
      
      
      
      
      
      e.preventDefault();
  });
  
 
 
 
   $(document).on("click",".sistemeaktar",function(){
   


$.ajax( {

      url: 'sistemeaktar.php?menu_id=<?php echo $_GET[tasarimid]; ?>',

       type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


	location.reload();


			  

	



           }

    } );
      



});
  
   
  
   $(document).on("click",".alanlariduzelt",function(){
   


$.ajax( {

      url: 'alanlariduzelt.php?menu_id=<?php echo $_GET[tasarimid]; ?>',

       type: 'POST',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		 $('#excelimport').html(data);
      

			  

	



           }

    } );
      



});
  
  
  
  $(document).on("click",".kaydet",function(){
   


	    formData = new FormData($("#satirdetayformu")[0]);


	     
	   
	  
	 	$.ajax( {

      url: 'sender.php?form_id='+formum+'&recordid='+kaydim,

      type: 'POST',

      data:formData,

      processData: false,

      contentType: false,

	   success: function(data)

           {
               
               
      if (duzenlemeacik==1)
      {
          
          location.reload();
      }
      
               
               <?php
               
               
              if ($_GET[page_id]=='design')
            {      
             ?>  
               	 $.ajax( {

      url: 'designrefresh.php?tasarimid=<?php echo $_GET[tasarimid]; ?>&blokid=<?php echo $idsecili; ?>',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(datam)

           {
               
            $('#designicerik').html(datam);
            
             $('#yenisatirModal_199').modal('hide');
         
            
             $('#yenisatirModal_200').modal('hide');
         
            $('#yenisatirModal_236').modal('hide');
         
               
           }
	
	
	 } );
	 
	 
	 	           
      $.ajax( {

      url: 'yenikayit.php?page_id=yenikayit&menu_id=<?php echo $_GET[tasarimid]; ?>&onizleme=E',

      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


		$('#onizleme').html(data);
      

			  

	



           }

    } );
			  
	         
	 <?php
        }
         
               
               
               if ($_GET[page_id]!='design')
        {
        ?>    
        
      $.ajax( {

     <?php			       
 if ($_GET[page_id]=='polivalans')
	     {
	         ?>
      url: 'tabloyenile.php?menu_id='+formum+'&listeleme=E&masterfield='+masterfield+'&detailfield='+detailfield+'&recordid='+$('#index_ozluk_bilgileri').val()+'&ustformid=243',

<?php
}

 if ($_GET[page_id]!='polivalans')
	     {
	         ?>
      url: 'tabloyenile.php?menu_id='+formum+'&listeleme=E&masterfield='+masterfield+'&detailfield='+detailfield+'&recordid=<?php echo $_GET[recordid]; ?>&ustformid=<?php echo $_GET[menu_id]; ?>',

<?php
}
?>
      type: 'GET',

      data:'',

      processData: false,

      contentType: false,

	   success: function(data)

           {


     $('#alttablo_'+formum).html(data);
     
     
      $('#yenisatirModal_'+formum).modal('hide');
        



           }

    } );
    

<?php
}
?>
	  


}
  });
  
	    
         
	 
	});
	     
	     
	     
       
  
  $('#bildirimleritemizle').on("click",function(){
    
        console.log('ddd');
    
  });
    



      var stop=1;
   var audio = new Audio('audio.mp3');
    audio.loop = false;
    setInterval(function(){
  $.ajax({
   url:'denetle.php?userid=<?php echo $_SESSION["user_id"]; ?>',
    type:'GET',
   cache:true,
   processData:false,
    async: false,
   success:function(msg){
     
     if (msg!='')
     {
audio.play();
stop=0;
 $.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Yeni Bildirim',
            text: msg,
            loader:true,
            position: 'bottom-right',
            loaderBg:'#fec107',
            icon: 'info',
            hideAfter: 10000, 
       
        });
		return false;
   
}
   },
   error:function(msg)
   {
	   alert('Hata');
   }
  }); 
 
  }, 5000);

    
    $('#teknikresim').on("change",function(){
          var teknikresim = $('#teknikresim').val();
    if(teknikresim=='Var'){
      
        Swal.fire({
  icon: 'error',
  title: 'Uyarı',
  text: 'Ekler sekmesinden dosya eklemeyi unutmayınız!',
  confirmButtonText: `Tamam`,

});
        
    }else{
        
    }
    
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

	echo $_GET[menu_id]."&userid=".$_SESSION["user_id"]; 	

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

			 // $('#kayitformuicerik').html(data);
			 
			 
			 
			  
			  $('#basariliModal').modal('show');
			  
			  
			  <?php
			  if ($_GET[page_id]=='newrecord')
			  {
			   ?>   
			     
			     
			       window.setTimeout(function() {
       window.location = "index.php?page_id=listings&menu_id=<?php echo $_GET[menu_id]; ?>";	
      }, 2000);
			     
			 <?php 
			  }
			  
			  ?>
			  
			  
			  

}

			  

			  <?php
			  
			   if ($_GET[menu_id]=='368')

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
