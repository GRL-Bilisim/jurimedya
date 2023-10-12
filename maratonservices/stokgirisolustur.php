<?php 


ob_start();

session_name("asalyapi");

session_start();

include 'baglanti.php';


$sipaid = $_GET[sipaid];




if($sipaid!=''){
    
    $siparis = mysqli_query($connection,"select * from satinalmasiparisleri where index_satinalmasiparisleri=".$sipaid);

 mysqli_query($connection,"update satinalma set siparisdurumu='Kabul Edildi'  where satinalmakodu=".$sipaid);

    while($sipariskalem = mysqli_fetch_assoc($siparis)){
    
         $satinalma = mysqli_query($connection,"select * from satinalma where satinalmakodu=".$sipariskalem[index_satinalmasiparisleri]);
         while($satinkalem = mysqli_fetch_assoc($satinalma)){
           
            $malzemetedarik = mysqli_query($connection,"select *,malzemetedarikcileri.tedarikci as tedarik,malzemetedarikcileri.ureticikodu as malureticikod from malzemetedarikcileri left join malzemeler on malzemeler.index_malzemeler = malzemetedarikcileri.malzemeid where malzemetedarikcileri.ureticikodu like '%".$satinkalem[aciklamasi]."%' ");

                while($malzemebilgi = mysqli_fetch_assoc($malzemetedarik)){
                
                 $urunadi = $malzemebilgi[malureticikod];
                 $urunkodu = $malzemebilgi[malzemekodu];
                 $tedarikci = $malzemebilgi[tedarik];
                 $adet = $satinkalem[siparismiktari];
                 $sipkg = $satinkalem[sipariskg];
                  $birimadet = ($sipkg / $adet);
                 $fiyat = $malzemebilgi[birimfiyat];
                 $fiyat = str_replace(',','.',$fiyat);
                 $doviz = $malzemebilgi[fiyatbirimi];
              

                $my = mysqli_query($connection,"select * from kuraktarimlari ");
                while($s = mysqli_fetch_assoc($my)){
                    if($s[parabirimi]==$doviz){
                        $alisfiyat = $s[alisfiyat];
                    }
                    if($s[parabirimi]=='USD'){
                        $kurusd=$s[alisfiyat];
                    }
                    if($s[parabirimi]=='EUR'){
                        $kureuro=$s[alisfiyat];
                    }
                }

            $tutar = $adet*$alisfiyat;

                $insert="INSERT INTO `stokgiriskalemleri`(`index_stokgiriskalemleri`, `urunadi`, `urunkodu`,`adet`, `birimkg`, `gelenkg`, `fiyat`, `doviz`, `tutar`, `sipariskg`,`fisid`) VALUES (null,'$urunadi','$urunkodu','$birimadet','$adet','$sipkg','$fiyat','$doviz','$tutar','$sipkg','-".$_SESSION[user_id]."')";
                
              $insertle = mysqli_query($connection,$insert); 
                    
                }
               echo $tedarikci."|".$kurusd."|".$kureuro;
         }
        
        
        
    }

}


                




?>