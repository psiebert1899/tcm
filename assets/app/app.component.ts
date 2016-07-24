import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {HeaderComponent} from "./header.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {ErrorComponent} from "./errors/error.component";

@Component({
    selector: 'my-app',
    template: ` 
        <my-header></my-header>
        <router-outlet></router-outlet>
    `,
    directives:[HeaderComponent,ROUTER_DIRECTIVES,ErrorComponent],
    styles: [`
        .router-link-active{
            color:white;
            cursor:default;
            background-color: #fff;
            border: 1px solid #ddd;
            border-bottom-color: transparent;
        }
        .navbar-default .navbar-nav>li>a {
            color:white;
        }
    `]
})
@Routes([
    {path:"/auth/signin",component:SigninComponent},
    {path:"/auth/signup",component:SignupComponent},
    {path:'/auth/logout',component:LogoutComponent}
])
export class AppComponent {
    
}