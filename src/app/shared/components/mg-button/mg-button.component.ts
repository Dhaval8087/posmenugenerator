import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'mg-button',
  templateUrl: './mg-button.component.html',
  styleUrls: ['./mg-button.component.scss']
})
export class MgButtonComponent implements OnInit {

  @Input() label;
  @Input() css;
  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClicked($event) {
    this.onButtonClicked.emit($event);
  }
}
