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
var project_1 = require("./project");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var core_1 = require("@angular/core");
var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get('http://localhost:3000/project').map(function (response) {
            var data = response.json().obj;
            var projects = [];
            for (var x = 0; x < data.length; x++) {
                var project = new project_1.Project(data[x].organization, data[x].name, data[x].image, data[x].manager);
                projects.push(project);
            }
            return projects;
        }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ProjectService.prototype.getProject = function (name) {
    };
    ProjectService.prototype.newProject = function (project) {
        var body = JSON.stringify(project);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/project', body, { headers: headers }).map(function (response) { return response.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ProjectService.prototype.editProject = function () {
    };
    ProjectService.prototype.deleteProject = function () {
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFFSSx3QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRSxDQUFDO0lBQ25DLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxHQUFHLENBQ3RELFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUNsQixDQUFBO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUNKLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsSUFBVztJQUV0QixDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLE9BQWU7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFDLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDOUUsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUM5QixDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCxzQ0FBYSxHQUFiO0lBRUEsQ0FBQztJQXJDTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBc0NiLHFCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxzQkFBYyxpQkFxQzFCLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJzLCBIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNle1xyXG4gICAgcHJvamVjdHMgOiBQcm9qZWN0W107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwIDogSHR0cCl7fVxyXG4gICAgZ2V0UHJvamVjdHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcm9qZWN0JykubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHg9MDt4PGRhdGEubGVuZ3RoO3grKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5vcmdhbml6YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5tYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9qZWN0KG5hbWU6c3RyaW5nKXtcclxuXHJcbiAgICB9XHJcbiAgICBuZXdQcm9qZWN0KHByb2plY3Q6UHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2plY3QnLGJvZHkse2hlYWRlcnM6aGVhZGVyc30pLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdFByb2plY3QoKXtcclxuXHJcbiAgICB9XHJcbiAgICBkZWxldGVQcm9qZWN0KCl7XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
