import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {newEmployeeRouting} from "./newemployee.routes";
import {NewEmployeeBasic} from "./newemployeebasic.component";
import {NewEmployeeAdvanced} from "./newemployeeadvanced.component";
import {ErrorService} from "../errors/error.service";
import {ProjectService} from "../project/project.service";
import {EmployeeService} from "./employee.service";
import {AccordionComponentGroup} from "../utility/accordiongroup.component";
import {AccordionComponent} from "../utility/accordion.component";
import {UtilityModule} from "../utility/utility.module";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        newEmployeeRouting,
        UtilityModule
    ],
    declarations:[
        NewEmployeeAdvanced,
        NewEmployeeBasic
    ],
    providers:[
        EmployeeService,
        ProjectService,
        ErrorService
    ]
})
export class NewEmployeeModule{}