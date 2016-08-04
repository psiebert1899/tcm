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
var common_1 = require("@angular/common");
var project_service_1 = require("./project.service");
var accordiongroup_component_1 = require("../utility/accordiongroup.component");
var accordion_component_1 = require("../utility/accordion.component");
var project_1 = require("./project");
var NewProjectComponent = (function () {
    function NewProjectComponent(_fb, projectService) {
        this._fb = _fb;
        this.projectService = projectService;
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            organization: ['', common_1.Validators.required],
            name: ['', common_1.Validators.required],
            image: ['', common_1.Validators.required],
            manager: ['', common_1.Validators.required]
        });
    };
    NewProjectComponent.prototype.onSubmit = function () {
        var project = new project_1.Project(this.myForm.value.organization, this.myForm.value.name, this.myForm.value.image, this.myForm.value.manager);
        this.projectService.newProject(project).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            selector: 'my-new-project',
            template: "\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <accordion>\n            <accordion-group heading=\"Basic Details\" [isOpen]=\"true\">\n                <div class=\"form-group\">\n                    <label for=\"organization\">Organization</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('organization')\" id=\"organization\" class=\"form-control\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"name\">Project Name:</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('name')\" id=\"name\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Image\">Image</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('image')\" id=\"image\" class=\"form-control\" value=\"/imgs/projectImgs/defaultProjectImage.png\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Manager\">Manager</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('manager')\" id=\"manager\" class=\"form-control\" value=\"Jason McDonald\"/>\n                </div>\n            \n            </accordion-group>\n            <accordion-group heading=\"Budget and Scheduling\">\n            \n            </accordion-group>\n            <accordion-group heading=\"Employees\">\n            \n            </accordion-group>\n            <accordion-group heading=\"Documents\">\n            \n            </accordion-group>\n        </accordion>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n\n    ",
            directives: [accordion_component_1.AccordionComponent, accordiongroup_component_1.AccordionComponentGroup]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, project_service_1.ProjectService])
    ], NewProjectComponent);
    return NewProjectComponent;
}());
exports.NewProjectComponent = NewProjectComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvbmV3cHJvamVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RSxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx5Q0FBc0MscUNBQXFDLENBQUMsQ0FBQTtBQUM1RSxvQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNsRSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUF5Q2xDO0lBRUksNkJBQW9CLEdBQWUsRUFBUyxjQUE2QjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFBRSxDQUFDO0lBQzVFLHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLFlBQVksRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDN0IsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQzlCLE9BQU8sRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNJLElBQUksT0FBTyxHQUFFLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQzdDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFBO0lBQ0wsQ0FBQztJQXpETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsZ0JBQWdCO1lBQzNCLFFBQVEsRUFBQyxtc0RBbUNSO1lBQ0QsVUFBVSxFQUFDLENBQUMsd0NBQWtCLEVBQUMsa0RBQXVCLENBQUM7U0FDMUQsQ0FBQzs7MkJBQUE7SUFtQkYsMEJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLDJCQUFtQixzQkFrQi9CLENBQUEiLCJmaWxlIjoicHJvamVjdC9uZXdwcm9qZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi9wcm9qZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY2NvcmRpb25Db21wb25lbnRHcm91cH0gZnJvbSBcIi4uL3V0aWxpdHkvYWNjb3JkaW9uZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWNjb3JkaW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbGl0eS9hY2NvcmRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW5ldy1wcm9qZWN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgIDxhY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIkJhc2ljIERldGFpbHNcIiBbaXNPcGVuXT1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm9yZ2FuaXphdGlvblwiPk9yZ2FuaXphdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ29yZ2FuaXphdGlvbicpXCIgaWQ9XCJvcmdhbml6YXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlByb2plY3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCduYW1lJylcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJJbWFnZVwiPkltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnaW1hZ2UnKVwiIGlkPVwiaW1hZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiL2ltZ3MvcHJvamVjdEltZ3MvZGVmYXVsdFByb2plY3RJbWFnZS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbWFuYWdlcicpXCIgaWQ9XCJtYW5hZ2VyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIkphc29uIE1jRG9uYWxkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiQnVkZ2V0IGFuZCBTY2hlZHVsaW5nXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRW1wbG95ZWVzXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRG9jdW1lbnRzXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICA8L2FjY29yZGlvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltBY2NvcmRpb25Db21wb25lbnQsQWNjb3JkaW9uQ29tcG9uZW50R3JvdXBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdQcm9qZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbXlGb3JtOkNvbnRyb2xHcm91cDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLHByaXZhdGUgcHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2Upe31cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5teUZvcm09dGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBvcmdhbml6YXRpb246WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBuYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgaW1hZ2U6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIHZhciBwcm9qZWN0PSBuZXcgUHJvamVjdCh0aGlzLm15Rm9ybS52YWx1ZS5vcmdhbml6YXRpb24sdGhpcy5teUZvcm0udmFsdWUubmFtZSx0aGlzLm15Rm9ybS52YWx1ZS5pbWFnZSx0aGlzLm15Rm9ybS52YWx1ZS5tYW5hZ2VyKTtcclxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlLm5ld1Byb2plY3QocHJvamVjdCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
