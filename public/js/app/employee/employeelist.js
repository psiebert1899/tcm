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
var employee_search_pipe_1 = require("./employee-search.pipe");
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
        (function (error) { return _this._errorService.handleError(error); });
    };
    EmployeeListComponent.prototype.setSelectedEmployee = function (emp) {
        this._employeeService.selectEmployee(emp);
        this._employeeService.popEmployeeDetails(emp);
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: "my-employee-list",
            template: "\n        <h1>Employee List</h1>\n        <span>Search Employee: </span><input id=\"search\" type=\"text\" [(ngModel)]=\"employeeSearch\"/>\n        <section class=\"col-md-12\" *ngIf=\"dataLoaded\">\n            <div class=\"container-fluid\">\n                <my-employee-display *ngFor=\"let e of employees | findEmployee:employeeSearch\" [employee]=\"e\" (click)=\"setSelectedEmployee(e)\"></my-employee-display>\n            </div>\n        </section>\n        <my-employee-details></my-employee-details>\n    ",
            directives: [employeedisplay_component_1.EmployeeDisplayComponent, employeedetails_component_1.EmployeeDetailsComponent, employeebasicdetails_component_1.EmployeeBasicDetailsComponent],
            pipes: [employee_search_pipe_1.EmployeeSearchPipe],
            styles: ["\n        h1{\n            font-family:OpenSans;\n            color:white;\n        }\n        .col-md-12{\n            background-color:white;\n            border-radius:5px;\n            padding-top:25px;\n        }\n    "]
        }),
        router_1.Routes([
            { path: "/basic", component: employeebasicdetails_component_1.EmployeeBasicDetailsComponent }
        ]), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, error_service_1.ErrorService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ3ZDLHFDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBOEIxRDtJQUNJLCtCQUFvQixnQkFBaUMsRUFBVSxhQUEyQjtRQUF0RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFMUYsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUYwRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUMvRCxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO1FBQ0UsQ0FBQSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxFQUFDO0lBQ3ZELENBQUM7SUFDRCxtREFBbUIsR0FBbkIsVUFBb0IsR0FBYTtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBL0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRyxrQkFBa0I7WUFDN0IsUUFBUSxFQUFFLHNnQkFTVDtZQUNELFVBQVUsRUFBRyxDQUFDLG9EQUF3QixFQUFFLG9EQUF3QixFQUFFLDhEQUE2QixDQUFDO1lBQ2hHLEtBQUssRUFBRSxDQUFDLHlDQUFrQixDQUFDO1lBQzNCLE1BQU0sRUFBRSxDQUFDLGlPQVVSLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRyw4REFBNkIsRUFBQztTQUMvRCxDQUFDOzs2QkFBQTtJQW9CRiw0QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksNkJBQXFCLHdCQW1CakMsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlRGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVkaXNwbGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVkZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWJhc2ljZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSBcIi4uL3V0aWxpdHkvcXVlcnlcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlYXJjaFBpcGV9IGZyb20gXCIuL2VtcGxveWVlLXNlYXJjaC5waXBlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiBcIm15LWVtcGxveWVlLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPkVtcGxveWVlIExpc3Q8L2gxPlxyXG4gICAgICAgIDxzcGFuPlNlYXJjaCBFbXBsb3llZTogPC9zcGFuPjxpbnB1dCBpZD1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJlbXBsb3llZVNlYXJjaFwiLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC0xMlwiICpuZ0lmPVwiZGF0YUxvYWRlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8bXktZW1wbG95ZWUtZGlzcGxheSAqbmdGb3I9XCJsZXQgZSBvZiBlbXBsb3llZXMgfCBmaW5kRW1wbG95ZWU6ZW1wbG95ZWVTZWFyY2hcIiBbZW1wbG95ZWVdPVwiZVwiIChjbGljayk9XCJzZXRTZWxlY3RlZEVtcGxveWVlKGUpXCI+PC9teS1lbXBsb3llZS1kaXNwbGF5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG15LWVtcGxveWVlLWRldGFpbHM+PC9teS1lbXBsb3llZS1kZXRhaWxzPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXMgOiBbRW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50LCBFbXBsb3llZURldGFpbHNDb21wb25lbnQsIEVtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50XSxcclxuICAgIHBpcGVzOiBbRW1wbG95ZWVTZWFyY2hQaXBlXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MjVweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5AUm91dGVzKFtcclxuICAgIHtwYXRoOiBcIi9iYXNpY1wiICwgY29tcG9uZW50IDogRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxyXG4gICAgZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xyXG4gICAgZGF0YUxvYWRlZCA9IGZhbHNlO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlcyhuZXcgUXVlcnkobnVsbCwgbnVsbCkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZW1wbG95ZWVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmVtcGxveWVlcyA9IGVtcGxveWVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3RlZEVtcGxveWVlKGVtcDogRW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnNlbGVjdEVtcGxveWVlKGVtcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5wb3BFbXBsb3llZURldGFpbHMoZW1wKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
