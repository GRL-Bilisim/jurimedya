import { Component, OnInit, ChangeDetectorRef, Input, ViewEncapsulation, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
import { ToastrService } from 'ngx-toastr';

import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';


@Component({
  selector: 'app-barcodeform',
  templateUrl: './barcodeform.component.html',
  styleUrls: ['./barcodeform.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None,


})
export class BarcodeFormComponent implements OnInit {

  availableDevices: MediaDeviceInfo[];
  deviceCurrent: MediaDeviceInfo;
  deviceSelected: string;
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  torchEnabled = false;
  scannerEnabled=true;
  data: any;
  formbasligi: any;
  formid: any;
  closeResult: string;
  mastervalue: any;
  id: any;
  secilenuretim: any;
  cikisfirmasi:any;
  dizidata: any;
  personeldata: string;
  secilenhamur: any;



  constructor(public toastr: ToastrService, private cdr: ChangeDetectorRef, private modalService: NgbModal, public activeModal: NgbActiveModal, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {



  }
  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(resultString);
    if(this.formid=='751'){

      this.modalService.dismissAll();

      
      var kod = this.qrResultString.split('_');
      var durum=this;
      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);



      if(kod[2]=='' || kod[2]==undefined || kod[2]==null){

          
              swal.fire({
                title: "Miktar Giriniz",
                text: "Çıkış yapmak için miktar giriniz.",
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Çıkış Yap',
                cancelButtonText: 'Vazgeç'        
            }).then((result) => {
                if (result.value) {       
          
          
                  var miktarlicik= localStorage.getItem('url') + "angular/dataservis.php?page_id=perakendesatissevk&kayitid="+durum.id+"&malzemeid="+kod[1]+"&userid="+localStorage.getItem('userid')+"&cikisyapilanfirma="+durum.cikisfirmasi+"&cikismiktari="+result.value;
                  console.log(miktarlicik);     
                  durum.http.get<any>(miktarlicik).subscribe(data => {
                    durum.activeModal.close('Onaylandi');
                    durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
                    durum.modalService.dismissAll();
            
                  });
          
                }
            });
          
          


      }else{
        swal.fire({
          title: 'Çıkış İşlemi',
          icon: 'question',
          text: "Lütfen yapmak istediğiniz çıkış işlemi seçiniz? ",
          showCancelButton: true,
          showDenyButton:true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          denyButtonColor:'#40C057',
          denyButtonText: 'Miktar Girerek Gönder',
          confirmButtonText: 'Tamamını Gönder',
          cancelButtonText: 'Vazgeç'
          }).then((result) => {
            if (result.isDenied) {
          
          
              swal.fire({
                title: "Miktar Giriniz",
                text: "Çıkış yapmak için miktar giriniz.",
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Çıkış Yap',
                cancelButtonText: 'Vazgeç'        
            }).then((result) => {
                if (result.value) {       
          
          
                  var miktarlicik= localStorage.getItem('url') + "angular/dataservis.php?page_id=perakendesatissevk&kayitid="+durum.id+"&lotno="+kod[0]+"&userid="+localStorage.getItem('userid')+"&cikisyapilanfirma="+durum.cikisfirmasi+"&cikismiktari="+result.value;
                  console.log(miktarlicik);     
                  durum.http.get<any>(miktarlicik).subscribe(data => {
                    durum.activeModal.close('Onaylandi');
                    durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
                    durum.modalService.dismissAll();
            
                  });
          
                }
            });
          
          
            }
          if (result.isConfirmed) {
            
          
          
            var tamamicik = localStorage.getItem('url') + "angular/dataservis.php?page_id=perakendesatissevk&kayitid="+durum.id+"&lotno="+kod[0]+"&userid="+localStorage.getItem('userid')+"&cikisyapilanfirma="+durum.cikisfirmasi;
        console.log(tamamicik);     
        durum.http.get<any>(tamamicik).subscribe(data => {
          durum.activeModal.close('Onaylandi');
          durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
          durum.modalService.dismissAll();
  
        });
          
          }
          });
  
      }


    



    }

    if(this.formid=='685'){
      
      var kod = this.qrResultString.split('_');
      var durum=this;
      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);



      if(kod[2]=='' || kod[2]==undefined || kod[2]==null){

          
              swal.fire({
                title: "Miktar Giriniz",
                text: "Çıkış yapmak için miktar giriniz.",
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Çıkış Yap',
                cancelButtonText: 'Vazgeç'        
            }).then((result) => {
                if (result.value) {       
          
          
                  var miktarlicik= localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid="+durum.id+"&malzemeid="+kod[1]+"&userid="+localStorage.getItem('userid')+"&cikisyapilanfirma="+durum.cikisfirmasi+"&cikismiktari="+result.value;
                  console.log(miktarlicik);     
                  durum.http.get<any>(miktarlicik).subscribe(data => {
                    durum.activeModal.close('Onaylandi');
                    durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
                    durum.modalService.dismissAll();
            
                  });
          
                }
            });
          
          


      }else{
        swal.fire({
          title: 'Çıkış İşlemi',
          icon: 'question',
          text: "Lütfen yapmak istediğiniz çıkış işlemi seçiniz? ",
          showCancelButton: true,
          showDenyButton:true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          denyButtonColor:'#40C057',
          denyButtonText: 'Miktar Girerek Gönder',
          confirmButtonText: 'Tamamını Gönder',
          cancelButtonText: 'Vazgeç'
          }).then((result) => {
            if (result.isDenied) {
          
          
              swal.fire({
                title: "Miktar Giriniz",
                text: "Çıkış yapmak için miktar giriniz.",
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Çıkış Yap',
                cancelButtonText: 'Vazgeç'        
            }).then((result) => {
                if (result.value) {       
          
          
                  var miktarlicik= localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid="+durum.id+"&lotno="+kod[0]+"&userid="+localStorage.getItem('userid')+"&cikisyapilanfirma="+durum.cikisfirmasi+"&cikismiktari="+result.value;
                  console.log(miktarlicik);     
                  durum.http.get<any>(miktarlicik).subscribe(data => {
                    durum.activeModal.close('Onaylandi');
                    durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
                    durum.modalService.dismissAll();
            
                  });
          
                }
            });
          
          
            }
          if (result.isConfirmed) {
            
          
          
            var tamamicik = localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid="+durum.id+"&lotno="+kod[0]+"&userid="+localStorage.getItem('userid')+"&cikisyapilanfirma="+durum.cikisfirmasi;
        console.log(tamamicik);     
        durum.http.get<any>(tamamicik).subscribe(data => {
          durum.activeModal.close('Onaylandi');
          durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
          durum.modalService.dismissAll();
  
        });
          
          }
          });
  
      }


    



    }

    if(this.formid=='598'){


        this.modalService.dismissAll();
  

      var kod = this.qrResultString.split('_');

      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);

      var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

      modalSat.componentInstance.Modaldata = {mastervalue:this.mastervalue,rowformid:this.formid,rowrecordid:'',formtanimi:'',subformid:'',nakilmalzemeid:kod[1]};
      
 

      modalSat.result.then((result) => {



     }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
  
    }

    if(this.formid=='744'){
      
      this.modalService.dismissAll();
      
      var durum=this;
      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);
      var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407&sutunlar=";

      this.http.get<any>(url).subscribe(data => {
for (var i = 0; i < data.length; i++) {

  this.personeldata =this.personeldata+'<option value="'+data[i].index_personel_ozluk_bilgileri+'">'+data[i].adi_soyadi+'</option> ';

if(data.length==i+1){

var durum=this;
swal.fire({
  title: 'Miktar Giriniz',
  html: `<select type="text" id="personel" class="swal2-input" placeholder="personel seçiniz">
          <option value="">Personel Seçiniz</option>
          `+durum.personeldata+`
        </select>
  <input type="tel" id="miktar" class="swal2-input" placeholder="Miktar Giriniz">`,
  confirmButtonText: 'Hamur Al',
  focusConfirm: false,
  preConfirm: () => {
    const personel = (document.getElementById('personel')  as HTMLInputElement).value;
    const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
    if (!personel || !miktar) {
      swal.showValidationMessage(`Personel Ve Miktar Giriniz!!!`)
    }
    return { personel: personel, miktar: miktar }
  }
}).then((result) => {
  console.log(result);
       // stokhareketleri inser tüketim

       var miktarlicik= localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid="+durum.id+"&stokid="+durum.qrResultString+"&userid="+localStorage.getItem('userid')+"&secilenuretim="+durum.secilenuretim+"&cikismiktari="+result.value.miktar+"&personel="+result.value.personel;
       console.log(miktarlicik);     
       durum.http.get<any>(miktarlicik).subscribe(data => {

        this.toastr.info("Hamur çıkış işlemi başarılı.",'Hamur Çıkışı', { "timeOut": 2000, "extendedTimeOut": 2000 });

         durum.activeModal.close('Onaylandı');
         durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
         durum.modalService.dismissAll();
 
       });

})
}

}


});
   
        // swal.fire({
        //   title: 'Sevk İşlemi',
        //   icon: 'question',
        //   text: "Lütfen yapmak istediğiniz sevk işlemi seçiniz? ",
        //   showCancelButton: true,
        //   showDenyButton:true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   denyButtonColor:'#40C057',
        //   denyButtonText: 'Miktar Girerek Sevk',
        //   confirmButtonText: 'Tamamını Sevk',
        //   cancelButtonText: 'Vazgeç'
        //   }).then((result) => {
        //     if (result.isDenied) {
          
     
          
        //     }
        //   if (result.isConfirmed) {
            
          
          
        //     var tamamicik = localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid="+durum.id+"&stokid="+durum.qrResultString+"&userid="+localStorage.getItem('userid')+"&secilenuretim="+durum.secilenuretim;
        // console.log(tamamicik);     
        // durum.http.get<any>(tamamicik).subscribe(data => {
        //   durum.activeModal.close('Onaylandı');
        //   durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
        //   durum.modalService.dismissAll();
  
        // });
          
        //   }
        //   });
  
      


    



    }


    if(this.formid=='787'){
      
      this.modalService.dismissAll();
      
      var durum=this;
      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);
      var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407&sutunlar=";

      this.http.get<any>(url).subscribe(data => {
for (var i = 0; i < data.length; i++) {

  this.personeldata =this.personeldata+'<option value="'+data[i].index_personel_ozluk_bilgileri+'">'+data[i].adi_soyadi+'</option> ';

if(data.length==i+1){

var durum=this;
swal.fire({
  title: 'Miktar Giriniz',
  html: `<select type="text" id="personel" class="swal2-input" placeholder="personel seçiniz">
          <option value="">Personel Seçiniz</option>
          `+durum.personeldata+`
        </select>
  <input type="tel" id="miktar" class="swal2-input" placeholder="Miktar Giriniz">`,
  confirmButtonText: 'Hamur İade',
  focusConfirm: false,
  preConfirm: () => {
    const personel = (document.getElementById('personel')  as HTMLInputElement).value;
    const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
    if (!personel || !miktar) {
      swal.showValidationMessage(`Personel Ve Miktar Giriniz!!!`)
    }
    return { personel: personel, miktar: miktar }
  }
}).then((result) => {
  console.log(result);
       // stokhareketleri inser tüketim

       var miktarlicik= localStorage.getItem('url') + "angular/dataservis.php?page_id=hamuriadeedildi&kayitid="+durum.id+"&stokid="+durum.qrResultString+"&userid="+localStorage.getItem('userid')+"&secilenhamur="+durum.secilenhamur+"&cikismiktari="+result.value.miktar+"&personel="+result.value.personel;
       console.log(miktarlicik);     
       durum.http.get<any>(miktarlicik).subscribe(data => {

        this.toastr.info("Hamur iade işlemi başarılı.",'Hamur İade', { "timeOut": 2000, "extendedTimeOut": 2000 });

         durum.activeModal.close('Onaylandı');
         durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
         durum.modalService.dismissAll();
 
       });

})
}

}


});
   
        // swal.fire({
        //   title: 'Sevk İşlemi',
        //   icon: 'question',
        //   text: "Lütfen yapmak istediğiniz sevk işlemi seçiniz? ",
        //   showCancelButton: true,
        //   showDenyButton:true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   denyButtonColor:'#40C057',
        //   denyButtonText: 'Miktar Girerek Sevk',
        //   confirmButtonText: 'Tamamını Sevk',
        //   cancelButtonText: 'Vazgeç'
        //   }).then((result) => {
        //     if (result.isDenied) {
          
     
          
        //     }
        //   if (result.isConfirmed) {
            
          
          
        //     var tamamicik = localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid="+durum.id+"&stokid="+durum.qrResultString+"&userid="+localStorage.getItem('userid')+"&secilenuretim="+durum.secilenuretim;
        // console.log(tamamicik);     
        // durum.http.get<any>(tamamicik).subscribe(data => {
        //   durum.activeModal.close('Onaylandı');
        //   durum.closeResult = `Dismissed ${durum.getDismissReason('Onaylandı')}`;
        //   durum.modalService.dismissAll();
  
        // });
          
        //   }
        //   });
  
      


    



    }
  }

  
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return `with: ${reason}`;
  }
}
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
  ngOnInit() {

    
    for (let key in this.data) {
      this.id=this.data['kayitid'];
      this.secilenuretim=this.data['secilenuretim'];
      this.secilenhamur=this.data['secilenhamur'];
      let child = this.data[key];
      this.formbasligi = this.data['formtanimi'];
      this.formid = this.data['formid'];
      this.cikisfirmasi = this.data['cikisfirmasi'];
      this.mastervalue = this.data['mastervalue'];
    }


  }

} 