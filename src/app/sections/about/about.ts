import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [SectionHeadingComponent],
  templateUrl: './about.html',
})
export class About {
  aboutDetails = [
  {
    title: 'I like to create',
    description: 'Practical ideas that become real',
  },
  {
    title: 'I like to improve',
    description: 'Test, refine, and make the next version better',
  },
  {
    title: 'I like to solve',
    description: 'Find the root cause and build a practical fix',
  },
  {
    title: 'Working style',
    description: 'Hands on, curious, and resourceful',
  },
];
}
