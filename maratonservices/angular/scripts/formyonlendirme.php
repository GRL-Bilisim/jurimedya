<?php 
include 'pdo_baglanti.php';
if($_GET[page_id]=='formyonlendirmeyap'){
    
$kayitid=$_GET[recordid]; // alt tabloya ait kaydın idsi
$formu=$_GET[formu]; //  // alt tabloya ait formid
$gidecegiform=$_GET[gidecegiform]; // yönlenecek tablo bilgisi
$baglanacakdigertablo=$_GET[baglanacak]; // alt tablodaki eşleşecek alan
$baglanacakanatablo=$_GET[baglanacak2];  // gideceği tablodaki eşleşecek alan


// alt tabloya ait olan formun tablo adını çekiyor
$formsql = $db->prepare("select * from formlar where form_index=?");
$formsql->execute([$formu]);
 if($formsql !== false)
{
  while( $okut =$formsql->fetch(PDO::FETCH_ASSOC) )
    {
        $tablosu = $okut[tablosu];
    }

}

// alt tablonun primary keyini veriyor
   $sql=$db-> prepare("SHOW INDEX FROM $tablosu WHERE Key_name = 'PRIMARY'");
   $sql ->execute();
 while($yokn = $sql -> fetch(PDO::FETCH_ASSOC))
{
    	$alancak=$yokn[Column_name];
}

// tabloya yönlendirme yapılmadan önce belirttiğimiz alanlarla kayıtı eşleştiriyor kayıt varsa gönderiyor yoksa boş gönderiyor
    $sql="SELECT $gidecegiform.index_$gidecegiform FROM $tablosu left join $gidecegiform on $gidecegiform.$baglanacakdigertablo=$tablosu.$baglanacakanatablo where $tablosu.$alancak=?";
  
    $query=$db->prepare($sql);
    $query->execute([$kayitid]);

 if($query !== false)
{
       $kayitlar=$query->fetchAll(PDO::FETCH_ASSOC);
       echo json_turkce($kayitlar);
}

    

}
?>