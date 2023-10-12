<?php

include 'pdo_baglanti.php';
if($_GET[page_id]=='faturatoplamhesapla'){
$userid=$_GET[userid];
$kayitid=$_GET[kayitid];
$token=$_GET[token];
$kdvorani=$_GET[kdvorani];


 $toplam_tutar=0.00;

 $toplam_miktar=0.00;

 $iskonto_tutar=0.00;


 $iskonto_orani=0.00;


 $iskontolu_tutar=0.00;

 $kdv_tutari=0.00;


 $genel_toplam=0.00;



if ($_GET[token]!='')
{
     $token=$_GET[token];
    
  $sql="select *,teklif_kalemleri.ch_kodu,malzemeler.formulno,teklif_kalemleri.id as idim,(case when firma_karsiliklari.durum='Bekleme' or malzemeler.durum='Bekleme' then 'Bekleme' else 'Aktif' end) as urun_durumu from teklif_kalemleri left join malzemeler on malzemeler.malzemekodu=teklif_kalemleri.kod_urun left join firma_karsiliklari on firma_karsiliklari.karsilik_no=teklif_kalemleri.ch_kodu where index_teklif_kalemleri>0 and sip_id=?";  
    
    
}



if ($_GET[token]=='')
{
     $token=$_GET[kayitid];
    
   $sql="select *,teklif_kalemleri.ch_kodu,malzemeler.formulno,teklif_kalemleri.id as idim,(case when firma_karsiliklari.durum='Bekleme' or malzemeler.durum='Bekleme' then 'Bekleme' else 'Aktif' end) as urun_durumu from teklif_kalemleri left join malzemeler on malzemeler.malzemekodu=teklif_kalemleri.kod_urun left join firma_karsiliklari on firma_karsiliklari.karsilik_no=teklif_kalemleri.ch_kodu where index_teklif_kalemleri>0 and sip_id=?";  
    
       
    
    
}

        $query=$db->prepare($sql);
         $query->execute([$token]);
 if($query !== false)
{
  while( $okut =$query->fetch(PDO::FETCH_ASSOC) )
    {
    $toplam_tutar=$toplam_tutar+($okut[fiyat]*$okut[kesme_isemri_gelecek_miktar]);
    $toplam_miktar=$toplam_miktar+$okut[kesme_isemri_gelecek_miktar];
    $toplam_tutar=$toplam_tutar+($okut[kalipfiyati]*1);
    $iskontotutari=$okut[iskonto_tutar];
    $iskontoorani=$okut[iskonto_orani];
    
}

}
 $iskontolu_tutar=$toplam_tutar;
   $kdv_tutar=($toplam_tutar)*($_GET[kdvorani]/100);
if ($iskontotutari!='')
{
   $kdv_tutar=($toplam_tutar-$iskontotutari)*($_GET[kdvorani]/100);
   $iskontolu_tutar=$toplam_tutar-$iskontotutari;
}

if ($iskontoorani!='')
{
     $kdv_tutar=$toplam_tutar*(1-($iskontotutari)/100)*($_GET[kdvorani]/100);  
     $iskontolu_tutar=$toplam_tutar*(1-($iskontotutari)/100);
}

$genel_toplam=$iskontolu_tutar+$kdv_tutar;


echo "{ \"toplam_tutar\": \".number_format($toplam_tutar,2).\", \"toplam_miktar\": \".number_format($toplam_miktar,2).\",  \"iskonto_tutar\": \".number_format($iskonto_tutar,2).\",  \"iskonto_orani\": \".number_format($iskonto_orani,2).\",  \"iskontolu_tutar\": \".number_format($iskontolu_tutar,2).\", \"kdv_tutar\":\".number_format($kdv_tutar,2).\",\"genel_toplam\":\"number_format($genel_toplam,2)\" }";




}



?>