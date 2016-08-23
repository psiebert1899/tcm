import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {EmployeeBasicDetailsComponent} from "./employeebasicdetails.component";
import {EmployeeDetailsComponent} from "./employeedetails.component";
import {EmployeeDisplayComponent} from "./employeedisplay.component";
import {NewEmployeeComponent} from "./newemployee.component";
import {ErrorService} from "../errors/error.service";
import {ProjectService} from "../project/project.service";
import {EmployeeService} from "./employee.service";
import {EmployeeListComponent} from "./employeelist";
import {NewEmployeeModule} from "./newemployee.module";
import {NewEmployeeBasic} from "./newemployeebasic.component";
import {NewEmployeeAdvanced} from "./newemployeeadvanced.component";
import {newEmployeeRouting} from "./newemployee.routes";
import {employeesRouting} from "./employee.routes";
import {UtilityModule} from "../utility/utility.module";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UtilityModule,
        employeesRouting
    ],
    declarations:[
        EmployeeBasicDetailsComponent,
        EmployeeDetailsComponent,
        EmployeeDisplayComponent,
        NewEmployeeComponent,
        EmployeeListComponent,
    ],
    providers:[
    ]
})
export class EmployeeModule{}