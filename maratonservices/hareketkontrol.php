<?php

include 'baglanti.php';


$saat=date("H:i:s");

$tarihim=date("Y-m-d");



function sluggable($text) {
   $text = trim($text);
   $search = array('Ç','ç','Ğ','ğ','ı','İ','Ö','ö','Ş','ş','Ü','ü',' ');
   $replace = array('c','c','g','g','i','i','o','o','s','s','u','u','-');
   $fonktmp = str_replace($search,$replace,$text);
   
       $fonktmp = preg_replace("/ +/"," ",$fonktmp);
    // Boşukları - işaretine çevir
    $fonktmp = preg_replace("/ /","-",$fonktmp);
    // Tüm beyaz karekterleri sil
    $fonktmp = preg_replace("/\s/","",$fonktmp);
    // Karekterleri küçült
    $fonktmp = strtolower($fonktmp);
    // Başta ve sonda - işareti kaldıysa yoket
    $fonktmp = preg_replace("/^-/","",$fonktmp);
    $fonktmp = preg_replace("/-$/","",$fonktmp);
   return $fonktmp;
} 





$sql="select * from nakilicerigi left join deponakilleri on deponakilleri.index_deponakilleri=nakilicerigi.nakilid where isnull(islendi) and deponakilleri.nakilno<>''";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
 
      mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_nakilicerigi]."' and olusturanform='597'");
         $malzemeid=$okut[malzemeid];
     $tarih=$okut[aktarimtarihi];
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Nakil Fişi ile Çıkan');
       $hareketsaati=$saat;
       $miktar=$okut[miktar];
       $belgeno=$okut[nakilno];
       
       
       
       
                $sql="select * from ambarlar where ambarkodu='".$okut[depo]."'";
    $sorbanas=mysqli_query($connection,$sql);
    
            while($okus=mysqli_fetch_assoc($sorbanas))
{
    $cikisambari=$okus[ambartanimi];
    
}


     $sql="select * from ambarlar where ambarkodu='".$okut[hedefdepo]."'";
    $sorbanas=mysqli_query($connection,$sql);
    
            while($okus=mysqli_fetch_assoc($sorbanas))
{
    $nakilambari=$okus[ambartanimi];
    
}
       
       
       $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[nakilno]." ile ".$cikisambari." biriminden ".$nakilambari." birimine nakil");
       
       
  
       $olusturanform='597';
       $olusturanid=$okut[index_nakilicerigi];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,teslimalan,teslimeden,deleted) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$okut[depo]','$olusturanform','$olusturanid','".$okut[teslimalan]."','".$okut[teslimeden]."','false')"); 
   

    
    
       $malzemeid=$okut[malzemeid];
     $tarih=$okut[aktarimtarihi];
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Nakil Fişi ile Gelen');
       $hareketsaati=$saat;
       $miktar=$okut[miktar];
       $belgeno=$okut[nakilno];
       $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[nakilno]." ile ".$cikisambari." biriminden ".$nakilambari." birimine nakil");
       
       
       
 
       $olusturanform='597';
       $olusturanid=$okut[index_nakilicerigi];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,teslimalan,teslimeden,deleted) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$okut[hedefdepo]','$olusturanform','$olusturanid','".$okut[teslimalan]."','".$okut[teslimeden]."','false')"); 
 
      
      mysqli_query($connection,"update nakilicerigi set islendi='E' where index_nakilicerigi=".$okut[index_nakilicerigi]);
      
   
    
}



//menuurl


$sql="select * from menutasarimi where menu_seo='' or isnull(menu_seo)";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
  mysqli_query($connection,"update menutasarimi set menu_seo='".sluggable(iconv( "ISO-8859-9","UTF-8",$okut[menutanimi]))."' where index_menutasarimi=".$okut[index_menutasarimi]);  
    
}


//kalan miktar güncellemesi

$sql="select index_satinalma,siparismiktari,sum(gelenirsaliyemiktarlari.gelenmiktar) as gelenmiktar from satinalma left join satinalmasiparisleri on satinalmasiparisleri.index_satinalmasiparisleri=satinalma.satinalmakodu left join  malzemeler on( malzemeler.index_malzemeler = satinalma.aciklamasi or malzemeler.malzemeaciklamasi = satinalma.aciklamasi)  left join gelenirsaliyemiktarlari on (gelenirsaliyemiktarlari.malzemeid=malzemeler.index_malzemeler and  gelenirsaliyemiktarlari.siparisno=satinalmasiparisleri.satinalmano)  where isnull(kalanmiktarim) or kalanmiktarim>0 group by index_satinalma";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
   if ($okut[siparismiktari]*1>=$okut[gelenmiktar]*1)
   {
       $kalanmiktar=($okut[siparismiktari]*1)-($okut[gelenmiktar]*1);
   }
   
   
    if ($okut[siparismiktari]*1<$okut[gelenmiktar]*1)
   {
       $kalanmiktar=0;
   }
    
    if ($okut[gelenmiktar]==''||$okut[gelenmiktar]=='0')
   {
       $kalanmiktar=$okut[siparismiktari];
   }
   
   mysqli_query($connection,"update satinalma set kalanmiktarim='".$kalanmiktar."' where index_satinalma=".$okut[index_satinalma]);
    
}


