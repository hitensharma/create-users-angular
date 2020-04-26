import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() boxColor;
  @Input() placeholderText;

  @Output() inputEvent = new EventEmitter();

  @Input() count: number;

  onCreate = (inpValue) => {
    if (inpValue.value.length > 0) {
      this.count = this.count + 1;
      //alert(inpValue.value);
      this.inputEvent.emit(inpValue.value);
    }
  };
}
