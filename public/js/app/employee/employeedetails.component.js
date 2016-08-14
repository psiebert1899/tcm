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
var router_1 = require("@angular/router");
var employeebasicdetails_component_1 = require("./employeebasicdetails.component");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.employeeDisplay = 'none';
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.popEmployee.subscribe(function (data) {
            _this.employeeData = data;
            _this.employeeDisplay = 'block';
        });
        this._employeeService.selectedEmployeeChanged.subscribe(function (data) { return _this.employeeData = data; }, function (error) { return console.log(error); });
        this._employeeService.selectEmployee(this.employeeData);
    };
    EmployeeDetailsComponent.prototype.onEmployeeClosed = function () {
        this.employeeDisplay = 'none';
    };
    EmployeeDetailsComponent.prototype.onEmployeeEdit = function () {
        this._router.navigateByUrl('/employee/edit');
    };
    EmployeeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-employee-details',
            template: "\n        <div class=\"backdrop\" [ngStyle]=\"{'display': employeeDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': employeeDisplay}\">\n            <div class=\"modal-dialog\" id=\"myModalDialog\">\n                <div class=\"modal-content\" id=\"myEmployeePopup\" >\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onEmployeeClosed()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{employeeData?.firstName + \" \" +employeeData?.lastName}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                    <ul class=\"nav nav-tabs\">\n                        <li><a [routerLink]=\"['./basic']\">Basic</a></li>\n                        <li><a href=\"#\">Overview</a></li>\n                        <li><a href=\"#\">Employees</a></li>\n                        <li><a href=\"#\">Projects</a></li>\n                        <li><a href=\"#\">Resume</a></li>\n                        <li><a href=\"#\">Training</a></li>\n                        <li><a href=\"#\">Benefits</a></li>\n                        <li><a href=\"#\">Notes</a></li>\n                    </ul>\n                        <router-outlet></router-outlet>\n                        \n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onEmployeeEdit()\">Edit</button>\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onEmployeeClosed()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->  \n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n        #myEmployeePopup{\n            width:80%;\n            margin-left:10%;\n        }\n        #myModalDialog{\n            width:100%;\n        }\n    "],
            directives: [router_1.ROUTER_DIRECTIVES, employeebasicdetails_component_1.EmployeeBasicDetailsComponent]
        }),
        router_1.Routes([
            { path: '/basic', component: employeebasicdetails_component_1.EmployeeBasicDetailsComponent }
        ]), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCx1QkFBZ0QsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRSwrQ0FBNEMsa0NBQWtDLENBQUMsQ0FBQTtBQXlEL0U7SUFHSSxrQ0FBb0IsZ0JBQWdDLEVBQVMsT0FBYztRQUF2RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUYzRSxvQkFBZSxHQUFDLE1BQU0sQ0FBQztJQUV1RCxDQUFDO0lBQy9FLDJDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN2QyxVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixLQUFJLENBQUMsZUFBZSxHQUFDLE9BQU8sQ0FBQztRQUNqQyxDQUFDLENBRUosQ0FBQTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQ25ELFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBQyxJQUFJLEVBQXRCLENBQXNCLEVBQzlCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxtREFBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBQ0QsaURBQWMsR0FBZDtRQUNHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTlFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcscUJBQXFCO1lBQ2hDLFFBQVEsRUFBRSw2MERBOEJUO1lBQ0QsTUFBTSxFQUFFLENBQUMsZ1hBZ0JSLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyw4REFBNkIsQ0FBQztTQUNoRSxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRyw4REFBNkIsRUFBQztTQUMvRCxDQUFDOztnQ0FBQTtJQXlCRiwrQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlksZ0NBQXdCLDJCQXdCcEMsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtFbXBsb3llZUJhc2ljRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWViYXNpY2RldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RWRpdEVtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi9lZGl0ZW1wbG95ZWUuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnbXktZW1wbG95ZWUtZGV0YWlscycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGVtcGxveWVlRGlzcGxheX1cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGVtcGxveWVlRGlzcGxheX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIGlkPVwibXlNb2RhbERpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBpZD1cIm15RW1wbG95ZWVQb3B1cFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25FbXBsb3llZUNsb3NlZCgpXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2VtcGxveWVlRGF0YT8uZmlyc3ROYW1lICsgXCIgXCIgK2VtcGxveWVlRGF0YT8ubGFzdE5hbWV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9iYXNpYyddXCI+QmFzaWM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+T3ZlcnZpZXc8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RW1wbG95ZWVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2plY3RzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlJlc3VtZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5UcmFpbmluZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5CZW5lZml0czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkVtcGxveWVlRWRpdCgpXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkVtcGxveWVlQ2xvc2VkKClcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsIC0tPiAgXHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbXlFbXBsb3llZVBvcHVwe1xyXG4gICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI215TW9kYWxEaWFsb2d7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnRdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6ICcvYmFzaWMnICwgY29tcG9uZW50IDogRW1wbG95ZWVCYXNpY0RldGFpbHNDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZURldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBlbXBsb3llZURpc3BsYXk9J25vbmUnO1xyXG4gICAgZW1wbG95ZWVEYXRhIDogRW1wbG95ZWU7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZVNlcnZpY2U6RW1wbG95ZWVTZXJ2aWNlLHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIgKXt9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5wb3BFbXBsb3llZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGlzcGxheT0nYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2Uuc2VsZWN0ZWRFbXBsb3llZUNoYW5nZWQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuZW1wbG95ZWVEYXRhPWRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2Uuc2VsZWN0RW1wbG95ZWUodGhpcy5lbXBsb3llZURhdGEpO1xyXG4gICAgfVxyXG4gICAgb25FbXBsb3llZUNsb3NlZCgpe1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVEaXNwbGF5PSdub25lJztcclxuICAgIH1cclxuICAgIG9uRW1wbG95ZWVFZGl0KCl7XHJcbiAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2VtcGxveWVlL2VkaXQnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
