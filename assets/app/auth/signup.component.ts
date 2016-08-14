import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";
import {AuthenticationService} from "./authentication.service";
import {ErrorService} from "../errors/error.service";
import {User} from "./user";
import {SignupformComponent} from "./signupform.component";
@Component({
    selector : 'my-signup',
    template:`
        <section class="col-md-8 col-md-offset-2">
              
            <registration-form></registration-form> 
            
        </section>
    `,
    directives: [SignupformComponent]
})
export class SignupComponent implements OnInit{
    ngOnInit(){
        
    }
}