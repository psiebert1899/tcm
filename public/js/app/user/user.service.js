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
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '&token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/appUser/' + '?appId=' + localStorage.getItem('appUser') + token, '', { headers: headers }).map(function (response) {
            var data = response.json().obj;
            var appUser = new applicationuser_1.ApplicationUser(data.email, data.firstName, data.lastName, data.image, data.userId, null, null);
            _this.user = appUser;
            return appUser;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFFbEQscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBRUkscUJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUUsQ0FBQztJQUM1Qiw2QkFBTyxHQUFkO1FBQUEsaUJBV0M7UUFWRyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbkUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBQyxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekYsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFDLFNBQVMsR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsRUFBQyxPQUFPLEVBQUcsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQy9ILFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUcsS0FBSSxDQUFDLElBQUksR0FBRSxPQUFPLENBQUM7WUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFmTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBZ0JiLGtCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxtQkFBVyxjQWV2QixDQUFBIiwiZmlsZSI6InVzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbnVzZXJcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcbiAgICBwdWJsaWMgdXNlciA6IEFwcGxpY2F0aW9uVXNlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHAgOiBIdHRwKXt9XHJcbiAgICBwdWJsaWMgZ2V0VXNlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpPycmdG9rZW49Jytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcHBVc2VyLycrJz9hcHBJZD0nK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBVc2VyJykrdG9rZW4sJycse2hlYWRlcnMgOiBoZWFkZXJzfSkubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIHZhciBhcHBVc2VyID0gbmV3IEFwcGxpY2F0aW9uVXNlcihkYXRhLmVtYWlsLCBkYXRhLmZpcnN0TmFtZSwgZGF0YS5sYXN0TmFtZSxkYXRhLmltYWdlLGRhdGEudXNlcklkLG51bGwsbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXI9IGFwcFVzZXI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwVXNlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
