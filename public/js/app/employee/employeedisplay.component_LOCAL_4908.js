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
var employee_1 = require("./employee");
var employee_service_1 = require("./employee.service");
var error_service_1 = require("../errors/error.service");
var EmployeeDisplayComponent = (function () {
    function EmployeeDisplayComponent(_employeeService, errorService) {
        this._employeeService = _employeeService;
        this.errorService = errorService;
        this.expand = new core_1.EventEmitter();
    }
    EmployeeDisplayComponent.prototype.employeeClicked = function () {
        console.log("clicked");
        this._employeeService.selectEmployee(this.employee);
        this._employeeService.popEmployeeDetails(this.employee);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employee_1.Employee)
    ], EmployeeDisplayComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EmployeeDisplayComponent.prototype, "expand", void 0);
    EmployeeDisplayComponent = __decorate([
        core_1.Component({
            selector: 'my-employee-display',
            template: "\n        <div class=\"col-md-3\" (click)=\"employeeClicked()\">\n            <div class=\"thumbnail\">\n                <img src=\"{{employee.image}}\" class=\"img img-responsive\"/>\n                <h3>{{employee.firstName + \" \" + employee.lastName}}</h3>\n                <h5>{{employee?.division +\",\"+employee?.department}}</h5>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, error_service_1.ErrorService])
    ], EmployeeDisplayComponent);
    return EmployeeDisplayComponent;
}());
exports.EmployeeDisplayComponent = EmployeeDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFDcEMsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFhckQ7SUFHSSxrQ0FBb0IsZ0JBQWlDLEVBQVMsWUFBMEI7UUFBcEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRDlFLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztJQUVoRCxDQUFDO0lBQ0Qsa0RBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBUkw7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBQ0o7UUFBQyxhQUFNLEVBQUU7OzREQUFBO0lBZGI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUMsNlhBUVI7U0FDSixDQUFDOztnQ0FBQTtJQVdGLCtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxnQ0FBd0IsMkJBVXBDLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWVkaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWVtcGxveWVlLWRpc3BsYXknLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiIChjbGljayk9XCJlbXBsb3llZUNsaWNrZWQoKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7ZW1wbG95ZWUuaW1hZ2V9fVwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGgzPnt7ZW1wbG95ZWUuZmlyc3ROYW1lICsgXCIgXCIgKyBlbXBsb3llZS5sYXN0TmFtZX19PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoNT57e2VtcGxveWVlPy5kaXZpc2lvbiArXCIsXCIrZW1wbG95ZWU/LmRlcGFydG1lbnR9fTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50e1xyXG5ASW5wdXQoKSBlbXBsb3llZTogRW1wbG95ZWU7XHJcbiAgICBAT3V0cHV0KCkgZXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcjxFbXBsb3llZT4oKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2Upe1xyXG4gICAgfVxyXG4gICAgZW1wbG95ZWVDbGlja2VkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5zZWxlY3RFbXBsb3llZSh0aGlzLmVtcGxveWVlKTtcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UucG9wRW1wbG95ZWVEZXRhaWxzKHRoaXMuZW1wbG95ZWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
