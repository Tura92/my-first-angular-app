import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-name',
  templateUrl: './user-name.component.html',
})
export class UserNameComponent implements OnInit {
  userName = '';

  ngOnInit() {}

  resetUserName() {
    this.userName = '';
  }
}
