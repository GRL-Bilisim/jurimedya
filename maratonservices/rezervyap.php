<?php
 header("Access-Control-Allow-Origin: *");

include 'baglanti.php';
$saat=date("H:i:s");

$tarihim=date("Y-m-d");



$sql="select * from siparis_izleme where index_siparis_izleme=".$_GET[kayitid];

$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    $sql="select index_malzemeler,malzemeler.*,malzemeler.malzemeturu,ambarlar.ambartanimi,(0+malzemeler.sonsayim) as dbstok, malzemeler.malzemebirimi,concat_ws('.',grupkodu,malzemekodu) as birlesik,malzemeler.malzemeaciklamasi,0+sum(case when gercekkatsayi>0 and hareketturu not like '%Stok Say%' and (malzemeler.sonsayimtarihi=null or malzemeler.sonsayimtarihi<=harekettarihi) then miktar else 0 end) as giren,0+sum(case when gercekkatsayi<0 and (malzemeler.sonsayimtarihi=null or malzemeler.sonsayimtarihi<=harekettarihi) then miktar else 0 end) as cikan,islemyeri,sum(case when malzemeler.sonsayimtarihi=null or malzemeler.sonsayimtarihi<=harekettarihi then (miktar*gercekkatsayi) else 0 end) as kalan,0+sum(case when malzemeler.sonsayimtarihi=null or malzemeler.sonsayimtarihi<=harekettarihi then (miktar*stokhareketkodlari.gercekkatsayi)+(miktar*stokhareketkodlari.fiilikatsayi) else 0 end) as fiilistok,max(harekettarihi) as sonislemtarihi from stokhareketleri left join stokhareketkodlari on stokhareketkodlari.harekettanimi=stokhareketleri.hareketturu left join malzemeler on malzemeler.index_malzemeler=stokhareketleri.malzemeid left join ambarlar on ambarlar.ambarkodu=stokhareketleri.islemyeri where malzemeler.malzemeaciklamasi<>'' and malzemeler.malzemekodu='".$okut[kod_urun]."' group by malzemeid,islemyeri";
    

    
    $sorgulat=mysqli_query($connection,$sql);

$count = mysqli_num_rows($sorgulat);
while($okutyes=mysqli_fetch_assoc($sorgulat))
{
    
  if($count>0){
      
 
    if ($_GET[turu]=='gerial')
    {
        
       mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_siparis_izleme]."' and olusturanform='278'");
     
       mysqli_query($connection,"update siparis_izleme set kod_rezervasyon='' where index_siparis_izleme=".$okut[index_siparis_izleme]);
    
    }
    
    if ($_GET[turu]=='yap')
    {
        
  
      if ($okutyes[fiilistok]<$okut[kesme_isemri_gelecek_miktar])
    {
         echo "NO";
        
    }
    
    if ($okutyes[fiilistok]>=$okut[kesme_isemri_gelecek_miktar])
    {
        
  
       mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okut[index_siparis_izleme]."' and olusturanform='278'");
    
    $malzemeid=$okutyes[index_malzemeler];
     $tarih=$tarihim;
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Rezerve');
       $hareketsaati=$saat;
       $miktar=$okut[kesme_isemri_gelecek_miktar];
       $belgeno='';
       $aciklama=$okut[sip_id].iconv("UTF-8","ISO-8859-9"," nolu sipariş fişi üzerinden rezerve yapıldı.");
       $islemyeri='1';
       $olusturanform='278';
       $olusturanid=$okut[index_siparis_izleme];
       mysqli_query($connection,"insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid) 
       values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktar','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid')"); 
     
       mysqli_query($connection,"update siparis_izleme set kod_rezervasyon='".$okut[index_siparis_izleme]."' where index_siparis_izleme=".$okut[index_siparis_izleme]);
    
    
 
          
    }
    }
    
  }else{
      echo 'YOK';
  }
}
    
    
}


?>