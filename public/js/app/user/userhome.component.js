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
var user_service_1 = require("./user.service");
var error_service_1 = require("../errors/error.service");
var userprofilepanel_component_1 = require("./userprofilepanel.component");
var userdatapanel_component_1 = require("./userdatapanel.component");
var useroverview_component_1 = require("./useroverview.component");
var useremployee_component_1 = require("./useremployee.component");
var router_1 = require("@angular/router");
var employeeprojects_component_1 = require("./employeeprojects.component");
var employeeresume_component_1 = require("./employeeresume.component");
var employeetraining_component_1 = require("./employeetraining.component");
var employeebenefits_component_1 = require("./employeebenefits.component");
var employeenotes_component_1 = require("./employeenotes.component");
var UserHomeComponent = (function () {
    function UserHomeComponent(_userService, _errorService) {
        this._userService = _userService;
        this._errorService = _errorService;
        this.dataLoaded = false;
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._userService.user === undefined || this._userService.user == null) {
            this._userService.getUser().subscribe(function (data) {
                _this.appUser = data;
                _this.dataLoaded = true;
            }, function (error) {
                _this._errorService.handleError(error);
            });
        }
        else {
            this.appUser = this._userService.user;
        }
    };
    UserHomeComponent.prototype.getAppUser = function () {
        return this._userService.user;
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            selector: "my-userhome",
            template: "\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row\">\n               <my-user-profile-panel [appUser]=\"appUser\"></my-user-profile-panel>\n            </div>\n                <my-user-data-panel [appUser]=\"appUser\"></my-user-data-panel>\n        </div>\n    ",
            directives: [userprofilepanel_component_1.UserProfilePanelComponent, userdatapanel_component_1.UserDataPanelComponent]
        }),
        router_1.Routes([
            { path: "overview", component: useroverview_component_1.UserOverviewComponent },
            { path: "employee", component: useremployee_component_1.UserEmployeeComponent },
            { path: "projects", component: employeeprojects_component_1.EmployeeProjectsComponent },
            { path: "resume", component: employeeresume_component_1.EmployeeResumeComponent },
            { path: "training", component: employeetraining_component_1.EmployeeTrainingComponent },
            { path: "benefits", component: employeebenefits_component_1.EmployeeBenefitsComponent },
            { path: "notes", component: employeenotes_component_1.EmployeeNotesComponent }
        ]), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcmhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFDakUsdUNBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0QsdUNBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFzQmpFO0lBR0ksMkJBQW9CLFlBQXlCLEVBQVUsYUFBMkI7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSTtnQkFDQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQztJQUVMLENBQUM7SUFDRCxzQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUE1Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHdSQU9UO1lBQ0QsVUFBVSxFQUFHLENBQUMsc0RBQXlCLEVBQUUsZ0RBQXNCLENBQUM7U0FDbkUsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNEQUF5QixFQUFDO1lBQ3hELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzREFBeUIsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNEQUF5QixFQUFDO1lBQ3hELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUM7U0FDckQsQ0FBQzs7eUJBQUE7SUEwQkYsd0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHlCQUFpQixvQkF5QjdCLENBQUEiLCJmaWxlIjoidXNlci91c2VyaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbnVzZXJcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJQcm9maWxlUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL3VzZXJwcm9maWxlcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckRhdGFQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vdXNlcmRhdGFwYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyT3ZlcnZpZXdDb21wb25lbnR9IGZyb20gXCIuL3VzZXJvdmVydmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyRW1wbG95ZWVDb21wb25lbnR9IGZyb20gXCIuL3VzZXJlbXBsb3llZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtFbXBsb3llZVByb2plY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZXByb2plY3RzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlUmVzdW1lQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZXJlc3VtZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZVRyYWluaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZXRyYWluaW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlQmVuZWZpdHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlYmVuZWZpdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVOb3Rlc0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVub3Rlcy5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS11c2VyaG9tZVwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgIDxteS11c2VyLXByb2ZpbGUtcGFuZWwgW2FwcFVzZXJdPVwiYXBwVXNlclwiPjwvbXktdXNlci1wcm9maWxlLXBhbmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxteS11c2VyLWRhdGEtcGFuZWwgW2FwcFVzZXJdPVwiYXBwVXNlclwiPjwvbXktdXNlci1kYXRhLXBhbmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXMgOiBbVXNlclByb2ZpbGVQYW5lbENvbXBvbmVudCwgVXNlckRhdGFQYW5lbENvbXBvbmVudF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogXCJvdmVydmlld1wiLCBjb21wb25lbnQ6IFVzZXJPdmVydmlld0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCJlbXBsb3llZVwiLCBjb21wb25lbnQ6IFVzZXJFbXBsb3llZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCJwcm9qZWN0c1wiLCBjb21wb25lbnQ6IEVtcGxveWVlUHJvamVjdHNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwicmVzdW1lXCIsIGNvbXBvbmVudDogRW1wbG95ZWVSZXN1bWVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwidHJhaW5pbmdcIiwgY29tcG9uZW50OiBFbXBsb3llZVRyYWluaW5nQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiBcImJlbmVmaXRzXCIsIGNvbXBvbmVudDogRW1wbG95ZWVCZW5lZml0c0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCJub3Rlc1wiLCBjb21wb25lbnQ6IEVtcGxveWVlTm90ZXNDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBVc2VySG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBVc2VyOiBBcHBsaWNhdGlvblVzZXI7XHJcbiAgICBwdWJsaWMgZGF0YUxvYWRlZDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFMb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyU2VydmljZS51c2VyID09PSB1bmRlZmluZWQgfHwgdGhpcy5fdXNlclNlcnZpY2UudXNlciA9PSBudWxsKSB7XHJcbiAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VyKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmFwcFVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICB0aGlzLmRhdGFMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwVXNlciA9IHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGdldEFwcFVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXI7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
