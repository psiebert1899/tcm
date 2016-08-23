import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccordionComponentGroup} from "./accordiongroup.component";
import {AccordionComponent} from "./accordion.component";
@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        AccordionComponentGroup,
        AccordionComponent
    ],
    exports:[
        AccordionComponentGroup,
        AccordionComponent
    ]
})
export class UtilityModule{}