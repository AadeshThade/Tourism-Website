import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './more.component.html',
  styleUrl: './more.component.css'
})
export class MoreComponent {

}
