import { Component } from '@angular/core';
import { Activities } from '../jsonn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  onImageClick() {
    // Handle the click event
    console.log('Image button clicked!');
    // Add your logic here
  }
  activities:Activities[]=[
    {
      activity: 'Trekking',
      image: 'trekking.jpg'
    },
    {
      activity: 'JetSciing',
      image: 'jet.webp'
    },
    {
      activity: 'Scuba-Diving',
      image: 'scuba.jpg'
    },
    {
      activity: 'Paragliding',
      image: 'para.jpg'
    },
    {
      activity: 'River-Rafting',
      image: 'river.jpg'
    },
    
   
    {
      activity: 'Bungee-Jumping',
      image: 'bungee.jpg'
    },
    
  ]
}
