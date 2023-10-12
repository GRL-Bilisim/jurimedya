<?php 

include 'baglanti.php';

$id = $_GET[ids];


$sql = "select * from veridagitimformu where index_veridagitimformu='$id'";
$sorg = mysqli_query($connection,$sql);
    $row = mysqli_num_rows($sorg);

while($sorgu = mysqli_fetch_assoc($sorg)){
  
$date=date("Y-m-d");

    if($row > 0){
                $insert = "insert into maliyetanalizi(firmaadi,projeadi,formudolduran,vdfid,olculerd,olculerd2,olculerh,figur,aciklama,yetisenkodu,tarih) values('".$sorgu[musteri_adi]."','".$sorgu[urun_proje_adi]."','".$sorgu[hazirlayan]."','$id','".$sorgu[d]."','".$sorgu[d2]."','".$sorgu[h]."','".$sorgu[figur]."','".$sorgu[istenen_calisma_bilgileri]."','".$sorgu[yf_kodu]."','$date')";
     echo $insert;
      mysqli_query($connection,$insert);
    }
   else if($row == 0){
    
        
    }
    
 
    
    
}

?>