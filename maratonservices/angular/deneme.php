<?php
include 'pdo_baglanti.php';
$sth = $db->prepare("SELECT * from roller");
$sth->execute();

/* Fetch all of the remaining rows in the result set */
print("Fetch all of the remaining rows in the result set:\n");
$result = $sth->fetchAll();
foreach ($result as $row => $link) {
  echo  '<a href="'.  $link['index_roller'].'">' . $link['roltanimi']. '</a></br>';
  }
?>