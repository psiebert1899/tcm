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
const core_1 = require("@angular/core");
const authentication_service_1 = require("./authentication.service");
const error_service_1 = require("../errors/error.service");
const user_1 = require("./user");
const forms_1 = require("@angular/forms");
let SignupformComponent = class SignupformComponent {
    constructor(_fb, _authService, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._errorService = _errorService;
    }
    onSubmit() {
        const user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this._authService.signup(user).subscribe(data => console.log(data), error => this._errorService.handleError(error));
    }
    ngOnInit() {
        this.myForm = this._fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', forms_1.Validators.required]
        });
    }
    isEmail(control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    }
};
__decorate([
    core_1.ViewChild('myModal'), 
    __metadata('design:type', core_1.ElementRef)
], SignupformComponent.prototype, "myModal", void 0);
SignupformComponent = __decorate([
    core_1.Component({
        selector: 'registration-form',
        template: `
  		<div>    
            <button id="register"  class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#myModal">Register Now</button>
        </div>

        <div #myModal class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  			<div class="modal-dialog" role="document">
    			<div class="modal-content">
      				<form id="myForm" [formGroup]="myForm">
      					<div class="modal-header">
        					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        					<h4 class="modal-title" id="myModalLabel">Registration Form</h4>
      					</div>
      					<div class="modal-body">
                			<div class="form-group">
                    			<label for="firstName">First Name:</label>
                    			<input type="text" [formControl]="myForm.find('firstName')" id="firstName" class="form-control"/>
                			</div>
                			<div class="form-group">
                    			<label for="lastName">Last Name</label>
                    			<input type="text" [formControl]="myForm.find('lastName')" id="lastName" class="form-control"/>
                			</div>
                			<div class="form-group">
                    			<label for="email">Email:</label>
                    			<input type="email" [formControl]="myForm.find('email')" id="email" class="form-control" />
                			</div>
                			<div class="form-group">
                    			<label for="password">Password</label>
                    			<input type="password" [formControl]="myForm.find('password')" id="password" class="form-control" />
                			</div>
                			
            			
      					</div>
      					<div class="modal-footer">
      						<button type="button" class="btn btn-primary" [disabled]="!myForm.valid" (click)="onSubmit()" data-dismiss="modal">Sign Up</button>
        					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>        				
      					</div>
      				</form>
    			</div>
  			</div>
		</div>
  	`
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, error_service_1.ErrorService])
], SignupformComponent);
exports.SignupformComponent = SignupformComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUN2RSx5Q0FBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCxnQ0FBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCx1QkFBbUIsUUFBUSxDQUFDLENBQUE7QUFDNUIsd0JBQThELGdCQUFnQixDQUFDLENBQUE7QUErQy9FO0lBSUMsWUFBb0IsR0FBZSxFQUFTLFlBQWtDLEVBQVMsYUFBMkI7UUFBOUYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUUsQ0FBQztJQUVySCxRQUFRO1FBQ0QsTUFBTSxJQUFJLEdBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNwQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDekIsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUNqRCxDQUFDO0lBR04sQ0FBQztJQUVKLFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDO29CQUM5QixrQkFBVSxDQUFDLFFBQVE7b0JBQ25CLElBQUksQ0FBQyxPQUFPO2lCQUNaLENBQUMsQ0FBQztZQUNILFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sT0FBTyxDQUFDLE9BQXFCO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsNlBBQTZQLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDcFIsTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxDQUFBO1FBQzdCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQS9CQTtJQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOztvREFBQTtBQWhEdEI7SUFBQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLG1CQUFtQjtRQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUNUO0tBQ0gsQ0FBQzs7dUJBQUE7QUFFVywyQkFBbUIsc0JBaUMvQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3JlZ2lzdHJhdGlvbi1mb3JtJyxcclxuICBcdHRlbXBsYXRlOiBgXHJcbiAgXHRcdDxkaXY+ICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVnaXN0ZXJcIiAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9ja1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+UmVnaXN0ZXIgTm93PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgI215TW9kYWwgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJteU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJteU1vZGFsTGFiZWxcIj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICBcdFx0XHRcdDxmb3JtIGlkPVwibXlGb3JtXCIgW2Zvcm1Hcm91cF09XCJteUZvcm1cIj5cclxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICBcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICBcdFx0XHRcdFx0PGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cIm15TW9kYWxMYWJlbFwiPlJlZ2lzdHJhdGlvbiBGb3JtPC9oND5cclxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0PGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2ZpcnN0TmFtZScpXCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbGFzdE5hbWUnKVwiIGlkPVwibGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHRcdFx0XHJcbiAgICAgICAgICAgIFx0XHRcdFxyXG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgIFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj4gICAgICAgIFx0XHRcdFx0XHJcbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0XHQ8L2Zvcm0+XHJcbiAgICBcdFx0XHQ8L2Rpdj5cclxuICBcdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gIFx0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cGZvcm1Db21wb25lbnR7XHJcblx0bXlGb3JtOkZvcm1Hcm91cDtcclxuXHRAVmlld0NoaWxkKCdteU1vZGFsJykgbXlNb2RhbDogRWxlbWVudFJlZjtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcixwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoZW50aWNhdGlvblNlcnZpY2UscHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2Upe31cclxuXHJcblx0b25TdWJtaXQoKXtcclxuICAgICAgICBjb25zdCB1c2VyICA9IG5ldyBVc2VyKHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkLHRoaXMubXlGb3JtLnZhbHVlLmZpcnN0TmFtZSx0aGlzLm15Rm9ybS52YWx1ZS5sYXN0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHVzZXIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cdG5nT25Jbml0KCl7XHJcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuXHRcdFx0Zmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuXHRcdFx0ZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuXHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG5cdFx0XHRcdHRoaXMuaXNFbWFpbFxyXG5cdFx0XHRdKV0sXHJcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNFbWFpbChjb250cm9sIDogRm9ybUNvbnRyb2wpOiB7W3M6c3RyaW5nXTpib29sZWFufXtcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChcIlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT9cIikpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOnRydWV9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
