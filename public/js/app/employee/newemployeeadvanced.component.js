"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const employee_service_1 = require("./employee.service");
const error_service_1 = require("../errors/error.service");
const router_1 = require("@angular/router");
const project_service_1 = require("../project/project.service");
const query_1 = require("../utility/query");
const employee_1 = require("./employee");
const training_1 = require("../training/training");
const skill_1 = require("../skills/skill");
const forms_1 = require("@angular/forms");
let NewEmployeeAdvanced = class NewEmployeeAdvanced {
    constructor(_fb, _employeeService, _projectService, _router, _errorService) {
        this._fb = _fb;
        this._employeeService = _employeeService;
        this._projectService = _projectService;
        this._router = _router;
        this._errorService = _errorService;
        this.country = '';
        this.canManageEmployees = false;
        this.canManageProjects = false;
        this.hasManager = false;
        this.managers = [];
        this.employees = [];
        this.projects = [];
        this.selectedProjects = [];
        this.projectsManaged = [];
        this.selectedEmployees = [];
        this.skills = [];
        this.trainings = [];
    }
    ngOnInit() {
        this._employeeService.getEmployees(new query_1.Query('canManageEmployees', true)).subscribe(response => this.managers = response, error => console.log(error));
        this._employeeService.getEmployees(new query_1.Query(null, null)).subscribe(response => this.employees = response, error => console.log(error));
        this._projectService.getProjects().subscribe(response => this.projects = response, error => console.log(error));
        this.myForm = this._fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.isEmail
                ])],
            phone: ['', forms_1.Validators.required],
            country: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            state: [''],
            title: [''],
            division: [''],
            department: [''],
            projects: [''],
            employees: [''],
            manager: [''],
            hasManager: [''],
            canManageEmployees: [''],
            canManageProjects: [''],
            projectManagerFor: ['']
        });
    }
    onCountryChange(val) {
        this.country = val;
    }
    onSubmit() {
        if (this.myForm.value.canManageProjects) {
            var managedProjectElement = document.getElementById('projectsManaged');
            if (projElement !== null) {
                for (var x = 0; x < managedProjectElement.options.length; x++) {
                    var option = managedProjectElement.options[x];
                    if (option.selected) {
                        this.projectsManaged.push(option.value);
                    }
                }
            }
        }
        var projElement = document.getElementById('projects');
        if (projElement !== null) {
            for (var x = 0; x < projElement.options.length; x++) {
                var option = projElement.options[x];
                if (option.selected) {
                    this.selectedProjects.push(option.value);
                }
            }
        }
        if (this.myForm.value.canManageEmployees) {
            var empEle = document.getElementById('employees');
            if (empEle !== null) {
                for (var x = 0; x < empEle.length; x++) {
                    var option = empEle.options[x];
                    if (option.selected) {
                        this.selectedEmployees.push(option.value);
                    }
                }
            }
        }
        const employee = new employee_1.Employee(this.myForm.value.email, null, this.myForm.value.firstName, this.myForm.value.lastName, this.myForm.value.phone, this.myForm.value.country, this.myForm.value.city, this.myForm.value.state, this.myForm.value.title, this.myForm.value.division, this.myForm.value.department, this.canManageEmployees, this.canManageProjects, this.hasManager, this.myForm.value.manager, this.selectedEmployees, this.selectedProjects, this.projectsManaged, this.trainings, this.skills);
        this._employeeService.createUser(employee).subscribe(data => this._router.navigateByUrl('/employee/list'), error => console.log(error));
    }
    handleRadioChange(value, forField) {
        if (forField == "canManageEmployees") {
            this.canManageEmployees = value;
        }
        if (forField == "canManageProjects") {
            this.canManageProjects = value;
        }
        if (forField == "hasManager") {
            this.hasManager = value;
        }
    }
    addEmployeeSkill() {
        var nameElement = document.getElementById('addSkill');
        var name = nameElement.value;
        var levelElement = document.getElementById('skillLevel');
        var skillOpt = levelElement.selectedOptions[0];
        var level = skillOpt.value;
        var skill = new skill_1.Skill(name, level);
        this.skills.push(skill);
        nameElement.value = "";
        levelElement.selectedIndex = 0;
    }
    isEmail(control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    }
    addTraining() {
        /*get the fields*/
        let subjectEle = document.getElementById('subject');
        let orgEle = document.getElementById('training-organization');
        let lengthEle = document.getElementById('training-days');
        let dateEle = document.getElementById('training-date');
        /*get the values*/
        let subject = subjectEle.value;
        console.log("Subject:" + subject);
        let org = orgEle.value;
        let length = lengthEle.value;
        let date = new Date(dateEle.value);
        //create the training object
        let training = new training_1.Training(subject, org, parseInt(length), date);
        //add training to the array
        this.trainings.push(training);
        //clear form values
        subjectEle.value = "";
        orgEle.value = "";
        lengthEle.value = "";
        dateEle.value = "";
    }
    removeTraining(ele) {
        console.log(ele);
        for (let x = 0; x < this.trainings.length; x++) {
            if (ele === this.trainings[x]) {
                this.trainings.splice(x, 1);
            }
        }
    }
    removeSkill(ele) {
        console.log(ele);
        for (let x = 0; x < this.skills.length; x++) {
            if (ele == this.skills[x]) {
                this.skills.splice(x, 1);
            }
        }
    }
};
NewEmployeeAdvanced = __decorate([
    core_1.Component({
        selector: 'my-advanced-employee-form',
        template: `
        <div class="col-md-12">
        <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
            <accordion>
                <accordion-group heading="Required" isOpen="true">
                <div class="left-form">
                    <div class="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" [formControl]="myForm.find('firstName')" id="firstName" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" [formControl]="myForm.find('lastName')" id="lastName" class="form-control"/>
                    </div>
                    <!--Still need to add image uploading capability-->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" [formControl]="myForm.find('email')" id="email" class="form-control"/>
                    </div>
                </div>
                <div class="right-form">
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text" [formControl]="myForm.find('phone')" id="phone" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <select [formControl]="myForm.find('country')" id="country" #t (change)="onCountryChange(t.value)" class="form-control">
                            <option>USA</option>
                            <option>Italy</option>
                            <option>Brazil</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="city">City</label>
                        <input type="text" [formControl]="myForm.find('city')" id="city" class="form-control"/>
                    </div>
                    <div class="form-group" *ngIf="country!='' && country=='USA'">
                        <label for="state">State:</label>
                        <select [formControl]="myForm.find('state')" id="state" class="form-control">
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
                            <select id="title" [formControl]="myForm.find('title')" class="form-control">
                                <option>Analyst A1</option>
                                <option>Analyst A2</option>
                                <option>Consultant C1</option>
                                <option>Manager</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Has Direct Supervisor?</label>
                            <div class="radio-inline">
                                <label><input type="radio" name="hasManager" value="true" [formControl]="myForm.find('hasManager')" (click)="handleRadioChange(true,'hasManager')"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="hasManager" value="false" checked [formControl]="myForm.find('hasManager')" (click)="handleRadioChange(false,'hasManager')"/>No</label>
                            </div>
                        </div>
                        <div class="form-group" *ngIf="hasManager">
                            <label for="Manager">Manager</label>
                            <select id="manager" [formControl]="myForm.find('manager')" class="form-control" size="4">
                                <option *ngFor="let m of managers">{{m.firstName + " " + m.lastName}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-two">
                        <div class="form-group">
                            <label for="division">Division</label>
                            <select id="division" [formControl]="myForm.find('division')" class="form-control">
                                <option>Hyla Soft USA</option>
                                <option>Hyla Soft Italy</option>
                                <option>Hyla soft Brazil</option>
                            </select>
                        </div>
                        <div class="form-group">
                        <label>Manages Others?</label>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageEmployees" value="true" [formControl]="myForm.find('canManageEmployees')"(click)="handleRadioChange(true,'canManageEmployees')"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageEmployees" value="false" [formControl]="myForm.find('canManageEmployees')"  (click)="handleRadioChange(false,'canManageEmployees')" checked/>No</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-three">
                        <div class="form-group">
                            <label for="department">Department</label>
                            <select id="department" [formControl]="myForm.find('department')" class="form-control">
                                <option>Software</option>
                                <option>PLM</option>
                                <option>MES</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Manages Projects?</label>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageProjects" [formControl]="myForm.find('canManageProjects')" (click)="handleRadioChange(true,'canManageProjects')" value="true"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="canManageProjects" value="false" [formControl]="myForm.find('canManageProjects')"(click)="handleRadioChange(false,'canManageProjects')" checked/>No</label>
                            </div>
                        </div>
                    </div>
                </accordion-group>
                <accordion-group heading="Projects Managed" *ngIf="canManageProjects">
                        <div class="form-group">
                            <label for="projects">Project Manager For:</label>
                            <select id="projectsManaged" multiple class="form-control">
                                <option *ngFor="let p of projects" [value]="p._id">{{p.name}}</option>
                            </select>
                        </div>
                </accordion-group>
                <accordion-group heading="Employees" *ngIf="canManageEmployees">
                    <div class="form-group" *ngIf="canManageEmployees">
                            <label for="employees">Employees</label>
                            <select id="employees" multiple class="form-control">
                                <option *ngFor="let e of employees" [value]="e._id">{{e.firstName + " " + e.lastName}}</option>
                            </select>
                        </div>
                </accordion-group>
                <accordion-group heading="Projects">
                        <div class="form-group">
                            <label for="projects">Projects:</label>
                            <select id="projects"  multiple class="form-control">
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
        styles: [`
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
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, employee_service_1.EmployeeService, project_service_1.ProjectService, router_1.Router, error_service_1.ErrorService])
], NewEmployeeAdvanced);
exports.NewEmployeeAdvanced = NewEmployeeAdvanced;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL25ld2VtcGxveWVlYWR2YW5jZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsbUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsZ0NBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQseUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsa0NBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsd0JBQW9CLGtCQUFrQixDQUFDLENBQUE7QUFDdkMsMkJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBQ3BDLDJCQUF1QixzQkFBc0IsQ0FBQyxDQUFBO0FBQzlDLHdCQUFvQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RDLHdCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBMFYzRTtJQWNBLFlBQW9CLEdBQWUsRUFBUyxnQkFBZ0MsRUFBUyxlQUE4QixFQUFTLE9BQWMsRUFBUyxhQUE0QjtRQUEzSixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQjtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWi9LLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFFLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZ0IsR0FBQyxFQUFFLENBQUM7UUFDcEIsb0JBQWUsR0FBQyxFQUFFLENBQUM7UUFDbkIsc0JBQWlCLEdBQUMsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBRSxFQUFFLENBQUM7UUFDWCxjQUFT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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpUFI7UUFDRCxNQUFNLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWlHUCxDQUFDO0tBQ0wsQ0FBQzs7dUJBQUE7QUFDZSwyQkFBbUIsc0JBdUwvQixDQUFBIiwiZmlsZSI6ImVtcGxveWVlL25ld2VtcGxveWVlYWR2YW5jZWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi4vcHJvamVjdC9wcm9qZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSBcIi4uL3V0aWxpdHkvcXVlcnlcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtUcmFpbmluZ30gZnJvbSBcIi4uL3RyYWluaW5nL3RyYWluaW5nXCI7XHJcbmltcG9ydCB7U2tpbGx9IGZyb20gXCIuLi9za2lsbHMvc2tpbGxcIjtcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QWNjb3JkaW9uQ29tcG9uZW50R3JvdXB9IGZyb20gXCIuLi91dGlsaXR5L2FjY29yZGlvbmdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxpdHkvYWNjb3JkaW9uLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYWR2YW5jZWQtZW1wbG95ZWUtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgPGFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIlJlcXVpcmVkXCIgaXNPcGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiBpZD1cImZpcnN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiBpZD1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLVN0aWxsIG5lZWQgdG8gYWRkIGltYWdlIHVwbG9hZGluZyBjYXBhYmlsaXR5LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiPlBob25lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGhvbmUnKVwiIGlkPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRyeVwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnY291bnRyeScpXCIgaWQ9XCJjb3VudHJ5XCIgI3QgKGNoYW5nZSk9XCJvbkNvdW50cnlDaGFuZ2UodC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SXRhbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QnJhemlsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnY2l0eScpXCIgaWQ9XCJjaXR5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cImNvdW50cnkhPScnICYmIGNvdW50cnk9PSdVU0EnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0ZVwiPlN0YXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdzdGF0ZScpXCIgaWQ9XCJzdGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPklsbGlub2lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1pY2hpZ2FuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5vcnRoIENhcm9saW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldhc2hpbmd0b248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RmxvcmlkYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJFbXBsb3llZSBEYXRhIChvcHRpb25hbClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0aXRsZVwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgndGl0bGUnKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbmFseXN0IEExPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbmFseXN0IEEyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Db25zdWx0YW50IEMxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NYW5hZ2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SGFzIERpcmVjdCBTdXBlcnZpc29yPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaGFzTWFuYWdlclwiIHZhbHVlPVwidHJ1ZVwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnaGFzTWFuYWdlcicpXCIgKGNsaWNrKT1cImhhbmRsZVJhZGlvQ2hhbmdlKHRydWUsJ2hhc01hbmFnZXInKVwiLz5ZZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaGFzTWFuYWdlclwiIHZhbHVlPVwiZmFsc2VcIiBjaGVja2VkIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnaGFzTWFuYWdlcicpXCIgKGNsaWNrKT1cImhhbmRsZVJhZGlvQ2hhbmdlKGZhbHNlLCdoYXNNYW5hZ2VyJylcIi8+Tm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICpuZ0lmPVwiaGFzTWFuYWdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtYW5hZ2VyXCIgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdtYW5hZ2VyJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHNpemU9XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbSBvZiBtYW5hZ2Vyc1wiPnt7bS5maXJzdE5hbWUgKyBcIiBcIiArIG0ubGFzdE5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGl2aXNpb25cIj5EaXZpc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGl2aXNpb25cIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2RpdmlzaW9uJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SHlsYSBTb2Z0IFVTQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SHlsYSBTb2Z0IEl0YWx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IeWxhIHNvZnQgQnJhemlsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW5hZ2VzIE90aGVycz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhbk1hbmFnZUVtcGxveWVlc1wiIHZhbHVlPVwidHJ1ZVwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnY2FuTWFuYWdlRW1wbG95ZWVzJylcIihjbGljayk9XCJoYW5kbGVSYWRpb0NoYW5nZSh0cnVlLCdjYW5NYW5hZ2VFbXBsb3llZXMnKVwiLz5ZZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FuTWFuYWdlRW1wbG95ZWVzXCIgdmFsdWU9XCJmYWxzZVwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnY2FuTWFuYWdlRW1wbG95ZWVzJylcIiAgKGNsaWNrKT1cImhhbmRsZVJhZGlvQ2hhbmdlKGZhbHNlLCdjYW5NYW5hZ2VFbXBsb3llZXMnKVwiIGNoZWNrZWQvPk5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVwYXJ0bWVudFwiPkRlcGFydG1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImRlcGFydG1lbnRcIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2RlcGFydG1lbnQnKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb2Z0d2FyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UExNPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NRVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW5hZ2VzIFByb2plY3RzPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FuTWFuYWdlUHJvamVjdHNcIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2Nhbk1hbmFnZVByb2plY3RzJylcIiAoY2xpY2spPVwiaGFuZGxlUmFkaW9DaGFuZ2UodHJ1ZSwnY2FuTWFuYWdlUHJvamVjdHMnKVwiIHZhbHVlPVwidHJ1ZVwiLz5ZZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FuTWFuYWdlUHJvamVjdHNcIiB2YWx1ZT1cImZhbHNlXCIgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdjYW5NYW5hZ2VQcm9qZWN0cycpXCIoY2xpY2spPVwiaGFuZGxlUmFkaW9DaGFuZ2UoZmFsc2UsJ2Nhbk1hbmFnZVByb2plY3RzJylcIiBjaGVja2VkLz5ObzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIlByb2plY3RzIE1hbmFnZWRcIiAqbmdJZj1cImNhbk1hbmFnZVByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdHNcIj5Qcm9qZWN0IE1hbmFnZXIgRm9yOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJvamVjdHNNYW5hZ2VkXCIgbXVsdGlwbGUgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIHByb2plY3RzXCIgW3ZhbHVlXT1cInAuX2lkXCI+e3twLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJFbXBsb3llZXNcIiAqbmdJZj1cImNhbk1hbmFnZUVtcGxveWVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJjYW5NYW5hZ2VFbXBsb3llZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbXBsb3llZXNcIj5FbXBsb3llZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImVtcGxveWVlc1wiIG11bHRpcGxlIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZSBvZiBlbXBsb3llZXNcIiBbdmFsdWVdPVwiZS5faWRcIj57e2UuZmlyc3ROYW1lICsgXCIgXCIgKyBlLmxhc3ROYW1lfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiUHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0c1wiPlByb2plY3RzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJvamVjdHNcIiAgbXVsdGlwbGUgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIHByb2plY3RzXCIgW3ZhbHVlXT1cInAuX2lkXCI+e3twLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJSZXN1bWUgKG9wdGlvbmFsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmV2ZW4tY29sLW9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZFNraWxsXCI+U2tpbGwgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZFNraWxsXCIgaWQ9XCJhZGRTa2lsbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2tpbGxMZXZlbFwiIGlkPVwic2tpbGxMZXZlbExhYmVsXCI+U2tpbGwgTGV2ZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2tpbGxMZXZlbFwiIGlkPVwic2tpbGxMZXZlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJlZ2lubmVyXCI+QmVnaW5uZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZXJtZWRpYXRlXCI+SW50ZXJtZWRpYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFkdmFuY2VkXCI+QWR2YW5jZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5ldmVuLWNvbC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuIGRlZmF1bHQgY2VudGVyLWJsb2NrXCIgaWQ9XCJhZGRCdXR0b25cIihjbGljayk9XCJhZGRFbXBsb3llZVNraWxsKClcIj4mZ3Q7Jmd0OyZndDs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5ldmVuLWNvbC10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZGVkU2tpbGxzXCI+RW1wbG95ZWUgU2tpbGxzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLXN0cmlwZWRcIiBpZD1cInNraWxscy10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2tpbGwgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2tpbGwgTGV2ZWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcyBvZiBza2lsbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3MubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3MubGV2ZWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZVNraWxsKHMpXCI+WDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXN1bWVcIj5VcGxvYWQgUmVzdW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlbGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXRoXCI+RmlsZSBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cInJlc3VtZSBwYXRoXCIgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvd3NlIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiVHJhaW5pbmcgKG9wdGlvbmFsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1BbGxvdyBmb3IgdXBsb2FkaW5nIG9mIHRyYWluaW5nIGRvY3MtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tTWFrZSBhbiBpbnB1dCBmb3IgZGF0ZSBvZiB0cmFpbmluZy0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1NYWtlIGFuIGlucHV0IGZvciBsZW5ndGggb2YgdHJhaW5pbmctLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tTWFrZSBhbiBpbnB1dCBmb3IgbmFtZSBvZiB0cmFpbmluZy0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3ViamVjdFwiPlN1YmplY3Q6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN1YmplY3RcIiBuYW1lPVwic3ViamVjdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0cmFpbmluZy1vcmdhbml6YXRpb25cIj5Pcmdhbml6YXRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRyYWluaW5nLW9yZ2FuaXphdGlvblwiIG5hbWU9XCJ0cmFpbmluZy1vcmdhbml6YXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0cmFpbmluZy1kYXlzXCI+TGVuZ3RoOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwidHJhaW5pbmctZGF5c1wiIG5hbWU9XCJ0cmFpbmluZy1kYXlzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRyYWluaW5nLWRhdGVcIj5EYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInRyYWluaW5nLWRhdGVcIiBuYW1lPVwidHJhaW5pbmctZGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZyBjZW50ZXItYmxvY2tcIiAoY2xpY2spPVwiYWRkVHJhaW5pbmcoKVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZGVkVHJhaW5pbmdcIj5UcmFpbmluZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0cmFpbmluZy10YWJsZVwiIGNsYXNzPVwidGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdWJqZWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3JnYW5pemF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGVuZ3RoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgdCBvZiB0cmFpbmluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7dC5zdWJqZWN0fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0Lm9yZ2FuaXphdGlvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7dC5sZW5ndGh9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3QuZGF0ZS5nZXRZZWFyKCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlVHJhaW5pbmcodClcIj5YPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYWNjb3JkaW9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgY2VudGVyLWJsb2NrIHN1Ym1pdC1idXR0b25cIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOltgXHJcbiAgICAgICAgLmxlZnQtZm9ybXtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NDklO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC1mb3Jte1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6NDklO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtb25le1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDozMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtdHdve1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtdGhyZWV7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Ym1pdC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLm15LXdlbGx7XHJcbiAgICAgICAgICAgIGhlaWdodDo4LjVlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi1maWxle1xyXG4gICAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGQtYnRue1xyXG4gICAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuZXZlbi1jb2wtb25le1xyXG4gICAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51bmV2ZW4tY29sLXR3b3tcclxuICAgICAgICAgICAgd2lkdGg6MTAlO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudW5ldmVuLWNvbC10aHJlZXtcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2tpbGxMZXZlbExhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FkZEJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo0LjI1ZW1cclxuICAgICAgICB9XHJcbiAgICAgICAgI3RyYWluaW5nLXRhYmxle1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0cmFpbmluZy10YWJsZSA+IHRoe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGh7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2tpbGxzLXRhYmxle1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsZS13cmFwcGVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTBlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuICAgIGV4cG9ydCBjbGFzcyBOZXdFbXBsb3llZUFkdmFuY2VkIGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbXlGb3JtOkZvcm1Hcm91cDtcclxuICAgIGNvdW50cnk6U3RyaW5nPScnO1xyXG4gICAgY2FuTWFuYWdlRW1wbG95ZWVzID0gZmFsc2U7XHJcbiAgICBjYW5NYW5hZ2VQcm9qZWN0cyA9IGZhbHNlO1xyXG4gICAgaGFzTWFuYWdlciA9IGZhbHNlO1xyXG4gICAgbWFuYWdlcnM6RW1wbG95ZWVbXSA9IFtdO1xyXG4gICAgZW1wbG95ZWVzID1bXTtcclxuICAgIHByb2plY3RzID0gW107XHJcbiAgICBzZWxlY3RlZFByb2plY3RzPVtdO1xyXG4gICAgcHJvamVjdHNNYW5hZ2VkPVtdO1xyXG4gICAgc2VsZWN0ZWRFbXBsb3llZXM9W107XHJcbiAgICBza2lsbHMgPVtdO1xyXG4gICAgdHJhaW5pbmdzPVtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIscHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlOkVtcGxveWVlU2VydmljZSxwcml2YXRlIF9wcm9qZWN0U2VydmljZTpQcm9qZWN0U2VydmljZSxwcml2YXRlIF9yb3V0ZXI6Um91dGVyLHByaXZhdGUgX2Vycm9yU2VydmljZSA6IEVycm9yU2VydmljZSl7fVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKG5ldyBRdWVyeSgnY2FuTWFuYWdlRW1wbG95ZWVzJyx0cnVlKSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB0aGlzLm1hbmFnZXJzPXJlc3BvbnNlLFxyXG4gICAgICAgICAgICBlcnJvcj0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKG5ldyBRdWVyeShudWxsLG51bGwpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHRoaXMuZW1wbG95ZWVzPXJlc3BvbnNlLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5fcHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHRoaXMucHJvamVjdHM9cmVzcG9uc2UsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLm15Rm9ybT10aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZW1haWw6WycnLFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtYWlsXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgcGhvbmU6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb3VudHJ5OlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgY2l0eTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHN0YXRlOlsnJ10sXHJcbiAgICAgICAgICAgIHRpdGxlOlsnJ10sXHJcbiAgICAgICAgICAgIGRpdmlzaW9uOlsnJ10sXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6WycnXSxcclxuICAgICAgICAgICAgcHJvamVjdHM6IFsnJ10sXHJcbiAgICAgICAgICAgIGVtcGxveWVlczogWycnXSxcclxuICAgICAgICAgICAgbWFuYWdlcjogWycnXSxcclxuICAgICAgICAgICAgaGFzTWFuYWdlcjogWycnXSxcclxuICAgICAgICAgICAgY2FuTWFuYWdlRW1wbG95ZWVzOiBbJyddLFxyXG4gICAgICAgICAgICBjYW5NYW5hZ2VQcm9qZWN0czogWycnXSxcclxuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXJGb3I6IFsnJ11cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25Db3VudHJ5Q2hhbmdlKHZhbCl7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5PXZhbDtcclxuICAgIH1cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgaWYodGhpcy5teUZvcm0udmFsdWUuY2FuTWFuYWdlUHJvamVjdHMpIHtcclxuICAgICAgICAgICAgdmFyIG1hbmFnZWRQcm9qZWN0RWxlbWVudCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNNYW5hZ2VkJyk7XHJcbiAgICAgICAgICAgIGlmKHByb2pFbGVtZW50IT09bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBtYW5hZ2VkUHJvamVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPTxIVE1MT3B0aW9uRWxlbWVudD5tYW5hZ2VkUHJvamVjdEVsZW1lbnQub3B0aW9uc1t4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzTWFuYWdlZC5wdXNoKG9wdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHByb2pFbGVtZW50ID0gPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xyXG4gICAgICAgIGlmKHByb2pFbGVtZW50IT09bnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHByb2pFbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPTxIVE1MT3B0aW9uRWxlbWVudD5wcm9qRWxlbWVudC5vcHRpb25zW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdHMucHVzaChvcHRpb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5teUZvcm0udmFsdWUuY2FuTWFuYWdlRW1wbG95ZWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBlbXBFbGUgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtcGxveWVlcycpO1xyXG4gICAgICAgICAgICBpZihlbXBFbGUgIT09bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBlbXBFbGUubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gPEhUTUxPcHRpb25FbGVtZW50PmVtcEVsZS5vcHRpb25zW3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlcy5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVlID0gbmV3IEVtcGxveWVlKFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUucGhvbmUsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmNvdW50cnksXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmNpdHksXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnN0YXRlLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS50aXRsZSxcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZGl2aXNpb24sXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FuTWFuYWdlRW1wbG95ZWVzLFxyXG4gICAgICAgICAgICB0aGlzLmNhbk1hbmFnZVByb2plY3RzLFxyXG4gICAgICAgICAgICB0aGlzLmhhc01hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLm1hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZXMsXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0cyxcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0c01hbmFnZWQsXHJcbiAgICAgICAgICAgIHRoaXMudHJhaW5pbmdzLFxyXG4gICAgICAgICAgICB0aGlzLnNraWxsc1xyXG5cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5jcmVhdGVVc2VyKGVtcGxveWVlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9lbXBsb3llZS9saXN0JyksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGhhbmRsZVJhZGlvQ2hhbmdlKHZhbHVlLGZvckZpZWxkKXtcclxuICAgICAgICBpZihmb3JGaWVsZD09XCJjYW5NYW5hZ2VFbXBsb3llZXNcIil7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuTWFuYWdlRW1wbG95ZWVzPXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmb3JGaWVsZD09XCJjYW5NYW5hZ2VQcm9qZWN0c1wiKXtcclxuICAgICAgICAgICAgdGhpcy5jYW5NYW5hZ2VQcm9qZWN0cz12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZm9yRmllbGQ9PVwiaGFzTWFuYWdlclwiKXtcclxuICAgICAgICAgICAgdGhpcy5oYXNNYW5hZ2VyPXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZEVtcGxveWVlU2tpbGwoKXtcclxuICAgICAgICB2YXIgbmFtZUVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFNraWxsJyk7XHJcbiAgICAgICAgdmFyIG5hbWU9bmFtZUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgdmFyIGxldmVsRWxlbWVudD08SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NraWxsTGV2ZWwnKTtcclxuICAgICAgICB2YXIgc2tpbGxPcHQgPSA8SFRNTE9wdGlvbkVsZW1lbnQ+bGV2ZWxFbGVtZW50LnNlbGVjdGVkT3B0aW9uc1swXTtcclxuICAgICAgICB2YXIgbGV2ZWw9c2tpbGxPcHQudmFsdWU7XHJcbiAgICAgICAgdmFyIHNraWxsPW5ldyBTa2lsbChuYW1lLGxldmVsKTtcclxuICAgICAgICB0aGlzLnNraWxscy5wdXNoKHNraWxsKTtcclxuICAgICAgICBuYW1lRWxlbWVudC52YWx1ZT1cIlwiO1xyXG4gICAgICAgIGxldmVsRWxlbWVudC5zZWxlY3RlZEluZGV4PTA7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbCA6IEZvcm1Db250cm9sKToge1tzOnN0cmluZ106Ym9vbGVhbn17XHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/XCIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDp0cnVlfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZFRyYWluaW5nKCl7XHJcbiAgICAgICAgLypnZXQgdGhlIGZpZWxkcyovXHJcbiAgICAgICAgbGV0IHN1YmplY3RFbGU9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0Jyk7XHJcbiAgICAgICAgbGV0IG9yZ0VsZSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFpbmluZy1vcmdhbml6YXRpb24nKTtcclxuICAgICAgICBsZXQgbGVuZ3RoRWxlID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWluaW5nLWRheXMnKTtcclxuICAgICAgICBsZXQgZGF0ZUVsZSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFpbmluZy1kYXRlJyk7XHJcblxyXG4gICAgICAgIC8qZ2V0IHRoZSB2YWx1ZXMqL1xyXG4gICAgICAgIGxldCBzdWJqZWN0PXN1YmplY3RFbGUudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJqZWN0OlwiK3N1YmplY3QpO1xyXG4gICAgICAgIGxldCBvcmcgPSBvcmdFbGUudmFsdWU7XHJcbiAgICAgICAgbGV0IGxlbmd0aD1sZW5ndGhFbGUudmFsdWU7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRlRWxlLnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGhlIHRyYWluaW5nIG9iamVjdFxyXG4gICAgICAgIGxldCB0cmFpbmluZz1uZXcgVHJhaW5pbmcoc3ViamVjdCxvcmcscGFyc2VJbnQobGVuZ3RoKSxkYXRlKTtcclxuXHJcbiAgICAgICAgLy9hZGQgdHJhaW5pbmcgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgdGhpcy50cmFpbmluZ3MucHVzaCh0cmFpbmluZyk7XHJcblxyXG4gICAgICAgIC8vY2xlYXIgZm9ybSB2YWx1ZXNcclxuICAgICAgICBzdWJqZWN0RWxlLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgb3JnRWxlLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgbGVuZ3RoRWxlLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgZGF0ZUVsZS52YWx1ZT1cIlwiO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVHJhaW5pbmcoZWxlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGUpO1xyXG4gICAgICAgIGZvcihsZXQgeD0wO3g8dGhpcy50cmFpbmluZ3MubGVuZ3RoO3grKyl7XHJcbiAgICAgICAgICAgIGlmKGVsZT09PXRoaXMudHJhaW5pbmdzW3hdKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhaW5pbmdzLnNwbGljZSh4LDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlU2tpbGwoZWxlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGUpO1xyXG4gICAgICAgIGZvcihsZXQgeD0wO3g8dGhpcy5za2lsbHMubGVuZ3RoO3grKyl7XHJcbiAgICAgICAgICAgIGlmKGVsZT09dGhpcy5za2lsbHNbeF0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbHMuc3BsaWNlKHgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
