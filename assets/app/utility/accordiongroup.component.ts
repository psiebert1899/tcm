import {Input, OnDestroy, Component} from "@angular/core";
import {AccordionComponent} from "./accordion.component";

@Component({
    selector: 'accordion-group',
    template:`
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
})
export class AccordionComponentGroup implements OnDestroy{
    private _isOpen : boolean = false;
    @Input() heading :string;
    @Input()
    set isOpen(value:boolean){
        this._isOpen = value;
        if(value){
            this.accordion.closeOthers(this);
        }
    }
    get isOpen(){
        return this._isOpen;
    }

    constructor(private accordion : AccordionComponent){
        this.accordion.addGroup(this);
    }
    ngOnDestroy(){
        this.accordion.removeGroup(this);
    }
    toggleOpen(event : MouseEvent): void{
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
}