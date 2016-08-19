import {Component, Attribute} from "angular2/core";

@Component({
  selector: "my-current-time",
  template: `
      <h2 (updateTime)="updateMyTime()">{{date | date: format}}</h2>
    `
})
export class ClockComponent {
   private date;

  constructor(@Attribute("format") format) {
    this.format = format;
    this.date =  new Date();

    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

}
