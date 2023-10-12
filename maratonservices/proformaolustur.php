<?php

ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


include 'baglanti.php';



$secilenler =  $_GET[secilenler];

$strc = explode(',',$secilenler);




for($i=0;$i<count($strc);$i++)
{

    if($strc[$i]>0){
                  $sql ="select * from proformalar where index_proformalar='".$strc[$i]."' ";

    $so = mysqli_query($connection,$sql);
    while($cxz = mysqli_fetch_assoc($so)){
       
       $oktan = mysqli_query($connection,"select * from proformakalemleri where proformaid='".$cxz['index_proformalar']."' ");

       
                    


          while($zsa = mysqli_fetch_assoc($oktan)){
              echo "select * from firma_karsiliklari where karsilik_no='".$zsa[musterikodu]."'";
              
                   $firkarsilik = mysqli_query($connection,"select * from firma_karsiliklari where karsilik_no='".$zsa[musterikodu]."'");
                        while($cek = mysqli_fetch_assoc($firkarsilik)){
                            $kod_urun = $cek[karsilik_no];
                        }
              
                 $sql2 = "insert into siparis_izleme(sip_id,firma_termini,kesme_isemri_gelecek_miktar,ch_kodu,kod_urun) values('-".$_SESSION[user_id]."',NULL,'".$zsa[adetgramaj]."','".$zsa[musterikodu]."','$kod_urun') ";

           mysqli_query($connection,$sql2);
            }    
        
       } 
    }

   
   
    

    
 
    
          
   

    
}

?>