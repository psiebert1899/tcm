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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBNEJ2QztJQUNJLCtCQUFvQixnQkFBa0MsRUFBVSxhQUEyQjtRQUF2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFM0YsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUYyRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUM5RCxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFBO0lBQ0wsQ0FBQztJQUNELG1EQUFtQixHQUFuQixVQUFvQixHQUFZO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUE1Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLGtCQUFrQjtZQUM3QixRQUFRLEVBQUUsNlhBUVQ7WUFDRCxVQUFVLEVBQUcsQ0FBQyxvREFBd0IsRUFBQyxvREFBd0IsRUFBQyw4REFBNkIsQ0FBQztZQUM5RixNQUFNLEVBQUMsQ0FBQyxpT0FVUCxDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRyxTQUFTLEVBQUcsOERBQTZCLEVBQUM7U0FDL0QsQ0FBQzs7NkJBQUE7SUFtQkYsNEJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLDZCQUFxQix3QkFrQmpDLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlRGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVkaXNwbGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVkZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWJhc2ljZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSBcIi4uL3V0aWxpdHkvcXVlcnlcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1lbXBsb3llZS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPkVtcGxveWVlIExpc3Q8L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJkYXRhTG9hZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxteS1lbXBsb3llZS1kaXNwbGF5ICpuZ0Zvcj1cImxldCBlIG9mIGVtcGxveWVlc1wiIFtlbXBsb3llZV09XCJlXCIgKGNsaWNrKT1cInNldFNlbGVjdGVkRW1wbG95ZWUoZSlcIj48L215LWVtcGxveWVlLWRpc3BsYXk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8bXktZW1wbG95ZWUtZGV0YWlscz48L215LWVtcGxveWVlLWRldGFpbHM+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtFbXBsb3llZURpc3BsYXlDb21wb25lbnQsRW1wbG95ZWVEZXRhaWxzQ29tcG9uZW50LEVtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50XSxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6ICcvYmFzaWMnICwgY29tcG9uZW50IDogRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZVNlcnZpY2UgOiBFbXBsb3llZVNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKXt9XHJcbiAgICBlbXBsb3llZXM6IEVtcGxveWVlW107XHJcbiAgICBkYXRhTG9hZGVkID1mYWxzZTtcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlcyhuZXcgUXVlcnkobnVsbCxudWxsKSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBlbXBsb3llZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMgPSBlbXBsb3llZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGVkPXRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkRW1wbG95ZWUoZW1wOkVtcGxveWVlKXtcclxuICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnNlbGVjdEVtcGxveWVlKGVtcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5wb3BFbXBsb3llZURldGFpbHMoZW1wKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
