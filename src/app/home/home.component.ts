import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgbCarousel,
  NgbCarouselModule,
   NgbSlideEvent,
    NgbSlideEventSource 
   } from '@ng-bootstrap/ng-bootstrap';
import { Home } from '../jsonn';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,MatToolbarModule, MatButtonModule, MatIconModule,NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	constructor(private http:HttpClient){}
     name:string=""
	products:any=[];
	productFound(){
	  this.http.get("http://localhost:5555/getallprodbycode/"+this.name).subscribe(
		data=>{
		  this.products=[data]
		},
		error=>{
		  alert("error")
		  console.log(error);
		  
		}
	  )
	}
 carosel:Home[]=[
	{
		title: 'Jaipur,Rajasthan',
		description: ' Jaipur - The Pink City of India, the capital of Rajasthan, is a vibrant blend of history, culture, and stunning architecture. Known as the Pink City due to its distinctive terracotta-colored buildings, Jaipur offers visitors a rich tapestry of experiences.',
		image: 'Jaipur.jpg'
	},
	{
		title: 'Kochi,Kerela',
		description: 'happy happy happy',
		image: 'kerela.jpeg'
	},
	{
		title: 'Panji,Goa',
		description: 'happy happy happy',
		image: 'goaa.jpg'
	},
	{
		title: 'Srinagar,Kashmir',
		description: 'happy happy happy',
		image: 'kash.jpg'
	},
	{
		title: 'Shillong,Meghalaya',
		description: 'happy happy happy',
		image: 'shillong.jpg'
	},
	{
		title: 'Manali',
		description: 'happy happy happy',
		image: 'manali.jpeg'
	},
	{
		title: 'Pongong Lake,Ladakh',
		description: 'happy happy happy',
		image: 'ladakh.jpg'
	},
	
 ]
	images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
	image=["kerela.jpeg","goa.jpg","kash.jpg","shillong.jpg","manali.jpeg","ladakh.jpg"]

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
  carousel: NgbCarousel = new NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
		
	}
}
