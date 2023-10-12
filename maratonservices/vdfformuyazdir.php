<?php 

include 'baglanti.php';

 $sql = "select * from veridagitimformu where index_veridagitimformu = '".$_GET[vdfid]."' ";
 $sorgula = mysqli_query($connection, $sql);
while($oku = mysqli_fetch_assoc( $sorgula)){
   $unite = $oku[unite];
   $revno = $oku[rev_no];
   $formno = $oku[formno];
   $no = $oku[no];
   $tarih = $oku[tarih];
   $musterifirma = $oku[musteri_adi];
   $sql = "select * from cariler where index_cariler = '$musterifirma'";
   $sorgu2 = mysqli_query($connection,$sql);
   while($oku2 = mysqli_fetch_assoc($sorgu2)){
       $musterifirma = iconv( "ISO-8859-9","UTF-8",$oku2[firma_adi]);
   }
   $ilgilikisi = iconv( "ISO-8859-9","UTF-8",$oku[ilgili]);
   $yurticidisi = iconv( "ISO-8859-9","UTF-8",$oku[yurtici]);
   $sektor = iconv( "ISO-8859-9","UTF-8",$oku[sektor]);
   $otomotiv =  iconv( "ISO-8859-9","UTF-8",$oku[otomotiv]);
   $teknikresim =  iconv( "ISO-8859-9","UTF-8",$oku[teknik_resim]);
   $gelennumune =  iconv( "ISO-8859-9","UTF-8",$oku[gelen_numune]);
   $numune_tahribat = iconv( "ISO-8859-9","UTF-8",$oku[numune_tahribat]);
   $test_raporu = iconv( "ISO-8859-9","UTF-8",$oku[test_raporu]);
   $malzeme_sartnamesi = iconv( "ISO-8859-9","UTF-8",$oku[malzeme_sartnamesi]);
   $sarf_malzeme_temin_sekli =  iconv( "ISO-8859-9","UTF-8",$oku[sarf_malzeme_temin_sekli]);
   $numune_talebi = iconv( "ISO-8859-9","UTF-8",$oku[numune_talebi]);
   $proje_sozlesmesi = iconv( "ISO-8859-9","UTF-8",$oku[proje_sozlesmesi]);
   $sevkiyat_periyodu = iconv( "ISO-8859-9","UTF-8",$oku[sevkiyat_periyodu]);
   $ozel_karakteristik_aciklama = iconv( "ISO-8859-9","UTF-8",$oku[ozel_karakteristik_aciklama]);
   $musteri_ozel_istegi = iconv( "ISO-8859-9","UTF-8",$oku[musteri_ozel_istegi]);
   $paketleme_sevk_aciklama = iconv( "ISO-8859-9","UTF-8",$oku[paketleme_sevk_aciklama]);
   $kullanilanulkeyasal = iconv( "ISO-8859-9","UTF-8",$oku[urun_kullanilan_ulke]);
   $kaliteelkitabi = iconv( "ISO-8859-9","UTF-8",$oku[kalite_el_kitabi]);
   $ppap = iconv( "ISO-8859-9","UTF-8",$oku[ppap]);
   $firmakodu = $oku[musteri_adi];
   $urunprojead = $oku[urun_proje_adi];
   $filtrenumarasi = $oku[filtre_no];
   $musteriurunkodu = $oku[musteri_urun_kodu];
   $yfkodu = $oku[yf_kodu];
   $orijinalfiltrekodu = $oku[orjinal_filtre_kodu];
   $urunkullanimalani = $oku[urun_kullanim_alani];
   $D = $oku[d];
   $d = $oku[d2];
   $H = $oku[h];
   $hammaddecinsi = $oku[hammadde_cinsi];
   $hammadderengi = $oku[hammadde_rengi];
   $hammaddesertlik = $oku[hammadde_sertligi];
   $yillikkullanimadet = $oku[yillik_kullanim_adedi];
   $adet = $oku[numune_adedi];
   $level = $oku[level];
   $hazirlayan = $oku[hazirlayan];
   $onaylayan = $oku[onaylayan];
}

?>


<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:8.0pt;
	margin-left:0cm;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:70.85pt 70.85pt 70.85pt 70.85pt;}
div.WordSection1
	{page:WordSection1;}
-->
</style>

</head>

<body lang=TR>

