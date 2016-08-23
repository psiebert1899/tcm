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
const accordion_component_1 = require("./accordion.component");
let AccordionComponentGroup = class AccordionComponentGroup {
    constructor(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    set isOpen(value) {
        this._isOpen = value;
        if (value) {
            this.accordion.closeOthers(this);
        }
    }
    get isOpen() {
        return this._isOpen;
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], AccordionComponentGroup.prototype, "heading", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean), 
    __metadata('design:paramtypes', [Boolean])
], AccordionComponentGroup.prototype, "isOpen", null);
AccordionComponentGroup = __decorate([
    core_1.Component({
        selector: 'accordion-group',
        template: `
        <div class="panel panel-default" [ngClass]="{'panel-open' : isOpen}">
            <div class="panel-heading" (click)="toggleOpen($event)">
                <h4><a href tabindex="0"><span>{{heading}}</span></a></h4>    
            </div>
            <div class="panel-collapse" [hidden]="!isOpen">
                <div class="panel-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [accordion_component_1.AccordionComponent])
], AccordionComponentGroup);
exports.AccordionComponentGroup = AccordionComponentGroup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvYWNjb3JkaW9uZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBMEMsZUFBZSxDQUFDLENBQUE7QUFDMUQsc0NBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFpQnpEO0lBY0ksWUFBb0IsU0FBOEI7UUFBOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFiMUMsWUFBTyxHQUFhLEtBQUssQ0FBQztRQWM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBWkQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBS0QsV0FBVztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsS0FBa0I7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7QUFDTCxDQUFDO0FBdEJHO0lBQUMsWUFBSyxFQUFFOzt3REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzs7cURBQUE7QUFsQlo7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUM7Ozs7Ozs7Ozs7O0tBV1I7S0FDSixDQUFDOzsyQkFBQTtBQUNXLCtCQUF1QiwwQkF3Qm5DLENBQUEiLCJmaWxlIjoidXRpbGl0eS9hY2NvcmRpb25ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0LCBPbkRlc3Ryb3ksIENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBY2NvcmRpb25Db21wb25lbnR9IGZyb20gXCIuL2FjY29yZGlvbi5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhY2NvcmRpb24tZ3JvdXAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgW25nQ2xhc3NdPVwieydwYW5lbC1vcGVuJyA6IGlzT3Blbn1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiAoY2xpY2spPVwidG9nZ2xlT3BlbigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+PGEgaHJlZiB0YWJpbmRleD1cIjBcIj48c3Bhbj57e2hlYWRpbmd9fTwvc3Bhbj48L2E+PC9oND4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtY29sbGFwc2VcIiBbaGlkZGVuXT1cIiFpc09wZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50R3JvdXAgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XHJcbiAgICBwcml2YXRlIF9pc09wZW4gOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBoZWFkaW5nIDpzdHJpbmc7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGlzT3Blbih2YWx1ZTpib29sZWFuKXtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcclxuICAgICAgICBpZih2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpc09wZW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uIDogQWNjb3JkaW9uQ29tcG9uZW50KXtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb24ucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVPcGVuKGV2ZW50IDogTW91c2VFdmVudCk6IHZvaWR7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
