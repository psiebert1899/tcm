import {Component} from "@angular/core";
import {ProjectDisplayComponent} from "./projectdisplay.component";
import {ProjectService} from "./project.service";
import {Project} from "./project";
@Component({
    selector:'my-project-list',
    template:`
    <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-project-display *ngFor="let p of projects" [project]="p"></my-project-display>
            </div>
    </section>
    `,
    directives:[ProjectDisplayComponent]
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