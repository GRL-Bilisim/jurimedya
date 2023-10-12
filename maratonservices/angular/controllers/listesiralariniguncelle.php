<?php 
if($_GET['page_id']=='listesirasiniguncelle'){
    include 'pdo_baglanti.php';

$formid = $_GET['formid'];
$listesiralari = $_GET['guncelliste'];

$listek = explode(';',$listesiralari);
$updatesorgusu="";
for ($i=0; $i < count($listek) ; $i++) { 
    if($listek[$i]!=''){

    
$siratek = explode('-',$listek[$i]);

$updateset="";
for ($j=0; $j < count($siratek) ; $j++) { 

    if(is_numeric($siratek[$j])){
        $sirasi=$siratek[$j];
     
    }else{
        $alanadi = $siratek[$j];
        
    }
}

$updatesorgusu=$updatesorgusu." update formalanlari set  alansirasi='$sirasi' where form_index='$formid' and alanadi='$alanadi' ; ";

}
}

$sqlSira = $db->prepare($updatesorgusu);
$sqlSira->execute([]);
if($sqlSira!=false){
echo "[{\"status\":\"OK\"}]";
}

}








?>