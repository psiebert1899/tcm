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
        if (this._userService.user == undefined || this._userService.user == null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcmhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFDakUsdUNBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0Qsd0NBQW9DLDJCQUEyQixDQUFDLENBQUE7QUFDaEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsMkNBQXdDLDhCQUE4QixDQUFDLENBQUE7QUFDdkUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFzQmpFO0lBR0ksMkJBQW9CLFlBQTBCLEVBQVMsYUFBNEI7UUFBL0QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvRSxJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSTtnQkFDQSxLQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNMLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQztJQUVMLENBQUM7SUFDRCxzQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUE1Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFDLHdSQU9SO1lBQ0QsVUFBVSxFQUFHLENBQUMsc0RBQXlCLEVBQUMsZ0RBQXNCLENBQUM7U0FDbEUsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUUsOENBQXFCLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQywrQ0FBcUIsRUFBQztZQUNsRCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLHNEQUF5QixFQUFDO1lBQ3RELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsa0RBQXVCLEVBQUM7WUFDakQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLFNBQVMsRUFBQyxzREFBeUIsRUFBQztZQUN0RCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLHNEQUF5QixFQUFDO1lBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsZ0RBQXNCLEVBQUM7U0FDbEQsQ0FBQzs7eUJBQUE7SUEwQkYsd0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHlCQUFpQixvQkF5QjdCLENBQUEiLCJmaWxlIjoidXNlci91c2VyaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbnVzZXJcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJQcm9maWxlUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL3VzZXJwcm9maWxlcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckRhdGFQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vdXNlcmRhdGFwYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyT3ZlcnZpZXdDb21wb25lbnR9IGZyb20gXCIuL3VzZXJvdmVydmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VyRW1wbG95ZWVDb21wb25lbnR9IGZyb20gXCIuL3VzZXJlbXBsb3llZS5jb29tcG9uZW50XCI7XHJcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVQcm9qZWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVwcm9qZWN0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZVJlc3VtZUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWVyZXN1bWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVUcmFpbmluZ0NvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWV0cmFpbmluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZUJlbmVmaXRzQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZWJlbmVmaXRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlTm90ZXNDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlbm90ZXMuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS11c2VyaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICA8bXktdXNlci1wcm9maWxlLXBhbmVsIFthcHBVc2VyXT1cImFwcFVzZXJcIj48L215LXVzZXItcHJvZmlsZS1wYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bXktdXNlci1kYXRhLXBhbmVsIFthcHBVc2VyXT1cImFwcFVzZXJcIj48L215LXVzZXItZGF0YS1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzIDogW1VzZXJQcm9maWxlUGFuZWxDb21wb25lbnQsVXNlckRhdGFQYW5lbENvbXBvbmVudF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDonb3ZlcnZpZXcnLGNvbXBvbmVudDogVXNlck92ZXJ2aWV3Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOidlbXBsb3llZXMnLGNvbXBvbmVudDpVc2VyRW1wbG95ZWVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6J3Byb2plY3RzJywgY29tcG9uZW50OkVtcGxveWVlUHJvamVjdHNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6J3Jlc3VtZScsY29tcG9uZW50OkVtcGxveWVlUmVzdW1lQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAndHJhaW5pbmcnLGNvbXBvbmVudDpFbXBsb3llZVRyYWluaW5nQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnYmVuZWZpdHMnLCBjb21wb25lbnQ6RW1wbG95ZWVCZW5lZml0c0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDonbm90ZXMnLGNvbXBvbmVudDpFbXBsb3llZU5vdGVzQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgVXNlckhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBhcHBVc2VyIDogQXBwbGljYXRpb25Vc2VyO1xyXG4gICAgcHVibGljIGRhdGFMb2FkZWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZSA6IFVzZXJTZXJ2aWNlLHByaXZhdGUgX2Vycm9yU2VydmljZSA6IEVycm9yU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5kYXRhTG9hZGVkPWZhbHNlO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBpZih0aGlzLl91c2VyU2VydmljZS51c2VyPT11bmRlZmluZWQgfHwgdGhpcy5fdXNlclNlcnZpY2UudXNlcj09bnVsbCl7XHJcbiAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VyKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgIGRhdGE9PntcclxuICAgICAgICAgICAgICAgdGhpcy5hcHBVc2VyPWRhdGE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZD10cnVlO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgZXJyb3I9PntcclxuICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFwcFVzZXIgPSB0aGlzLl91c2VyU2VydmljZS51c2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBnZXRBcHBVc2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXI7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
