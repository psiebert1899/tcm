import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators} from "@angular/common";
import {ProjectService} from "./project.service";
import {AccordionComponentGroup} from "../utility/accordiongroup.component";
import {AccordionComponent} from "../utility/accordion.component";
import {Project} from "./project";
import {EmployeeService} from "../employee/employee.service";
import {Query} from "../utility/query";
@Component({
    selector : 'my-new-project',
    template:`
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
        <accordion>
            <accordion-group heading="Basic Details" [isOpen]="true">
                <div class="form-group">
                    <label for="organization">Organization</label>
                    <input type="text" [ngFormControl]="myForm.find('organization')" id="organization" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="name">Project Name:</label>
                    <input type="text" [ngFormControl]="myForm.find('name')" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="Image">Image</label>
                    <input type="text" [ngFormControl]="myForm.find('image')" id="image" class="form-control" value="/imgs/projectImgs/defaultProjectImage.png"/>
                </div>
                <div class="form-group">
                    <label for="Manager">Manager</label>
                    <select name="Manager" id="manager" [ngFormControl]="myForm.find('manager')" class="form-control">
                        <option *ngFor="let m of managers" [value]="m._id">{{m.firstName + " "+m.lastName}}</option>
                    </select>
                </div>
            
            </accordion-group>
            <accordion-group heading="Budget and Scheduling">
            
            </accordion-group>
            <accordion-group heading="Employees">
            
            </accordion-group>
            <accordion-group heading="Documents">
            
            </accordion-group>
        </accordion>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    `,
    directives:[AccordionComponent,AccordionComponentGroup]
})
export class NewProjectComponent implements OnInit{
    myForm:ControlGroup;
    managers = [];
    constructor(private _fb:FormBuilder,private projectService:ProjectService,private _employeeService:EmployeeService){}
    ngOnInit(){
        this.myForm=this._fb.group({
            organization:['',Validators.required],
            name:['',Validators.required],
            image:['',Validators.required],
            manager:['',Validators.required]
        })
        this._employeeService.getEmployees(new Query('canManageProjects',true)).subscribe(
            response => this.managers=response,
            error => console.log(error)
        )
    }
    onSubmit(){
        var project= new Project(this.myForm.value.organization,this.myForm.value.name,this.myForm.value.image,this.myForm.value.manager);
        this.projectService.newProject(project).subscribe(
            data => console.log(data),
            error => console.log(error)
        )
    }
}