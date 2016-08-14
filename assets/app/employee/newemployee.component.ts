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
import {Skill} from "../skills/skill";
import {Training} from "../training/training";
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
                <accordion-group heading="Resume (optional)">
                    <div class="uneven-col-one">
                        <div class="form-group">
                            <label for="addSkill">Skill Name:</label>
                            <input type="text" name="addSkill" id="addSkill" class="form-control">
                            <label for="skillLevel" id="skillLevelLabel">Skill Level</label>
                            <select name="skillLevel" id="skillLevel" class="form-control">
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>
                    <div class="uneven-col-two">
                        <button type="button" class="btn btn default center-block" id="addButton"(click)="addEmployeeSkill()">&gt;&gt;&gt;</button>
                    </div>
                    <div class="uneven-col-three">
                        <div class="form-group">
                            <label for="addedSkills">Employee Skills:</label>
                            <div class="table-wrapper">
                                <table class="table-striped" id="skills-table">
                                    <tr>
                                        <th>Skill Name</th>
                                        <th>Skill Level</th>
                                        <th>Remove</th>
                                    </tr>
                                    <tr *ngFor="let s of skills">
                                        <td>{{s.name}}</td>
                                        <td>{{s.level}}</td>
                                        <td><button type="button" (click)="removeSkill(s)">X</button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="left-form">
                        <label for="resume">Upload Resume</label>
                        <div class="well ">
                        <label for="path">File Name:</label>
                            <input type="text" value="resume path"  class="form-control" disabled/>
                            <label class="btn btn-default btn-file">
                                Browse <input type="file" style="display: none;">
                            </label> 
                        </div>
                    </div>
                </accordion-group>
                <accordion-group heading="Training (optional)">
                    <!--Allow for uploading of training docs-->
                    <!--Make an input for date of training-->
                    <!--Make an input for length of training-->
                    <!--Make an input for name of training-->
                    <div class="left-form">
                        <div class="left-form">
                            <div class="form-group">
                                <label for="subject">Subject:</label>
                                <input type="text" id="subject" name="subject" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="training-organization">Organization:</label>
                                <input type="text" id="training-organization" name="training-organization" class="form-control"/>
                        </div>
                    </div>
                    <div class="right-form">
                        <div class="form-group">
                            <label for="training-days">Length:</label>
                            <input type="number" id="training-days" name="training-days" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label for="training-date">Date:</label>
                            <input type="date" id="training-date" name="training-date" class="form-control" />
                        </div>
                    </div>
                        <button type="button" class="btn btn-default btn-lg center-block" (click)="addTraining()">Add</button>
                    </div>
                    <div class="right-form">
                         <div class="form-group">
                            <label for="addedTraining">Trainings:</label>
                            <div class="table-wrapper">
                            <table id="training-table" class="table-striped">
                            <tr>
                                <th>Subject</th>
                                <th>Organization</th>
                                <th>Length</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                                <tr *ngFor="let t of trainings">
                                    <td>{{t.subject}}</td>
                                    <td>{{t.organization}}</td>
                                    <td>{{t.length}}</td>
                                    <td>{{t.date.getYear()}}</td>
                                    <td><button type="button" (click)="removeTraining(t)">X</button></td>
                                </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </accordion-group>                
            </accordion>
            <button type="submit" class="btn btn-primary btn-lg center-block submit-button">Submit</button>
        </form>
        </div>
    `,
    providers:[EmployeeService],
    directives:[AccordionComponent,AccordionComponentGroup],
    styles:[`
        .left-form{
            float:left;
            width:49%;
            margin-bottom:25px;
        }
        .right-form{
            float:right;
            width:49%;
            margin-bottom:25px;
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
        .submit-button{
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
        .my-well{
            height:8.5em;
            overflow: scroll;
            background-color:white;
            padding:0;
        }

        .btn-file{
            width:40%;
            margin-left:30%;
            margin-top:2em;
        }
        .add-btn{
            width:40%;
            margin-left:30%;
        }
        .uneven-col-one{
            width:40%;
            float:left;
        }
        .uneven-col-two{
            width:10%;
            float:left;
        }
        .uneven-col-three{
            width:50%;
            float:left;
        }
        #skillLevelLabel{
            margin-top:2em;
        }
        #addButton{
            margin-top:4.25em
        }
        #training-table{
            width:100%;
            padding:0;
        }
        #training-table > th{
            text-align:center;
        }
        th{
            text-align:center;
        }
        #skills-table{
            width:100%;
        }
        td{
            text-align:center;
        }
        .table-wrapper{
            height:10em;
            overflow:auto;
                        border:1px solid black;
            border-radius:5px;
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
    skills =[];
    trainings=[];
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
            this.projectsManaged,
            this.trainings,
            this.skills
            
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
    addEmployeeSkill(){
        var nameElement = <HTMLInputElement> document.getElementById('addSkill');
        var name=nameElement.value;
        var levelElement=<HTMLSelectElement>document.getElementById('skillLevel');
        var skillOpt = <HTMLOptionElement>levelElement.selectedOptions[0];
        var level=skillOpt.value;
        var skill=new Skill(name,level);
        this.skills.push(skill);
        nameElement.value="";
        levelElement.selectedIndex=0;
    }
    private isEmail(control : Control): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }
    addTraining(){
        /*get the fields*/
        let subjectEle= <HTMLInputElement>document.getElementById('subject');
        let orgEle = <HTMLInputElement>document.getElementById('training-organization');
        let lengthEle = <HTMLInputElement>document.getElementById('training-days');
        let dateEle = <HTMLInputElement>document.getElementById('training-date');

        /*get the values*/
        let subject=subjectEle.value;
        console.log("Subject:"+subject);
        let org = orgEle.value;
        let length=lengthEle.value;
        let date = new Date(dateEle.value);

        //create the training object
        let training=new Training(subject,org,parseInt(length),date);

        //add training to the array
        this.trainings.push(training);

        //clear form values
        subjectEle.value="";
        orgEle.value="";
        lengthEle.value="";
        dateEle.value="";
    }
    removeTraining(ele){
        console.log(ele);
        for(let x=0;x<this.trainings.length;x++){
            if(ele===this.trainings[x]){
                this.trainings.splice(x,1);
            }
        }
    }
    removeSkill(ele){
        console.log(ele);
        for(let x=0;x<this.skills.length;x++){
            if(ele==this.skills[x]){
                this.skills.splice(x,1);
            }
        }
    }

}