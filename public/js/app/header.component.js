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
const router_1 = require("@angular/router");
const user_1 = require("./auth/user");
const authentication_service_1 = require("./auth/authentication.service");
const user_service_1 = require("./user/user.service");
const error_service_1 = require("./errors/error.service");
const forms_1 = require("@angular/forms");
let HeaderComponent = class HeaderComponent {
    constructor(_fb, _authService, _router, _userService, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
        this._userService = _userService;
        this._errorService = _errorService;
    }
    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
    ngOnInit() {
        if (this._authService.isLoggedIn()) {
            this._userService.getUser().subscribe(data => {
                this.loggedUser = data;
            }, error => {
                console.log(error);
            });
        }
        this._userService.broadcastUser.subscribe(data => this.loggedUser = data, error => console.log(error));
        this.myForm = this._fb.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', forms_1.Validators.required]
        });
    }
    onSubmit() {
        const user = new user_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authService.signin(user).subscribe(data => {
            console.log(data);
            localStorage.setItem('token', data.obj);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('appUser', data.applicationUser._id);
            this._router.navigateByUrl('/user/profile');
        }, error => {
            this._errorService.handleError(error);
            console.log(error);
        });
    }
    getUserName() {
        console.log(this._userService.user);
        return this._userService.user.firstName + " " + this._userService.user.lastName;
    }
    isEmail(control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'my-header',
        template: `
                <nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">TCM</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav" *ngIf="isLoggedIn()">
                        <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Employees<span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a routerLink="/employee/new">New Employee</a></li>
                            <li><a routerLink="/employee/list">Employee List</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                         <li class="dropdown" *ngIf="isLoggedIn()">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects<span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a routerLink="/project/new">New Project</a></li>
                            <li><a routerLink="/project/list">Project List</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                         <li class="dropdown" *ngIf="isLoggedIn()">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources<span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                      </ul>
                      <my-current-time></my-current-time>
                      <ul class="nav navbar-nav navbar-right">
                        <li *ngIf="isLoggedIn()"><a routerLink="/user/profile">{{loggedUser!=undefined?loggedUser.firstName+" " + loggedUser.lastName : 'Default User'}}</a></li>
                        <li *ngIf="!isLoggedIn()">
                          <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
                              <input type="email" id="email" placeholder="Email Address"  [formControl]="myForm.find('email')"/>
                              <input type="password" id="password" placeholder="Password" [formControl]="myForm.find('password')"/>
                              <button type="submit" class="btn btn-primary">Sign in</button>
                          </form>
                        </li>

                        <li><a routerLink="auth/logout" *ngIf="isLoggedIn()">Sign Out</a></li>
                      </ul>
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
    `,
        styles: [`
                header{
                    margin-bottom:20px;
                }
                ul{
                    text-align:center;
                }
                li{
                    float:none;
                    display:inline-block;
                }
                .router-link-active{
                    background-color: #337ab7;
                    color: white;
                }
                .navbar-brand{
                    font-family: NEORD,sans-serif;
                }
            `]
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router, user_service_1.UserService, error_service_1.ErrorService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,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UUFDdkIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBQ0QsV0FBVztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDcEYsQ0FBQztJQUVPLE9BQU8sQ0FBQyxPQUFxQjtRQUNqQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZQQUE2UCxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BSLE1BQU0sQ0FBQyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsQ0FBQTtRQUM3QixDQUFDO0lBQ0wsQ0FBQztBQUVMLENBQUM7QUF6SkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0VUO1FBQ0QsTUFBTSxFQUFFLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQWtCRCxDQUFDO0tBQ2IsQ0FBQzs7bUJBQUE7QUFFVyx1QkFBZSxrQkEyRDNCLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vYXV0aC91c2VyXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcHBsaWNhdGlvblVzZXJ9IGZyb20gXCIuL3VzZXIvYXBwbGljYXRpb251c2VyXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge0Nsb2NrQ29tcG9uZW50fSBmcm9tIFwiLi91dGlsaXR5L2Nsb2NrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCcmFuZCBhbmQgdG9nZ2xlIGdldCBncm91cGVkIGZvciBiZXR0ZXIgbW9iaWxlIGRpc3BsYXkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlRDTTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDb2xsZWN0IHRoZSBuYXYgbGlua3MsIGZvcm1zLCBhbmQgb3RoZXIgY29udGVudCBmb3IgdG9nZ2xpbmcgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+RW1wbG95ZWVzPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvZW1wbG95ZWUvbmV3XCI+TmV3IEVtcGxveWVlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9lbXBsb3llZS9saXN0XCI+RW1wbG95ZWUgTGlzdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlByb2plY3RzPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvcHJvamVjdC9uZXdcIj5OZXcgUHJvamVjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvcHJvamVjdC9saXN0XCI+UHJvamVjdCBMaXN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+T25lIG1vcmUgc2VwYXJhdGVkIGxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+UmVzb3VyY2VzPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bXktY3VycmVudC10aW1lPjwvbXktY3VycmVudC10aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPjxhIHJvdXRlckxpbms9XCIvdXNlci9wcm9maWxlXCI+e3tsb2dnZWRVc2VyIT11bmRlZmluZWQ/bG9nZ2VkVXNlci5maXJzdE5hbWUrXCIgXCIgKyBsb2dnZWRVc2VyLmxhc3ROYW1lIDogJ0RlZmF1bHQgVXNlcid9fTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiICBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCJhdXRoL2xvZ291dFwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+U2lnbiBPdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm5hdmJhci1jb2xsYXBzZSAtLT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogWyBgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItYnJhbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE5FT1JELHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHVibGljIGxvZ2dlZFVzZXIgOiBBcHBsaWNhdGlvblVzZXI7XHJcbiAgICBwdWJsaWMgbXlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXIgOlJvdXRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOkVycm9yU2VydmljZSl7fVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkVXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvcj0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5icm9hZGNhc3RVc2VyLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YT0+dGhpcy5sb2dnZWRVc2VyPWRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgdGhpcy5pc0VtYWlsXHJcbiAgICAgICAgICBdKV0sXHJcbiAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TdWJtaXQoKXtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXI6VXNlciA9IG5ldyBVc2VyKHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4odXNlcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyxkYXRhLm9iaik7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJyxkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBwVXNlcicsZGF0YS5hcHBsaWNhdGlvblVzZXIuX2lkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdXNlci9wcm9maWxlJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBnZXRVc2VyTmFtZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyLmZpcnN0TmFtZSArIFwiIFwiICsgdGhpcy5fdXNlclNlcnZpY2UudXNlci5sYXN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbCA6IEZvcm1Db250cm9sKToge1tzOnN0cmluZ106Ym9vbGVhbn17XHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/XCIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDp0cnVlfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