//firma isimlerinin kur tiplerinde saklanması


$sql="select * from talepicerigi";
$sorgula=mysqli_query($connection,$sql);
$sayi=0;
while($okut=mysqli_fetch_assoc($sorgula))
{
    $sqls="select * from satinalma_teklif_icerigi where baglantilitalep=".$okut[index_talepicerigi];
    $sorgulat=mysqli_query($connection,$sqls);
    
    $sayi=mysqli_num_rows($sorgulat)+0;
    
    
    
     $sqls="select * from satinalma_teklif_icerigi where baglantilitalep=".$okut[index_talepicerigi]." and durum like '%Onaylan%'";
    $sorgulat=mysqli_query($connection,$sqls);
    
    if ( mysqli_num_rows($sorgulat)>0)
    {
       mysqli_query($connection,"update talepicerigi set talepdurumu='Talep Edildi' where talepdurumu<>'Kabul Edildi' and index_talepicerigi=".$okut[index_talepicerigi]);
    }
    
    
    
    mysqli_query($connection,"update talepicerigi set alinanteklifsayisi='".$sayi."' where index_talepicerigi=".$okut[index_talepicerigi]);
    
    $sqls="select sum(miktar) as ayrilan from stokhareketleri where olusturanid=".$okut[index_talepicerigi]." and olusturanform=283";
    $sorgulat=mysqli_query($connection,$sqls);
    
    while($okut2=mysqli_fetch_assoc($sorgulat))
{
    
    
    mysqli_query($connection,"update talepicerigi set ihtiyacmiktar='".($okut[talepmiktari]-$okut2[ayrilan])."' where index_talepicerigi=".$okut[index_talepicerigi]);
}
    
    
}



$sql="select * from kurtipleri";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
$sql="select * from cariler where kur_tipi='".$okut[kurtipkodu]."'";
$sorgulas=mysqli_query($connection,$sql);
$deger="";
while($okus=mysqli_fetch_assoc($sorgulas))
{
    if ($deger!='')
{
    $deger=$deger.",".$okus[firma_adi];
    
}
else
if ($deger=='')
{
     $deger=$okus[firma_adi];
   
}
    
}

mysqli_query($connection,"update kurtipleri set uygulananfirmalar='".$deger."' where index_kurtipleri=".$okut[index_kurtipleri]);
    
    
}


//işlenmemiş faturaların stoklara yansıması

$sql="select * from faturalarim where isnull(islendi) or islendi=''";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
 
 $sqlyes="select * from faturaicerik left join malzemeler on malzemeler.malzemekodu=faturaicerik.malzemeid where faturano='".$okut[index_faturalarim]."'";
 
  $sorbana=mysqli_query($connection,$sqlyes);
while($okus=mysqli_fetch_assoc($sorbana))
{
    
    if (iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Mal Alım Faturası')
    {
    
         mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okus[index_faturaicerik]."' and olusturanform='419'");
         $malzemeid=$okus[index_malzemeler];
     $tarih=$tarihim;
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Alım Faturası');
       $hareketsaati=$saat;
       $miktar=$okus[miktar];
       $belgeno=$okut[faturano];
       $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[faturano]." nolu alım faturası ile depoya giriş");
       $islemyeri='1';
       $olusturanform='419';
       $olusturanid=$okus[index_faturaicerik];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid')"); 
    }
    
    
      
    if (iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Satış Faturası')
    {
    
         mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okus[index_faturaicerik]."' and olusturanform='419'");
         $malzemeid=$okus[index_malzemeler];
     $tarih=$tarihim;
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Satış Faturası');
       $hareketsaati=$saat;
       $miktar=$okus[miktar];
       $belgeno=$okut[faturano];
       $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[faturano]." nolu alım faturası ile depodan çıkış");
       $islemyeri='1';
       $olusturanform='419';
       $olusturanid=$okus[index_faturaicerik];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid')"); 
    }
    
    
    
}

mysqli_query($connection,"update faturalarim set islendi='E' where index_faturalarim=".$okut[index_faturalarim]);
    
    
}


