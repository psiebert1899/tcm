import {Component} from "@angular/core";
import {ProjectDisplayComponent} from "./projectdisplay.component";
import {ProjectService} from "./project.service";
import {Project} from "./project";
@Component({
    selector:'my-project-list',
    template:`
    <h1>Project List</h1>
    <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-project-display *ngFor="let p of projects" [project]="p"></my-project-display>
            </div>
    </section>
    `,
    directives:[ProjectDisplayComponent],
    styles:[`
        h1{
            color:white;
            font-family: OpenSans;
        }
        .col-md-12{
            background-color:white;
            padding-top:25px;
            border-radius:5px;
        }
    `]
})
export class ProjectListComponent{
    constructor(private _projectService:ProjectService){}
    projects: Project[];
    dataLoaded =false;
    ngOnInit(){
        this._projectService.getProjects().subscribe(
            projects => {
                this.projects = projects;
                this._projectService.projects = projects;
                this.dataLoaded=true;
            },
            error => console.log(error)
        )
    }
}