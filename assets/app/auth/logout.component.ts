import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";
@Component({
    selector: "my-logout",
    template: `
        <h1>You are now logged out (add redirect logic here)</h1>
    `
})
export class LogoutComponent implements OnInit {

    constructor(private _authService: AuthenticationService, private _router: Router, private _userService: UserService) {}
    ngOnInit() {
        if (this._authService.isLoggedIn()) {
            this._userService.user = null;
            this._authService.logout();
            this._router.navigateByUrl("/");
        }
    }
}
