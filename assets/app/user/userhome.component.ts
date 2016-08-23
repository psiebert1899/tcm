
import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {ApplicationUser} from "./applicationuser";
import {ErrorService} from "../errors/error.service";
import {UserProfilePanelComponent} from "./userprofilepanel.component";
import {UserDataPanelComponent} from "./userdatapanel.component";
import {UserOverviewComponent} from "./useroverview.component";
import {UserEmployeeComponent} from "./useremployee.component";
import {Routes} from "@angular/router";
import {EmployeeProjectsComponent} from "./employeeprojects.component";
import {EmployeeResumeComponent} from "./employeeresume.component";
import {EmployeeTrainingComponent} from "./employeetraining.component";
import {EmployeeBenefitsComponent} from "./employeebenefits.component";
import {EmployeeNotesComponent} from "./employeenotes.component";
@Component({
    selector: "my-userhome",
    template: `
        <div *ngIf="dataLoaded">
            <div class="row">
               <my-user-profile-panel [appUser]="appUser"></my-user-profile-panel>
            </div>
                <my-user-data-panel [appUser]="appUser"></my-user-data-panel>
        </div>
    `
})

export class UserHomeComponent implements OnInit {
    appUser: ApplicationUser;
    public dataLoaded;
    constructor(private _userService: UserService, private _errorService: ErrorService) {
        this.dataLoaded = false;
    }
    ngOnInit() {
      if (localStorage.getItem("token") != null) {
       this._userService.getUser().subscribe(
           data => {
               this.appUser = data;
               this.dataLoaded = true;
           },
           error => {
               this._errorService.handleError(error);
           });
        } else {
            this.appUser = this._userService.user;
        }

    }
    getAppUser() {
        return this._userService.user;
    }

}
