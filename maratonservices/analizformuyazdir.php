<?php

include 'baglanti.php';

$cont = $_GET[content];
if($cont==1){
    $widt = 'width:100%;';
}
else{
    $widt =  'width:571.15pt;';
}



$sql = "select * from maliyetanalizi where index_maliyetanalizi = '".$_GET[analizid]."' ";

$sorgula = mysqli_query($connection,$sql);

while($getir = mysqli_fetch_assoc($sorgula)){
    $teknikresim = $getir[resim];
 
    $unite = "ÜRETİM VE PLANLAMA MD";
   $firmaid=$getir[firmaadi];
   $kayitno = $getir[kayitno];
   $formno = $getir[index_maliyetanalizi];
   $yetisenno = $getir[yetisenkodu];
   $yenicontano = $getir[contakodu];
   $contasinifi = $getir[contasinifi];
   $ili = $getir[ili];
   $tarih = $getir[tarih];
   $bilgituru = iconv( "ISO-8859-9","UTF-8",$getir[bilgituru]);
   $D =  $getir[olculerd];
   $d =  $getir[olculerd2];
   $d1 =  "";
   $H =  $getir[olculerh];
   $h =  $getir[olculerh2];
   $formu =  $getir[formulno];
   $presgrubu = $getir[presgrubu];
   $goz = $getir[kalipgozsayisi];
   $birbaskiconta = $getir[kalipgozsayisi];
   $birkaliptakiconta = $getir[birbaskidakicontaadet];
   $saattebaskiadet = $getir[saattebaskiadedi];
   $contaagirligi = $getir[contaagirligi];
   $hamurgramaji = $getir[hamurgramaj];
   $presdolulukorani = $getir[presdolulukorani];
   $tl = $getir[kalipmaliyeti];
   $usd = $getir[kalipmaliyeti];
   $kalipomruadet = $getir[kalipomrubaskiadet];
   $figuru = iconv( "ISO-8859-9","UTF-8",$getir[figur]);
   $ekiscilik = $getir[ekiscilik];
   $yilliksiparis = $getir[yilliktahminisiparis];
   	
   $ekiscilikaciklama = $getir[ekiscilikaciklama];
   $kesmemakinano = $getir[kesmemakinano];
   $boruboyu = $getir[boruboyutu];
   $aciklama = $getir[aciklama];
   $birborudakiconta = $getir[birborudakicontasayisi];
   $gunlukkesilenboru = $getir[gunlukkesilenboru];
   $gunlukkesilenconta = $getir[gunlukkesilenconta];
   $gunluktesviyeadedi = $getir[gunluktesviyeadedi];
   $kolitipi = $getir[kolitipi];
   $contastokmiktar = $getir[contastokmiktari];
   $koliicisayi = $getir[koliicisayisi];
   $contaninkalibistokta = $getir[kalipstoktavarmi];
   $müşteriyeteklif = $getir[taleptarihi];
   $siparisteyidi = $getir[musteriyeteyidtarihi];
   $tekliffiyat = "";
   $birimfiyat = "";
   $formudolduran = iconv( "ISO-8859-9","UTF-8",$getir[formudolduran]);
   $onaylayan = iconv( "ISO-8859-9","UTF-8",$getir[onaylayan]);
   $teslimalan = iconv( "ISO-8859-9","UTF-8",$getir[teslimalan]);
    $teklif = iconv( "ISO-8859-9","UTF-8",$getir[teklif]);
    $isteksekli = $getir[isteksekli];

    if($isteksekli==''){
        $isteksekli=" ... ";
    }
   
   
   $firma = mysqli_query($connection,"select * from cariler where index_cariler='$firmaid'");
   while($firmabilgileri = mysqli_fetch_assoc($firma)){
        $talepedenfirma= iconv( "ISO-8859-9","UTF-8",$firmabilgileri[firma_adi]);
   }
   
    $formulas = mysqli_query($connection,"select * from formulasyon where index_formulasyon='$formu'");
   while($formulasy = mysqli_fetch_assoc($formulas)){
        $formulno = iconv( "ISO-8859-9","UTF-8",$formulasy[formul_ad]);
   }
   

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
<link rel=File-List href="analizf_dosyalar/filelist.xml">
<link rel=Edit-Time-Data href="analizf_dosyalar/editdata.mso">
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
  <o:Revision>3</o:Revision>
  <o:TotalTime>73</o:TotalTime>
  <o:Created>2021-07-08T14:23:00Z</o:Created>
  <o:LastSaved>2021-07-08T14:23:00Z</o:LastSaved>
  <o:Pages>1</o:Pages>
  <o:Words>245</o:Words>
  <o:Characters>1400</o:Characters>
  <o:Lines>11</o:Lines>
  <o:Paragraphs>3</o:Paragraphs>
  <o:CharactersWithSpaces>1642</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:RelyOnVML/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=themeData href="analizf_dosyalar/themedata.thmx">
<link rel=colorSchemeMapping href="analizf_dosyalar/colorschememapping.xml">
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
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:1;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:0 0 0 0 0 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:162;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073732485 9 0 511 0;}
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
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:70.85pt 70.85pt 70.85pt 70.85pt;
	mso-header-margin:35.4pt;
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
 width=0 style='<?php echo $widt; ?>border-collapse:collapse;border:none;mso-border-alt:
 solid windowtext .5pt;mso-yfti-tbllook:1184;mso-table-lspace:7.05pt;
 margin-left:4.8pt;mso-table-rspace:7.05pt;margin-right:4.8pt;mso-table-anchor-vertical:
 margin;mso-table-anchor-horizontal:margin;mso-table-left:center;mso-table-top:
 -48.0pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:46.6pt'>
  <td width=411 colspan=10 style='width:307.9pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:46.6pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:18.0pt;mso-bidi-font-size:
  11.0pt;mso-fareast-language:TR;mso-no-proof:yes'><v:shapetype id="_x0000_t75"
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
  </v:shapetype><v:shape id="Resim_x0020_1" o:spid="_x0000_i1025" type="#_x0000_t75"
   style='width:230.25pt;height:51.75pt;visibility:visible;mso-wrap-style:square'>
   <img src="ciktitasarimlari/analizf_dosyalar/image001.jpg" o:title="image001"/>
  </v:shape></span></b></p>
  </td>
  <td width=351 colspan=10 style='width:263.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:46.6pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:18.0pt;mso-bidi-font-size:
  11.0pt'>CONTA MALİYET ANALİZ FORMU<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:17.3pt'>
  <td width=209 colspan=2 style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:17.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>ÜNİTE : <span class=SpellE><?php echo $unite; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:17.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>REVİZYON NO :<span class=SpellE><?php echo $revno; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=188 colspan=6 style='width:141.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:17.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>FORM NO : <span class=SpellE><?php echo $formno; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=163 colspan=4 style='width:122.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:17.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>KAYIT NO : <span class=SpellE><?php echo $kayitno; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;height:14.0pt'>
  <td width=209 colspan=2 style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'>TALEP
  EDEN <span class=GramE>FİRMA :</span><o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $talepedenfirma; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=188 colspan=6 style='width:141.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>İLİ : <?php echo $ili; ?><o:p></o:p></span></b></p>
  </td>
  <td width=163 colspan=4 style='width:122.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>TARİH :
  <?php echo $tarih; ?><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;height:11.3pt'>
  <td width=209 colspan=2 style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>YETİŞEN <span
  class=GramE>NO :</span> <o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $yetisenno; ?></span><o:p></o:p></span></b></p>
  </td>
  
  <?php if($bilgituru=='Tahmini') { ?> 
    <td width=188 colspan=6 style='width:141.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:black;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='color:white;font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>TAHMİNİ BİLGİ<o:p></o:p></span></b></p>
  </td>
  <td width=163 colspan=4 style='width:122.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;mso-themecolor:background1'>GERÇEK BİLGİ<o:p></o:p></span></b></p>
  </td>
  <?php } 
  else if($bilgituru='Gerçek') { 
   ?> 
       <td width=188 colspan=6 style='width:141.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>TAHMİNİ BİLGİ<o:p></o:p></span></b></p>
  </td>
  <td width=163 colspan=4 style='width:122.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;background:black;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='color:white;font-size:10.0pt;mso-bidi-font-size:
  11.0pt;mso-themecolor:background1'>GERÇEK BİLGİ<o:p></o:p></span></b></p>
  </td>
   <?php }  else { ?>
          <td width=188 colspan=6 style='width:141.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>TAHMİNİ BİLGİ<o:p></o:p></span></b></p>
  </td>
  <td width=163 colspan=4 style='width:122.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;mso-themecolor:background1'>GERÇEK BİLGİ<o:p></o:p></span></b></p>
  </td>
   <?php } ?>

 </tr>
 <tr style='mso-yfti-irow:4;height:11.95pt'>
  <td width=209 colspan=2 style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>YENİ CONTA <span
  class=GramE>NO :</span> <o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $yenicontano; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=91 colspan=2 style='width:68.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>D:<o:p></o:p></span></b></p>
  </td>
  <td width=64 colspan=2 style='width:47.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><span
  class=GramE><b style='mso-bidi-font-weight:normal'><span style='font-size:
  10.0pt;mso-bidi-font-size:11.0pt'>d</span></b></span><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>:<o:p></o:p></span></b></p>
  </td>
  <td width=66 colspan=4 style='width:49.35pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><span
  class=GramE><b style='mso-bidi-font-weight:normal'><span style='font-size:
  10.0pt;mso-bidi-font-size:11.0pt'>d1 :</span></b></span><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=66 style='width:49.35pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>H:<o:p></o:p></span></b></p>
  </td>
  <td width=65 style='width:48.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.95pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><span
  class=GramE><b style='mso-bidi-font-weight:normal'><span style='font-size:
  10.0pt;mso-bidi-font-size:11.0pt'>h</span></b></span><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>:<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;height:15.45pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>CONTA <span
  class=GramE>SINIFI :</span></span></b> </p>
  </td>
  <td width=105 colspan=5 valign=top style='width:78.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $contasinifi; ?></span></span></b></p>
  </td>
  <td width=97 colspan=3 style='width:72.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>ÖLÇÜLER</span></b></p>
  </td>
  <td width=91 colspan=2 style='width:68.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $D; ?><o:p></o:p></span></b></p>
  </td>
  <td width=64 colspan=2 style='width:47.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $d; ?><o:p></o:p></span></b></p>
  </td>
  <td width=66 colspan=4 style='width:49.35pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $d1; ?><o:p></o:p></span></b></p>
  </td>
  <td width=66 style='width:49.35pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $H; ?><o:p></o:p></span></b></p>
  </td>
  <td width=65 style='width:48.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:15.45pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $h; ?><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;height:11.3pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>FORMÜL <span
  class=GramE>NO :</span></span></b> </p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $formulno; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=351 colspan=10 rowspan=16 valign=middle style='width:263.25pt;
  border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;
  border-right:solid windowtext 1.0pt;mso-border-top-alt:solid windowtext .5pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
 </v:shapetype><v:shape id="Resim_x0020_1" o:spid="_x0000_i1025" type="#_x0000_t75"
   style='width:230.25pt;height:51.75pt;visibility:visible;mso-wrap-style:square'>
   <img src="<?php echo $teknikresim; ?>" o:title="image002" style="width:100%;height:auto;"/>
  </v:shape></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;height:11.3pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>PRES GRUBU:</span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $presgrubu; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;height:11.3pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>KALIP GÖZ <span
  class=GramE>SAYISI :</span><o:p></o:p></span></b></p>
  </td>
  <td width=41 valign=top style='width:31.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
  <td width=44 colspan=2 style='width:32.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><span
  class=GramE><b style='mso-bidi-font-weight:normal'><span style='font-size:
  10.0pt;mso-bidi-font-size:11.0pt'>x</span></b></span><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=38 colspan=3 valign=top style='width:28.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
  <td width=39 valign=top style='width:29.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>=<o:p></o:p></span></b></p>
  </td>
  <td width=40 valign=top style='width:30.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  class=SpellE><?php echo $goz; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;height:11.3pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>1 BASKIDAKİ
  CONTA SYS.<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $birbaskiconta; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;height:11.3pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>1 KALIPTAKI
  CONTA SYS.<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.3pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $birkaliptakiconta; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;height:16.45pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>SAATTE BASKI
  ADEDI<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $saattebaskiadet; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;height:11.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>CONTA
  AĞIRLIĞI<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $contaagirligi; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;height:14.85pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.85pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>HAMUR
  GRAMAJI<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.85pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $hamurgramaji; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;height:16.55pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:16.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>PRES DOLULUK
  ORANI 2<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 valign=top style='width:151.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.55pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $presdolulukorani; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;height:6.75pt'>
  <td width=209 colspan=2 rowspan=2 style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>KALIP
  MALIYETİ<o:p></o:p></span></b></p>
  </td>
  <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:150%;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;line-height:150%'>TL<o:p></o:p></span></b></p>
  </td>
  <td width=97 colspan=3 valign=top style='width:72.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  class=SpellE><?php echo $tl; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:16;height:6.75pt'>
  <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:150%;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;line-height:150%'>USD<o:p></o:p></span></b></p>
  </td>
  <td width=97 colspan=3 valign=top style='width:72.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  class=SpellE><?php echo $usd; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:17;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>Kalıp Ömrü
  Baskı/Adet<o:p></o:p></span></b></p>
  </td>
  <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $kalipomruadet; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=97 colspan=3 valign=top style='width:72.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:18;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>FİGÜRÜ <o:p></o:p></span></b></p>
  </td>
  <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $figuru; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=97 colspan=3 valign=top style='width:72.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:19;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>YILLIK
  TAHMİNİ SİPARİŞ<o:p></o:p></span></b></p>
  </td>
  <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $yilliksiparis; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=97 colspan=3 style='width:72.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>ADET<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:20;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>EK İŞÇİLİK<o:p></o:p></span></b></p>
  </td>
  <?php if($ekiscilik=='Yok'){ ?>
  <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:150%;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;line-height:150%'>VAR<o:p></o:p></span></b></p>
  </td>
  <td width=97 colspan=3 style='width:72.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:black;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;color:white;mso-themecolor:background1'>YOK</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <?php  } else if($ekiscilik=='Var') { ?>
    <td width=97 colspan=3 style='width:72.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:black;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;color:white;mso-themecolor:background1'>VAR</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
    <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:150%;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;line-height:150%'>YOK<o:p></o:p></span></b></p>
  </td>

 <?php } else { ?>
     <td width=97 colspan=3 style='width:72.65pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;mso-themecolor:background1'>VAR</span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
    <td width=105 colspan=5 style='width:78.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:150%;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;line-height:150%'>YOK<o:p></o:p></span></b></p>
  </td>
 <?php } ?>
 
 </tr>
 <tr style='mso-yfti-irow:21;height:3.45pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:3.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>EK İŞÇİLİK
  AÇIKLAMA<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:3.45pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $ekiscilikaciklama; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>KESME MAKİNA
  NO<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $kesmemakinano; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=351 colspan=10 style='width:263.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'>AÇIKLAMA<o:p></o:p></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:23;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>BORU BOYU<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $boruboyu; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=351 colspan=10 rowspan=5 valign=top style='width:263.25pt;
  border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;
  border-right:solid windowtext 1.0pt;mso-border-top-alt:solid windowtext .5pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  class=SpellE><?php echo $aciklama; ?></span></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:24;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>1 BORUDAKİ
  CONTA SYS.<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $birborudakiconta; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:25;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>GÜNLÜK
  KESİLEN BORU<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $gunlukkesilenboru; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:26;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>GÜNLÜK
  KESİLEN CONTA<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $gunlukkesilenconta; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:27;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>GÜNLÜK
  TESVİYE ADEDİ<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $gunluktesviyeadedi; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:28;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>KOLİ TİPİ<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $kolitipi; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=187 colspan=5 valign=top style='width:140.05pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>CONTA STOK
  MİKTARI<o:p></o:p></span></b></p>
  </td>
  <td width=164 colspan=5 valign=top style='width:123.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  class=SpellE><?php echo $contastokmiktar; ?></span></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:29;height:6.75pt'>
  <td width=209 colspan=2 valign=top style='width:156.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>KOLİ İÇİ
  SAYI<o:p></o:p></span></b></p>
  </td>
  <td width=202 colspan=8 style='width:151.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  115%;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:around;
  mso-element-anchor-horizontal:margin;mso-element-left:center;mso-element-top:
  -48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt;line-height:115%'><span
  class=SpellE><?php echo $koliicisayi; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=187 colspan=5 valign=top style='width:140.05pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'>CONTANIN
  KALIBI STOKTA<o:p></o:p></span></b></p>
  </td>
  <td width=164 colspan=5 valign=top style='width:123.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal;mso-element:frame;mso-element-frame-hspace:7.05pt;mso-element-wrap:
  around;mso-element-anchor-horizontal:margin;mso-element-left:center;
  mso-element-top:-48.0pt;mso-height-rule:exactly'><b style='mso-bidi-font-weight:
  normal'><span style='font-size:10.0pt;mso-bidi-font-size:11.0pt'><span
  class=SpellE><?php echo $contaninkalibistokta; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:30;height:6.75pt'>
  <td width=762 colspan=20 style='width:571.15pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>EN YAKIN CONTA<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:31;height:6.75pt'>
  <td width=165 style='width:123.6pt;border:solid windowtext 1.0pt;border-top:
  none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>CONTA KODU<o:p></o:p></span></b></p>
  </td>
  <td width=145 colspan=5 style='width:109.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>YETİŞEN NO<o:p></o:p></span></b></p>
  </td>
  <td width=162 colspan=5 style='width:121.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>FORMÜL NO<o:p></o:p></span></b></p>
  </td>
  <td width=143 colspan=6 style='width:107.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>CONTA GR<o:p></o:p></span></b></p>
  </td>
  <td width=146 colspan=3 style='width:109.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>EK BİLGİ<o:p></o:p></span></b></p>
  </td>
 </tr>
 <?php 
   $enyakin = mysqli_query($connection,"select * from enyakinconta where maliyetid='$formno'");
  while($okus = mysqli_fetch_assoc($enyakin)){ 
        $oku[contakodu] =  $okus[conta_kodu];
        $oku[yetisenno] =  $okus[malzemekodu];
        $oku[formulno] = $okus[formulno];
        $oku[contagr] =  $okus[tekligramaj];
        $oku[ekbilgi] =  $okus[ekbilgi];
        ?>
         <tr style='mso-yfti-irow:32;height:6.75pt'>
  <td width=165 style='width:123.6pt;border:solid windowtext 1.0pt;border-top:
  none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $oku[contakodu]; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=145 colspan=5 style='width:109.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $oku[yetisenno]; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=162 colspan=5 style='width:121.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $oku[formulno]; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=143 colspan=6 style='width:107.2pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $oku[contagr]; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=146 colspan=3 style='width:109.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'[<span class=SpellE><?php echo $oku[ekbilgi]; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
  <?php }
 ?>

 <tr style='mso-yfti-irow:33;height:6.75pt'>
  <td width=310 colspan=6 style='width:232.65pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>YENİ KALIP DURUMU<o:p></o:p></span></b></p>
  </td>
  <td width=162 colspan=5 style='width:121.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;background:black;mso-background-themecolor:
  text1;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;color:white;mso-themecolor:background1'><?php echo $teklif; ?></span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=143 colspan=6 rowspan=2 style='width:107.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>TEKLİF FİYATI : <o:p></o:p></span></b></p>
  </td>
  <td width=146 colspan=3 rowspan=2 style='width:109.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $tekliffiyat; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:34;height:13.65pt'>
  <td width=310 colspan=6 style='width:232.65pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:13.65pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
  <td width=162 colspan=5 style='width:121.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:13.65pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:35;height:6.0pt'>
  <td width=165 style='width:123.6pt;border:solid windowtext 1.0pt;border-top:
  none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>MÜŞTERİYE <span class=GramE>TEKLİF <span
  style='mso-spacerun:yes'> </span>TARİHİ</span><o:p></o:p></span></b></p>
  </td>
  <td width=145 colspan=5 style='width:109.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>SİPARİŞ TEYİDİ<o:p></o:p></span></b></p>
  </td>
  <td width=162 colspan=5 style='width:121.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
  <td width=143 colspan=6 rowspan=2 style='width:107.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><span
  class=GramE><b style='mso-bidi-font-weight:normal'><span style='font-size:
  10.0pt;mso-bidi-font-size:11.0pt'>BİRİM<span style='mso-spacerun:yes'> 
  </span>FİYATI</span></b></span><b style='mso-bidi-font-weight:normal'><span
  style='font-size:10.0pt;mso-bidi-font-size:11.0pt'> :<o:p></o:p></span></b></p>
  </td>
  <td width=146 colspan=3 rowspan=2 style='width:109.4pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $birimfiyat; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:36;height:6.0pt'>
  <td width=165 style='width:123.6pt;border:solid windowtext 1.0pt;border-top:
  none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $müşteriyeteklif; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=145 colspan=5 style='width:109.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><span class=SpellE><?php echo $siparisteyidi; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=162 colspan=5 style='width:121.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:37;height:6.0pt'>
  <td width=250 colspan=4 style='width:187.75pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  mso-background-themecolor:text1;padding:0cm 5.4pt 0cm 5.4pt;
  height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt;mso-themecolor:background1'> </span></b><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
  <td width=265 colspan=9 style='background:black;width:198.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='color:white;font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><?php echo $isteksekli; ?> <o:p></o:p></span></b></p>
  </td>
  <td width=246 colspan=7 style='width:184.6pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:38;mso-yfti-lastrow:yes;height:6.0pt'>
  <td width=250 colspan=4 style='width:187.75pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  background:white;mso-background-themecolor:background1;padding:0cm 5.4pt 0cm 5.4pt;
  height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>FORMU DOLDURAN : <span class=SpellE><?php echo $formudolduran; ?></span><o:p></o:p></span></b></p>
  </td>
  <td width=265 colspan=9 style='width:198.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>ONAYLAYAN : <?php echo $onaylayan; ?><o:p></o:p></span></b></p>
  </td>
  <td width=246 colspan=7 style='width:184.6pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.0pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-element:frame;mso-element-frame-hspace:
  7.05pt;mso-element-wrap:around;mso-element-anchor-horizontal:margin;
  mso-element-left:center;mso-element-top:-48.0pt;mso-height-rule:exactly'><b
  style='mso-bidi-font-weight:normal'><span style='font-size:10.0pt;mso-bidi-font-size:
  11.0pt'>TESLİM ALAN :<span style='mso-spacerun:yes'> </span><span
  class=SpellE><?php echo $teslimalan; ?></span><o:p></o:p></span></b></p>
  </td>
 </tr>
 <![if !supportMisalignedColumns]>
 <tr height=0>
  <td width=165 style='border:none'></td>
  <td width=44 style='border:none'></td>
  <td width=41 style='border:none'></td>
  <td width=0 style='border:none'></td>
  <td width=43 style='border:none'></td>
  <td width=16 style='border:none'></td>
  <td width=3 style='border:none'></td>
  <td width=18 style='border:none'></td>
  <td width=39 style='border:none'></td>
  <td width=40 style='border:none'></td>
  <td width=62 style='border:none'></td>
  <td width=29 style='border:none'></td>
  <td width=14 style='border:none'></td>
  <td width=50 style='border:none'></td>
  <td width=32 style='border:none'></td>
  <td width=2 style='border:none'></td>
  <td width=17 style='border:none'></td>
  <td width=15 style='border:none'></td>
  <td width=66 style='border:none'></td>
  <td width=65 style='border:none'></td>
 </tr>
 <![endif]>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

</div>

</body>

</html>
