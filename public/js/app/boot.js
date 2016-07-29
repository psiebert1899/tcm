"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var error_service_1 = require("./errors/error.service");
var authentication_service_1 = require("./auth/authentication.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, error_service_1.ErrorService, authentication_service_1.AuthenticationService, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUU5RCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx1QkFBcUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MscUJBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBQ3RDLDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELHVDQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBRXBFLG9DQUFTLENBQUMsNEJBQVksRUFBQyxDQUFDLHlCQUFnQixFQUFDLDRCQUFZLEVBQUMsOENBQXFCLEVBQUMsY0FBTyxDQUFDLHlCQUFnQixFQUFDLEVBQUMsUUFBUSxFQUFDLDZCQUFvQixFQUFDLENBQUMsRUFBQyxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy5kLnRzXCIvPlxyXG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LFtST1VURVJfUFJPVklERVJTLEVycm9yU2VydmljZSxBdXRoZW50aWNhdGlvblNlcnZpY2UscHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LHt1c2VDbGFzczpIYXNoTG9jYXRpb25TdHJhdGVneX0pLEhUVFBfUFJPVklERVJTXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
