import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";
import {AccordionComponentGroup} from "../utility/accordiongroup.component";
import {AccordionComponent} from "../utility/accordion.component";
@Component({
    selector: 'edit-employee-component',
    template:`
        <form [ngFormModel]="myForm" (ngSubmit)="OnSubmit()">
            <accordion>
                <accordion-group heading="Basic Details">
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
                </div>
                <div class="right-form">
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
                </accordion-group>
                <accordion-group heading="Add/Remove Employees">
                    <div class="left-form">
                    
                    </div>
                    <div class="right-form">
                    
                    </div>
                    
                </accordion-group>
                <accordion-group heading="Add/Remove Projects">
                
                </accordion-group>
                <accordion-group heading="Add/Remove Skills/Edit Resume">
                
                </accordion-group>
                <accordion-group heading="Add/Remove Training">
                
                </accordion-group>
                <accordion-group heading="Edit Benefits">
                
                </accordion-group>
                <accordion-group heading="Add/Remove Notes">
                
                </accordion-group>
                
            </accordion>
        
        </form>
    `,
    directives:[AccordionComponent,AccordionComponentGroup],
    styles:[
        `
            .left-form{
                width:45%;
                float:left;
            }
            .right-form{
                width:45%;
                width:45%;
                float:right;
            }
        `
    ]
})
export class EditEmployeeComponent implements OnInit{
 myForm:ControlGroup;
    country:String='';
    constructor(private _fb : FormBuilder){}
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
            manager: ['']
        });
    }
    private isEmail(control : Control): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }
    onCountryChange(val){
        this.country=val;
        console.log(val);
    }
}