<?php 
    include 'pdo_baglanti.php';



if($_GET['page_id']=='siparisedonustur'){

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
 
            $sqlVdf = $db->prepare("select firsatkalemleri.*,satisfirsatlari.gelisturu,cariler.index_cariler,cariler.firma_adi as firmaadi,satisfirsatlari.turu as tipi from firsatkalemleri left join satisfirsatlari on satisfirsatlari.index_satisfirsatlari=firsatkalemleri.firsatid left join cariler on cariler.index_cariler=satisfirsatlari.firma left join maliyetanalizi on maliyetanalizi.firsatid=firsatkalemleri.firsatid left join malzemeler on malzemeler.malzemekodu = firsatkalemleri.kalemkodu where firsatkalemleri.index_firsatkalemleri=? group by firsatkalemleri.index_firsatkalemleri  ");
            $sqlVdf->execute([$pieces[$i]]);

            if($sqlVdf!=false){  
                while( $cekFs = $sqlVdf -> fetch(PDO::FETCH_ASSOC)){

                
                             $formid = '277';
                             $formTanimi = 'Sipariş Fişleri';
                             $secilenform = "siparis-fisleri";

                                $chadi = $cekFs['index_cariler'];
                                $termintarihi = $cekFs['termintarihi'];
                                $gelissekli = iconv("ISO-8859-9","UTF-8",$cekFs['gelisturu']);
                     
                                 $sip_id = $token;
                                 $ch_kodu = $cekFs['karsilikkodu'];
                                 $kesme_isemri_gelecek_miktar = $cekFs['miktar'];
                                 $firsatid = $cekFs['index_firsatkalemleri'];
                                 $kod_urun = $cekFs['kalemkodu'];

                                 $SqlTekKalem = $db->prepare("insert into siparis_izleme (firma_termini,sip_id,ch_kodu,kod_arastirildi,kesme_isemri_gelecek_miktar,kod_urun) values ('$termintarihi','$sip_id','$ch_kodu','E','$kesme_isemri_gelecek_miktar','$kod_urun') ");
                                 $SqlTekKalem->execute([]);
                                 if($SqlTekKalem!=false){
                                    $updateDurm = $db->prepare("update firsatkalemleri set teksipdurumu='Siparis Olusturuldu' where index_firsatkalemleri=? ");
                                    $updateDurm->execute([$firsatid]);
                                    $status ="Success";
                                }else{
                                    $status="Error";
                                }

                }
            }

        }
    }
    echo "[{\"Formtanimi\":\"$formTanimi\", \"TerminTarihi\":\"$termintarihi\" , \"FirmaAdi\":\"$chadi\" , \"SecilenForm\":\"$secilenform\",\"GelisSekli\": \"$gelissekli\",\"TeklifId\":\"$sip_id\",\"FormId\":\"$formid\"}]";

}




?>