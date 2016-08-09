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
            template: "\n    <h1>Project List</h1>\n    <section class=\"col-md-12\" *ngIf=\"dataLoaded\">\n            <div class=\"container-fluid\">\n                <my-project-display *ngFor=\"let p of projects\" [project]=\"p\"></my-project-display>\n            </div>\n    </section>\n    ",
            directives: [projectdisplay_component_1.ProjectDisplayComponent],
            styles: ["\n        h1{\n            color:white;\n            font-family: OpenSans;\n        }\n        .col-md-12{\n            background-color:white;\n            padding-top:25px;\n            border-radius:5px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUF5QmpEO0lBQ0ksOEJBQW9CLGVBQThCO1FBQTlCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBRWxELGVBQVUsR0FBRSxLQUFLLENBQUM7SUFGa0MsQ0FBQztJQUdyRCx1Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FDeEMsVUFBQSxRQUFRO1lBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDTCxDQUFDO0lBcENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxpQkFBaUI7WUFDMUIsUUFBUSxFQUFDLG9SQU9SO1lBQ0QsVUFBVSxFQUFDLENBQUMsa0RBQXVCLENBQUM7WUFDcEMsTUFBTSxFQUFDLENBQUMsa09BVVAsQ0FBQztTQUNMLENBQUM7OzRCQUFBO0lBZUYsMkJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLDRCQUFvQix1QkFjaEMsQ0FBQSIsImZpbGUiOiJwcm9qZWN0L3Byb2plY3RsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2plY3REaXNwbGF5Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0ZGlzcGxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4vcHJvamVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteS1wcm9qZWN0LWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGgxPlByb2plY3QgTGlzdDwvaDE+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC0xMlwiICpuZ0lmPVwiZGF0YUxvYWRlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8bXktcHJvamVjdC1kaXNwbGF5ICpuZ0Zvcj1cImxldCBwIG9mIHByb2plY3RzXCIgW3Byb2plY3RdPVwicFwiPjwvbXktcHJvamVjdC1kaXNwbGF5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltQcm9qZWN0RGlzcGxheUNvbXBvbmVudF0sXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1tZC0xMntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0Q29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2Upe31cclxuICAgIHByb2plY3RzOiBQcm9qZWN0W107XHJcbiAgICBkYXRhTG9hZGVkID1mYWxzZTtcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHByb2plY3RzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2plY3RTZXJ2aWNlLnByb2plY3RzID0gcHJvamVjdHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFMb2FkZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
