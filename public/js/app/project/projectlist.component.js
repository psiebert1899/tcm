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
var core_1 = require("@angular/core");
var projectdisplay_component_1 = require("./projectdisplay.component");
var project_service_1 = require("./project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(_projectService) {
        this._projectService = _projectService;
        this.dataLoaded = false;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getProjects().subscribe(function (projects) {
            _this.projects = projects;
            _this._projectService.projects = projects;
            _this.dataLoaded = true;
        }, function (error) { return console.log(error); });
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: 'my-project-list',
            template: "\n    <section class=\"col-md-12\" *ngIf=\"dataLoaded\">\n            <div class=\"container-fluid\">\n                <my-project-display *ngFor=\"let p of projects\" [project]=\"p\"></my-project-display>\n            </div>\n    </section>\n    ",
            directives: [projectdisplay_component_1.ProjectDisplayComponent]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFhakQ7SUFDSSw4QkFBb0IsZUFBOEI7UUFBOUIsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFFbEQsZUFBVSxHQUFFLEtBQUssQ0FBQztJQUZrQyxDQUFDO0lBR3JELHVDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUN4QyxVQUFBLFFBQVE7WUFDSixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekMsS0FBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtJQUNMLENBQUM7SUF4Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLGlCQUFpQjtZQUMxQixRQUFRLEVBQUMseVBBTVI7WUFDRCxVQUFVLEVBQUMsQ0FBQyxrREFBdUIsQ0FBQztTQUN2QyxDQUFDOzs0QkFBQTtJQWVGLDJCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw0QkFBb0IsdUJBY2hDLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0bGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9qZWN0RGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdGRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuL3Byb2plY3Quc2VydmljZVwiO1xyXG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbXktcHJvamVjdC1saXN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJkYXRhTG9hZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxteS1wcm9qZWN0LWRpc3BsYXkgKm5nRm9yPVwibGV0IHAgb2YgcHJvamVjdHNcIiBbcHJvamVjdF09XCJwXCI+PC9teS1wcm9qZWN0LWRpc3BsYXk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W1Byb2plY3REaXNwbGF5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3RDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm9qZWN0U2VydmljZTpQcm9qZWN0U2VydmljZSl7fVxyXG4gICAgcHJvamVjdHM6IFByb2plY3RbXTtcclxuICAgIGRhdGFMb2FkZWQgPWZhbHNlO1xyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0U2VydmljZS5nZXRQcm9qZWN0cygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcHJvamVjdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvamVjdFNlcnZpY2UucHJvamVjdHMgPSBwcm9qZWN0cztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZD10cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
