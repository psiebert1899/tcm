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
var authentication_service_1 = require("./auth/authentication.service");
var user_service_1 = require("./user/user.service");
var HeaderComponent = (function () {
    function HeaderComponent(_authService, _userService) {
        this._authService = _authService;
        this._userService = _userService;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (data) {
            _this.loggedUser = data;
        }, function (error) { console.log(error); });
    };
    HeaderComponent.prototype.getUserName = function () {
        console.log(this._userService.user);
        this._userService.user;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n                <nav class=\"navbar navbar-default\">\n                  <div class=\"container-fluid\">\n                    <!-- Brand and toggle get grouped for better mobile display -->\n                    <div class=\"navbar-header\">\n                      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                      </button>\n                      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n                    </div>\n                \n                    <!-- Collect the nav links, forms, and other content for toggling -->\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                      <ul class=\"nav navbar-nav\" *ngIf=\"isLoggedIn()\">\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Employees<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                            <li><a [routerLink]=\"['/employee/new']\">New Employee</a></li>\n                            <li><a [routerLink]=\"['/employee/list']\">Employee List</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">One more separated link</a></li>\n                          </ul>\n                        </li>\n                         <li class=\"dropdown\" *ngIf=\"isLoggedIn()\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Projects<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">One more separated link</a></li>\n                          </ul>\n                        </li>\n                         <li class=\"dropdown\" *ngIf=\"isLoggedIn()\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Resources<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\">One more separated link</a></li>\n                          </ul>\n                        </li>\n                      </ul>\n                      <ul class=\"nav navbar-nav navbar-right\">\n                      <li *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['/user/profile']\">{{loggedUser!=undefined?loggedUser.firstName+\" \" + loggedUser.lastName : 'Default User'}}</a></li>\n                        <li><a [routerLink]=\"['/auth/signin']\" *ngIf=\"!isLoggedIn()\">Sign In</a></li>\n                        <li><a [routerLink]=\"['/auth/signup']\" *ngIf=\"!isLoggedIn()\">Sign Up</a></li>\n                        <li><a [routerLink]=\"['auth/logout']\" *ngIf=\"isLoggedIn()\">Sign Out</a></li>\n                      </ul>\n                    </div><!-- /.navbar-collapse -->\n                  </div><!-- /.container-fluid -->\n                </nav>\n    ",
            styles: ["\n                header{\n                    margin-bottom:20px;\n                }\n                ul{\n                    text-align:center;\n                }\n                li{\n                    float:none;\n                    display:inline-block;\n                }\n                .router-link-active{\n                    background-color: #337ab7;\n                    color: white;\n                }\n            "],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCx1Q0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSw2QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQXVGaEQ7SUFFSSx5QkFBb0IsWUFBa0MsRUFBUyxZQUEwQjtRQUFyRSxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFFLENBQUM7SUFFNUYsb0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDakMsVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUFDLFVBQUEsS0FBSyxJQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQ2hDLENBQUE7SUFDSixDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBdEdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBQyxpL0lBK0RSO1lBQ0QsTUFBTSxFQUFDLENBQUMscWJBZUMsQ0FBQztZQUNWLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2xDLENBQUM7O3VCQUFBO0lBcUJGLHNCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSx1QkFBZSxrQkFtQjNCLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi91c2VyL2FwcGxpY2F0aW9udXNlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQnJhbmQgYW5kIHRvZ2dsZSBnZXQgZ3JvdXBlZCBmb3IgYmV0dGVyIG1vYmlsZSBkaXNwbGF5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5CcmFuZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29sbGVjdCB0aGUgbmF2IGxpbmtzLCBmb3JtcywgYW5kIG90aGVyIGNvbnRlbnQgZm9yIHRvZ2dsaW5nIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkVtcGxveWVlczxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9lbXBsb3llZS9uZXcnXVwiPk5ldyBFbXBsb3llZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2VtcGxveWVlL2xpc3QnXVwiPkVtcGxveWVlIExpc3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5Qcm9qZWN0czxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PbmUgbW9yZSBzZXBhcmF0ZWQgbGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5SZXNvdXJjZXM8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BY3Rpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9wcm9maWxlJ11cIj57e2xvZ2dlZFVzZXIhPXVuZGVmaW5lZD9sb2dnZWRVc2VyLmZpcnN0TmFtZStcIiBcIiArIGxvZ2dlZFVzZXIubGFzdE5hbWUgOiAnRGVmYXVsdCBVc2VyJ319PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9hdXRoL3NpZ25pbiddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+U2lnbiBJbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aC9zaWdudXAnXVwiICpuZ0lmPVwiIWlzTG9nZ2VkSW4oKVwiPlNpZ24gVXA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnYXV0aC9sb2dvdXQnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+U2lnbiBPdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm5hdmJhci1jb2xsYXBzZSAtLT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBdLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHB1YmxpYyBsb2dnZWRVc2VyIDogQXBwbGljYXRpb25Vc2VyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aGVudGljYXRpb25TZXJ2aWNlLHByaXZhdGUgX3VzZXJTZXJ2aWNlIDogVXNlclNlcnZpY2Upe31cclxuXHJcbiAgICBpc0xvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZShcclxuICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRVc2VyPWRhdGE7XHJcbiAgICAgICAgICAgfSxlcnJvcj0+e2NvbnNvbGUubG9nKGVycm9yKX1cclxuICAgICAgIClcclxuICAgIH1cclxuICAgIGdldFVzZXJOYW1lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fdXNlclNlcnZpY2UudXNlcik7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UudXNlcjtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
