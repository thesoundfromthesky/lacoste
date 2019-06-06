import { Component, OnInit } from "@angular/core";

import { Dropdown } from "src/app/shared/dropdown/model/dropdown";

@Component({
  selector: "layout-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  host: { class: "block bgc max-w" }
})
export class NavbarComponent implements OnInit {
  dropdowns: Dropdown[] = [
    { toggle: "lacoste", list: ["english"] },
    { toggle: "brand info", list: ["history", "campaign"] },
    { toggle: "community", list: ["find a boutique", "customer service"] },
    {
      toggle: "product value",
      list: ["lacoste live", "lacoste sport", "customer POLO"]
    },
    {
      toggle: "discover more",
      list: [
        "René Lacoste",
        "keydates",
        "the lacoste style",
        "sport and elegance"
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}

  trackByFn(index: number): number {
    return index;
  }
}
