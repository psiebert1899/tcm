import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./auth/signup.component";
import {EmployeeComponent} from "./employee/employee.component";
import {ProjectComponent} from "./project/project.component";
import {UserHomeComponent} from "./user/userhome.component";
export const AppRoutes:Routes = [
    {path:"",component:SignupComponent},
    {path:"employee",component:EmployeeComponent},
    {path:"project",component:ProjectComponent},
    {path:"profile",component:UserHomeComponent}
];
export const appRoutingProviders: any[] =[];
export const appRouting = RouterModule.forRoot(AppRoutes);