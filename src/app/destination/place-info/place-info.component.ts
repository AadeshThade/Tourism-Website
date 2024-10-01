
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Activities, Hotels, images, Tile } from '../../jsonn';
import { HotelsComponent } from '../../hotels/hotels.component';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-place-info',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HotelsComponent, MatButtonToggleModule, MatGridListModule, MatChipsModule, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, CommonModule, NgbModule],
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.css']  // Fix typo (styleUrl -> styleUrls)
})
export class PlaceInfoComponent {
  tiles: Tile[] = [
  ];
  
  location: string = '';
  hotels: Hotels[] = [];  // Initialize as an empty array
  activity: Activities[] = [];
  images:images[]=[]

  constructor(private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params => {
      console.log('Received params:', params);

      this.location = params['location'];

      this.hotels = (Array.isArray(params['hotels']) ? params['hotels'] : [params['hotels']])
        .filter(hotel => hotel)
        .map((hotel: string) => JSON.parse(hotel));

      this.activity = (Array.isArray(params['activities']) ? params['activities'] : [params['activities']])
        .filter(activity => activity)
        .map((activity: string) => JSON.parse(activity));

        this.images = (Array.isArray(params['images']) ? params['images'] : [params['images']])
        .filter(images => images);

      console.log('Location:', this.location);
      console.log('Hotels:', this.hotels);
      console.log('Activities:', this.activity);
      console.log('Images:', this.images);
      this.updateTilesWithImages();
    });

    this.tiles= [
      { text: '', cols: 3, rows: 1, image: 'ladakh.jpg' },
      { text: '', cols: 1, rows: 2, image: 'goaa.jpg' },
      { text: '', cols: 1, rows: 1, image: 'kash.jpg' },
      { text: '', cols: 2, rows: 1, image: 'kerela.jpeg' },
    ];
  }

  updateTilesWithImages() {
  
  }
  price: number=0;

  onImageClick(price: number) {
    this.router.navigateByUrl(`/pay/${price}`);
  }
  login(price: number){
    this.router.navigateByUrl(`/login/${price}`);
  }

}
