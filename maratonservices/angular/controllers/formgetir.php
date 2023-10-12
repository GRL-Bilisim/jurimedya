<?php 

 if ($_GET['page_id']=='formgetir')
    {

include 'pdo_baglanti.php';

        $formid=$_GET[formid];
        
            
        $query=$db->prepare("select * from formlar where form_index=?  and deleted='false' ");

        
         $query->execute([$formid]);
         
                 if($query !== false)
{
            while( $formcek =$query->fetch(PDO::FETCH_ASSOC) )
              {
             
                $sql=$formcek['sorgusu'];
                
                $tablosu=$formcek['tablosu'];
                $tarihalani=$formcek['tarihalani'];
                $grup=$formcek['where'];
                
                $groupby=$formcek['sorgu2'];
                $islemmenu=$formcek['islemmenu'];  

                $renklendirme=$formcek['renksorgusu'];  

                if ($renklendirme=='')
                {
                  $renklendirme="'white' as renklendirme";
                }
                
              }
}

      /**  $sqlys="select * from formlar where form_index=".$_GET[formid];
        $sorgula=mysqli_query($connection,$sqlys);
        
        while ($okut=mysqli_fetch_assoc($sorgula))
        {
            
            $sql=$okut[sorgusu];
            $tablosu=$okut[tablosu];
             $tarihalani=$okut[tarihalani];
             $grup=$okut[where];
             $islemmenu=$okut[islemmenu];             
        }
         **/
        
        
               

         $anahtarsor=$db->prepare("SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY' ");
         $anahtarsor->execute();

            while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
              {
                  $anahtars=$agel['Column_name'];
              }
              
      // $anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";
         
/** 
$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
$anahtars=$gel['Column_name'];
    
}
**/
        
        
        		if ($bagliformid=="")

{

$sqli="select * from formalanlari where form_index=? and listegosterim='True' and deleted='false' order by formalanlari.alansirasi";

         $bagliformsor=$db->prepare($sqli);
         $bagliformsor->execute([$_GET[formid]]);
}



if ($bagliformid!="")

{

$sqli="select * from formalanlari where form_index=? and listegosterim='True' and deleted='false' order by formalanlari.alansirasi";
         $bagliformsor=$db->prepare($sqli);
         $bagliformsor->execute([$bagliformid]);
}
$sutunlar="";

            while( $okut =$bagliformsor->fetch(PDO::FETCH_ASSOC) )
              {
                  
         if ($sutunlar=='')
             {
            	
                     $sutunlar=$okut[alanadi];
            
             }
             else
             {
               $sutunlar=$sutunlar.",".$okut[alanadi];  
             } 
              }


/**
 * $kayitoku=mysqli_query($connection,$sqli);
$sutunlar="";
while($okut=mysqli_fetch_assoc($kayitoku))
{
    
    if ($sutunlar=='')
    {
	
            $sutunlar=$okut[alanadi];

    }
    else
    {
      $sutunlar=$sutunlar.",".$okut[alanadi];  
    }
}

**/

if ($_GET[sutunlar]!='')
{

    
    $sutunlar=$_GET[sutunlar];
}

         $anahtarsor=$db->prepare("SHOW KEYS FROM ".$tablosu."  WHERE Key_name = 'PRIMARY' ");
         $anahtarsor->execute();

         while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
        {
            $anahtar2=$agel['Column_name'];
        }
        
/**        
          $anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";

$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
$anahtar2=$gel['Column_name'];
    
}
**/
  
        if ($_GET[kayitsil]!='')
        {
        
            //  mysqli_query($connection,"delete from ".$tablosu." where anahtar2=".$_GET[kayitsil]);
      
          $kayitdelete=$db->prepare("delete from ".$tablosu." where anahtar2=? ");
          $kayitdelete->execute([$_GET[kayitsil]]);
            
        }
        
        
        
         $anahtarsor=$db->prepare("SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY' ");
         $anahtarsor->execute();

         while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
        {
            $anahtar2=$agel['Column_name'];
        }
        
/**
$anahtarsor="SHOW KEYS FROM ".$tablosu." WHERE Key_name = 'PRIMARY'";

$sorgulamaci=mysqli_query($connection,$anahtarsor);
while ($gel=mysqli_fetch_assoc($sorgulamaci))
{
$anahtar2=$gel['Column_name'];
    
}
**/



if ($_GET[filtreturu]!='')
{

if ($_GET[filtreturu]=='aylik')
{
    $ilktarih=$_GET[param1]."-".$_GET[param2]."-"."01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, $_GET[param2], $_GET[param1]);
    
    $sontarih=$_GET[param1]."-".$_GET[param2]."-".$gunsayisi;

}



if ($_GET[filtreturu]=='ikitariharasi')
{
   $ilktarih=$_GET[param1];
   $sontarih=$_GET[param2];
    
}

if ($_GET[filtreturu]=='ucaylik')
{
    if ($_GET[param2]=='0')
    {
       
       $ilktarih=$_GET[param1]."-01-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 3, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-03-".$gunsayisi;
       
       
    }
    if ($_GET[param2]=='1')
    {
        
          
       $ilktarih=$_GET[param1]."-04-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 6, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-06-".$gunsayisi;
        
    }
    if ($_GET[param2]=='2')
    {
        
         $ilktarih=$_GET[param1]."-07-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 9, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-09-".$gunsayisi;
        
    }
    if ($_GET[param2]=='3')
    {
        
         $ilktarih=$_GET[param1]."-10-01";
    
     $gunsayisi=cal_days_in_month(CAL_GREGORIAN, 12, $_GET[param1]);
    
    $sontarih=$_GET[param1]."-12-".$gunsayisi;
        
    }
    
}

if ($_GET[filtreturu]=='yillik')
{
      $ilktarih=$_GET[param1]."-01-01";

    $sontarih=$_GET[param1]."-12-31";
    
}

if ($_GET[filtreturu]=='haftalik')
{
 
 if ($_GET[param1]==0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));   

$sontarih=date("Y-m-d", strtotime('sunday this week'));
 }  
 
  if ($_GET[param1]>0)
 {

$ilktarih=date("Y-m-d", strtotime('monday this week'));  

$say=$_GET[param1];

$ilktarih=date('Y-m-d', strtotime($ilktarih.' -'.($say*7).' days')); 

$sontarih=date('Y-m-d', strtotime($ilktarih.' 6 days')); 

 }  
    
}


