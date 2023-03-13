import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLogin: boolean = true;
  showData: boolean = false;

  register = {
    user: "",
    password: ""
  };

  enviar() {
    this.showData = true;
    this.showLogin = false;
  }

  onBack(back: boolean) {
    this.showData = !back;
    this.showLogin = back;
  }
}
