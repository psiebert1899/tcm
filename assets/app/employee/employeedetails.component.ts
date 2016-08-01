import {Component, OnInit} from "@angular/core";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {EmployeeBasicDetailsComponent} from "./employeebasicdetails.component";
@Component({
    selector : 'my-employee-details',
    template: `
        <div class="backdrop" [ngStyle]="{'display': employeeDisplay}"></div>
        <div class="modal" tabindex="-1" role="dialog" [ngStyle]="{'display': employeeDisplay}">
            <div class="modal-dialog" id="myModalDialog">
                <div class="modal-content" id="myEmployeePopup" >
                    <div class="modal-header">
                        <button type="button" class="close" aria-label="Close" (click)="onEmployeeClosed()"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{employeeData?.firstName + " " +employeeData?.lastName}}</h4>
                    </div>
                    <div class="modal-body">
                    <ul class="nav nav-tabs">
                        <li><a [routerLink]="['./basic']">Basic</a></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Employees</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Benefits</a></li>
                        <li><a href="#">Notes</a></li>
                    </ul>
                        <router-outlet></router-outlet>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" (click)="onEmployeeEdit()">Edit</button>
                        <button type="button" class="btn btn-default" (click)="onEmployeeClosed()">Close</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->  
    `,
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
        #myEmployeePopup{
            width:80%;
            margin-left:10%;
        }
        #myModalDialog{
            width:100%;
        }
    `],
    directives: [ROUTER_DIRECTIVES,EmployeeBasicDetailsComponent]
})
@Routes([
    {path: '/basic' , component : EmployeeBasicDetailsComponent}
])
export class EmployeeDetailsComponent implements OnInit{
    employeeDisplay='none';
    employeeData : Employee;
    constructor(private _employeeService:EmployeeService){}
    ngOnInit(){
        this._employeeService.popEmployee.subscribe(
            data =>{
                this.employeeData = data;
                this.employeeDisplay='block';
            }
        )
    }
    onEmployeeClosed(){
        this.employeeDisplay='none';
    }
    onEmployeeEdit(){

    }
}