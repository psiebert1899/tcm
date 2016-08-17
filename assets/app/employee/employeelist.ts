import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {ErrorService} from "../errors/error.service";
import {Employee} from "./employee";
import {EmployeeDisplayComponent} from "./employeedisplay.component";
import {EmployeeDetailsComponent} from "./employeedetails.component";
import {EmployeeBasicDetailsComponent} from "./employeebasicdetails.component";
import {Routes} from "@angular/router";
import {Query} from "../utility/query";
import {EmployeeSearchPipe} from "./employee-search.pipe";
@Component({
    selector : "my-employee-list",
    template: `
        <h1>Employee List</h1>
        <span>Search Employee: </span><input id="search" type="text" [(ngModel)]="employeeSearch"/>
        <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-employee-display *ngFor="let e of employees | findEmployee:employeeSearch" [employee]="e" (click)="setSelectedEmployee(e)"></my-employee-display>
            </div>
        </section>
        <my-employee-details></my-employee-details>
    `,
    directives : [EmployeeDisplayComponent, EmployeeDetailsComponent, EmployeeBasicDetailsComponent],
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
    `]
})
@Routes([
    {path: "/basic" , component : EmployeeBasicDetailsComponent}
])
export class EmployeeListComponent implements OnInit {
    constructor(private _employeeService: EmployeeService, private _errorService: ErrorService) {}
    employees: Employee[];
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
