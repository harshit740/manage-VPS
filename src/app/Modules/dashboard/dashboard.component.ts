import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  breakpoint = 5;
  ngOnInit() {
    this.setBreakpoint();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 832) ? 3  : 5;
  }

  setBreakpoint() {
    if (window.innerWidth <= 832) {
      this.breakpoint =  3;
    } else if (window.innerWidth <= 400) {
      this.breakpoint =  2;
    } else {
      this.breakpoint = 5;
    }
  }

}
