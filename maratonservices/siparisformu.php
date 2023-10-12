<?php


include 'baglanti.php';


$tarih=date("Y-m-d");
$zaman=date("H:i:s");



$doviz = simplexml_load_file('https://www.tcmb.gov.tr/kurlar/today.xml');
    
$usd_alis = $doviz ->Currency[0]->ForexBuying;
$euro_alis = $doviz ->Currency[3]->ForexBuying;
$gbp_alis = $doviz ->Currency[4]->ForexBuying;
 


$teklifno=$_GET[siparisid];

if ($_GET[siparisid]=='')
{
    
    $sqlyes="select * from satinalmasiparisleri order by index_satinalmasiparisleri desc limit 1";
    
$sorgula=mysqli_query($connection,$sqlyes);
while($okus=mysqli_fetch_assoc($sorgula))
{
    $teklifno=$okus[index_satinalmasiparisleri];
    
}
    
}

$sql="select * from satinalmasiparisleri left join kargofirmalari on kargofirmalari.index_kargofirmalari=satinalmasiparisleri.nakliyefirmasi where index_satinalmasiparisleri=".$teklifno;

$sorgula=mysqli_query($connection,$sql);
while($okus=mysqli_fetch_assoc($sorgula))
{
    $siparisno=$okus[satinalmano];
    $sqls = "select * from cariler where index_cariler=".$okus[tedarikciid];
    $oks = mysqli_query($connection,$sqls);
    while($gels = mysqli_fetch_assoc($oks)){
        $firmaadi = iconv( "ISO-8859-9","UTF-8",$gels[firma_adi]);
        $firmaadresi = iconv( "ISO-8859-9","UTF-8",$gels[fatura_adresi]);
        $firmatelefon = iconv( "ISO-8859-9","UTF-8",$gels[tel1]);
        $firmaemail = iconv( "ISO-8859-9","UTF-8",$gels[eposta]);
        $firmayetkili = iconv( "ISO-8859-9","UTF-8",$gels[ilgili_kisi]);
    }
    
    $nakliyefirmasi =  iconv( "ISO-8859-9","UTF-8",$okus[firmaadi]);
    $tedarikcisevk = $okus[tedarikcisevk];
    $odemesekli = $okus[odemesekli];
    $siparistarihi = $okus[siparistarihi];

    $tutar = $okus[toplam_tutar];
    $kdv = $okus[kdv_tutar];
    $geneltoplam = $okus[genel_toplam];
    $kurtipi = $okus[kur_tipi];

    $teslimsuresi = strtotime($okus[tedarikcisevk]) - strtotime($okus[siparistarihi]);
    $teslimsuresi = round($teslimsuresi / (60 * 60 * 24)) . " gün<br/>";

 


}

     $malzemesql =mysqli_query($connection,"select * from satinalma where satinalmakodu='$teklifno' ") ;
    while($sml = mysqli_fetch_assoc($malzemesql)){
        $my = mysqli_query($connection,"select * from malzemetedarikcileri where ureticikodu like '%".$sml[aciklamasi]."%' ");
        while($m = mysqli_fetch_assoc($my)){
            $smlid = $m[malzemeid];
        }
    }

$getsql = "select * ,malzemeler.malzemeaciklamasi as malzemeaciklamasi,concat_ws('.',malzemeler.grupkodu,malzemeler.malzemekodu) as birlesik from satinalma left join satinalmasiparisleri on satinalmasiparisleri.index_satinalmasiparisleri=satinalma.satinalmakodu left join cariler on cariler.index_cariler=satinalmasiparisleri.tedarikciid left join malzemeler on( malzemeler.index_malzemeler = $smlid or malzemeler.malzemeaciklamasi = $smlid)   where satinalma.satinalmakodu<>'' and satinalma.satinalmakodu='".$teklifno."' " ;
$sorbanap = mysqli_query($connection,$getsql);

$i=0;


while($okut=mysqli_fetch_assoc($sorbanap))

