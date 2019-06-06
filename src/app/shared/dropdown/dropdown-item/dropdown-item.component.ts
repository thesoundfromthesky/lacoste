import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dropdown-item",
  templateUrl: "./dropdown-item.component.html",
  styleUrls: ["./dropdown-item.component.scss"],
  host: { class: "block px py min-h brb mb bgc" }
})
export class DropdownItemComponent implements OnInit {
  @Input("item") item: string;

  constructor() {}

  ngOnInit() {}
}
