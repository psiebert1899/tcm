import {Component} from "@angular/core";

@Component({
  selector: "my-current-time",
  providers: [],
  template: `
    <div>
      <span>{{date | date: 'MMMMdyyyy h:mm:ss'}}</span>
    </div>
  `,
  directives: []
})
export class App {
  private date;
  constructor() {
    this.date = new Date();
    setInterval(() => {
      this.date = new Date();
    } , 1000);
  }
}