{

  

    $malzemekod[$i]=iconv( "ISO-8859-9","UTF-8",$okut[birlesik]);
 
$malzemeadicins[$i]=iconv( "ISO-8859-9","UTF-8",$okut[aciklamasi]);
$miktar[$i]=iconv( "ISO-8859-9","UTF-8",$okut[siparismiktari]);  
$birim[$i]=iconv( "ISO-8859-9","UTF-8",$okut[siparisbirimi]);
$birimfiyat[$i]=iconv( "ISO-8859-9","UTF-8",$okut[birimfiyat]);
  $parabirimi[$i] = $okut[fiyatbirimi];

    if($parabirimi[$i]=='USD'){
        $d = $usd_alis;
    }else if($parabirimi[$i]=='EUR'){
        $d = $euro_alis;
    }else{
        $d = "";
    }
    
  $tutar[$i] = $okut[siparismiktari] * $okut[birimfiyat]*$d;
$toplam=$toplam+$tutar[$i];
    $dovizkuru = $d;

  $i++;
  
}


?>


<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<link rel=File-List href="teklifformu_dosyalar/filelist.xml">
<link rel=Edit-Time-Data href="teklifformu_dosyalar/editdata.mso">
<!--[if !mso]>
<style>
v\:* {behavior:url(#default#VML);}
o\:* {behavior:url(#default#VML);}
w\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>ümit alpboğa</o:Author>
  <o:LastAuthor>ümit alpboğa</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>82</o:TotalTime>
  <o:Created>2021-04-27T22:58:00Z</o:Created>
  <o:LastSaved>2021-04-27T22:58:00Z</o:LastSaved>
  <o:Pages>2</o:Pages>
  <o:Words>293</o:Words>
  <o:Characters>1675</o:Characters>
  <o:Lines>13</o:Lines>
  <o:Paragraphs>3</o:Paragraphs>
  <o:CharactersWithSpaces>1965</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:RelyOnVML/>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=dataStoreItem href="teklifformu_dosyalar/item0001.xml"
target="teklifformu_dosyalar/props002.xml">
<link rel=themeData href="teklifformu_dosyalar/themedata.thmx">
<link rel=colorSchemeMapping href="teklifformu_dosyalar/colorschememapping.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:View>Print</w:View>
  <w:SpellingState>Clean</w:SpellingState>
  <w:GrammarState>Clean</w:GrammarState>
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
  <w:DoNotOptimizeForBrowser/>
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
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="Body Text"/>
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
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:162;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:-536870145 1107305727 0 0 415 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:162;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536859905 1073786111 1 0 511 0;}
@font-face
	{font-family:"Microsoft Sans Serif";
	panose-1:2 11 6 4 2 2 2 2 2 4;
	mso-font-charset:162;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-452972801 -1073717157 41 0 66047 0;}
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
p.MsoBodyText, li.MsoBodyText, div.MsoBodyText
	{mso-style-priority:1;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-link:"Gövde Metni Char";
	margin:0cm;
	margin-bottom:.0001pt;
	mso-pagination:none;
	text-autospace:none;
	font-size:9.0pt;
	font-family:"Microsoft Sans Serif",sans-serif;
	mso-fareast-font-family:"Microsoft Sans Serif";
	mso-ansi-language:EN-US;
	mso-fareast-language:EN-US;}
span.GvdeMetniChar
	{mso-style-name:"Gövde Metni Char";
	mso-style-priority:1;
	mso-style-unhide:no;
	mso-style-locked:yes;
	mso-style-link:"Gövde Metni";
	mso-ansi-font-size:9.0pt;
	mso-bidi-font-size:9.0pt;
	font-family:"Microsoft Sans Serif",sans-serif;
	mso-ascii-font-family:"Microsoft Sans Serif";
	mso-fareast-font-family:"Microsoft Sans Serif";
	mso-hansi-font-family:"Microsoft Sans Serif";
	mso-bidi-font-family:"Microsoft Sans Serif";
	mso-ansi-language:EN-US;}
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
span.SpellE
	{mso-style-name:"";
	mso-spl-e:yes;}
span.GramE
	{mso-style-name:"";
	mso-gram-e:yes;}
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
	{mso-footnote-separator:url("teklifformu_dosyalar/header.htm") fs;
	mso-footnote-continuation-separator:url("teklifformu_dosyalar/header.htm") fcs;
	mso-endnote-separator:url("teklifformu_dosyalar/header.htm") es;
	mso-endnote-continuation-separator:url("teklifformu_dosyalar/header.htm") ecs;}
@page WordSection1
	{size:841.9pt 595.3pt;
	mso-page-orientation:landscape;
	margin:70.85pt 70.85pt 70.85pt 70.85pt;
	mso-header-margin:35.4pt;
	mso-footer-margin:35.4pt;
	mso-even-header:url("teklifformu_dosyalar/header.htm") eh1;
	mso-header:url("teklifformu_dosyalar/header.htm") h1;
	mso-even-footer:url("teklifformu_dosyalar/header.htm") ef1;
	mso-footer:url("teklifformu_dosyalar/header.htm") f1;
	mso-first-header:url("teklifformu_dosyalar/header.htm") fh1;
	mso-first-footer:url("teklifformu_dosyalar/header.htm") ff1;
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
	{mso-style-name:"Tablo Kılavuzu";
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
table.MsoTableGridLight
	{mso-style-name:"Tablo Kılavuzu Açık";
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
table.TableNormal
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:2;
	mso-style-qformat:yes;
	mso-style-parent:"";
	mso-padding-alt:0cm 0cm 0cm 0cm;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:none;
	text-autospace:none;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-ansi-language:EN-US;
	mso-fareast-language:EN-US;}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="2052"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=TR style='tab-interval:35.4pt'>

<div class=WordSection1>

<table class=MsoTableGridLight border=0 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:763.3pt;border-collapse:collapse;border:none;mso-yfti-tbllook:
 1184;mso-table-lspace:7.05pt;margin-left:4.8pt;mso-table-rspace:7.05pt;
 margin-right:4.8pt;mso-table-anchor-vertical:margin;mso-table-anchor-horizontal:
 margin;mso-table-left:left;mso-table-top:-53.25pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
 mso-border-insideh:none;mso-border-insidev:none'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:2.8pt'>
  <td width=670 valign=top style='width:502.35pt;border:none;border-bottom:
  solid #C00000 3.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:2.8pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;tab-stops:center 237.4pt left 354.75pt;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:18.0pt;mso-bidi-font-size:11.0pt'><span
  style='mso-tab-count:1'>                                         </span>SİPARİŞ FORMU<o:p></o:p></span></b></p>
  </td>
  <td width=348 valign=top style='width:260.95pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:2.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><o:p>&nbsp;</o:p></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:36.8pt'>
  <td width=670 rowspan=2 valign=top style='width:502.35pt;border:none;
  mso-border-top-alt:solid #C00000 3.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:36.8pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:12.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:14.0pt;mso-bidi-font-size:11.0pt'>Tedarikçi Bilgileri<o:p></o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Firma Adı / <span
  class=SpellE>Ünvanı</span> :<span style='mso-spacerun:yes'>  </span><span
  class=SpellE><?php echo $firmaadi; ?></span><o:p></o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><span class=SpellE><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Fima</span></b></span><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'> Adresi :<span style='mso-spacerun:yes'>  </span><span class=SpellE><?php echo $firmaadresi; ?></span><o:p></o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Firma Telefon : <span
  class=SpellE><?php echo $firmatelefon; ?></span><o:p></o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Firma <span class=SpellE>Fax</span>
  : <span class=SpellE><?php echo $firmafax; ?></span><o:p></o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Firma E-mail :<span
  style='mso-spacerun:yes'>  </span><span class=SpellE><?php echo $firmaemail; ?></span><o:p></o:p></span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-top:-53.25pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Firma Yetkili Ad <span
  class=SpellE>Soyad</span> : <span class=SpellE><?php echo $firmayetkili; ?></span></span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:18.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=348 valign=top style='width:260.95pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:36.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'><v:shapetype id="_x0000_t75"
   coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe"
   filled="f" stroked="f">
   <v:stroke joinstyle="miter"/>
   <v:formulas>
    <v:f eqn="if lineDrawn pixelLineWidth 0"/>
    <v:f eqn="sum @0 1 0"/>
    <v:f eqn="sum 0 0 @1"/>
    <v:f eqn="prod @2 1 2"/>
    <v:f eqn="prod @3 21600 pixelWidth"/>
    <v:f eqn="prod @3 21600 pixelHeight"/>
    <v:f eqn="sum @0 0 1"/>
    <v:f eqn="prod @6 1 2"/>
    <v:f eqn="prod @7 21600 pixelWidth"/>
    <v:f eqn="sum @8 21600 0"/>
    <v:f eqn="prod @7 21600 pixelHeight"/>
    <v:f eqn="sum @10 21600 0"/>
   </v:formulas>
   <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
   <o:lock v:ext="edit" aspectratio="t"/>
  </v:shapetype><v:shape id="Resim_x0020_3" o:spid="_x0000_i1026" type="#_x0000_t75">
   <img src="teklifformu_dosyalar/image001.png" o:title=""  style='width:139.5pt;height:60.75pt;visibility:visible;mso-wrap-style:square'/>
  </v:shape><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes;height:36.8pt'>
  <td width=348 valign=top style='width:260.95pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:36.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>  Alazı Mahallesi, 31001 <span style='mso-spacerun:yes'>   </span>Antakya/Hatay
  <span style='mso-spacerun:yes'>   </span><o:p></o:p></span></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>HATAY VERGİ DAİRESİ : 742 040
  4834<span style='mso-spacerun:yes'>  </span><o:p></o:p></span></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>TELEFON : +90 (326) 267-31-73<span
  style='mso-spacerun:yes'>             </span><o:p></o:p></span></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>FAKS : +90 (326) 267-31-73<span
  style='mso-spacerun:yes'>   </span><o:p></o:p></span></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>E-mail : info@yetisen.com <o:p></o:p></span></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>KEP: info@yetisen.com <o:p></o:p></span></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-top:-53.25pt;mso-height-rule:exactly'><span style='font-size:
  9.0pt;mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:"Times New Roman";
  mso-fareast-language:TR;mso-no-proof:yes'>WEB: www.yetisen.com<span
  style='mso-spacerun:yes'>    </span><o:p></o:p></span></p>
  </td>
 </tr>
</table>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=0
 style='margin-bottom:7px;width:519.25pt;border-collapse:collapse;border:none;mso-border-alt:
 solid windowtext .5pt;mso-yfti-tbllook:1152;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:22.15pt'>
  <td width=173 style='width:129.8pt;border:solid #C00000 1.0pt;mso-border-alt:
  solid #C00000 .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:22.15pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Nakliye Firması<o:p></o:p></span></b></p>
  </td>
  <td width=173 style='width:129.8pt;border:solid #C00000 1.0pt;border-left:
  none;mso-border-left-alt:solid #C00000 .5pt;mso-border-alt:solid #C00000 .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:22.15pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>TESLİM SÜRESİ<o:p></o:p></span></b></p>
  </td>
  <td width=173 style='width:129.8pt;border:solid #C00000 1.0pt;border-left:
  none;mso-border-left-alt:solid #C00000 .5pt;mso-border-alt:solid #C00000 .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:22.15pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Tedarikçi Sevk<o:p></o:p></span></b></p>
  </td>
  <td width=173 style='width:129.85pt;border:solid #C00000 1.0pt;border-left:
  none;mso-border-left-alt:solid #C00000 .5pt;mso-border-alt:solid #C00000 .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:22.15pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Sipariş No<o:p></o:p></span></b></p>
  </td>
    <td width=173 style='width:129.85pt;border:solid #C00000 1.0pt;border-left:
  none;mso-border-left-alt:solid #C00000 .5pt;mso-border-alt:solid #C00000 .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:22.15pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Sipariş Tarihi<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:22.1pt'>
  <td width=173 style='width:129.8pt;border:solid #C00000 1.0pt;border-top:
  none;mso-border-top-alt:solid #C00000 .5pt;mso-border-alt:solid #C00000 .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:22.1pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span class=SpellE><?php echo $nakliyefirmasi; ?></span></p>
  </td>
  <td width=173 style='width:129.8pt;border-top:none;border-left:none;
  border-bottom:solid #C00000 1.0pt;border-right:solid #C00000 1.0pt;
  mso-border-top-alt:solid #C00000 .5pt;mso-border-left-alt:solid #C00000 .5pt;
  mso-border-alt:solid #C00000 .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:22.1pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span class=SpellE><?php echo $teslimsuresi; ?></span></p>
  </td>
  <td width=173 style='width:129.8pt;border-top:none;border-left:none;
  border-bottom:solid #C00000 1.0pt;border-right:solid #C00000 1.0pt;
  mso-border-top-alt:solid #C00000 .5pt;mso-border-left-alt:solid #C00000 .5pt;
  mso-border-alt:solid #C00000 .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:22.1pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span class=SpellE><?php echo $tedarikcisevk; ?></span></p>
  </td>
  <td width=173 style='width:129.85pt;border-top:none;border-left:none;
  border-bottom:solid #C00000 1.0pt;border-right:solid #C00000 1.0pt;
  mso-border-top-alt:solid #C00000 .5pt;mso-border-left-alt:solid #C00000 .5pt;
  mso-border-alt:solid #C00000 .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:22.1pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span class=SpellE><?php echo $siparisno; ?></span></p>
  </td>
    <td width=173 style='width:129.85pt;border-top:none;border-left:none;
  border-bottom:solid #C00000 1.0pt;border-right:solid #C00000 1.0pt;
  mso-border-top-alt:solid #C00000 .5pt;mso-border-left-alt:solid #C00000 .5pt;
  mso-border-alt:solid #C00000 .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:22.1pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><span class=SpellE><?php echo date('d-m-Y',strtotime($siparistarihi)); ?></span></p>
  </td>
 </tr>
</table>

<table class=MsoTableGridLight border=1 cellspacing=0 cellpadding=0 align=left
 width=0 style='width:737.5pt;border-collapse:collapse;border:none;mso-border-alt:
 solid #BFBFBF .5pt;mso-border-themecolor:background1;mso-border-themeshade:
 191;mso-yfti-tbllook:480;mso-table-lspace:7.05pt;margin-left:4.8pt;mso-table-rspace:
 7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:paragraph;mso-table-anchor-horizontal:
 margin;mso-table-left:left;mso-table-top:8.6pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:12.4pt'>
  <td width=983 colspan=10 style='width:737.5pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;mso-border-alt:
  solid #BFBFBF .5pt;mso-border-themecolor:background1;mso-border-themeshade:
  191;padding:0cm 5.4pt 0cm 5.4pt;height:12.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='mso-bidi-font-family:
  Calibri;mso-bidi-theme-font:minor-latin;color:red'></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:12.4pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:0cm;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>S.No</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>.<o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:0cm;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>Malzeme</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'> Kodu<o:p></o:p></span></b></p>
  </td>
  <td width=172 valign=top style='width:100%;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:0cm;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>Malzeme</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'> <span class=SpellE>Adı</span>
  <span class=SpellE>ve</span> <span class=SpellE>Cinsi</span><o:p></o:p></span></b></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:12.6pt;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>Miktar</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'><o:p></o:p></span></b></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:0cm;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>Birim</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'><o:p></o:p></span></b></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:12.6pt;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>Birim</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'> <span class=SpellE>Fiyatı</span><o:p></o:p></span></b></p>
  </td>
   <td width=93 valign=top style='width:69.7pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:0cm;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'>Para <span class=SpellE>Birimi</span><o:p></o:p></span></b></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  12.4pt'>
  <p class=MsoNormal align=center style='margin-top:0cm;margin-right:0cm;
  margin-bottom:0cm;margin-left:.05pt;margin-bottom:.0001pt;text-align:center;
  line-height:10.1pt;mso-line-height-rule:exactly;mso-pagination:none;
  text-autospace:none;mso-element:frame;mso-element-frame-hspace:7.05pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  margin;mso-element-top:8.6pt;mso-height-rule:exactly'><span class=SpellE><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'>Toplam</span></b></span><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
  mso-fareast-font-family:"Microsoft Sans Serif";mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin;mso-ansi-language:EN-US'> <span class=SpellE>Tutar</span><o:p></o:p></span></b></p>
  </td>

 </tr>
 <tr style='mso-yfti-irow:2;height:19.85pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>1</span></b><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-ansi-language:
  EN-US'><o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[0]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[0]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[0]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:19.85pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[0]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[0]; ?></span><o:p></o:p></span></p>
  </td>
    <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[0]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.85pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[0]; ?></span><o:p></o:p></span></p>
  </td>

 </tr>
 <tr style='mso-yfti-irow:3;height:19.95pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>2</span></b><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-ansi-language:
  EN-US'><o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[1]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[1]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[1]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[1]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[1]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[1]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[1]; ?></span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;height:19.95pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>3</span></b><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-ansi-language:
  EN-US'><o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[2]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[2]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[2]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[2]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[2]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[2]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  19.95pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[2]; ?></span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;height:20.05pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>4</span></b><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-ansi-language:
  EN-US'><o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[3]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[3]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[3]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[3]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[3]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[3]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[3]; ?></span><o:p></o:p></span></p>
  </td>

 </tr>
 <tr style='mso-yfti-irow:6;height:20.05pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>5<o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[4]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[4]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[4]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[4]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[4]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[4]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[4]; ?></span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;height:20.05pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>6<o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[5]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[5]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[5]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[5]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[5]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[5]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[5]; ?></span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;height:20.05pt'>
  <td width=44 valign=top style='width:32.9pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>7<o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[6]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[6]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[6]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
  background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[6]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[6]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[6]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[6]; ?></span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;height:20.05pt'>
  <td width=44 valign=top style='width:32.9pt;border-top:none;border-left:solid #BFBFBF 1.0pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.55pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  lang=EN-US style='font-size:10.0pt;mso-fareast-font-family:"Microsoft Sans Serif";
  mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-font-width:
  99%;mso-ansi-language:EN-US'>8<o:p></o:p></span></b></p>
  </td>
  <td width=122 valign=top style='width:91.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemekod[7]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=172 valign=top style='width:129.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal style='margin-top:.05pt;margin-right:5.55pt;margin-bottom:
  0cm;margin-left:.2pt;margin-bottom:.0001pt;mso-line-height-alt:9.5pt;
  mso-pagination:none;text-autospace:none;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $malzemeadicins[7]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=105 valign=top style='width:78.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $miktar[7]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=114 colspan=2 valign=top style='width:85.5pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
   mso-ansi-language:EN-US'><span class=SpellE><?php echo $birim[7]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=141 valign=top style='width:105.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
    mso-ansi-language:EN-US'><span class=SpellE><?php echo $birimfiyat[7]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.3pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:.65pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $parabirimi[7]; ?></span><o:p></o:p></span></p>
  </td>
  <td width=96 valign=top style='width:72.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid #BFBFBF 1.0pt;
  mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
  mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
  mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:191;mso-border-bottom-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.05pt'>
  <p class=MsoNormal align=center style='margin-top:5.35pt;margin-right:0cm;
  margin-bottom:0cm;margin-left:2.25pt;margin-bottom:.0001pt;text-align:center;
  line-height:normal;mso-pagination:none;text-autospace:none;mso-element:frame;
  mso-element-frame-hspace:7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:
  paragraph;mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;
  mso-height-rule:exactly'><span lang=EN-US style='font-size:8.0pt;mso-fareast-font-family:
  "Microsoft Sans Serif";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;
  mso-ansi-language:EN-US'><span class=SpellE><?php echo $tutar[7]; ?></span><o:p></o:p></span></p>
  </td>
  
 </tr>

 <tr style='mso-yfti-irow:11;height:15.75pt'>
  <td width=492 colspan=5 valign=top style='width:368.75pt;border:none;
  padding:0cm 5.4pt 0cm 0pt;height:15.75pt'>
      <p style="margin-top: 6px;">Kalite Şartları : </p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='mso-bidi-font-family:
  Calibri;mso-bidi-theme-font:minor-latin;color:red;font-size:10px;'><o:p>Malzeme ambalajlama işlemine dikkat edilmesi gerekmektedir.Gelen malzeme miktarı sipariş miktarı ile aynı olmalıdır.Tek iot durumuna dikkat edilmelidir.</o:p></span></b></p>
  </td>
 
  <td width=492 colspan=5 valign=top style='width:368.75pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.75pt'>
  <table class=MsoTableGridLight border=1 cellspacing=0 cellpadding=0
   align=right style='border-collapse:collapse;border:none;mso-border-alt:solid #BFBFBF .5pt;
   mso-border-themecolor:background1;mso-border-themeshade:191;mso-table-overlap:
   never;mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;margin-left:-21.2pt;
   mso-table-rspace:7.05pt;margin-right:-5.2pt;mso-table-anchor-vertical:paragraph;
   mso-table-anchor-horizontal:margin;mso-table-left:right;mso-table-top:-2.2pt;
   mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
   <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:12.25pt'>
    <td valign=top style='border:solid #BFBFBF 1.0pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span class=SpellE><b style='mso-bidi-font-weight:normal'><span
    lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;font-family:
    "Calibri",sans-serif;mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:
    minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'>Toplam</span></b></span><b
    style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
    mso-bidi-font-size:9.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
    minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'>
    <span class=SpellE>Tutar</span><o:p></o:p></span></b></p>
    </td>
    <td valign=top style='border:solid #BFBFBF 1.0pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;border-left:none;mso-border-left-alt:
    solid #BFBFBF .5pt;mso-border-left-themecolor:background1;mso-border-left-themeshade:
    191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><span
    class=SpellE><?php echo $toplam; ?></span><o:p></o:p></span></p>
    </td>
    <td valign=top style='border:solid #BFBFBF 1.0pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;border-left:none;mso-border-left-alt:
    solid #BFBFBF .5pt;mso-border-left-themecolor:background1;mso-border-left-themeshade:
    191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><o:p></o:p></span></p>
    </td>
   </tr>
   <tr style='mso-yfti-irow:1;height:12.25pt'>
    <td valign=top style='border:solid #BFBFBF 1.0pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;border-top:none;mso-border-top-alt:
    solid #BFBFBF .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:
    191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><b style='mso-bidi-font-weight:normal'><span lang=EN-US
    style='font-size:10.0pt;mso-bidi-font-size:9.0pt;font-family:"Calibri",sans-serif;
    mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;
    mso-bidi-font-family:"Microsoft Sans Serif"'>KDV %18<o:p></o:p></span></b></p>
    </td>
    <td valign=top style='border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;
    mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
    border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:background1;
    mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
    mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
    mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
    mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><span
    class=SpellE><?php echo $kdv; ?></span><o:p></o:p></span></p>
    </td>
    <td valign=top style='border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;
    mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
    border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:background1;
    mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
    mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
    mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
    mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><o:p>&nbsp;</o:p></span></p>
    </td>
   </tr>
   <tr style='mso-yfti-irow:2;height:12.25pt'>
    <td valign=top style='border:solid #BFBFBF 1.0pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;border-top:none;mso-border-top-alt:
    solid #BFBFBF .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:
    191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span class=SpellE><b style='mso-bidi-font-weight:normal'><span
    lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;font-family:
    "Calibri",sans-serif;mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:
    minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'>Genel</span></b></span><b
    style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:10.0pt;
    mso-bidi-font-size:9.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
    minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'>
    <span class=SpellE>Toplam</span> <span class=SpellE>Tutar</span><o:p></o:p></span></b></p>
    </td>
    <td valign=top style='border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;
    mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
    border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:background1;
    mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
    mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
    mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
    mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><span
    class=SpellE><?php echo $geneltoplam; ?></span><o:p></o:p></span></p>
    </td>
    <td valign=top style='border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;
    mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
    border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:background1;
    mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
    mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
    mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
    mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:12.25pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><o:p>&nbsp;</o:p></span></p>
    </td>
   </tr>
  
   <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes;height:13.75pt'>
    <td valign=top style='border:solid #BFBFBF 1.0pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;border-top:none;mso-border-top-alt:
    solid #BFBFBF .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:
    191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:13.75pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><b style='mso-bidi-font-weight:normal'><span lang=EN-US
    style='font-size:10.0pt;mso-bidi-font-size:9.0pt;font-family:"Calibri",sans-serif;
    mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;
    mso-bidi-font-family:"Microsoft Sans Serif"'>DÖVİZ KURU<o:p></o:p></span></b></p>
    </td>
    <td valign=top style='border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;
    mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
    border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:background1;
    mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
    mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
    mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
    mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:13.75pt'>
    <p class=MsoBodyText style='mso-element:frame;mso-element-frame-hspace:
    7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
    mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
    exactly'><span lang=EN-US style='font-size:10.0pt;mso-bidi-font-size:9.0pt;
    font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
    mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Microsoft Sans Serif"'><span
    class=SpellE><?php echo $dovizkuru; ?></span><o:p></o:p></span></p>
    </td>
    <td valign=top style='border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;
    mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
    border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:background1;
    mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
    mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
    mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
    mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;
    height:13.75pt'>
    <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;
    line-height:normal;mso-element:frame;mso-element-frame-hspace:7.05pt;
    mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
    margin;mso-element-top:8.6pt;mso-height-rule:exactly'><o:p><?php echo $parabirimi[0]; ?></o:p></p>
    </td>
   </tr>
  </table>
  <p class=MsoNormal align=right style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:right;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='mso-bidi-font-family:
  Calibri;mso-bidi-theme-font:minor-latin;color:red'><o:p></o:p></span></b></p>
  </td>
 </tr>
 
 <tr style='mso-yfti-irow:12;height:4.0pt'>
  <td width=983 colspan=10 style='width:737.5pt;border:none;border-bottom:solid #BFBFBF 1.0pt;
  mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;
  mso-border-bottom-alt:solid #BFBFBF .5pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:4.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='mso-bidi-font-family:
  Calibri;mso-bidi-theme-font:minor-latin;color:red'>**KAŞE VE İMZA İLE
  TARAFIMIZA MAİL GÖNDERİLMESİNİ RİCA EDERİZ.**<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;height:15.75pt'>
  <td width=492 colspan=5 style='width:368.75pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  15.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:9.0pt;
  mso-bidi-font-size:11.0pt;mso-bidi-font-family:Calibri;mso-bidi-theme-font:
  minor-latin'>HAZIRLAYAN<o:p></o:p></span></b></p>
  </td>
  <td width=492 colspan=5 style='width:368.75pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  15.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:9.0pt;
  mso-bidi-font-size:11.0pt;mso-bidi-font-family:Calibri;mso-bidi-theme-font:
  minor-latin'>ONAYLAYAN<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;mso-yfti-lastrow:yes;height:59.6pt'>
  <td width=492 colspan=5 style='width:368.75pt;border:solid #BFBFBF 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:191;border-top:none;
  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  59.6pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:9.0pt;
  mso-bidi-font-size:11.0pt;mso-bidi-font-family:Calibri;mso-bidi-theme-font:
  minor-latin;mso-fareast-language:TR;mso-no-proof:yes'><v:shape id="Resim_x0020_20"
   o:spid="_x0000_i1025" type="#_x0000_t75" >
  <!-- <img src="teklifformu_dosyalar/image002.png" o:title="" style='width:85.5pt;height:54pt;
   visibility:visible;mso-wrap-style:square'/> -->
  </v:shape></span></b><b style='mso-bidi-font-weight:normal'><span
  style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-bidi-font-family:Calibri;
  mso-bidi-theme-font:minor-latin'><o:p></o:p></span></b></p>
  </td>
  <td width=492 colspan=5 style='width:368.75pt;border-top:none;border-left:
  none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:191;
  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:
  59.6pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:margin;mso-element-top:8.6pt;mso-height-rule:
  exactly'><b style='mso-bidi-font-weight:normal'><span style='font-size:9.0pt;
  mso-bidi-font-size:11.0pt;mso-bidi-font-family:Calibri;mso-bidi-theme-font:
  minor-latin'><o:p>&nbsp;</o:p></span></b></p>
  </td>
 </tr>
 <![if !supportMisalignedColumns]>
 <tr height=0>
  <td width=44 style='border:none'></td>
  <td width=122 style='border:none'></td>
  <td width=172 style='border:none'></td>
  <td width=105 style='border:none'></td>
  <td width=48 style='border:none'></td>
  <td width=66 style='border:none'></td>
  <td width=141 style='border:none'></td>
  <td width=96 style='border:none'></td>
  <td width=96 style='border:none'></td>
  <td width=93 style='border:none'></td>
 </tr>
 <![endif]>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

</div>

</body>
<script>window.print();</script>
</html>
