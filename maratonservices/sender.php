<?php
 	


     ini_set('display_errors', 0);
     error_reporting(E_ERROR | E_WARNING | E_PARSE); 
     
     ob_start();
     
     if (!isset($_SESSION)) {
             @session_name("asalyapi");
     
       @session_start();
     }
     

     header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

     
     function calculate_distance($lat1, $lat2) 
     { 
      
       $konumx=$lat1;
       $konumy=$lat2;
       
       
       
       $request = file_get_contents("https://maps.googleapis.com/maps/api/distancematrix/json?origins=".$konumx."&destinations=".$konumy."&key=AIzaSyBvay_COJS9vnq2jxhTJ4GHILaa_DoMHs0");
       $data = json_decode( $request, true );
       $miles = $data['rows'][0]['elements'][0]['distance']['value'];
       
     
     return $miles;
     
     }
     
     
     $form_id=$_GET[form_id];
     $form_id=$_GET[form_id];
     
     
     $username=$_SESSION[user_id];
     
     
     
     
     $kayitid=$_GET[recordid];
     
     
     $alanca=$_GET[alanadi];
     
     
     date_default_timezone_set("Turkey");
     
     
     
     $zaman=date("H:i:s");
     
     
     
     
     
     $tarih=date("Y-m-d");
     
     
     
     
     
     
     
     
     
     
     
     function degistir($veri)
     
     
     {
     
     
     
     
     
     $dilimler = explode("/", $veri);
     
     
     
     
     
     $degerim=str_replace("--","",$dilimler[2]."-".$dilimler[1]."-".$dilimler[0]);
     
     
     return $degerim;
     
     
     }
     
     
     
     
     
     
     
     function degistir2($veri)
     
     
     {
     
     
     
     
     
     $dilimler = explode(".", $veri);
     
     
     
     
     
     
     
     
     return $veri;
     
     
     }
     
     
     
     
     
     
     
     
       function sifre_uret($uzunluk) {
     
     
        
     
     
                   $karakterler = "abcdefghijklmnopqrstuvwxyz1234567890";
     
     
        
     
     
                   $karakter_sayi = strlen($karakterler);
     
     
     
     
     
                  
     
     
     
     
     
                   for ($ras = 0; $ras <$uzunluk; $ras++) {
     
     
       
     
     
                       $rakam_ver = rand(0,$karakter_sayi-1);
     
     
        
     
     
                       $sifre_ver .= $karakterler[$rakam_ver];
     
     
       
     
     
                   }
     
     
       
     
     
                   return $sifre_ver;
     
     
      
     
     
               }  
     
     
     
     
     
     
     
     
     
     
     
     include 'baglanti.php';
     
     
     
     if($form_id=='489'){
               $sql ="select * from kullanicilar where tanimlidashboard='3' ";
       $eklece=mysqli_query($connection,$sql);
       while($ekle = mysqli_fetch_assoc($eklece)){
     $ek= "INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('Information','".iconv( "UTF-8","ISO-8859-9","Maliyet Analizi Oluşturuldu")."','$tarih','$saat','','','".$ekle[user_indeks]."')";
      mysqli_query($connection,$ek);
       }
     }
     
     if($form_id=='231'){
              $sql ="select * from kullanicilar where tanimlidashboard='5' ";
       $eklece=mysqli_query($connection,$sql);
       while($ekle = mysqli_fetch_assoc($eklece)){
     $ek= "INSERT INTO bildirimler(bildirimturu, bildirimmetni, olusturmatarihi, olusturmasaati, okundu, okunmazamani, bildirimsahibi) VALUES ('Information','".iconv( "UTF-8","ISO-8859-9","Veri Dağıtım Formu Oluşturuldu")."','$tarih','$saat','','','".$ekle[user_indeks]."')";
      mysqli_query($connection,$ek);
       }
     
     }
     
     
     
     
     
     $sqlim="select * from formlar where form_index=$form_id";
     
     
     $sorgusu=mysqli_query($connection,$sqlim);
     
     
     
     
     
     
     
     
     
     while ($oku=mysqli_fetch_assoc($sorgusu))
     
     
     {
     
     
     
     
     
     $tablosu=$oku[tablosu];
     
     
     $formtanimi=$oku[formtanimi];
     
     
     if ($kayitid!="")
     {
         
                                                         $sqlcs="SHOW INDEX FROM $tablosu WHERE Key_name = 'PRIMARY'";
                                                         
                                                         $sorcun=mysqli_query($connection,$sqlcs);
                                                         
                                                         while ($yokn=mysqli_fetch_assoc($sorcun))
                                                         {
                                                             
                                                             $alancak=$yokn[Column_name];
                                                             
                                                             
                                                         }
     }
     
     
     
     
     
     $sqls="show table status from sorucevap where name='$oku[tablosu]'";
     
     
     
     
     
     $sorgulattir=mysqli_query($connection,$sqls);
     
     
     
     
     
     
     
     
     while ($okuma=mysqli_fetch_assoc($sorgulattir))
     
     
     {
     
     
     
     
     
     
     
     
     $otosayi=$okuma[Auto_increment];
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     $sqlc="select * from formalanlari where form_index='$oku[form_index]' and alanadi<>'' and kayitformu=1 order by alansirasi asc";
     
     $sorgusuz=mysqli_query($connection,$sqlc);
     
     
     
     
     
     $i=0;
     
     
     
     
     
     $valuesorgusu='';
     
     
     $alansorgusu='';
     
     
     
     
     
     
     
     
     
     
     
     while ($okusana=mysqli_fetch_assoc($sorgusuz))
     
     
     {
     
     
         
     
     
     
     
     
     
     
     
     $alanadi=$okusana[alanadi];
     
     
     
     
     
     
     
     
     if ($alanadi=='kararno')
     
     
     {
     
     
     
     
     
     $kararno=str_replace("--","",$_POST[$alanadi]);
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     $alantanimi=$okusana[alanyazisi];
     
     
     $alanturu=$okusana[verigiristuru];
     
     
     $yol='';
     
     
     
     
     
     
     
     
     
     
     
     if ($okusana[verigiristuru]<>'')
     
     
     {
     
     
     
     if ($okusana[verigiristuru]=='File(PDF)')
     
     {
     
         
     
         $deger=sifre_uret(10).".pdf";
     
         
     
         
     
      
     
     $kaynakdosya = $_POST[$alanadi]; 
     
     
     
     
     
     
     
       move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
     
     
     
     
     
     
     
         //  move_uploaded_file($_FILES["$fileveri"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
         if ($_FILES["$alanadi"]["tmp_name"]!=null)
         {
         
         $yol=$oku[tablosu].'/'.$deger; 
        }
     
     }
     
     
     
     
     if ($okusana[verigiristuru]=='File(MP4)')
     
     
     {
     
     
         
     
     
         $deger=sifre_uret(10).".mp4";
     
     
         
     
     
         
     
     
      
     
     
     $kaynakdosya = $_POST[$alanadi]; 
     
     
     
     
     
     
     
     
     
     
     
       move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
         //  move_uploaded_file($_FILES["$fileveri"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
     
         if ($_FILES["$alanadi"]["tmp_name"]!=null)
         {
         
         $yol=$oku[tablosu].'/'.$deger; 
        }
     
     
     
     
     }
     
     if ($okusana[verigiristuru]=='File(GIF)')
     
     
     {
     
     
         
     
     
         $deger=sifre_uret(10).".gif";
     
     
         
     
     
         
     
     
      
     
     
     $kaynakdosya = $_POST[$alanadi]; 
     
     
     
     
     
     
     
     
     
     
     
       move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
         //  move_uploaded_file($_FILES["$fileveri"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
         if ($_FILES["$alanadi"]["tmp_name"]!=null)
         {
         
         $yol=$oku[tablosu].'/'.$deger; 
        }
     
     
     }
     
     if ($okusana[verigiristuru]=='File(PNG)')
     
     
     {
     
     
         
     
     
         $deger=sifre_uret(10).".png";
     
     
         
     
     
         
     
     
      
     
     
     $kaynakdosya = $_POST[$alanadi]; 
     
     
     
     
     
     
     
     
     
     
     
       move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
         //  move_uploaded_file($_FILES["$fileveri"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
         if ($_FILES["$alanadi"]["tmp_name"]!=null)
         {
         
         $yol=$oku[tablosu].'/'.$deger; 
        }
     
     
     
     
     }
     
     
     
     if ($okusana[verigiristuru]=='File(JPG)')
     
     
     {
     
     
         
     
         echo "TT";
         $deger=sifre_uret(10).".jpg";
     

        $kaynakdosya = $_POST[$alanadi]; 
     
        move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
         //  move_uploaded_file($_FILES["$fileveri"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
         if ($_FILES["$alanadi"]["tmp_name"]!=null)
         {
         
         $yol=$oku[tablosu].'/'.$deger; 
        }
     
     
     
     
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     if ($okusana[verigiristuru]=='File(TIFF)')
     
     
     {
     
     
     
     
     
     if ($_FILES["$alanadi"]["size"]>0)
     
     
     {
     
     
     
     
     
     $deger=sifre_uret(10).'.tiff';
     
     
     
     
     
           move_uploaded_file($_FILES["$alanadi"]["tmp_name"],"$oku[tablosu]/" .$deger);
     
     
     
     
           if ($_FILES["$alanadi"]["tmp_name"]!=null)
           {
           
           $yol=$oku[tablosu].'/'.$deger; 
          }
     
     
     
     }
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     if ($okusana[zorunlu]=='Trues')
     
     
     {
     
     
     
     
     
     
     
     
     
     
     
     if ($_POST[$alanadi]=='')
     
     
     {
     
     
     $hata=$alantanimi." Boş bırakılamaz";
     
     
     }
     
     
     }
     
     
     
     
     
     
     
     
     if ($i==0)
     
     
     {
     
     
     
     
     
     
     if ($alanturu<>'File(JPG)'&&$alanturu<>'File(PDF)'&&$alanturu<>'File(TIFF)'&&$alanturu<>'File(PNG)'&&$alanturu<>'File(GIF)'&&$alanturu<>'File(MP4)') 
     
     
     {
     
     
     
     
     if ($okusana[verigiristuru]!='Date'&&$okusana[verigiristuru]!='Multiselect'&&$okusana[verigiristuru]!='Secimlis')
     
     
     {
     
     
     $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";
     
     
     $alansorgusu=$alanadi;
     
     
     if ($okusana[anahtaralan]!='True')
     
     
     {
     
     if ($okusana[verigiristuru]!='Textarea')
     {
     $updatesorgusu="SET $alanadi='".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";
     
     if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
     {
     
     $updatesorgusu="SET $alanadi='".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."'";
     }
     }
     
     
     if ($okusana[verigiristuru]=='Textarea')
     {
     $updatesorgusu="SET $alanadi=\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."\"";
     
     if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
     {
     
     $updatesorgusu="SET $alanadi=\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."\"";
     }
     }
     
     
     }
     
     
     
     
     
     if ($okusana[anahtaralan]=='True')
     
     
     {
     
     
     $i=-1;
     
     
     }
     
     
     }
     
     
     
     
     
     
     if ($okusana[verigiristuru]=='Multiselect'||$okusana[verigiristuru]=='Secimlis')
     
     {
     
     $konum = strpos($_POST[$alanadi], "|");
     
     
     if ($konum== true) {
         
         
         
         $degera=str_replace("|", ";", degistir($_POST[$alanadi]));
         
         
      $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
         
     }
     
     else
     
     if (count($_POST[$alanadi])==1||count($_POST[$alanadi])==0) {
         
         
         $degera=str_replace("|", ";", degistir($_POST[$alanadi][0]));
         
         
      $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
           $updatesorgusu=" set $alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($degera))."'";
     
     }
     else
     
     
     if ($konum == false&&count($_POST[$alanadi])>1) {
     
     
     $verisi="";
          for($i=0;$i<=count($_POST[$alanadi]);$i++){
     
           if ($verisi!='')
          {
              
              if ($_POST[$alanadi][$i]!='')
              {
              
              $verisi=$verisi.";".$_POST[$alanadi][$i]; 
              }
          }
          
          if ($verisi=='')
          {
         $verisi=$_POST[$alanadi][$i];
          }
          
       }
       
       $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",$verisi)."'";
       $updatesorgusu=" set $alanadi='".iconv( "UTF-8","ISO-8859-9",$verisi)."'";
     
     }
     
     
     
     
     
     
     $alansorgusu=$alanadi;
     
     
     
     
     }
     
     
     
     
     
     
     
     if ($okusana[verigiristuru]=='Date')
     
     
     {
     
     
     $valuesorgusu="'".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";
     
     
     $alansorgusu=$alanadi;
     
     
     if ($okusana[anahtaralan]!='True')
     
     
     {
     
     $updatesorgusu="SET $alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";
     
     
     
     
     
     }
     
     
     
     
     
     if ($okusana[anahtaralan]=='True')
     
     
     {
     
     
     $i=-1;
     
     
     }
     
     
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     }
     
     
     
     
     
     if ($alanturu=='File(JPG)'||$alanturu=='File(PDF)'||$alanturu=='File(TIFF)'||$alanturu=='File(PNG)'||$alanturu=='File(PNG)'||$alanturu=='File(MP4)') 
     
     
     {
     
     
     
     
     
     if ($yol<>'')
     
     
     {
     
     
     $valuesorgusu="'".$yol."'";
     
     
     $alansorgusu=$alanadi;
     
     
     
     if (file_exists($yol)) {
     
     $updatesorgusu="SET $alanadi='".$yol."'";
     }
     
     if (!file_exists($yol)) {
     
     $updatesorgusu="SET $alanadi=$alanadi";
     }
     
     
     
     }
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     }
     
     
     
     
     
     if ($i>0)
     
     
     {
     
     
     if ($alanturu<>'File(JPG)'&&$alanturu<>'File(PDF)'&&$alanturu<>'File(TIFF)'&&$alanturu<>'File(PNG)'&&$alanturu<>'File(GIF)'&&$alanturu<>'File(MP4)') 
     
     
     {
     
     
     
     
     
     
     
     
     if ($okusana[verigiristuru]!='Date'&&$okusana[verigiristuru]!='Multiselect'&&$okusana[verigiristuru]!='Secimlis')
     
     
     {
     
     
     
     if ($okusana[verigiristuru]!='Textarea')
     {
     
     if ($alanadi!='mesaj'||$_GET[form_id]!='53')
     {
     
     $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";
     }
     
     if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
     {
     $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."'";
     
     }
     }
     
     
     if ($okusana[verigiristuru]=='Textarea')
     {
     
     if ($alanadi!='mesaj'||$_GET[form_id]!='53')
     {
     
     $valuesorgusu=$valuesorgusu.",\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."\"";
     }
     
     if ($alanadi=='mesaj'&&$_GET[form_id]=='53')
     {
     $valuesorgusu=$valuesorgusu.",\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])." ".$_SESSION["adi"]."\"";
     
     }
     }
     
     
     
     $alansorgusu=$alansorgusu.','.$alanadi;
     
     
     
     
     
     if ($alanadi=="komisyontesekkulu")
     
     
     {
     
     
     $komisyontesekkulu=$_POST[$alanadi];
     
     
     
     
     
     }
     
     
     
     
     
     if ($alanadi=="imzametni")
     
     
     {
     
     
     $imzametni=$_POST[$alanadi];
     
     
     }
     
     
     
     
     
     if ($okusana[anahtaralan]!='True')
     
     
     {
     
     if ($okusana[verigiristuru]=='Textarea')
     {
     $updatesorgusu=$updatesorgusu.','."$alanadi=\"".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."\"";
     }
     
     
     if ($okusana[verigiristuru]!='Textarea')
     {
     $updatesorgusu=$updatesorgusu.','."$alanadi='".iconv( "UTF-8","ISO-8859-9",$_POST[$alanadi])."'";
     }
     
     
     }
     
     
     }
     
     
     
     
     
     if ($okusana[verigiristuru]=='Multiselect'||$okusana[verigiristuru]=='Secimlis')
     
     {
     
     $konum = strpos($_POST[$alanadi], "|");
     
     
     if ($konum== true) {
         
         
         
         $degera=str_replace("|", ";", degistir($_POST[$alanadi]));
         
         
      $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
         
     }
     
     else
     
     if (count($_POST[$alanadi])==1||count($_POST[$alanadi])==0) {
         
         
         $degera=str_replace("|", ";", degistir($_POST[$alanadi][0]));
         
         
      $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$degera)."'";    
           $updatesorgusu=$updatesorgusu.",$alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($degera))."'";
     
     }
     else
     
     
     if ($konum == false&&count($_POST[$alanadi])>1) {
     
     
     $verisi="";
          for($i=0;$i<=count($_POST[$alanadi]);$i++){
     
           if ($verisi!='')
          {
              
              if ($_POST[$alanadi][$i]!='')
              {
              
              $verisi=$verisi.";".$_POST[$alanadi][$i]; 
              }
          }
          
          if ($verisi=='')
          {
         $verisi=$_POST[$alanadi][$i];
          }
          
       }
       
       $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",$verisi)."'";
       $updatesorgusu=$updatesorgusu.",$alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($verisi))."'";
     
     }
     
     
     
     
     
     
     $alansorgusu=$alansorgusu.','.$alanadi;
     
     
     
     
     }
     
     
     
     
     if ($okusana[verigiristuru]=='Date')
     
     
     {
     
     
     $valuesorgusu=$valuesorgusu.",'".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";
     
     
     
     
     
     $alansorgusu=$alansorgusu.','.$alanadi;
     
     
     
     
     
     if ($alanadi=="komisyontesekkulu")
     {
     
     
     $komisyontesekkulu=$_POST[$alanadi];
     
     
     
     
     
     }
     
     
     
     
     
     if ($alanadi=="imzametni")
     {
     
     
     $imzametni=$_POST[$alanadi];
     
     
     }
     
     
     
     
     
     if ($okusana[anahtaralan]!='True')
     
     
     {
     
     
     $updatesorgusu=$updatesorgusu.','."$alanadi='".iconv( "UTF-8","ISO-8859-9",degistir($_POST[$alanadi]))."'";
     
     
     }
     
     
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     }
     
     
     
     
     
     if ($alanturu=='File(JPG)'||$alanturu=='File(PDF)'||$alanturu=='File(TIFF)'||$alanturu=='File(PNG)'||$alanturu=='File(GIF)'||$alanturu=='File(MP4)') 
     
     
     {
     
     
     if ($yol<>'')
     
     
     {
     
     
     if (file_exists($yol)) {
     
     $valuesorgusu=$valuesorgusu.",'".$yol."'";
     
     
     $alansorgusu=$alansorgusu.','.$alanadi;
     
     
     
     
     
     if ($okusana[anahtaralan]!='True')
     
     
     {
     
     
     $updatesorgusu=$updatesorgusu.','."$alanadi='".$yol."'";
     
     
     }
     
     
     }
     
     
     }
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     }
     
     
     }
     
     
     
     
     
     
     
     
     $i=$i+1;
     
     
     }
     
     
     
     
     
     
     
     
     $alanca=$_GET[alanca];
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     if ($kayitid=='')
     {
         
     
     //kardeşim
     
     if ($_GET[form_id]!="108")
     {
         
         
      
         $notif = mysqli_query($connection,"select * from bildirimkurallari where olay='".iconv( "UTF-8","ISO-8859-9","Kayıt Ekleme")."' ");
     while($notificat=mysqli_fetch_assoc($notif)){
         
         $deger1=$notificat[deger1];
         $deger2=$notificat[deger2];
         $deger3=$notificat[deger3];
         $deger4=$notificat[deger4];
         $bildirimtext = $notificat[bildirimtext];
         $bildirimunvan = $notificat[departmanadi];
         $bildirimkisi = $notificat[bildirimkisi];
         
         if($_GET[form_id]==$notificat[formadi]){
             
             if($bildirimunvan!=''){
                         $soc =mysqli_query($connection,"select * from kullanicilar where unvani='".$bildirimunvan."' ");
          
                             while($yet = mysqli_fetch_assoc($soc)){
                                 $id = $yet[user_indeks];
                                        
                                             $cc = $_POST[$deger1];
                                             $cx = $_POST[$deger2];
                                             $cz = $_POST[$deger3];
                                             $cy = $_POST[$deger4];
                                             
                                        
                                         $eski   = array("[deger1]", "[deger2]", "[deger3]","[deger4]");
                                         $yeni = array($cc,$cx,$cz,$cy);
                                          
                                         $newphrase = str_replace($eski,$yeni, $bildirimtext);
                     
                                 $innoti = mysqli_query($connection,"insert into bildirimler values(NULL,'Bilgi','$newphrase','$tarih','$zaman','','','$id')");
                   
                             }
                                 
                             }
             
             
             else{
     
                             $dilimler = explode(";",$bildirimkisi);
                            for($i=0;$i<count($dilimler);$i++){
                                  $soc = mysqli_query($connection,"select * from kullanicilar where username='".$dilimler[$i]."' ");
                                  while($yet = mysqli_fetch_assoc($soc)){
                                 $id = $yet[user_indeks];
                                        
                                             $cc = $_POST[$deger1];
                                             $cx = $_POST[$deger2];
                                             $cz = $_POST[$deger3];
                                             $cy = $_POST[$deger4];
                                     
                                        
                                         $eski   = array("[deger1]","[deger2]", "[deger3]","[deger4]");
                                         $yeni = array($cc,$cx,$cz,$cy);
                                          
                                         $newphrase = str_replace($eski,$yeni, $bildirimtext.'--'.$notificat[formadi]);
                     
                                 $innoti = mysqli_query($connection,"insert into bildirimler values(NULL,'Bilgi','$newphrase','$tarih','$zaman','','','$id')");
                   
                             }
                            }
                             }
                             
             }
      
         }
        
     $sorgu="insert into $oku[tablosu] ($alansorgusu) values(".$valuesorgusu.")";
     
     }
     
     if ($_GET[form_id]=="108")
     {
     $sorgu="insert into $oku[tablosu] ($alansorgusu) values(".iconv( "UTF-8","ISO-8859-9",$valuesorgusu).")";
     
     
     if ($_POST['tumunegonder']!='')
     {
     $sqlyes="select * from mesajrehberi where sehir='".iconv( "UTF-8","ISO-8859-9",$_POST['tumunegonder'])."'";
     $sorgulaman=mysqli_query($connection,$sqlyes);
     
     while ($okut=mysqli_fetch_assoc($sorgulaman))
     {
     $numaralar=$numaralar.";".$okut['telefonu'];
     }
     
         
     }
     $sorgu=str_replace('##',$numaralar,$sorgu);
     }
     
     
     
     
     if ($tablosu=='paketlerimson')
     
     {
         
         $sqlca="select * from firmalar where firmakodu='$_POST[firmaid]'";
         $sorbanasi=mysqli_query($connection,$sqlca);
         while ($okys=mysqli_fetch_assoc($sorbanasi))
         {
             $lat2=$okys[konumx].",".$okys[konumy];
         }
         
         $mesafehesabi=calculate_distance($_POST["konumx"].",".$_POST["konumy"],$lat2);
         $valuesorgusu=$valuesorgusu.",".$mesafehesabi;
         
     $sorgu="insert into $oku[tablosu] ($alansorgusu,mesafe) values(".iconv( "UTF-8","ISO-8859-9",$valuesorgusu).")";
         
         if ($_POST["adresekleme"]=="on")
         {
             
             $sqlims="show table status from $veritabani where name='paketlerimson'";
     
     $sorgulas=mysqli_query($connection,$sqlims);
     
     while ($oka=mysqli_fetch_assoc($sorgulas))
     {
     
     $sira=$oka["Auto_increment"];
     
     
     }
             
             
             if ($sira<>'')
     {
     
     $verim=($sira*1);
     
     if ($verim<10)
     {
     $degerc='0000'."$verim";
     }
     
     if ($verim>9&&$verim<100)
     {
     $degerc='000'."$verim";
     }
     
     if ($verim>99&&$verim<1000)
     {
     $degerc='00'."$verim";
     }
     
     if ($verim>999&&$verim<10000)
     {
     $degerc='0'."$verim";
     }
     
     
     
     $varsayilan=$degerc;
     }
             
         $sqlis="insert into adresdefteri values('','".$varsayilan."','".iconv( "UTF-8","ISO-8859-9",$_POST["teslimalacak"])."','".$_POST["telefonu"]."','".$_POST["il"]."','".$_POST["ilce"]."','".$_POST["mahalle"]."','".$_POST["caddesokak"]."','".iconv( "UTF-8","ISO-8859-9",$_POST["acikadres"])."','".$_POST["konumx"]."','".$_POST["konumy"]."','".$_SESSION["firmakodu"]."','".$_POST["eposta"]."','".iconv( "UTF-8","ISO-8859-9",$_POST["binano"])."','".iconv( "UTF-8","ISO-8859-9",$_POST["notlar"])."')";
     
         
         $sorgula=mysqli_query($connection,$sqlis); 	
         
         }
     }
     
     
     
     
     
     
     
     
     
     
     }
     
     
     
     
     
     if ($kayitid<>'')
     
     
     {
         if ($_GET[form_id]!="75")
         {
           
               $notif = mysqli_query($connection,"select * from bildirimkurallari where olay='".iconv( "UTF-8","ISO-8859-9","Kayıt Güncelleme")."' ");
     while($notificat=mysqli_fetch_assoc($notif)){
         
         $deger1=$notificat[deger1];
         $deger2=$notificat[deger2];
         $deger3=$notificat[deger3];
         $deger4=$notificat[deger4];
         $bildirimtext = $notificat[bildirimtext];
         $bildirimunvan = $notificat[departmanadi];
         $bildirimkisi = $notificat[bildirimkisi];
         
         if($_GET[form_id]==$notificat[formadi]){
             
             if($bildirimunvan!=''){
                         $soc =mysqli_query($connection,"select * from kullanicilar where unvani='".$bildirimunvan."' ");
          
                             while($yet = mysqli_fetch_assoc($soc)){
                                 $id = $yet[user_indeks];
                                        
                                             $cc = $_POST[$deger1];
                                             $cx = $_POST[$deger2];
                                             $cz = $_POST[$deger3];
                                             $cy = $_POST[$deger4];
                                     
                                        
                                         $eski   = array("[deger1]", "[deger2]", "[deger3]","[deger4]");
                                         $yeni = array($cc,$cx,$cz,$cy);
                                          
                                         $newphrase = str_replace($eski,$yeni, $bildirimtext);
                     
                                 $innoti = mysqli_query($connection,"insert into bildirimler values(NULL,'Bilgi','$newphrase','$tarih','$zaman','','','$id')");
                   
                             }
                                 
                             }
             
             
             else{
     
                             $dilimler = explode(";",$bildirimkisi);
                            for($i=0;$i<count($dilimler);$i++){
                                  $soc = mysqli_query($connection,"select * from kullanicilar where username='".$dilimler[$i]."' ");
                                  while($yet = mysqli_fetch_assoc($soc)){
                                 $id = $yet[user_indeks];
                                        
                                             $cc = $_POST[$deger1];
                                             $cx = $_POST[$deger2];
                                             $cz = $_POST[$deger3];
                                             $cy = $_POST[$deger4];
                                     
                                        
                                         $eski   = array("[deger1]", "[deger2]", "[deger3]","[deger4]");
                                         $yeni = array($cc,$cx,$cz,$cy);
                                          
                                         $newphrase = str_replace($eski,$yeni, $bildirimtext);
                     
                                 $innoti = mysqli_query($connection,"insert into bildirimler values(NULL,'Bilgi','$newphrase','$tarih','$zaman','','','$id')");
                   
                             }
                            }
                             }
                             
             }
      
         }
             
     $sorgu="update $oku[tablosu] ".$updatesorgusu." where $alancak=$kayitid";
         }
         
         if ($_GET[form_id]=="75")
         {
            
             
     $sorgu="update $oku[tablosu] ".iconv( "UTF-8","ISO-8859-9",$updatesorgusu).",kiradurumu='".iconv( "UTF-8","ISO-8859-9","Teslim Alındı")."' where $alancak=$kayitid";
         }
         
         
     
     }
     
     
     
     echo $hata;
     
     
     
     if($hata=='')
     
     
     {
     
     
     if ($tablosu=='hatlar')
     {
         
         if ($_POST[plakano]!=""&&$_POST[cihazimei]!=""&&$_POST[hatno]!="")
         {
             $sqlsa="update araclar set imeino='".$_POST[cihazimei]."' where plakano='".$_POST[plakano]."'";
             $sorgugonder=mysqli_query($connection,$sqlsa);
             
             $kod="BD,000000,05312387680#";
             
             $sqlyes="insert into emirler values('','".$_POST[hatno]."','".$kod."','','','')";
             mysqli_query($connection,$sqlyes);
             
             if ($_POST[sunucu]=='')
             {
             $kod="IP#185.17.138.15#1200#";	
             }
             
             if ($_POST[sunucu]!='')
             {
             $kod="IP#b.gps903.net#7700#";	
             }
                 $sqlyes="insert into emirler values('','".$_POST[hatno]."','".$kod."','','','')";
             mysqli_query($connection,$sqlyes);
             
         }
         
         
     }
     
     
     
     
     
     if ($tablosu=="kararlar")
     
     
     {
     
     
     $sqla="update formalanlari set varsayilan='$komisyontesekkulu' where alan_index=144";
     
     
     $sorga=mysqli_query($connection,$sqla);
     
     
     
     
     
     
     
     
     $sqla="update formalanlari set varsayilan='$imzametni' where alan_index=167";
     
     
     $sorga=mysqli_query($connection,$sqla);
     
     
     }
     
     
     
     
     
     $sorgu=str_replace("''","null",$sorgu);
     
     
 
     
     $kayitgonder=mysqli_query($connection,$sorgu);
     
     
     if ($kayitid=='')
     {
         
             $sqlcs="SHOW INDEX FROM $tablosu WHERE Key_name = 'PRIMARY'";
                                                         
                                                         $sorcun=mysqli_query($connection,$sqlcs);
                                                         
                                                         while ($yokn=mysqli_fetch_assoc($sorcun))
                                                         {
                                                             
                                                             $alancak=$yokn[Column_name];
                                                             
                                                             
                                                         }
         
         $sql="select * from $tablosu order by $alancak desc limit 1";
         $sorbanas=mysqli_query($connection,$sql);
         while($getir=mysqli_fetch_assoc($sorbanas))
         {
             $gelecekid=$getir[$alancak];
             
         }
         
         
         echo $gelecekid;
         
         $sqlye="select * from bloklar left join formlar on bloklar.bagliformindex=formlar.form_index where formindex=$form_id and bloklar.turu='Liste' order by bloklar.sirasi asc,bokindex asc";
     
     $sorgulakardes=mysqli_query($connection,$sqlye);
     
     
     while ($ykn=mysqli_fetch_assoc($sorgulakardes))
     
     {	
         
        mysqli_query($connection,"update ".$ykn['tablosu']." set ".$ykn['detailfield']."='".$gelecekid."' where ".$ykn['detailfield']."='-".$_GET["userid"]."'"); 
         
         
     }
         
         
     }
     
     
     if ($tablosu=="sozlesmeler")
     {
         $sqlsaq="delete from kiralar where sozlesmeno='".$_POST[sozlesmeno]."'";
         $gonder=mysqli_query($connection,$sqlsaq);
         
     
         if ($_POST["sozlesmeturu"]=='1 Aylık')
         {
             $taksit=1;
             
         }
         
             if ($_POST["sozlesmeturu"]=='3 Aylık')
         {
             $taksit=3;
             
         }
         
             if ($_POST["sozlesmeturu"]=='6 Aylık')
         {
             $taksit=6;
             
         }
         
             if ($_POST["sozlesmeturu"]=='1 Yıllık')
         {
             $taksit=12;
             
         }
         
         if ($_POST["sozlesmeturu"]=='Günlük')
         {
             $taksit=1;
             
         }
         
         if ($_POST["faturalandirma"]=="Aylık")
         {
             
             $ay = date("m",strtotime($_POST[sozlesmebaslangici]));
             $yil = date("Y",strtotime($_POST[sozlesmebaslangici]));
             
             $ilktaksit=$_POST[sozlesmebaslangici];
             
             
         
             for ($i=1;$i<=$taksit;$i++)
             {
             
         
             $ay = date("m",strtotime($ilktaksit));
             $yil = date("Y",strtotime($ilktaksit));
             
         
                 $time = strtotime($ilktaksit);
                 $odenme=0;
                 $vadetarihi=date("Y-m-d", strtotime("+30 days", $time));
                 $siparisno=$_POST[sozlesmeno]."(".$i."/".$taksit.")";
                 $odenecek=$_POST[sozlesmebedeli];
                     
                     $sqlgonder="INSERT INTO `kiralar` (`index_kiralar`, `kirano`, `aciklamasi`, `ilgilifirma`, `sozlesmeno`, `yili`, `ilgiliay`, `odenecek`, `odenen`, `durumu`, `vadetarihi`, `olusmatarihi`) VALUES (NULL, '$i', '$siparisno', '$_POST[ilgilifirma]', '$_POST[sozlesmeno]', '$yil', '$ay', '$odenecek', '0', '".iconv( "UTF-8","ISO-8859-9","Ödenmedi")."', '$vadetarihi', '$tarih')";
     
                 mysqli_query($connection,$sqlgonder);
                 $ilktaksit = date("Y-m-d", strtotime("+1 month", $time));
                 
                 
             }
             
         }
         
         
             if ($_POST["faturalandirma"]=="Yıllık")
         {
             
             $ay = date("M",strtotime($_POST[baslamatarihi]));
             $yil = date("Y",strtotime($_POST[baslamatarihi]));
             
             $ilktaksit=$yil."-".$ay."-".$_POST[odemegunu];
             
                 $time = strtotime($ilktaksit);
                 $odenme=0;
                 $sonodeme=date("Y-m-d", strtotime("+5 days", $time));
                 $siparisno=$_POST[sozlesmeno]." yıllık ödeme";
                 $sqlgonder="insert into kiralar values('','".$_POST[odemetutari]."','".$sonodeme."','".$ilktaksit."','".$_POST[sozlesmeno]."','".$odenme."','".$_POST[ilgilifirma]."','".$siparisno."')";
                 mysqli_query($connection,$sqlgonder);
                 $ilktaksit = date("Y-m-d", strtotime("+1 month", $time));
                 
             
         }
     
         
         
     }
     
     
     
     
     
     if ($kayitid==''&&$tablosu=='rezervasyonlar')
     {
         
         
         $sqlye="select * from kullanicilar where yetkilituru like '%netici%' and subesi='".iconv( "UTF-8","ISO-8859-9",$_SESSION[sube])."'";
         $sorgula=mysqli_query($connection,$sqlye);
         
         while ($okut=mysqli_fetch_assoc($sorgula))
         {
             
             if ($_POST[toplantisalonu]!='')
             {
                 
                 $bildirimmetin=$_SESSION[adi]." isimli kullanıcı ".$_POST[toplantisalonu]." numaralı salonu ".$_POST[tarihi]." tarihi Saat:".$_POST[saati]." te kullanmak için ".$_POST[suresi]." saatlik talep oluşturdu.";
             }
             
             if ($_POST[studyo]!='')
             {
                 $bildirimmetin=$_SESSION[adi]." isimli kullanıcı ".$_POST[studyo]." numaralı stüdyoyu ".$_POST[tarihi]." tarihi Saat:".$_POST[saati]." te kullanmak için ".$_POST[suresi]." saatlik talep oluşturdu.";
           
             }
              mysqli_query($connection,"insert into bildirimler(bildirimtarihi,bildirimsaati,bildirimturu,alici,gonderen,bildirimmetni,ilgilikodu) values('".$tarih."','".$zaman."','Rezervasyon Talebi','".$okut[username]."','".$_SESSION[username]."','".$bildirimmetin."','".$_POST[rezervno]."')");
              
              
           
              
             
         }
         
        
     }
     
     
     
     if ($kayitid==''&&$tablosu=='tekniktalepler')
     {
         
         
         $sqlye="select * from kullanicilar where (yetkilituru like '%netici%' or yetkilituru like '%Teknik%') and subesi='".iconv( "UTF-8","ISO-8859-9",$_SESSION[sube])."'";
         $sorgula=mysqli_query($connection,$sqlye);
         
         while ($okut=mysqli_fetch_assoc($sorgula))
         {
             
             
                 
                 $bildirimmetin=$_SESSION[adi]." isimli kullanıcı ".$_POST[talepkonusu]." ile ilgili teknik talep oluşturdu.";
           
              mysqli_query($connection,"insert into bildirimler(bildirimtarihi,bildirimsaati,bildirimturu,alici,gonderen,bildirimmetni,ilgilikodu) values('".$tarih."','".$zaman."','Teknik Talep','".$okut[username]."','".$_SESSION[username]."','".$bildirimmetin."','".$_POST[talepno]."')");
             
             
         
             
         }
         
        
     }
     
     if ($kayitid==''&&$tablosu=='ciktitalepleri')
     {
         
         
         $sqlye="select * from kullanicilar where (yetkilituru like '%netici%' or  yetkilituru like '%Sekreter%') and subesi='".iconv( "UTF-8","ISO-8859-9",$_SESSION[sube])."'";
         $sorgula=mysqli_query($connection,$sqlye);
         
         while ($okut=mysqli_fetch_assoc($sorgula))
         {
             
             
                 
                 $bildirimmetin=$_SESSION[adi]." isimli kullanıcı bir çıktı talebi oluşturdu.";
           
              mysqli_query($connection,"insert into bildirimler(bildirimtarihi,bildirimsaati,bildirimturu,alici,gonderen,bildirimmetni,ilgilikodu) values('".$tarih."','".$zaman."','Çıktı Talebi','".$okut[username]."','".$_SESSION[username]."','".$bildirimmetin."','".$_POST[talepno]."')");
         
             
         }
         
        
     }
     
     
     
     if ($tablosu=='siparisler2'&&$_POST['durumu']=='OK')
     {
         
         mysqli_query($connection,"update faturalar set firmaonay='B' where paytr='".$_POST['index_siparisler2']."'");
     }
     
     
     
     
     
     
     
     
     
     
     $zaman=date("H:i:s");
     
     
     $tarih=date("Y-m-d");
     
     
     
     
     
     
     
     
     
     
     
     if ($kayitid=='')
     
     
     {
     
     
     
     
     
     
     
     
     
     
     
     $den="show table status from netbulut_asalyapi where name='$oku[tablosu]'";
     
     
     $derger=mysqli_query($connection,$den);
     
     
     
     
     
     while ($okur=mysqli_fetch_assoc($derger))
     
     
     {
     
     
     $kaym=$okur[Auto_increment];
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     
     $sqlm="insert into kullaniciloglari values(NULL,'".$_SESSION["user_id"]."','$tarih','$zaman','".$oku[formtanimi]."','".iconv( "UTF-8","ISO-8859-9","Yeni Kayıt")."','$kaym','')";
     
     
     $sorgun=mysqli_query($connection,$sqlm);
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     if ($kayitid<>'')
     
     
     {
     
     
     
     
     
     
     
     
     $sqlm="insert into kullaniciloglari values(NULL,'".$_SESSION["user_id"]."','$tarih','$zaman','".$oku[formtanimi]."','".iconv( "UTF-8","ISO-8859-9","Güncelleme")."','$kayitid','')";
     
     
     $sorgun=mysqli_query($connection,$sqlm);
     
     
     }
     
     
     
     
     
     
     
     
     if (($tablosu=='mobilboard')&&($kayitid==''))
     
     
     {
     
     
     
     
     
     $sqlsc="show table status from otomofis_megacarss where name='mobilboard'";
     
     
     $sorgulaman=mysqli_query($connection,$sqlsc);
     
     
     
     
     
     
     
     
     while ($okuc=mysqli_fetch_assoc($sorgulaman))
     
     
     {
     
     
     
     
     
     $sayi=$okuc[Auto_increment];
     
     
     
     
     
     }
     
     
     
     
     
     $aal=$_POST[alici];
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     }
     
     
     
     
     
     if (($tablosu=='dilekceler')&&($kayitid==''))
     
     
     {
     
     
     
     
     
     $sqlit="select * from kullanicilar where CariTanimi='$_POST[ilgilipersonel]'";
     
     
     $sorgulat=mysqli_query($connection,$sqlit);
     
     
     
     
     
     while ($okun=mysqli_fetch_assoc($sorgulat))
     
     
     {
     
     
     $sqls="insert into mobilboard values('','Yeni Dilekçe:".$_POST[dilekcesirano]."','".$_POST[dilekcebasligi]."','".$username."','".$okun[username]."','','','".$tarih."','".$zaman."','','','','')";
     
     
     $sorgula=mysqli_query($connection,$sqls);
     
     
     
     
     
     $sqlsc="show table status from otomofisukome where name='mobilboard'";
     
     
     $sorgulaman=mysqli_query($connection,$sqlsc);
     
     
     
     
     
     while ($okuc=mysqli_fetch_assoc($sorgulaman))
     
     
     {
     
     
     
     
     
     $sayi=$okuc[Auto_increment];
     
     
     
     
     
     }
     
     
     
     
     
     $aal=$okun[username];
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     
     
     
     }
     
     
     if ($hata=='')
     {
     ?>
     
     
     
     
     
     
     
     
     <html>
     
     
     
     
     
     <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
     
     
     <meta http-equiv="Content-Language" content="tr">
     
     
     
     
     
     <title>Başarılı Kayıt</title>
     
     
     </head>
     
     
     
     
     
     <body>
     
     
     <div align="center">
     
     
             
     
     <div class="col-md-12">
     
     <?php
     
     if ($form_id!='171'&&$form_id!='195')
     {
         ?>
                                     <a href="index.php?page_id=altsayfa&menu_id=<?php echo $form_id; ?>"><button type="button" class="btn btn-primary waves-effect m-t-15">Listeye Dön
                                         </button></a>
                                         
                                               
     
     <?php
     }
     ?>
              <br>
                <p>Bu formda yaptığınız değişiklik başarıyla gerçekleştirildi.</p>
     <?php
     
     if (($tablosu=='faturalarim')&&($kayitid!=''))
     {
     ?>	
     <a href="index.php?menu_id=6&amp;page_id=faturagoster&amp;id=<?php echo $kayitid ?>" target="_blank"><button type="button" class="btn btn-primary mr5 mb10"><i class="fa fa-print mr5"></i>Fatura Görüntüle/Yazdır</button></a>
     
     <?php	
     }
     
     
     if (($tablosu=='faturalarim')&&($kayitid==''))
     {
     $sqlsc="show table status where name='faturalarim'";
     
     $sorgulaman=mysqli_query($connection,$sqlsc);
     
     
     
     while ($okuc=mysqli_fetch_assoc($sorgulaman))
     
     {
     
     
     
     $sayi=$okuc[Auto_increment];
     
     
     
     }	
     
     ?>
     
     <a href="index.php?menu_id=6&amp;page_id=faturagoster&amp;id=<?php echo $kayitid ?>" target="_blank"><button type="button" class="btn btn-primary mr5 mb10"><i class="fa fa-print mr5"></i>Fatura Görüntüle/Yazdır</button></a>
     
     <?php
         
     }
     
     
     if (($tablosu=='arackiralama')&&($kayitid!=''))
     {
         $sqlces="select * from musteriler where firmaid='".$_POST[firmaid]."' and tckimlikno='".$_POST[kiralayantc]."'";
         
     $sorgulakardes=mysqli_query($connection,$sqlces);	
     if (mysqli_num_rows($sorgulakardes)==0)
     {
     $sqlyes="insert into musteriler(musterino,musteriadi,musteritipi,kayittarihi,tckimlikno,vergino,ehliyetno,belgeturu,faturaedilecek,faturaadresi,nufusseri,serino,verilisnedeni,verilistarihi,soyadi,telefon,dogumtarihi,adresi,firmaid) values('".$_POST[sozlesmeno]."','".$_POST[adi]."','".$_POST[kiraturu]."','$tarih','".$_POST[kiralayantc]."','".$_POST[vergino]."','".$_POST[ehliyetno]."','".$_POST[kimlikturu]."','".$_POST[faturakesilecek]."','".$_POST[faturaadresi]."','".$_POST[belgeseri]."','".$_POST[belgeno]."','".$_POST[verilisnedeni]."','".$_POST[verilistarihi]."','".$_POST[soyadim]."','".$_POST[telefon].$_POST[telefonu]."','".$_POST[dogumtarihi]."','".$_POST[adresi]."','".$_POST[firmaid]."')";
     
     $sorgula=mysqli_query($connection,iconv( "UTF-8","ISO-8859-9",$sqlyes));
     }
     
     $sqlces="select * from musteriler where firmaid='".$_POST[firmaid]."' and tckimlikno='".$_POST[kiralayantc]."'";
     $sorgulakardes=mysqli_query($connection,$sqlces);	
     if (mysqli_num_rows($sorgulakardes)>0)
     {
         while ($okun=mysqli_fetch_assoc($sorgulakardes))
         {
     
     if ($_POST[ekodeme]!="")
     {
         
         
     
     
     
     
     if ($_POST[ekodeme]!=""&&$_POST[ekodeme]!="0")
     {
     $sqlcs="insert into carihesaphareketleri(firmaid,tarih,cari_index,tutari,hareketturu,islem_tanimi,belgeno,alacak,borc,bolge,OdemeTuru,birimi) values('".$_SESSION["user_id"]."','$tarih','".$okun[index_musteriler]."','".$_POST['ekodeme']."','Tahsilat','".iconv( "UTF-8","ISO-8859-9",$_POST[sozlesmeno]." nolu sözleşme ile kiralanan ".$_POST[aracplakano]." plakalı araç için alınan ek ödeme")."','".$_POST[sozlesmeno]."','".$_POST['ekodeme']."','0','".$_POST[aracplakano]."','".iconv( "UTF-8","ISO-8859-9",$_POST[ekodemesekli])."','".$_POST[parabirimi]."')";
     mysqli_query($connection,$sqlcs);
     }
         
     }
         }
         
     
     }
     }
     
     
     
     if (($tablosu=='arackiralama')&&($kayitid==''))
     {
         
     $sqlsc="show table status where name='arackiralama'";
     
     $sorgulaman=mysqli_query($connection,$sqlsc);
     
     
     
     while ($okuc=mysqli_fetch_assoc($sorgulaman))
     
     {
     
     
     
     $sayi=$okuc[Auto_increment];
     
     
     
     }	
     
     
     if ($sayi!="")
     {
     
     $sqlces="select * from musteriler where firmaid='".$_POST[firmaid]."' and tckimlikno='".$_POST[kiralayantc]."'";
     $sorgulakardes=mysqli_query($connection,$sqlces);	
     if (mysqli_num_rows($sorgulakardes)==0)
     {
     $sqlyes="insert into musteriler(musterino,musteriadi,musteritipi,kayittarihi,tckimlikno,vergino,ehliyetno,belgeturu,faturaedilecek,faturaadresi,nufusseri,serino,verilisnedeni,verilistarihi,soyadi,telefon,dogumtarihi,adresi,firmaid) values('".$_POST[sozlesmeno]."','".$_POST[adi]."','".$_POST[kiraturu]."','$tarih','".$_POST[kiralayantc]."','".$_POST[vergino]."','".$_POST[ehliyetno]."','".$_POST[kimlikturu]."','".$_POST[faturakesilecek]."','".$_POST[faturaadresi]."','".$_POST[belgeseri]."','".$_POST[belgeno]."','".$_POST[verilisnedeni]."','".$_POST[verilistarihi]."','".$_POST[soyadim]."','".$_POST[telefon]."','".$_POST[dogumtarihi]."','".$_POST[adresi]."','".$_POST[firmaid]."')";
     $sorgula=mysqli_query($connection,iconv( "UTF-8","ISO-8859-9",$sqlyes));
     }
     
     
     $sqlces="select * from musteriler where firmaid='".$_POST[firmaid]."' and tckimlikno='".$_POST[kiralayantc]."'";
     $sorgulakardes=mysqli_query($connection,$sqlces);	
     if (mysqli_num_rows($sorgulakardes)>0)
     {
         while ($okun=mysqli_fetch_assoc($sorgulakardes))
         {
     $sqlsil="delete from carihesaphareketleri where belgeno='".$_POST[sozlesmeno]."'";
     $gonders=mysqli_query($connection,$sqlsil);
     
     
         
     if ($_POST['anlasilantutar']!="")
     {
         
         
     $sqlcs="insert into carihesaphareketleri(firmaid,tarih,cari_index,tutari,hareketturu,islem_tanimi,belgeno,borc,alacak,bolge,birimi) values('".$_SESSION["user_id"]."','$tarih','".$okun[index_musteriler]."','".$_POST[anlasilantutar]."','Oto Kiralama','".iconv( "UTF-8","ISO-8859-9",$_POST[sozlesmeno]." nolu sözleşme ile kiralanan ".$_POST[aracplakano]." plakalı araç için kiralama bedeli")."','".$_POST[sozlesmeno]."','".$_POST[anlasilantutar]."','0','".$_POST[aracplakano]."','".$_POST[parabirimi]."')";
     mysqli_query($connection,$sqlcs);
     
     if ($_POST['odenentutar']!=""&&$_POST['odenentutar']!="0")
     {
     $sqlcs="insert into carihesaphareketleri(firmaid,tarih,cari_index,tutari,hareketturu,islem_tanimi,belgeno,alacak,borc,bolge,OdemeTuru,birimi) values('".$_SESSION["user_id"]."','$tarih','".$okun[index_musteriler]."','".$_POST['odenentutar']."','Tahsilat','".iconv( "UTF-8","ISO-8859-9",$_POST[sozlesmeno]." nolu sözleşme ile kiralanan ".$_POST[aracplakano]." plakalı araç için alınan peşinat")."','".$_POST[sozlesmeno]."','".$_POST['odenentutar']."','0','".$_POST[aracplakano]."','".iconv( "UTF-8","ISO-8859-9",$_POST[odemesekli])."','".$_POST[parabirimi]."')";
     mysqli_query($connection,$sqlcs);
     }
     
     
     if ($_POST['ekodeme']!=""&&$_POST['ekodeme']!="0")
     {
     $sqlcs="insert into carihesaphareketleri(firmaid,tarih,cari_index,tutari,hareketturu,islem_tanimi,belgeno,borc,alacak,bolge,OdemeTuru,birimi) values('".$_SESSION["user_id"]."','$tarih','".$okun[index_musteriler]."','".$_POST[ekodeme]."','Tahsilat','".iconv( "UTF-8","ISO-8859-9",$_POST[sozlesmeno]." nolu sözleşme kiralanan ".$_POST[aracplakano]." plakalı araç için teslimde alınan ek ödeme")."','".$_POST[sozlesmeno]."','0','".($_POST[ekodeme])."','".$_POST[aracplakano]."','".iconv( "UTF-8","ISO-8859-9",$_POST[ekodemesekli])."','".$_POST[parabirimi]."')";
     mysqli_query($connection,$sqlcs);
     }
         
         
     }
         }
         
     
     }
         
     }
     ?>
     <a href="index.php?menu_id=6&amp;page_id=sozlesmegoster&amp;id=<?php echo $sayi-1 ?>" target="_blank"><button type="button" class="btn btn-primary mr5 mb10"><i class="fa fa-print mr5"></i>Sözleşme Görüntüle</button></a>
         
     <a href="index.php?page_id=karekodgoster&amp;menu_id=-2&amp;telefon=<?php echo $_POST[telefon];?>"><button type="button" class="btn btn-primary mr5 mb10"><i class="fa fa-eye mr5"></i>Qrent Karekod</button></a>	
     <?php
         
     }
     ?>
     
         
                                     
     
                             
                                 </div>
     
     
     
     
     </div>
     
     
     </body>
     
     
     
     
     
     </html>
     
     
     
     
     
     
     
     
     
     
     
     <?php
     
     
     
     
     
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     }
     
     
     }
     
     
     
     
     
     ?>