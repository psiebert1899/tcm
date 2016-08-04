import {Project} from "./project";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";

@Injectable()
export class ProjectService{
    constructor(private _http : Http){}
    getProjects(){
        return this._http.get('http://localhost:3000/projects').map(
            response =>{
                const data = response.json().obj;
                let projects = [];
                for(let x=0;x<data.length;x++){
                    let project = new Project(
                        data[x].organization,
                        data[x].name,
                        data[x].image,
                        data[x].manager
                    )
                    projects.push(project);
                }
                return projects;
            }
        ).catch(error => Observable.throw(error.json()));
    }
    getProject(name:string){

    }
    newProject(project:Project){
        const body = JSON.stringify(project);
        const headers=new Headers({'Content-Type' : 'application/json'});
        return this._http.post('http://localhost:3000/projects',body,headers).map(
            response => response.json()
        ).catch(error => Observable.throw(error.json()));
    }
    editProject(){

    }
    deleteProject(){

    }
}