"use strict";
class Employee {
    constructor(email, image, firstName, lastName, phone, country, city, state, title, division, department, canManageEmployees, canManageProjects, hasManager, manager, employees, projects, projectManagerFor, trainings, skills, _id) {
        this.email = email;
        this.image = image;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.state = state;
        this.title = title;
        this.division = division;
        this.department = department;
        this.canManageEmployees = canManageEmployees;
        this.canManageProjects = canManageProjects;
        this.hasManager = hasManager;
        this.manager = manager;
        this.employees = employees;
        this.projects = projects;
        this.projectManagerFor = projectManagerFor;
        this.trainings = trainings;
        this.skills = skills;
        this._id = _id;
    }
}
exports.Employee = Employee;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUNJLFlBQ08sS0FBWSxFQUNaLEtBQVksRUFDWixTQUFnQixFQUNoQixRQUFlLEVBQ2YsS0FBWSxFQUNaLE9BQWMsRUFDZCxJQUFXLEVBQ1gsS0FBYyxFQUNkLEtBQWMsRUFDZCxRQUFpQixFQUNqQixVQUFtQixFQUNuQixrQkFBNkIsRUFDN0IsaUJBQTRCLEVBQzVCLFVBQXFCLEVBQ3JCLE9BQWdCLEVBQ2hCLFNBQXFCLEVBQ3JCLFFBQW9CLEVBQ3BCLGlCQUE2QixFQUM3QixTQUF1QixFQUN2QixNQUFpQixFQUNqQixHQUFhO1FBcEJiLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osY0FBUyxHQUFULFNBQVMsQ0FBTztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFPO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFXO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVztRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBWTtRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBVTtJQUNsQixDQUFDO0FBQ1AsQ0FBQztBQXhCWSxnQkFBUSxXQXdCcEIsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2tpbGx9IGZyb20gXCIuLi9za2lsbHMvc2tpbGxcIjtcclxuaW1wb3J0IHtUcmFpbmluZ30gZnJvbSBcIi4uL3RyYWluaW5nL3RyYWluaW5nXCI7XHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZXtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVtYWlsOnN0cmluZyxcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgZmlyc3ROYW1lOnN0cmluZyxcclxuICAgIHB1YmxpYyBsYXN0TmFtZTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgcGhvbmU6c3RyaW5nLFxyXG4gICAgcHVibGljIGNvdW50cnk6c3RyaW5nLFxyXG4gICAgcHVibGljIGNpdHk6c3RyaW5nLFxyXG4gICAgcHVibGljIHN0YXRlID86c3RyaW5nLFxyXG4gICAgcHVibGljIHRpdGxlID86c3RyaW5nLFxyXG4gICAgcHVibGljIGRpdmlzaW9uID86c3RyaW5nLFxyXG4gICAgcHVibGljIGRlcGFydG1lbnQgPzpzdHJpbmcsXHJcbiAgICBwdWJsaWMgY2FuTWFuYWdlRW1wbG95ZWVzID86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgY2FuTWFuYWdlUHJvamVjdHMgPzogYm9vbGVhbixcclxuICAgIHB1YmxpYyBoYXNNYW5hZ2VyID86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgbWFuYWdlciA/OnN0cmluZyxcclxuICAgIHB1YmxpYyBlbXBsb3llZXMgPzogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgcHJvamVjdHMgPzogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgcHJvamVjdE1hbmFnZXJGb3IgPzogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgdHJhaW5pbmdzID86IFRyYWluaW5nW10sXHJcbiAgICBwdWJsaWMgc2tpbGxzID86IFNraWxsW10sXHJcbiAgICBwdWJsaWMgX2lkID86IHN0cmluZ1xyXG4gICAgKXt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
