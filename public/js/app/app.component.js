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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var header_component_1 = require("./header.component");
var signin_component_1 = require("./auth/signin.component");
var signup_component_1 = require("./auth/signup.component");
var logout_component_1 = require("./auth/logout.component");
var error_component_1 = require("./errors/error.component");
var userhome_component_1 = require("./user/userhome.component");
var newemployee_component_1 = require("./employee/newemployee.component");
var employeelist_1 = require("./employee/employeelist");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <my-header></my-header>\n        <div class=\"container-fluid\" id=\"myContainer\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES, error_component_1.ErrorComponent],
            styles: ["\n        .router-link-active{\n            color:white;\n            cursor:default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n        .navbar-default .navbar-nav>li>a {\n            color:white;\n        }\n        #myContainer{\n            width:80%;\n            margin-left:10%;\n            background-color:white;\n            margin-top:0px;\n        }\n    "]
        }),
        router_1.Routes([
            { path: "/auth/signin", component: signin_component_1.SigninComponent },
            { path: "/auth/signup", component: signup_component_1.SignupComponent },
            { path: '/auth/logout', component: logout_component_1.LogoutComponent },
            { path: '/user/profile', component: userhome_component_1.UserHomeComponent },
            { path: '/employee/new', component: newemployee_component_1.NewEmployeeComponent },
            { path: '/employee/list', component: employeelist_1.EmployeeListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxtQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxzQ0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSw2QkFBb0MseUJBQXlCLENBQUMsQ0FBQTtBQXNDOUQ7SUFBQTtJQUVBLENBQUM7SUF0Q0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG1LQUtUO1lBQ0QsVUFBVSxFQUFDLENBQUMsa0NBQWUsRUFBQywwQkFBaUIsRUFBQyxnQ0FBYyxDQUFDO1lBQzdELE1BQU0sRUFBRSxDQUFDLDRjQWlCUixDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsa0NBQWUsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7WUFDL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsc0NBQWlCLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyw0Q0FBb0IsRUFBQztZQUNyRCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsb0NBQXFCLEVBQUM7U0FDNUQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvbG9nb3V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Vycm9yQ29tcG9uZW50fSBmcm9tIFwiLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckhvbWVDb21wb25lbnR9IGZyb20gXCIuL3VzZXIvdXNlcmhvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3RW1wbG95ZWVDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlL25ld2VtcGxveWVlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWUvZW1wbG95ZWVsaXN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgIFxyXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwibXlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0hlYWRlckNvbXBvbmVudCxST1VURVJfRElSRUNUSVZFUyxFcnJvckNvbXBvbmVudF0sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjpkZWZhdWx0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmEge1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI215Q29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDpcIi9hdXRoL3NpZ25pblwiLGNvbXBvbmVudDpTaWduaW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6XCIvYXV0aC9zaWdudXBcIixjb21wb25lbnQ6U2lnbnVwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvYXV0aC9sb2dvdXQnLGNvbXBvbmVudDpMb2dvdXRDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy91c2VyL3Byb2ZpbGUnLGNvbXBvbmVudDpVc2VySG9tZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDonL2VtcGxveWVlL25ldycsY29tcG9uZW50Ok5ld0VtcGxveWVlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvZW1wbG95ZWUvbGlzdCcsIGNvbXBvbmVudDogRW1wbG95ZWVMaXN0Q29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
