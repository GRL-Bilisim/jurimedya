<?php 

if($_GET[page_id]=='uretimebasla'){

        include 'pdo_baglanti.php';
        date_default_timezone_set("Turkey");
        $saat=date("H:i:s");
        $tarih=date("Y-m-d");
        $baslat = $_GET[baslat];
        $userid = $_GET[userid];
        $isemriid = $_GET[isemriid];
        
        $isquery = $db->prepare("select * from isemrioperasyonlari where index_isemrioperasyonlari=?  ");
        $isquery->execute([$isemriid]);
            while($okut = $isquery->fetch(PDO::FETCH_ASSOC) )
             {
 
/*******************************************************************************************************************************************************************************************/
                
    if ($baslat=='E')
    {
       
        $urquery = $db->prepare("insert into uretimler (tarih,operator,baslamasaati,isemriid) values ('$tarih','$userid','$saat','$isemriid')");
        $urquery->execute([]);
        if($urquery!=false){
            $output=$tarih.' '.$saat;
            
        }
        
        
    }
    
    
/******************************************************************************************************************************************************************************************/
   
    
        $sql="select *,cast((TIME_TO_SEC(durussaati) - TIME_TO_SEC(baslamasaati))/60 as nchar) AS `minutes` from duruskalkislar where isemriid='?' order by tarih,baslamasaati";
        $duquery = $db->prepare($sql);
        $duquery->execute([$isemriid]);
        $isemri_duruyor='E';
        $ucount= $duquery->rowCount();
        if($duquery!=false){

            if($ucount==0){
              
                    $isemri_duruyor='H';
                    $suretoplami=0;
                    $i=0;
                    $cuqery = $db->prepare("select *,cast((TIME_TO_SEC(bitissaati) - TIME_TO_SEC(baslamasaati))/60 as char) AS minutes from uretimler where index_uretimler>0 and isemriid=?");
                    $cuqery->execute([$isemriid]);
                  $cucount= $cuqery->rowCount();
                    if($cuqery!=false){
                        
                        while($okut2 =$cuqery->fetch(PDO::FETCH_ASSOC) )
                    {
                        
                        $operator=$okut2[operator];
                        if ($i==0)
                        {
                            $baslama=$okut2[baslamasaati];
                            $baslamatarihi=$okut2[tarih];
                            $suretoplami=$suretoplami+$okut2['minutes']*1;
                        }
                        
                        $i++;

                         if ($i==$cucount)
                        {
                            $bitis=$okut2[bitissaati];
                            $bitistarihi=$okut2[tarih];
                            $suretoplami=$suretoplami+$okut2['minutes']*1;
                        }
                        
                    }
                        
                    }
           
 

    
            }
            if($ucount>0){
                $suretoplami=0;
                $i=0;
                
             while($okut2 = $duquery->fetch(PDO::FETCH_ASSOC) )
             {
                 $operator=$okut2[operator];
                
                  if ($okut2[baslamasaati]!=''&&$okut2[durussaati]=='')
                {
                    $isemri_duruyor='E';
                    
                    $output=$okut2[tarih]." ".$okut2[baslamasaati];
                    $duruskodu=$okut2[durusnedeni];
                }
                
                if ($okut2[durussaati]!=''&&$okut2[baslamasaati]!='')
                {
                    $isemri_duruyor='H';
                    $suretoplami=$suretoplami+$okut2['minutes']*1;
                    if ($i==0)
                    {
                        $baslama=$okut2[baslamasaati];
                        $baslamatarihi=$okut2[tarih];
                    }
                    
                    $i++;
                    
                     if ($i==$ucount)
                    {
                        $bitis=$okut2[durussaati];
                        $bitistarihi=$okut2[tarih];
                    }
                }
             }
         
            
            }
            
        }
    
/**********************************************************************************************************************************************************************************************/

  
      $sql2 = "select SUM(uygunmiktar) AS uygunmiktari,sum(firemiktari+firemiktari_2+firemiktari_3+firemiktari_4+firemiktari_5+firemiktari_6+firemiktari_7+firemiktari_8+firemiktari_9+firemiktari_10) as toplamfire from uretimler where isemriid=? group by isemriid";
	  $kuquery = $db->prepare($sql2);
	  $kuquery->execute([$isemriid]);
      if($kuquery!=false){
             while($okut2 =$kuquery->fetch(PDO::FETCH_ASSOC) )
             {
            $gerceklesenmiktar = $okut2[uygunmiktari];
            $hataliuretim = $okut2[toplamfire];
             }
             $kalanuretim=$okut[siparismiktari]-$gerceklesenmiktar;
        }
        
/****************************************************************************************************************************************************************************************/
    
    
        $sql="select *,cast((TIME_TO_SEC(bitissaati) - TIME_TO_SEC(baslamasaati))/60 as char) AS `minutes` from uretimler where index_uretimler>0 and isemriid=?";
        $sorgulat_uretim = $db->prepare($sql);
        $sorgulat_uretim->execute([$isemriid]);
        
        $basladi='H';

        while($okut2 =$sorgulat_uretim->fetch(PDO::FETCH_ASSOC) )
        {
    
                    $uretilen=$uretilen+$okut2[uygunmiktar];   
                  $firemiktari=$firemiktari+$okut2[firemiktari]+$okut2[firemiktari_2]+$okut2[firemiktari_3]+$okut2[firemiktari_4]+$okut2[firemiktari_5]+$okut2[firemiktari_6]+$okut2[firemiktari_7]+$okut2[firemiktari_8]+$okut2[firemiktari_9]+$okut2[firemiktari_10];
                  $uretimsuresi=$uretimsuresi+$okut2[minutes];
                  
                  if ($okut2[baslamasaati]!='' && $okut2[bitissaati]=='')
                  {
                      $duruyor='H';
                      $output=$okut2[tarih]." ".$okut2[baslamasaati];
                      $uretimid=$okut2[index_uretimler];
                      if ($_GET[bitir]=='E')
                      {
                         $duruyor='E';
                         $output=$okut2[tarih]." ".$saat;
                         
                          $c = $db->prepare("update uretimler set bitissaati=?,uygunmiktar=? where index_uretimler=?");
                          $c->execute([$saat,$_GET[uretimmiktari],$uretimid]);
                            if($c!=false){
                            }
                      }
                  }
                  
                  if ($okut2[baslamasaati]!=''&&$okut2[bitissaati]!='')
                  {
                      $duruyor='E';
                      $output=$okut2[tarih]." ".$okut2[bitissaati];
                  }
             }
             
        $suretoplami=$suretoplami*60;

        if ($baslama!=''&&$bitis!=''&&$operator!='')
        {

 $baslamasaati=$baslama;
 $bitissaati=$bitis;
    //vardiya bulma
    $sql="select * from personel_ozluk_bilgileri where index_personel_ozluk_bilgileri =?";
    $sql = $db->prepare($sql);
    $sql->execute([$operator]);

    while($okut2 =$sql->fetch(PDO::FETCH_ASSOC) )
      {
        $vardiyasi=$okut2[vardiyakodu];
      }

if ($vardiyasi!='')
{
$harcanansure=0;

$sql="select * from zamanlar left join vardiya on vardiya.index_vardiya=zamanlar.vardiyaid where vardiyakodu=?";

    $sorguvar = $db->prepare($sql);
    $sorguvar->execute([$vardiyasi]);

    while($okut2 =$sorguvar->fetch(PDO::FETCH_ASSOC) )
      {
        $vardiyasi=$okut2[vardiyakodu];
      }

$sorgu_vardiyalar=mysqli_query($connection,$sql);

    if ($baslamatarihi==$bitistarihi)
    {

    }
    if ($baslamatarihi!=$bitistarihi)
    {

    }
    $kullanilan=number_format(($harcanansure-($suretoplami*60))/$harcanansure,2);
  
}

}

/****************************************************************************************************************************************************************************************/
        }   

$uretilenC =  $uretilen+($_GET[uretimmiktari]*1);

echo "[{\"uretilenmiktar\":\"$uretilenC\",\"firemiktar\":\"$firemiktari\",\"toplamsure\":\"$uretimsuresi\",\"isdurumu\":\"$duruyor\",\"bitistarihi\":\"$output\"}]";
 
}
    ?>
