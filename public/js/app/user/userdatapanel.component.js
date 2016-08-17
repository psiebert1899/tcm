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
var useremployee_component_1 = require("./useremployee.component");
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
            selector: "my-user-data-panel",
            template: "\n        <div class=\"row\" *ngIf=\"appUser!=null\">\n            <div class=\"col-md-12\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a [routerLink]=\"['./overview']\">Overview</a></li>\n                    <li><a [routerLink]=\"['./employee']\">Employees</a></li>\n                    <li><a [routerLink]=\"['./projects']\">Projects</a></li>\n                    <li><a [routerLink]=\"['./resume']\">Resume</a></li>\n                    <li><a [routerLink]=\"['./training']\">Training</a></li>\n                    <li><a [routerLink]=\"['./benefits']\">Benefits</a></li>\n                    <li><a [routerLink]=\"['./notes']\">Notes</a></li>\n                </ul>\n            </div>\n         </div>\n         <div class=\"row\">\n            <div class=\"col-md-10 panel panel-default\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
            directives: [useroverview_component_1.UserOverviewComponent, useremployee_component_1.UserEmployeeComponent, employeebenefits_component_1.EmployeeBenefitsComponent, employeenotes_component_1.EmployeeNotesComponent,
                employeeprojects_component_1.EmployeeProjectsComponent, employeeresume_component_1.EmployeeResumeComponent, employeetraining_component_1.EmployeeTrainingComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService])
    ], UserDataPanelComponent);
    return UserDataPanelComponent;
}());
exports.UserDataPanelComponent = UserDataPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcmRhdGFwYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCx1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSx1Q0FBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCx1Q0FBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCwyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQUN2RSx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRSwyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQUN2RSx5Q0FBc0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNuRSwyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQTBCdkU7SUFFSSxnQ0FBb0IsWUFBeUIsRUFBVSxhQUEyQjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUQxRjtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUExQlI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUscTZCQW1CVDtZQUNELFVBQVUsRUFBRSxDQUFDLDhDQUFxQixFQUFFLDhDQUFxQixFQUFFLHNEQUF5QixFQUFFLGdEQUFzQjtnQkFDeEcsc0RBQXlCLEVBQUUsa0RBQXVCLEVBQUUsc0RBQXlCLEVBQUUsMEJBQWlCLENBQUM7U0FDeEcsQ0FBQzs7OEJBQUE7SUFJRiw2QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksOEJBQXNCLHlCQUdsQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlcmRhdGFwYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbnVzZXJcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VXNlck92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tIFwiLi91c2Vyb3ZlcnZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckVtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyZW1wbG95ZWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVCZW5lZml0c0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWViZW5lZml0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZU5vdGVzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZW5vdGVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlUHJvamVjdHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlcHJvamVjdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVSZXN1bWVDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlcmVzdW1lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlVHJhaW5pbmdDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVldHJhaW5pbmcuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktdXNlci1kYXRhLXBhbmVsXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImFwcFVzZXIhPW51bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgW3JvdXRlckxpbmtdPVwiWycuL292ZXJ2aWV3J11cIj5PdmVydmlldzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vZW1wbG95ZWUnXVwiPkVtcGxveWVlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vcHJvamVjdHMnXVwiPlByb2plY3RzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9yZXN1bWUnXVwiPlJlc3VtZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vdHJhaW5pbmcnXVwiPlRyYWluaW5nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9iZW5lZml0cyddXCI+QmVuZWZpdHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL25vdGVzJ11cIj5Ob3RlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTAgcGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbVXNlck92ZXJ2aWV3Q29tcG9uZW50LCBVc2VyRW1wbG95ZWVDb21wb25lbnQsIEVtcGxveWVlQmVuZWZpdHNDb21wb25lbnQsIEVtcGxveWVlTm90ZXNDb21wb25lbnQsXHJcbiAgICAgICAgRW1wbG95ZWVQcm9qZWN0c0NvbXBvbmVudCwgRW1wbG95ZWVSZXN1bWVDb21wb25lbnQsIEVtcGxveWVlVHJhaW5pbmdDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckRhdGFQYW5lbENvbXBvbmVudCB7XHJcbkBJbnB1dCgpIGFwcFVzZXI6IEFwcGxpY2F0aW9uVXNlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
