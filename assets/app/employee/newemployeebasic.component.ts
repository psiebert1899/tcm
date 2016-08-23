import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {Router} from "@angular/router";
import {ErrorService} from "../errors/error.service";
import {Employee} from "./employee";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
@Component({
    selector:'my-basic-employee-form',
    template:`
        <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div class="col-md-12 form-container">
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
                                <label><input type="radio" name="hasManager" value="true"  (click)="handleRadioChange(true,'hasManager')"/>Yes</label>
                            </div>
                            <div class="radio-inline">
                                <label><input type="radio" name="hasManager" value="false" checked  (click)="handleRadioChange(false,'hasManager')"/>No</label>
                            </div>
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
                            <label><input type="radio" name="canManageEmployees" value="true" (click)="handleRadioChange(true,'canManageEmployees')"/>Yes</label>
                        </div>
                        <div class="radio-inline">
                            <label><input type="radio" name="canManageEmployees" value="false"   (click)="handleRadioChange(false,'canManageEmployees')" checked/>No</label>
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
                            <label><input type="radio" name="canManageProjects"  (click)="handleRadioChange(true,'canManageProjects')" value="true"/>Yes</label>
                        </div>
                        <div class="radio-inline">
                            <label><input type="radio" name="canManageProjects" value="false" (click)="handleRadioChange(false,'canManageProjects')" checked/>No</label>
                        </div>
                    </div>
                </div>
        </div>
        <div class="col-md-12 button-container">
            <button class="btn btn-primary btn-lg center-block">Submit</button>
        </div>
        </form>

    `,
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
        .form-container{
            background-color:#eee;
            border-top-right-radius: 5px;
            padding-top:2em;
        }
        .btn-lg{
            width:100%;
        }
        .button-container{
            padding:0;
            background-color:#eee;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    `]
})
export class NewEmployeeBasic implements OnInit{
    myForm:FormGroup;
    country:String='';
    canManageEmployees = false;
    canManageProjects = false;
    hasManager = false;
    constructor(private _fb:FormBuilder,private _employeeService:EmployeeService, private _router:Router, private _errorService:ErrorService){}
    ngOnInit(){
        this.myForm=this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            phone: ['', Validators.required],
            country: ['', Validators.required],
            city: ['', Validators.required],
            state: [''],
            title: [''],
            division: [''],
            department: ['']
        });
    }
    private isEmail(control : FormControl): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
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
    onSubmit(){
        const employee=new Employee(
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
            this.canManageEmployees,
            this.canManageProjects,
            this.hasManager
        );
        this._employeeService.createUser(employee).subscribe(
            data => this._router.navigateByUrl('/employee/list'),
            error => console.log(error)
        )
    }
    onCountryChange(val){
        this.country=val;
    }
}
