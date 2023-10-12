
<?php 

 if ($_GET['page_id']=='isemrianaliz')
    {
  
         include 'pdo_baglanti.php';
         $isemriindex=$_GET[isemriindex];

         $query=$db->prepare("select a.*,c.adi_soyadi as operatoraktif,c.index_personel_ozluk_bilgileri as perid from isemrioperasyonlari a left join is_istasyonlari b on b.is_istasyon_adi=a.isistasyonu left join personel_ozluk_bilgileri c on c.index_personel_ozluk_bilgileri=b.aktifoperator where index_isemrioperasyonlari=?  and a.deleted='false' ");
         $query->execute([$isemriindex]);
         

       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
?>