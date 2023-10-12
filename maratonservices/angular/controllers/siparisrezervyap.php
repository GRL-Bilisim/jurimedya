  <?php
  if ($_GET['page_id']=='rezervyap'){
    
         include 'pdo_baglanti.php';
        
         date_default_timezone_set("Turkey");


$saat=date("H:i:s");

$tarihim=date("Y-m-d");

$miktar = $_GET['miktar'];

$rezervedilecekmiktar='';

         $uquery = $db->prepare("select * from siparis_izleme where index_siparis_izleme=?");
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

                    $rezervedilecekmiktar=$okut[kesme_isemri_gelecek_miktar];
 
                      if ($_GET[turu]=='gerial')
    {
        
                    $uxquery = $db->prepare("delete from stokhareketleri where olusturanid='".$okut[index_siparis_izleme]."' and olusturanform='278'");
                    $uxquery->execute([]);
       
                    $Zuxquery = $db->prepare("update siparis_izleme set kod_rezervasyon='' where index_siparis_izleme=".$okut[index_siparis_izleme]);
                    $Zuxquery->execute([]);

    }
    
    if ($_GET[turu]=='yap')
    {

   if($miktar=='0'){



        $malzemeid=$okutyes[index_malzemeler];
        $tarih=$tarihim;
        $hareketturu=iconv( "UTF-8","ISO-8859-9",'Rezerve');
        $hareketsaati=$saat;
        $miktardb=$okutyes[fiilistok];
        $belgeno='';
        $aciklama=$okut[sip_id].iconv("UTF-8","ISO-8859-9"," nolu sipariş fişi üzerinden rezerve yapıldı.");
        $islemyeri='1';
        $sipid = $okut[index_siparis_izleme];

        $olusturanform='278';
        $olusturanid=$okut[index_siparis_izleme];

        $Stquery = $db->prepare("insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,siparisid,deleted) 
        values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktardb','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','$sipid','false')");
        $Stquery->execute([]);

      if($Stquery!=false){
            echo "[{\"status\":\"SUCREZ\"}]";
      }
        $Upsquery = $db->prepare("update siparis_izleme set kod_rezervasyon='".$okut[index_siparis_izleme]."' where index_siparis_izleme=".$okut[index_siparis_izleme]);
        $Upsquery->execute([]);

  }
  else
if($miktar<=$okutyes[fiilistok]){
  


    $malzemeid=$okutyes[index_malzemeler];
    $tarih=$tarihim;
    $hareketturu=iconv( "UTF-8","ISO-8859-9",'Rezerve');
    $hareketsaati=$saat;
    $miktardb=$miktar;
    $belgeno='';
    $aciklama=$okut[sip_id].iconv("UTF-8","ISO-8859-9"," nolu sipariş fişi üzerinden rezerve yapıldı.");
    $islemyeri='1';
    $sipid = $okut[index_siparis_izleme];
    $olusturanform='278';
    $olusturanid=$okut[index_siparis_izleme];

      $Stquery = $db->prepare("insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,deleted,siparisid) 
      values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktardb','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','false','$sipid')");
      $Stquery->execute([]);

    if($Stquery!=false){
          echo "[{\"status\":\"SUCREZ\"}]";
    }
      $Upsquery = $db->prepare("update siparis_izleme set kod_rezervasyon='".$okut[index_siparis_izleme]."' where index_siparis_izleme=".$okut[index_siparis_izleme]);
      $Upsquery->execute([]);

}

   else  if ($okutyes[fiilistok]<$okut[kesme_isemri_gelecek_miktar])
    {
         echo "[{\"status\":\"NO\"}]";
        
    }
    
    else if ($okutyes[fiilistok]>=$okut[kesme_isemri_gelecek_miktar])
    {
                  
    
        $malzemeid=$okutyes[index_malzemeler];
       $tarih=$tarihim;
       $hareketturu=iconv( "UTF-8","ISO-8859-9",'Rezerve');
       $hareketsaati=$saat;
       $miktardb=$rezervedilecekmiktar;
       $belgeno='';
       $aciklama=$okut[sip_id].iconv("UTF-8","ISO-8859-9"," nolu sipariş fişi üzerinden rezerve yapıldı.");
       $islemyeri='1';
       $olusturanform='278';
       $sipid = $okut[index_siparis_izleme];

       $olusturanid=$okut[index_siparis_izleme];
       
                    $Stquery = $db->prepare("insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,siparisidi,deleted) 
                    values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktardb','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','$sipid','false')");
                    $Stquery->execute([]);

        if($Stquery!=false){
                                          echo "[{\"status\":\"SUCREZ\"}]";
        }
       
                    $Upsquery = $db->prepare("update siparis_izleme set kod_rezervasyon='".$okut[index_siparis_izleme]."' where index_siparis_izleme=".$okut[index_siparis_izleme]);
                    $Upsquery->execute([]);

          
          
          
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