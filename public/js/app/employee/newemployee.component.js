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
var router_1 = require("@angular/router");
var newemployeeadvanced_component_1 = require("./newemployeeadvanced.component");
var newemployeebasic_component_1 = require("./newemployeebasic.component");
var NewEmployeeComponent = (function () {
    function NewEmployeeComponent() {
    }
    NewEmployeeComponent = __decorate([
        core_1.Component({
            selector: "my-new-employee",
            template: "\n        <h1>New Employee</h1>\n        <ul class=\"nav nav-tabs\">\n            <li><a [routerLink]=\"['./basic']\">Basic</a></li>\n            <li><a [routerLink]=\"['./advanced']\">Advanced</a></li>\n        </ul>\n        <router-outlet></router-outlet>\n        ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/advanced', component: newemployeeadvanced_component_1.NewEmployeeAdvanced },
            { path: '/basic', component: newemployeebasic_component_1.NewEmployeeBasic }
        ]), 
        __metadata('design:paramtypes', [])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());
exports.NewEmployeeComponent = NewEmployeeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL25ld2VtcGxveWVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBVWhELHVCQUFnRCxpQkFBaUIsQ0FBQyxDQUFBO0FBR2xFLDhDQUFrQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3BFLDJDQUErQiw4QkFBOEIsQ0FBQyxDQUFBO0FBaUI5RDtJQUFBO0lBR0EsQ0FBQztJQW5CRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBQyw4UUFPSjtZQUNMLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO1NBQ2pDLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUcsU0FBUyxFQUFHLG1EQUFtQixFQUFFO1lBQ3RELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsNkNBQWdCLEVBQUM7U0FDL0MsQ0FBQzs7NEJBQUE7SUFJRiwyQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksNEJBQW9CLHVCQUdoQyxDQUFBIiwiZmlsZSI6ImVtcGxveWVlL25ld2VtcGxveWVlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7QWNjb3JkaW9uQ29tcG9uZW50R3JvdXB9IGZyb20gXCIuLi91dGlsaXR5L2FjY29yZGlvbmdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxpdHkvYWNjb3JkaW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tIFwiLi4vdXRpbGl0eS9xdWVyeVwiO1xyXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi4vcHJvamVjdC9wcm9qZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi4vcHJvamVjdC9wcm9qZWN0XCI7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7U2tpbGx9IGZyb20gXCIuLi9za2lsbHMvc2tpbGxcIjtcclxuaW1wb3J0IHtUcmFpbmluZ30gZnJvbSBcIi4uL3RyYWluaW5nL3RyYWluaW5nXCI7XHJcbmltcG9ydCB7TmV3RW1wbG95ZWVBZHZhbmNlZH0gZnJvbSBcIi4vbmV3ZW1wbG95ZWVhZHZhbmNlZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdFbXBsb3llZUJhc2ljfSBmcm9tIFwiLi9uZXdlbXBsb3llZWJhc2ljLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LW5ldy1lbXBsb3llZVwiLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxoMT5OZXcgRW1wbG95ZWU8L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2Jhc2ljJ11cIj5CYXNpYzwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2FkdmFuY2VkJ11cIj5BZHZhbmNlZDwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogJy9hZHZhbmNlZCcgLCBjb21wb25lbnQgOiBOZXdFbXBsb3llZUFkdmFuY2VkIH0sXHJcbiAgICB7cGF0aDogJy9iYXNpYycsIGNvbXBvbmVudDpOZXdFbXBsb3llZUJhc2ljfVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgTmV3RW1wbG95ZWVDb21wb25lbnR7XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
