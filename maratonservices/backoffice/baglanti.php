<?php

ini_set('display_errors', 0);

error_reporting(E_ERROR | E_WARNING | E_PARSE); 

//Step-1 : Create a database connection
$connection=mysqli_connect("www.megacarss.com","metin2_1","p6ow=D2.m5SJ");
if(!$connection) {
    die("Database Connection error: " . mysqli_error());
}
//Step-2 : Select a database to use
$db=mysqli_select_db("otomofis_asalyapi",$connection);
if(!$db) {
    die("Database Selection error" . mysqli_error());
}



$veritabani="otomofis_asalyapi";


$veriDB="otomofis_asalyapi";






?>