//kodu olmayan sipariş izleme tablosunun doldurulması

$sql="select * from siparis_izleme left join siparis_fisleri on siparis_fisleri.index_siparis_fisleri=siparis_izleme.sip_id where kod_arastirildi='' or isnull(kod_arastirildi)";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    
    $sql="select * from firma_karsiliklari left join malzemeler on malzemeler.index_malzemeler=firma_karsiliklari.malzemeid where firmaid='".iconv( "UTF-8","ISO-8859-9",$okut[ch_adi])."' and karsilik_no='".iconv( "UTF-8","ISO-8859-9",$okut[ch_kodu])."'";

$sorgulat=mysqli_query($connection,$sql);
while($okuts=mysqli_fetch_assoc($sorgulat))
{
    
    
    mysqli_query($connection,"update siparis_izleme set kod_urun='".$okuts[malzemekodu]."',kod_arastirildi='E' where index_siparis_izleme=".$okut[index_siparis_izleme]);
 
}


mysqli_query($connection,"update siparis_izleme set kod_arastirildi='E' where index_siparis_izleme=".$okut[index_siparis_izleme]);
    
    
}


// üretim emirleri formunda üretim paletleri tablosuna kayıt girilince stok yaratması
$sqlUp = "select ue.uretimemrino,ue.siparisid ,up.* from uretimpaletleri up left join uretimemirleri ue on ue.index_uretimemirleri=up.uretimid where up.deleted='false' and (up.islendi='' or isnull(up.islendi))";
$uPal = mysqli_query($connection,$sqlUp);
while($urpal = mysqli_fetch_assoc($uPal)){

    $malzemeid = $urpal['malzemeid'];
    $tarih = $tarihim;
    $hareketsaati=$saat;
    $hareketturu=iconv( "UTF-8","ISO-8859-9",'Üretim');
    $belgeno=$urpal[uretimemrino];
    $miktar=$urpal[paleticimiktar];
    $aciklama=iconv( "UTF-8","ISO-8859-9",$urpal[paletno]." nolu üretim paleti ile üretilen");
    $islemyeri='1';
    $siparisid=$urpal['siparisid'];

    $olusturanform='642';
    $olusturanid=$urpal['index_uretimpaletleri'];

    mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,siparisid,deleted) 
    values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','$siparisid','false')"); 

    mysqli_query($connection,"update uretimpaletleri set islendi='E' where index_uretimpaletleri=".$urpal['index_uretimpaletleri']);  

}

//üretim emirlerinin stok hareketlerinin yaratılması

$sql="select * from uretimemirleri where deleted='false' and (islendi='' or isnull(islendi))";
$sorbana=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorbana))
{


    mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_uretimemirleri]."' and olusturanform='624'");
    $malzemeid=$okut[malzemeid];
$tarih=$tarihim;
  $hareketturu=iconv( "UTF-8","ISO-8859-9",'Planlama');
  $hareketsaati=$saat;
  $miktar=$okut[planmiktar];
  $siparisid=$okut[siparisid];
  $belgeno=$okut[uretimemrino];
  $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[uretimemrino]." nolu üretim emri ile planlanan");
  $islemyeri='1';
  $olusturanform='624';
  $olusturanid=$okut[index_uretimemirleri];
  mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,siparisid,deleted) 
  values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','$siparisid','false')"); 


mysqli_query($connection,"update uretimemirleri set islendi='E' where index_uretimemirleri=".$okut[index_uretimemirleri]);
}


//fırsat kalemleri ürün karşılığı varsa veri dağıtım oluşturma 
$sql="select * from firsatkalemleri where isnull(islendi) or islendi<>'E' ";
$sorgula=mysqli_query($connection,$sql);
while($okutC = mysqli_fetch_assoc($sorgula)){

$sql="select * from firma_karsiliklari left join malzemeler on malzemeler.index_malzemeler=firma_karsiliklari.malzemeid where firma_karsiliklari.karsilik_no='".$okutC[karsilikkodu]."' limit 1";

$sorbana=mysqli_query($connection,$sql);
if (mysqli_num_rows($sorbana)>0)
{
    while($okuty = mysqli_fetch_assoc($sorbana)){
        mysqli_query($connection,"update firsatkalemleri set kalemkodu='".$okuty[malzemekodu]."' where index_firsatkalemleri=".$okutC[index_firsatkalemleri]);
    
    }    
}

if (mysqli_num_rows($sorbana)==0)
{
    mysqli_query($connection,"update firsatkalemleri set vdfolusturma='EVET',maliyetolusturma='EVET' where index_firsatkalemleri=".$okutC[index_firsatkalemleri]);
    
}  

mysqli_query($connection,"update firsatkalemleri set islendi='E' where index_firsatkalemleri=".$okutC[index_firsatkalemleri]);


}

