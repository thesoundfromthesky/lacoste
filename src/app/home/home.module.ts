import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { ResizeDirective } from "../shared/directives/resize.directive";

@NgModule({
  declarations: [HomeComponent, ResizeDirective],
  imports: [CommonModule]
})
export class HomeModule {}
