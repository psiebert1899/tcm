import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {ErrorService} from "../errors/error.service";
import {User} from "./user";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
@Component({
	selector: 'registration-form',
  	template: `
  		<div>    
            <button id="register"  class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#myModal">Register Now</button>
        </div>

        <div #myModal class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  			<div class="modal-dialog" role="document">
    			<div class="modal-content">
      				<form id="myForm" [formGroup]="myForm">
      					<div class="modal-header">
        					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        					<h4 class="modal-title" id="myModalLabel">Registration Form</h4>
      					</div>
      					<div class="modal-body">
                			<div class="form-group">
                    			<label for="firstName">First Name:</label>
                    			<input type="text" [formControl]="myForm.find('firstName')" id="firstName" class="form-control"/>
                			</div>
                			<div class="form-group">
                    			<label for="lastName">Last Name</label>
                    			<input type="text" [formControl]="myForm.find('lastName')" id="lastName" class="form-control"/>
                			</div>
                			<div class="form-group">
                    			<label for="email">Email:</label>
                    			<input type="email" [formControl]="myForm.find('email')" id="email" class="form-control" />
                			</div>
                			<div class="form-group">
                    			<label for="password">Password</label>
                    			<input type="password" [formControl]="myForm.find('password')" id="password" class="form-control" />
                			</div>
                			
            			
      					</div>
      					<div class="modal-footer">
      						<button type="button" class="btn btn-primary" [disabled]="!myForm.valid" (click)="onSubmit()" data-dismiss="modal">Sign Up</button>
        					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>        				
      					</div>
      				</form>
    			</div>
  			</div>
		</div>
  	`
})

export class SignupformComponent{
	myForm:FormGroup;
	@ViewChild('myModal') myModal: ElementRef;
	
	constructor(private _fb:FormBuilder,private _authService:AuthenticationService,private _errorService: ErrorService){}

	onSubmit(){
        const user  = new User(this.myForm.value.email,this.myForm.value.password,this.myForm.value.firstName,this.myForm.value.lastName);
        this._authService.signup(user).subscribe(
            data => console.log(data),
            error => this._errorService.handleError(error)
        );
        
        
    }

	ngOnInit(){
		this.myForm = this._fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.required,
				this.isEmail
			])],
			password: ['', Validators.required]
		});
	}

	private isEmail(control : FormControl): {[s:string]:boolean}{
        if(!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")){
            return {invalidMail:true}
        }
    }
}