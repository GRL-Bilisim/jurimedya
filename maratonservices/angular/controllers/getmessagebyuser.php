<?php 



if($_GET[page_id]=='pdo_gelenmesajlarimicek'){


 include 'pdo_baglanti.php';
    
        $gonderenid=$_GET['userid'];
        $turu=$_GET['turu'];

        if($turu =='son'){
                $sqlx = "select  TIMESTAMPDIFF(MINUTE,olusturma_saati, current_time ) AS gecendakika,index_mesajlarim,gonderen,alici,mesajlarim.olusturma_saati,count(mesajlarim.mesaj) as okunmamismesaj,mesajlarim.olusturma_tarihi,mesajlarim.mesaj,kullanicilar.adi,concat_ws('','http://192.168.0.141/yetisenerp/',kullanicilar.resim) as kullaniciresim from mesajlarim  left join kullanicilar on kullanicilar.user_indeks=mesajlarim.gonderen  where alici=?  and mesajlarim.durumu<>'' and index_mesajlarim in (select max(index_mesajlarim) from mesajlarim group by gonderen)   GROUP by gonderen order by mesajlarim.index_mesajlarim desc limit 5";
        }
        else{
                $sqlx = "select  TIMESTAMPDIFF(MINUTE,olusturma_saati, current_time ) AS gecendakika,index_mesajlarim,gonderen,alici,mesajlarim.olusturma_saati,count(mesajlarim.mesaj) as okunmamismesaj,mesajlarim.olusturma_tarihi,mesajlarim.mesaj,kullanicilar.adi,concat_ws('','http://192.168.0.141/yetisenerp/',kullanicilar.resim) as kullaniciresim from mesajlarim  left join kullanicilar on kullanicilar.user_indeks=mesajlarim.gonderen  where alici=?  and mesajlarim.durumu='Sent' and index_mesajlarim in (select max(index_mesajlarim) from mesajlarim group by gonderen)   GROUP by gonderen order by mesajlarim.index_mesajlarim desc";

        }
        $sql=$db->prepare($sqlx);
        $sql->execute([$gonderenid]);
        
            if($sql !== false)
{
       $kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}


if($_GET[page_id]=='pdo_islembildirimlerim'){


       include 'pdo_baglanti.php';
          
              $userid=$_GET['userid'];
              $turu=$_GET['turu'];
              if($turu =='son'){
                $sorgu ="select * from bildirimler where bildirimsahibi=?   order by olusturmatarihi desc limit 5 ";
              }else{
                      $sorgu="select * from bildirimler where bildirimsahibi=? and okundu=''  order by olusturmatarihi desc";
              }

      
              $sql=$db->prepare($sorgu);
              $sql->execute([$userid]);
              
                  if($sql !== false)
      {
             $kayitlar=$sql->fetchAll(PDO::FETCH_ASSOC);
                     echo json_turkce(($kayitlar));
      }
         
      }

      if($_GET[page_id]=='pdo_bildirimiokundu'){

              include 'pdo_baglanti.php';

              date_default_timezone_set("Turkey");

              $zaman=date("H:i:s");
       
              $bildirimid=$_GET['bildirimid'];
              $sql=$db->prepare("update bildirimler set okundu=?,okunmazamani=? where index_bildirimler=?");
              $sql->execute(['e',$zaman,$bildirimid]);
              
                  if($sql !== false)
              {
                      echo "[{\"status\":\"OK\"}]";
              }
         
      }

?>