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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHNCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ3ZDLHFDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBOEIxRDtJQUNJLCtCQUFvQixnQkFBaUMsRUFBVSxhQUEyQjtRQUF0RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFMUYsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUYwRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUMvRCxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ04sQ0FBQztJQUNELG1EQUFtQixHQUFuQixVQUFvQixHQUFhO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUE5Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLGtCQUFrQjtZQUM3QixRQUFRLEVBQUUsc2dCQVNUO1lBQ0QsVUFBVSxFQUFHLENBQUMsb0RBQXdCLEVBQUUsb0RBQXdCLEVBQUUsOERBQTZCLENBQUM7WUFDaEcsS0FBSyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDM0IsTUFBTSxFQUFFLENBQUMsaU9BVVIsQ0FBQztTQUNMLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUcsU0FBUyxFQUFHLDhEQUE2QixFQUFDO1NBQy9ELENBQUM7OzZCQUFBO0lBbUJGLDRCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSw2QkFBcUIsd0JBa0JqQyxDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSBcIi4vZW1wbG95ZWUuc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWRldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlYmFzaWNkZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tIFwiLi4vdXRpbGl0eS9xdWVyeVwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VhcmNoUGlwZX0gZnJvbSBcIi4vZW1wbG95ZWUtc2VhcmNoLnBpcGVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6IFwibXktZW1wbG95ZWUtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDE+RW1wbG95ZWUgTGlzdDwvaDE+XHJcbiAgICAgICAgPHNwYW4+U2VhcmNoIEVtcGxveWVlOiA8L3NwYW4+PGlucHV0IGlkPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImVtcGxveWVlU2VhcmNoXCIvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJkYXRhTG9hZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxteS1lbXBsb3llZS1kaXNwbGF5ICpuZ0Zvcj1cImxldCBlIG9mIGVtcGxveWVlcyB8IGZpbmRFbXBsb3llZTplbXBsb3llZVNlYXJjaFwiIFtlbXBsb3llZV09XCJlXCIgKGNsaWNrKT1cInNldFNlbGVjdGVkRW1wbG95ZWUoZSlcIj48L215LWVtcGxveWVlLWRpc3BsYXk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8bXktZW1wbG95ZWUtZGV0YWlscz48L215LWVtcGxveWVlLWRldGFpbHM+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtFbXBsb3llZURpc3BsYXlDb21wb25lbnQsIEVtcGxveWVlRGV0YWlsc0NvbXBvbmVudCwgRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnRdLFxyXG4gICAgcGlwZXM6IFtFbXBsb3llZVNlYXJjaFBpcGVdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6IFwiL2Jhc2ljXCIgLCBjb21wb25lbnQgOiBFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XHJcbiAgICBlbXBsb3llZXM6IEVtcGxveWVlW107XHJcbiAgICBkYXRhTG9hZGVkID0gZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKG5ldyBRdWVyeShudWxsLCBudWxsKSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBlbXBsb3llZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMgPSBlbXBsb3llZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkRW1wbG95ZWUoZW1wOiBFbXBsb3llZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2Uuc2VsZWN0RW1wbG95ZWUoZW1wKTtcclxuICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnBvcEVtcGxveWVlRGV0YWlscyhlbXApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
