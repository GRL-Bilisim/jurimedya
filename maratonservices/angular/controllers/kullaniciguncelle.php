<?php 
if($_GET['page_id']=='pdo_kullaniciguncelle')
    {
       include 'pdo_baglanti.php';

    


       $kullaniciadi = $_POST[kullaniciadi];
       $adisoyadi = $_POST[adisoyadi];
       $unvani=$_POST[unvani];
       $email=$_POST[email];
       $userid=$_POST[userid];
       
       $sql=$db->prepare("select * from kullanicilar where user_indeks=? and deleted='false' ");
       $sql->execute([$userid]);
       
       if($sql !== false)
       {
           while($oku=$sql-> fetch(PDO::FETCH_ASSOC))
           {
           $sql=$db->prepare("UPDATE kullanicilar SET username=?,adi=?,unvani=?,eposta=? where user_indeks=?");
           $sql->execute([$kullaniciadi,$adisoyadi,$unvani,$email,$userid]);
            }

    }
    }
?>