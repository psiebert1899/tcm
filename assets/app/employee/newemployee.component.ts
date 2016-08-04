import {Component, OnInit} from "@angular/core";
import {ErrorService} from "../errors/error.service";
import {EmployeeService} from "./employee.service";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
import {AccordionComponentGroup} from "../utility/accordiongroup.component";
import {AccordionComponent} from "../utility/accordion.component";
import {Employee} from "./employee";
@Component({
    selector: "my-new-employee",
    template:`
        <h1>New Employee</h1>
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
                    <div class="left-form">
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
                            <label for="division">Division</label>
                            <select id="division" [ngFormControl]="myForm.find('division')" class="form-control">
                                <option>Hyla Soft USA</option>
                                <option>Hyla Soft Italy</option>
                                <option>Hyla soft Brazil</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="department">Department</label>
                            <select id="department" [ngFormControl]="myForm.find('department')" class="form-control">
                                <option>Software</option>
                                <option>PLM</option>
                                <option>MES</option>
                            </select>
                        </div>
                                                <div class="form-group">
                            <label for="Manager">Manager</label>
                            <select id="manager" [ngFormControl]="myForm.find('manager')" class="form-control">
                                <option>Unassigned</option>
                                <option>David Kaparis</option>
                                <option>Ettore Soldi</option>
                                <option>Jason McDonald</option>
                            </select>
                        </div>
                    </div>
                    <div class="right-form">
                        <div class="form-group">
                            <label for="employees">Employees</label>
                            <select id="employees" [ngFormControl]="myForm.find('employees')" multiple class="form-control">
                                <option>Paul Siebert</option>
                                <option>Casey Townsend</option>
                                <option>Jon Netzky</option>
                                <option>Dario Casula</option>
                                <option>Logan Habben</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="projects">Projects</label>
                            <select id="projects" [ngFormControl]="myForm.find('projects')" multiple class="form-control">
                                <option>Kuka</option>
                                <option>Monsanto</option>
                                <option>Williams</option>
                            </select>
                        </div>
                    </div>
                </accordion-group>
                <accordion-group heading="Resume (optional)"><h1>Resume Upload Capability & skills section</h1></accordion-group>
                <accordion-group heading="Training (optional)"><h1>Training and Info</h1></accordion-group>
                <accordion-group heading="Benefits (optional)"><h1>Benefits information</h1></accordion-group>
            </accordion>
            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
        </form>
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
    `]
})
export class NewEmployeeComponent implements OnInit{
    myForm:ControlGroup;
    country:String='';
    constructor(private _fb:FormBuilder,private _employeeService:EmployeeService,private _errorService : ErrorService){}
    ngOnInit(){
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
            manager: ['']
        })
    }
    onCountryChange(val){
        this.country=val;
        console.log(val);
    }
    onSubmit(){
        console.log('submitted');
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
            this.myForm.value.employees,
            this.myForm.value.projects
        );
        console.log(employee);
        this._employeeService.createUser(employee).subscribe(
            data => console.log(data),
            error => console.log(error)
        )
    }
    private isEmail(control : Control): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }

}