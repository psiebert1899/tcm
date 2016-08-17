"use strict";
var Employee = (function () {
    function Employee(email, image, firstName, lastName, phone, country, city, state, title, division, department, manager, employees, projects, canManageEmployees, canManageProjects, hasManager, projectManagerFor, trainings, skills, _id) {
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
        this.manager = manager;
        this.employees = employees;
        this.projects = projects;
        this.canManageEmployees = canManageEmployees;
        this.canManageProjects = canManageProjects;
        this.hasManager = hasManager;
        this.projectManagerFor = projectManagerFor;
        this.trainings = trainings;
        this.skills = skills;
        this._id = _id;
    }
    return Employee;
}());
exports.Employee = Employee;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUNJLGtCQUNPLEtBQWEsRUFDYixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLE9BQWUsRUFDZixJQUFZLEVBQ1osS0FBZSxFQUNmLEtBQWUsRUFDZixRQUFrQixFQUNsQixVQUFvQixFQUNwQixPQUFpQixFQUNqQixTQUFxQixFQUNyQixRQUFvQixFQUNwQixrQkFBNkIsRUFDN0IsaUJBQTRCLEVBQzVCLFVBQXFCLEVBQ3JCLGlCQUE2QixFQUM3QixTQUF1QixFQUN2QixNQUFpQixFQUNqQixHQUFhO1FBcEJiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBVztRQUM3QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVc7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVk7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVU7SUFDakIsQ0FBQztJQUNSLGVBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLGdCQUFRLFdBd0JwQixDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTa2lsbH0gZnJvbSBcIi4uL3NraWxscy9za2lsbFwiO1xyXG5pbXBvcnQge1RyYWluaW5nfSBmcm9tIFwiLi4vdHJhaW5pbmcvdHJhaW5pbmdcIjtcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZyxcclxuICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nLFxyXG4gICAgcHVibGljIHBob25lOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgY291bnRyeTogc3RyaW5nLFxyXG4gICAgcHVibGljIGNpdHk6IHN0cmluZyxcclxuICAgIHB1YmxpYyBzdGF0ZSA/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGl0bGUgPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGRpdmlzaW9uID86IHN0cmluZyxcclxuICAgIHB1YmxpYyBkZXBhcnRtZW50ID86IHN0cmluZyxcclxuICAgIHB1YmxpYyBtYW5hZ2VyID86IHN0cmluZyxcclxuICAgIHB1YmxpYyBlbXBsb3llZXMgPzogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgcHJvamVjdHMgPzogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgY2FuTWFuYWdlRW1wbG95ZWVzID86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgY2FuTWFuYWdlUHJvamVjdHMgPzogYm9vbGVhbixcclxuICAgIHB1YmxpYyBoYXNNYW5hZ2VyID86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgcHJvamVjdE1hbmFnZXJGb3IgPzogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgdHJhaW5pbmdzID86IFRyYWluaW5nW10sXHJcbiAgICBwdWJsaWMgc2tpbGxzID86IFNraWxsW10sXHJcbiAgICBwdWJsaWMgX2lkID86IHN0cmluZ1xyXG4gICAgKSB7fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
