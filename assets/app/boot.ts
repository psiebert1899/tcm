///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from "./app.component";
import {ROUTER_PROVIDERS} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {provide} from "@angular/core";
import {ErrorService} from "./errors/error.service";
import {AuthenticationService} from "./auth/authentication.service";

bootstrap(AppComponent,[ROUTER_PROVIDERS,ErrorService,AuthenticationService,provide(LocationStrategy,{useClass:HashLocationStrategy}),HTTP_PROVIDERS]);