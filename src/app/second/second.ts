import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
})
export class Second {
  @Input({ required: true }) txtColor: string = 'aqua';

  @Output() eventToParent = new EventEmitter();

  sendEvent() {
    this.eventToParent.emit('Message de la part du Second Component');
  }
}
