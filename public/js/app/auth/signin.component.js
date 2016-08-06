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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var user_1 = require("./user");
var error_service_1 = require("../errors/error.service");
var authentication_service_1 = require("./authentication.service");
var SigninComponent = (function () {
    function SigninComponent(_fb, _authService, _router, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
        this._errorService = _errorService;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authService.signin(user).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data.obj);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('appUser', data.applicationUser._id);
            _this._router.navigateByUrl('/user/profile');
        }, function (error) {
            _this._errorService.handleError(error);
            console.log(error);
        });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SigninComponent.prototype.isEmail = function (control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'my-signin',
            template: "\n<h1>Please Sign In To Continue</h1>\n        <section class=\"col-md-6 col-md-offset-3\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email Address</label>\n                    <input type=\"email\" id=\"email\" class=\"form-control\" [ngFormControl]=\"myForm.find('email')\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\" [ngFormControl]=\"myForm.find('password')\"/>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-lg center-block\" [disabled]=\"!myForm.valid\">Sign In</button>\n            </form>            \n        </section>\n    ",
            styles: ["\n        .col-md-6{\n            background-color:white;\n            border-radius:10px;\n            padding-top:25px;\n            padding-bottom:25px;\n            \n        }\n        h1{\n            text-align: center;\n            font-family:Open-Sans;\n            color:white;\n            margin-bottom:25px;\n            margin-top:10%;\n        }\n        button{\n            margin-left:auto\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router, error_service_1.ErrorService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUE2RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCx1Q0FBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQXVDL0Q7SUFHSSx5QkFBb0IsR0FBZSxFQUFVLFlBQWtDLEVBQVMsT0FBZSxFQUFTLGFBQTBCO1FBQXRILFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWE7SUFBRSxDQUFDO0lBRTdJLGtDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQU0sSUFBSSxHQUFRLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3BDLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDMUIsbUJBQVUsQ0FBQyxRQUFRO29CQUNuQixJQUFJLENBQUMsT0FBTztpQkFDZixDQUFDLENBQUM7WUFDSCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNPLGlDQUFPLEdBQWYsVUFBZ0IsT0FBaUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw2UEFBNlAsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNwUixNQUFNLENBQUMsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLENBQUE7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUF6RUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHUyQkFlVDtZQUNELE1BQU0sRUFBQyxDQUFDLDJhQWtCUCxDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUFxQ0Ysc0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLHVCQUFlLGtCQW9DM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXNpZ25pbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48aDE+UGxlYXNlIFNpZ24gSW4gVG8gQ29udGludWU8L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGNlbnRlci1ibG9ja1wiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5jb2wtbWQtNntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToyNXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6T3Blbi1TYW5zO1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDphdXRvXHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG15Rm9ybTpDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhlbnRpY2F0aW9uU2VydmljZSxwcml2YXRlIF9yb3V0ZXIgOlJvdXRlcixwcml2YXRlIF9lcnJvclNlcnZpY2U6RXJyb3JTZXJ2aWNlKXt9XHJcblxyXG4gICAgb25TdWJtaXQoKXtcclxuICAgICAgICBjb25zdCB1c2VyOlVzZXIgPSBuZXcgVXNlcih0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCx0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsZGF0YS5vYmopO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsZGF0YS51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcFVzZXInLGRhdGEuYXBwbGljYXRpb25Vc2VyLl9pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3VzZXIvcHJvZmlsZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1haWxcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbCA6IENvbnRyb2wpOiB7W3M6c3RyaW5nXTpib29sZWFufXtcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChcIlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT9cIikpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOnRydWV9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
