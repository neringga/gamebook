import { Component } from '@angular/core';

@Component({
  selector: 'request',
  templateUrl: './request.component.html'
})
export class RequestComponent {

  constructor() { }

  public sumbitRequestForm() {
    window.alert('Forma pateikta sėkmingai');
  }
}