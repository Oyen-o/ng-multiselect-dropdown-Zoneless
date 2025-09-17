import { Component, Input } from '@angular/core';

@Component({
  selector: 'sample-section',
  templateUrl: './sample-section.component.html',
  standalone: false,
})
export class SampleSectionComponent{
  @Input() public desc: any;
}
