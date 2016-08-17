import {Component, Input} from "@angular/core";
import {ApplicationUser} from "./applicationuser";
import {UserService} from "./user.service";
import {ErrorService} from "../errors/error.service";
@Component({
    selector: "my-user-profile-panel",
    template: `
        <div class="col-md-12">
            <div class="container-fluid">
                 <div class="col-md-2">
                    <div class="thumbnail">
                        <img src="{{appUser?.image}}" class="img img-responsive">
                    </div>
                </div>
                <div class="col-md-6">
                    <h1>{{appUser?.firstName +" " + appUser?.lastName}}</h1>
                    <h4>Hyla-Soft USA - Software Development</h4>
                    <p>{{appUser?.email}}</p>
                    <p>(312)391-9066</p>
                    <p>Raliegh, NC - USA</p>
                </div>
                <div class="col-md-4">
                    <ul class="list-group" id="mylist">
                        <li class="list-group-item">Title: <span class="right-align">Senior IT Analyst</span></li>
                        <li class="list-group-item">Manager:<a href="#" class="right-align">Jason McDonald</a></li>
                        <li class="list-group-item">Employees: <span class="badge">0</span></li>
                        <li class="list-group-item">Projects: <span class="badge">1</span></li>
                        <li class="list-group-item">Avaliability: <span class="badge">0%</span></li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [`
      #mylist{
            font-size: 1.5em;
      }
      .right-align{
        float:right;
      }
    `]
})
export class UserProfilePanelComponent {
    @Input() appUser: ApplicationUser;
    constructor(private _userService: UserService, private _errorService: ErrorService) {}
}
