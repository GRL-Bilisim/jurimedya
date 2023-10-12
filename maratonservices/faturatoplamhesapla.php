<?php


include 'baglanti.php';

ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


 $toplam_tutar=0.00;

 $toplam_miktar=0.00;

 $iskonto_tutar=0.00;


 $iskonto_orani=0.00;


 $iskontolu_tutar=0.00;

 $kdv1toplam=0.00;
 $kdv8toplam=0.00;
 $kdv18toplam=0.00;


 $genel_toplam=0.00;



if ($_GET[kayitid]=='')
{
    
  $sql="select *,round(miktar*brfiyat,2) as satirtoplami from faturaicerik where index_faturaicerik>0 and faturano='-".$_SESSION[user_id]."'";  
    
    
}



if ($_GET[kayitid]!='')
{
    
    
  $sql="select *,round(miktar*brfiyat,2) as satirtoplami from faturaicerik where index_faturaicerik>0 and faturano='".$_GET[kayitid]."'";  
    
       
}

$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
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


$geneltoplam=$aratoplam-$iskontotoplami+$kdv1toplam+$kdv8toplam+$kdv18toplam;

echo $aratoplam."_".$kdv1toplam."_".$kdv8toplam."_".$kdv18toplam."_".$iskontotoplami."_".$geneltoplam;



?>