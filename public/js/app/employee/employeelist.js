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
        }, function (error) { return console.log(error); });
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-employee-list',
            template: "\n        <h1>Employee List</h1>\n        <section class=\"col-md-12\" *ngIf=\"dataLoaded\">\n            <div class=\"container-fluid\">\n                <my-employee-display *ngFor=\"let e of employees\" [employee]=\"e\"></my-employee-display>\n            </div>\n        </section>\n        <my-employee-details></my-employee-details>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBNEJ2QztJQUNJLCtCQUFvQixnQkFBa0MsRUFBVSxhQUEyQjtRQUF2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFM0YsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUYyRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUM5RCxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFBO0lBQ0wsQ0FBQztJQXhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsa0JBQWtCO1lBQzdCLFFBQVEsRUFBRSwwVkFRVDtZQUNELFVBQVUsRUFBRyxDQUFDLG9EQUF3QixFQUFDLG9EQUF3QixFQUFDLDhEQUE2QixDQUFDO1lBQzlGLE1BQU0sRUFBQyxDQUFDLGlPQVVQLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRyw4REFBNkIsRUFBQztTQUMvRCxDQUFDOzs2QkFBQTtJQWVGLDRCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw2QkFBcUIsd0JBY2pDLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlRGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVkaXNwbGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVkZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWJhc2ljZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSBcIi4uL3V0aWxpdHkvcXVlcnlcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1lbXBsb3llZS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPkVtcGxveWVlIExpc3Q8L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJkYXRhTG9hZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxteS1lbXBsb3llZS1kaXNwbGF5ICpuZ0Zvcj1cImxldCBlIG9mIGVtcGxveWVlc1wiIFtlbXBsb3llZV09XCJlXCI+PC9teS1lbXBsb3llZS1kaXNwbGF5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG15LWVtcGxveWVlLWRldGFpbHM+PC9teS1lbXBsb3llZS1kZXRhaWxzPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXMgOiBbRW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50LEVtcGxveWVlRGV0YWlsc0NvbXBvbmVudCxFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudF0sXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MjVweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5AUm91dGVzKFtcclxuICAgIHtwYXRoOiAnL2Jhc2ljJyAsIGNvbXBvbmVudCA6IEVtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlIDogRW1wbG95ZWVTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSl7fVxyXG4gICAgZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xyXG4gICAgZGF0YUxvYWRlZCA9ZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZXMobmV3IFF1ZXJ5KG51bGwsbnVsbCkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZW1wbG95ZWVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmVtcGxveWVlcyA9IGVtcGxveWVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZD10cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
