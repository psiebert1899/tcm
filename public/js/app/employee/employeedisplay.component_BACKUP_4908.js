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
            template: "\n        <div class=\"col-md-2\" (click)=\"employeeClicked()\">\n            <div class=\"thumbnail\">\n                <img src=\"{{employee.image}}\" class=\"img img-responsive\"/>\n                <h3>{{employee.firstName + \" \" + employee.lastName}}</h3>\n                <h5>{{employee?.division +\",\"+employee?.department}}</h5>\n            </div>\n        </div>\n    ",
            styles: ["\n        h3{\n            text-align:center;\n        }\n        h5{\n            text-align:center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, error_service_1.ErrorService])
    ], EmployeeDisplayComponent);
    return EmployeeDisplayComponent;
}());
exports.EmployeeDisplayComponent = EmployeeDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFDcEMsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFxQnJEO0lBR0ksa0NBQW9CLGdCQUFpQyxFQUFTLFlBQTBCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUQ5RSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7SUFFaEQsQ0FBQztJQUNELGtEQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVJMO1FBQUMsWUFBSyxFQUFFOzs4REFBQTtJQUNKO1FBQUMsYUFBTSxFQUFFOzs0REFBQTtJQXRCYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBQyw2WEFRUjtZQUNELE1BQU0sRUFBQyxDQUFDLHdIQU9QLENBQUM7U0FDTCxDQUFDOztnQ0FBQTtJQVdGLCtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxnQ0FBd0IsMkJBVXBDLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWVkaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWVtcGxveWVlLWRpc3BsYXknLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiIChjbGljayk9XCJlbXBsb3llZUNsaWNrZWQoKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7ZW1wbG95ZWUuaW1hZ2V9fVwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGgzPnt7ZW1wbG95ZWUuZmlyc3ROYW1lICsgXCIgXCIgKyBlbXBsb3llZS5sYXN0TmFtZX19PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoNT57e2VtcGxveWVlPy5kaXZpc2lvbiArXCIsXCIrZW1wbG95ZWU/LmRlcGFydG1lbnR9fTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZURpc3BsYXlDb21wb25lbnR7XHJcbkBJbnB1dCgpIGVtcGxveWVlOiBFbXBsb3llZTtcclxuICAgIEBPdXRwdXQoKSBleHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEVtcGxveWVlPigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UscHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSl7XHJcbiAgICB9XHJcbiAgICBlbXBsb3llZUNsaWNrZWQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnNlbGVjdEVtcGxveWVlKHRoaXMuZW1wbG95ZWUpO1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5wb3BFbXBsb3llZURldGFpbHModGhpcy5lbXBsb3llZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