if ($tarihalani!=''&&$_GET[filtreturu]=='')
{
    $filtre=$filtre." and month(".$tarihalani.")=month(CURRENT_DATE) and year(".$tarihalani.")=year(CURRENT_DATE)";
    
}


if ($_GET[filtreturu]!='')

{

	$filtre=$filtre." and (".$tarihalani.">='".$ilktarih."' and ".$tarihalani."<='".$sontarih."') ";

}







}





if ($_GET[sorgusu]!='')

{
    
 $filtre=$_GET[sorgusu];   
}


if ($_GET[roluserid]!='')

{
    
 $filtre=$fitre." and userid='".$_GET[roluserid]."' ";   

    
}


if ($_GET[isemrimamulkodu]!='')

{
    
 $filtre=$fitre." and malzemeid  = '".$_GET['isemrimamulkodu']."' ";   

}


if ($_GET[isemrimerkezi]!='')

{
    
 $filtre=$fitre." and isemrioperasyonlari.ismerkezi like '%".iconv('UTF-8','ISO-8859-9',$_GET[isemrimerkezi])."%' ";   

}


if ($_GET[isemriistasyonu]!='')

{
    
 $filtre=$fitre." and isistasyonu like '%".iconv('UTF-8','ISO-8859-9',$_GET[isemriistasyonu])."%' ";   

}

if ($_GET[ismerkezi]!='')

{
    
 $filtre=$fitre." and is_merkezi_adi like '%".iconv('UTF-8','ISO-8859-9',$_GET[ismerkezi])."%' ";   

    
}

if ($_GET[uid]!='')

{
    
 $filtre=$fitre." and bildirimsahibi='".$_GET[uid]."' ";   
}


if ($_GET[tedavigrubu]!='')

{
    
 $filtre=$fitre." and hizmetgrubu='".iconv('UTF-8','ISO-8859-9',$_GET[tedavigrubu])."' ";   
}


if($_GET[siparisid]!='')

{
    
 $filtre=$fitre." and stokhareketleri.hareketturu='Rezerve' and stokhareketleri.siparisid='".$_GET[siparisid]."' ";   

}


// rezervasyon ekranı butonu sipariş fişleri tablosu
if($_GET['orderid']!=''){
  $filtre=$fitre." having(siparis_izleme.sip_id) = '".$_GET['orderid']."' ";   

}

if($_GET[tedi]!=''){
    
 $filtre=$fitre." and malzemeid='".$_GET[tedi]."' "; 
}

if($_GET[hatasinifi]!=''){
    
  $filtre=$fitre." and sinifi='".iconv("UTF-8","ISO-8859-9",$_GET[hatasinifi])."' "; 
 }
 
 if($_GET['isfofiltresi']!=''){

  if($_GET['isfofiltresi']=='0'){
    $filtre = $filtre." order by grupkodu asc  limit 0,8";
  }
  if($_GET['isfofiltresi']=='1'){
    $filtre = $filtre."  order by grupkodu asc limit 8,25";
  }
 }


