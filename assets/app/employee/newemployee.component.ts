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
import {Router} from "@angular/router";
@Component({
    selector: "my-new-employee",
    template:`
        <h1>New Employee</h1>
        <div class="col-md-12">
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <accordion>
                <accordion-group heading="Required" isOpen="true">
                <div class="left-form">
                    <div class="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" [ngFormControl]="myForm.find('firstName')" id="firstName" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" [ngFormControl]="myForm.find('lastName')" id="lastName" class="form-control"/>
                    </div>
                    <!--Still need to add image uploading capability-->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" [ngFormControl]="myForm.find('email')" id="email" class="form-control"/>
                    </div>
                </div>
                <div class="right-form">
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text" [ngFormControl]="myForm.find('phone')" id="phone" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <select [ngFormControl]="myForm.find('country')" id="country" #t (change)="onCountryChange(t.value)" class="form-control">
                            <option>USA</option>
                            <option>Italy</option>
                            <option>Brazil</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="city">City</label>
                        <input type="text" [ngFormControl]="myForm.find('city')" id="city" class="form-control"/>
                    </div>
                    <div class="form-group" *ngIf="country!='' && country=='USA'">
                        <label for="state">State:</label>
                        <select [ngFormControl]="myForm.find('state')" id="state" class="form-control">
                            <option>Illinois</option>
                            <option>Michigan</option>
                            <option>North Carolina</option>
                            <option>Washington</option>
                            <option>Florida</option>
                        </select>
                    </div>
                </div>
                </accordion-group>
                <accordion-group heading="Employee Data (optional)">
                    <div class="col-one">
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <select id="title" [ngFormControl]="myForm.find('title')" class="form-control">
                                <option>Analyst A1</option>
                                <option>Analyst A2</option>
                                <option>Consultant C1</option>
                                <option>Manager</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Has Direct Supervisor?</label>
                            <div class="radio-inline">
                                <label><input type="radio" name="hasManager" value="true" [ngFormControl]="myForm.find('hasManager')" (click)="handleRadioChange(true,'hasManager')"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="hasManager" value="false" checked [ngFormControl]="myForm.find('hasManager')" (click)="handleRadioChange(false,'hasManager')"/>No</label>
                            </div>
                        </div>
                        <div class="form-group" *ngIf="hasManager">
                            <label for="Manager">Manager</label>
                            <select id="manager" [ngFormControl]="myForm.find('manager')" class="form-control" size="4">
                                <option *ngFor="let m of managers">{{m.firstName + " " + m.lastName}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-two">
                        <div class="form-group">
                            <label for="division">Division</label>
                            <select id="division" [ngFormControl]="myForm.find('division')" class="form-control">
                                <option>Hyla Soft USA</option>
                                <option>Hyla Soft Italy</option>
                                <option>Hyla soft Brazil</option>
                            </select>
                        </div>
                        <div class="form-group">
                        <label>Manages Others?</label>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageEmployees" value="true" [ngFormControl]="myForm.find('canManageEmployees')"(click)="handleRadioChange(true,'canManageEmployees')"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageEmployees" value="false" [ngFormControl]="myForm.find('canManageEmployees')"  (click)="handleRadioChange(false,'canManageEmployees')" checked/>No</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-three">
                        <div class="form-group">
                            <label for="department">Department</label>
                            <select id="department" [ngFormControl]="myForm.find('department')" class="form-control">
                                <option>Software</option>
                                <option>PLM</option>
                                <option>MES</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Manages Projects?</label>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageProjects" [ngFormControl]="myForm.find('canManageProjects')" (click)="handleRadioChange(true,'canManageProjects')" value="true"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageProjects" value="false" [ngFormControl]="myForm.find('canManageProjects')"(click)="handleRadioChange(false,'canManageProjects')" checked/>No</label>
                            </div>
                        </div>
                    </div>
                </accordion-group>
                <accordion-group heading="Projects Managed" *ngIf="canManageProjects">
                        <div class="form-group">
                            <label for="projects">Project Manager For:</label>
                            <select id="projectsManaged" [ngFormControl]="myForm.find('projectManagerFor')" multiple class="form-control">
                                <option *ngFor="let p of projects" [value]="p._id">{{p.name}}</option>
                            </select>
                        </div>
                </accordion-group>
                <accordion-group heading="Employees" *ngIf="canManageEmployees">
                    <div class="form-group" *ngIf="canManageEmployees">
                            <label for="employees">Employees</label>
                            <select id="employees" [ngFormControl]="myForm.find('employees')" multiple class="form-control">
                                <option *ngFor="let e of employees" [value]="e._id">{{e.firstName + " " + e.lastName}}</option>
                            </select>
                        </div>
                </accordion-group>
                <accordion-group heading="Projects">
                        <div class="form-group">
                            <label for="projects">Projects:</label>
                            <select id="projects" [ngFormControl]="myForm.find('projects')" multiple class="form-control">
                                <option *ngFor="let p of projects" [value]="p._id">{{p.name}}</option>
                            </select>
                        </div>
                </accordion-group>
                <accordion-group heading="Resume (optional)"><h1>Resume Upload Capability & skills section</h1></accordion-group>
                <accordion-group heading="Training (optional)"><h1>Training and Info</h1></accordion-group>
                <accordion-group heading="Benefits (optional)"><h1>Benefits information</h1></accordion-group>
            </accordion>
            <button type="submit" class="btn btn-primary btn-lg center-block">Submit</button>
        </form>
        </div>
    `,
    providers:[EmployeeService],
    directives:[AccordionComponent,AccordionComponentGroup],
    styles:[`
        .left-form{
            float:left;
            width:49%;
        }
        .right-form{
            float:right;
            width:49%;
        }
        .col-one{
            float:left;
            width:33%;
        }
        .col-two{
            float:left;
            width:30%;
            margin-right:2%;
            margin-left:2%;
        }
        .col-three{
            float:left;
            width:33%;
        }
        h1{
            color:white;
            font-family:OpenSans;
        }
        .btn{
            width:100%;
            border-radius:0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .col-md-12{
            background-color:white;
            border-radius:5px;
            padding:0;

        }
    `]
})
export class NewEmployeeComponent implements OnInit{
    myForm:ControlGroup;
    country:String='';
    canManageEmployees = false;
    canManageProjects = false;
    hasManager = false;
    managers:Employee[] = [];
    employees =[];
    projects = [];
    selectedProjects=[];
    projectsManaged=[];
    selectedEmployees=[];
    constructor(private _fb:FormBuilder,private _employeeService:EmployeeService,private _projectService:ProjectService,private _router:Router,private _errorService : ErrorService){}
    ngOnInit(){
        this._employeeService.getEmployees(new Query('canManageEmployees',true)).subscribe(
            response => this.managers=response,
            error=> console.log(error)
        )
        this._employeeService.getEmployees(new Query(null,null)).subscribe(
            response => this.employees=response,
            error => console.log(error)
        )
        this._projectService.getProjects().subscribe(
            response => this.projects=response,
            error => console.log(error)
        )
        this.myForm=this._fb.group({
            firstName:['',Validators.required],
            lastName:['',Validators.required],
            email:['',Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            phone:['',Validators.required],
            country:['',Validators.required],
            city:['',Validators.required],
            state:[''],
            title:[''],
            division:[''],
            department:[''],
            projects: [''],
            employees: [''],
            manager: [''],
            hasManager: [''],
            canManageEmployees: [''],
            canManageProjects: [''],
            projectManagerFor: ['']
        })
    }
    onCountryChange(val){
        this.country=val;
        console.log(val);
    }
    onSubmit(){
        if(this.myForm.value.canManageProjects) {
            var managedProjectElement = <HTMLSelectElement>document.getElementById('projectsManaged');
            if(projElement!==null) {
                for (var x = 0; x < managedProjectElement.options.length; x++) {
                    var option =<HTMLOptionElement>managedProjectElement.options[x];
                    if(option.selected){
                        this.projectsManaged.push(option.value)
                    }
                }
            }
        }
        var projElement = <HTMLSelectElement>document.getElementById('projects');
        if(projElement!==null) {
            for (var x = 0; x < projElement.options.length; x++) {
                var option =<HTMLOptionElement>projElement.options[x];
                if(option.selected){
                    this.selectedProjects.push(option.value)
                }
            }
        }
        console.log(this.projects);
        if(this.myForm.value.canManageEmployees) {
            var empEle = <HTMLSelectElement>document.getElementById('employees');
            if(empEle !==null) {
                for (var x = 0; x < empEle.length; x++) {
                    var option = <HTMLOptionElement>empEle.options[x];
                    if (option.selected) {
                        this.selectedEmployees.push(option.value);
                    }
                }
            }
        }
        const employee = new Employee(
            this.myForm.value.email,
            null,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.phone,
            this.myForm.value.country,
            this.myForm.value.city,
            this.myForm.value.state,
            this.myForm.value.title,
            this.myForm.value.division,
            this.myForm.value.department,
            this.myForm.value.manager,
            this.selectedEmployees,
            this.selectedProjects,
            this.canManageEmployees,
            this.canManageProjects,
            this.hasManager,
            this.projectsManaged
            
        );
        this._employeeService.createUser(employee).subscribe(
            data => this._router.navigateByUrl('/employee/list'),
            error => console.log(error)
        )
    }
    handleRadioChange(value,forField){
        if(forField=="canManageEmployees"){
            this.canManageEmployees=value;
        }
        if(forField=="canManageProjects"){
            this.canManageProjects=value;
        }
        if(forField=="hasManager"){
            this.hasManager=value;
        }
    }
    private isEmail(control : Control): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }

}