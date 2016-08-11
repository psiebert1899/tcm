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
var authentication_service_1 = require("./authentication.service");
var router_1 = require("@angular/router");
var LogoutComponent = (function () {
    function LogoutComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        if (this._authService.isLoggedIn()) {
            this._authService.logout();
            this._router.navigateByUrl('/');
        }
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'my-logout',
            template: "\n        <h1>You are now logged out (add redirect logic here)</h1>\n    "
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVDQUFvQywwQkFBMEIsQ0FBQyxDQUFBO0FBQy9ELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBT3ZDO0lBRUkseUJBQW9CLFlBQWtDLEVBQVUsT0FBZTtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUUsQ0FBQztJQUNsRixrQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQWRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBQywyRUFFUjtTQUNKLENBQUM7O3VCQUFBO0lBVUYsc0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHVCQUFlLGtCQVMzQixDQUFBIiwiZmlsZSI6ImF1dGgvbG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxoMT5Zb3UgYXJlIG5vdyBsb2dnZWQgb3V0IChhZGQgcmVkaXJlY3QgbG9naWMgaGVyZSk8L2gxPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe31cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKXtcclxuICAgICAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
