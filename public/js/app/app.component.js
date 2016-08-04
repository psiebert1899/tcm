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
var editemployee_component_1 = require("./employee/editemployee.component");
var newproject_component_1 = require("./project/newproject.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <my-header></my-header>\n        <div class=\"container-fluid\" id=\"myContainer\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES, error_component_1.ErrorComponent],
            styles: ["\n        .router-link-active{\n            color:white;\n            cursor:default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n        .navbar-default .navbar-nav>li>a {\n            color:white;\n        }\n        #myContainer{\n            width:80%;\n            margin-left:10%;\n\n            margin-top:0px;\n        }\n    "]
        }),
        router_1.Routes([
            { path: "/auth/signin", component: signin_component_1.SigninComponent },
            { path: "/auth/signup", component: signup_component_1.SignupComponent },
            { path: '/auth/logout', component: logout_component_1.LogoutComponent },
            { path: '/user/profile', component: userhome_component_1.UserHomeComponent },
            { path: '/employee/new', component: newemployee_component_1.NewEmployeeComponent },
            { path: '/employee/list', component: employeelist_1.EmployeeListComponent },
            { path: '/employee/edit', component: editemployee_component_1.EditEmployeeComponent },
            { path: '/project/new', component: newproject_component_1.NewProjectComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxtQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxzQ0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSw2QkFBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCx1Q0FBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN4RSxxQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQXdDbkU7SUFBQTtJQUVBLENBQUM7SUF4Q0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG1LQUtUO1lBQ0QsVUFBVSxFQUFDLENBQUMsa0NBQWUsRUFBQywwQkFBaUIsRUFBQyxnQ0FBYyxDQUFDO1lBQzdELE1BQU0sRUFBRSxDQUFDLHlhQWlCUixDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsa0NBQWUsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7WUFDL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsc0NBQWlCLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyw0Q0FBb0IsRUFBQztZQUNyRCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsb0NBQXFCLEVBQUM7WUFDekQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO1lBQzFELEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxTQUFTLEVBQUMsMENBQW1CLEVBQUM7U0FDdkQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvbG9nb3V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Vycm9yQ29tcG9uZW50fSBmcm9tIFwiLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlckhvbWVDb21wb25lbnR9IGZyb20gXCIuL3VzZXIvdXNlcmhvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3RW1wbG95ZWVDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlL25ld2VtcGxveWVlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWUvZW1wbG95ZWVsaXN0XCI7XHJcbmltcG9ydCB7RWRpdEVtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZS9lZGl0ZW1wbG95ZWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3UHJvamVjdENvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdC9uZXdwcm9qZWN0LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYCBcclxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIiBpZD1cIm15Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltIZWFkZXJDb21wb25lbnQsUk9VVEVSX0RJUkVDVElWRVMsRXJyb3JDb21wb25lbnRdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmV7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBjdXJzb3I6ZGVmYXVsdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hIHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNteUNvbnRhaW5lcntcclxuICAgICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5AUm91dGVzKFtcclxuICAgIHtwYXRoOlwiL2F1dGgvc2lnbmluXCIsY29tcG9uZW50OlNpZ25pbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDpcIi9hdXRoL3NpZ251cFwiLGNvbXBvbmVudDpTaWdudXBDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy9hdXRoL2xvZ291dCcsY29tcG9uZW50OkxvZ291dENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDonL3VzZXIvcHJvZmlsZScsY29tcG9uZW50OlVzZXJIb21lQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvZW1wbG95ZWUvbmV3Jyxjb21wb25lbnQ6TmV3RW1wbG95ZWVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy9lbXBsb3llZS9saXN0JywgY29tcG9uZW50OiBFbXBsb3llZUxpc3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvZW1wbG95ZWUvZWRpdCcsIGNvbXBvbmVudDogRWRpdEVtcGxveWVlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3Byb2plY3QvbmV3Jyxjb21wb25lbnQ6TmV3UHJvamVjdENvbXBvbmVudH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
