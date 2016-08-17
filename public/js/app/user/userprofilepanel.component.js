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
var applicationuser_1 = require("./applicationuser");
var user_service_1 = require("./user.service");
var error_service_1 = require("../errors/error.service");
var UserProfilePanelComponent = (function () {
    function UserProfilePanelComponent(_userService, _errorService) {
        this._userService = _userService;
        this._errorService = _errorService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', applicationuser_1.ApplicationUser)
    ], UserProfilePanelComponent.prototype, "appUser", void 0);
    UserProfilePanelComponent = __decorate([
        core_1.Component({
            selector: "my-user-profile-panel",
            template: "\n        <div class=\"col-md-12\">\n            <div class=\"container-fluid\">\n                 <div class=\"col-md-2\">\n                    <div class=\"thumbnail\">\n                        <img src=\"{{appUser?.image}}\" class=\"img img-responsive\">\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <h1>{{appUser?.firstName +\" \" + appUser?.lastName}}</h1>\n                    <h4>Hyla-Soft USA - Software Development</h4>\n                    <p>{{appUser?.email}}</p>\n                    <p>(312)391-9066</p>\n                    <p>Raliegh, NC - USA</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <ul class=\"list-group\" id=\"mylist\">\n                        <li class=\"list-group-item\">Title: <span class=\"right-align\">Senior IT Analyst</span></li>\n                        <li class=\"list-group-item\">Manager:<a href=\"#\" class=\"right-align\">Jason McDonald</a></li>\n                        <li class=\"list-group-item\">Employees: <span class=\"badge\">0</span></li>\n                        <li class=\"list-group-item\">Projects: <span class=\"badge\">1</span></li>\n                        <li class=\"list-group-item\">Avaliability: <span class=\"badge\">0%</span></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n      #mylist{\n            font-size: 1.5em;\n      }\n      .right-align{\n        float:right;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, error_service_1.ErrorService])
    ], UserProfilePanelComponent);
    return UserProfilePanelComponent;
}());
exports.UserProfilePanelComponent = UserProfilePanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlcnByb2ZpbGVwYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQXVDckQ7SUFFSSxtQ0FBb0IsWUFBeUIsRUFBVSxhQUEyQjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUR0RjtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUF2Q1o7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsKzNDQTBCVDtZQUNELE1BQU0sRUFBRSxDQUFDLG9IQU9SLENBQUM7U0FDTCxDQUFDOztpQ0FBQTtJQUlGLGdDQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxpQ0FBeUIsNEJBR3JDLENBQUEiLCJmaWxlIjoidXNlci91c2VycHJvZmlsZXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBcHBsaWNhdGlvblVzZXJ9IGZyb20gXCIuL2FwcGxpY2F0aW9udXNlclwiO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LXVzZXItcHJvZmlsZS1wYW5lbFwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3thcHBVc2VyPy5pbWFnZX19XCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt7YXBwVXNlcj8uZmlyc3ROYW1lICtcIiBcIiArIGFwcFVzZXI/Lmxhc3ROYW1lfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5IeWxhLVNvZnQgVVNBIC0gU29mdHdhcmUgRGV2ZWxvcG1lbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7YXBwVXNlcj8uZW1haWx9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4oMzEyKTM5MS05MDY2PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlJhbGllZ2gsIE5DIC0gVVNBPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCIgaWQ9XCJteWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+VGl0bGU6IDxzcGFuIGNsYXNzPVwicmlnaHQtYWxpZ25cIj5TZW5pb3IgSVQgQW5hbHlzdDwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5NYW5hZ2VyOjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyaWdodC1hbGlnblwiPkphc29uIE1jRG9uYWxkPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPkVtcGxveWVlczogPHNwYW4gY2xhc3M9XCJiYWRnZVwiPjA8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+UHJvamVjdHM6IDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj4xPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPkF2YWxpYWJpbGl0eTogPHNwYW4gY2xhc3M9XCJiYWRnZVwiPjAlPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICNteWxpc3R7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgICAgLnJpZ2h0LWFsaWdue1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVQYW5lbENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBhcHBVc2VyOiBBcHBsaWNhdGlvblVzZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
