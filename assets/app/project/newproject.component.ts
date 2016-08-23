import {Component, OnInit} from "@angular/core";
import {ProjectService} from "./project.service";
import {Project} from "./project";
import {EmployeeService} from "../employee/employee.service";
import {Query} from "../utility/query";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector : 'my-new-project',
    template:`
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <accordion>
            <accordion-group heading="Basic Details" [isOpen]="true">
                <div class="form-group">
                    <label for="organization">Organization</label>
                    <input type="text" [formControl]="myForm.find('organization')" id="organization" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="name">Project Name:</label>
                    <input type="text" [formControl]="myForm.find('name')" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="Image">Image</label>
                    <input type="text" [formControl]="myForm.find('image')" id="image" class="form-control" value="/imgs/projectImgs/defaultProjectImage.png"/>
                </div>
                <div class="form-group">
                    <label for="Manager">Manager</label>
                    <select name="Manager" id="manager" [formControl]="myForm.find('manager')" class="form-control">
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

    `
})
export class NewProjectComponent implements OnInit{
    myForm:FormGroup;
    managers = [];
    constructor(private _fb:FormBuilder,private projectService:ProjectService,private _employeeService:EmployeeService,private _router:Router){}
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
            data => this._router.navigateByUrl('/project/list'),
            error => console.log(error)
        )
    }
}