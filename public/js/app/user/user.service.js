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
var http_1 = require("@angular/http");
var applicationuser_1 = require("./applicationuser");
var authentication_service_1 = require("../auth/authentication.service");
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
        this.broadcastUser = new core_1.EventEmitter();
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '&token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/appUser/' + '?appId=' + localStorage.getItem('appUser') + token, '', { headers: headers }).map(function (response) {
            var data = response.json().obj;
            console.log(data);
            var appUser = new applicationuser_1.ApplicationUser(data.email, data.firstName, data.lastName, data.image, data.userId, null, null);
            _this.broadcastUser.emit(appUser);
            _this.user = appUser;
            return appUser;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, authentication_service_1.AuthenticationService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQsdUNBQW9DLGdDQUFnQyxDQUFDLENBQUE7QUFDckUscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBR3ZEO0lBR0kscUJBQW9CLEtBQVksRUFBVSxZQUFrQztRQUF4RCxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBRHJFLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFtQixDQUFDO0lBQ21CLENBQUM7SUFDeEUsNkJBQU8sR0FBZDtRQUFBLGlCQWFDO1FBWkcsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUcsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsU0FBUyxHQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBQyxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUMvSCxVQUFBLFFBQVE7WUFDSixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksR0FBRSxPQUFPLENBQUM7WUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFsQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQW1CYixrQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksbUJBQVcsY0FrQnZCLENBQUEiLCJmaWxlIjoidXNlci91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtBcHBsaWNhdGlvblVzZXJ9IGZyb20gXCIuL2FwcGxpY2F0aW9udXNlclwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG4gICAgcHVibGljIHVzZXIgOiBBcHBsaWNhdGlvblVzZXI7XHJcbiAgICBwdWJsaWMgYnJvYWRjYXN0VXNlciA9IG5ldyBFdmVudEVtaXR0ZXI8QXBwbGljYXRpb25Vc2VyPigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHAsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhlbnRpY2F0aW9uU2VydmljZSl7fVxyXG4gICAgcHVibGljIGdldFVzZXIoKXtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKT8nJnRva2VuPScrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBwVXNlci8nKyc/YXBwSWQ9Jytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwVXNlcicpK3Rva2VuLCcnLHtoZWFkZXJzIDogaGVhZGVyc30pLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHZhciBhcHBVc2VyID0gbmV3IEFwcGxpY2F0aW9uVXNlcihkYXRhLmVtYWlsLCBkYXRhLmZpcnN0TmFtZSwgZGF0YS5sYXN0TmFtZSxkYXRhLmltYWdlLGRhdGEudXNlcklkLG51bGwsbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFVzZXIuZW1pdChhcHBVc2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcj0gYXBwVXNlcjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcHBVc2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
