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
var user_service_1 = require("../user/user.service");
var LogoutComponent = (function () {
    function LogoutComponent(_authService, _router, _userService) {
        this._authService = _authService;
        this._router = _router;
        this._userService = _userService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        if (this._authService.isLoggedIn()) {
            this._userService.user = null;
            this._authService.logout();
            this._router.navigateByUrl('/');
        }
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'my-logout',
            template: "\n        <h1>You are now logged out (add redirect logic here)</h1>\n    "
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, user_service_1.UserService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVDQUFvQywwQkFBMEIsQ0FBQyxDQUFBO0FBQy9ELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBT2pEO0lBRUkseUJBQW9CLFlBQWtDLEVBQVUsT0FBZSxFQUFVLFlBQXdCO1FBQTdGLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUFFLENBQUM7SUFDcEgsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBZkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFDLDJFQUVSO1NBQ0osQ0FBQzs7dUJBQUE7SUFXRixzQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksdUJBQWUsa0JBVTNCLENBQUEiLCJmaWxlIjoiYXV0aC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxoMT5Zb3UgYXJlIG5vdyBsb2dnZWQgb3V0IChhZGQgcmVkaXJlY3QgbG9naWMgaGVyZSk8L2gxPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKXt9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXI9bnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
