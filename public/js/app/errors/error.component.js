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
const error_service_1 = require("./error.service");
let ErrorComponent = class ErrorComponent {
    constructor(_errorService) {
        this._errorService = _errorService;
        this.errorDisplay = 'none';
    }
    onErrorHandled() {
        this.errorDisplay = 'none';
    }
    ngOnInit() {
        this._errorService.errorOccurred.subscribe(errorData => {
            this.errorData = errorData;
            this.errorDisplay = 'block';
        });
    }
};
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'my-error',
        template: `
        <div class="backdrop" [ngStyle]="{'display': errorDisplay}"></div>
        <div class="modal" tabindex="-1" role="dialog" [ngStyle]="{'display': errorDisplay}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" aria-label="Close" (click)="onErrorHandled()"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{errorData?.title}}</h4>
                    </div>
                    <div class="modal-body">
                     <p>{{errorData?.message}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" (click)="onErrorHandled()">Close</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->  
    `,
        styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `],
    }), 
    __metadata('design:paramtypes', [error_service_1.ErrorService])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxnQ0FBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQWtDN0M7SUFHSSxZQUFvQixhQUEwQjtRQUExQixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUY5QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQztJQUl0QixDQUFDO0lBQ0QsY0FBYztRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUUsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN0QyxTQUFTO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRSxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQWxERDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCUjtRQUNELE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7S0FTUixDQUFDO0tBRUwsQ0FBQzs7a0JBQUE7QUFDVyxzQkFBYyxpQkFpQjFCLENBQUEiLCJmaWxlIjoiZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1lcnJvcicsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyb3JEaXNwbGF5fVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyb3JEaXNwbGF5fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2Vycm9yRGF0YT8udGl0bGV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+e3tlcnJvckRhdGE/Lm1lc3NhZ2V9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsIC0tPiAgXHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuICAgIGBdLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgZXJyb3JEaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZXJyb3JEYXRhIDogRXJyb3I7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lcnJvclNlcnZpY2U6RXJyb3JTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcbiAgICBvbkVycm9ySGFuZGxlZCgpe1xyXG4gICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5PSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5lcnJvck9jY3VycmVkLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZXJyb3JEYXRhID0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckRhdGEgPWVycm9yRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
