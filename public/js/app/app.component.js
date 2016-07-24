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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <my-header></my-header>\n        <router-outlet></router-outlet>\n    ",
            directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES, error_component_1.ErrorComponent],
            styles: ["\n        .router-link-active{\n            color:white;\n            cursor:default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n        .navbar-default .navbar-nav>li>a {\n            color:white;\n        }\n    "]
        }),
        router_1.Routes([
            { path: "/auth/signin", component: signin_component_1.SigninComponent },
            { path: "/auth/signup", component: signup_component_1.SignupComponent },
            { path: '/auth/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQTJCeEQ7SUFBQTtJQUVBLENBQUM7SUEzQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG1GQUdUO1lBQ0QsVUFBVSxFQUFDLENBQUMsa0NBQWUsRUFBQywwQkFBaUIsRUFBQyxnQ0FBYyxDQUFDO1lBQzdELE1BQU0sRUFBRSxDQUFDLGtUQVdSLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsa0NBQWUsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7U0FDbEQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvbG9nb3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcnJvckNvbXBvbmVudH0gZnJvbSBcIi4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W0hlYWRlckNvbXBvbmVudCxST1VURVJfRElSRUNUSVZFUyxFcnJvckNvbXBvbmVudF0sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZle1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6ZGVmYXVsdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmEge1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbkBSb3V0ZXMoW1xuICAgIHtwYXRoOlwiL2F1dGgvc2lnbmluXCIsY29tcG9uZW50OlNpZ25pbkNvbXBvbmVudH0sXG4gICAge3BhdGg6XCIvYXV0aC9zaWdudXBcIixjb21wb25lbnQ6U2lnbnVwQ29tcG9uZW50fSxcbiAgICB7cGF0aDonL2F1dGgvbG9nb3V0Jyxjb21wb25lbnQ6TG9nb3V0Q29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
