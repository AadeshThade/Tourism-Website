import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PayComponent } from '../pay/pay.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { GatewayComponent } from '../pay/gateway/gateway.component';
import { Hotels } from '../jsonn';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [MatButtonToggleModule,MatChipsModule,MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,CommonModule,HttpClientModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  hotel:any=[];
  constructor( private _dialog: MatDialog,private rout:Router,private http:HttpClient){
    const dialogConfig = new MatDialogConfig();
    this.http.get("http://localhost:5555/getAllHotels").subscribe(
      data=>{
        this.hotel=data
      },
      error=>{
        alert("Error occured. ")
        console.log(error);
        
      }
    )
    console.log(this.hotel);
    
  }

  hotels:Hotels[]=[
    {
      name: " The Grand Royale", location: "Goa",
      description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
      image: 'h1.jpg',
      
      package1: [],
      price: 10000,
      members: 4
    },
    {
      name: "Paradise Cove Resort", location: "Kerela",
      description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
      image: 'h5.jpg',
      
      package1: [],
      price: 7500,
      members: 2
    },
    
    {
      name: " Green Leaf Eco-Hotel & Spa", location: "Manali",
      description: 'Committed to sustainability, Green Leaf Eco-Hotel & Spa offers a tranquil retreat where luxury meets nature. Our hotel is designed with eco-friendly practices in mind, from solar-powered energy to locally sourced materials.',
      image: 'h3.jpg',
    
      package1: [],
      price: 8000,
      members: 3
    },
    {
      name: "The Heritage Inn", location: "Shillong",
      description: 'Step back in time at The Heritage Inn, a beautifully restored hotel that combines historic charm with modern comforts. Located in a building dating back to the 19th century, our hotel features original architectural details, antique furnishings, and a rich history that tells the story of the city. ',
      image: 'h4.png',

      package1: [],
      price: 5690,
      members: 2
    },
    {
      name: " Urban Chic Boutique Hotel", location: "Ladakh",
      description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
      image: 'h2.webp',

      package1: [],
      price: 15000,
      members: 6
    },
    {
      name: "Frosted Pines Eco-Resort", location: "Kashmir",
      description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
      image: 'h6.jpg',
    
      package1: [],
      price: 12599,
      members: 5
    },

  ]

  onImageClick() {
  

  }
}
