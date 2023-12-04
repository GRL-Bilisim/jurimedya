export class Task {
    public taskId: number;
    public taskTitle: string;
    public badgeClass: string
    public taskMessage: string;
    public messageType: string; //text, image
    public messageCount: string;
    public linkCount: string;
    public createdOn: string;
    public createdBy: string;
    public assignedTo: any;
    public isUserImg: boolean;
    public status: string;
    public belge:string;
    public belge2: string;
    public belge3: string;

    constructor(taskId: number, taskTitle: string, badgeClass: string, taskMessage: string, messageType: string, messageCount: string,linkCount: string, createdOn: string, createdBy: string, assignedTo: any, isUserImg: boolean, status: string,belge:string,belge2: string,belge3: string) {
      this.taskId = taskId;
      this.taskTitle = taskTitle;
      this.badgeClass = badgeClass;
      this.taskMessage = taskMessage;
      this.messageType = messageType;
      this.messageCount = messageCount;
      this.linkCount =linkCount;
      this.createdOn = createdOn;
      this.createdBy = createdBy;
      this.assignedTo = assignedTo;
      this.isUserImg = isUserImg;
      this.status = status;
      this.belge = belge;
      this.belge2 = belge2;
      this.belge3 = belge3;
    }
  }