if($_GET[personelId]!=''){
    
    //polivalans filtreleme
    
 $filtre=$fitre." and personelid='".$_GET[personelId]."' order by index_isgucupolivalanslari desc "; 
}

if($_GET[masrafmerkezi]!=''){
    
    //İş Gücü Masraf Merkezi İş İstasyonu filtreleme
    
 $filtre=$fitre." and masraf_merkezi='".iconv('UTF-8','ISO-8859-9',$_GET[masrafmerkezi])."'  "; 
}


if($_GET[firmaid]!=''){
    
     $filtre=$fitre." and satinalmasiparisleri.tedarikciid='".$_GET[firmaid]."'  "; 
     
}



if ($_GET[blokindex]!='')
{
    
    
            $query=$db->prepare("select * from bloklar where bokindex=?  and deleted='false' ");
         $query->execute([$_GET[blokindex]]);
         
                 if($query !== false)
{
            while( $formcek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                $masterfield=$formcek['masterfield'];
                $detailfield=$formcek['detailfield'];
               
              }
}




         $query=$db->prepare("select * from formlar where form_index=? and deleted='false' ");
         $query->execute([$_GET[kayitformid]]);
         
                 if($query !== false)
{
            while( $formcek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                $usttablo=$formcek['tablosu'];
              }
}


    $anahtarsor=$db->prepare("SHOW KEYS FROM ".$usttablo." WHERE Key_name = 'PRIMARY' ");
         $anahtarsor->execute();

            while( $agel =$anahtarsor->fetch(PDO::FETCH_ASSOC) )
              {
                  $alanca=$agel['Column_name'];
              }

if($_GET[tokenid]==''){
    
             $query=$db->prepare("select * from $usttablo where $alanca=? and deleted='false' ");
         $query->execute([$_GET[recordid]]);
         
                 if($query !== false)
{
            while( $formcek =$query->fetch(PDO::FETCH_ASSOC) )
              {
                $mastervalue=$formcek[$masterfield];
              }
}
    
}else{
    $mastervalue=$_GET[tokenid];
}

    
    
}


if ($masterfield!='')
{
  if ($formid!='611' && $formid!=='256')
  {


    if ($mastervalue!='')
    {
        $filtre=$filtre." and $detailfield='".$mastervalue."' and $tablosu.deleted='false'   ";
    }
    
    if ($mastervalue=='')
    {
        $filtre=$filtre." and $detailfield='".$mastervalue."' and $tablosu.deleted='false' ";
    }
  }

  if ($formid=='256')
  {


    if ($mastervalue!='')
    {
        $filtre=$filtre." and $tablosu.$detailfield='".$mastervalue."' and $tablosu.deleted='false'   ";
    }
    
    if ($mastervalue=='')
    {
        $filtre=$filtre." and $tablosu.$detailfield='".$mastervalue."' and $tablosu.deleted='false' ";
    }
  }


  if ($formid=='611')
  {


    if ($mastervalue!='')
    {
        $filtre=$filtre." and $detailfield='".$mastervalue."' ";
    }
    
    if ($mastervalue=='')
    {
        $filtre=$filtre." and $detailfield='".$mastervalue."' ";
    }
  }



}

// fırsat kalemleri alt tablosu olan tabloda kayıtlar çoklu geldiği için bu yapıldı
if($formid=='412'){
  $filtre=$filtre." group by teklif_kalemleri.index_teklif_kalemleri";
}


if($formid=='516'){
  $filtre=$filtre." group by donemselgiderler.index_donemselgiderler";
}

if($formid=='642'){
  $filtre=$filtre." order by uretimpaletleri.index_uretimpaletleri desc";
}

