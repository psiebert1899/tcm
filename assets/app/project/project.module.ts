import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {projectRouting} from "./project.routes";
import {ProjectListComponent} from "./projectlist.component";
import {ProjectDisplayComponent} from "./projectdisplay.component";
import {NewProjectComponent} from "./newproject.component";
import {ErrorService} from "../errors/error.service";
import {EmployeeService} from "../employee/employee.service";
import {ProjectService} from "./project.service";
import {NgModule} from "@angular/core";
import {UtilityModule} from "../utility/utility.module";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UtilityModule,
        projectRouting,
    ],
    declarations:[
        ProjectDisplayComponent,
        ProjectListComponent,
        NewProjectComponent
    ],
    providers:[
        ProjectService,
        EmployeeService,
        ErrorService
    ]
})
export class ProjectModule {}