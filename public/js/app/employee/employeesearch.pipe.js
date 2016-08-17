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
var EmployeeSearchPipe = (function () {
    function EmployeeSearchPipe() {
    }
    EmployeeSearchPipe.prototype.transform = function (pipeData, _a) {
        var pipeModifier = _a[0];
        return pipeData.filter(function (eachEmployee) {
            return eachEmployee["name"].toLowerCase().includes(pipeModifier.toLowerCase());
        });
    };
    EmployeeSearchPipe = __decorate([
        core_1.Pipe({
            name: "employeepipe"
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeSearchPipe);
    return EmployeeSearchPipe;
}());
exports.EmployeeSearchPipe = EmployeeSearchPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQU1uQztJQUFBO0lBTUEsQ0FBQztJQUxDLHNDQUFTLEdBQVQsVUFBVSxRQUFRLEVBQUUsRUFBYztZQUFiLG9CQUFZO1FBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsWUFBWTtZQUNsQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUSDtRQUFDLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7OzBCQUFBO0lBUUYseUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDBCQUFrQixxQkFNOUIsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZXNlYXJjaC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6IFwiZW1wbG95ZWVwaXBlXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlYXJjaFBpcGUge1xyXG4gIHRyYW5zZm9ybShwaXBlRGF0YSwgW3BpcGVNb2RpZmllcl0pIHtcclxuICAgIHJldHVybiBwaXBlRGF0YS5maWx0ZXIoKGVhY2hFbXBsb3llZSkgPT4ge1xyXG4gICAgICByZXR1cm4gZWFjaEVtcGxveWVlW1wibmFtZVwiXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHBpcGVNb2RpZmllci50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
