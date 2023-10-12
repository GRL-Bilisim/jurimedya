<?php
  if ($_GET['page_id']=='uretimemriolustur'){
    
  
         include 'pdo_baglanti.php';
        
         date_default_timezone_set("Turkey");


$saat=date("H:i:s");

$tarihim=date("Y-m-d");

$miktar = $_GET['miktar'];

$rezervedilecekmiktar='';

         $uquery = $db->prepare("select stokdurumlari.kalan as gercekstoks,stokdurumlari.fiilistok as fiilistoks, (case when text_takimlama=null or isnull(text_takimlama) then concat_ws('-',siparis_fisleri.index_siparis_fisleri,siparis_izleme.index_siparis_izleme) else text_takimlama end) as kalemid,cariler.caritanimi as firmasi,siparis_izleme.*,malzemeler.*,firma_karsiliklari.*,siparis_izleme.ch_kodu,malzemeler.formulno,siparis_izleme.id as idim,siparis_izleme.kesme_isemri_gelecek_miktar-sum(case when stokhareketleri.hareketturu='Sevk Edildi' then miktar else 0 end) as kalanmiktars,sum(case when stokhareketleri.hareketturu='Rezerve' then miktar else 0 end) as rezervedilen,sum(case when stokhareketleri.hareketturu='Sevk Edilen' then miktar else 0 end) as sevkedilen,sum(case when stokhareketleri.hareketturu='Planlanan' then miktar else 0 end) as planlandi,siparis_izleme.kesme_isemri_gelecek_miktar-(sum(case when stokhareketleri.hareketturu='Sevk Edilen' or stokhareketleri.hareketturu='Rezerve' or stokhareketleri.hareketturu='Planlanan' then miktar else 0 end)) as netihtiyac,  (case when firma_karsiliklari.durum='Bekleme' or malzemeler.durum='Bekleme' then 'Bekleme' else 'Aktif' end) as urun_durumu,siparis_fisleri.siparistarihi from siparis_izleme left join malzemeler on malzemeler.index_malzemeler=siparis_izleme.kod_urun left join firma_karsiliklari on firma_karsiliklari.karsilik_no=siparis_izleme.ch_kodu left join siparis_fisleri on siparis_fisleri.index_siparis_fisleri=siparis_izleme.sip_id left join cariler on cariler.index_cariler=siparis_fisleri.ch_adi left join stokdurumlari on stokdurumlari.index_malzemeler=malzemeler.index_malzemeler left join stokhareketleri on (stokhareketleri.siparisid=siparis_izleme.index_siparis_izleme and stokhareketleri.deleted='false') where index_siparis_izleme>0 and siparis_fisleri.deleted='false' and siparis_izleme.deleted='false' and malzemeler.deleted='false'  and index_siparis_izleme=? group by siparis_izleme.index_siparis_izleme");
         $uquery->execute([$_GET[kayitid]]);
         
 $count= $uquery->rowCount();
         
                           if($uquery != false)
            {
                if($count>0){
                        while( $okut =$uquery->fetch(PDO::FETCH_ASSOC) )
                  {

                   
                    $sql="select * from stokdurumlari where index_malzemeler=? ";
                    
                    $zquery = $db->prepare($sql);
                    $zquery->execute([$okut[kod_urun]]);
                     $countyes= $zquery->rowCount();
    if($countyes>0){
               while( $okutyes =$zquery->fetch(PDO::FETCH_ASSOC) )
                  {

    
    
    if ($_GET[turu]=='yap')
    {

   if($miktar=='0'){

        $sipid = $okut[index_siparis_izleme];
        $uretimemrino='UE.'.$okut[kalemid].".01";
        $planmiktar=$okut[kesme_isemri_gelecek_miktar];
        $malzemeid=$okut[index_malzemeler];



        $Stquery = $db->prepare("insert into uretimemirleri (uretimemrino,planmiktar,malzemeid,siparisid,planlamatarihi,deleted) 
        values('$uretimemrino','$planmiktar','$malzemeid','$sipid','$tarihim','false')");
        $Stquery->execute([]);



        //oluşturulan iş emrinin id si alınıyor
        
        $sql="select * from uretimemirleri order by index_uretimemirleri desc limit 1";
                    
        $zquery2 = $db->prepare($sql);
        $zquery2->execute([$okut[kod_urun]]);
         $countyes2= $zquery2->rowCount();
if($countyes2>0){
   while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
      {
$uretimid=$okutyes2[index_uretimemirleri];
      }
    }

        //takım setli bir ürün mü?



        $sql="select * from takimseti where malzemeid=? ";
                    
        $zquery2 = $db->prepare($sql);
        $zquery2->execute([$okut[kod_urun]]);
         $countyes2= $zquery2->rowCount();
if($countyes2>0){
   while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
      {
        $ihtiyac=$planmiktar*$okutyes2[miktar];
        $altmalzemeid=$okutyes2[altmalzemeid];
        //girdiler ekleniyor
        $Stquery = $db->prepare("insert into uretimgirdileri (uretimid,planlananmiktaradet,malzemeid,deleted) 
        values('$uretimid','$ihtiyac','$altmalzemeid','false')");
        $Stquery->execute([]);
      }
    }


    //operasyonlar da ekleniyor


    $sql="select * from uretimprosesi where malzemeid=? ";
                    
    $zquery2 = $db->prepare($sql);
    $zquery2->execute([$malzemeid]);
     $countyes2= $zquery2->rowCount();
if($countyes2>0){
while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
  {

   
      $isemrino=$uretimemrino.".".$okutyes2[operasyonkodu];
    $soktaksuresi=$okutyes2[soktaksuresi];
    $ismerkezi=$okutyes2[ismerkezi];
    $cevrimsuresi=$okutyes2[islemsuresi];
    $partimiktari=$okutyes2[partimiktari];
    $hazirliksuresi=$okutyes2[taqtime];
    $operasyonid=$okutyes2[index_uretimprosesi];
      $durumu=iconv('UTF-8','ISO-8859-9','İstasyon Seçilmedi');

    //girdiler ekleniyor
    $Stquery = $db->prepare("insert into isemrioperasyonlari (isemriid,isemrino,mamulkodu,siparismiktari,planlananhazirlik,planlanancevrim,planlanansoktak,partimiktari,operasyonno,ismerkezi,isdurumu,deleted) 
    values('$uretimid','$isemrino','$malzemeid','$planmiktar','$hazirliksuresi','$cevrimsuresi','$soktaksuresi','$partimiktari','$operasyonid','$ismerkezi','$durumu','false')");
    $Stquery->execute([]);
  }
}




        if($Stquery!=false){
          echo "[{\"status\":\"SUCREZ\"}]";
    }


  }


  if($miktar>'0'){



       
    $sipid = $okut[index_siparis_izleme];
    $uretimemrino='UE.'.$okut[kalemid].".01";
    $planmiktar=$miktar;
    $malzemeid=$okut[index_malzemeler];

  
    $Stquery = $db->prepare("insert into uretimemirleri (uretimemrino,planmiktar,malzemeid,siparisid,planlamatarihi,deleted) 
    values('$uretimemrino','$planmiktar','$malzemeid','$sipid','$tarihim','false')");
    $Stquery->execute([]);



    
        //oluşturulan iş emrinin id si alınıyor
        
        $sql="select * from uretimemirleri order by index_uretimemirleri desc limit 1";
                    
        $zquery2 = $db->prepare($sql);
        $zquery2->execute();
         $countyes2= $zquery2->rowCount();
if($countyes2>0){
   while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
      {
$uretimid=$okutyes2[index_uretimemirleri];
      }
    }

        //takım setli bir ürün mü?



        $sql="select * from takimseti where malzemeid=? ";
                    
        $zquery2 = $db->prepare($sql);
        $zquery2->execute([$malzemeid]);
         $countyes2= $zquery2->rowCount();
if($countyes2>0){
   while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
      {
        $ihtiyac=$planmiktar*$okutyes2[miktar];
        $altmalzemeid=$okutyes2[altmalzemeid];
        //girdiler ekleniyor
        $Stquery = $db->prepare("insert into uretimgirdileri (uretimid,planlananmiktaradet,malzemeid,deleted) 
        values('$uretimid','$ihtiyac','$altmalzemeid','false')");
        $Stquery->execute([]);
      }
    }


      //operasyonlar da ekleniyor


    $sql="select * from uretimprosesi where malzemeid=? ";
                    
    $zquery2 = $db->prepare($sql);
    $zquery2->execute([$malzemeid]);
     $countyes2= $zquery2->rowCount();
if($countyes2>0){
while( $okutyes2 =$zquery2->fetch(PDO::FETCH_ASSOC) )
  {

      $isemrino=$uretimemrino.".".$okutyes2[operasyonkodu];
    $soktaksuresi=$okutyes2[soktaksuresi];
    $ismerkezi=$okutyes2[ismerkezi];
    $cevrimsuresi=$okutyes2[islemsuresi];
    $partimiktari=$okutyes2[partimiktari];
    $hazirliksuresi=$okutyes2[taqtime];
    $operasyonid=$okutyes2[index_uretimprosesi];
    $durumu=iconv('UTF-8','ISO-8859-9','İstasyon Seçilmedi');

    //girdiler ekleniyor
    $Stquery = $db->prepare("insert into isemrioperasyonlari (isemriid,isemrino,mamulkodu,siparismiktari,planlananhazirlik,planlanancevrim,planlanansoktak,partimiktari,operasyonno,ismerkezi,isdurumu,deleted) 
    values('$uretimid','$isemrino','$malzemeid','$planmiktar','$hazirliksuresi','$cevrimsuresi','$soktaksuresi','$partimiktari','$operasyonid','$ismerkezi','$durumu','false')");
    $Stquery->execute([]);
  }
}


    if($Stquery!=false){
      echo "[{\"status\":\"SUCREZ\"}]";
}


}
    
    }
                  }
      
                    }
                else{
                              echo "[{\"status\":\"STOKERR\"}]";
                    }
         
                  }
            }
            else{
                  echo "[{\"status\":\"SIPERR\"}]";
            }
        }
    }
            
            ?>