<div class=WordSection1>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='border-collapse:collapse;border:none;margin-left:4.8pt;
 margin-right:4.8pt'>
 <tr style='height:59.9pt'>
  <td width=450 colspan=12 style='width:337.9pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:59.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><img width=307 height=69 id="Resim 1"
  src="./ciktitasarimlari/vdf_dosyalar/image001.jpg"></p>
  </td>
  <td width=287 colspan=11 style='width:214.7pt;border:solid windowtext 1.0pt;
  border-left:none;background:yellow;padding:0cm 5.4pt 0cm 5.4pt;height:59.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span style='font-size:14.0pt'>YENİ
  ÜRÜN VERİ DAĞITIM FORMU</span></b></p>
  </td>
 </tr>
 <tr style='height:20.75pt'>
  <td width=64 style='width:48.1pt;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:20.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ÜNİTE :</span></p>
  </td>
  <td width=386 colspan=11 style='width:289.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $unite; ?></span></p>
  </td>
  <td width=139 colspan=6 style='width:103.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>REVİZYON NO : <?php echo $revno; ?></span></p>
  </td>
  <td width=148 colspan=5 style='width:110.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>FORM NO : </span><span
  style='font-size:10.0pt'><?php echo $formno; ?></span></p>
  </td>
 </tr>
 <tr style='height:16.7pt'>
  <td width=187 colspan=2 style='width:140.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>OTOMOTİV / AFTER MARKET :</span></p>
  </td>
  
  <?php if($otomotiv=='Oto'){ ?>
    <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>Otomotiv</span></p>
  </td>
    <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>After</p>
  </td>

  <?php } 
    else if($otomotiv=='After'){ ?>
    <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>Otomotiv</span></p>
  </td>
    <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>After</p>
  </td>

  <?php } else { ?>
      <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span>Otomotiv</span></p>
  </td>
    <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style=' text-align:center;margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>After</p>
  </td>

  
    <?php } ?>
  <td width=35 valign=top style='width:25.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>NO:</span></p>
  </td>
  <td width=104 colspan=5 valign=top style='width:78.05pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $no; ?></span></p>
  </td>
  <td width=60 colspan=4 valign=top style='width:45.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>TARİH :</span></p>
  </td>
  <td width=87 valign=top style='width:65.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $tarih; ?></span></p>
  </td>
 </tr>
 <tr style='height:12.8pt'>
  <td width=187 colspan=2 rowspan=2 style='width:140.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>PROJE TÜRÜ :</span></p>
  </td>
  <td width=263 colspan=10 valign=top style='width:197.5pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>YENİ MÜŞTERİDE</p>
  </td>
  <td width=287 colspan=11 valign=top style='width:214.7pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>ESKİ MÜŞTERİDE</p>
  </td>
 </tr>
 <tr style='height:12.8pt'>
  <td width=177 colspan=4 valign=top style='width:133.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal style='text-align:center;margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>YENİ PROJE</p>
  </td>
  <td width=86 colspan=6 valign=top style='width:64.3pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal style='text-align:center;margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>ESKİ ÜRÜN</p>
  </td>
  <td width=158 colspan=7 style='width:117.9pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>YENİ PROJE</span></p>
  </td>
  <td width=129 colspan=4 style='width:96.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>ESKİ ÜRÜN</p>
  </td>
 </tr>
 <tr style='height:17.45pt'>
  <td width=187 colspan=2 style='width:140.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>YURT İÇİ / YURT DIŞI :</span></p>
  </td>
  <?php if($yurticidisi=='İÇ TİCARET'){ ?>
  
    <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>YURT İÇİ</span></p>
  </td>
    <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>YURT DIŞI</p>
  </td>
  <?php } else if($yurticidisi=='DIŞ TİCARET') { ?>

    <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>YURT İÇİ</p>
  </td>
      <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>YURT DIŞI</span></p>
  </td>

  <?php } else { ?>
   <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>YURT İÇİ</p>
  </td>
   <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>YURT DIŞI</p>
  </td>
  <?php } ?>
  <td width=287 colspan=11 valign=top style='width:214.7pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:16.8pt'>
  <td width=187 colspan=2 style='width:140.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>SEKTÖR</span> :</p>
  </td>
  
  <?php if($sektor == 'OTO') { ?> 
    <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>OTO. SAN.</span></p>
  </td>
  <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>DİĞER</p>
  </td>
  <?php } 
   else if($sektor == 'DİĞER') { ?> 
  <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>OTO. SAN.</p>
     <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:white'>DİĞER</span></p>
  </td>
  </td>
  <?php } else { ?>
  <td width=175 colspan=3 style='width:131.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='color:black'>OTO. SAN.</span></p>
  </td>
  <td width=88 colspan=7 style='width:65.95pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'>DİĞER</p>
  </td>
  <?php } ?>
  <td width=287 colspan=11 valign=top style='width:214.7pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.8pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:25.6pt'>
  <td width=187 colspan=2 style='width:140.4pt;border-top:none;border-left:
  solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;border-right:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:25.6pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>MÜŞTERİ FİRMA ÜNVANI/ADRES:</span></p>
  </td>
  <td width=550 colspan=21 style='width:412.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:25.6pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $musterifirma; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.7pt'>
  <td width=450 colspan=12 style='width:337.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>İLGİLİ KİŞİ :  <?php echo $ilgilikisi; ?></span></p>
  </td>
  <td width=287 colspan=11 style='width:214.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.7pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>FİRMA KODU : <?php echo $firmakodu; ?></span></p>
  </td>
 </tr>
 <tr style='height:16.05pt'>
  <td width=450 colspan=12 style='width:337.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:16.05pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ÜRÜN PROJE ADI : <?php echo $urunprojead; ?></span></p>
  </td>
  <td width=287 colspan=11 style='width:214.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.05pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>FİLTRE NUMARASI : <?php echo $filtrenumarasi; ?></span></p>
  </td>
 </tr>
 <tr style='height:17.9pt'>
  <td width=737 colspan=23 style='width:552.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>MÜŞTERİ ÜRÜN KODU : <?php echo $musteriurunkodu; ?></span></p>
  </td>
 </tr>
 <tr style='height:17.9pt'>
  <td width=291 colspan=3 style='width:218.65pt;border-top:none;border-left:
  solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;border-right:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>YF KODU :</span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $yfkodu; ?></span></p>
  </td>
 </tr>
 <tr style='height:17.9pt'>
  <td width=291 colspan=3 style='width:218.65pt;border-top:none;border-left:
  solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;border-right:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ORİJİNAL FİLTRE KODU : </span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $orijinalfiltrekodu; ?></span></p>
  </td>
 </tr>
 <tr style='height:17.9pt'>
  <td width=291 colspan=3 style='width:218.65pt;border-top:none;border-left:
  solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;border-right:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ÜRÜN KULLANIM ALANI : </span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $urunkullanimalani; ?></span></p>
  </td>
 </tr>
 <tr style='height:12.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:12.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'> TEKNİK RESİM : </span></p>
  </td>
  
  <?php if($teknikresim=='Var'){ ?> 
   <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:12.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>Var</span></p>
  </td>
      <td width=46 style='width:60.1pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>YOK</span></p>
  </td>
 
  <?php } else if($teknikresim=='Yok'){ ?>
      
            <td width=46 style='width:60.1pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:12.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?>
  
              <td width=46 style='width:60.1pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YOK</span></p>
  </td>
  <?php } ?>

  <td width=319 colspan=13 style='width:239.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:14.9pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>GELEN NUMUNE / DURUMU</span></p>
  </td>
  
  <?php if($gelennumune=='Var-Yeni'){ ?>
   <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt; background:black;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; color:white'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YOK</span></p>
  </td>
  <td width=90 colspan=4 style='width:67.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt;background:black;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; color:white'>YENİ</span></p>
  </td>
  <td width=79 colspan=3 style='width:59.35pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>ESKİ</span></p>
  </td>
  
  
  <?php } else if($gelennumune=='Var-Eski') { ?>
  
    <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt; background:black;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; color:white'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YOK</span></p>
  </td>
  <td width=90 colspan=4 style='width:67.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YENİ</span></p>
  </td>
  <td width=79 colspan=3 style='width:59.35pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt;background:black;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; color:white'>ESKİ</span></p>
  </td>
  
    <?php } else if($gelennumune=='Yok'){ ?> 
            <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt; background:black;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>YOK</span></p>
  </td>
  <td width=90 colspan=4 style='width:67.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YENİ</span></p>
  </td>
  <td width=79 colspan=3 style='width:59.35pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; '>ESKİ</span></p>
  </td>
    
    
    <?php } else { ?>
        <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt; background:white;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YOK</span></p>
  </td>
  <td width=90 colspan=4 style='width:67.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>YENİ</span></p>
  </td>
  <td width=79 colspan=3 style='width:59.35pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; '>ESKİ</span></p>
  </td>
    
    <?php } ?>
  <td width=150 colspan=6 style='width:112.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.9pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>NUMUNE TAHRİBAT / ANALİZ İZNİ</span></p>
  </td>
    <?php if($numune_tahribat=='Var') { ?>
    <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:15.95pt; background:black;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } 
  else if($numune_tahribat=='Yok') { ?>
    <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?>
  
        <td width=46 style='width:34.8pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=80 colspan=6 style='width:60.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  
    <?php } ?>
  <td width=319 colspan=13 style='width:239.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ÜRÜN ÖLÇÜLERİ :</span></p>
  </td>
  <td width=83 colspan=4 style='width:62.45pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>D : <?php echo $D; ?></span></p>
  </td>
  <td width=67 colspan=4 style='width:50.5pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>d : <?php echo $d; ?></span></p>
  </td>
  <td width=125 colspan=5 style='width:93.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>H : <?php echo $H; ?></span></p>
  </td>
  <td width=62 colspan=4 style='width:46.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>FİGÜR : </span></p>
  </td>
  <td width=108 colspan=3 style='width:80.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>HAMMADDE CİNSİ : </span></p>
  </td>
  <td width=150 colspan=8 style='width:112.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $hammaddecinsi; ?></span></p>
  </td>
  <td width=125 colspan=5 style='width:93.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>HAMMADDE
  RENGİ : </span></p>
  </td>
  <td width=170 colspan=7 style='width:127.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $hammadderengi; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>HAMMADDE SERTLİĞİ : </span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $hammaddesertlik; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>TEST RAPORU İSTENİYOR MU :</span></p>
  </td>
  
  <?php if($test_raporu=='EVET') { ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>EVET</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>HAYIR</span></p>
  </td>
  <?php }
  else if($test_raporu=='HAYIR') { ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>EVET</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt;background:black;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>HAYIR</span></p>
  </td>
  <?php } else { ?>
     <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>EVET</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>HAYIR</span></p>
  </td>
  
  <?php } ?>
  <td width=208 colspan=8 style='width:156.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>MALZEME ŞARTNAMESİ : </span></p>
  </td>
    <?php if($malzeme_sartnamesi=='Var') { ?>
  <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt;background:black;'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR </span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php }  else if($malzeme_sartnamesi=='Yok') { ?>
  <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR </span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR </span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border:none;border-bottom:solid windowtext 1.0pt;
    padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  
  <?php } ?>
  <td width=208 colspan=8 style='width:156.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>YILLIK KULLANIM ADEDİ :</span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $yillikkullanimadet; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>SARF MALZEME / TEMİN ŞEKLİ :</span></p>
  </td>
  <?php if($sarf_malzeme_temin_sekli=='Dış Alım'){ ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <td width=118 colspan=6 style='width:88.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>DIŞ ALIM</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>MÜŞTERİ</span></p>
  </td>
  <?php } 
   else if($sarf_malzeme_temin_sekli=='Müşteri'){ ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <td width=118 colspan=6 style='width:88.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>DIŞ ALIM</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>MÜŞTERİ</span></p>
  </td>
  <?php } else if($sarf_malzeme_temin_sekli=='Yok'){ ?>
      <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white
  '>YOK</span></p>
  </td>
  <td width=118 colspan=6 style='width:88.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>DIŞ ALIM</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>MÜŞTERİ</span></p>
  </td>
  <?php } else { ?>
      <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
   padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <td width=118 colspan=6 style='width:88.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>DIŞ ALIM</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>MÜŞTERİ</span></p>
  </td>
  <?php } ?>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>NUMUNE TALEBİ / ADEDİ : </span></p>
  </td>
  
  <?php if($numune_talebi=='Var'){ ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } else if($numune_talebi=='Yok') { ?>      
        <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?>
   <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } ?>

  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>ADET : </span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $adet; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>NAVLUN DURUMU : </span></p>
  </td>
  <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>PEŞİN</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>KARŞ. ÖD.</span></p>
  </td>
  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>PROJE SÖZLEŞMESİ :</span></p>
  </td>
  <?php if($proje_sozlesmesi=='Var'){  ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
 background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt; color:white'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
 '>YOK</span></p>
  </td>
  <?php } else if($proje_sozlesmesi=='Yok'){  ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?> 
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } ?>

  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>SEVKİYAT PERİYODU :</span></p>
  </td>
  <?php if($sevkiyat_periyodu=='Var'){ ?>
  
  
    <?php  } else if ($sevkiyat_periyodu=='Yok'){  ?>
      <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
    <?php } else { ?>
          <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
    
    <?php } ?>
  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>PPAP / LEVEL</span></p>
  </td>
  <?php if($ppap=='Var'){ ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white;'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } else if($ppap == 'Yok') { ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?>
   <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } ?>

  <td width=118 colspan=6 style='width:88.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>LEVEL :</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $level; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ÖZEL KARAKTERİSTİK AÇIKLAMA : </span></p>
  </td>
  
  <?php if($ozel_karakteristik_aciklama=='Var'){?> 
   <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } else if($ozel_karakteristik_aciklama=='Yok') { ?> 
   <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?>
   <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } ?>
 
  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>MÜŞTERİ ÖZEL İSTEĞİ AÇIKLAMA : </span></p>
  </td>
  
  <?php if($musteri_ozel_istegi=='Var') { ?>
  <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;color:white'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  
  <?php } else if($musteri_ozel_istegi=='Yok') { ?>
   <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  
  <?php } else { ?>
  <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  
  <?php } ?>
  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>PAKETLEME VE SEVK ŞARTNAMESİ
  AÇIKLAMASI : </span></p>
  </td>
  
  <?php if($paketleme_sevk_aciklama=='Var'){ ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } else if($paketleme_sevk_aciklama=='Yok') { ?>
    <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:black;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  color:white'>YOK</span></p>
  </td>
  <?php } else { ?> 
      <td width=118 colspan=6 style='width:88.8pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>VAR</span></p>
  </td>
  <td width=119 colspan=6 style='width:88.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt;
  '>YOK</span></p>
  </td>
  <?php } ?>

  <td width=118 colspan=6 style='width:88.9pt;border:none;border-bottom:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
  <td width=90 colspan=2 style='width:67.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>&nbsp;</span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>ÜRÜNÜN KULLANILDIĞI ÜLKE / VE YASAL
  GEREKLİLİKLER</span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $kullanilanulkeyasal; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=291 colspan=3 style='width:218.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>KALİTE EL KİTABI (var ise ilgili
  döküman)</span></p>
  </td>
  <td width=446 colspan=20 style='width:333.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:white;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'><?php echo $kaliteelkitabi; ?></span></p>
  </td>
 </tr>
 <tr style='height:15.95pt'>
  <td width=737 colspan=23 style='width:552.6pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>Not : After Market müşterileri için
  Yetişen Kauçuk tarafından İlk Numune Kontrol ve Üretim Şartları (Analiz
  Raporu, Kontrol Raporu,</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>Teknik Resim, müşteri talebi durumunda
  numune) sağlanır.</span></p>
  </td>
 </tr>
 <tr style='height:24.75pt'>
  <td width=391 colspan=8 style='width:293.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:24.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>Hazırlayan : <?php echo $hazirlayan; ?></span></p>
  </td>
  <td width=346 colspan=15 style='width:259.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:24.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:10.0pt'>Onaylayan : <?php echo $onaylayan; ?></span></p>
  </td>
 </tr>
 <tr height=0>
  <td width=64 style='border:none'></td>
  <td width=123 style='border:none'></td>
  <td width=104 style='border:none'></td>
  <td width=46 style='border:none'></td>
  <td width=25 style='border:none'></td>
  <td width=2 style='border:none'></td>
  <td width=10 style='border:none'></td>
  <td width=16 style='border:none'></td>
  <td width=19 style='border:none'></td>
  <td width=8 style='border:none'></td>
  <td width=24 style='border:none'></td>
  <td width=8 style='border:none'></td>
  <td width=35 style='border:none'></td>
  <td width=22 style='border:none'></td>
  <td width=21 style='border:none'></td>
  <td width=38 style='border:none'></td>
  <td width=20 style='border:none'></td>
  <td width=3 style='border:none'></td>
  <td width=19 style='border:none'></td>
  <td width=21 style='border:none'></td>
  <td width=18 style='border:none'></td>
  <td width=2 style='border:none'></td>
  <td width=87 style='border:none'></td>
 </tr>
</table>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>
