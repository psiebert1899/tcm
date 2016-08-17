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
var useremployee_coomponent_1 = require("./useremployee.coomponent");
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
        if (localStorage.getItem('token') != null) {
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
            selector: 'my-userhome',
            template: "\n        <div *ngIf=\"dataLoaded\">\n            <div class=\"row\">\n               <my-user-profile-panel [appUser]=\"appUser\"></my-user-profile-panel>\n            </div>\n                <my-user-data-panel [appUser]=\"appUser\"></my-user-data-panel>\n        </div>\n    ",
            directives: [userprofilepanel_component_1.UserProfilePanelComponent, userdatapanel_component_1.UserDataPanelComponent]
        }),
        router_1.Routes([
            { path: 'overview', component: useroverview_component_1.UserOverviewComponent },
            { path: 'employees', component: useremployee_coomponent_1.UserEmployeeComponent },
            { path: 'projects', component: employeeprojects_component_1.EmployeeProjectsComponent },
            { path: 'resume', component: employeeresume_component_1.EmployeeResumeComponent },
            { path: 'training', component: employeetraining_component_1.EmployeeTrainingComponent },
            { path: 'benefits', component: employeebenefits_component_1.EmployeeBenefitsComponent },
            { path: 'notes', component: employeenotes_component_1.EmployeeNotesComponent }
        ]), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcmhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFDakUsdUNBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0Qsd0NBQW9DLDJCQUEyQixDQUFDLENBQUE7QUFDaEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFzQmpFO0lBR0ksMkJBQW9CLFlBQTBCLEVBQVMsYUFBNEI7UUFBL0QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvRSxJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNqQyxVQUFBLElBQUk7Z0JBQ0EsS0FBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1lBQ3pCLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDTCxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzFDLENBQUM7SUFFTCxDQUFDO0lBQ0Qsc0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBQyx3UkFPUjtZQUNELFVBQVUsRUFBRyxDQUFDLHNEQUF5QixFQUFDLGdEQUFzQixDQUFDO1NBQ2xFLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFFLDhDQUFxQixFQUFDO1lBQ2xELEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsK0NBQXFCLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxzREFBeUIsRUFBQztZQUN0RCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGtEQUF1QixFQUFDO1lBQ2pELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxTQUFTLEVBQUMsc0RBQXlCLEVBQUM7WUFDdEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxzREFBeUIsRUFBQztZQUN2RCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGdEQUFzQixFQUFDO1NBQ2xELENBQUM7O3lCQUFBO0lBMEJGLHdCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx5QkFBaUIsb0JBeUI3QixDQUFBIiwiZmlsZSI6InVzZXIvdXNlcmhvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0FwcGxpY2F0aW9uVXNlcn0gZnJvbSBcIi4vYXBwbGljYXRpb251c2VyXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyUHJvZmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi91c2VycHJvZmlsZXBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJEYXRhUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL3VzZXJkYXRhcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlck92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tIFwiLi91c2Vyb3ZlcnZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckVtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyZW1wbG95ZWUuY29vbXBvbmVudFwiO1xyXG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0VtcGxveWVlUHJvamVjdHNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlcHJvamVjdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVSZXN1bWVDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlcmVzdW1lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlVHJhaW5pbmdDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVldHJhaW5pbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVCZW5lZml0c0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWViZW5lZml0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZU5vdGVzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZW5vdGVzLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktdXNlcmhvbWUnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgPG15LXVzZXItcHJvZmlsZS1wYW5lbCBbYXBwVXNlcl09XCJhcHBVc2VyXCI+PC9teS11c2VyLXByb2ZpbGUtcGFuZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG15LXVzZXItZGF0YS1wYW5lbCBbYXBwVXNlcl09XCJhcHBVc2VyXCI+PC9teS11c2VyLWRhdGEtcGFuZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtVc2VyUHJvZmlsZVBhbmVsQ29tcG9uZW50LFVzZXJEYXRhUGFuZWxDb21wb25lbnRdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6J292ZXJ2aWV3Jyxjb21wb25lbnQ6IFVzZXJPdmVydmlld0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDonZW1wbG95ZWVzJyxjb21wb25lbnQ6VXNlckVtcGxveWVlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOidwcm9qZWN0cycsIGNvbXBvbmVudDpFbXBsb3llZVByb2plY3RzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOidyZXN1bWUnLGNvbXBvbmVudDpFbXBsb3llZVJlc3VtZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJ3RyYWluaW5nJyxjb21wb25lbnQ6RW1wbG95ZWVUcmFpbmluZ0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJ2JlbmVmaXRzJywgY29tcG9uZW50OkVtcGxveWVlQmVuZWZpdHNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6J25vdGVzJyxjb21wb25lbnQ6RW1wbG95ZWVOb3Rlc0NvbXBvbmVudH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIFVzZXJIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgYXBwVXNlciA6IEFwcGxpY2F0aW9uVXNlcjtcclxuICAgIHB1YmxpYyBkYXRhTG9hZGVkO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSxwcml2YXRlIF9lcnJvclNlcnZpY2UgOiBFcnJvclNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZGF0YUxvYWRlZD1mYWxzZTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykhPW51bGwpe1xyXG4gICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZShcclxuICAgICAgICAgICBkYXRhPT57XHJcbiAgICAgICAgICAgICAgIHRoaXMuYXBwVXNlcj1kYXRhO1xyXG4gICAgICAgICAgICAgICB0aGlzLmRhdGFMb2FkZWQ9dHJ1ZTtcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGVycm9yPT57XHJcbiAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5hcHBVc2VyID0gdGhpcy5fdXNlclNlcnZpY2UudXNlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0QXBwVXNlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
