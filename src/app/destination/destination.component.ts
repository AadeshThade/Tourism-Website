import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
// import { GatewayComponent } from '../pay/gateway/gateway.component';
import { Activities, Destination, Hotels, images } from '../jsonn';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PayComponent } from '../pay/pay.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { PlaceInfoComponent } from './place-info/place-info.component';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [FormsModule,RouterOutlet,MatButtonToggleModule,MatChipsModule,MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,CommonModule, NgbModule,HttpClientModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationComponent {
  dest:any=[]
  constructor( private _dialog: MatDialog,private rout:Router,private http:HttpClient){
    const dialogConfig = new MatDialogConfig();
    this.http.get("http://localhost:5555/getAllDestinations").subscribe(
      data=>{
        this.dest=data
        console.log(this.dest);
        
      },
      error=>{
        alert("error")
        console.log(error);
        
      }
    )

  }

   places:Destination[]=[
    
    {
      name: "Kochi", location: "Kerela",
      description: 'Kochi, often referred to as Cochin, is a captivating port city on the southwest coast of India. Known for its rich history, diverse culture, and stunning natural beauty, Kochi is a must-visit destination for anyone seeking an immersive travel experience in Kerala.',
      image: 'kerela.jpeg',
  
      hotels: [
        {
          name: " The Grand Royale", location: "",
          description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
          image: 'h1.jpg',
          
          package1: [],
          price: 10000,
          members: 4
        },
        {
          name: "Paradise Cove Resort", location: "",
          description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
          image: 'h5.jpg',
          
          package1: [],
          price: 7500,
          members: 2
        },
        
        {
          name: " Green Leaf Eco-Hotel & Spa", location: "",
          description: 'Committed to sustainability, Green Leaf Eco-Hotel & Spa offers a tranquil retreat where luxury meets nature. Our hotel is designed with eco-friendly practices in mind, from solar-powered energy to locally sourced materials.',
          image: 'h3.jpg',
        
          package1: [],
          price: 8000,
          members: 3
        },
        {
          name: "The Heritage Inn", location: "",
          description: 'Step back in time at The Heritage Inn, a beautifully restored hotel that combines historic charm with modern comforts. Located in a building dating back to the 19th century, our hotel features original architectural details, antique furnishings, and a rich history that tells the story of the city. ',
          image: 'h4.png',
    
          package1: [],
          price: 5690,
          members: 2
        },
        {
          name: " Urban Chic Boutique Hotel", location: "",
          description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
          image: 'h2.webp',
    
          package1: [],
          price: 15000,
          members: 6
        },
        {
          name: "Frosted Pines Eco-Resort", location: "",
          description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
          image: 'h6.jpg',
        
          package1: [],
          price: 12599,
          members: 5
        },
      ],
      activities: [
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
      ],
      images: [
        {
          first: 'kerela.jpeg',
          second: 'kerela4.jpg',
          third: 'kerela3.jpg',
          fourth: 'kerela2.jpeg'
        }
      ]
    },
    {
      name: "Panji",
      location: "Goa",
      description: 'Panji, the vibrant capital of Goa, invites you to explore its blend of historic charm and modern vibrancy. Nestled along the Mandovi River, this bustling city is a treasure trove of colonial architecture, vibrant markets, and scenic views.',
      image: 'goaa.jpg',
      
      hotels: [
        {
          name: " The Grand Royale", location: "",
          description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
          image: 'h1.jpg',
          
          package1: [],
          price: 10000,
          members: 4
        },
        {
          name: "Paradise Cove Resort", location: "",
          description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
          image: 'h5.jpg',
          
          package1: [],
          price: 7500,
          members: 2
        },
        
        {
          name: " Green Leaf Eco-Hotel & Spa", location: "",
          description: 'Committed to sustainability, Green Leaf Eco-Hotel & Spa offers a tranquil retreat where luxury meets nature. Our hotel is designed with eco-friendly practices in mind, from solar-powered energy to locally sourced materials.',
          image: 'h3.jpg',
        
          package1: [],
          price: 8000,
          members: 3
        },
        {
          name: "The Heritage Inn", location: "",
          description: 'Step back in time at The Heritage Inn, a beautifully restored hotel that combines historic charm with modern comforts. Located in a building dating back to the 19th century, our hotel features original architectural details, antique furnishings, and a rich history that tells the story of the city. ',
          image: 'h4.png',
    
          package1: [],
          price: 5690,
          members: 2
        },
        {
          name: " Urban Chic Boutique Hotel", location: "",
          description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
          image: 'h2.webp',
    
          package1: [],
          price: 15000,
          members: 6
        },
        {
          name: "Frosted Pines Eco-Resort", location: "",
          description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
          image: 'h6.jpg',
        
          package1: [],
          price: 12599,
          members: 5
        },
      ],
      activities: [
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
      ],
      images: []
    },
    {
      name: "Pongong Lake", location: "Ladakh",
      description: 'Pangong Lake, nestled at an altitude of 4,350 meters (14,270 feet) in the Himalayas, is a breathtaking natural wonder that stretches across the border between India and China. Known for its mesmerizing beauty and vibrant hues, Pangong Lake offers an unparalleled experience of tranquility and awe.',
      image: 'ladakh.jpg',
  
      hotels: [ {
        name: " The Grand Royale", location: "",
        description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
        image: 'h1.jpg',
        
        package1: [],
        price: 10000,
        members: 4
      },
      {
        name: "Paradise Cove Resort", location: "",
        description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
        image: 'h5.jpg',
        
        package1: [],
        price: 7500,
        members: 2
      },
      
      {
        name: " Green Leaf Eco-Hotel & Spa", location: "",
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
        name: " Urban Chic Boutique Hotel", location: "",
        description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
        image: 'h2.webp',
  
        package1: [],
        price: 15000,
        members: 6
      },
      {
        name: "Frosted Pines Eco-Resort", location: "",
        description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
        image: 'h6.jpg',
      
        package1: [],
        price: 12599,
        members: 5
      },
    ],
      activities: [],
      images: []
    },
    {
      name: "Manali", location: "Manali",
      description: 'Manali, nestled in the Kullu Valley of Himachal Pradesh, is a picturesque hill station renowned for its stunning landscapes, adventure activities, and vibrant culture. Set against the backdrop of the majestic Himalayas, Manali offers a perfect blend of natural beauty and thrilling experiences.',
      image: 'manali.jpeg',
    
      hotels: [
        {
          name: " The Grand Royale", location: "",
          description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
          image: 'h1.jpg',
          
          package1: [],
          price: 10000,
          members: 4
        },
        {
          name: "Paradise Cove Resort", location: "",
          description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
          image: 'h5.jpg',
          
          package1: [],
          price: 7500,
          members: 2
        },
        
        {
          name: " Green Leaf Eco-Hotel & Spa", location: "",
          description: 'Committed to sustainability, Green Leaf Eco-Hotel & Spa offers a tranquil retreat where luxury meets nature. Our hotel is designed with eco-friendly practices in mind, from solar-powered energy to locally sourced materials.',
          image: 'h3.jpg',
        
          package1: [],
          price: 8000,
          members: 3
        },
        {
          name: "The Heritage Inn", location: "",
          description: 'Step back in time at The Heritage Inn, a beautifully restored hotel that combines historic charm with modern comforts. Located in a building dating back to the 19th century, our hotel features original architectural details, antique furnishings, and a rich history that tells the story of the city. ',
          image: 'h4.png',
    
          package1: [],
          price: 5690,
          members: 2
        },
        {
          name: " Urban Chic Boutique Hotel", location: "",
          description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
          image: 'h2.webp',
    
          package1: [],
          price: 15000,
          members: 6
        },
        {
          name: "Frosted Pines Eco-Resort", location: "",
          description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
          image: 'h6.jpg',
        
          package1: [],
          price: 12599,
          members: 5
        },
      ],
      activities: [],
      images: []
    },
    {
      name: "Shillong", location: "Meghalaya",
      description: 'Shillong, the capital city of Meghalaya, is a picturesque hill station often referred to as the "Scotland of the East" due to its lush landscapes, rolling hills, and serene atmosphere. Nestled in the northeastern part of India, Shillong offers a delightful blend of natural beauty, cultural heritage, and vibrant local life.',
      image: 'shillong.jpg',
    
      hotels: [
        {
          name: " The Grand Royale", location: "",
          description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
          image: 'h1.jpg',
          
          package1: [],
          price: 10000,
          members: 4
        },
        {
          name: "Paradise Cove Resort", location: "",
          description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
          image: 'h5.jpg',
          
          package1: [],
          price: 7500,
          members: 2
        },
        
        {
          name: " Green Leaf Eco-Hotel & Spa", location: "",
          description: 'Committed to sustainability, Green Leaf Eco-Hotel & Spa offers a tranquil retreat where luxury meets nature. Our hotel is designed with eco-friendly practices in mind, from solar-powered energy to locally sourced materials.',
          image: 'h3.jpg',
        
          package1: [],
          price: 8000,
          members: 3
        },
        {
          name: "The Heritage Inn", location: "",
          description: 'Step back in time at The Heritage Inn, a beautifully restored hotel that combines historic charm with modern comforts. Located in a building dating back to the 19th century, our hotel features original architectural details, antique furnishings, and a rich history that tells the story of the city. ',
          image: 'h4.png',
    
          package1: [],
          price: 5690,
          members: 2
        },
        {
          name: " Urban Chic Boutique Hotel", location: "",
          description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
          image: 'h2.webp',
    
          package1: [],
          price: 15000,
          members: 6
        },
        {
          name: "Frosted Pines Eco-Resort", location: "",
          description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
          image: 'h6.jpg',
        
          package1: [],
          price: 12599,
          members: 5
        },
      ],
      activities: [],
      images: []
    },
    {
      name: "Srinagar", location: "Kashmir",
      description: 'Srinagar, the summer capital of Jammu and Kashmir, is renowned for its breathtaking landscapes, serene lakes, and rich cultural heritage. Often described as a paradise on earth, Srinagar offers visitors an enchanting blend of natural beauty, historical sites, and unique local experiences.',
      image: 'kash.jpg',
    
      hotels: [
        {
          name: " The Grand Royale", location: "",
          description: 'Located in the heart of the city, The Grand Royale is an epitome of luxury and elegance. With breathtaking views of the skyline, our hotel offers 5-star amenities including a world-class spa, gourmet dining experiences, and spacious suites with marble bathrooms',
          image: 'h1.jpg',
          
          package1: [],
          price: 10000,
          members: 4
        },
        {
          name: "Paradise Cove Resort", location: "",
          description: 'Welcome to Paradise Cove Resort, where the crystal-clear waters of the ocean meet pristine sandy beaches. Located on a secluded island, our resort offers the perfect escape from the hustle and bustle of everyday life. ',
          image: 'h5.jpg',
          
          package1: [],
          price: 7500,
          members: 2
        },
        
        {
          name: " Green Leaf Eco-Hotel & Spa", location: "",
          description: 'Committed to sustainability, Green Leaf Eco-Hotel & Spa offers a tranquil retreat where luxury meets nature. Our hotel is designed with eco-friendly practices in mind, from solar-powered energy to locally sourced materials.',
          image: 'h3.jpg',
        
          package1: [],
          price: 8000,
          members: 3
        },
        {
          name: "The Heritage Inn", location: "",
          description: 'Step back in time at The Heritage Inn, a beautifully restored hotel that combines historic charm with modern comforts. Located in a building dating back to the 19th century, our hotel features original architectural details, antique furnishings, and a rich history that tells the story of the city. ',
          image: 'h4.png',
    
          package1: [],
          price: 5690,
          members: 2
        },
        {
          name: " Urban Chic Boutique Hotel", location: "",
          description: 'Nestled in a quaint neighborhood, Urban Chic Boutique Hotel is a haven for those seeking a unique and intimate experience. Each room is individually decorated with contemporary art and handcrafted furniture, reflecting the charm and culture of the city.',
          image: 'h2.webp',
    
          package1: [],
          price: 15000,
          members: 6
        },
        {
          name: "Frosted Pines Eco-Resort", location: "",
          description: 'Embrace the natural beauty of the snowy hills at Frosted Pines Eco-Resort, where sustainability meets luxury in a pristine winter landscape. Our eco-friendly resort is built with locally sourced, sustainable materials and powered by renewable energy. ',
          image: 'h6.jpg',
        
          package1: [],
          price: 12599,
          members: 5
        },
      ],
      activities: [],
      images: []
    },
  ]
  location: string =this.dest.location;
  hotel:Hotels[]=[];
  activity:Activities[]=[];
  images:images[]=[];

  getplace(location: string, hotels: Hotels[], activities: Activities[],images:images[]) {
    const queryParams: any = {
        location: location,
        hotels: hotels.map(hotel => JSON.stringify(hotel)), // Serialize each hotel object
        activities: activities.map(activity => JSON.stringify(activity)), // Serialize each activity object
        images:images.map(images => JSON.stringify(images))
    };

    this.rout.navigate(['/place'], { queryParams: queryParams });
}
  
onImageClick() {
  this.rout.navigate(['/login']);
  }
}
