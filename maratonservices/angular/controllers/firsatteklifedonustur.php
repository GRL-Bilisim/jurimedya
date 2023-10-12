<?php 
    include 'pdo_baglanti.php';



if($_GET['page_id']=='teklifedonustur'){

            // teklifler tablosundaki son id olacak indexi getir
        $sql=$db->prepare("show table status from bulutfab_yetisenerp where name='teklifler' ");
        $sql ->execute([]);
        while ($okut=$sql ->fetch(PDO::FETCH_ASSOC))
        {
            $kaym=$okut[Auto_increment];
        }

    $token = sifre_uret(6);
    $secililer = $_GET['secililer'];
    $pieces = explode(",", $secililer);

    for($i=0;$i<=count($pieces);$i++)
    {
    if($pieces[$i]>'0'){
          // secililer değeriyle gönderilen fırsat kalemlerini teklife dönüştürmesi
 
            $sqlVdf = $db->prepare("select firsatkalemleri.*,cariler.index_cariler,cariler.firma_adi as firmaadi,satisfirsatlari.turu as tipi from firsatkalemleri left join satisfirsatlari on satisfirsatlari.index_satisfirsatlari=firsatkalemleri.firsatid left join cariler on cariler.index_cariler=satisfirsatlari.firma left join maliyetanalizi on maliyetanalizi.firsatid=firsatkalemleri.firsatid left join malzemeler on malzemeler.malzemekodu = firsatkalemleri.kalemkodu where firsatkalemleri.index_firsatkalemleri=? group by firsatkalemleri.index_firsatkalemleri  ");
            $sqlVdf->execute([$pieces[$i]]);

            if($sqlVdf!=false){  
                while( $cekFs = $sqlVdf -> fetch(PDO::FETCH_ASSOC)){

                         if(iconv("ISO-8859-9","UTF-8",$cekFs['tipi'])=='İÇ TİCARET'){
                             $tipi =  iconv("UTF-8","ISO-8859-9","İç Ticaret");
                             $formid = '282';
                             $formTanimi = 'Yurtiçi Teklifler';
                             $secilenform = "yurtici-teklifler";

                         }else{
                                $tipi =  iconv("UTF-8","ISO-8859-9","Dış Ticaret");
                                $formid = '417';
                                $formTanimi = 'Yurtdışı Teklifler';
                                $secilenform = "yurtdisi-teklifler";
                            }
                                $chadi = $cekFs['index_cariler'];
                                $termintarihi = $cekFs['termintarihi'];
                                $durum = iconv( "UTF-8","ISO-8859-9","Teklif Hazırlanıyor");
                     
                     
                                 $sip_id = $token;
                                 $ch_kodu = $cekFs['karsilikkodu'];
                                 $kesme_isemri_gelecek_miktar = $cekFs['miktar'];
                                 $firsatid = $cekFs['index_firsatkalemleri'];
                                 $kod_urun = $cekFs['kalemkodu'];

                                 $SqlTekKalem = $db->prepare("insert into teklif_kalemleri (ch_adi,sip_id,ch_kodu,kesme_isemri_gelecek_miktar,firsatid,kod_urun) values ('$chadi','$sip_id','$ch_kodu','$kesme_isemri_gelecek_miktar','$firsatid','$kod_urun') ");
                                 $SqlTekKalem->execute([]);
                                 if($SqlTekKalem!=false){
                                    $updateDurm = $db->prepare("update firsatkalemleri set teksipdurumu='Teklif Olusturuldu' where index_firsatkalemleri=? ");
                                    $updateDurm->execute([$firsatid]);
                                    $status ="Success";
                                }else{
                                    $status="Error";
                                }

                }
            }

        }
    }
    echo "[{\"Formtanimi\":\"$formTanimi\", \"TerminTarihi\":\"$termintarihi\" , \"FirmaAdi\":\"$chadi\" , \"SecilenForm\":\"$secilenform\",\"TeklifId\": \"$sip_id\",\"FormId\":\"$formid\"}]";

}




?>