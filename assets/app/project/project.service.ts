import {Project} from "./project";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";

@Injectable()
export class ProjectService{
    projects : Project[];
    constructor(private _http : Http){}
    getProjects(){
        return this._http.get('http://localhost:3000/project').map(
            response =>{
                const data = response.json().obj;
                let projects = [];
                for(let x=0;x<data.length;x++){
                    let project = new Project(
                        data[x].organization,
                        data[x].name,
                        data[x].image,
                        data[x].manager,
                        data[x]._id
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
        return this._http.post('http://localhost:3000/project',body,{headers:headers}).map(
            response => response.json()
        ).catch(error => Observable.throw(error.json()));
    }
    editProject(){

    }
    deleteProject(){

    }
}