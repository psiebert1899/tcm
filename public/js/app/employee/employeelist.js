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
            template: "\n        <section class=\"col-md-12\" *ngIf=\"dataLoaded\">\n            <div class=\"container-fluid\">\n                <my-employee-display *ngFor=\"let e of employees\" [employee]=\"e\"></my-employee-display>\n            </div>\n        </section>\n        <my-employee-details></my-employee-details>\n    ",
            directives: [employeedisplay_component_1.EmployeeDisplayComponent, employeedetails_component_1.EmployeeDetailsComponent, employeebasicdetails_component_1.EmployeeBasicDetailsComponent]
        }),
        router_1.Routes([
            { path: '/basic', component: employeebasicdetails_component_1.EmployeeBasicDetailsComponent }
        ]), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, error_service_1.ErrorService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF1Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JFLCtDQUE0QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBZ0J2QztJQUNJLCtCQUFvQixnQkFBa0MsRUFBVSxhQUEyQjtRQUF2RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFM0YsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUYyRSxDQUFDO0lBRzlGLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQzFDLFVBQUEsU0FBUztZQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDTCxDQUFDO0lBNUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRyxrQkFBa0I7WUFDN0IsUUFBUSxFQUFFLDBUQU9UO1lBQ0QsVUFBVSxFQUFHLENBQUMsb0RBQXdCLEVBQUMsb0RBQXdCLEVBQUMsOERBQTZCLENBQUM7U0FDakcsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRyxTQUFTLEVBQUcsOERBQTZCLEVBQUM7U0FDL0QsQ0FBQzs7NkJBQUE7SUFlRiw0QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksNkJBQXFCLHdCQWNqQyxDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtFbXBsb3llZURpc3BsYXlDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZURldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWViYXNpY2RldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnbXktZW1wbG95ZWUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJkYXRhTG9hZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxteS1lbXBsb3llZS1kaXNwbGF5ICpuZ0Zvcj1cImxldCBlIG9mIGVtcGxveWVlc1wiIFtlbXBsb3llZV09XCJlXCI+PC9teS1lbXBsb3llZS1kaXNwbGF5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG15LWVtcGxveWVlLWRldGFpbHM+PC9teS1lbXBsb3llZS1kZXRhaWxzPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXMgOiBbRW1wbG95ZWVEaXNwbGF5Q29tcG9uZW50LEVtcGxveWVlRGV0YWlsc0NvbXBvbmVudCxFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogJy9iYXNpYycgLCBjb21wb25lbnQgOiBFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VtcGxveWVlU2VydmljZSA6IEVtcGxveWVlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2Upe31cclxuICAgIGVtcGxveWVlczogRW1wbG95ZWVbXTtcclxuICAgIGRhdGFMb2FkZWQgPWZhbHNlO1xyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBlbXBsb3llZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMgPSBlbXBsb3llZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZW1wbG95ZWVzID0gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGVkPXRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
