import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {ApplicationUser} from "./applicationuser";
import {AuthenticationService} from "../auth/authentication.service";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class UserService{
    public user : ApplicationUser;
    broadcastUser = new EventEmitter<ApplicationUser>();
    constructor(private _http : Http){}
    public getUser(){
        const headers = new Headers({'Content-Type' : 'application/json'});
        const token = localStorage.getItem('token')?'&token='+localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/appUser/'+'?appId='+localStorage.getItem('appUser')+token,'',{headers : headers}).map(
            response => {
                const data = response.json().obj;
                var appUser = new ApplicationUser(data.email, data.firstName, data.lastName,data.image,data.userId,null,null);
                this.user= appUser;
                this.broadcastUser.emit(appUser);
                return appUser;
            }
        )
    }
}