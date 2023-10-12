
<?php 

 if ($_GET['page_id']=='isemrikalite'){
    
         include 'pdo_baglanti.php';
         
         date_default_timezone_set("Turkey");

$tarih=date("Y-m-d");


         
       //  https://yetisenerp.bulutfabrika.com/angular/dataservis.php?page_id=isemrikalite&isemriid= 2&olcuturu=İç Çap&asama=N1&olcu=4
                    $userid=$_GET[userid];
                    $isEmriKayitId=$_GET[isemriid];
                    $kontrolKodu='';
                 
                    $kontrolrAraligi='1';
                    $asama=$_GET[asama];
                    $olcu=$_GET[olcu];
                    $olcuturu = $_GET[olcuturu];

                  if($asama=='N1'){
                      $nc='ilkonay';
                  }else{
                      $nc=strtolower($asama);
                  }



$urquery = $db->prepare("select * from urunolculeri where index_urunolculeri>0");
$urquery->execute([]);
$urcount= $urquery->rowCount();


$isquery = $db->prepare("select * from numuneler where isemriid=?");
$isquery->execute([$isEmriKayitId]);

 $count= $isquery->rowCount();



if($isquery!=false){
    
    if($count==$urcount){
        
          $query=$db->prepare("select * from urunolculeri where index_urunolculeri>0 and index_urunolculeri=? and deleted='false' ");
          $query->execute([$olcuturu]);
                    if($query != false)
{
            while( $olcucek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                 $kontrolKodu=$olcucek[olcuturu];
              }
}

        $sql="update numuneler set $nc=? where isemriid=? and kriterkodu=?";
        
      $asquery=$db->prepare($sql);
       $asquery->execute([$olcu,$isEmriKayitId,$kontrolKodu]);
                    if($asquery != false)
                {
                    if($asama=='N1'){
                        $siradaki = 'N2';
                    }
                    if($asama=='N2'){
                        $siradaki='N3';
                    } 
                    if($asama=='N3'){
                        $siradaki='N4';
                    }
                    if($asama=='N4'){
                        $siradaki='N5';
                    }
                    if($asama=='N5'){
                         $siradaki='N6';
                    }
                    if($asama=='N6'){
                        $siradaki='N7';
                    }
                    if($asama=='N7'){
                        $siradaki='N8';
                    }
                    echo "[{\"status\":\"OK\",\"asama\":\"$siradaki\"}]";
                }
    }else{
              $query=$db->prepare("select * from urunolculeri where index_urunolculeri>0 and index_urunolculeri=? and deleted='false' ");
          $query->execute([$olcuturu]);
                    if($query != false)
{
            while( $olcucek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                  
                 $kontrolKodu=$olcucek[olcuturu];
                 $hedefdeger=$olcucek[hedefdeger];
                 $tolerans_arti=$olcucek[tolerans_arti];
                 $tolerans_eksi=$olcucek[tolerans_eksi];
                
                
                    
  $sql="insert into numuneler (index_numuneler,$nc,kriterkodu,tolerans,toleransust,nominaldeger,isemriid,kontrolsikligi,kayittarihi,sonduzenlemetarihi,olusturan,deleted)  values (NULL,'$olcu','$kontrolKodu','$tolerans_eksi','$tolerans_arti','$hedefdeger','$isEmriKayitId','1','$tarih','$tarih','$userid','false') ";
     $query=$db->prepare($sql);
         $query->execute([]);
                            if($query != false)
                {
                    echo "[{\"status\":\"OK\",\"asama\":\"ilk\"}]";
                }
         

              }


}
    
    
        
    }
    
}



      
  

        

 

}


 if($_GET['page_id']=='isemriasamane'){
     $userid=$_GET[user_id];
     $isemriid=$_GET[isemriid];
     $asamasi=$_GET[asamasi];
     
     $isquer = $db->prepare("select * from numuneler where isemriid=?");
     $isquer->execute([$isemriid]);
     
                    if($isquer !== false)
{
       $kayitlar=$isquer->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
} 
 }

?>