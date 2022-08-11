import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <div class="alert alert-danger container-md">
  This is a warning message, you are in danger!
  </div>
  `,
  styles: [
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
