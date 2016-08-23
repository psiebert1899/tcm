"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const project_1 = require("./project");
const project_service_1 = require("./project.service");
let ProjectDisplayComponent = class ProjectDisplayComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', project_1.Project)
], ProjectDisplayComponent.prototype, "project", void 0);
ProjectDisplayComponent = __decorate([
    core_1.Component({
        selector: `my-project-display`,
        template: `        
        <div class="col-md-2" (click)="employeeClicked()">
            <div class="thumbnail">
                <img src="{{project.image}}" class="img img-responsive"/>
                <h3>{{project.name}}</h3>
                <h5>{{project.organization}}</h5>
            </div>
        </div>
        `,
        styles: [`
        h3{
            text-align:center;
        }
        h5{
            text-align:center;
        }
    `]
    }), 
    __metadata('design:paramtypes', [project_service_1.ProjectService])
], ProjectDisplayComponent);
exports.ProjectDisplayComponent = ProjectDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdGRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsMEJBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGtDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBcUJqRDtJQUVJLFlBQW9CLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQUUsQ0FBQztBQUN4RCxDQUFDO0FBRkQ7SUFBQyxZQUFLLEVBQUU7O3dEQUFBO0FBckJSO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFOzs7Ozs7OztTQVFMO1FBQ0wsTUFBTSxFQUFDLENBQUM7Ozs7Ozs7S0FPUCxDQUFDO0tBQ0wsQ0FBQzs7MkJBQUE7QUFDVywrQkFBdUIsMEJBR25DLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0ZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi9wcm9qZWN0LnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogYG15LXByb2plY3QtZGlzcGxheWAsXHJcbiAgICB0ZW1wbGF0ZTogYCAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCIgKGNsaWNrKT1cImVtcGxveWVlQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3twcm9qZWN0LmltYWdlfX1cIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICAgIDxoMz57e3Byb2plY3QubmFtZX19PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoNT57e3Byb2plY3Qub3JnYW5pemF0aW9ufX08L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgLFxyXG4gICAgc3R5bGVzOltgXHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3REaXNwbGF5Q29tcG9uZW50e1xyXG5ASW5wdXQoKSBwcm9qZWN0OlByb2plY3Q7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2plY3RTZXJ2aWNlOlByb2plY3RTZXJ2aWNlKXt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
