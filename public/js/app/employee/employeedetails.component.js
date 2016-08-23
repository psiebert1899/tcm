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
let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.employeeDisplay = 'none';
    }
    ngOnInit() {
        this._employeeService.popEmployee.subscribe(data => {
            this.employeeData = data;
            this.employeeDisplay = 'block';
        });
        this._employeeService.selectedEmployeeChanged.subscribe(data => this.employeeData = data, error => console.log(error));
        this._employeeService.selectEmployee(this.employeeData);
    }
    onEmployeeClosed() {
        this.employeeDisplay = 'none';
        this._router.navigateByUrl('/employee/list');
    }
    onEmployeeEdit() {
        this._router.navigateByUrl('/employee/edit');
    }
};
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-employee-details',
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
                        <li><a href="#">Basic</a></li>
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
    `]
    }), 
    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxtQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCx5QkFBZ0QsaUJBQWlCLENBQUMsQ0FBQTtBQXNEbEU7SUFHSSxZQUFvQixnQkFBZ0MsRUFBUyxPQUFjO1FBQXZELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZ0I7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBRjNFLG9CQUFlLEdBQUMsTUFBTSxDQUFDO0lBRXVELENBQUM7SUFDL0UsUUFBUTtRQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN2QyxJQUFJO1lBQ0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBQyxPQUFPLENBQUM7UUFDakMsQ0FBQyxDQUVKLENBQUE7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUNuRCxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLEVBQzlCLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELGdCQUFnQjtRQUNaLElBQUksQ0FBQyxlQUFlLEdBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELGNBQWM7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7QUFDTCxDQUFDO0FBNUVEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRyxxQkFBcUI7UUFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E4QlQ7UUFDRCxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztLQWdCUixDQUFDO0tBQ0wsQ0FBQzs7NEJBQUE7QUFDVyxnQ0FBd0IsMkJBeUJwQyxDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSBcIi4vZW1wbG95ZWUuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0VtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWJhc2ljZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFZGl0RW1wbG95ZWVDb21wb25lbnR9IGZyb20gXCIuL2VkaXRlbXBsb3llZS5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1lbXBsb3llZS1kZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZW1wbG95ZWVEaXNwbGF5fVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZW1wbG95ZWVEaXNwbGF5fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgaWQ9XCJteU1vZGFsRGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiIGlkPVwibXlFbXBsb3llZVBvcHVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJvbkVtcGxveWVlQ2xvc2VkKClcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7ZW1wbG95ZWVEYXRhPy5maXJzdE5hbWUgKyBcIiBcIiArZW1wbG95ZWVEYXRhPy5sYXN0TmFtZX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5CYXNpYzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PdmVydmlldzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5FbXBsb3llZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvamVjdHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmVzdW1lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRyYWluaW5nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkJlbmVmaXRzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRW1wbG95ZWVFZGl0KClcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRW1wbG95ZWVDbG9zZWQoKVwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtY29udGVudCAtLT5cclxuICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWRpYWxvZyAtLT5cclxuICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwgLS0+ICBcclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNteUVtcGxveWVlUG9wdXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbXlNb2RhbERpYWxvZ3tcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgZW1wbG95ZWVEaXNwbGF5PSdub25lJztcclxuICAgIGVtcGxveWVlRGF0YSA6IEVtcGxveWVlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlOkVtcGxveWVlU2VydmljZSxwcml2YXRlIF9yb3V0ZXI6Um91dGVyICl7fVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UucG9wRW1wbG95ZWUuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnNlbGVjdGVkRW1wbG95ZWVDaGFuZ2VkLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmVtcGxveWVlRGF0YT1kYXRhLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnNlbGVjdEVtcGxveWVlKHRoaXMuZW1wbG95ZWVEYXRhKTtcclxuICAgIH1cclxuICAgIG9uRW1wbG95ZWVDbG9zZWQoKXtcclxuICAgICAgICB0aGlzLmVtcGxveWVlRGlzcGxheT0nbm9uZSc7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9lbXBsb3llZS9saXN0Jyk7XHJcbiAgICB9XHJcbiAgICBvbkVtcGxveWVlRWRpdCgpe1xyXG4gICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9lbXBsb3llZS9lZGl0Jyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
