import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'login-data',
    templateUrl: './login-data.component.html'
})
export class LoginDataComponent {

    constructor(private router: Router){ }

    public login() {
        this.router.navigateByUrl('/main');
    }
}