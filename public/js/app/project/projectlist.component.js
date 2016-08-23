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
const projectdisplay_component_1 = require("./projectdisplay.component");
const project_service_1 = require("./project.service");
let ProjectListComponent = class ProjectListComponent {
    constructor(_projectService) {
        this._projectService = _projectService;
        this.dataLoaded = false;
    }
    ngOnInit() {
        this._projectService.getProjects().subscribe(projects => {
            this.projects = projects;
            this._projectService.projects = projects;
            this.dataLoaded = true;
        }, error => console.log(error));
    }
};
ProjectListComponent = __decorate([
    core_1.Component({
        selector: 'my-project-list',
        template: `
    <h1>Project List</h1>
    <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-project-display *ngFor="let p of projects" [project]="p"></my-project-display>
            </div>
    </section>
    `,
        directives: [projectdisplay_component_1.ProjectDisplayComponent],
        styles: [`
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
    }), 
    __metadata('design:paramtypes', [project_service_1.ProjectService])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsMkNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsa0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUF5QmpEO0lBQ0ksWUFBb0IsZUFBOEI7UUFBOUIsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFFbEQsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUZrQyxDQUFDO0lBR3JELFFBQVE7UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FDeEMsUUFBUTtZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQXJDRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsaUJBQWlCO1FBQzFCLFFBQVEsRUFBQzs7Ozs7OztLQU9SO1FBQ0QsVUFBVSxFQUFDLENBQUMsa0RBQXVCLENBQUM7UUFDcEMsTUFBTSxFQUFDLENBQUM7Ozs7Ozs7Ozs7S0FVUCxDQUFDO0tBQ0wsQ0FBQzs7d0JBQUE7QUFDVyw0QkFBb0IsdUJBY2hDLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0bGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9qZWN0RGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdGRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuL3Byb2plY3Quc2VydmljZVwiO1xyXG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbXktcHJvamVjdC1saXN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxoMT5Qcm9qZWN0IExpc3Q8L2gxPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtMTJcIiAqbmdJZj1cImRhdGFMb2FkZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPG15LXByb2plY3QtZGlzcGxheSAqbmdGb3I9XCJsZXQgcCBvZiBwcm9qZWN0c1wiIFtwcm9qZWN0XT1cInBcIj48L215LXByb2plY3QtZGlzcGxheT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczpbUHJvamVjdERpc3BsYXlDb21wb25lbnRdLFxyXG4gICAgc3R5bGVzOltgXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Byb2plY3RTZXJ2aWNlOlByb2plY3RTZXJ2aWNlKXt9XHJcbiAgICBwcm9qZWN0czogUHJvamVjdFtdO1xyXG4gICAgZGF0YUxvYWRlZCA9ZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RTZXJ2aWNlLmdldFByb2plY3RzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwcm9qZWN0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9qZWN0U2VydmljZS5wcm9qZWN0cyA9IHByb2plY3RzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGVkPXRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
