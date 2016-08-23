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
const project_1 = require("./project");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
const core_1 = require("@angular/core");
let ProjectService = class ProjectService {
    constructor(_http) {
        this._http = _http;
    }
    getProjects() {
        return this._http.get('http://localhost:3000/project').map(response => {
            const data = response.json().obj;
            let projects = [];
            for (let x = 0; x < data.length; x++) {
                let project = new project_1.Project(data[x].organization, data[x].name, data[x].image, data[x].manager, data[x]._id);
                projects.push(project);
            }
            return projects;
        }).catch(error => Rx_1.Observable.throw(error.json()));
    }
    getProject(name) {
    }
    newProject(project) {
        const body = JSON.stringify(project);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/project', body, { headers: headers }).map(response => response.json()).catch(error => Rx_1.Observable.throw(error.json()));
    }
    editProject() {
    }
    deleteProject() {
    }
};
ProjectService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsdUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHFCQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyx1QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFFSSxZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFFLENBQUM7SUFDbkMsV0FBVztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEdBQUcsQ0FDdEQsUUFBUTtZQUNKLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQ2QsQ0FBQTtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxVQUFVLENBQUMsSUFBVztJQUV0QixDQUFDO0lBQ0QsVUFBVSxDQUFDLE9BQWU7UUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxNQUFNLE9BQU8sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFDLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDOUUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDOUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsV0FBVztJQUVYLENBQUM7SUFDRCxhQUFhO0lBRWIsQ0FBQztBQUNMLENBQUM7QUF2Q0Q7SUFBQyxpQkFBVSxFQUFFOztrQkFBQTtBQUNBLHNCQUFjLGlCQXNDMUIsQ0FBQSIsImZpbGUiOiJwcm9qZWN0L3Byb2plY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQge0hlYWRlcnMsIEh0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2V7XHJcbiAgICBwcm9qZWN0cyA6IFByb2plY3RbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHAgOiBIdHRwKXt9XHJcbiAgICBnZXRQcm9qZWN0cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2plY3QnKS5tYXAoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgeD0wO3g8ZGF0YS5sZW5ndGg7eCsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW3hdLm9yZ2FuaXphdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVt4XS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW3hdLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW3hdLm1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9qZWN0KG5hbWU6c3RyaW5nKXtcclxuXHJcbiAgICB9XHJcbiAgICBuZXdQcm9qZWN0KHByb2plY3Q6UHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2plY3QnLGJvZHkse2hlYWRlcnM6aGVhZGVyc30pLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdFByb2plY3QoKXtcclxuXHJcbiAgICB9XHJcbiAgICBkZWxldGVQcm9qZWN0KCl7XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
