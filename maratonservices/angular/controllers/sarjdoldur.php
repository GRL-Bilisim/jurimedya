<?php


if($_GET['page_id']=='sarjgirdisionayla' && $_GET['recordid']!=''){
    date_default_timezone_set("Turkey");
    include 'pdo_baglanti.php';

    $zaman=date("H:i:s");
    $tarih=date("Y-m-d");
    $recordid = $_GET['recordid'];
    $userid = $_GET['userid'];


        $sarjupd = " update sarjgirdileri set bitisonay='OK' where index_sarjgirdileri='$recordid'   ";
         $sarjupdate = $db->prepare($sarjupd);
         $sarjupdate->execute([]);
         if($sarjupdate!=false){

                echo "[{\"status\":\"success\"}]";

                $kontrol = "SELECT sarjgirdileri.* FROM sarjgirdileri left join uretimemirleri on uretimemirleri.index_uretimemirleri=sarjgirdileri.uretimid where sarjgirdileri.uretimid='$recordid' ";                
                $ckont = $db->prepare($kontrol);
                $ckont->execute([]);
                $countU= $ckont->rowCount();

                $kontrolB = "SELECT sarjgirdileri.* FROM sarjgirdileri left join uretimemirleri on uretimemirleri.index_uretimemirleri=sarjgirdileri.uretimid where sarjgirdileri.uretimid='$recordid' and sarjgirdileri.bitisonay='OK' ";                
                $bkont = $db->prepare($kontrolB);
                $bkont->execute([]);
                $countBit= $bkont->rowCount();

                if($countU == $countBit){

                        $sqlX=$db->prepare("select * from sarjgirdileri where index_sarjgirdileri=? ");
                        $sqlX->execute([$recordid]);
    
                        if($sqlX !== false)
                            {
                                while( $oka =$sqlX->fetch(PDO::FETCH_ASSOC) )
                                {
                                        $uretimemirid = $oka['uretimid'];
                                        $durumu = iconv("UTF-8","ISO-8859-9","Tamamlandı");
                                        $updateurdu=$db->prepare("update uretimemirleri set durumu='$durumu' where index_uretimemirleri='$uretimemirid' ");
                                        $updateurdu->execute([]);    
                                }
                            }

                }


            }


}

    if($_GET['page_id']=='sarjdoldur'&&$_GET['blokid']=='1530')
    {
    
           date_default_timezone_set("Turkey");

       include 'pdo_baglanti.php';
 

$zaman=date("H:i:s");
    
$tarih=date("Y-m-d");


$recordid = $_GET['recordid'];
$userid = $_GET['userid'];


$planmiktar = $_GET['planmiktar'];
$sarjmiktar = $_GET['sarjmiktar'];
$torbakg = $_GET['torbakg'];
$masterva = $_GET['mastervalue'];

$sql="delete from sarjgirdileri where uretimid=?";
                    
$zquery2 = $db->prepare($sql);
$zquery2->execute([$masterva]);




$sgs = ($planmiktar*$torbakg / $sarjmiktar);




$sqlsor = "";

for($i=0;$i<$sgs;$i++){

    $sqlX=$db->prepare("show table status from bulutfab_znr where name='sarjgirdileri'");
    $sqlX->execute();
    
                  if($sqlX !== false)
{
        while( $oka =$sqlX->fetch(PDO::FETCH_ASSOC) )
          {

 
              $sira=$oka["Auto_increment"];

          }
}


$sqlims="";

$sira=$i+1;
if ($sira=='')

{



$varsayilan='00001';

$sira=1;



}





if ($sira<>'')

{



$verim=($sira*1);



if ($verim<10)

{

$degerc='0000'."$verim";

}



if ($verim>9&&$verim<100)

{

$degerc='000'."$verim";

}



if ($verim>99&&$verim<1000)

{

$degerc='00'."$verim";

}



if ($verim>999&&$verim<10000)

{

$degerc='0'."$verim";

}

$varsayilan=$degerc;

}

$varsayilan=$masterva."-".$varsayilan;
   $sqlsor = "insert into sarjgirdileri (lotno,uretimtarih,uretimsaat,miktar,uretimid) values('$varsayilan',null,null,'$sarjmiktar','$masterva'); ".$sqlsor;
 
}

$sqlSira = $db->prepare($sqlsor);
$sqlSira->execute([]);
if($sqlSira!=false){
echo "[{\"status\":\"OK\"}]";
}


}


?>