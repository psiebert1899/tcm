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
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '&token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/appUser/' + '?appId=' + localStorage.getItem('appUser') + token, '', { headers: headers }).map(function (response) {
            var data = response.json().obj;
            console.log(data);
            var appUser = new applicationuser_1.ApplicationUser(data.email, data.firstName, data.lastName, data.image, data.userId, null, null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQsdUNBQW9DLGdDQUFnQyxDQUFDLENBQUE7QUFDckUscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBRUkscUJBQW9CLEtBQVksRUFBVSxZQUFrQztRQUF4RCxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXNCO0lBQUUsQ0FBQztJQUN4RSw2QkFBTyxHQUFkO1FBQUEsaUJBWUM7UUFYRyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbkUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBQyxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekYsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFDLFNBQVMsR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsRUFBQyxPQUFPLEVBQUcsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQy9ILFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztZQUM5RyxLQUFJLENBQUMsSUFBSSxHQUFFLE9BQU8sQ0FBQztZQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQWhCTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBaUJiLGtCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxtQkFBVyxjQWdCdkIsQ0FBQSIsImZpbGUiOiJ1c2VyL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0FwcGxpY2F0aW9uVXNlcn0gZnJvbSBcIi4vYXBwbGljYXRpb251c2VyXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vYXV0aC9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG4gICAgcHVibGljIHVzZXIgOiBBcHBsaWNhdGlvblVzZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwIDogSHR0cCwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aGVudGljYXRpb25TZXJ2aWNlKXt9XHJcbiAgICBwdWJsaWMgZ2V0VXNlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpPycmdG9rZW49Jytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcHBVc2VyLycrJz9hcHBJZD0nK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBVc2VyJykrdG9rZW4sJycse2hlYWRlcnMgOiBoZWFkZXJzfSkubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFwcFVzZXIgPSBuZXcgQXBwbGljYXRpb25Vc2VyKGRhdGEuZW1haWwsIGRhdGEuZmlyc3ROYW1lLCBkYXRhLmxhc3ROYW1lLGRhdGEuaW1hZ2UsZGF0YS51c2VySWQsbnVsbCxudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcj0gYXBwVXNlcjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcHBVc2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
