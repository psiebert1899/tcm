import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";
import {Router} from "@angular/router";
import {User} from "./user";
import {ErrorService} from "../errors/error.service";
import {AuthenticationService} from "./authentication.service";
@Component({
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" class="form-control" [ngFormControl]="myForm.find('email')"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" [ngFormControl]="myForm.find('password')"/>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
            </form>            
        </section>
    `
})
export class SigninComponent implements OnInit{
    myForm:ControlGroup;

    constructor(private _fb:FormBuilder, private _authService:AuthenticationService,private _router :Router,private _errorService:ErrorService){}

    onSubmit(){
        const user:User = new User(this.myForm.value.email,this.myForm.value.password);
        this._authService.signin(user).subscribe(
            data => {
                localStorage.setItem('token',data.obj);
                localStorage.setItem('userId',data.userId);
                this._router.navigateByUrl('/');
            },
            error => {
                this._errorService.handleError(error);
                console.log(error);
            }
        )
    }

    ngOnInit(){
        this.myForm = this._fb.group({
            email: ['',Validators.compose([
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