<?php


ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';







if ($_GET[ids]!='')
{

$sqlyes="select * from kalipsistemi where index_kalipsistemi='".$_GET[ids]."' ";
$sorbana=mysqli_query($connection,$sqlyes);

while($okut=mysqli_fetch_assoc($sorbana))
{

$sql="select * from kalipsistemproses where kalipsistemid='".$okut[index_kalipsistemi]."'";

$sorgula=mysqli_query($connection,$sql);

while($okuz=mysqli_fetch_assoc($sorgula)){
    
 $s = mysqli_query($connection,"INSERT INTO `kaliptanitim`(`index_kaliptanitim`, `aciklama`, `alt_baglama_aparati`, `ariza`, `ariza_tarih`, `baglanti_sekli`, `bakim_aciklama`, `bakim_baski`, `bakim_tarih`, `baski_omru`, `baski_omru_bildirim`, `baski_omru_kalan`, `baski_omru_kalan_second`, `baski_omru_yuzde`, `baski_onay_tarihi`, `cift_calisma_bilgi`, `cift_calisma_yapildi`, `dis_cap`, `dis_cap_t1`, `dis_cap_t2`, `dizme_aparati_raf_adres`, `dizme_aparati_var_yok`, `donus_tarihi`, `dosya_yolu`, `durum`, `durum_kod`, `duzenle_basla_bitir`, `goz_adedi`, `ic_cap`, `ic_cap_t1`, `ic_cap_t2`, `id`, `isinma_suresi`, `isteyen`, `kalan_baski`, `kalip_2`, `kalip_adi`, `kalip_agirligi`, `kalip_bilgi_karakter_sayisi`, `kalip_cap`, `kalip_no`, `kalip_no_aktif`, `kalip_no_text`, `kalip_text`, `kalip_tipi`, `kalip_yukseklik`, `kapsam`, `karsilik_no`, `kod_giris`, `kod_yeni`, `kullanici_yetkisi`, `maliyeti`, `malzeme`, `mukerrer`, `periyodik_bakim_baski_sayaci`, `periyodik_bakim_baski_sayaci_second`, `periyodik_bakim_baski_sayisi`, `raf_adresi`, `resim`, `resim_ad`, `rev_no`, `rev_tarihi`, `sabun`, `seri_no`, `sokme_suresi`, `son_is_baslama_ts`, `son_is_bitis_ts`, `son_is_hamur`, `son_is_karsilik`, `son_is_pres_no`, `son_is_sipid`, `son_is_urun`, `sorunlu`, `sorunlu_aciklama`, `takma_suresi`, `tam_yol`, `tarih`, `temizlik_onay`, `temizlik_periyodu_baslangic`, `temizlik_periyodu_manuel`, `temizlik_periyodu_oto`, `temizlik_sayac`, `temizlik_text`, `temizlik1`, `temizlik1_baski`, `temizlik2`, `temizlik2_baski`, `text_kaliphane`, `uckat_calisma_bilgi`, `uckat_calisma_yapildi`, `ust_baglama_aparati`, `uzanti`, `verilis_tarihi`, `yapilacak_is`, `yapilan_baski`, `yapilan_baski_copy`, `yapilan_baski_second`, `yapildigi_yer`, `yapilis_tarihi`, `yedek_goz_alt`, `yeri`, `yukseklik`, `yukseklik_t1`, `yukseklik_t2`, `markalama`, `yedek_goz_orta`, `yedek_goz_ust`, `kalip_en`, `kalip_boy`) VALUES
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    null,'".$okuz[aciklama]."','','','','".$okuz[kalipbaglantisekli]."','','','','','','','','','','','".$okuz[ciftcalisir]."','".$okuz[ciftyapildi]."','','','','','','','','".$okuz[durum]."','','','".$okuz[kalipgoz]."','','','','','','','','','','','','','','','','','','','','','','','','".$okuz[maliyetno]."','','','','','','','','','','".$okuz[revno]."','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','')");

}


} 


}


echo "OK";




?>