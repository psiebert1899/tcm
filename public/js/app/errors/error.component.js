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
var error_service_1 = require("./error.service");
var ErrorComponent = (function () {
    function ErrorComponent(_errorService) {
        this._errorService = _errorService;
        this.errorDisplay = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.errorDisplay = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._errorService.errorOccurred.subscribe(function (errorData) {
            _this.errorData = errorData;
            _this.errorDisplay = 'block';
        });
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'my-error',
            template: "\n        <div class=\"backdrop\" [ngStyle]=\"{'display': errorDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': errorDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErrorHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{errorData?.title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{errorData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErrorHandled()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->  \n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "],
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQWtDN0M7SUFHSSx3QkFBb0IsYUFBMEI7UUFBMUIsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFGOUMsaUJBQVksR0FBRyxNQUFNLENBQUM7SUFJdEIsQ0FBQztJQUNELHVDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN0QyxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFFLFNBQVMsQ0FBQztZQUMxQixLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFqREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFDLDJoQ0FrQlI7WUFDRCxNQUFNLEVBQUUsQ0FBQyx1TkFTUixDQUFDO1NBRUwsQ0FBQzs7c0JBQUE7SUFrQkYscUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLHNCQUFjLGlCQWlCMUIsQ0FBQSIsImZpbGUiOiJlcnJvcnMvZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuL2Vycm9yLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWVycm9yJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBlcnJvckRpc3BsYXl9XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBlcnJvckRpc3BsYXl9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7ZXJyb3JEYXRhPy50aXRsZX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cD57e2Vycm9yRGF0YT8ubWVzc2FnZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtY29udGVudCAtLT5cclxuICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWRpYWxvZyAtLT5cclxuICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwgLS0+ICBcclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBlcnJvckRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBlcnJvckRhdGEgOiBFcnJvcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Vycm9yU2VydmljZTpFcnJvclNlcnZpY2Upe1xyXG5cclxuICAgIH1cclxuICAgIG9uRXJyb3JIYW5kbGVkKCl7XHJcbiAgICAgICAgdGhpcy5lcnJvckRpc3BsYXk9ICdub25lJztcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JTZXJ2aWNlLmVycm9yT2NjdXJyZWQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBlcnJvckRhdGEgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yRGF0YSA9ZXJyb3JEYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
