import {Component, Attribute} from "@angular/core";

@Component({
  selector: "my-current-time",
  template: `
      <div>
        <span>{{date | date: 'ddMMyyyy h:mm:ss'}}</span>
        </div>
    `,
  styles: [`
    div{
      position:fixed;
      margin: 0 auto;
    }
    span{
      margin:0 auto;
    }
    `
  ]
})
export class ClockComponent {
   private date;

  constructor() {
    this.date =  new Date();

    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

}
