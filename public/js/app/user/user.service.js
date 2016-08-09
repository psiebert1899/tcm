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
        this.broadcastUser = new core_1.EventEmitter();
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '&token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/appUser/' + '?appId=' + localStorage.getItem('appUser') + token, '', { headers: headers }).map(function (response) {
            var data = response.json().obj;
            var appUser = new applicationuser_1.ApplicationUser(data.email, data.firstName, data.lastName, data.image, data.userId, null, null);
            _this.user = appUser;
            _this.broadcastUser.emit(appUser);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFFbEQscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBR3ZEO0lBR0kscUJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRGhDLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFtQixDQUFDO0lBQ2xCLENBQUM7SUFDNUIsNkJBQU8sR0FBZDtRQUFBLGlCQVlDO1FBWEcsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUcsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsU0FBUyxHQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBQyxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUMvSCxVQUFBLFFBQVE7WUFDSixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlHLEtBQUksQ0FBQyxJQUFJLEdBQUUsT0FBTyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBakJMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFrQmIsa0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG1CQUFXLGNBaUJ2QixDQUFBIiwiZmlsZSI6InVzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Vc2VyfSBmcm9tIFwiLi9hcHBsaWNhdGlvbnVzZXJcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcclxuICAgIHB1YmxpYyB1c2VyIDogQXBwbGljYXRpb25Vc2VyO1xyXG4gICAgYnJvYWRjYXN0VXNlciA9IG5ldyBFdmVudEVtaXR0ZXI8QXBwbGljYXRpb25Vc2VyPigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHApe31cclxuICAgIHB1YmxpYyBnZXRVc2VyKCl7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk/JyZ0b2tlbj0nK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwcFVzZXIvJysnP2FwcElkPScrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcFVzZXInKSt0b2tlbiwnJyx7aGVhZGVycyA6IGhlYWRlcnN9KS5tYXAoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFwcFVzZXIgPSBuZXcgQXBwbGljYXRpb25Vc2VyKGRhdGEuZW1haWwsIGRhdGEuZmlyc3ROYW1lLCBkYXRhLmxhc3ROYW1lLGRhdGEuaW1hZ2UsZGF0YS51c2VySWQsbnVsbCxudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcj0gYXBwVXNlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0VXNlci5lbWl0KGFwcFVzZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcFVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
