import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'time-in-project',
  templateUrl: './time-in-project.component.html',
  styleUrls: ['./time-in-project.component.sass']
})
export class TimeInProjectComponent {

  @Input() totalTime: number;
  @Output() addedTimeAfter: EventEmitter<number> = new EventEmitter<number>();
  private timePlus: number = 13;

  timeAdd(): void {
    this.addedTimeAfter.emit(this.totalTime + this.timePlus);
  }
}
