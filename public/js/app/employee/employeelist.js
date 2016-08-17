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
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var error_service_1 = require("../errors/error.service");
var employeedisplay_component_1 = require("./employeedisplay.component");
var employeedetails_component_1 = require("./employeedetails.component");
var employeebasicdetails_component_1 = require("./employeebasicdetails.component");
var router_1 = require("@angular/router");
var query_1 = require("../utility/query");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _errorService) {
        this._employeeService = _employeeService;
        this._errorService = _errorService;
        this.dataLoaded = false;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees(new query_1.Query(null, null)).subscribe(function (employees) {
            _this.employees = employees;
            _this._employeeService.employees = employees;
            _this.dataLoaded = true;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    EmployeeListComponent.prototype.setSelectedEmployee = function (emp) {
        this._employeeService.selectEmployee(emp);
        this._employeeService.popEmployeeDetails(emp);
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-employee-list',
            template: "\n        <h1>Employee List</h1>\n        <section class=\"col-md-12\" *ngIf=\"dataLoaded\">\n            <div class=\"container-fluid\">\n                <my-employee-display *ngFor=\"let e of employees\" [employee]=\"e\" (click)=\"setSelectedEmployee(e)\"></my-employee-display>\n            </div>\n        </section>\n        <my-employee-details></my-employee-details>\n    ",
            directives: [employeedisplay_component_1.EmployeeDisplayComponent, employeedetails_component_1.EmployeeDetailsComponent, employeebasicdetails_component_1.EmployeeBasicDetailsComponent],
            styles: ["\n        h1{\n            font-family:OpenSans;\n            color:white;\n        }\n        .col-md-12{\n            background-color:white;\n            border-radius:5px;\n            padding-top:25px;\n        }\n    "]
        }),
        router_1.Routes([
            { path: '/basic', component: employeebasicdetails_component_1.EmployeeBasicDetailsComponent }
        ]), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, error_service_1.ErrorService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBNEJ2QztJQUNJLCtCQUFvQixnQkFBa0MsRUFBVSxhQUEyQjtRQUF2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFM0YsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUYyRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUM5RCxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQTtJQUNMLENBQUM7SUFDRCxtREFBbUIsR0FBbkIsVUFBb0IsR0FBWTtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRyxrQkFBa0I7WUFDN0IsUUFBUSxFQUFFLDZYQVFUO1lBQ0QsVUFBVSxFQUFHLENBQUMsb0RBQXdCLEVBQUMsb0RBQXdCLEVBQUMsOERBQTZCLENBQUM7WUFDOUYsTUFBTSxFQUFDLENBQUMsaU9BVVAsQ0FBQztTQUNMLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUcsU0FBUyxFQUFHLDhEQUE2QixFQUFDO1NBQy9ELENBQUM7OzZCQUFBO0lBbUJGLDRCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSw2QkFBcUIsd0JBa0JqQyxDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtFbXBsb3llZURpc3BsYXlDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZURldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWViYXNpY2RldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UXVlcnl9IGZyb20gXCIuLi91dGlsaXR5L3F1ZXJ5XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnbXktZW1wbG95ZWUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT5FbXBsb3llZSBMaXN0PC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC0xMlwiICpuZ0lmPVwiZGF0YUxvYWRlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8bXktZW1wbG95ZWUtZGlzcGxheSAqbmdGb3I9XCJsZXQgZSBvZiBlbXBsb3llZXNcIiBbZW1wbG95ZWVdPVwiZVwiIChjbGljayk9XCJzZXRTZWxlY3RlZEVtcGxveWVlKGUpXCI+PC9teS1lbXBsb3llZS1kaXNwbGF5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG15LWVtcGxveWVlLWRldGFpbHM+PC9teS1lbXBsb3llZS1kZXRhaWxzPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXMgOiBbRW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50LEVtcGxveWVlRGV0YWlsc0NvbXBvbmVudCxFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudF0sXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MjVweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5AUm91dGVzKFtcclxuICAgIHtwYXRoOiAnL2Jhc2ljJyAsIGNvbXBvbmVudCA6IEVtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlIDogRW1wbG95ZWVTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSl7fVxyXG4gICAgZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xyXG4gICAgZGF0YUxvYWRlZCA9ZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZXMobmV3IFF1ZXJ5KG51bGwsbnVsbCkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZW1wbG95ZWVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmVtcGxveWVlcyA9IGVtcGxveWVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZD10cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWRFbXBsb3llZShlbXA6RW1wbG95ZWUpe1xyXG4gICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2Uuc2VsZWN0RW1wbG95ZWUoZW1wKTtcclxuICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnBvcEVtcGxveWVlRGV0YWlscyhlbXApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
