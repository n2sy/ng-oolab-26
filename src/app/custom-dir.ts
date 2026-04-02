import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDir {
  @HostBinding('style.backgroundColor') bgColor;
  @HostBinding('style.color') txtColor;

  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'grey';
    this.txtColor = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'aqua';
    this.txtColor = 'black';
  }
}
