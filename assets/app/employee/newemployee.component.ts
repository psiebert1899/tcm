import {Component, OnInit} from "@angular/core";
import {ErrorService} from "../errors/error.service";
import {EmployeeService} from "./employee.service";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
import {AccordionComponentGroup} from "../utility/accordiongroup.component";
import {AccordionComponent} from "../utility/accordion.component";
import {Employee} from "./employee";
import {Query} from "../utility/query";
import {ProjectService} from "../project/project.service";
import {Project} from "../project/project";
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {Skill} from "../skills/skill";
import {Training} from "../training/training";
import {NewEmployeeAdvanced} from "./newemployeeadvanced.component";
import {NewEmployeeBasic} from "./newemployeebasic.component";
@Component({
    selector: "my-new-employee",
    template:`
        <h1>New Employee</h1>
        <ul class="nav nav-tabs">
            <li><a [routerLink]="['./basic']">Basic</a></li>
            <li><a [routerLink]="['./advanced']">Advanced</a></li>
        </ul>
        <router-outlet></router-outlet>
        `,
    directives:[ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/advanced' , component : NewEmployeeAdvanced },
    {path: '/basic', component:NewEmployeeBasic}
])
export class NewEmployeeComponent{


}