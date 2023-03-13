import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {

  @Output() back = new EventEmitter<boolean>();

  @Input() register = {
    user: "",
    password: ""
  };

  goBack() {
    this.back.emit(true);
  }
}
