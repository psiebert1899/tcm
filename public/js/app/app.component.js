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
var projectlist_component_1 = require("./project/projectlist.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <my-header></my-header>\n        <div class=\"container-fluid\" id=\"myContainer\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES, error_component_1.ErrorComponent],
            styles: ["\n        .router-link-active{\n            color:white;\n            cursor:default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n        .navbar-default .navbar-nav>li>a {\n            color:white;\n        }\n        #myContainer{\n            width:80%;\n            margin-left:10%;\n            margin-top:0px;\n        }\n    "]
        }),
        router_1.Routes([
            { path: "/auth/signin", component: signin_component_1.SigninComponent },
            { path: "/auth/signup", component: signup_component_1.SignupComponent },
            { path: '/auth/logout', component: logout_component_1.LogoutComponent },
            { path: '/user/profile', component: userhome_component_1.UserHomeComponent },
            { path: '/employee/new', component: newemployee_component_1.NewEmployeeComponent },
            { path: '/employee/list', component: employeelist_1.EmployeeListComponent },
            { path: '/employee/edit', component: editemployee_component_1.EditEmployeeComponent },
            { path: '/project/new', component: newproject_component_1.NewProjectComponent },
            { path: 'project/list', component: projectlist_component_1.ProjectListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxtQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxzQ0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSw2QkFBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCx1Q0FBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN4RSxxQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNuRSxzQ0FBbUMsaUNBQWlDLENBQUMsQ0FBQTtBQXdDckU7SUFBQTtJQUVBLENBQUM7SUF4Q0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG1LQUtUO1lBQ0QsVUFBVSxFQUFDLENBQUMsa0NBQWUsRUFBQywwQkFBaUIsRUFBQyxnQ0FBYyxDQUFDO1lBQzdELE1BQU0sRUFBRSxDQUFDLHVhQWdCUixDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsa0NBQWUsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7WUFDL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsc0NBQWlCLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyw0Q0FBb0IsRUFBQztZQUNyRCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsb0NBQXFCLEVBQUM7WUFDekQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO1lBQzFELEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxTQUFTLEVBQUMsMENBQW1CLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBQyw0Q0FBb0IsRUFBQztTQUN6RCxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ291dENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9sb2dvdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXJyb3JDb21wb25lbnR9IGZyb20gXCIuL2Vycm9ycy9lcnJvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2VySG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci91c2VyaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdFbXBsb3llZUNvbXBvbmVudH0gZnJvbSBcIi4vZW1wbG95ZWUvbmV3ZW1wbG95ZWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RW1wbG95ZWVMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9lbXBsb3llZS9lbXBsb3llZWxpc3RcIjtcclxuaW1wb3J0IHtFZGl0RW1wbG95ZWVDb21wb25lbnR9IGZyb20gXCIuL2VtcGxveWVlL2VkaXRlbXBsb3llZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdQcm9qZWN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0L25ld3Byb2plY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvamVjdExpc3RDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvcHJvamVjdGxpc3QuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgIFxyXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwibXlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0hlYWRlckNvbXBvbmVudCxST1VURVJfRElSRUNUSVZFUyxFcnJvckNvbXBvbmVudF0sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjpkZWZhdWx0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmEge1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI215Q29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDpcIi9hdXRoL3NpZ25pblwiLGNvbXBvbmVudDpTaWduaW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6XCIvYXV0aC9zaWdudXBcIixjb21wb25lbnQ6U2lnbnVwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvYXV0aC9sb2dvdXQnLGNvbXBvbmVudDpMb2dvdXRDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy91c2VyL3Byb2ZpbGUnLGNvbXBvbmVudDpVc2VySG9tZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDonL2VtcGxveWVlL25ldycsY29tcG9uZW50Ok5ld0VtcGxveWVlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvZW1wbG95ZWUvbGlzdCcsIGNvbXBvbmVudDogRW1wbG95ZWVMaXN0Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2VtcGxveWVlL2VkaXQnLCBjb21wb25lbnQ6IEVkaXRFbXBsb3llZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9wcm9qZWN0L25ldycsY29tcG9uZW50Ok5ld1Byb2plY3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdwcm9qZWN0L2xpc3QnLCBjb21wb25lbnQ6UHJvamVjdExpc3RDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
