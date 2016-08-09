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
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.groups = [];
    }
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index > -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'accordion',
            template: "\n        <ng-content></ng-content>\n    ",
            host: {
                'class': 'panel-group'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBV3hDO0lBQUE7UUFDSSxXQUFNLEdBQWtDLEVBQUUsQ0FBQztJQW1CL0MsQ0FBQztJQWxCRyxxQ0FBUSxHQUFSLFVBQVMsS0FBK0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxTQUFrQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUs7WUFDOUIsRUFBRSxDQUFBLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksS0FBOEI7UUFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQTVCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsV0FBVztZQUN0QixRQUFRLEVBQUMsMkNBRVI7WUFDRCxJQUFJLEVBQUM7Z0JBQ0QsT0FBTyxFQUFHLGFBQWE7YUFDMUI7U0FDSixDQUFDOzswQkFBQTtJQXFCRix5QkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksMEJBQWtCLHFCQW9COUIsQ0FBQSIsImZpbGUiOiJ1dGlsaXR5L2FjY29yZGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudEdyb3VwfSBmcm9tIFwiLi9hY2NvcmRpb25ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ2FjY29yZGlvbicsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgYCxcclxuICAgIGhvc3Q6e1xyXG4gICAgICAgICdjbGFzcycgOiAncGFuZWwtZ3JvdXAnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnR7XHJcbiAgICBncm91cHM6QXJyYXk8QWNjb3JkaW9uQ29tcG9uZW50R3JvdXA+ID0gW107XHJcbiAgICBhZGRHcm91cChncm91cCA6IEFjY29yZGlvbkNvbXBvbmVudEdyb3VwKXtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU90aGVycyhvcGVuR3JvdXA6IEFjY29yZGlvbkNvbXBvbmVudEdyb3VwKXtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKXtcclxuICAgICAgICAgICAgaWYoZ3JvdXAgIT09IG9wZW5Hcm91cCl7XHJcbiAgICAgICAgICAgICAgICBncm91cC5pc09wZW49ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25Db21wb25lbnRHcm91cCl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICBpZihpbmRleCA+IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
