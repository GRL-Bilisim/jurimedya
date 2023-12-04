import { Component, ViewEncapsulation, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as swalFunctions from '../shared/data/sweet-alerts';
import swal from 'sweetalert2';

import { polivalansService } from './polivalans.service';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { Task } from './polivalans.model';
import { DragulaService } from 'ng2-dragula';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';
import { HttpClient } from '@angular/common/http';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-polivalans',
  templateUrl: './polivalans.component.html',
  styleUrls: ['./polivalans.component.scss'],
  providers: [polivalansService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class polivalansComponent {
  swal =  swalFunctions;

  @ViewChild('marketingTitle') titleInputRef: ElementRef;
  @ViewChild('marketingMessage') messageInputRef: ElementRef;

  BAG = "task-group";
  departman = [];
selectedDep: any;
blokalanlari:any[];
term:any;
termA:any;

SERVER_URL:any;
selectedPer :any;
  tasks: Task[];
  marketingTasks: Task[];
  uiDesigningTasks: Task[];
  developingTasks: Task[];
  managementTasks: Task[];
  adi:any=localStorage.getItem('adi');
  closeResult: string;
  ilgilidepartman:any[];
  mymodel:any;
  cities:Array<{id: string, name: string,field:string}>[] = []; 
  personellistesi: { id: string; name: string; }[];
  taskAtanan: any;
  personelId: any;

  constructor(private dragulaService: DragulaService, private elRef: ElementRef,
     private taskBoardService: polivalansService, private modalService: NgbModal,
     private ref: ChangeDetectorRef,private http: HttpClient) {
    

      const departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=243";
      this.http.get<any>(departUrl).subscribe(data => {
        this.departman=data;
      });
  

      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=546";

      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });

     
  
    dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
        
        var dd = el.getAttribute('task-id');
        var cc = 'taskVal_'+dd;
        var yetval= (<HTMLInputElement>document.getElementById(cc)).value;


        if(yetval=='' || (this.personelId=='' || this.personelId==undefined)){
          swal.fire({
            icon: "warning",
            title: 'Alanlar Bırakılamaz!',
            text: 'Polivalans girerken personel ve yetkinlik girmeyi unutmayınız.',
            customClass: {
              confirmButton: 'btn btn-warning'
            },
          });
this.yenidenyukle();
          

        }else{
          this.updateTaskStatus(yetval,el.getAttribute('task-id'), target.id)
        }


      });
  }

  yenidenyukle()
  {
  

    if(this.personelId=='' ||this.personelId==undefined){
      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=546";

      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });
  
    }else{


      const taskUrlA = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=547&personelId="+this.personelId;
      this.http.get<any>(taskUrlA).subscribe(data => {
        this.taskAtanan=data;
        this.loadTasks();
      });
   

      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=546";

      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });
  
    }

  


  }


  onChange(event){

    this.personelId = event.id;

   const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=547&personelId="+event.id;
   this.http.get<any>(taskUrl).subscribe(data => {
     this.taskAtanan=data;
     this.loadTasks();
   });

    }

  loadTasks() {


    this.ref.markForCheck();
  }


  ngOnInit() {

    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=243";

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {
    
     var cities_psh2: Array<{ id: string, name: string }> = [];
    cities_psh2 = [];

    for (var j = 0; j < this.blokalanlari.length; j++) {
      cities_psh2.push({ id: this.blokalanlari[j].id, name: this.blokalanlari[j].adi_soyadi });
    }


    this.personellistesi = cities_psh2;

    }


  
    });


  
  
  }

  editTask(task: Task,) {

    console.log(task);
    const modalRef = this.modalService.open(CrudModalComponent,{backdrop: 'static',size: 'lg', keyboard: false, centered: false});
    modalRef.componentInstance.id = task.id; // should be the id
    modalRef.componentInstance.data = { title: task.gorevi, message: task.yetkinlik,id:task.id}; // should be the data

    modalRef.result.then((result) => {

if(result == 'OK'){
  this.yenidenyukle();
}else{
  
}


    }).catch((error) => {
      console.log(error);
    });


  }

 
  updateTaskStatus(yetval: string,id: string, merkez: string, task?: Task) {
   

    let currentTask: Task;

    if (task) {
      currentTask = task;
    }
    else {
      currentTask = this.tasks.find(x => x.id == +id);
     console.log(currentTask);

    }

    // dizinin kaçıncı elemanı olduğunu alıyor
    let index = this.tasks.indexOf(currentTask);
    this.tasks.splice(index, 1, currentTask);
 
    const taskGuncelleUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=perPolEkle&polId="+currentTask.id+"&personelId="+this.personelId+"&yetkinlik="+yetval+"&userid="+localStorage.getItem('userid');
    console.log(taskGuncelleUrl);
    this.http.get<any>(taskGuncelleUrl).subscribe(data => {
     
      if(data[0].status=='OK'){
        swal.fire({
          icon: "success",
          title: 'Polivalans Aktarıldı',
          text: 'Personel polivalans girişi başarılı.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
        this.yenidenyukle();
      }
    });
 
  }

  updateManuel(yetval: string,id: string, merkez: string, task?: Task) {

    var cc = 'taskVal_'+id;
     yetval= (<HTMLInputElement>document.getElementById(cc)).value;

    let currentTask: Task;

    if (task) {
      currentTask = task;
    }
    else {
      currentTask = this.tasks.find(x => x.id == +id);
    //  console.log(currentTask);
    }
    // dizinin kaçıncı elemanı olduğunu alıyor
    let index = this.tasks.indexOf(currentTask);
    this.tasks.splice(index, 1, currentTask);

 if(yetval>'0' && this.personelId!=undefined ){
    const taskGuncelleUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=perPolGuncelle&polId="+currentTask.id+"&personelId="+this.personelId+"&yetkinlik="+yetval+"&userid="+localStorage.getItem('userid');
    // console.log(taskGuncelleUrl);
    this.http.get<any>(taskGuncelleUrl).subscribe(data => {
     
      if(data[0].status=='OK'){
        swal.fire({
          icon: "success",
          title: 'Polivalans Aktarıldı',
          text: 'Personel polivalans girişi başarılı.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
        this.yenidenyukle();
      }
    });
 
     }else{
      swal.fire({
        icon: "warning",
        title: 'Alanlar Bırakılamaz!',
        text: 'Polivalans girerken personel ve yetkinlik girmeyi unutmayınız.',
        customClass: {
          confirmButton: 'btn btn-warning'
        },
      });
this.yenidenyukle();
     }

  }

  deleteTask(id: number) {

    // let task: Task = this.tasks.find(x => x.taskId === id);
    // let index = this.tasks.indexOf(task);
    // this.tasks.splice(index, 1);
    // console.log(id);


    var durum=this;

    swal.fire({
      title: 'Kayıt Silinsin mi?',
      text: "Değişiklik geri alınamayacaktır!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Evet Sil',
      cancelButtonText: 'İptal',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {

        const polSil=localStorage.getItem('url') + "angular/dataservis.php?page_id=deleteperpolivalans&index="+id+"&userid="+localStorage.getItem('userid');
        durum.http.get<any>(polSil).subscribe(data=>{
          if(data[0].status=='OK'){
            swal.fire({
              icon: "success",
              title: 'Polivalans Silindi',
              text: 'Personele ait polivalans silme işlemi başarıyla gerçekleştirildi.',
              customClass: {
                confirmButton: 'btn btn-warning'
              },
            });
          }
          durum.yenidenyukle();

        });
  

        setTimeout(function () {
          swal.close();

      }, 2000);
      }
    });
 



  }

  




  

}
