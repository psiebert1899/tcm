import {Routes, RouterModule} from "@angular/router";
import {NewEmployeeAdvanced} from "./newemployeeadvanced.component";
import {NewEmployeeBasic} from "./newemployeebasic.component";
const newEmployeeRoutes : Routes=[
    {path:'employee/new/advanced',component:NewEmployeeAdvanced},
    {path:'employee/new/basic',component:NewEmployeeBasic}
]
export const newEmployeeRouting=RouterModule.forChild(newEmployeeRoutes);