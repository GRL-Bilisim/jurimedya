import { Component, ViewEncapsulation, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TaskBoardService } from './taskboard.service';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { Task } from './taskboard.model';
import { DragulaService } from 'ng2-dragula';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';
import { HttpClient } from '@angular/common/http';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskboardComponent {

  @ViewChild('marketingTitle') titleInputRef: ElementRef;
  @ViewChild('marketingMessage') messageInputRef: ElementRef;

  BAG = "task-group";
  departman = [];
selectedDep: any;
blokalanlari:any[];

SERVER_URL:any;

  tasks: Task[];
  marketingTasks: Task[];
  uiDesigningTasks: Task[];
  developingTasks: Task[];
  managementTasks: Task[];
  adi:any=localStorage.getItem('adi');
  closeResult: string;
  ilgilidepartman:any[];

  cities:Array<{id: string, name: string,field:string}>[] = []; 

  constructor(private dragulaService: DragulaService, private elRef: ElementRef,
     private taskBoardService: TaskBoardService, private modalService: NgbModal,
     private ref: ChangeDetectorRef,private http: HttpClient) {
    

      const departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=320";
      this.http.get<any>(departUrl).subscribe(data => {
        this.departman=data;
      });
  

      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=todopage&userid="+localStorage.getItem('userid');

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
  


    const taskUrl2 = localStorage.getItem('url') + "angular/dataservis.php?page_id=todopage&userid="+localStorage.getItem('userid')+"&departman="+this.ilgilidepartman;

   
this.tasks=[];
      this.http.get<any>(taskUrl2).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });


  }


  onChange(event){
   console.log(event);
    }

  loadTasks() {


    

    
    this.marketingTasks = this.tasks.filter((task: Task) => task.status === 'Atandı');
    this.uiDesigningTasks = this.tasks.filter((task: Task) => task.status === 'Yapılacak');
    this.developingTasks = this.tasks.filter((task: Task) => task.status === 'Yapılıyor');
    this.managementTasks = this.tasks.filter((task: Task) => task.status === 'Tamamlandı');
    this.ref.markForCheck();
  }


  ngOnInit() {

    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=381";


  

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {
      if (this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox' || this.blokalanlari[i].verigiristuru=='Secimli')
      {
       
        var splitted = this.blokalanlari[i].degerleri.split(";"); 
        var splitted2 = this.blokalanlari[i].etiketleri.split(";"); 

        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;

      }

    }


  
    });


  
  
  }

  editTask(task: Task) {

    console.log(task);
    const modalRef = this.modalService.open(CrudModalComponent);
    modalRef.componentInstance.id = task.taskId; // should be the id
    modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage,belge:task.belge,belge2:task.belge2,belge3:task.belge3 }; // should be the data

    modalRef.result.then((result) => {

      task.taskTitle = result.title;
      task.taskMessage = result.message;
      task.belge = result.belge;
      task.belge2 = result.belge2;
      task.belge3 = result.belge3;



    }).catch((error) => {
      console.log(error);
    });
  }

  updateTaskStatus(id: string, status: string, task?: Task) {
    let badgeClass = 'primary';

    if (status === 'Atandı') {
      badgeClass = 'primary'
    }
    else if (status === 'Yapılacak') {
      badgeClass = 'warning'
    }
    else if (status === 'Yapılıyor') {
      badgeClass = 'success'
    }
    else if (status === 'Tamamlandı') {
      badgeClass = 'info'
    }

    let currentTask: Task;

    if (task) {
      currentTask = task;
    }
    else {
      currentTask = this.tasks.find(x => x.taskId == +id);
     console.log(currentTask);

    }

    let index = this.tasks.indexOf(currentTask);
    currentTask.status = status;
    currentTask.badgeClass = badgeClass;
    this.tasks.splice(index, 1, currentTask);
    console.log(index);

    const taskGuncelleUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=todoguncelle&durumu="+status+"&index="+currentTask.taskId;
    this.http.get<any>(taskGuncelleUrl).subscribe(data=>{

    });


    this.loadTasks();
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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



editrecord(id,formids,blokid)
{

  // localStorage.setItem('rowformid','381');
  // localStorage.setItem('rowrecordid', id);

  var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

  modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'381',rowrecordid:id,formtanimi:'',subformid:''};
  
  modalSat.result.then((result) => {
    
    if (result=='Yenile')
    {
    }

 }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });

}

  deleteTask(id: number) {

    // let task: Task = this.tasks.find(x => x.taskId === id);
    // let index = this.tasks.indexOf(task);
    // this.tasks.splice(index, 1);
    // console.log(id);
    const taskSil=localStorage.getItem('url') + "angular/dataservis.php?page_id=todosil&index="+id;
    this.http.get<any>(taskSil).subscribe(data=>{
      this.taskYenile();
    });
  }

  addTask() {
    const modalRef = this.modalService.open(CrudModalComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { title: '', message: '', type: 'Atandı' }; // should be the data

    modalRef.result.then((result) => {
      this.taskBoardService.addNewTask(result.title, result.message, result.type).subscribe(data => {
        this.tasks = data;
        this.loadTasks();
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  taskYenile(){
    const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=todopage&userid="+localStorage.getItem('userid');
      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });
  }

  gorevBasla(status,id){

    if (status === 'Atandı') {
      status = 'Yapılacak'
    }
    else if (status === 'Yapılacak') {
      status = 'Yapılıyor'
    }
    else if (status === 'Yapılıyor') {
      status = 'Tamamlandı'
    }
   

    const taskGuncelleUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=todoguncelle&durumu="+status+"&index="+id;
    this.http.get<any>(taskGuncelleUrl).subscribe(data=>{
      this.taskYenile();
    });

  }

  gorevGeriAl(status,id){
    if (status === 'Yapılacak') {
      status = 'Atandı'
    }
    else if (status === 'Yapılıyor') {
      status = 'Yapılacak'
    }
    else if (status === 'Tamamlandı') {
      status = 'Yapılıyor'
    }
   

    const taskGuncelleUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=todoguncelle&durumu="+status+"&index="+id;
    this.http.get<any>(taskGuncelleUrl).subscribe(data=>{
      this.taskYenile();
    });
  }

  satirekle()
  {
    // localStorage.setItem('rowformid', '381');
    // localStorage.setItem('rowrecordid', "");
  
    var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   
    modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'381',rowrecordid:'',formtanimi:'',subformid:''};
    
    modalSat.result.then((result) => {
      
      if (result=='Yenile')
      {
        this.taskYenile();

      }
  
   }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
  
  
    
  
  }
  


  ziyaretekle()
  {
    // localStorage.setItem('rowformid', '381');
    // localStorage.setItem('rowrecordid', "");
  
    var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   
    modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'696',rowrecordid:'',formtanimi:'',subformid:''};
    
    modalSat.result.then((result) => {
      
      if (result=='Yenile')
      {
        this.taskYenile();

      }
  
   }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
  
  
    
  
  }

}
