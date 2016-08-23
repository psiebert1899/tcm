import {Routes, RouterModule} from "@angular/router";
import {NewEmployeeComponent} from "./newemployee.component";
import {EmployeeListComponent} from "./employeelist";
const employeeRoutes:Routes =[
    {path:'employee/new',component:NewEmployeeComponent},
    {path:'employee/list',component:EmployeeListComponent}
];
export const employeesRouting =RouterModule.forChild(employeeRoutes);