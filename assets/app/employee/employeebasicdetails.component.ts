import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {Employee} from "./employee";
@Component({
    selector : 'my-employee-basic-details',
    template: `
            <article class="panel panel-default">
                <div class="container-fluid">
                 <div class="col-md-2">
                    <div class="thumbnail">
                        <img src="{{employee?.image}}" class="img img-responsive">      
                    </div>
                </div>
                <div class="col-md-6">
                    <h1>{{employee?.firstName +" " + employee?.lastName}}</h1>
                    <h4>{{(employee?.division && employee.department)?employee?.division+"-"+employee.department:""}}</h4>
                    <p>{{employee?.email}}</p>
                    <p>{{employee?.phone}}</p>
                    <p>{{employee?.city}}{{employee?.state ? "," + employee?.state : ""}} - {{employee?.country}}</p>
                </div>
                <div class="col-md-4">
                    <ul class="list-group" id="mylist">
                        <li class="list-group-item">Title: <span class="badge">{{employee?.title}}</span></li>
                        <li class="list-group-item">Manager:<a href="#" class="badge">{{employee?.manager}}</a></li>
                        <li class="list-group-item">Employees: <span class="badge">{{employee?.employees}}</span></li>
                        <li class="list-group-item">Projects: <span class="badge">{{employee?.projects}}</span></li>
                        <li class="list-group-item">Avaliability: <span class="badge">0%</span></li>
                    </ul>
                </div>
            </div>
            </article>
        `
})
export class EmployeeBasicDetailsComponent implements OnInit{
    employee:Employee;
    constructor(private _employeeService: EmployeeService){};
    ngOnInit(){
        this._employeeService.selectedEmployeeChanged.subscribe(
            data => {
                this.employee = data;
            }
        )
    }
}