// mamul kartları formundaki operasyonlar menüsünde operasyon sıralaması
if($formid=='257'){
  $filtre=$filtre."     ORDER BY case when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','KİT HAZIRLAMA' )."' then 1
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TOZ KARIŞTIRMA' )."' then 2
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TOZ DOLUM VE PAKETLEME' )."' then 3
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TAŞIMA' )."' then 4
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','KALİTE KONTROL ' )."' then 5

                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','SIVI KARIŞTIRMA' )."' then 2
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','SIVI DOLUM VE PAKETLEME' )."' then 3
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TAŞIMA' )."' then 4
                  when prosesler.prosestanimi = '".iconv('UTF-8','ISO-8859-9','KALİTE KONTROL ' )."' then 5
                end asc";
}
// üretim emirleri kartları formundaki iş emrirleri menüsünde operasyon sıralaması
if($formid=='445'){
  $filtre=$filtre."    ORDER BY case when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','KİT HAZIRLAMA' )."' then 1
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TOZ KARIŞTIRMA' )."' then 2
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TOZ DOLUM VE PAKETLEME' )."' then 3
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TAŞIMA' )."' then 4
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','KALİTE KONTROL ' )."' then 5

  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','SIVI KARIŞTIRMA' )."' then 2
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','SIVI DOLUM VE PAKETLEME' )."' then 3
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','TAŞIMA' )."' then 4
  when uretimprosesi.prosestanimi = '".iconv('UTF-8','ISO-8859-9','KALİTE KONTROL ' )."' then 5
end asc";
}


$sql=$sql.$filtre.$grup;

 if ($islemmenu!="")

 {

	 

	



$islemmenu=str_replace("tutars",$okun[odenecek],str_replace("kayitidsi",$anahtars,$islemmenu));	 

	 

 }

 

 if ($islemmenu=="")

 {

 if ($bagliformid==""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{



   $islemmenu=$islemmenu.'<a href="index.php?page_id=editrecord&menu_id='.$_GET[formid].'&recordid='.$anahtars.'" title="" data-original-title="Değiştir"><button class="btn btn-default btn-icon-anim btn-square"><i class="fa fa-pencil"></i></button></a><a href="#" id="menu_id='.$_GET[formid].'&recordid='.$anahtars.'" class="tip" data-original-title="Sil"><button class="btn btn-danger btn-icon-anim btn-square"><i class="icon-trash"></i></button></a>';


												
												if ($_SESSION[superkullanici]=='E'||$_SESSION[tasarimyetkisi]=='E')
												{
												 
												    
												     $islemmenu=$islemmenu.'<a class="inline-block" data-effect="fadeOut" href="index.php?page_id=listings&menu_id=199&tasarimid='.$anahtars.'"><button type="button" class="btn btn-primary btn-square"><i class="icon-settings"></i></button></a>
										<a class="inline-block" href="index.php?page_id=design&tasarimid="'.$_GET[formid].'" title="'.$_GET[formid].'" data-effect="fadeOut">
											<button type="button" class="btn btn-default btn-square"><i class="icon-folder"></i></button>
										</a>';
												    
												}
							





}



if ($bagliformid!=""&&($_SESSION["oturumturu"]!="isletme"||$_GET[menu_id]=="66")&&$islemyok=="")

{



	

  $islemmenu=$islemmenu.'<a href="index.php?page_id=editrecord&menu_id='.$_GET[formid].'&recordid='.$anahtars.'" title="" data-original-title="Değiştir"><i class="s12 icomoon-icon-pencil"></i></a>';

  

}

 





 if ($tablosu!='paketlerimson'&&$islemyok=="") 

 {  

 

		  

                    $islemmenu=$islemmenu.'<a href="#" id="menu_id='.$_GET[formid].'&recordid='.$anahtars.' class="tip" data-original-title="Sil"><i class="s12 icomoon-icon-remove-3"></i></a>';



  }


 




 

 

 if ($tablosu=='cariler'&&$islemyok=="") 

 {


 $islemmenu=$islemmenu.'<a href="index.php?page_id=altsayfa&menu_id=169&recordid=cariindex" id="menus_id='.$_GET[formid].'&recordid='.$anahtars.'"  data-original-title="Hesap Kartı"><button type="button" class="btn btn-default">Hesap Kartı</button></a>';



 } 



 

 




}



$pos = strpos($sql, ",");



  $sql=str_replace(" from $tablosu", ",$anahtars as id,$renklendirme from $tablosu", $sql);
  
 if ($groupby!='')
 {
  $sql=$sql." ".$groupby; 
 }
 
 
 if ($_GET[fiyatgrubu]!='')
 {
     
     
    
      $sql=str_replace("and fiyatlar.fiyattipi='TDB'", "and fiyatlar.fiyattipi='".$_GET['fiyatgrubu']."'", $sql);
  
 }
 


if ($_GET[formid]=='786'||$_GET[formid]=='789')
{
  $dc=$db->prepare("set @kumulatif=0.0");  
  $dc->execute();
}



   $dc=$db->prepare($sql);
   
   


       $dc->execute();                                    
    $rows = array();
               if($dc !== false)
{

       $kayitlar=$dc->fetchAll(PDO::FETCH_ASSOC);

               echo json_formgeir($kayitlar);
} 


    }    
    
    
?>