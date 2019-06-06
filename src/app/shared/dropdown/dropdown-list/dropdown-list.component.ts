import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  host: { class: "ft tt" }
})
export class DropdownListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
