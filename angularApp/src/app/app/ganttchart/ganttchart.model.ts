export class Task {
    public UserID: number;
    public id: number;
    public istasyon:string;


    constructor(id:number,UserID: number,istasyon:string) {
      this.id=id;
      this.UserID = UserID;
      this.istasyon=istasyon;
    }
  }
