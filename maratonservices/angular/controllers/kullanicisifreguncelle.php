<?php 
if($_GET['page_id']=='pdo_sifreguncelle')
    {
       include 'pdo_baglanti.php';
       $sifre = $_POST[sifre];
       $yenisifre = $_POST[yenisifre];
       $userid=$_POST[userid];
       
       $sql=$db->prepare("select * from kullanicilar  where user_indeks=? and deleted='false' ");
       $sql->execute([$userid]);
       
       if($sql !== false)
       {
           while($oku=$sql-> fetch(PDO::FETCH_ASSOC))
           {
               if ($sifre==$oku[pass])
               {
                        $sql=$db->prepare("update kullanicilar set pass=? where user_indeks=? and deleted='false' ");
                        $sql->execute([$yenisifre,$userid]);
                        
               }
           }
       }
    }
?>