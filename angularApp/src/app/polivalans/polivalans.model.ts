export class Task {
    public id: number;
    public PolTitle: string;
    public PolYetkinlik: string;
    public gorevi:string;
    public yetkinlik:string;

    constructor(id: number, PolTitle: string, PolYetkinlik: string,gorevi:string,yetkinlik:string) {
      this.id = id;
      this.PolTitle = PolTitle;
      this.PolYetkinlik = PolYetkinlik;
      this.gorevi = gorevi;
      this.yetkinlik = yetkinlik;
    }
  }
