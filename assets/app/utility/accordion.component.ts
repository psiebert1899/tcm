import {AccordionComponentGroup} from "./accordiongroup.component";
import {Component} from "@angular/core";

@Component({
    selector : 'accordion',
    template:`
        <ng-content></ng-content>
    `,
    host:{
        'class' : 'panel-group'
    }
})
export class AccordionComponent{
    groups:Array<AccordionComponentGroup> = [];
    addGroup(group : AccordionComponentGroup){
        this.groups.push(group);
    }

    closeOthers(openGroup: AccordionComponentGroup){
        this.groups.forEach(function(group){
            if(group !== openGroup){
                group.isOpen=false;
            }
        })
    }

    removeGroup(group: AccordionComponentGroup){
        const index = this.groups.indexOf(group);
        if(index > -1){
            this.groups.splice(index, 1);
        }
    }
}