<?php



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


$alanca=mysqli_field_name($sorgulat, 0);



while ($okula=mysqli_fetch_assoc($sorgulat))
{


$kayitidim=$okula[$alanca];

$sqls="delete from $okus1[tablosu] where `$alanca`=$kayitidim";

$sorguss=mysqli_query($connection,$sqls);



$zaman=date("H:i:s");
$tarih=date("Y-m-d");

$sqlm="insert into kullaniciloglari values('',$_SESSION[userid],'$tarih','$zaman','$okus1[formtanimi]','Silme',$kayitidim)";
$sorgun=mysqli_query($connection,$sqlm);

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