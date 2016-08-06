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
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _errorService) {
        this._employeeService = _employeeService;
        this._errorService = _errorService;
        this.dataLoaded = false;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (employees) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBNEJ2QztJQUNJLCtCQUFvQixnQkFBa0MsRUFBVSxhQUEyQjtRQUF2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFM0YsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUYyRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQzFDLFVBQUEsU0FBUztZQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDTCxDQUFDO0lBeENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRyxrQkFBa0I7WUFDN0IsUUFBUSxFQUFFLDBWQVFUO1lBQ0QsVUFBVSxFQUFHLENBQUMsb0RBQXdCLEVBQUMsb0RBQXdCLEVBQUMsOERBQTZCLENBQUM7WUFDOUYsTUFBTSxFQUFDLENBQUMsaU9BVVAsQ0FBQztTQUNMLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUcsU0FBUyxFQUFHLDhEQUE2QixFQUFDO1NBQy9ELENBQUM7OzZCQUFBO0lBZUYsNEJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLDZCQUFxQix3QkFjakMsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSBcIi4vZW1wbG95ZWUuc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWRldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlYmFzaWNkZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LWVtcGxveWVlLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDE+RW1wbG95ZWUgTGlzdDwvaDE+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtMTJcIiAqbmdJZj1cImRhdGFMb2FkZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPG15LWVtcGxveWVlLWRpc3BsYXkgKm5nRm9yPVwibGV0IGUgb2YgZW1wbG95ZWVzXCIgW2VtcGxveWVlXT1cImVcIj48L215LWVtcGxveWVlLWRpc3BsYXk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8bXktZW1wbG95ZWUtZGV0YWlscz48L215LWVtcGxveWVlLWRldGFpbHM+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtFbXBsb3llZURpc3BsYXlDb21wb25lbnQsRW1wbG95ZWVEZXRhaWxzQ29tcG9uZW50LEVtcGxveWVlQmFzaWNEZXRhaWxzQ29tcG9uZW50XSxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6ICcvYmFzaWMnICwgY29tcG9uZW50IDogRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZVNlcnZpY2UgOiBFbXBsb3llZVNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKXt9XHJcbiAgICBlbXBsb3llZXM6IEVtcGxveWVlW107XHJcbiAgICBkYXRhTG9hZGVkID1mYWxzZTtcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlcygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZW1wbG95ZWVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmVtcGxveWVlcyA9IGVtcGxveWVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZD10cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
