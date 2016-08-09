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
var core_1 = require("@angular/core");
var accordion_component_1 = require("./accordion.component");
var AccordionComponentGroup = (function () {
    function AccordionComponentGroup(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    Object.defineProperty(AccordionComponentGroup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionComponentGroup.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionComponentGroup.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
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
            template: "\n        <div class=\"panel panel-default\" [ngClass]=\"{'panel-open' : isOpen}\">\n            <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n                <h4><a href tabindex=\"0\"><span>{{heading}}</span></a></h4>    \n            </div>\n            <div class=\"panel-collapse\" [hidden]=\"!isOpen\">\n                <div class=\"panel-body\">\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [accordion_component_1.AccordionComponent])
    ], AccordionComponentGroup);
    return AccordionComponentGroup;
}());
exports.AccordionComponentGroup = AccordionComponentGroup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvYWNjb3JkaW9uZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEMsZUFBZSxDQUFDLENBQUE7QUFDMUQsb0NBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFpQnpEO0lBY0ksaUNBQW9CLFNBQThCO1FBQTlCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBYjFDLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFjOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQVpELHNCQUFJLDJDQUFNO2FBTVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBUkQsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBUUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCw0Q0FBVSxHQUFWLFVBQVcsS0FBa0I7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFyQkQ7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7Ozt5REFBQTtJQWxCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBQyxtZUFXUjtTQUNKLENBQUM7OytCQUFBO0lBeUJGLDhCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSwrQkFBdUIsMEJBd0JuQyxDQUFBIiwiZmlsZSI6InV0aWxpdHkvYWNjb3JkaW9uZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgT25EZXN0cm95LCBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QWNjb3JkaW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hY2NvcmRpb24uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIFtuZ0NsYXNzXT1cInsncGFuZWwtb3BlbicgOiBpc09wZW59XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCIgKGNsaWNrKT1cInRvZ2dsZU9wZW4oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PjxhIGhyZWYgdGFiaW5kZXg9XCIwXCI+PHNwYW4+e3toZWFkaW5nfX08L3NwYW4+PC9hPjwvaDQ+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWNvbGxhcHNlXCIgW2hpZGRlbl09XCIhaXNPcGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudEdyb3VwIGltcGxlbWVudHMgT25EZXN0cm95e1xyXG4gICAgcHJpdmF0ZSBfaXNPcGVuIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVhZGluZyA6c3RyaW5nO1xyXG4gICAgQElucHV0KClcclxuICAgIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XHJcbiAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVycyh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgaXNPcGVuKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvbiA6IEFjY29yZGlvbkNvbXBvbmVudCl7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlT3BlbihldmVudCA6IE1vdXNlRXZlbnQpOiB2b2lke1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
