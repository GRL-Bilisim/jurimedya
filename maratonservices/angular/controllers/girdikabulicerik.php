<?php 

     if ($_GET[page_id]=='girdikabulicerik')
    {
        
               include 'pdo_baglanti.php';
        
        date_default_timezone_set("Turkey");
        $tarih=date("Y-m-d");
        
                $userid = $_GET[userid];
                $indexsatinalma = $_GET[indexsa];
                $indexmalzemetedarikci = $_GET[imt];
                                
                $teklifno = $_GET[satinalno];
                $adet = $_GET[adet];
                $sipariskg = $_GET[sipariskg];
                $mastervalue = $_GET[master];
    
                
    $sqls=$db->prepare("select *,concat_ws('.',malzemeler.grupkodu,malzemeler.malzemekodu) as birlesik,malzemetedarikcileri.ureticikodu  from malzemetedarikcileri left join cariler on cariler.index_cariler=malzemetedarikcileri.tedarikci left join malzemeler on malzemeler.index_malzemeler=malzemetedarikcileri.malzemeid where index_malzemetedarikcileri>0 and index_malzemetedarikcileri=?");
        $sqls->execute([$indexmalzemetedarikci]);
        
                      if($sqls !== false)
    {
            while( $okuty =$sqls->fetch(PDO::FETCH_ASSOC) )
              {
                $birimkg = $okuty[minsiparis];
                $birimfiyat= $okuty[birimfiyat];
                $index_malzemeler = $okuty[index_malzemeler];
                $doviz = $okuty[fiyatbirimi];
                
                
                  $sql = "insert into girdikabulicerik (urunadi,giriskabulid,teklifno,adet,birimkg,fiyat,doviz,sipariskg,kayittarihi,deleted,olusturan) values ('$index_malzemeler','$mastervalue','$teklifno','$adet','$birimkg','$birimfiyat','$doviz','$sipariskg','$tarih','false','$userid') ";
                    $cal = $db->prepare($sql);
                    $cal->execute([]);
                   if($cal !== false)
                        {
            echo "[{\"status\":\"OK\"}]";
            
            $sqlx= "UPDATE `satinalma` SET `siparisdurumu` = 'Kabul Edildi' WHERE `satinalma`.`index_satinalma` = ?";
                                    $slco = $db->prepare($sqlx);
                                    $slco->execute([$indexsatinalma]);
            
                        }
    
              }
              
    }




        
    }