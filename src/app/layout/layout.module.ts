import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

import { LayoutComponent } from "./layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContentComponent } from "./content/content.component";

import { DropdownModule } from "../shared/dropdown/dropdown.module";

import { HomeModule } from "../home/home.module";
import { LayoutAsideComponent } from './layout-aside/layout-aside.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, ContentComponent, LayoutAsideComponent],
  imports: [CommonModule, LayoutRoutingModule, DropdownModule, HomeModule]
})
export class LayoutModule {}
