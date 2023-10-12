<?php 
if($_GET['page_id']=='deleterecord')
    {
        
        date_default_timezone_set("Turkey");



$zaman=date("H:i:s");





$tarih=date("Y-m-d");


        
       include 'pdo_baglanti.php';
       $formid = $_GET[formid];
       $recordid = $_GET[recordid];
       $userid = $_GET[userid];
       
       
         $sqlX=$db->prepare("select * from kullanicilar left join kullanicirolleri on kullanicilar.user_indeks=kullanicirolleri.userid left join roller on roller.index_roller=kullanicirolleri.rolid left join yetkiler on yetkiler.rolid=kullanicirolleri.rolid where userid=?  ");
                $sqlX->execute([$userid]);
                
                   if($sqlX !== false)
       {
           while($okuX=$sqlX-> fetch(PDO::FETCH_ASSOC))
           {
               if ($okuX[kayitsil]=='E'||$okuX[superuser]=='E')
               {
                   $silebilir='E';
               }
               
           }
       }

if ($silebilir!='E')
{
    echo "[{ \"status\":\"Error\" }]";  
}
else

    if(is_numeric($formid)){
                  $sqlX=$db->prepare("select * from formlar where form_index=?  ");
                $sqlX->execute([$formid]);
                
                   if($sqlX !== false)
       {
           while($okuX=$sqlX-> fetch(PDO::FETCH_ASSOC))
           {
         $anahtarsor=$db->prepare("SHOW KEYS FROM ".$okuX[tablosu]." WHERE Key_name = 'PRIMARY' ");
         $anahtarsor->execute();

            while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
              {
                  $anahtars=$agel['Column_name'];
              }
               $sql=$db->prepare("update $okuX[tablosu] set deleted='true',deleteddate='$tarih',deletedtime='$zaman',deleteduser='$userid' where $anahtars=?  ");
               
                     $sql->execute([$recordid]);
                     echo "[{ \"status\":\"OK\" }]";

           }
           
       }
    }else{
        
       $sql=$db->prepare("select * from menutasarimi where menu_seo=?  ");
       $sql->execute([$formid]);
       
       if($sql !== false)
       {
           while($oku=$sql-> fetch(PDO::FETCH_ASSOC))
           {
              $formidX  =$oku[formbaglantisi];
                $sqlX=$db->prepare("select * from formlar where form_index=?  ");
                $sqlX->execute([$formidX]);
                
                   if($sqlX !== false)
       {
           while($okuX=$sqlX-> fetch(PDO::FETCH_ASSOC))
           {
         $anahtarsor=$db->prepare("SHOW KEYS FROM ".$okuX[tablosu]." WHERE Key_name = 'PRIMARY' ");
         $anahtarsor->execute();

            while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
              {
                  $anahtars=$agel['Column_name'];
              }
               $sql=$db->prepare("update $okuX[tablosu] set deleted='true',deleteddate='$tarih',deletedtime='$zaman',deleteduser='$userid' where $anahtars=?  ");
               
                     $sql->execute([$recordid]);
                     
                     
                     $sql=$db->prepare("insert into kullaniciloglari values(NULL,'".$userid."','$tarih','$zaman','".$okuX[formtanimi]."','".iconv( "UTF-8","ISO-8859-9","Kayıt Silme")."','$recordid','')");

$sql->execute();
                     
                     echo "[{ \"status\":\"OK\" }]";
           }
           
       }
           }
       }
    }


    $sql=$db->prepare("select * from bildirimkurallari where olay like '%".iconv( "UTF-8","ISO-8859-9","Kayıt Silme")."%' ");
    
    

    $sql->execute([]);
      if($sql !== false)
  {
  while ($notificat = $sql-> fetch(PDO::FETCH_ASSOC))
  {
      
  
      $deger1=$notificat[deger1];
      $deger2=$notificat[deger2];
      $deger3=$notificat[deger3];
      $deger4=$notificat[deger4];
      $bildirimtext = $notificat[bildirimtext];
      $bildirimunvan = $notificat[departmanadi];
      $bildirimkisi = $notificat[bildirimkisi];
        
      if($formidX=$notificat[formadi]){
          
          if($bildirimunvan!=''){
              
               $sql=$db->prepare("select * from kullanicilar where unvani=? ");
             $sql->execute([$bildirimunvan]);
             
             while ($oku= $sql ->fetch(PDO::FETCH_ASSOC))
    {
       
              $id=$oku[user_indeks];
              
              $cc = $_POST[$deger1];
              $cx = $_post[$deger2];
              $cz = $_POST[$deger3];
              $cy = $_POST[$deger4];
              
                $eski   = array("[deger1]","[deger2]", "[deger3]","[deger4]");
                $yeni  = array($cc,$cx,$cz,$cy);
                                       
                $newphrase = str_replace($eski,$yeni, $bildirimtext.'--'.$notificat[formadi]);
              
                $sql=$db -> prepare ("insert into bildirimler values(NULL,'Uyari','$newphrase','$tarih','$zaman','','','$id','$tarih','','','','false','','','')"); 
                echo "insert into bildirimler values(NULL,'Uyari','$newphrase','$tarih','$zaman','','','$id','$tarih','','','','false','','','')";

             $sql->execute();
               
    }
              
  }
  }
  else {
      $dilimler = explode(",",$bildirimkisi);
      
      for($i=0;$i<count($dilimler);$i++)
      {
          $sql=$db->prepare("select * from kullanicilar where username=?");
          
          $sql->execute([$dilimler[$i]]);
          
          while ($yet=$sql -> fetch (PDO:: FETCH_ASSOC))
          {
              $id = $yet[user_indeks];
              
              $cc = $_POST[$deger1];
              $cx = $_post[$deger2];
              $cz = $_POST[$deger3];
              $cy = $_POST[$deger4];
              
              $eski = array("[deger1]","[deger2]","[deger3]","[deger4]");
              
              $yeni = array($cc,$cx,$cz,$cy);
              
              $newphrase= str_replace($eski,$yeni,$bildirimtext.'--'.$notificat[formadi]);
              
              $sql=$db -> prepare ("insert into bildirimler values(NULL,'Uyari','$newphrase','$tarih','$zaman','','','$id','$tarih','','','','false','','','')"); 
              echo "insert into bildirimler values(NULL,'Uyari','$newphrase','$tarih','$zaman','','','$id','$tarih','','','','false','','','')";
              $sql-> execute();
              
          }
      }
    }
    
  
   }
  } 

    }
?>