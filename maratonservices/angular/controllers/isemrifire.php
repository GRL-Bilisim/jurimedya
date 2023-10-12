<?php 
 if ($_GET['page_id']=='fireturlericek'){
    
         include 'pdo_baglanti.php';
         
         date_default_timezone_set("Turkey");

$tarih=date("Y-m-d");

$saat = date("H:i:s");


$fiquery = $db->prepare("select * from firenedenleri where index_firenedenleri>0");
$fiquery->execute([]);

if($fiquery!=false){
        $kayitlar=$fiquery->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce($kayitlar);
}

   
 }
 
  if ($_GET['page_id']=='fireolustur'){
    
         include 'pdo_baglanti.php';
         
         $isemriid = $_GET[isemriid];
         $firemiktari = $_GET[firemiktari];
         $secilenhata = $_GET[secilenhata];
         
         $uquery = $db->prepare("select * from uretimler where isemriid=? ");
         $uquery->execute([$isemriid]);
         
 $count= $uquery->rowCount();
         
                           if($uquery != false)
            {
                if($count>0){
                        while( $ucek =$uquery->fetch(PDO::FETCH_ASSOC) )
                  {
                
                if($firemiktari>0){


                     if ($ucek[firemiktari]=='')
    {

        $urSql = "update uretimler set firemiktari=?,hatakodu=? where index_uretimler=".$ucek[index_uretimler];
    
    }
    else
    if ($ucek[firemiktari_2]=='')
    {
              $urSql = "update uretimler set firemiktari_2=?,hatakodu_2=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else
     if ($ucek[firemiktari_3]=='')
    {
                 $urSql = "update uretimler set firemiktari_3=?,hatakodu_3=? where index_uretimler=".$ucek[index_uretimler];

    }
    else
     if ($ucek[firemiktari_4]=='')
    {
                      $urSql = "update uretimler set firemiktari_4=?,hatakodu_4=? where index_uretimler=".$ucek[index_uretimler];  

    }
    else
     if ($ucek[firemiktari_5]=='')
    {
                      $urSql = "update uretimler set firemiktari_5=?,hatakodu_5=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else
     if ($ucek[firemiktari_6]=='')
    {
                     $urSql = "update uretimler set firemiktari_6=?,hatakodu_6=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else
     if ($ucek[firemiktari_7]=='')
    {
                    $urSql = "update uretimler set firemiktari_7=?,hatakodu_7=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else
     if ($ucek[firemiktari_8]=='')
    {
                    $urSql = "update uretimler set firemiktari_8=?,hatakodu_8=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else
     if ($ucek[firemiktari_9]=='')
    {
                      $urSql = "update uretimler set firemiktari_9=?,hatakodu_9=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else
     if ($ucek[firemiktari_10]=='')
    {
                      $urSql = "update uretimler set firemiktari_10=?,hatakodu_10=? where index_uretimler=".$ucek[index_uretimler];  
    }
    else{
            echo "[{\"status\":\"FIRERR\"}]";
            break;
    }
    
        $upquery = $db->prepare($urSql);
        $upquery->execute([$firemiktari,$secilenhata]);
        if($upquery!=false){
            
            echo "[{\"status\":\"OK\"}]";
            
        }else{
           echo "[{\"status\":\"ERR\"}]";
        }
    
                  }
            }
                }
                else{
                            echo "[{\"status\":\"ROWERR\"}]";
   
                }
         
         

   } 




   
 }
 
 


?>