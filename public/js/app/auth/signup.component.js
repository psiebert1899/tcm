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
var authentication_service_1 = require("./authentication.service");
var error_service_1 = require("../errors/error.service");
var user_1 = require("./user");
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._errorService = _errorService;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this._authService.signup(user).subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SignupComponent.prototype.isEmail = function (control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name:</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('firstName')\" id=\"firstName\" class=\"form-control\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('lastName')\" id=\"lastName\" class=\"form-control\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email:</label>\n                    <input type=\"email\" [ngFormControl]=\"myForm.find('email')\" id=\"email\" class=\"form-control\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" [ngFormControl]=\"myForm.find('password')\" id=\"password\" class=\"form-control\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, authentication_service_1.AuthenticationService, error_service_1.ErrorService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUE2RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9FLHVDQUFvQywwQkFBMEIsQ0FBQyxDQUFBO0FBQy9ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQTJCNUI7SUFFSSx5QkFBb0IsR0FBZSxFQUFTLFlBQWtDLEVBQVMsYUFBMkI7UUFBOUYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUUsQ0FBQztJQUNySCxrQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFNLElBQUksR0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3BDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNOLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN2QixTQUFTLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLEtBQUssRUFBRyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDM0IsbUJBQVUsQ0FBQyxRQUFRO29CQUNuQixJQUFJLENBQUMsT0FBTztpQkFDZixDQUFDLENBQUM7WUFDSCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNPLGlDQUFPLEdBQWYsVUFBZ0IsT0FBaUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw2UEFBNlAsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNwUixNQUFNLENBQUMsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLENBQUE7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFuREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLFdBQVc7WUFDdEIsUUFBUSxFQUFDLHN5Q0FzQlI7U0FDSixDQUFDOzt1QkFBQTtJQTRCRixzQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksdUJBQWUsa0JBMkIzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LXNpZ251cCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2ZpcnN0TmFtZScpXCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdsYXN0TmFtZScpXCIgaWQ9XCJsYXN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG15Rm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcixwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoZW50aWNhdGlvblNlcnZpY2UscHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2Upe31cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc3QgdXNlciAgPSBuZXcgVXNlcih0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCx0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCx0aGlzLm15Rm9ybS52YWx1ZS5maXJzdE5hbWUsdGhpcy5teUZvcm0udmFsdWUubGFzdE5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cCh1c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLm15Rm9ybT10aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGVtYWlsIDogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtYWlsXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2wgOiBDb250cm9sKToge1tzOnN0cmluZ106Ym9vbGVhbn17XHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/XCIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDp0cnVlfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
