import { Component } from '@angular/core';

@Component({
  selector: 'click-logger',
  templateUrl: './clickLogger.component.html',
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class ClickLoggerComponent {
  displayToggled = true;
  clickLogs: number[] = [];

  onClickLog() {
    this.displayToggled = !this.displayToggled;
    this.clickLogs.push(this.clickLogs.length + 1);
  }
}
