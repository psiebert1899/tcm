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
        return this._http.get('http://localhost:3000/projects').map(function (response) {
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
        return this._http.post('http://localhost:3000/projects', body, headers).map(function (response) { return response.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFDSSx3QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRSxDQUFDO0lBQ25DLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxHQUFHLENBQ3ZELFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUNsQixDQUFBO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUNKLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsSUFBVztJQUV0QixDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLE9BQWU7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQ3JFLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FDOUIsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELG9DQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtJQUVBLENBQUM7SUFwQ0w7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXFDYixxQkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksc0JBQWMsaUJBb0MxQixDQUFBIiwiZmlsZSI6InByb2plY3QvcHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7SGVhZGVycywgSHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZXtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHAgOiBIdHRwKXt9XHJcbiAgICBnZXRQcm9qZWN0cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2plY3RzJykubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHg9MDt4PGRhdGEubGVuZ3RoO3grKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5vcmdhbml6YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5tYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9qZWN0KG5hbWU6c3RyaW5nKXtcclxuXHJcbiAgICB9XHJcbiAgICBuZXdQcm9qZWN0KHByb2plY3Q6UHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2plY3RzJyxib2R5LGhlYWRlcnMpLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdFByb2plY3QoKXtcclxuXHJcbiAgICB9XHJcbiAgICBkZWxldGVQcm9qZWN0KCl7XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
