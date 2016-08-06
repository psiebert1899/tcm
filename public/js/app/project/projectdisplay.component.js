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
var project_1 = require("./project");
var project_service_1 = require("./project.service");
var ProjectDisplayComponent = (function () {
    function ProjectDisplayComponent(projectService) {
        this.projectService = projectService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], ProjectDisplayComponent.prototype, "project", void 0);
    ProjectDisplayComponent = __decorate([
        core_1.Component({
            selector: "my-project-display",
            template: "        \n        <div class=\"col-md-2\" (click)=\"employeeClicked()\">\n            <div class=\"thumbnail\">\n                <img src=\"{{project.image}}\" class=\"img img-responsive\"/>\n                <h3>{{project.name}}</h3>\n                <h5>{{project.organization}}</h5>\n            </div>\n        </div>\n        ",
            styles: ["\n        h3{\n            text-align:center;\n        }\n        h5{\n            text-align:center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectDisplayComponent);
    return ProjectDisplayComponent;
}());
exports.ProjectDisplayComponent = ProjectDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdGRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBcUJqRDtJQUVJLGlDQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtJQUFFLENBQUM7SUFEeEQ7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBckJSO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDRVQVFMO1lBQ0wsTUFBTSxFQUFDLENBQUMsd0hBT1AsQ0FBQztTQUNMLENBQUM7OytCQUFBO0lBSUYsOEJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLCtCQUF1QiwwQkFHbkMsQ0FBQSIsImZpbGUiOiJwcm9qZWN0L3Byb2plY3RkaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuL3Byb2plY3Quc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBgbXktcHJvamVjdC1kaXNwbGF5YCxcclxuICAgIHRlbXBsYXRlOiBgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIiAoY2xpY2spPVwiZW1wbG95ZWVDbGlja2VkKClcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e3Byb2plY3QuaW1hZ2V9fVwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGgzPnt7cHJvamVjdC5uYW1lfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGg1Pnt7cHJvamVjdC5vcmdhbml6YXRpb259fTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGAsXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdERpc3BsYXlDb21wb25lbnR7XHJcbkBJbnB1dCgpIHByb2plY3Q6UHJvamVjdDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2Upe31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
