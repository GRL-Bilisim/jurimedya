<?php 



if($_GET[page_id]=='pdo_mesajgonder'){

 date_default_timezone_set('Europe/Istanbul');

 include 'pdo_baglanti.php';
    
        $gonderenid=$_POST['gonderenid'];
        $aliciid=$_POST['aliciid'];
        $gonderilenmesaj=iconv( "UTF-8","ISO-8859-9",$_POST['mesaj']);
        $gonderilenmesaj = str_replace("'","\'",$gonderilenmesaj);
        $gonderimtarih=date("Y-m-d");
        $gonderimsaat=date("H:i:s");
        $durumu="Sent";

        $sql=$db->prepare("INSERT INTO mesajlarim(index_mesajlarim, mesaj, gonderen, alici, olusturma_saati, olusturma_tarihi, gonderen_sil, alici_sil, resim, durumu) 
                            VALUES
                        (NULL,'$gonderilenmesaj','$gonderenid','$aliciid','$gonderimsaat','$gonderimtarih',NULL,NULL,NULL,'$durumu') ");
        $sql->execute();
        
    
}

?>