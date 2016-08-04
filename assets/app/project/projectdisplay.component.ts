import {Component, Input} from "@angular/core";
import {Project} from "./project";
import {ProjectService} from "./project.service";
@Component({
    selector: `my-project-display`,
    template: `        
        <div class="col-md-3" (click)="employeeClicked()">
            <div class="thumbnail">
                <img src="{{project.image}}" class="img img-responsive"/>
                <h3>{{project.name}}</h3>
                <h5>{{project.organization}}</h5>
            </div>
        </div>
        `,
    styles:[`
        h3{
            text-align:center;
        }
        h5{
            text-align:center;
        }
    `]
})
export class ProjectDisplayComponent{
@Input() project:Project;
    constructor(private projectService:ProjectService){}
}