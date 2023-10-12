
<?php 

include 'baglanti.php';

ob_start();

session_name("asalyapi");

session_start();

$kullanici = $_GET[userid];

$sql = "select * from kullanicilar where user_indeks=$kullanici ";

$sorgula=mysqli_query($connection,$sql);

while($oku=mysqli_fetch_assoc($sorgula)){
?>


									
											
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
														<h5 class="modal-title">Şifre Değiştir</h5>
													</div>
													<div class="modal-body" id="sifredegistiricerik">
														<form action="sifreyenile.php" method="POST">
														    	<input type="hidden"  class="form-control" name="usid" value="<?php  echo $kullanici; ?>">
															<div class="form-group">
																<label for="eskisifre" class="control-label mb-10">Eski Şifre:</label>
																	<i class="fa fa-eye showpwd" onClick="showPwd('eskisifre', this)" style="text-align:end;">   </i>
																<input type="password" disabled class="form-control" id="eskisifre" value="<?php  echo $oku[pass]; ?>">
															</div>
															<div class="form-group">
																<label for="yenisifre" class="control-label mb-10">Yeni Şifre:</label>
																	<i class="fa fa-eye showpwd" onClick="showPwd('yenisifre', this)" style="text-align:end;">   </i>
																<input type="password" minlength="6" required class="form-control" id="yenisifre" name="yenisifre">
															</div>
																<div class="form-group" id="hatalipass">
																    	<label for="yenisifretekrar" class="control-label mb-10">Yeni Şifre Tekrar: </label>
																    	<i class="fa fa-eye showpwd" onClick="showPwd('yenisifretekrar', this)" style="text-align:end;">   </i>
													                	<input type="password" minlength="6" required class="form-control" id="yenisifretekrar">
																	    
															</div>
															<p id="validate-status"></p>
																<div class="modal-footer">
																<button type="button" class="btn btn-default" data-dismiss="modal">Kapat</button>
															    <button type="submit" class="btn btn-danger " name="sifreyenile" >Şifre Değiştir</button>
													</div>
	                                                        </form>
														
													</div>
												
								
						
		
		<script>
	
	
	$(document).ready(function() {
  $("#yenisifretekrar").keyup(validate);


function validate() {
  var password1 = $("#yenisifre").val();
  var password2 = $("#yenisifretekrar").val();

    var d = document.getElementById("hatalipass");
    
    
    if(password1 == password2) {
    d.classList.remove("has-error");
      d.classList.add("has-success");
    }
    
    else if(password1 != password2) {
        d.classList.remove("has-success");
        d.classList.add("has-error");
    }
   
}

	});	
	
		
    function showPwd(id, el) {
  let x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
    el.className = 'fa fa-eye-slash showpwd';
  } else {
    x.type = "password";
    el.className = 'fa fa-eye showpwd';
  }
}



</script>	

						
<?php

}
?>


