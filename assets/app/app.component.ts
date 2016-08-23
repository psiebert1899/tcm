import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <my-header></my-header>
        <div class="container-fluid" id="myContainer">
            <router-outlet></router-outlet>
        </div>
        <my-error></my-error>

    `,
    styles: [`
        .router-link-active{
            color:white;
            cursor:default;
            background-color: #fff;
            border: 1px solid #ddd;
            border-bottom-color: transparent;
        }
        .navbar-default .navbar-nav>li>a {
            color:white;
        }
        #myContainer{
            width:80%;
            margin-left:10%;
            margin-top:0px;
        }
    `]
})
export class AppComponent {
}
