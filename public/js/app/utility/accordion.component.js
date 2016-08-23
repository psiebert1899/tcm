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
let AccordionComponent = class AccordionComponent {
    constructor() {
        this.groups = [];
    }
    addGroup(group) {
        this.groups.push(group);
    }
    closeOthers(openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    removeGroup(group) {
        const index = this.groups.indexOf(group);
        if (index > -1) {
            this.groups.splice(index, 1);
        }
    }
};
AccordionComponent = __decorate([
    core_1.Component({
        selector: 'accordion',
        template: `
        <ng-content></ng-content>
    `,
        host: {
            'class': 'panel-group'
        }
    }), 
    __metadata('design:paramtypes', [])
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsdUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBV3hDO0lBQUE7UUFDSSxXQUFNLEdBQWtDLEVBQUUsQ0FBQztJQW1CL0MsQ0FBQztJQWxCRyxRQUFRLENBQUMsS0FBK0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFrQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUs7WUFDOUIsRUFBRSxDQUFBLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBOEI7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUE3QkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFHLFdBQVc7UUFDdEIsUUFBUSxFQUFDOztLQUVSO1FBQ0QsSUFBSSxFQUFDO1lBQ0QsT0FBTyxFQUFHLGFBQWE7U0FDMUI7S0FDSixDQUFDOztzQkFBQTtBQUNXLDBCQUFrQixxQkFvQjlCLENBQUEiLCJmaWxlIjoidXRpbGl0eS9hY2NvcmRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY2NvcmRpb25Db21wb25lbnRHcm91cH0gZnJvbSBcIi4vYWNjb3JkaW9uZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdhY2NvcmRpb24nLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIGAsXHJcbiAgICBob3N0OntcclxuICAgICAgICAnY2xhc3MnIDogJ3BhbmVsLWdyb3VwJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50e1xyXG4gICAgZ3JvdXBzOkFycmF5PEFjY29yZGlvbkNvbXBvbmVudEdyb3VwPiA9IFtdO1xyXG4gICAgYWRkR3JvdXAoZ3JvdXAgOiBBY2NvcmRpb25Db21wb25lbnRHcm91cCl7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VPdGhlcnMob3Blbkdyb3VwOiBBY2NvcmRpb25Db21wb25lbnRHcm91cCl7XHJcbiAgICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCl7XHJcbiAgICAgICAgICAgIGlmKGdyb3VwICE9PSBvcGVuR3JvdXApe1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAuaXNPcGVuPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVHcm91cChncm91cDogQWNjb3JkaW9uQ29tcG9uZW50R3JvdXApe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XHJcbiAgICAgICAgaWYoaW5kZXggPiAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
