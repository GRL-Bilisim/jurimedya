import { Component, Output, EventEmitter, Input, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import * as swalFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.scss']
})
export class CrudModalComponent implements OnInit{


  swal =  swalFunctions;

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
var durum = this;
      swal.fire({
        title: 'Form Kapatılacaktır ?',
        text: "Form kapatılacaktır. Emin misiniz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Evet',
        cancelButtonText: 'İptal',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {

          durum.activeModal.close();
          setTimeout(function () {
            swal.close();
  
        }, 1000);
        }

    });
  }
}



  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  personelId: any;
  constructor(
   public activeModal: NgbActiveModal,
   private http: HttpClient,
   private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {


    this.buildItemForm(this.data);
  }

  private buildItemForm(item) {
    
    this.personelId = item.personelID;

    this.myForm = this.formBuilder.group({
      gorevi: [item.title || '', Validators.required],
      yetkinlik: [item.message || '', Validators.required],
      polId : [item.id || '', Validators.required]
        });
  }
  submitForm() {

    var id = this.myForm.controls['polId'].value;
    var yetkinlik = this.myForm.controls['yetkinlik'].value;
    var gorevi = this.myForm.controls['gorevi'].value;

    const PolGuncelleUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=perPolGuncelle&polId="+id+"&yetkinlik="+yetkinlik+"&gorevi="+gorevi+"&userid="+localStorage.getItem('userid');
    this.http.get<any>(PolGuncelleUrl).subscribe(data => {
     
      if(data[0].status=='OK'){
        
        this.activeModal.close('OK');

        swal.fire({
          icon: "success",
          title: 'Polivalans Güncellendi',
          text: 'Personel polivalans güncelleme başarılı.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
    
      }else{

        this.activeModal.close('ERR');

        swal.fire({
          icon: "warning",
          title: 'Polivalans Güncellenemedi',
          text: 'Personel polivalans güncellemesi başarısız.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
      }
    });

  


  }


}
