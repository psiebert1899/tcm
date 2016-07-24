import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";
import {AuthenticationService} from "./authentication.service";
import {ErrorService} from "../errors/error.service";
import {User} from "./user";
@Component({
    selector : 'my-signup',
    template:`
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" [ngFormControl]="myForm.find('firstName')" id="firstName" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" [ngFormControl]="myForm.find('lastName')" id="lastName" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" [ngFormControl]="myForm.find('email')" id="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" [ngFormControl]="myForm.find('password')" id="password" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
            </form>
        </section>
    `
})
export class SignupComponent implements OnInit{
    myForm:ControlGroup;
    constructor(private _fb:FormBuilder,private _authService:AuthenticationService,private _errorService: ErrorService){}
    onSubmit(){
        const user  = new User(this.myForm.value.email,this.myForm.value.password,this.myForm.value.firstName,this.myForm.value.lastName);
        this._authService.signup(user).subscribe(
            data => console.log(data),
            error => this._errorService.handleError(error)
        );
    }
    ngOnInit(){
        this.myForm=this._fb.group({
            firstName:['',Validators.required],
            lastName: ['',Validators.required],
            email : ['',Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['',Validators.required]
        });
    }
    private isEmail(control : Control): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }

}