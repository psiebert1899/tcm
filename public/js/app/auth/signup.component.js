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
const signupform_component_1 = require("./signupform.component");
let SignupComponent = class SignupComponent {
    ngOnInit() {
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'my-signup',
        template: `
        <section class="col-md-8 col-md-offset-2">
              
            <registration-form></registration-form> 
            
        </section>
    `,
        directives: [signupform_component_1.SignupformComponent]
    }), 
    __metadata('design:paramtypes', [])
], SignupComponent);
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBS2hELHVDQUFrQyx3QkFBd0IsQ0FBQyxDQUFBO0FBWTNEO0lBQ0ksUUFBUTtJQUVSLENBQUM7QUFDTCxDQUFDO0FBZkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFHLFdBQVc7UUFDdEIsUUFBUSxFQUFDOzs7Ozs7S0FNUjtRQUNELFVBQVUsRUFBRSxDQUFDLDBDQUFtQixDQUFDO0tBQ3BDLENBQUM7O21CQUFBO0FBQ1csdUJBQWUsa0JBSTNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7U2lnbnVwZm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwZm9ybS5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1zaWdudXAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxyZWdpc3RyYXRpb24tZm9ybT48L3JlZ2lzdHJhdGlvbi1mb3JtPiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtTaWdudXBmb3JtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
