<?php



include 'pdo_baglanti.php';

if($_GET[page_id]=='faturatoplamhesapla'){
    $toplam_tutar=0.00;

 $toplam_miktar=0.00;

 $iskonto_tutar=0.00;


 $iskonto_orani=0.00;


 $iskontolu_tutar=0.00;

 $kdv1toplam=0.00;
 $kdv8toplam=0.00;
 $kdv18toplam=0.00;


 $genel_toplam=0.00;


$token=$_GET[token];



if ($_GET[token]=='')
{
    
  $token=$_GET[kayitid];
  $sql="select *,round(miktar*brfiyat,2) as satirtoplami from faturaicerik where index_faturaicerik>0 and faturano=? and deleted='false'";  
    
    
}



if ($_GET[token]!='')
{
  $token=$_GET[token];
    
  $sql="select *,round(miktar*brfiyat,2) as satirtoplami from faturaicerik where index_faturaicerik>0 and faturano=? and deleted='false'";  
    
       
}


       
        
        $query=$db->prepare($sql);
         $query->execute([$token]);
         
 if($query !== false)
{
   while( $okut =$query->fetch(PDO::FETCH_ASSOC) )
    {
      $satirtoplami=$okut[satirtoplami];
    
      $aratoplam=$aratoplam+$satirtoplami;
    
    
     if ($okut[iskonto1]!=''&&$okut[iskonto1]!='0')
    {
        
    $satirtoplami=$satirtoplami*(1-$okut[iskonto1]/100);
    }
    
      if ($okut[iskonto2]!=''&&$okut[iskonto2]!='0')
    {
        $satirtoplami=$satirtoplami*(1-$okut[iskonto2]/100);   
        
    }
    
    
      if ($okut[iskonto3]!=''&&$okut[iskonto3]!='0')
    {
        
          $satirtoplami=$satirtoplami*(1-$okut[iskonto3]/100); 
    }
    
    $iskontotoplami=$iskontotoplami+($okut[satirtoplami]-$satirtoplami);
    
    
    if ($okut[kdvorani]=='1')
    {
        $kdv1toplam=$kdv1toplam+($satirtoplami*0.01);
    }
    
     if ($okut[kdvorani]=='8')
    {
        $kdv8toplam=$kdv8toplam+($satirtoplami*0.08);
    }
    
     if ($okut[kdvorani]=='18')
    {
        $kdv18toplam=$kdv18toplam+($satirtoplami*0.18);
    }

 }
              
}


$geneltoplam=$aratoplam-$iskontotoplami+$kdv1toplam+$kdv8toplam+$kdv18toplam;




echo "{ \"aratoplam\": \"$aratoplam\", \"kdv1toplam\": \"$kdv1toplam\",  \"kdv8toplam\": \"$kdv8toplam\",  \"iskontotoplami\": \"$iskontotoplami\",  \"geneltoplam\": \"$geneltoplam\" }";



}

 

?>