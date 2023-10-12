<?php


include 'baglanti.php';


$tarih=date("Y-m-d");
$zaman=date("H:i:s");

$sql="select *,isemrioperasyonlari.partimiktari as planpartimiktar from isemrioperasyonlari left join malzemeler on malzemeler.index_malzemeler=isemrioperasyonlari.mamulkodu left join uretimprosesi on uretimprosesi.operasyonkodu=isemrioperasyonlari.operasyonno where index_isemrioperasyonlari>0 and index_isemrioperasyonlari=".$_GET[isemrino];
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
  $isemrino=iconv( "ISO-8859-9","UTF-8",$okut[isemrino]);  
    $malzemekodu=iconv( "ISO-8859-9","UTF-8",$okut[mamulkodu]);  
    $ureticikodu=iconv( "ISO-8859-9","UTF-8",$okut[ureticikodu]);  
    $projekodu=iconv( "ISO-8859-9","UTF-8",$okut[projekodu]);  
    $malzemeaciklamasi=iconv( "ISO-8859-9","UTF-8",$okut[malzemeaciklamasi]);  
    $isistasyonu=iconv( "ISO-8859-9","UTF-8",$okut[isistasyonu]);  
      $operasyonno=iconv( "ISO-8859-9","UTF-8",$okut[operasyonno]);  
     $kkk_kodu=iconv( "ISO-8859-9","UTF-8",$okut[kkk_kriterkodu]);  
      $kkk_aciklamasi=iconv( "ISO-8859-9","UTF-8",$okut[kkk_aciklamasi]);  
    
    $siparisaciklamasi=iconv( "ISO-8859-9","UTF-8",$okut[kkk_aciklamasi]);  
     $operasyonaciklamasi=iconv( "ISO-8859-9","UTF-8",$okut[prosestanimi]);  
    $p_hazirlik=iconv( "ISO-8859-9","UTF-8",$okut[planlananhazirlik]);  
    $kullanilan=iconv( "ISO-8859-9","UTF-8",$okut[kullanilan]);  
    $kalite=iconv( "ISO-8859-9","UTF-8",$okut[kalite]);  
    $performans=iconv( "ISO-8859-9","UTF-8",$okut[performans]);  
     $oee=iconv( "ISO-8859-9","UTF-8",$okut[oee]);  
      $gerceklesencevrim=iconv( "ISO-8859-9","UTF-8",$okut[gerceklesencevrim]);  
       $planlanancevrim=iconv( "ISO-8859-9","UTF-8",$okut[planlanancevrim]);  
     
      $gerceklesenislempartisi=iconv( "ISO-8859-9","UTF-8",$okut[gerceklesenislempartisi]);  
      $planlananislempartisi=iconv( "ISO-8859-9","UTF-8",$okut[planpartimiktar]);  
    
      $planlanansoktak=iconv( "ISO-8859-9","UTF-8",$okut[planlanansoktak]);  
    $gerceklesensoktak=iconv( "ISO-8859-9","UTF-8",$okut[gerceklesensoktak]);  
       $siparismiktari=iconv( "ISO-8859-9","UTF-8",$okut[siparismiktari]);  
    
}


$sql="select * from uretimler left join calisanlar on calisanlar.index_calisanlar=uretimler.operator where isemriid='".$_GET[isemrino]."'";
$sorbana=mysqli_query($connection,$sql);

$i=0;
while($okut=mysqli_fetch_assoc($sorbana))
{
  $tarihim[$i]=$okut[tarih];
  $op[$i]=iconv( "ISO-8859-9","UTF-8",$okut[adi]." ".$okut[soyadi]);  
  $baslama[$i]=$okut[baslamasaati];
  $bitis[$i]=$okut[bitissaati];
  $uygun[$i]=$okut[uygunmiktar];
  $hkod[$i]=$okut[hatakodu];
  $fmiktar[$i]=$okut[firemiktari];
  $i++;
  
}

$i=0;







$sql="select *,cast((TIME_TO_SEC(durussaati) - TIME_TO_SEC(baslamasaati))/60 as integer) AS `minutes`  from duruskalkislar left join calisanlar on calisanlar.index_calisanlar=duruskalkislar.operator where index_duruskalkislar>0 and isemriid='".$_GET[isemrino]."'";
$sorbana=mysqli_query($connection,$sql);

$i=0;
while($okut=mysqli_fetch_assoc($sorbana))
{
  $pltarih[$i]=$okut[tarih];
  $popertor[$i]=iconv( "ISO-8859-9","UTF-8",$okut[adi]." ".$okut[soyadi]);  
  $plbsaat[$i]=$okut[baslamasaati];
  $plbitsaat[$i]=$okut[durussaati];
  $pdurussure[$i]=$okut[minutes];
  $duruskod[$i]=$okut[durusnedeni];
  $i++;
}



?>


<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=Windows-1254">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">


<script type="text/javascript" src="//cdn.mcfcloud.com/jquery-1.11.2/external/jquery/jquery.js"></script>
<link href="//datatables.net/download/build/nightly/jquery.dataTables.css" rel="stylesheet" type="text/css" />
<script src="//datatables.net/download/build/nightly/jquery.dataTables.js"></script>
<!-- <script src="//cdn.rawgit.com/ashl1/datatables-rowsgroup/v1.0.0/dataTables.rowsGroup.js"></script> -->
<link href="https://cdn.datatables.net/1.11.4/css/dataTables.bootstrap5.min.css" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css" />

<link rel=File-List href="isemri_dosyalar/filelist.xml">
<!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>ümit alpboða</o:Author>
  <o:LastAuthor>ümit alpboða</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>293</o:TotalTime>
  <o:Created>2021-03-02T08:45:00Z</o:Created>
  <o:LastSaved>2021-03-02T08:45:00Z</o:LastSaved>
  <o:Pages>1</o:Pages>
  <o:Words>597</o:Words>
  <o:Characters>3403</o:Characters>
  <o:Lines>28</o:Lines>
  <o:Paragraphs>7</o:Paragraphs>
  <o:CharactersWithSpaces>3993</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=dataStoreItem href="isemri_dosyalar/item0001.xml"
