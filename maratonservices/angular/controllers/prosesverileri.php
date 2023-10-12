<?php 

     if ($_GET[page_id]=='prosesverileri')
    {
        
               include 'pdo_baglanti.php';
        





        $sqls=$db->prepare("select * from uretimprosesi left join prosesler on prosesler.prosestanimi=uretimprosesi.prosestanimi where index_uretimprosesi=?");
        $sqls->execute([$_GET['prosesid']]);
        
                      if($sqls !== false)
{
            while( $okuty =$sqls->fetch(PDO::FETCH_ASSOC) )
              {


 $sqlys=$db->prepare("select alanadi,deger from prosesalanlari left join prosesdegerleri on prosesdegerleri.alanid=prosesalanlari.index_prosesalanlari where prosesalanlari.deleted='false' and prosesalanlari.prosesid='".$okuty[index_prosesler]."'");
 

        $sqlys->execute([$_GET[kayitid]]);
        
                      if($sqlys !== false)
{
    $i=0;
    echo "[{";
            while( $okute =$sqlys->fetch(PDO::FETCH_ASSOC) )
              {
         if ($i==0)
         {
             echo '"'.$okute[alanadi].'": "'.$okute[deger].'"';
             
         }
         else
         {
           echo ',"'.$okute[alanadi].'": "'.$okute[deger].'"';  
         }
         
         $i++;
                  
              }
              
              echo "}]";

}
}
        
        
}

}


?>