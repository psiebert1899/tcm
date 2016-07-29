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
var applicationuser_1 = require("./applicationuser");
var user_service_1 = require("./user.service");
var error_service_1 = require("../errors/error.service");
var router_1 = require("@angular/router");
var useroverview_component_1 = require("./useroverview.component");
var useremployee_coomponent_1 = require("./useremployee.coomponent");
var employeebenefits_component_1 = require("./employeebenefits.component");
var employeenotes_component_1 = require("./employeenotes.component");
var employeeprojects_component_1 = require("./employeeprojects.component");
var employeeresume_component_1 = require("./employeeresume.component");
var employeetraining_component_1 = require("./employeetraining.component");
var UserDataPanelComponent = (function () {
    function UserDataPanelComponent(_userService, _errorService) {
        this._userService = _userService;
        this._errorService = _errorService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', applicationuser_1.ApplicationUser)
    ], UserDataPanelComponent.prototype, "appUser", void 0);
    UserDataPanelComponent = __decorate([
        core_1.Component({
            selector: 'my-user-data-panel',
            template: "\n        <div class=\"row\" *ngIf=\"appUser!=null\">\n            <div class=\"col-md-12\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a [routerLink]=\"['./overview']\">Overview</a></li>\n                    <li><a [routerLink]=\"['./employees']\">Employees</a></li>\n                    <li><a [routerLink]=\"['./projects']\">Projects</a></li>\n                    <li><a [routerLink]=\"['./resume']\">Resume</a></li>\n                    <li><a [routerLink]=\"['./training']\">Training</a></li>\n                    <li><a [routerLink]=\"['./benefits']\">Benefits</a></li>\n                    <li><a [routerLink]=\"['./notes']\">Notes</a></li>\n                </ul>\n            </div>\n         </div>\n         <div class=\"row\">\n            <div class=\"col-md-10 panel panel-default\">\n                <router-outlet></router-outlet>\n            </div> \n        </div>\n    ",
            directives: [useroverview_component_1.UserOverviewComponent, useremployee_coomponent_1.UserEmployeeComponent, employeebenefits_component_1.EmployeeBenefitsComponent, employeenotes_component_1.EmployeeNotesComponent,
                employeeprojects_component_1.EmployeeProjectsComponent, employeeresume_component_1.EmployeeResumeComponent, employeetraining_component_1.EmployeeTrainingComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService])
    ], UserDataPanelComponent);
    return UserDataPanelComponent;
}());
exports.UserDataPanelComponent = UserDataPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcmRhdGFwYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCx1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSx1Q0FBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCx3Q0FBb0MsMkJBQTJCLENBQUMsQ0FBQTtBQUNoRSwyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQUN2RSx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRSwyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQUN2RSx5Q0FBc0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNuRSwyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQTBCdkU7SUFFSSxnQ0FBb0IsWUFBd0IsRUFBUyxhQUEwQjtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFhO0lBQUUsQ0FBQztJQUR0RjtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUExQlI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLG9CQUFvQjtZQUM3QixRQUFRLEVBQUMsdTZCQW1CUjtZQUNELFVBQVUsRUFBRSxDQUFDLDhDQUFxQixFQUFDLCtDQUFxQixFQUFDLHNEQUF5QixFQUFDLGdEQUFzQjtnQkFDckcsc0RBQXlCLEVBQUMsa0RBQXVCLEVBQUMsc0RBQXlCLEVBQUMsMEJBQWlCLENBQUM7U0FDckcsQ0FBQzs7OEJBQUE7SUFJRiw2QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksOEJBQXNCLHlCQUdsQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlcmRhdGFwYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbnVzZXJcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VXNlck92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tIFwiLi91c2Vyb3ZlcnZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckVtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyZW1wbG95ZWUuY29vbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlQmVuZWZpdHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlYmVuZWZpdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVOb3Rlc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVub3Rlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZVByb2plY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZXByb2plY3RzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlUmVzdW1lQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZXJlc3VtZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZVRyYWluaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZXRyYWluaW5nLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteS11c2VyLWRhdGEtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImFwcFVzZXIhPW51bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgW3JvdXRlckxpbmtdPVwiWycuL292ZXJ2aWV3J11cIj5PdmVydmlldzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vZW1wbG95ZWVzJ11cIj5FbXBsb3llZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL3Byb2plY3RzJ11cIj5Qcm9qZWN0czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vcmVzdW1lJ11cIj5SZXN1bWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL3RyYWluaW5nJ11cIj5UcmFpbmluZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vYmVuZWZpdHMnXVwiPkJlbmVmaXRzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9ub3RlcyddXCI+Tm90ZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwIHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtVc2VyT3ZlcnZpZXdDb21wb25lbnQsVXNlckVtcGxveWVlQ29tcG9uZW50LEVtcGxveWVlQmVuZWZpdHNDb21wb25lbnQsRW1wbG95ZWVOb3Rlc0NvbXBvbmVudCxcclxuICAgICAgICBFbXBsb3llZVByb2plY3RzQ29tcG9uZW50LEVtcGxveWVlUmVzdW1lQ29tcG9uZW50LEVtcGxveWVlVHJhaW5pbmdDb21wb25lbnQsUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YVBhbmVsQ29tcG9uZW50e1xyXG5ASW5wdXQoKSBhcHBVc2VyOkFwcGxpY2F0aW9uVXNlclxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UscHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOkVycm9yU2VydmljZSl7fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
