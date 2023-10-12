<?php


try {

    $db = new PDO("mysql:host=localhost;dbname=jurimedy_app",'jurimedy_metin2_1','928501Mo**!!',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES latin1"));
    //echo "veritabanı bağlantısı başarılı";

}

catch(PDOException $e ){

    echo $e->getMessage();
}


?>