import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownComponent } from "./dropdown.component";
import { DropdownToggleComponent } from "./dropdown-toggle/dropdown-toggle.component";
import { DropdownListComponent } from "./dropdown-list/dropdown-list.component";
import { DropdownItemComponent } from "./dropdown-item/dropdown-item.component";

const components = [
  DropdownComponent,
  DropdownToggleComponent,
  DropdownListComponent,
  DropdownItemComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class DropdownModule {}
