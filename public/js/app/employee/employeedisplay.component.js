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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFDcEMsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFxQnJEO0lBR0ksa0NBQW9CLGdCQUFpQyxFQUFTLFlBQTBCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUQ5RSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7SUFFaEQsQ0FBQztJQUNELGtEQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFQTDtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUFDSjtRQUFDLGFBQU0sRUFBRTs7NERBQUE7SUF0QmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUMsNlhBUVI7WUFDRCxNQUFNLEVBQUMsQ0FBQyx3SEFPUCxDQUFDO1NBQ0wsQ0FBQzs7Z0NBQUE7SUFVRiwrQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksZ0NBQXdCLDJCQVNwQyxDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSBcIi4vZW1wbG95ZWUuc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1lbXBsb3llZS1kaXNwbGF5JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIiAoY2xpY2spPVwiZW1wbG95ZWVDbGlja2VkKClcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e2VtcGxveWVlLmltYWdlfX1cIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICAgIDxoMz57e2VtcGxveWVlLmZpcnN0TmFtZSArIFwiIFwiICsgZW1wbG95ZWUubGFzdE5hbWV9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDU+e3tlbXBsb3llZT8uZGl2aXNpb24gK1wiLFwiK2VtcGxveWVlPy5kZXBhcnRtZW50fX08L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50e1xyXG5ASW5wdXQoKSBlbXBsb3llZTogRW1wbG95ZWU7XHJcbiAgICBAT3V0cHV0KCkgZXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcjxFbXBsb3llZT4oKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2Upe1xyXG4gICAgfVxyXG4gICAgZW1wbG95ZWVDbGlja2VkKCl7XHJcbiAgICAgICAgdGhpcy5fZW1wbG95ZWVTZXJ2aWNlLnNlbGVjdEVtcGxveWVlKHRoaXMuZW1wbG95ZWUpO1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5wb3BFbXBsb3llZURldGFpbHModGhpcy5lbXBsb3llZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
