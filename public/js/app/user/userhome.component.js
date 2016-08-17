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
        if (localStorage.getItem("token") != null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcmhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFDakUsdUNBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0QsdUNBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFzQmpFO0lBR0ksMkJBQW9CLFlBQXlCLEVBQVUsYUFBMkI7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNqQyxVQUFBLElBQUk7Z0JBQ0EsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzFDLENBQUM7SUFFTCxDQUFDO0lBQ0Qsc0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSx3UkFPVDtZQUNELFVBQVUsRUFBRyxDQUFDLHNEQUF5QixFQUFFLGdEQUFzQixDQUFDO1NBQ25FLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzREFBeUIsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0RBQXlCLEVBQUM7WUFDeEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzREFBeUIsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdEQUFzQixFQUFDO1NBQ3JELENBQUM7O3lCQUFBO0lBMEJGLHdCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx5QkFBaUIsb0JBeUI3QixDQUFBIiwiZmlsZSI6InVzZXIvdXNlcmhvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0FwcGxpY2F0aW9uVXNlcn0gZnJvbSBcIi4vYXBwbGljYXRpb251c2VyXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyUHJvZmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi91c2VycHJvZmlsZXBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJEYXRhUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL3VzZXJkYXRhcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlck92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tIFwiLi91c2Vyb3ZlcnZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckVtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyZW1wbG95ZWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVQcm9qZWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVwcm9qZWN0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZVJlc3VtZUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVyZXN1bWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVUcmFpbmluZ0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWV0cmFpbmluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZUJlbmVmaXRzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWJlbmVmaXRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlTm90ZXNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlbm90ZXMuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktdXNlcmhvbWVcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICA8bXktdXNlci1wcm9maWxlLXBhbmVsIFthcHBVc2VyXT1cImFwcFVzZXJcIj48L215LXVzZXItcHJvZmlsZS1wYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bXktdXNlci1kYXRhLXBhbmVsIFthcHBVc2VyXT1cImFwcFVzZXJcIj48L215LXVzZXItZGF0YS1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzIDogW1VzZXJQcm9maWxlUGFuZWxDb21wb25lbnQsIFVzZXJEYXRhUGFuZWxDb21wb25lbnRdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6IFwib3ZlcnZpZXdcIiwgY29tcG9uZW50OiBVc2VyT3ZlcnZpZXdDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwiZW1wbG95ZWVcIiwgY29tcG9uZW50OiBVc2VyRW1wbG95ZWVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwicHJvamVjdHNcIiwgY29tcG9uZW50OiBFbXBsb3llZVByb2plY3RzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiBcInJlc3VtZVwiLCBjb21wb25lbnQ6IEVtcGxveWVlUmVzdW1lQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiBcInRyYWluaW5nXCIsIGNvbXBvbmVudDogRW1wbG95ZWVUcmFpbmluZ0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCJiZW5lZml0c1wiLCBjb21wb25lbnQ6IEVtcGxveWVlQmVuZWZpdHNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwibm90ZXNcIiwgY29tcG9uZW50OiBFbXBsb3llZU5vdGVzQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgVXNlckhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwVXNlcjogQXBwbGljYXRpb25Vc2VyO1xyXG4gICAgcHVibGljIGRhdGFMb2FkZWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhTG9hZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgIT0gbnVsbCkge1xyXG4gICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZShcclxuICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5hcHBVc2VyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFwcFVzZXIgPSB0aGlzLl91c2VyU2VydmljZS51c2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBnZXRBcHBVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
