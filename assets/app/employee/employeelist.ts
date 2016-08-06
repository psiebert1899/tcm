import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {ErrorService} from "../errors/error.service";
import {Employee} from "./employee";
import {EmployeeDisplayComponent} from "./employeedisplay.component";
import {EmployeeDetailsComponent} from "./employeedetails.component";
import {EmployeeBasicDetailsComponent} from "./employeebasicdetails.component";
import {Routes} from "@angular/router";
import {Query} from "../utility/query";
@Component({
    selector : 'my-employee-list',
    template: `
        <h1>Employee List</h1>
        <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-employee-display *ngFor="let e of employees" [employee]="e"></my-employee-display>
            </div>
        </section>
        <my-employee-details></my-employee-details>
    `,
    directives : [EmployeeDisplayComponent,EmployeeDetailsComponent,EmployeeBasicDetailsComponent],
    styles:[`
        h1{
            font-family:OpenSans;
            color:white;
        }
        .col-md-12{
            background-color:white;
            border-radius:5px;
            padding-top:25px;
        }
    `]
})
@Routes([
    {path: '/basic' , component : EmployeeBasicDetailsComponent}
])
export class EmployeeListComponent implements OnInit{
    constructor(private _employeeService : EmployeeService, private _errorService: ErrorService){}
    employees: Employee[];
    dataLoaded =false;
    ngOnInit(){
        this._employeeService.getEmployees(new Query(null,null)).subscribe(
            employees => {
                this.employees = employees;
                this._employeeService.employees = employees;
                this.dataLoaded=true;
            },
            error => console.log(error)
        )
    }
}