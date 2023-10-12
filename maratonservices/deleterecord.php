<?php

ini_set('display_errors', 0);
error_reporting(E_ERROR | E_WARNING | E_PARSE); 

ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
}

$sayfa=$_GET[menu_id];
$kayitno=$_GET[recordid];


if ($_GET[recordid]<>'')
{



include 'baglanti.php';


$sqlit="select * from formlar where form_index=$sayfa";
$sorgusuz=mysqli_query($connection,$sqlit);

$anahtartara='';

while ($okus1=mysqli_fetch_assoc($sorgusuz))
{


$sqlc="select * from $okus1[tablosu]";

$sqlcs="SHOW INDEX FROM $okus1[tablosu] WHERE Key_name = 'PRIMARY'";
													
$sorcun=mysqli_query($connection,$sqlcs);
																								
while ($yokn=mysqli_fetch_assoc($sorcun))													
{
													
$anahtars=$yokn[Column_name];
												
													
}



$sqlc=$sqlc." where `$anahtars`='".$_GET[recordid]."'";


$sorgulat=mysqli_query($connection,$sqlc);
$kayitsayisi=mysqli_num_rows($sorgulat);


if ($kayitsayisi>0)
{

$sorgulat=mysqli_query($connection,$sqlc);


while ($okula=mysqli_fetch_assoc($sorgulat))
{


$kayitidim=$okula[$alanca];
date_default_timezone_set("Turkey");

$zaman=date("H:i:s");
$tarih=date("Y-m-d");


    $notif = mysqli_query($connection,"select * from bildirimkurallari where olay='".iconv( "UTF-8","ISO-8859-9","Kayıt Silme")."' ");
while($notificat=mysqli_fetch_assoc($notif)){
    
    $deger1=$notificat[deger1];
    $deger2=$notificat[deger2];
    $deger3=$notificat[deger3];
    $deger4=$notificat[deger4];
    $bildirimtext = $notificat[bildirimtext];
    $bildirimunvan = $notificat[departmanadi];
    $bildirimkisi = $notificat[bildirimkisi];
    
    if($_GET[menu_id]==$notificat[formadi]){
        
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
                                   
                                        $cc = $okula[$deger1];
                                        $cx = $okula[$deger2];
                                        $cz = $okula[$deger3];
                                        $cy = $okula[$deger4];
                                
                                   
                                    $eski   = array("[deger1]", "[deger2]", "[deger3]","[deger4]");
                                    $yeni = array($cc,$cx,$cz,$cy);
                                     
                                    $newphrase = str_replace($eski,$yeni, $bildirimtext);
                
                            $innoti = mysqli_query($connection,"insert into bildirimler values(NULL,'Bilgi','$newphrase','$tarih','$zaman','','','$id')");
              
                        }
                       }
                        }
                        
        }
 
    }


$sqlm="insert into kullaniciloglari values(NULL,'".$_SESSION["user_id"]."','$tarih','$zaman','".$okus1[formtanimi]."','".iconv( "UTF-8","ISO-8859-9","Silme")."','$kayitno','')";
$sorgun=mysqli_query($connection,$sqlm);

$sqls="delete from $okus1[tablosu] where `$anahtars`=".$_GET[recordid];

echo $sqlm;
echo $sqls;

$sorguss=mysqli_query($connection,$sqls);





echo "

<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"400\" style=\"border: 4px solid #FF9933; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px\" background=\"img/arkaspam.png\">
	<tr>
		<td valign=\"middle\">
		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"400\" height=\"100%\">
			<tr>
				<td width=\"484\" height=\"41\" bgcolor=\"#9999FF\" align=\"center\">
				<img border=\"0\" src=\"filedelete.png\" width=\"128\" height=\"128\"></td>
			</tr>
			<tr>
				<td width=\"484\" height=\"41\" bgcolor=\"#9999FF\" align=\"center\">
				<font face=\"Tahoma\" color=\"#FFFF00\">Kayýt baþarýyla silindi</font></td>
			</tr>
			</table>
		</td>
	</tr>
<tr><td><div align=\"center\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Bekleyin, Liste Yenileniyor...</button></div>
</div></td>
</tr>
</table>

";


}


}

}

}
?>