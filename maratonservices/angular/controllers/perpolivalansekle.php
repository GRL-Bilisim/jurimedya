<?php 
if($_GET[page_id]=='perPolEkle'){
    
    include 'pdo_baglanti.php';
    
        $polid = $_GET[polId];
        $userid = $_GET[userid];
        date_default_timezone_set("Turkey");

        $tarih=date("Y-m-d");

        
        $poquery = $db->prepare("select * from polivalans where index_polivalans=?");
        $poquery->execute([$polid]);
                           if($poquery != false)
                 {
                while( $ucek =$poquery->fetch(PDO::FETCH_ASSOC) )
                  {
                      $gorevtanimi = $ucek[gorevtanimi];
                  }
                }
        
        $perid = $_GET[personelId];
        $yetkinlik = $_GET[yetkinlik];
    
    
        $qup = $db->prepare("INSERT INTO `isgucupolivalanslari`(`personelid`, `gorevi`, `yetkinlik`, `kayittarihi`, `sonduzenlemetarihi`, `olusturan`,`deleted`) values('$perid','$gorevtanimi','$yetkinlik','$tarih','$tarih','$userid','false')");
        $qup->execute([]);
        if($qup!=false){
                echo "[{\"status\":\"OK\"}]";
        }
        
    
    
}


if($_GET[page_id]=='perPolGuncelle'){
    
        include 'pdo_baglanti.php';

        date_default_timezone_set("Turkey");

        $tarih=date("Y-m-d");


        $polid = $_GET[polId];
        $userid = $_GET[userid];
        $yetkinlik = $_GET[yetkinlik];
        $gorevi = $_GET[gorevi];
        
               $qup = $db->prepare("update isgucupolivalanslari set yetkinlik=?,gorevi=?,sonduzenlemetarihi=?,sonduzenleyen=? where index_isgucupolivalanslari=?");
        $qup->execute([$yetkinlik,$gorevi,$tarih,$userid,$polid]);
        if($qup!=false){
                echo "[{\"status\":\"OK\"}]";
        }
        
}


if($_GET[page_id]=='deleteperpolivalans'){
    
    include 'pdo_baglanti.php';

        date_default_timezone_set("Turkey");

        $zaman=date("H:i:s");
        
        $tarih=date("Y-m-d");
        
        $index = $_GET[index];
        
        $userid = $_GET[userid];

        
         $pus = $db->prepare("update `isgucupolivalanslari` set deleted='true',deleteddate=?,deletedtime=?,deleteduser=? where index_isgucupolivalanslari=? ");
        $pus->execute([$tarih,$zaman,$userid,$index]);
        if($pus!=false){
                echo "[{\"status\":\"OK\"}]";
        }

        
}


?>