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
                <div class="col-md-4 col-md-offset-1">
                    <h1>{{employee?.firstName +" " + employee?.lastName}}</h1>
                    <h4>{{(employee?.division && employee.department)?employee?.division+"-"+employee.department:""}}</h4>
                    <div><i class="fa fa-envelope" aria-hidden="true"></i><span class="text-node">{{employee?.email}}</span></div>
                    <div><i class="fa fa-phone-square" aria-hidden="true"></i><span class="text-node">{{employee?.phone}}</span></div>
                    <div><i class="fa fa-home" aria-hidden="true"></i><span class="text-node">{{employee?.city}}{{employee?.state ? "," + employee?.state : ""}} - {{employee?.country}}</span></div>
                </div>
                <div class="col-md-4 col-md-offset-1">
                    <ul class="list-group" id="mylist">
                        <li class="list-group-item" id="top">Title: <span class="badge">{{title}}</span></li>
                        <li class="list-group-item" *ngIf="employee?.hasManager">Manager:<a href="#" class="badge">{{manager}}</a></li>
                        <li class="list-group-item" *ngIf="employee?.canManageEmployees">Employees: <span class="badge">{{employeeCount}}</span></li>
                        <li class="list-group-item">Projects: <span class="badge">{{projectCount}}</span></li>
                        <li class="list-group-item" id="bottom">Avaliability: <span class="badge">0%</span></li>
                    </ul>
                </div>
            </div>
            </article>
        `,
    styles:[`
    	#mylist{
            font-size: 1.7em;
            margin-bottom:0;
    	}
    	.right-align{
    	    float:right;
    	}
    	.container-fluid{
    	    padding:0;
    	}
    	.col-md-2{
    	margin:0;
    	padding:0;
    	}
    	.thumbnail{
    	    margin-bottom:0;
    	}
    	.list-group-item{
    	    border-right:0;
    	}
    	#top{
    	    border-top:0;
    	}
    	#bottom{
    	border-bottom:0;
    	}
    	h1{
    	text-align:center;
    	}
    	h4{
    	text-align:center;
    	}
    	.text-node{
    	float:right;
    	width:70%;
    	text-align:center;
    	}
    	i{
    	float:left;
    	width:25%;
    	text-align:center;
    	}
    `]
})
export class EmployeeBasicDetailsComponent implements OnInit{
    employee:Employee;
    projectCount;
    employeeCount;
    manager;
    title;
    constructor(private _employeeService: EmployeeService){};
    ngOnInit(){
        this._employeeService.popEmployee.subscribe(
            data => {
                this.employee = data;
                this.projectCount=data.projects.length;
                this.employeeCount=data.employees.length;
                this.manager=data.manager;
                this.title=data.title;
            }

        )
    }
}