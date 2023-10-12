<?php


include 'baglanti.php';

ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


 $toplam_tutar=0.00;

 $toplam_miktar=0.00;

 $iskonto_tutar=0.00;


 $iskonto_orani=0.00;


 $iskontolu_tutar=0.00;

 $kdv_tutari=0.00;


 $genel_toplam=0.00;



if ($_GET[kayitid]=='')
{
    
  $sql="select *,teklif_kalemleri.ch_kodu,malzemeler.formulno,teklif_kalemleri.id as idim,(case when firma_karsiliklari.durum='Bekleme' or malzemeler.durum='Bekleme' then 'Bekleme' else 'Aktif' end) as urun_durumu from teklif_kalemleri left join malzemeler on malzemeler.malzemekodu=teklif_kalemleri.kod_urun left join firma_karsiliklari on firma_karsiliklari.karsilik_no=teklif_kalemleri.ch_kodu where index_teklif_kalemleri>0 and sip_id='-".$_SESSION[user_id]."'";  
    
    
}



if ($_GET[kayitid]!='')
{
    
   $sql="select *,teklif_kalemleri.ch_kodu,malzemeler.formulno,teklif_kalemleri.id as idim,(case when firma_karsiliklari.durum='Bekleme' or malzemeler.durum='Bekleme' then 'Bekleme' else 'Aktif' end) as urun_durumu from teklif_kalemleri left join malzemeler on malzemeler.malzemekodu=teklif_kalemleri.kod_urun left join firma_karsiliklari on firma_karsiliklari.karsilik_no=teklif_kalemleri.ch_kodu where index_teklif_kalemleri>0 and sip_id='".$_GET[kayitid]."'";  
    
       
    
    
}

$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))

{
    $toplam_tutar=$toplam_tutar+($okut[fiyat]*$okut[kesme_isemri_gelecek_miktar]);
    $toplam_miktar=$toplam_miktar+$okut[kesme_isemri_gelecek_miktar];
    $toplam_tutar=$toplam_tutar+($okut[kalipfiyati]*1);
    
}
 $iskontolu_tutar=$toplam_tutar;
   $kdv_tutar=($toplam_tutar)*($_GET[kdvorani]/100);
if ($_GET[iskontotutari]!='')
{
   $kdv_tutar=($toplam_tutar-$_GET[iskontotutari])*($_GET[kdvorani]/100);
   $iskontolu_tutar=$toplam_tutar-$_GET[iskontotutari];
}

if ($_GET[iskontoorani]!='')
{
     $kdv_tutar=$toplam_tutar*(1-($_GET[iskontotutari])/100)*($_GET[kdvorani]/100);  
     $iskontolu_tutar=$toplam_tutar*(1-($_GET[iskontotutari])/100);
}

$genel_toplam=$iskontolu_tutar+$kdv_tutar;


echo  number_format($toplam_tutar,2)."|";

echo   number_format($toplam_miktar,2)."|";

echo   number_format($iskonto_tutar,2)."|";


echo   number_format($iskonto_orani,2)."|";


echo  number_format($iskontolu_tutar,2)."|";

echo   number_format($kdv_tutar,2)."|";


echo   number_format($genel_toplam,2)."|";




?>