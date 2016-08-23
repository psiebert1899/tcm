import {Component, Input} from "@angular/core";
import {ApplicationUser} from "./applicationuser";
import {UserService} from "./user.service";
import {ErrorService} from "../errors/error.service";
@Component({
    selector: "my-user-data-panel",
    template: `
        <div class="row" *ngIf="appUser!=null">
            <div class="col-md-12">
                <ul class="nav nav-tabs">
                    <li class="active"><a [routerLink]="['./overview']">Overview</a></li>
                    <li><a [routerLink]="['./employee']">Employees</a></li>
                    <li><a [routerLink]="['./projects']">Projects</a></li>
                    <li><a [routerLink]="['./resume']">Resume</a></li>
                    <li><a [routerLink]="['./training']">Training</a></li>
                    <li><a [routerLink]="['./benefits']">Benefits</a></li>
                    <li><a [routerLink]="['./notes']">Notes</a></li>
                </ul>
            </div>
         </div>
         <div class="row">
            <div class="col-md-10 panel panel-default">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class UserDataPanelComponent {
@Input() appUser: ApplicationUser;
    constructor(private _userService: UserService, private _errorService: ErrorService) {}
}
