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
                var project = new project_1.Project(data[x].organization, data[x].name, data[x].image, data[x].manager, data[x]._id);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFFSSx3QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRSxDQUFDO0lBQ25DLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxHQUFHLENBQ3RELFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQ2QsQ0FBQTtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLElBQVc7SUFFdEIsQ0FBQztJQUNELG1DQUFVLEdBQVYsVUFBVyxPQUFlO1FBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBTSxPQUFPLEdBQUMsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUcsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQzlFLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FDOUIsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELG9DQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtJQUVBLENBQUM7SUF0Q0w7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXVDYixxQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksc0JBQWMsaUJBc0MxQixDQUFBIiwiZmlsZSI6InByb2plY3QvcHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7SGVhZGVycywgSHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZXtcclxuICAgIHByb2plY3RzIDogUHJvamVjdFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHApe31cclxuICAgIGdldFByb2plY3RzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvamVjdCcpLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB4PTA7eDxkYXRhLmxlbmd0aDt4Kyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0ub3JnYW5pemF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW3hdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0ubWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5faWRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuICAgIGdldFByb2plY3QobmFtZTpzdHJpbmcpe1xyXG5cclxuICAgIH1cclxuICAgIG5ld1Byb2plY3QocHJvamVjdDpQcm9qZWN0KXtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycz1uZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvamVjdCcsYm9keSx7aGVhZGVyczpoZWFkZXJzfSkubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbiAgICBlZGl0UHJvamVjdCgpe1xyXG5cclxuICAgIH1cclxuICAgIGRlbGV0ZVByb2plY3QoKXtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
