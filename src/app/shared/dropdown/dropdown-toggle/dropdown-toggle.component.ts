import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dropdown-toggle",
  templateUrl: "./dropdown-toggle.component.html",
  styleUrls: ["./dropdown-toggle.component.scss"],
  host: { class: "ft tt" }
})
export class DropdownToggleComponent implements OnInit {
  @Input("label") label: string;

  constructor() {}

  ngOnInit() {}
}
