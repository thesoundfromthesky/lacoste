import { Component, OnInit } from "@angular/core";

@Component({
  selector: "layout-aside",
  templateUrl: "./layout-aside.component.html",
  styleUrls: ["./layout-aside.component.scss"],
  host: { class: "block bgc max-w" }
})
export class LayoutAsideComponent implements OnInit {
  items = [
    { title: "THE POLO SAVIOR-FAIRE", img: "./assets/img/pic1.png" },
    { title: "NEW FILM : TIMELESS ELLEGANCE", img: "./assets/img/pic2.png" },
    { title: "ALL ABOUT LACOSTE", img: "./assets/img/pic3.png" }
  ];
  constructor() {}

  ngOnInit() {}

  trackByFn(index: number): number {
    return index;
  }
}
