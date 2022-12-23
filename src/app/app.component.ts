import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  ngOnInit(): void { }

  ngAfterViewInit() {
    let date = document.getElementsByClassName('datepicker-here');
    console.log(date);
  }
}