//takımlı siparişlerin alt stoklarının da eklenmesi siparişe
$sql="select * from siparis_izleme  left join malzemeler on malzemeler.malzemekodu=siparis_izleme.kod_urun where (takimkontrol='' or isnull(takimkontrol)) and siparis_izleme.deleted='false'";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{

//takım seti olup olmadığına bakılıyor
$i=0;
$sql="select takimseti.miktar,malzemeler.malzemekodu from takimseti left join malzemeler on malzemeler.index_malzemeler=takimseti.altmalzemeid where malzemeid='$okut[index_malzemeler]' and takimseti.deleted='false'";
$sorgulas=mysqli_query($connection,$sql);
while($okuts=mysqli_fetch_assoc($sorgulas))
{
$i++;
    //
$miktar=$okut[kesme_isemri_gelecek_miktar]*$okuts[miktar];
$kod=$okut[sip_id]."-".$okut[index_siparis_izleme]."-".$i;
    mysqli_query($connection,"insert into siparis_izleme(kesme_isemri_gelecek_miktar,kod_urun,ch_kodu,firma_termini,text_takimlama,sip_id,deleted,ust_izlemeid) values('$miktar','$okuts[malzemekodu]','$okut[ch_kodu]','$okut[firma_termini]','$kod','$okut[sip_id]','false','$okut[index_siparis_izleme]')");

}  

mysqli_query($connection,"update siparis_izleme set takimkontrol='E' where index_siparis_izleme=$okut[index_siparis_izleme]");

}

//birim ağırlıkların hesaplanması

$sql="select * from malzemeler where malzemehesaplandi='' or isnull(malzemehesaplandi)";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{

    $kgtoplam=0;

    $sql="select * from malzemerecete where malzemeid='".$okut[index_malzemeler]."' and tip='1'";
    $sorbanas=mysqli_query($connection,$sql);
    
            while($okus=mysqli_fetch_assoc($sorbanas))
{
    if ($okus[kilo]!='')
    {
        $kgtoplam=$kgtoplam+$okus[kilo];
    }
    
}

mysqli_query($connection,"update malzemeler set malzemehesaplandi='E',birimkg='$kgtoplam' where index_malzemeler='".$okut[index_malzemeler]."'");
    



}


//olmayan stok kartlarının hareket kartının açılması
$sql="select * from malzemeler where islendi='' or isnull(islendi)";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
      mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_malzemeler]."' and olusturanform='254'");
    
    $malzemeid=$okut[index_malzemeler];
     $tarih=$tarihim;
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Stok Açılışı');
       $hareketsaati=$saat;
       $miktar='0';
       $belgeno='';
       $aciklama='';
       $islemyeri='1';
       $olusturanform='254';
       $olusturanid=$okut[index_malzemeler];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,deleted) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','false')"); 
       
       mysqli_query($connection,"update malzemeler set islendi='E' where index_malzemeler=".$okut[index_malzemeler]);
    
}


//satınalma fiyatlarının güncellenmesi
$sql="select satinalma.*,satinalmasiparisleri.siparistarihi,satinalmasiparisleri.satinalmano,satinalmasiparisleri.tedarikciid as tedarikcim from satinalma left join satinalmasiparisleri on satinalmasiparisleri.index_satinalmasiparisleri=satinalma.satinalmakodu  where fiyatislendi='' or isnull(fiyatislendi) order by index_satinalma asc";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
      if ($okut[siparisdurumu]=='Kabul Edildi')
    {
        
        
        
        $sql="select * from malzemetedarikcileri where malzemeid='".$okut[malzemeid]."' and tedarikci='".$okut[tedarikcim]."'";
        $sorbana=mysqli_query($connection,$sql);
        
        if (mysqli_num_rows($sorbana)>0)
        {
           mysqli_query($connection,"update malzemetedarikcileri set birimfiyat='".$okut[birimfiyat]."',fiyatbirimi='".$okut[fiyatbirimi]."',fiyathesaplamasi='".$okut[hesaplama]."',lme_iscilik='".$okut[lme_iscilik]."',lme_iscilik_birimi='".$okut[lme_iscilik_birimi]."',songuncelid='".$okut[index_satinalma]."' where malzemeid='".$okut[malzemeid]."' and tedarikci='".$okut[tedarikcim]."'");
            
        }
        
        if (mysqli_num_rows($sorbana)==0)
        {
           mysqli_query($connection,"insert into malzemetedarikcileri(malzemeid,tedarikci,birimfiyat,fiyatbirimi,alisbirimi,fiyathesaplamasi,lme_iscilik,lme_iscilik_birimi,songuncelid) values('".$okut[malzemeid]."','".$okut[tedarikcim]."','".$okut[birimfiyat]."','".$okut[fiyatbirimi]."','".$okut[siparisbirimi]."','".$okut[fiyathesaplamasi]."','".$okut[lme_iscilik]."','".$okut[lme_iscilik_birimi]."','".$okut[index_satinalma]."')");
            
        }
        
        mysqli_query($connection,"update satinalma set fiyatislendi='E' where index_satinalma=".$okut[index_satinalma]);  
        
    }
    
}

