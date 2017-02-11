import {
  Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild,
  ElementRef, AfterViewInit
} from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:rect
      #rect
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements AfterViewInit {
  @Input() box;
  @Input() selected;

  @ViewChild('rect')
  set rect(value: ElementRef) {
    console.log(value);
    if (value) {
      value.nativeElement['BoxComponent'] = this;
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }

  update() {
    this.changeDetectorRef.detectChanges();
  }
}
