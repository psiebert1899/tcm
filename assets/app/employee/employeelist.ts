import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {ErrorService} from "../errors/error.service";
import {Employee} from "./employee";
import {EmployeeDisplayComponent} from "./employeedisplay.component";
import {EmployeeDetailsComponent} from "./employeedetails.component";
import {EmployeeBasicDetailsComponent} from "./employeebasicdetails.component";
import {Routes} from "@angular/router";
@Component({
    selector : 'my-employee-list',
    template: `
        <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-employee-display *ngFor="let e of employees" [employee]="e"></my-employee-display>
            </div>
        </section>
        <my-employee-details></my-employee-details>
    `,
    directives : [EmployeeDisplayComponent,EmployeeDetailsComponent,EmployeeBasicDetailsComponent]
})
@Routes([
    {path: '/basic' , component : EmployeeBasicDetailsComponent}
])
export class EmployeeListComponent implements OnInit{
    constructor(private _employeeService : EmployeeService, private _errorService: ErrorService){}
    employees: Employee[];
    dataLoaded =false;
    ngOnInit(){
        this._employeeService.getEmployees().subscribe(
            employees => {
                this.employees = employees;
                this._employeeService.employees = employees;
                this.dataLoaded=true;
            },
            error => console.log(error)
        )
    }
}