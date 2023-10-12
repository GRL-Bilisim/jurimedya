<?php

 include 'baglanti.php';
//işlenmemiş faturaların stoklara yansıması

$sql="select faturalarim.*,faturalarim.faturaturu,faturalarim.irsaliyeno,faturalarim.faturatarihi,faturalarim.faturano,caritanimi,faturalarim.faturano as ustkisim,concat_ws('<br>',caritanimi,faturalarim.faturatarihi) as altkisim,faturalarim.parabirimi,faturalarim.islemdurumu,format(sum(round(miktar*brfiyat,2)),2) as aratoplam,sum(case when kdvorani=0 then round(miktar*brfiyat*(1-iskonto1/100)*(1-iskonto2/100)*(1-iskonto3/100)*kdvorani/100,2)else 0 end)as kdvsifirtoplami,sum(case when kdvorani=1 then round(miktar*brfiyat*(1-iskonto1/100)*(1-iskonto2/100)*(1-iskonto3/100)*kdvorani/100,2)else 0 end)as kdv1toplami,sum(case when kdvorani=8 then round(miktar*brfiyat*(1-iskonto1/100)*(1-iskonto2/100)*(1-iskonto3/100)*kdvorani/100,2)else 0 end)as kdv8toplami,(case when kdvorani=18 then round(miktar*brfiyat*(1-iskonto1/100)*(1-iskonto2/100)*(1-iskonto3/100)*kdvorani/100,2)else 0 end)as kdv18toplami,round(sum(miktar*brfiyat*(iskonto1/100)*(iskonto2/100)*(iskonto3/100)),2)as iskontotoplami,sum(miktar*brfiyat*(1-iskonto1/100)*(1-iskonto2/100)*(1-iskonto3/100)*(1+kdvorani/100)) as geneltoplam,format(sum(round(miktar*brfiyat*(1-iskonto1/100)*(1-iskonto2/100)*(1-iskonto3/100)*kdvorani/100,2)),2) as kdvtoplami from faturalarim left join faturaicerik on faturalarim.index_faturalarim=faturaicerik.faturano left join cariler on cariler.cariindex=faturalarim.saticihesabi where faturalarim.deleted='false' and (isnull(islendi) or islendi='') group by faturaicerik.faturano order by faturatarihi asc";
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
     $tarih=$okut[faturatarihi];
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
    
    
      
    if (iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Toptan Satış Faturası'||iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Perakende Satış Faturası')
    {
    
         mysqli_query($connection,"delete from stokhareketleri where olusturanid='".$okus[index_faturaicerik]."' and olusturanform='419'");
         $malzemeid=$okus[index_malzemeler];
     $tarih=$okut[faturatarihi];
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


//carihesaphareketlerine yansıması
   if (iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Mal Alım Faturası'||iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Alınan Hizmet Faturası'||iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Alım Fişi')
    {
        
               mysqli_query($connection,"delete from carihesaphareketleri where alisfatura_index=".$okut[index_faturalarim]);
          $tarih=$okut[faturatarihi];
       $hareketturu=$okut[faturaturu];
       $hareketsaati=$saat;
       $cariid=$okut[saticihesabi];
       $parabirimi=$okut[parabirimi];
       $belgeno=$okut[faturano];
       $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[faturano]." nolu alım faturası ile gerçekleşen işlem");
       $islemyeri='1';
       $olusturanform='419';
       $tutari=$okut[geneltoplam];
       $olusturanid=$okut[index_faturalarim];
            $gidergrubu=$okut[gidergrubu];
       mysqli_query($connection,"insert into carihesaphareketleri (tarih,hareketturu,Cari_index,hareketkodu,belgeno,islem_tanimi,gidergrubu,tutari,tutarbirimi,alisfatura_index)  values('$tarih','$hareketturu','$cariid','$belgeno','$belgeno','$aciklama','$gidergrubu','$tutari','$parabirimi','$olusturanid')"); 
        
    }
    
        if (iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Toptan Satış Faturası'||iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Perakende Satış Faturası'||iconv( "ISO-8859-9","UTF-8",$okut[faturaturu])=='Alım İade Faturası')
    {
          mysqli_query($connection,"delete from carihesaphareketleri where satisfatura_index=".$okut[index_faturalarim]);
          $tarih=$okut[faturatarihi];
       $hareketturu=$okut[faturaturu];
       $hareketsaati=$saat;
       $cariid=$okut[saticihesabi];
       $parabirimi=$okut[parabirimi];
       $belgeno=$okut[faturano];
       $aciklama=iconv( "UTF-8","ISO-8859-9",$okut[faturano]." nolu alım faturası ile gerçekleşen işlem");
       $islemyeri='1';
       $olusturanform='419';
       $tutari=$okut[geneltoplam];
       $olusturanid=$okut[index_faturalarim];
            $gidergrubu=$okut[gelirgrubu];
       mysqli_query($connection,"insert into carihesaphareketleri (tarih,hareketturu,Cari_index,hareketkodu,belgeno,islem_tanimi,gelirgrubu,tutari,tutarbirimi,satisfatura_index) values('$tarih','$hareketturu','$cariid','$belgeno','$belgeno','$aciklama','$gidergrubu','$tutari','$parabirimi','$olusturanid')"); 
    }


mysqli_query($connection,"update faturalarim set islendi='E' where index_faturalarim=".$okut[index_faturalarim]);
    
    
}




?>