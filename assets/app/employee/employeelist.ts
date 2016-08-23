import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {ErrorService} from "../errors/error.service";
import {Employee} from "./employee";
import {Query} from "../utility/query";
import {EmployeeSearchPipe} from "./employee-search.pipe";
@Component({
    selector : "my-employee-list",
    template: `
        <div>
          <h1>Employee List</h1>
        </div>
        <div class="input">
            <label for="search" style="font-family:OpenSans">Seach Employee By:</label>
            <select #sel class="properties" [(ngModel)]="property" (ngModelChange)="select.emit(sel.value)">
              <option style="font-family:OpenSans" selected>Please Select</option>
              <option style="font-family:OpenSans" *ngFor=" let filter of employeeFilters" >{{filter}}</option>
            </select>
            <input type="text" [(ngModel)]="employeeSearch"/>
        </div>
        <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-employee-display *ngFor="let e of employees | findEmployee: employeeSearch: property" [employee]="e" (click)="setSelectedEmployee(e)"></my-employee-display>
            </div>
        </section>
        <my-employee-details></my-employee-details>
    `,
    pipes: [EmployeeSearchPipe],
    styles: [`
        h1{
            font-family:OpenSans;
            color:white;
        }
        .col-md-12{
            background-color:white;
            border-radius:5px;
            padding-top:25px;
        }
        div.input{
          padding: 10px 10px;
        }

        input[type=text] {
            width: 130px;
            box-sizing: border-box;
            border: 2px solid #009933;
            border-radius: 4px;
            font-size: 16px;
            background-color: white;
            background-position: 10px 10px;
            background-repeat: no-repeat;
            padding: 12px 20px 12px 40px;
            -webkit-transition: width 0.4s ease-in-out;
            transition: width 0.4s ease-in-out;
          }

          input[type=text]:focus {
            width: 50%;
          }
          select.properties {
            position: relative;
            font-family:OpenSans;
            font-size: 16px;
            margin: 0 auto;
            padding: 10px 10px 10px 30px;
            background: #fff;
            border: 1px solid silver;
            cursor: pointer;
            outline: none;
          }
    `]
})

export class EmployeeListComponent implements OnInit {
    constructor(private _employeeService: EmployeeService, private _errorService: ErrorService) {}
    employeeFilters = ["firstName", "lastName", "email"];
    employees: Employee[];
    select = new EventEmitter();
    dataLoaded = false;
    ngOnInit() {

        this._employeeService.getEmployees(new Query(null, null)).subscribe(
            employees => {
                this.employees = employees;
                this._employeeService.employees = employees;
                this.dataLoaded = true;
            },
            error => console.log(error)
        );
            error => this._errorService.handleError(error);
    }
    setSelectedEmployee(emp: Employee) {
            this._employeeService.selectEmployee(emp);
            this._employeeService.popEmployeeDetails(emp);
    }
}