target="isemri_dosyalar/props002.xml">
<link rel=themeData href="isemri_dosyalar/themedata.thmx">
<link rel=colorSchemeMapping href="isemri_dosyalar/colorschememapping.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:HyphenationZone>21</w:HyphenationZone>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>TR</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac m:val="off"/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" DefPriority="99"
  LatentStyleCount="371">
  <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 1"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 2"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 3"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 4"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 5"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 6"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 7"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 8"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footer"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"/>
  <w:LsdException Locked="false" Priority="35" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"/>
  <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"/>
  <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Salutation"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Date"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"/>
  <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Table"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="No List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"/>
  <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"/>
 </w:LatentStyles>
</xml><![endif]-->
<style>

.row {
  width: 581.15pt;
    display: inline-flex;
    margin-left: 0.8pt;
    margin-right: -5px;
}

.column {
  flex: 50%;
  padding: 5px;
}


<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:162;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:162;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536859905 1073786111 1 0 511 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin-top:0cm;
	margin-right:0cm;
	margin-bottom:8.0pt;
	margin-left:0cm;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
h1
	{mso-style-priority:9;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-link:"Baþlİk 1 Char";
	mso-style-next:Normal;
	margin-top:12.0pt;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:0cm;
	margin-bottom:.0001pt;
	line-height:107%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:1;
	font-size:16.0pt;
	font-family:"Calibri Light",sans-serif;
	mso-ascii-font-family:"Calibri Light";
	mso-ascii-theme-font:major-latin;
	mso-fareast-font-family:"Times New Roman";
	mso-fareast-theme-font:major-fareast;
	mso-hansi-font-family:"Calibri Light";
	mso-hansi-theme-font:major-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:major-bidi;
	color:#2E74B5;
	mso-themecolor:accent1;
	mso-themeshade:191;
	mso-font-kerning:0pt;
	mso-fareast-language:EN-US;
	font-weight:normal;}
