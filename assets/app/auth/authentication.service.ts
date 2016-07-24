import {Http, Headers} from "@angular/http";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthenticationService{
    constructor(private _http : Http){}
    signup(user:User){
        const body=JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/user',body,{headers:headers})
            .map(response => response.json())
            .catch(error =>Observable.throw(error.json()))
    }
    signin(user: User){
        const body=JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/user/signin',body,{headers:headers})
            .map(response => response.json())
            .catch(error =>Observable.throw(error.json()))
    }
    logout(){
        localStorage.clear();
    }
    isLoggedIn(){
        return localStorage.getItem('token')!== null;
    }
}