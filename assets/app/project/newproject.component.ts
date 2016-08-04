import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators} from "@angular/common";
import {ProjectService} from "./project.service";
import {AccordionComponentGroup} from "../utility/accordiongroup.component";
import {AccordionComponent} from "../utility/accordion.component";
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
                    <input type="text" [ngFormControl]="myForm.find('manager')" id="manager" class="form-control" value="Jason McDonald"/>
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
    constructor(private _fb:FormBuilder,private projectService:ProjectService){}
    ngOnInit(){
        this.myForm=this._fb.group({
            organization:['',Validators.required],
            name:['',Validators.required],
            image:[''],
            manager:['']
        })
    }
    onSubmit(){
        console.log('Submitted');
    }
}