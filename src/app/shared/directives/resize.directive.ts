import { Directive, Inject, ElementRef, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Directive({
  selector: "[resize]"
})
export class ResizeDirective {
  //HTML5 canvas resizing
  //https://www.html5rocks.com/en/tutorials/casestudies/gopherwoord-studios-resizing-html5-games/
  //https://webglfundamentals.org/webgl/lessons/webgl-anti-patterns.html
  readonly width: number = 1120;
  readonly height: number = 636;
  readonly widthToHeight: number = 1.761006;
  readonly heightToWidth: number = 0.567857;

  newWidth: number;
  newHeight: number;
  newWidthToHeight: number;

  constructor(
    @Inject(DOCUMENT) private d: Document,
    private el: ElementRef,
    private r2: Renderer2
  ) {
    this.resize();
    this.r2.listen("window", "resize", this.resize);
  }

  readonly resize: () => void = (): void => {
    this.newWidth = this.d.documentElement.clientWidth;
    this.newHeight = this.d.documentElement.clientHeight;
    this.newWidthToHeight = this.newWidth / this.newHeight;

    if (this.widthToHeight < this.newWidthToHeight) {
      this.newWidth = this.newHeight * this.widthToHeight;
    } else {
      this.newHeight = this.newWidth * this.heightToWidth;
    }
    this.r2.setStyle(this.el.nativeElement, "width", `${this.newWidth}px`);
    this.r2.setStyle(this.el.nativeElement, "height", `${this.newHeight}px`);
  };
}
