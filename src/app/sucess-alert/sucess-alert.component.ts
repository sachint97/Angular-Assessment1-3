import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-alert',
  template: `
  <div class="alert alert-success container-md">
  You are able to do it, success!
  </div>
  `,
  styles: [
  ]
})
export class SucessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