//bekleyen sayım hareketi kontrolü
$sql="select sayimlistesi.*,sayimlar.depo,sayimlar.sayimcinsi,sayimlar.sayimbaslama,sayimlar.sayimbitis from sayimlistesi left join sayimlar on sayimlistesi.sayimid=sayimlar.index_sayimlar  where islendi='' or isnull(islendi)";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    
    mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_sayimlistesi]."' and olusturanform='235'");
    
    
    $sql="select * from ambarlar where ambartanimi='".$okut[depo]."'";
    $sorbanas=mysqli_query($connection,$sql);
    
            while($okus=mysqli_fetch_assoc($sorbanas))
{
    $islemyeri=$okus[index_ambarlar];
    
}
    
    
    $malzemeid=$okut[malzemeid];
    
    
mysqli_query($connection,"update malzemeler set sonsayimtarihi='".$okut[sayimbitis]."',sonsayim='".$okut[sayimmiktari]."' where index_malzemeler=".$malzemeid);
      $tarih=$okut[sayimbitis];
       $hareketturu=$okut[sayimcinsi];
       $hareketsaati=$saat;
       $miktar=$okut[sayimmiktari];
       $belgeno=iconv( "UTF-8","ISO-8859-9",$okut[sayimno]);
       $aciklama=$okut[sayimcinsi];
       $olusturanform='235';
       $olusturanid=$okut[index_sayimlistesi];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid')"); 
       
       mysqli_query($connection,"update sayimlistesi set islendi='E' where index_sayimlistesi=".$okut[index_sayimlistesi]);
    
}

//bekleyen satınalma hareketi kontrolü
$sql="select satinalma.*,satinalmasiparisleri.siparistarihi,satinalmasiparisleri.satinalmano from satinalma left join satinalmasiparisleri on satinalmasiparisleri.index_satinalmasiparisleri=satinalma.satinalmakodu  where islendi='' or isnull(islendi)";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    
    mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_satinalma]."' and olusturanform='229'");
    if ($okut[siparisdurumu]=='Kabul Edildi')
    {
        
        $sql="select * from malzemeler where malzemeaciklamasi='".$okut[aciklamasi]."'";
        $sorbana=mysqli_query($connection,$sql);
        
        while($okus=mysqli_fetch_assoc($sorbana))
{
    $malzemeid=$okus[index_malzemeler];
    
}
        
       
       $tarih=$okut[kabultarihi];
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Satınalma Kabul');
       $hareketsaati=$saat;
       $miktar=$okut[siparismiktari];
       $belgeno=iconv( "UTF-8","ISO-8859-9",$okut[belgeno]);
       $aciklama=iconv( "UTF-8","ISO-8859-9",'Teslim Alınan Sipariş');
       $islemyeri='37';
       $olusturanform='229';
       $olusturanid=$okut[index_satinalma];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid')"); 
       
       mysqli_query($connection,"update satinalma set islendi='E' where index_satinalma=".$okut[index_satinalma]); 
        
    }
    
    
     if ($okut[siparisdurumu]=='Bekliyor')
    {
        
         $sql="select * from malzemeler where malzemeaciklamasi='".$okut[aciklamasi]."'";
        $sorbana=mysqli_query($connection,$sql);
        
        while($okus=mysqli_fetch_assoc($sorbana))
{
    $malzemeid=$okus[index_malzemeler];
    
}
        
       
       $tarih=$okut[siparistarihi];
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Verilen Sipariş');
       $hareketsaati=$saat;
       $miktar=$okut[siparismiktari];
       $belgeno=$okut[satinalmano];
       $aciklama=iconv( "UTF-8","ISO-8859-9",'Verilen Sipariş');
       $islemyeri='37';
         $olusturanform='229';
       $olusturanid=$okut[index_satinalma];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid')"); 
       
       mysqli_query($connection,"update satinalma set islendi='E' where index_satinalma=".$okut[index_satinalma]);  
        
    }
    
}



?>