<?php
    

    date_default_timezone_set("Turkey");


    if($_GET['page_id']=='mixhazir')
{



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


    
   include 'pdo_baglanti.php';
   $formid = $_GET[formid];
   $recordid = $_GET[recordid];
   $userid = $_GET[userid];


   $uxquery = $db->prepare("delete from stokhareketleri where olusturanid='".$recordid."' and olusturanform='655'");
   $uxquery->execute();


           $sql=$db->prepare("update sarjgirdileri set sonduzenlemetarihi='$tarih',sonduzenleyen='$userid', mixhazir='".iconv( "UTF-8","ISO-8859-9",'OK')."' where index_sarjgirdileri=? limit 1");
           
                 $sql->execute([$recordid]);

//stok hareketlerinin düşmesi



      
$sql="select sarjgirdileri.lotno,sarjgirdileri.index_sarjgirdileri,malzemerecete.*,malzemeler.malzemekodu,malzemeler.malzemeaciklamasi,malzemerecete.kilo*sarjgirdileri.miktar/1000 as ihtiyacmiktarim,malzemeler.ureticikodu,malzemeler.index_malzemeler from sarjgirdileri  left join uretimgirdileri on uretimgirdileri.uretimid=sarjgirdileri.uretimid and uretimgirdileri.turu like '%Yar%' left join malzemerecete on malzemerecete.malzemeid=uretimgirdileri.girdimalzemeid left join malzemeler on malzemeler.index_malzemeler=malzemerecete.altmalzemeid left join uretimemirleri on uretimemirleri.index_uretimemirleri=sarjgirdileri.uretimid  and uretimemirleri.uretimrecetesi=concat_ws('Tip ',malzemerecete.tip)  where index_sarjgirdileri>0 and sarjgirdileri.deleted='false' and index_sarjgirdileri=?";
                    
$zquery = $db->prepare($sql);
$zquery->execute([$recordid]);
 $countyes= $zquery->rowCount();
if($countyes>0){
while( $okutyes =$zquery->fetch(PDO::FETCH_ASSOC) )
{

    echo "BB";
    //reçete kalemlerinin stok tüketimlerinin işlemesi

    $malzemeid=$okutyes[index_malzemeler];
    $tarih=$tarihim;
    $hareketturu=iconv( "UTF-8","ISO-8859-9",'Tüketim');
    $hareketsaati=$saat;
    $miktardb=$okutyes[ihtiyacmiktarim];
    $belgeno='';
    $aciklama=$okutyes[lotno].iconv("UTF-8","ISO-8859-9"," nolu şarj için mix üretimi için kullanıldı");
    $islemyeri='6';
    $lotno = $okutyes[lotno];

    $olusturanform='655';
    $olusturanid=$recordid;

    $Stquery = $db->prepare("insert into stokhareketleri (harekettarihi,hareketturu,hareketsaati,malzemeid,miktar,belgeno,aciklama,islemyeri,olusturanform,olusturanid,lotno,deleted) 
    values('$tarih','$hareketturu','$hareketsaati','$malzemeid','$miktardb','$belgeno','$aciklama','$islemyeri','$olusturanform','$olusturanid','$lotno','false')");
    $Stquery->execute([]);
    
}

}
  

}







?>