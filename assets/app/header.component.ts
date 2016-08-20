import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";
import {Router} from "@angular/router";
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {User} from "./auth/user";
import {AuthenticationService} from "./auth/authentication.service";
import {UserService} from "./user/user.service";
import {ApplicationUser} from "./user/applicationuser";
import {ErrorService} from "./errors/error.service";
import {ClockComponent} from "./utility/clock.component";
@Component({
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
                            <li><a [routerLink]="['/employee/new']">New Employee</a></li>
                            <li><a [routerLink]="['/employee/list']">Employee List</a></li>
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
                            <li><a [routerLink]="['/project/new']">New Project</a></li>
                            <li><a [routerLink]="['/project/list']">Project List</a></li>
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
                      <ul class="nav navbar-nav navbar-right">
                        <li *ngIf="isLoggedIn()"><a [routerLink]="['/user/profile']">{{loggedUser!=undefined?loggedUser.firstName+" " + loggedUser.lastName : 'Default User'}}</a></li>
                        <li *ngIf="!isLoggedIn()">
                          <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                              <input type="email" id="email" placeholder="Email Address"  [ngFormControl]="myForm.find('email')"/>
                              <input type="password" id="password" placeholder="Password" [ngFormControl]="myForm.find('password')"/>
                              <button type="submit" class="btn btn-primary">Sign in</button>
                          </form>
                        </li>

                        <li><a [routerLink]="['auth/logout']" *ngIf="isLoggedIn()">Sign Out</a></li>
                      </ul>
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
    `,
    styles: [ `
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
                    font-family: NEORD;
                }
            `],
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent implements OnInit{
    public loggedUser : ApplicationUser;
    public myForm: ControlGroup;
    constructor(private _fb:FormBuilder, private _authService:AuthenticationService, private _router :Router, private _userService : UserService, private _errorService:ErrorService){}

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
    ngOnInit() {
        if (this._authService.isLoggedIn()) {
            this._userService.getUser().subscribe(
                data => {
                    this.loggedUser = data;
                }, error=> {
                    console.log(error)
                }
            )
        }
        this._userService.broadcastUser.subscribe(
            data=>this.loggedUser=data,
            error => console.log(error)
        )

        this.myForm = this._fb.group({
          email: ['', Validators.compose([
            Validators.required,
            this.isEmail
          ])],
          password: ['', Validators.required]
        });
    }
    onSubmit(){

      const user:User = new User(this.myForm.value.email,this.myForm.value.password);
        this._authService.signin(user).subscribe(
            data => {
                console.log(data);
                localStorage.setItem('token',data.obj);
                localStorage.setItem('userId',data.userId);
                localStorage.setItem('appUser',data.applicationUser._id);
                this._router.navigateByUrl('/user/profile');
            },
            error => {
                this._errorService.handleError(error);
                console.log(error);
            }
        )
    }
    getUserName(){
        console.log(this._userService.user);
        return this._userService.user.firstName + " " + this._userService.user.lastName;
    }

    private isEmail(control : Control): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }

}
