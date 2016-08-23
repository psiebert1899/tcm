"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const employee_service_1 = require("./employee.service");
const router_1 = require("@angular/router");
const query_1 = require("../utility/query");
let EmployeeBasicDetailsComponent = class EmployeeBasicDetailsComponent {
    constructor(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
    }
    ;
    ngOnInit() {
        this.employee = this._employeeService.selectedEmployee;
        if (this.employee == null || this.employee == undefined) {
            console.log(this._id);
            this._employeeService.getEmployees(new query_1.Query('_id', this._id)).subscribe(data => {
                console.log(data);
                this.employee = data[0];
                this._employeeService.popEmployee.emit(this.employee);
                this.projectCount = this.employee.projects.length;
                this.employeeCount = this.employee.employees.length;
                this.manager = this.employee.manager;
                this.title = this.employee.title;
            }, error => console.log(error));
        }
        else {
            this.projectCount = this.employee.projects.length;
            this.employeeCount = this.employee.employees.length;
            this.manager = this.employee.manager;
            this.title = this.employee.title;
        }
        this._employeeService.popEmployee.subscribe(data => {
            this.employee = data;
            this.projectCount = data.projects.length;
            this.employeeCount = data.employees.length;
            this.manager = data.manager;
            this.title = data.title;
        });
    }
};
EmployeeBasicDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-employee-basic-details',
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
        styles: [`
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
    }), 
    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
], EmployeeBasicDetailsComponent);
exports.EmployeeBasicDetailsComponent = EmployeeBasicDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlYmFzaWNkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELG1DQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBRW5ELHlCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHdCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBMkV2QztJQU9JLFlBQW9CLGdCQUFpQyxFQUFTLE9BQWM7UUFBeEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87SUFBRSxDQUFDOztJQUMvRSxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBRSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDbkUsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckMsQ0FBQyxFQUNELEtBQUssSUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM1QixDQUFBO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDdkMsSUFBSTtZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FFSixDQUFBO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFySEQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFHLDJCQUEyQjtRQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMEJMO1FBQ0wsTUFBTSxFQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyQ1AsQ0FBQztLQUNMLENBQUM7O2lDQUFBO0FBQ1cscUNBQTZCLGdDQTJDekMsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZWJhc2ljZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSBcIi4vZW1wbG95ZWUuc2VydmljZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tIFwiLi4vdXRpbGl0eS9xdWVyeVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LWVtcGxveWVlLWJhc2ljLWRldGFpbHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7ZW1wbG95ZWU/LmltYWdlfX1cIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt7ZW1wbG95ZWU/LmZpcnN0TmFtZSArXCIgXCIgKyBlbXBsb3llZT8ubGFzdE5hbWV9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7KGVtcGxveWVlPy5kaXZpc2lvbiAmJiBlbXBsb3llZS5kZXBhcnRtZW50KT9lbXBsb3llZT8uZGl2aXNpb24rXCItXCIrZW1wbG95ZWUuZGVwYXJ0bWVudDpcIlwifX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1lbnZlbG9wZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3BhbiBjbGFzcz1cInRleHQtbm9kZVwiPnt7ZW1wbG95ZWU/LmVtYWlsfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLXBob25lLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3BhbiBjbGFzcz1cInRleHQtbm9kZVwiPnt7ZW1wbG95ZWU/LnBob25lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWhvbWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4gY2xhc3M9XCJ0ZXh0LW5vZGVcIj57e2VtcGxveWVlPy5jaXR5fX17e2VtcGxveWVlPy5zdGF0ZSA/IFwiLFwiICsgZW1wbG95ZWU/LnN0YXRlIDogXCJcIn19IC0ge3tlbXBsb3llZT8uY291bnRyeX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiIGlkPVwibXlsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIGlkPVwidG9wXCI+VGl0bGU6IDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e3RpdGxlfX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgKm5nSWY9XCJlbXBsb3llZT8uaGFzTWFuYWdlclwiPk1hbmFnZXI6PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJhZGdlXCI+e3ttYW5hZ2VyfX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgKm5nSWY9XCJlbXBsb3llZT8uY2FuTWFuYWdlRW1wbG95ZWVzXCI+RW1wbG95ZWVzOiA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3tlbXBsb3llZUNvdW50fX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+UHJvamVjdHM6IDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e3Byb2plY3RDb3VudH19PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIGlkPVwiYm90dG9tXCI+QXZhbGlhYmlsaXR5OiA8c3BhbiBjbGFzcz1cImJhZGdlXCI+MCU8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgXHQjbXlsaXN0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBcdH1cclxuICAgIFx0LnJpZ2h0LWFsaWdue1xyXG4gICAgXHQgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBcdH1cclxuICAgIFx0LmNvbnRhaW5lci1mbHVpZHtcclxuICAgIFx0ICAgIHBhZGRpbmc6MDtcclxuICAgIFx0fVxyXG4gICAgXHQuY29sLW1kLTJ7XHJcbiAgICBcdG1hcmdpbjowO1xyXG4gICAgXHRwYWRkaW5nOjA7XHJcbiAgICBcdH1cclxuICAgIFx0LnRodW1ibmFpbHtcclxuICAgIFx0ICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIFx0fVxyXG4gICAgXHQubGlzdC1ncm91cC1pdGVte1xyXG4gICAgXHQgICAgYm9yZGVyLXJpZ2h0OjA7XHJcbiAgICBcdH1cclxuICAgIFx0I3RvcHtcclxuICAgIFx0ICAgIGJvcmRlci10b3A6MDtcclxuICAgIFx0fVxyXG4gICAgXHQjYm90dG9te1xyXG4gICAgXHRib3JkZXItYm90dG9tOjA7XHJcbiAgICBcdH1cclxuICAgIFx0aDF7XHJcbiAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgXHR9XHJcbiAgICBcdGg0e1xyXG4gICAgXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIFx0fVxyXG4gICAgXHQudGV4dC1ub2Rle1xyXG4gICAgXHRmbG9hdDpyaWdodDtcclxuICAgIFx0d2lkdGg6NzAlO1xyXG4gICAgXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIFx0fVxyXG4gICAgXHRpe1xyXG4gICAgXHRmbG9hdDpsZWZ0O1xyXG4gICAgXHR3aWR0aDoyNSU7XHJcbiAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgXHR9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBlbXBsb3llZTpFbXBsb3llZTtcclxuICAgIHByb2plY3RDb3VudDtcclxuICAgIGVtcGxveWVlQ291bnQ7XHJcbiAgICBtYW5hZ2VyO1xyXG4gICAgdGl0bGU7XHJcbiAgICBfaWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSxwcml2YXRlIF9yb3V0ZXI6Um91dGVyKXt9O1xyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmVtcGxveWVlPXRoaXMuX2VtcGxveWVlU2VydmljZS5zZWxlY3RlZEVtcGxveWVlO1xyXG4gICAgICAgIGlmKHRoaXMuZW1wbG95ZWU9PW51bGwgfHwgdGhpcy5lbXBsb3llZT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5faWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKG5ldyBRdWVyeSgnX2lkJyx0aGlzLl9pZCkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWU9ZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UucG9wRW1wbG95ZWUuZW1pdCh0aGlzLmVtcGxveWVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RDb3VudCA9IHRoaXMuZW1wbG95ZWUucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVDb3VudCA9IHRoaXMuZW1wbG95ZWUuZW1wbG95ZWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZXIgPSB0aGlzLmVtcGxveWVlLm1hbmFnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZW1wbG95ZWUudGl0bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0Q291bnQgPSB0aGlzLmVtcGxveWVlLnByb2plY3RzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5lbXBsb3llZUNvdW50ID0gdGhpcy5lbXBsb3llZS5lbXBsb3llZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIgPSB0aGlzLmVtcGxveWVlLm1hbmFnZXI7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmVtcGxveWVlLnRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UucG9wRW1wbG95ZWUuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0Q291bnQ9ZGF0YS5wcm9qZWN0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlQ291bnQ9ZGF0YS5lbXBsb3llZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VyPWRhdGEubWFuYWdlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGU9ZGF0YS50aXRsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
