<?php 
if($_GET['page_id']=='pdo_kullanicigirisi')
    {
       include 'pdo_baglanti.php';
       $username = $_GET[username];
       $password = $_GET[password];
       
         $query=$db->prepare("select firmabilgileri.yurtadi,kullanicilar.*,concat_ws('','https://www.jurimedya.com/maratonservices/',firmabilgileri.logo) as logourl,concat_ws('','https://www.jurimedya.com/maratonservices/',firmabilgileri.mobillogo) as mobillogourl,concat_ws('','https://www.jurimedya.com/maratonservices/',resim) as profilresim,ismerkezi as unvani from kullanicilar left join firmabilgileri on firmabilgileri.index_firmabilgileri=1 where kullanicilar.username=? and kullanicilar.pass=?  ");
      
         $query->execute([$username,$password]);
                        
            $rows = array();
            
       
        if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
               echo json_turkce(($kayitlar));
}
   
}

?>