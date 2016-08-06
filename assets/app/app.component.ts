import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {HeaderComponent} from "./header.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {ErrorComponent} from "./errors/error.component";
import {UserHomeComponent} from "./user/userhome.component";
import {NewEmployeeComponent} from "./employee/newemployee.component";
import {EmployeeListComponent} from "./employee/employeelist";
import {EditEmployeeComponent} from "./employee/editemployee.component";
import {NewProjectComponent} from "./project/newproject.component";
import {ProjectListComponent} from "./project/projectlist.component";

@Component({
    selector: 'my-app',
    template: ` 
        <my-header></my-header>
        <div class="container-fluid" id="myContainer">
            <router-outlet></router-outlet>
        </div>
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
        #myContainer{
            width:80%;
            margin-left:10%;
            margin-top:0px;
        }
    `]
})
@Routes([
    {path:"/auth/signin",component:SigninComponent},
    {path:"/auth/signup",component:SignupComponent},
    {path:'/auth/logout',component:LogoutComponent},
    {path:'/user/profile',component:UserHomeComponent},
    {path:'/employee/new',component:NewEmployeeComponent},
    {path:'/employee/list', component: EmployeeListComponent},
    {path: '/employee/edit', component: EditEmployeeComponent},
    {path: '/project/new',component:NewProjectComponent},
    {path: 'project/list', component:ProjectListComponent}
])
export class AppComponent {
    
}