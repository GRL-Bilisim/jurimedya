<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");



   
               include 'pdo_baglanti.php';
        





        $sqls=$db->prepare("select * from uretimprosesi left join prosesler on prosesler.prosestanimi=uretimprosesi.prosestanimi where index_uretimprosesi=?");
        $sqls->execute([$_GET['prosesid']]);
        
                      if($sqls !== false)
{
            while( $okuty =$sqls->fetch(PDO::FETCH_ASSOC) )
              {


 $sqlys=$db->prepare("select alanadi,index_prosesalanlari from prosesalanlari where prosesalanlari.deleted='false' and prosesalanlari.prosesid='".$okuty[index_prosesler]."'");
 
 

        $sqlys->execute([$_GET[kayitid]]);
        
                      if($sqlys !== false)
{
   
   $sorgu="delete from prosesdegerleri where operasyonid=".$okuty[index_uretimprosesi];
   
      $kayitgonder=$db->prepare($sorgu);
    $kayitgonder ->execute();
 
            while( $okute =$sqlys->fetch(PDO::FETCH_ASSOC) )
              {
                  $alan=$okute['alanadi'];
                  
                  $sorgu="insert into prosesdegerleri (alanid,operasyonid,deger,kayittarihi,sonduzenlemetarihi,olusturan,deleted) values('".$okute['index_prosesalanlari']."','".$okuty['index_uretimprosesi']."','".$_POST[$alan]."','$tarih','$tarih','$_GET[userid]' ,'false')";
                  
                  $sorgu=str_replace("''","null",$sorgu);
                  echo $sorgu;
           
                  
              $kayitgonder=$db->prepare($sorgu);
    $kayitgonder ->execute();
                  
              }
              
         

}
}
        
        
}





?>