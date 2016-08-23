import {ProjectListComponent} from "./projectlist.component";
import {NewProjectComponent} from "./newproject.component";
import {Routes, RouterModule} from "@angular/router";

const projectRoutes:Routes = [
    {path:'project/list',component:ProjectListComponent},
    {path:'project/new',component:NewProjectComponent}
];

export const projectRouting = RouterModule.forChild(projectRoutes);