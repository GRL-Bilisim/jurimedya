<?php 
if($_GET['page_id']=='pdo_kullanicilarigetir')
    {
       include 'pdo_baglanti.php';
    
       
         $query=$db->prepare("select *, (case when isnull(resim) then 'http://92.168.1.201:81/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','http://92.168.1.201:81/maratonservices/',resim) else 'yok' end) as profilresim from kullanicilar where user_indeks<>? and deleted='false' and durumu='Aktif' ");
         $query->execute([$_GET['userindeks']]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET['page_id']=='bakiyecek')
    {
       include 'pdo_baglanti.php';
    
       
         $query=$db->prepare("select format(sum(case when hareketturu like '%Tahsilat%' then kasadanodenen+bankadanodenen+kartodenen else 0 end),2) as odemetoplami,format(sum(case when hareketturu like '%Fat%' or hareketturu like '%Teda%'  then tutari else 0 end),2) as islemtoplami,format(sum(case when hareketturu like '%Fat%' or hareketturu like '%Teda%'  then tutari else -1*(kasadanodenen+bankadanodenen+kartodenen) end),2) as bakiye from carihesaphareketleri where cari_index=? and carihesaphareketleri.deleted='false'");
         $query->execute([$_GET['hastaid']]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET['page_id']=='uyaricek')
    {
       include 'pdo_baglanti.php';
    
       
         $query=$db->prepare("select * from musterinotlari where deleted='false' and cariindex=? and uyarbeni='E'");
         $query->execute([$_GET['saticiid']]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET['page_id']=='saticibakiyecek')
    {
       include 'pdo_baglanti.php';
    
       
         $query=$db->prepare("select format(sum(case when hareketturu like '%deme%' then kasadanodenen+bankadanodenen+kartodenen else 0 end),2) as odemetoplami,format(sum(case when hareketturu like '%Fat%' or hareketturu like '%Teda%'  then tutari else 0 end),2) as islemtoplami,format(sum(case when hareketturu like '%Fat%' or hareketturu like '%Teda%'  then tutari else -1*(kasadanodenen+bankadanodenen+kartodenen) end),2) as bakiye from carihesaphareketleri where cari_index=? and carihesaphareketleri.deleted='false'");
         $query->execute([$_GET['saticiid']]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}






if($_GET['page_id']=='hastalarigetir')
    {
       include 'pdo_baglanti.php';
    
    
    if ($_GET['filtre']=='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu, (case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler where  deleted='false' and carituru like '%Al%' order by kayittarihi desc limit 50");
    }
    
    if ($_GET['filtre']!='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu, (case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler where  deleted='false' and (tckimlikno like '%$filtre%' or caritanimi like '%$filtre%' or tckimlikno like '%filtre%') and carituru like '%Al%' order by caritanimi asc");
    }
    
         $query->execute([]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET['page_id']=='saticilarigetir')
    {
       include 'pdo_baglanti.php';
    
    
    if ($_GET['filtre']=='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu, (case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler where  deleted='false' and carituru like '%TEDA%' order by kayittarihi desc limit 50");
    }
    
    if ($_GET['filtre']!='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu, (case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler where  deleted='false' and (tckimlikno like '%$filtre%' or caritanimi like '%$filtre%' or tckimlikno like '%filtre%') and carituru like '%TEDA%' order by caritanimi asc");
    }
    
         $query->execute([]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}

if($_GET['page_id']=='bekleyenlerigetir')
    {
       include 'pdo_baglanti.php';
    
    
    if ($_GET['filtre']=='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu,randevular.randevu_konusu,randevular.randevu_saat,randevular.oda_tanim,randevular.index_randevular as id,(case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler left join randevular on randevular.musteri_adi=cariler.caritanimi and randevular.randevu_tarih=CURRENT_DATE() and randevular.durumu='Beklemede' where randevular.deleted='false' and carituru like '%(AS)%' order by randevu_saat asc");
    }
    
    if ($_GET['filtre']!='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu, (case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler where  deleted='false' and (tckimlikno like '%$filtre%' or caritanimi like '%$filtre%' or tckimlikno like '%filtre%') and carituru like '%(AS)%' order by caritanimi asc");
    }
    
         $query->execute([]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}



if($_GET['page_id']=='adisyongetir')
    {
       include 'pdo_baglanti.php';
    
    
   
         $query=$db->prepare("select index_adisyonlar,caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,cariindex as id,(case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.jpg' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler left join adisyonlar on adisyonlar.musteri=cariler.cariindex and adisyonlar.giristarihi=CURRENT_DATE() where adisyonlar.deleted='false' order by girissaati desc");
   
    
         $query->execute([]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET['page_id']=='iptallerigetir')
    {
       include 'pdo_baglanti.php';
    
    
    if ($_GET['filtre']=='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu,randevular.randevu_konusu,randevular.randevu_saat,randevular.oda_tanim,randevular.index_randevular as id,(case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler left join randevular on randevular.musteri_adi=cariler.caritanimi and randevular.randevu_tarih=CURRENT_DATE() and randevular.durumu='Erteledi' where randevular.deleted='false' and carituru like '%(AS)%' order by randevu_saat asc");
    }
    
    if ($_GET['filtre']!='')
    {
         $query=$db->prepare("select caritanimi,cariindex,plasiyerkodu,yetkiligsm,tckimlikno,carigrubu as fiyatgrubu, (case when isnull(resim) then 'https://netlaminat.bulutfabrika.net/maratonservices/kullanicilar/modern-thumbnail.png' when resim !='' then concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) else 'yok' end) as profilresim from cariler where  deleted='false' and (tckimlikno like '%$filtre%' or caritanimi like '%$filtre%' or tckimlikno like '%filtre%') and carituru like '%(AS)%' order by caritanimi asc");
    }
    
         $query->execute([]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET['page_id']=='perio')
    {
       include 'pdo_baglanti.php';
    
       if ($_GET[type]=='Üst')
       {
         $query=$db->prepare("select *,concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) as resim from perio where deleted='false' and konum like '%st%' order by sira asc");
       }
       
        if ($_GET[type]=='Alt')
       {
         $query=$db->prepare("select *,concat_ws('','https://netlaminat.bulutfabrika.net/maratonservices/',resim) as resim from perio where deleted='false' and konum like '%lt%' order by sira asc");
       }
       
         $query->execute([]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}

?>