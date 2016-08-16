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
var projectlist_component_1 = require("./project/projectlist.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n        <my-header></my-header>\n        <div class=\"container-fluid\" id=\"myContainer\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES, error_component_1.ErrorComponent],
            styles: ["\n        .router-link-active{\n            color:white;\n            cursor:default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n        .navbar-default .navbar-nav>li>a {\n            color:white;\n        }\n        #myContainer{\n            width:80%;\n            margin-left:10%;\n            margin-top:0px;\n        }\n    "]
        }),
        router_1.Routes([
            { path: "/auth/signin", component: signin_component_1.SigninComponent },
            { path: "/", component: signup_component_1.SignupComponent },
            { path: "/auth/logout", component: logout_component_1.LogoutComponent },
            { path: "/user/profile", component: userhome_component_1.UserHomeComponent },
            { path: "/employee/new", component: newemployee_component_1.NewEmployeeComponent },
            { path: "/employee/list", component: employeelist_1.EmployeeListComponent },
            { path: "/employee/edit", component: editemployee_component_1.EditEmployeeComponent },
            { path: "/project/new", component: newproject_component_1.NewProjectComponent },
            { path: "project/list", component: projectlist_component_1.ProjectListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxtQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxzQ0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSw2QkFBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCx1Q0FBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN4RSxxQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNuRSxzQ0FBbUMsaUNBQWlDLENBQUMsQ0FBQTtBQXdDckU7SUFBQTtJQUNBLENBQUM7SUF2Q0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGtLQUtUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSwwQkFBaUIsRUFBRSxnQ0FBYyxDQUFDO1lBQ2hFLE1BQU0sRUFBRSxDQUFDLHVhQWdCUixDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUNsRCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQ2xELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsb0NBQXFCLEVBQUM7WUFDMUQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO1lBQzFELEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7WUFDdEQsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBQztTQUMxRCxDQUFDOztvQkFBQTtJQUVGLG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxvQkFBWSxlQUN4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWdudXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2xvZ291dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFcnJvckNvbXBvbmVudH0gZnJvbSBcIi4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1VzZXJIb21lQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3VzZXJob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05ld0VtcGxveWVlQ29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZS9uZXdlbXBsb3llZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlL2VtcGxveWVlbGlzdFwiO1xyXG5pbXBvcnQge0VkaXRFbXBsb3llZUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWUvZWRpdGVtcGxveWVlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05ld1Byb2plY3RDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvbmV3cHJvamVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9qZWN0TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdC9wcm9qZWN0bGlzdC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwibXlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTLCBFcnJvckNvbXBvbmVudF0sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjpkZWZhdWx0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmEge1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI215Q29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogXCIvYXV0aC9zaWduaW5cIiwgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwiL1wiLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCIvYXV0aC9sb2dvdXRcIiwgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwiL3VzZXIvcHJvZmlsZVwiLCBjb21wb25lbnQ6IFVzZXJIb21lQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiBcIi9lbXBsb3llZS9uZXdcIiwgY29tcG9uZW50OiBOZXdFbXBsb3llZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCIvZW1wbG95ZWUvbGlzdFwiLCBjb21wb25lbnQ6IEVtcGxveWVlTGlzdENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCIvZW1wbG95ZWUvZWRpdFwiLCBjb21wb25lbnQ6IEVkaXRFbXBsb3llZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCIvcHJvamVjdC9uZXdcIiwgY29tcG9uZW50OiBOZXdQcm9qZWN0Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOiBcInByb2plY3QvbGlzdFwiLCBjb21wb25lbnQ6IFByb2plY3RMaXN0Q29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
