import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {AuthenticationService} from "./auth/authentication.service";
import {UserService} from "./user/user.service";
import {ApplicationUser} from "./user/applicationuser";
@Component({
    selector: 'my-header',
    template:`
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
                      <a class="navbar-brand" href="#">Brand</a>
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
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
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
                        <li><a [routerLink]="['/auth/signin']" *ngIf="!isLoggedIn()">Sign In</a></li>
                        <li><a [routerLink]="['/auth/signup']" *ngIf="!isLoggedIn()">Sign Up</a></li>
                        <li><a [routerLink]="['auth/logout']" *ngIf="isLoggedIn()">Sign Out</a></li>
                      </ul>
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
    `,
    styles:[`
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
            `],
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent implements OnInit{
    public loggedUser : ApplicationUser;
    constructor(private _authService:AuthenticationService,private _userService : UserService){}

    isLoggedIn(){
        return this._authService.isLoggedIn();
    }
    ngOnInit() {
       this._userService.getUser().subscribe(
           data => {
               this.loggedUser=data;
           },error=>{console.log(error)}
       )
    }
    getUserName(){
        console.log(this._userService.user);
        this._userService.user;
    }

}