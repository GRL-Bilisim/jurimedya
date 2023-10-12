<?php 


include 'baglanti.php';


ob_start();

session_name("asalyapi");


session_start();


$kid = $_POST['usid'];

if(isset($_POST['sifreyenile'])){

$yenisifre = $_POST[yenisifre];


$sql =  "update kullanicilar set pass ='$yenisifre' where user_indeks = $kid ";
$calistir = mysqli_query($connection,$sql);
$oku=mysqli_fetch_assoc($calistir);


 if($calistir){
         $_SESSION['login_id']="";
         header("Location:./index.php");
        }

    else{
           header("Location:./index.php");
        }


}


?>
