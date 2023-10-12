<?php 
include 'pdo_baglanti.php';

function sifre_uret2($uzunluk) {

              $karakterler = "123456789";

              $karakter_sayi = strlen($karakterler);

              for ($ras = 0; $ras <$uzunluk; $ras++) {

                  $rakam_ver = rand(0,$karakter_sayi-1);

                  $sifre_ver .= $karakterler[$rakam_ver];


              }

              return $sifre_ver;

          }  

   if($_GET['page_id']=='kvkkgonder')
    {
        
        
        $guvenlikkodu=sifre_uret2(5);
        
              $sql=$db->prepare("select * from cariler where deleted='false' and cariindex=".$_GET['recordid']);
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  $musteriadi=iconv( "ISO-8859-9","UTF-8",$okut[caritanimi]);
                   $telefon=iconv( "ISO-8859-9","UTF-8",$okut[yetkiligsm]);
                  
                  
              }
}


         $query = "update cariler set gonderilenkod='$guvenlikkodu' where cariindex=".$_GET['recordid'];
       
   $dc=$db->prepare($query);
       $dc->execute(); 
        
            $sql=$db->prepare("select * from kvkkmesajlari where deleted='false' ");
        $sql->execute();
        
                      if($sql !== false)
{
            while( $okut =$sql->fetch(PDO::FETCH_ASSOC) )
              {
                  
                  $mesaj=iconv( "ISO-8859-9","UTF-8",$okut['mesajicerigi']);
                  
                  $mesaj='Sn '.$musteriadi.' '.$mesaj;
                  
                  if ($okut['sonunakodekle']=='E')
                  {
                      $mesaj=$mesaj." Kod:".$guvenlikkodu;
                  }
                  
                  //buraya da sms kodu yaz
                  ?>
                         <html lang="en">
                  <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <!-- Required meta tags -->
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                
                    <!-- Bootstrap CSS -->
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                  </head>
                  <body>
                   <?php
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL,"http://api2.ekomesaj.com/json/syncreply/SendInstantSms");
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                        'Content-Type: application/json'                                                                     
                    )); 
                    curl_setopt($ch, CURLOPT_POSTFIELDS,
                              '{
                        "Credential": {
                            "Username": "5327134271",
                            "Password": "5327134271",
                            "ResellerID": 2174
                        },
                        "Sms": {
                            "ToMsisdns": [
                			{
                            "Msisdn":9'.$telefon.',
                            "Name": "",
                            "Surname": "",
                            "CustomField1": ""
                                } 
                            ],
                            "ToGroups": [],
                            "IsCreateFromTeplate": false,
                            "SmsTitle": "DR.C.VURAL",
                            "SmsContent": "'.$mesaj.'",
                            "RequestGuid": "",
                            "CanSendSmsToDuplicateMsisdn": false,
                            "SmsSendingType": "ByNumber",
                            "SenderName": "DR.C.VURAL",
                            "Route": 0,
                            "ValidityPeriod": 0,
                            "DataCoding": "Default"
                        }
                    }');
                
                // In real life you should use something like:
                // curl_setopt($ch, CURLOPT_POSTFIELDS, 
                //          http_build_query(array('postvar1' => 'value1')));
                
                // Receive server response ...
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                $server_output = curl_exec($ch);
                
                curl_close ($ch);
                
                var_dump($server_output);

                    ?>
                
                    <!-- Optional JavaScript -->
                    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                  </body>
                </html>
                  <?php
                  
                  
                  
              }
}
}
?>