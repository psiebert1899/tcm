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
const employee_service_1 = require("./employee.service");
const error_service_1 = require("../errors/error.service");
const query_1 = require("../utility/query");
const employee_search_pipe_1 = require("./employee-search.pipe");
let EmployeeListComponent = class EmployeeListComponent {
    constructor(_employeeService, _errorService) {
        this._employeeService = _employeeService;
        this._errorService = _errorService;
        this.employeeFilters = ["firstName", "lastName", "email"];
        this.select = new core_1.EventEmitter();
        this.dataLoaded = false;
    }
    ngOnInit() {
        this._employeeService.getEmployees(new query_1.Query(null, null)).subscribe(employees => {
            this.employees = employees;
            this._employeeService.employees = employees;
            this.dataLoaded = true;
        }, error => console.log(error));
        (error => this._errorService.handleError(error));
    }
    setSelectedEmployee(emp) {
        this._employeeService.selectEmployee(emp);
        this._employeeService.popEmployeeDetails(emp);
    }
};
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: "my-employee-list",
        template: `
        <div>
          <h1>Employee List</h1>
        </div>
        <div class="input">
            <label for="search" style="font-family:OpenSans">Seach Employee By:</label>
            <select #sel class="properties" [(ngModel)]="property" (ngModelChange)="select.emit(sel.value)">
              <option style="font-family:OpenSans" selected>Please Select</option>
              <option style="font-family:OpenSans" *ngFor=" let filter of employeeFilters" >{{filter}}</option>
            </select>
            <input type="text" [(ngModel)]="employeeSearch"/>
        </div>
        <section class="col-md-12" *ngIf="dataLoaded">
            <div class="container-fluid">
                <my-employee-display *ngFor="let e of employees | findEmployee: employeeSearch: property" [employee]="e" (click)="setSelectedEmployee(e)"></my-employee-display>
            </div>
        </section>
        <my-employee-details></my-employee-details>
    `,
        pipes: [employee_search_pipe_1.EmployeeSearchPipe],
        styles: [`
        h1{
            font-family:OpenSans;
            color:white;
        }
        .col-md-12{
            background-color:white;
            border-radius:5px;
            padding-top:25px;
        }
        div.input{
          padding: 10px 10px;
        }

        input[type=text] {
            width: 130px;
            box-sizing: border-box;
            border: 2px solid #009933;
            border-radius: 4px;
            font-size: 16px;
            background-color: white;
            background-position: 10px 10px;
            background-repeat: no-repeat;
            padding: 12px 20px 12px 40px;
            -webkit-transition: width 0.4s ease-in-out;
            transition: width 0.4s ease-in-out;
          }

          input[type=text]:focus {
            width: 50%;
          }
          select.properties {
            position: relative;
            font-family:OpenSans;
            font-size: 16px;
            margin: 0 auto;
            padding: 10px 10px 10px 30px;
            background: #fff;
            border: 1px solid silver;
            cursor: pointer;
            outline: none;
          }
    `]
    }), 
    __metadata('design:paramtypes', [employee_service_1.EmployeeService, error_service_1.ErrorService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLG1DQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELGdDQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXJELHdCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ3ZDLHVDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBb0UxRDtJQUNJLFlBQW9CLGdCQUFpQyxFQUFVLGFBQTJCO1FBQXRFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMxRixvQkFBZSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVyRCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUowRSxDQUFDO0lBSzlGLFFBQVE7UUFFSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDL0QsU0FBUztZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQztRQUNFLENBQUEsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFDO0lBQ3ZELENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxHQUFhO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7QUFDTCxDQUFDO0FBekZEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRyxrQkFBa0I7UUFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQlQ7UUFDRCxLQUFLLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztRQUMzQixNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMENSLENBQUM7S0FDTCxDQUFDOzt5QkFBQTtBQUVXLDZCQUFxQix3QkFzQmpDLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSBcIi4uL3V0aWxpdHkvcXVlcnlcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlYXJjaFBpcGV9IGZyb20gXCIuL2VtcGxveWVlLXNlYXJjaC5waXBlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiBcIm15LWVtcGxveWVlLWxpc3RcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5FbXBsb3llZSBMaXN0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNlYXJjaFwiIHN0eWxlPVwiZm9udC1mYW1pbHk6T3BlblNhbnNcIj5TZWFjaCBFbXBsb3llZSBCeTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0ICNzZWwgY2xhc3M9XCJwcm9wZXJ0aWVzXCIgWyhuZ01vZGVsKV09XCJwcm9wZXJ0eVwiIChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdC5lbWl0KHNlbC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHN0eWxlPVwiZm9udC1mYW1pbHk6T3BlblNhbnNcIiBzZWxlY3RlZD5QbGVhc2UgU2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBzdHlsZT1cImZvbnQtZmFtaWx5Ok9wZW5TYW5zXCIgKm5nRm9yPVwiIGxldCBmaWx0ZXIgb2YgZW1wbG95ZWVGaWx0ZXJzXCIgPnt7ZmlsdGVyfX08L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiZW1wbG95ZWVTZWFyY2hcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtMTJcIiAqbmdJZj1cImRhdGFMb2FkZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPG15LWVtcGxveWVlLWRpc3BsYXkgKm5nRm9yPVwibGV0IGUgb2YgZW1wbG95ZWVzIHwgZmluZEVtcGxveWVlOiBlbXBsb3llZVNlYXJjaDogcHJvcGVydHlcIiBbZW1wbG95ZWVdPVwiZVwiIChjbGljayk9XCJzZXRTZWxlY3RlZEVtcGxveWVlKGUpXCI+PC9teS1lbXBsb3llZS1kaXNwbGF5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG15LWVtcGxveWVlLWRldGFpbHM+PC9teS1lbXBsb3llZS1kZXRhaWxzPlxyXG4gICAgYCxcclxuICAgIHBpcGVzOiBbRW1wbG95ZWVTZWFyY2hQaXBlXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmlucHV0e1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwOTkzMztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDQwcHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGVjdC5wcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XHJcbiAgICBlbXBsb3llZUZpbHRlcnMgPSBbXCJmaXJzdE5hbWVcIiwgXCJsYXN0TmFtZVwiLCBcImVtYWlsXCJdO1xyXG4gICAgZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xyXG4gICAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgZGF0YUxvYWRlZCA9IGZhbHNlO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZXMobmV3IFF1ZXJ5KG51bGwsIG51bGwpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGVtcGxveWVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlcyA9IGVtcGxveWVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5lbXBsb3llZXMgPSBlbXBsb3llZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApO1xyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWRFbXBsb3llZShlbXA6IEVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5zZWxlY3RFbXBsb3llZShlbXApO1xyXG4gICAgICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UucG9wRW1wbG95ZWVEZXRhaWxzKGVtcCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