p.MsoHeader, li.MsoHeader, div.MsoHeader
	{mso-style-priority:99;
	mso-style-link:"Üst Bilgi Char";
	margin:0cm;
	margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	tab-stops:center 8.0cm right 16.0cm;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
p.MsoFooter, li.MsoFooter, div.MsoFooter
	{mso-style-priority:99;
	mso-style-link:"Alt Bilgi Char";
	margin:0cm;
	margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	tab-stops:center 8.0cm right 16.0cm;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing
	{mso-style-priority:1;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin:0cm;
	margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
span.stBilgiChar
	{mso-style-name:"Üst Bilgi Char";
	mso-style-priority:99;
	mso-style-unhide:no;
	mso-style-locked:yes;
	mso-style-link:"Üst Bilgi";}
span.AltBilgiChar
	{mso-style-name:"Alt Bilgi Char";
	mso-style-priority:99;
	mso-style-unhide:no;
	mso-style-locked:yes;
	mso-style-link:"Alt Bilgi";}
span.Balk1Char
	{mso-style-name:"Baþlİk 1 Char";
	mso-style-priority:9;
	mso-style-unhide:no;
	mso-style-locked:yes;
	mso-style-link:"Baþlİk 1";
	mso-ansi-font-size:16.0pt;
	mso-bidi-font-size:16.0pt;
	font-family:"Calibri Light",sans-serif;
	mso-ascii-font-family:"Calibri Light";
	mso-ascii-theme-font:major-latin;
	mso-fareast-font-family:"Times New Roman";
	mso-fareast-theme-font:major-fareast;
	mso-hansi-font-family:"Calibri Light";
	mso-hansi-theme-font:major-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:major-bidi;
	color:#2E74B5;
	mso-themecolor:accent1;
	mso-themeshade:191;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
.MsoPapDefault
	{mso-style-type:export-only;
	margin-bottom:8.0pt;
	line-height:107%;}
 /* Page Definitions */
 @page
	{mso-footnote-separator:url("isemri_dosyalar/header.htm") fs;
	mso-footnote-continuation-separator:url("isemri_dosyalar/header.htm") fcs;
	mso-endnote-separator:url("isemri_dosyalar/header.htm") es;
	mso-endnote-continuation-separator:url("isemri_dosyalar/header.htm") ecs;}
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:36.0pt 36.0pt 36.0pt 36.0pt;
	mso-header-margin:34.0pt;
	mso-footer-margin:35.4pt;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Normal Tablo";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin-top:0cm;
	mso-para-margin-right:0cm;
	mso-para-margin-bottom:8.0pt;
	mso-para-margin-left:0cm;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
table.MsoTableGrid
	{mso-style-name:"Tablo Kİlavuzu";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-priority:39;
	mso-style-unhide:no;
	border:solid windowtext 1.0pt;
	mso-border-alt:solid windowtext .5pt;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-border-insideh:.5pt solid windowtext;
	mso-border-insidev:.5pt solid windowtext;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
table.MsoTable15Plain2
	{mso-style-name:"Düz Tablo 2";
	mso-tstyle-rowband-size:1;
	mso-tstyle-colband-size:1;
	mso-style-priority:42;
	mso-style-unhide:no;
	border-top:solid #7F7F7F 1.0pt;
	mso-border-top-themecolor:text1;
	mso-border-top-themetint:128;
	border-left:none;
	border-bottom:solid #7F7F7F 1.0pt;
	mso-border-bottom-themecolor:text1;
	mso-border-bottom-themetint:128;
	border-right:none;
	mso-border-top-alt:solid #7F7F7F .5pt;
	mso-border-top-themecolor:text1;
	mso-border-top-themetint:128;
	mso-border-bottom-alt:solid #7F7F7F .5pt;
	mso-border-bottom-themecolor:text1;
	mso-border-bottom-themetint:128;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
table.MsoTable15Plain2FirstRow
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:first-row;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-tstyle-border-bottom:.5pt solid #7F7F7F;
	mso-tstyle-border-bottom-themecolor:text1;
	mso-tstyle-border-bottom-themetint:128;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain2LastRow
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:last-row;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-tstyle-border-top:.5pt solid #7F7F7F;
	mso-tstyle-border-top-themecolor:text1;
	mso-tstyle-border-top-themetint:128;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain2FirstCol
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:first-column;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain2LastCol
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:last-column;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain2OddColumn
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:odd-column;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-tstyle-border-left:.5pt solid #7F7F7F;
	mso-tstyle-border-left-themecolor:text1;
	mso-tstyle-border-left-themetint:128;
	mso-tstyle-border-right:.5pt solid #7F7F7F;
	mso-tstyle-border-right-themecolor:text1;
	mso-tstyle-border-right-themetint:128;}
table.MsoTable15Plain2EvenColumn
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:even-column;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-tstyle-border-left:.5pt solid #7F7F7F;
	mso-tstyle-border-left-themecolor:text1;
	mso-tstyle-border-left-themetint:128;
	mso-tstyle-border-right:.5pt solid #7F7F7F;
	mso-tstyle-border-right-themecolor:text1;
	mso-tstyle-border-right-themetint:128;}
table.MsoTable15Plain2OddRow
	{mso-style-name:"Düz Tablo 2";
	mso-table-condition:odd-row;
	mso-style-priority:42;
	mso-style-unhide:no;
	mso-tstyle-border-top:.5pt solid #7F7F7F;
	mso-tstyle-border-top-themecolor:text1;
	mso-tstyle-border-top-themetint:128;
	mso-tstyle-border-bottom:.5pt solid #7F7F7F;
	mso-tstyle-border-bottom-themecolor:text1;
	mso-tstyle-border-bottom-themetint:128;}
table.MsoTable15Plain3
	{mso-style-name:"Düz Tablo 3";
	mso-tstyle-rowband-size:1;
	mso-tstyle-colband-size:1;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
table.MsoTable15Plain3FirstRow
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:first-row;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-border-bottom:.5pt solid #7F7F7F;
	mso-tstyle-border-bottom-themecolor:text1;
	mso-tstyle-border-bottom-themetint:128;
	text-transform:uppercase;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain3LastRow
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:last-row;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-border-top:cell-none;
	text-transform:uppercase;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain3FirstCol
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:first-column;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-border-right:.5pt solid #7F7F7F;
	mso-tstyle-border-right-themecolor:text1;
	mso-tstyle-border-right-themetint:128;
	text-transform:uppercase;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain3LastCol
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:last-column;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-border-left:cell-none;
	text-transform:uppercase;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain3OddColumn
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:odd-column;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-shading:#F2F2F2;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-shading-themeshade:242;}
table.MsoTable15Plain3OddRow
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:odd-row;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-shading:#F2F2F2;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-shading-themeshade:242;}
table.MsoTable15Plain3NECell
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:ne-cell;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-border-left:cell-none;}
table.MsoTable15Plain3NWCell
	{mso-style-name:"Düz Tablo 3";
	mso-table-condition:nw-cell;
	mso-style-priority:43;
	mso-style-unhide:no;
	mso-tstyle-border-right:cell-none;}
table.MsoTable15Plain4
	{mso-style-name:"Düz Tablo 4";
	mso-tstyle-rowband-size:1;
	mso-tstyle-colband-size:1;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
table.MsoTable15Plain4FirstRow
	{mso-style-name:"Düz Tablo 4";
	mso-table-condition:first-row;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain4LastRow
	{mso-style-name:"Düz Tablo 4";
	mso-table-condition:last-row;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain4FirstCol
	{mso-style-name:"Düz Tablo 4";
	mso-table-condition:first-column;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain4LastCol
	{mso-style-name:"Düz Tablo 4";
	mso-table-condition:last-column;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-ansi-font-weight:bold;
	mso-bidi-font-weight:bold;}
table.MsoTable15Plain4OddColumn
	{mso-style-name:"Düz Tablo 4";
	mso-table-condition:odd-column;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-tstyle-shading:#F2F2F2;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-shading-themeshade:242;}
table.MsoTable15Plain4OddRow
	{mso-style-name:"Düz Tablo 4";
	mso-table-condition:odd-row;
	mso-style-priority:44;
	mso-style-unhide:no;
	mso-tstyle-shading:#F2F2F2;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-shading-themeshade:242;}
table.MsoTable15Plain5
	{mso-style-name:"Düz Tablo 5";
	mso-tstyle-rowband-size:1;
	mso-tstyle-colband-size:1;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
table.MsoTable15Plain5FirstRow
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:first-row;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-shading:white;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-border-bottom:.5pt solid #7F7F7F;
	mso-tstyle-border-bottom-themecolor:text1;
	mso-tstyle-border-bottom-themetint:128;
	font-size:13.0pt;
	mso-ansi-font-size:13.0pt;
	font-family:"Calibri Light",sans-serif;
	mso-ascii-font-family:"Calibri Light";
	mso-ascii-theme-font:major-latin;
	mso-fareast-font-family:"Times New Roman";
	mso-fareast-theme-font:major-fareast;
	mso-hansi-font-family:"Calibri Light";
	mso-hansi-theme-font:major-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:major-bidi;
	mso-ansi-font-style:italic;
	mso-bidi-font-style:italic;}
table.MsoTable15Plain5LastRow
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:last-row;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-shading:white;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-border-top:.5pt solid #7F7F7F;
	mso-tstyle-border-top-themecolor:text1;
	mso-tstyle-border-top-themetint:128;
	font-size:13.0pt;
	mso-ansi-font-size:13.0pt;
	font-family:"Calibri Light",sans-serif;
	mso-ascii-font-family:"Calibri Light";
	mso-ascii-theme-font:major-latin;
	mso-fareast-font-family:"Times New Roman";
	mso-fareast-theme-font:major-fareast;
	mso-hansi-font-family:"Calibri Light";
	mso-hansi-theme-font:major-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:major-bidi;
	mso-ansi-font-style:italic;
	mso-bidi-font-style:italic;}
table.MsoTable15Plain5FirstCol
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:first-column;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-shading:white;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-border-right:.5pt solid #7F7F7F;
	mso-tstyle-border-right-themecolor:text1;
	mso-tstyle-border-right-themetint:128;
	text-align:right;
	font-size:13.0pt;
	mso-ansi-font-size:13.0pt;
	font-family:"Calibri Light",sans-serif;
	mso-ascii-font-family:"Calibri Light";
	mso-ascii-theme-font:major-latin;
	mso-fareast-font-family:"Times New Roman";
	mso-fareast-theme-font:major-fareast;
	mso-hansi-font-family:"Calibri Light";
	mso-hansi-theme-font:major-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:major-bidi;
	mso-ansi-font-style:italic;
	mso-bidi-font-style:italic;}
table.MsoTable15Plain5LastCol
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:last-column;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-shading:white;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-border-left:.5pt solid #7F7F7F;
	mso-tstyle-border-left-themecolor:text1;
	mso-tstyle-border-left-themetint:128;
	font-size:13.0pt;
	mso-ansi-font-size:13.0pt;
	font-family:"Calibri Light",sans-serif;
	mso-ascii-font-family:"Calibri Light";
	mso-ascii-theme-font:major-latin;
	mso-fareast-font-family:"Times New Roman";
	mso-fareast-theme-font:major-fareast;
	mso-hansi-font-family:"Calibri Light";
	mso-hansi-theme-font:major-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:major-bidi;
	mso-ansi-font-style:italic;
	mso-bidi-font-style:italic;}
table.MsoTable15Plain5OddColumn
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:odd-column;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-shading:#F2F2F2;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-shading-themeshade:242;}
table.MsoTable15Plain5OddRow
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:odd-row;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-shading:#F2F2F2;
	mso-tstyle-shading-themecolor:background1;
	mso-tstyle-shading-themeshade:242;}
table.MsoTable15Plain5NECell
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:ne-cell;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-border-left:cell-none;}
table.MsoTable15Plain5NWCell
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:nw-cell;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-border-right:cell-none;}
table.MsoTable15Plain5SECell
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:se-cell;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-border-left:cell-none;}
table.MsoTable15Plain5SWCell
	{mso-style-name:"Düz Tablo 5";
	mso-table-condition:sw-cell;
	mso-style-priority:45;
	mso-style-unhide:no;
	mso-tstyle-border-right:cell-none;}
table.MsoTableGridLight
	{mso-style-name:"Tablo Kİlavuzu Açİk";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-priority:40;
	mso-style-unhide:no;
	border:solid #BFBFBF 1.0pt;
	mso-border-themecolor:background1;
	mso-border-themeshade:191;
	mso-border-alt:solid #BFBFBF .5pt;
	mso-border-themecolor:background1;
	mso-border-themeshade:191;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-border-insideh:.5pt solid #BFBFBF;
	mso-border-insideh-themecolor:background1;
	mso-border-insideh-themeshade:191;
	mso-border-insidev:.5pt solid #BFBFBF;
	mso-border-insidev-themecolor:background1;
	mso-border-insidev-themeshade:191;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="1026"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=TR style='tab-interval:35.4pt'>

<div class=WordSection1>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:574.15pt;border-collapse:collapse;border:none;mso-border-alt:
 solid windowtext .5pt;mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;
 margin-left:4.8pt;mso-table-rspace:7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:
 margin;mso-table-anchor-horizontal:margin;mso-table-left:left;mso-table-top:
 -30.75pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;
  height:33.25pt'>
  <td width=319 valign=top style='width:239.3pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:33.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-30.75pt;mso-height-rule:exactly'><span style='font-size:
  28.0pt'><img width='50%' src="./isemri_dosyalar/odmza889mn.jpg"><o:p></o:p></span></p>
  </td>
  <td width=461 valign=top style='width:346.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:33.25pt'>
  <p class=MsoNoSpacing align=center style='text-align:center;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:
  margin;mso-element-top:-30.75pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:20.0pt;mso-bidi-font-size:11.0pt'>İŞ EMİR
  FORMU<o:p></o:p></span></b></p>
  </td>
 </tr>
</table>

<table class=MsoTable15Plain4 border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:574.15pt;background:white;mso-background-themecolor:background1;
 border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;margin-left:4.8pt;mso-table-rspace:
 7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:paragraph;mso-table-anchor-horizontal:
 margin;mso-table-left:left;mso-table-top:10.55pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:11.65pt'>
  <td width=328 valign=top style='width:246.25pt;border-top:solid windowtext 1.0pt;
  border-left:solid windowtext 1.0pt;border-bottom:none;border-right:none;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:5;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>İŞ EMİR NO<span
  style='mso-spacerun:yes'>        </span><?php echo $isemrino; ?><b><o:p></o:p></b></span></p>
  </td>
  <td width=454 valign=top style='width:340.3pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:none;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.65pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:1;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>MAMUL KODU<span
  style='mso-spacerun:yes'>                </span><?php echo $malzemekodu; ?><b><o:p></o:p></b></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;height:14.5pt'>
  <td width=328 valign=top style='width:246.25pt;border:none;border-left:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.5pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:68;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>PROJE KODU<span
  style='mso-spacerun:yes'>     </span><?php echo $projekodu; ?><o:p></o:p></span></p>
  </td>
  <td width=454 valign=top style='width:340.3pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.5pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>MAMUL AÇIKLAMASI<span
  style='mso-spacerun:yes'>     </span><?php echo $malzemeaciklamasi; ?><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:14.5pt'>
  <td width=328 valign=top style='width:246.25pt;border:none;border-left:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.5pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:4;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>ÜRETİCİ KODU<span
  style='mso-spacerun:yes'>  </span><?php echo $ureticikodu; ?><o:p></o:p></span></p>
  </td>
  <td width=454 valign=top style='width:340.3pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.5pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>SİPARİŞ MİKTARI<span
  style='mso-spacerun:yes'>             </span><?php echo $siparismiktari; ?><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;height:14.5pt'>
  <td width=328 valign=top style='width:246.25pt;border:none;border-left:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.5pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:68;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><b><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>SİPARİŞ AÇIKLAMASI<o:p></o:p></span></b></p>
  </td>
  <td width=454 valign=top style='width:340.3pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.5pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;height:2.9pt'>
  <td width=328 valign=top style='width:246.25pt;border:none;border-left:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:2.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:4;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><b><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $siparisaciklamasi; ?><o:p></o:p></span></b></p>
  </td>
  <td width=454 valign=top style='width:340.3pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:2.9pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes;height:4.1pt'>
  <td width=328 valign=top style='width:246.25pt;border:none;border-left:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:4.1pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:68;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><b><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=454 valign=top style='width:340.3pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:4.1pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:10.55pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNoSpacing align=right style='text-align:right;line-height:50%'><o:p>&nbsp;</o:p></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:574.15pt;border-collapse:collapse;border:none;mso-border-alt:
 solid windowtext .5pt;mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;
 margin-left:4.8pt;mso-table-rspace:7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:
 paragraph;mso-table-anchor-horizontal:margin;mso-table-left:left;mso-table-top:
 4.4pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;
  height:1.05pt'>
  <td width=391 style='width:293.15pt;border:solid windowtext 1.0pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:1.05pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:4.4pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>OPERASYON
  AÇIKLAMASI:</span></b><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  style='mso-spacerun:yes'>  </span><?php echo $operasyonaciklamasi; ?><o:p></o:p></span></p>
  </td>
  <td width=391 style='width:293.15pt;border:solid windowtext 1.0pt;border-left:
  none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:1.05pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:4.4pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;
  mso-bidi-font-size:11.0pt'>P.HAZIRLIK SÜRESİ:</span></b><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  style='mso-spacerun:yes'>   </span><?php echo $p_hazirlik; ?><o:p></o:p></span></p>
  </td>
 </tr>
</table>

<table class=MsoTable15Plain4 border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:574.15pt;background:white;mso-background-themecolor:background1;
 border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;margin-left:4.8pt;mso-table-rspace:
 7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:paragraph;mso-table-anchor-horizontal:
 margin;mso-table-left:left;mso-table-top:27.3pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  page-break-inside:avoid;height:4.65pt;'>
  <td width=34 rowspan=7 style='width:25.5pt;border-top:solid windowtext 1.0pt;
  border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;border-right:none;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;mso-rotate:90;height:4.65pt;  -webkit-transform:rotate(270deg); -moz-transform:rotate(270deg);'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:5.65pt;
  margin-bottom:0cm;margin-left:5.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-yfti-cnfc:5;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><b><span style='font-size:10.0pt;mso-bidi-font-size:12.0pt'>ÜRETİM
  &amp; KALİTE VERİLERİ<o:p></o:p></span></b></p>
  </td>
  <td width=747 colspan=10 valign=top style='width:560.45pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:none;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:4.65pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:1;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:27.3pt;mso-height-rule:exactly'><b><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  style='mso-spacerun:yes'>         </span>P. ÜRETİM MİK(ADET/SAAT)<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;height:11.75pt'>
  <td width=222 colspan=3 style='width:166.6pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $p_adetsaat; ?><o:p></o:p></span></p>
  </td>
  <td width=65 style='width:48.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>TARİH</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>OPERATÖR</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=85 style='width:63.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>BAŞL.</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:9.0pt;mso-bidi-font-size:
  11.0pt'>SAATİ</span></b><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=85 style='width:63.75pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>BİTİŞ</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>.SAATİ<o:p></o:p></span></b></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>UYG</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>. </span></b><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>ÜRÜN</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=69 style='width:51.55pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>HATA</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'> </span></b><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>KODU</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=70 style='width:52.7pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:11.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>FİRE</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'> </span></b><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>MİKTARI</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:5.7pt'>
  <td width=222 colspan=3 valign=top style='width:166.6pt;border-top:none;
  border-left:solid #0D0D0D 1.0pt;border-bottom:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;mso-border-top-alt:solid #0D0D0D .5pt;
  mso-border-left-alt:solid #0D0D0D .5pt;mso-border-right-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:5.7pt'>
  <p class=MsoNormal align=right style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:right;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:8.0pt;
  mso-bidi-font-size:11.0pt'><span style='mso-spacerun:yes'>  </span>PLANLANAN <span
  style='mso-spacerun:yes'> </span>GERÇEKLEŞEN<o:p></o:p></span></b></p><br>
  </td>
  <td width=65 style='width:48.65pt;border:none;mso-border-left-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $tarihim[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $op[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $baslama[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.75pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $bitis[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 valign=center style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $uygun[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=69 valign=center style='width:51.55pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $hkod[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=70 valign=center style='width:52.7pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:5.7pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $fmiktar[0]; ?><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;height:3.3pt'>
  <td width=75 valign=top style='width:56.3pt;border:none;border-left:solid #0D0D0D 1.0pt;
  mso-border-left-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:6.0pt;mso-bidi-font-size:9.0pt'>ÇEVRİM<o:p></o:p></span></b></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt;mso-bidi-font-size:
  9.0pt'>SÜRESİ<o:p></o:p></span></p><br>
  </td>
  <td width=66 valign=top style='width:49.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $planlanancevrim; ?><o:p></o:p></span></p>
  </td>
  <td width=81 valign=top style='width:61.05pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $gerceklesencevrim; ?><o:p></o:p></span></p>
  </td>
  <td width=65 style='width:48.65pt;border:none;mso-border-left-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $tarihim[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $op[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $baslama[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.75pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $bitis[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 valign='center'  style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $uygun[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=69 style='width:51.55pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $hkod[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=70 valign='center' style='width:52.7pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:3.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $fmiktar[1]; ?><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;height:12.85pt'>
  <td width=75 valign=top style='width:56.3pt;border:none;border-left:solid #0D0D0D 1.0pt;
  mso-border-left-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:6.0pt;
  mso-bidi-font-size:6.0pt'>İŞLEM<o:p></o:p></span></b></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:7.0pt;mso-bidi-font-size:7.0pt'>PARTİSİ<o:p></o:p></span></p><br>
  </td>
  <td width=66 valign=top style='width:49.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $planlananislempartisi; ?><o:p></o:p></span></p>
  </td>
  <td width=81 valign=top style='width:61.05pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $gerceklesenislempartisi; ?><o:p></o:p></span></p>
  </td>
  <td width=65 style='width:48.65pt;border:none;mso-border-left-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $tarihim[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $op[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $baslama[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.75pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $bitis[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $uygun[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=69 valign=top style='width:51.55pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $hkod[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=70 valign=top style='width:52.7pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:12.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $fmiktar[2]; ?><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;height:16.35pt'>
  <td width=75 rowspan=2 valign=top style='width:56.3pt;border-top:none;
  border-left:solid #0D0D0D 1.0pt;border-bottom:solid windowtext 1.0pt;
  border-right:none;mso-border-left-alt:solid #0D0D0D .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.35pt'>

  </td>
  <td width=66 rowspan=2 valign=top style='width:61.25pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.35pt;border-bottom:solid windowtext 1.0pt; '>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly;'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></p>
  </td>
  <td width=81 rowspan=2 valign=top style='width:61.05pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $gerceklesensoktak; ?><o:p></o:p></span></p>
  </td>
  <td width=65 style='width:48.65pt;border:none;mso-border-left-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $tarihim[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 valign=center style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $op[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 style='width:63.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $baslama[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:63.75pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $bitis[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 style='width:2.0cm;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $uygun[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=69 valign=center style='width:51.55pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $hkod[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=70 valign=center style='width:52.7pt;border:none;border-right:solid windowtext 1.0pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;
  mso-height-rule:exactly'><span style='font-size:5.0pt;mso-bidi-font-size:
  5.0pt'><?php echo $fmiktar[3]; ?><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;mso-yfti-lastrow:yes;height:16.25pt'>
  <td width=65 valign=center style='width:48.65pt;border:none;border-bottom:solid windowtext 1.0pt;
  mso-border-left-alt:solid #0D0D0D .5pt;mso-border-left-alt:solid #0D0D0D .5pt;
  mso-border-bottom-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $tarihim[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 valign=center style='width:2.0cm;border:none;border-bottom:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $op[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:63.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $baslama[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:63.75pt;border:none;border-bottom:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $bitis[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=76 valign=center style='width:2.0cm;border:none;border-bottom:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:5.0pt;mso-bidi-font-size:5.0pt'><?php echo $uygun[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=69 valign=top style='width:51.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $hkod[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=70 valign=top style='width:52.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.25pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:27.3pt;mso-height-rule:
  exactly'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><?php echo $fmiktar[4]; ?><o:p></o:p></span></p>
  </td>
 </tr>
</table>

<div class="row" style="box-sizing:border-box;">
  <div class="column">
<table id="example" class="display table  table-bordered " width="100%" style="float: left;font-size:9px;border:1px solid black;">
  
  <thead style="display:none">

   </thead>

  </table>
  </div>
  <div class="column">
  <table id="example1" class="display table  table-bordered " width="100%" style="float: left;font-size:9px;border:1px solid black;">
  
  <thead style="display:none">

   </thead>

  </table>
  </div>
  </div>

  


<table class=MsoTable15Plain4 border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:574.15pt;background:white;mso-background-themecolor:background1;
 border-collapse:collapse;border:none;mso-border-alt:solid #0D0D0D .5pt;
 mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;margin-left:4.8pt;mso-table-rspace:
 7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:paragraph;mso-table-anchor-horizontal:
 margin;mso-table-left:left;mso-table-top:9.95pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:-1;mso-yfti-firstrow:yes;mso-yfti-lastfirstrow:yes;
  height:14.55pt'>
  <td width=37 rowspan=8 valign=bottom style='width:28.2pt;border:solid #0D0D0D 1.0pt;margin-right:4.8pt;
  border-right:solid windowtext 1.0pt;mso-border-alt:solid #0D0D0D .5pt;
  mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 1cm 5.4pt;
  mso-rotate:90;height:14.55pt; -webkit-transform:rotate(270deg); -moz-transform:rotate(270deg);'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:5;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><b><span style='font-size:10.0pt'>PLANLI PLANSIZ
  DURUŞLAR<o:p></o:p></span></b></p>
  </td>
  <td width=86 style='width:65.15pt;border:none;border-top:solid #0D0D0D 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-top-alt:solid #0D0D0D .5pt;
  mso-border-left-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:1;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>TARİH<o:p></o:p></span></p>
  </td>
  <td width=85 style='width:61.9pt;border:none;border-top:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:
  14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:1;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>OPERATÖR<o:p></o:p></span></p>
  </td>
  <td width=91 style='width:68.8pt;border:none;border-top:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:
  14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:1;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>DURUŞ KODU<o:p></o:p></span></p>
  </td>
  <td width=83 style='width:62.6pt;border:none;border-top:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:
  14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:1;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>BAŞL.SAATİ<o:p></o:p></span></p>
  </td>
  <td width=84 style='width:62.9pt;border:none;border-top:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:
  14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:1;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>BİTİŞ.SAATİ<o:p></o:p></span></p>
  </td>
  <td width=97 style='width:71.35pt;border:none;border-top:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:
  14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:1;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt'>DURUŞ SÜRESİ<o:p></o:p></span></p>
  </td>
  <td width=194 colspan=2 valign=top style='width:147.8pt;border:solid #0D0D0D 1.0pt;
  border-left:none;mso-border-top-alt:solid #0D0D0D .5pt;mso-border-bottom-alt:
  solid #0D0D0D .5pt;mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:1;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b><span
  style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:0;height:14.55pt'>
  <td width=86 valign=top style='width:65.15pt;border:none;mso-border-left-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pltarih[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=top style='width:61.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $popertor[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=top style='width:68.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $duruskod[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=top style='width:62.6pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=top style='width:62.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[0]; ?><o:p></o:p></span></p>
  </td>
  <td width=194 colspan=2 valign=center style='width:147.8pt;border:none;
  border-right:solid #0D0D0D 1.0pt;mso-border-top-alt:solid #0D0D0D .5pt;
  mso-border-left-alt:solid #0D0D0D .5pt;mso-border-top-alt:solid #0D0D0D .5pt;
  mso-border-left-alt:solid #0D0D0D .5pt;mso-border-right-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt'>OEE HESAPLAMA<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:14.55pt'>
  <td width=86 valign=center style='width:65.15pt;border:none;mso-border-left-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $pltarih[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:61.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $popertor[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=center style='width:68.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $duruskod[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=center style='width:62.6pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=center style='width:62.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[1]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=top style='width:64.1pt;border:none;mso-border-left-alt:
  solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>KULLANIL <o:p></o:p></span></b></p>
  </td>
  <td width=110 valign=top style='width:83.7pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>: <?php echo $kullanilan; ?><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;height:14.55pt'>
  <td width=86 valign=center style='width:65.15pt;border:none;mso-border-left-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pltarih[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:61.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $popertor[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=center style='width:68.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $duruskod[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=center style='width:62.6pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=center style='width:62.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[2]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=top style='width:64.1pt;border:none;mso-border-left-alt:
  solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>PERFORM<o:p></o:p></span></b></p>
  </td>
  <td width=110 valign=top style='width:83.7pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>: <?php echo $performans; ?><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;height:14.55pt'>
  <td width=86 valign=center style='width:65.15pt;border:none;mso-border-left-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $pltarih[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:61.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $popertor[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=center style='width:68.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $duruskod[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=center style='width:62.6pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=center style='width:62.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[3]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=top style='width:64.1pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-left-alt:solid #0D0D0D .5pt;mso-border-left-alt:solid #0D0D0D .5pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>KALİTE<o:p></o:p></span></b></p>
  </td>
  <td width=110 valign=center style='width:83.7pt;border-top:none;border-left:
  none;border-bottom:solid #0D0D0D 1.0pt;border-right:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;mso-border-right-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>: <?php echo $kalite; ?><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;height:14.55pt'>
  <td width=86 valign=center style='width:65.15pt;border:none;mso-border-left-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pltarih[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:61.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $popertor[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=center style='width:68.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $duruskod[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=center style='width:62.6pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=center style='width:62.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[4]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=top style='width:64.1pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;mso-border-left-alt:solid #0D0D0D .5pt;
  mso-border-top-alt:solid #0D0D0D .5pt;mso-border-left-alt:solid #0D0D0D .5pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>OEE<o:p></o:p></span></b></p>
  </td>
  <td width=110 valign=center style='width:83.7pt;border-top:none;border-left:
  none;border-bottom:solid #0D0D0D 1.0pt;border-right:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;mso-border-top-alt:solid #0D0D0D .5pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;mso-border-right-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt'>: <?php echo $oee; ?><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;height:14.55pt'>
  <td width=86 valign=center style='width:65.15pt;border:none;mso-border-left-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $pltarih[5]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:61.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $popertor[5]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=center style='width:68.8pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $duruskod[5]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=center style='width:62.6pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[5]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=center style='width:62.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[5]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;mso-height-rule:
  exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[5]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:64.1pt;border:none;mso-border-top-alt:
  solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=110 valign=center style='width:83.7pt;border:none;border-right:solid #0D0D0D 1.0pt;
  mso-border-top-alt:solid #0D0D0D .5pt;mso-border-top-alt:solid #0D0D0D .5pt;
  mso-border-right-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;mso-yfti-lastrow:yes;height:14.55pt'>
  <td width=86 valign=center style='width:65.15pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pltarih[6]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=center style='width:61.9pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $popertor[6]; ?><o:p></o:p></span></p>
  </td>
  <td width=91 valign=center style='width:68.8pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $duruskod[6]; ?><o:p></o:p></span></p>
  </td>
  <td width=83 valign=center style='width:62.6pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbsaat[6]; ?><o:p></o:p></span></p>
  </td>
  <td width=84 valign=center style='width:62.9pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $plbitsaat[6]; ?><o:p></o:p></span></p>
  </td>
  <td width=97 valign=center style='width:71.35pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-yfti-cnfc:64;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:9.95pt;
  mso-height-rule:exactly'><span style='font-size:6.0pt'><?php echo $pdurussure[6]; ?><o:p></o:p></span></p>
  </td>
  <td width=85 valign=top style='width:64.1pt;border:none;border-bottom:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=110 valign=top style='width:83.7pt;border-top:none;border-left:
  none;border-bottom:solid #0D0D0D 1.0pt;border-right:solid #0D0D0D 1.0pt;
  mso-border-bottom-alt:solid #0D0D0D .5pt;mso-border-right-alt:solid #0D0D0D .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-yfti-cnfc:64;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:9.95pt;mso-height-rule:exactly'><span
  style='font-size:10.0pt'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNoSpacing><o:p>&nbsp;</o:p></p>


<div class="row" style="box-sizing:border-box;">
  <div class="column">
<table id="example3" class="display table  table-bordered " width="100%" style="float: left;font-size:9px;border:1px solid black;">
  
  <thead style="display:none">

   </thead>

  </table>
  </div>
  <div class="column">
  <table id="example4" class="display table  table-bordered " width="100%" style="float: left;font-size:9px;border:1px solid black;">
  
  <thead style="display:none">

   </thead>

  </table>
  </div>
  </div>


<p class=MsoNoSpacing align=right style='text-align:right'><o:p>&nbsp;</o:p></p>

<p class=MsoNoSpacing align=right style='text-align:right'>KONTROL ONAYI</p>

<p class=MsoNormal align=right style='text-align:right'><b style='mso-bidi-font-weight:
normal'>İMZA</b> ……………………………</p>

</div>

</body>

<script>
$(document).ready(function() {

//Created By: Brij Mohan
//Website: http://techbrij.com
function groupTable($rows, startIndex, total){
if (total === 0){
return;
}
var i , currentIndex = startIndex, count=1, lst=[];
var tds = $rows.find('td:eq('+ currentIndex +')');
var ctrl = $(tds[0]);
lst.push($rows[0]);
for (i=1;i<=tds.length;i++){
if (ctrl.text() ==  $(tds[i]).text()){
count++;
$(tds[i]).addClass('deleted');
lst.push($rows[i]);
}
else{
if (count>1){
ctrl.attr('rowspan',count);
groupTable($(lst),startIndex+1,total-1)
}
count=1;
lst = [];
ctrl=$(tds[i]);
lst.push($rows[i]);
}
}
}




var jsondata = "";
  $.ajax({

url: 'http://192.168.1.201:81/maratonservices/angular/dataservis.php?page_id=formgetir&formid=450&sutunlar=sinifi,firekodu,firetanimi&hatasinifi=Hammadde',

type: 'GET',

data:'',

processData: false,

contentType: false,
async: false,

success: function(data)

     {
      jsondata=data;
      var table = $('#example').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "searching": false,
    "bInfo": false,
    columns: [ 
      { data: 'sinifi', name: 'sinifi', visible: true },
      { data: 'firekodu', name: 'firekodu', visible: true },
      { data: 'firetanimi', name: 'firetanimi', visible: true }
      
    ],
    data: jsondata,

    pageLength: '20',
  });

  groupTable($('#example tr:has(td)'),0,1);
$('#example .deleted').remove();
     }

    });


    var jsondata2 = "";
  $.ajax( {

url: 'http://192.168.1.201:81/maratonservices/angular/dataservis.php?page_id=formgetir&formid=450&sutunlar=sinifi,firekodu,firetanimi&hatasinifi=Reçete',

type: 'GET',

data:'',

processData: false,

contentType: false,
async: false,

success: function(datax)

     {
      jsondata2=datax;
      var table = $('#example1').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "searching": false,
    "bInfo": false,
    columns: [ 
      { data: 'sinifi', name: 'sinifi', visible: true },
      { data: 'firekodu', name: 'firekodu', visible: true },
      { data: 'firetanimi', name: 'firetanimi', visible: true }
      
    ],
    data: jsondata2,

    pageLength: '20',
  });

  groupTable($('#example1 tr:has(td)'),0,1);
$('#example1 .deleted').remove();
     }

    });

    var jsondata3 = "";
  $.ajax( {

url: 'http://192.168.1.201:81/maratonservices/angular/dataservis.php?page_id=formgetir&formid=447&sutunlar=gruptanimi,duruskodu,durustanimi&isfofiltresi=0',

type: 'GET',

data:'',

processData: false,

contentType: false,
async: false,

success: function(datsax)

     {
      jsondata3=datsax;
      console.log(datsax);
      var table = $('#example3').DataTable({
    "bPaginate": false,
    "bLengthChange": true,
    "bFilter": true,
    "searching": false,
    "bInfo": false,
    columns: [ 
      { data: 'gruptanimi', name: 'gruptanimi', visible: true },
      { data: 'duruskodu', name: 'duruskodu', visible: true },

      { data: 'durustanimi', name: 'durustanimi', visible: true }
      
    ],
    data: jsondata3,  

    pageLength: '10',
  });

  groupTable($('#example3 tr:has(td)'),0,1);
$('#example3 .deleted').remove();
     }

    });

    var jsondata4 = "";
  $.ajax( {

url: 'http://192.168.1.201:81/maratonservices/angular/dataservis.php?page_id=formgetir&formid=447&sutunlar=gruptanimi,duruskodu,durustanimi&isfofiltresi=1',

type: 'GET',

data:'',

processData: false,

contentType: false,
async: false,

success: function(datsax)

     {
      jsondata4=datsax;
      console.log(datsax);
      var table = $('#example4').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "searching": false,
    "bInfo": false,
    columns: [ 
      { data: 'gruptanimi', name: 'gruptanimi', visible: true },
      
      { data: 'duruskodu', name: 'duruskodu', visible: true },
      { data: 'durustanimi', name: 'durustanimi', visible: true }
      
    ],
    data: jsondata4,  

    pageLength: '20',
  });

  groupTable($('#example4 tr:has(td)'),0,1);
$('#example4 .deleted').remove();
     }

    });
    
} );




  </script>
</html>
