import { Component, ViewEncapsulation, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as swalFunctions from '../shared/data/sweet-alerts';
import swal from 'sweetalert2';

import { IsGucuBoardService } from './isgucuboard.service';
import { Task } from './isgucuboard.model';
import { DragulaService } from 'ng2-dragula';
import { HttpClient } from '@angular/common/http';
declare var $: any; 

@Component({
  selector: 'app-isgucuboard',
  templateUrl: './isgucuboard.component.html',
  styleUrls: ['./isgucuboard.component.scss'],
  providers: [IsGucuBoardService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsGucuBoardComponent {

  @ViewChild('marketingTitle') titleInputRef: ElementRef;
  @ViewChild('marketingMessage') messageInputRef: ElementRef;
  currentDate = new Date();

  swal =  swalFunctions;
term:any;
  BAG = "task-group";
  ismerkezleri = [];

SERVER_URL:any;

  tasks: Task[];
  adi:any=localStorage.getItem('adi');
  closeResult: string;
  ilgilidepartman:any[];
  selectedPer:any;
  cities:Array<{id: string, name: string,field:string}>[] = []; 
  blokalanlari: any;
  Merkezlistesi: { id: string; name: string; }[];
  viewInterval: any;

  constructor(private dragulaService: DragulaService, private elRef: ElementRef,
     private taskBoardService: IsGucuBoardService, private modalService: NgbModal,
     private ref: ChangeDetectorRef,private http: HttpClient) {
    

   


      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407";

      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });
  
    dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
     
        this.updateTaskStatus(el.getAttribute('task-id'), target.id)
      });
  }

  yenidenyukle()
  {
  

    const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407";

    this.http.get<any>(taskUrl).subscribe(data => {
      this.tasks=data;
      this.loadTasks();
    });


  }


  loadTasks() {
    //  this.marketingTasks = this.tasks.filter((task: Task) => task.status === 'Atandı');
    this.ref.markForCheck();
  }

  

  ngOnInit() {

   
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=237";

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {
    
     var cities_psh2: Array<{ id: string, name: string }> = [];
    cities_psh2 = [];

    for (var j = 0; j < this.blokalanlari.length; j++) {
      cities_psh2.push({ id: this.blokalanlari[j].id, name: this.blokalanlari[j].masraf_merkezi_adi });
    }


    this.Merkezlistesi = cities_psh2;

    }


  
    });

  
  
  
  }

  onChange(event){
      
   const departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=236&masrafmerkezi="+event.name;
   this.http.get<any>(departUrl).subscribe(data => {
     this.ismerkezleri=data;
     this.ref.markForCheck();

   });
    }

 

  updateTaskStatus(id: string, merkez: string, task?: Task) {

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
    

    const isistasyonGuncelle=localStorage.getItem('url') + "angular/dataservis.php?page_id=perMerkezGuncelle&personelid="+currentTask.id+"&isistasyonu="+merkez;
    
    console.log(isistasyonGuncelle);
    this.http.get<any>(isistasyonGuncelle).subscribe(data=>{
      if(data[0].status=='OK'){
        swal.fire({
          icon: "success",
          title: 'İş İstasyonu Değiştirildi',
          text: 'Personelin çalıştığı iş istasyonu değiştirildi.',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        });
        this.yenidenyukle();
      }else{
        swal.fire({
          icon: "warning",
          title: 'İş İstasyonu Değiştirilemedi',
          text: 'Personelin çalıştığı iş istasyonu değiştirilemedi.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
        this.yenidenyukle();
      }
    });


    this.loadTasks();
  }





  

}
