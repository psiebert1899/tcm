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
const http_1 = require("@angular/http");
const applicationuser_1 = require("./applicationuser");
const authentication_service_1 = require("../auth/authentication.service");
const core_1 = require("@angular/core");
let UserService = class UserService {
    constructor(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
        this.broadcastUser = new core_1.EventEmitter();
    }
    getUser() {
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token') ? '&token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/appUser/' + '?appId=' + localStorage.getItem('appUser') + token, '', { headers: headers }).map(response => {
            const data = response.json().obj;
            var appUser = new applicationuser_1.ApplicationUser(data.email, data.firstName, data.lastName, data.image, data.userId, null, null);
            this.broadcastUser.emit(appUser);
            this.user = appUser;
            return appUser;
        });
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, authentication_service_1.AuthenticationService])
], UserService);
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMsa0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQseUNBQW9DLGdDQUFnQyxDQUFDLENBQUE7QUFDckUsdUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBR3ZEO0lBR0ksWUFBb0IsS0FBWSxFQUFVLFlBQWtDO1FBQXhELFVBQUssR0FBTCxLQUFLLENBQU87UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFEckUsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQW1CLENBQUM7SUFDbUIsQ0FBQztJQUN4RSxPQUFPO1FBQ1YsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUcsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsU0FBUyxHQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBQyxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUMvSCxRQUFRO1lBQ0osTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztZQUM5RyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFFLE9BQU8sQ0FBQztZQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFsQkQ7SUFBQyxpQkFBVSxFQUFFOztlQUFBO0FBQ0EsbUJBQVcsY0FpQnZCLENBQUEiLCJmaWxlIjoidXNlci91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtBcHBsaWNhdGlvblVzZXJ9IGZyb20gXCIuL2FwcGxpY2F0aW9udXNlclwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG4gICAgcHVibGljIHVzZXIgOiBBcHBsaWNhdGlvblVzZXI7XHJcbiAgICBwdWJsaWMgYnJvYWRjYXN0VXNlciA9IG5ldyBFdmVudEVtaXR0ZXI8QXBwbGljYXRpb25Vc2VyPigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHAsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhlbnRpY2F0aW9uU2VydmljZSl7fVxyXG4gICAgcHVibGljIGdldFVzZXIoKXtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKT8nJnRva2VuPScrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBwVXNlci8nKyc/YXBwSWQ9Jytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwVXNlcicpK3Rva2VuLCcnLHtoZWFkZXJzIDogaGVhZGVyc30pLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXBwVXNlciA9IG5ldyBBcHBsaWNhdGlvblVzZXIoZGF0YS5lbWFpbCwgZGF0YS5maXJzdE5hbWUsIGRhdGEubGFzdE5hbWUsZGF0YS5pbWFnZSxkYXRhLnVzZXJJZCxudWxsLG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RVc2VyLmVtaXQoYXBwVXNlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXI9IGFwcFVzZXI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwVXNlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
