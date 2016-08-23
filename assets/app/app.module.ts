import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {appRouting, appRoutingProviders} from "./app.routes";
import {EmployeeComponent} from "./employee/employee.component";
import {ProjectComponent} from "./project/project.component";
import {EmployeeModule} from "./employee/employee.module";
import {ProjectModule} from "./project/project.module";
import {ClockComponent} from "./utility/clock.component";
import {HeaderComponent} from "./header.component";
import {UserService} from "./user/user.service";
import {ErrorService} from "./errors/error.service";
import {ProjectService} from "./project/project.service";
import {EmployeeService} from "./employee/employee.service";
import {UserProfilePanelComponent} from "./user/userprofilepanel.component";
import {UserDataPanelComponent} from "./user/userdatapanel.component";
import {AuthenticationService} from "./auth/authentication.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {NewEmployeeModule} from "./employee/newemployee.module";
import {SignupComponent} from "./auth/signup.component";
import {UserHomeComponent} from "./user/userhome.component";
import {CommonModule} from "@angular/common";
import {UtilityModule} from "./utility/utility.module";


@NgModule({
    declarations:[
        AppComponent,
        EmployeeComponent,
        ProjectComponent,
        HeaderComponent,
        ClockComponent,
        UserProfilePanelComponent,
        UserDataPanelComponent,
        SignupComponent,
        UserHomeComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        appRouting,
        UtilityModule,
        EmployeeModule,
        ProjectModule,
        NewEmployeeModule
    ],
    providers:[
        appRoutingProviders,
        UserService,
        EmployeeService,
        ProjectService,
        ErrorService,
        AuthenticationService,
        HTTP_PROVIDERS
    ],
    bootstrap:[AppComponent]
})
export class AppModule{}