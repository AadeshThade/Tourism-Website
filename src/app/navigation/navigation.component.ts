import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbCarousel,
  NgbCarouselModule,
   NgbSlideEvent,
    NgbSlideEventSource 
   } from '@ng-bootstrap/ng-bootstrap';
// import { GatewayComponent } from '../pay/gateway/gateway.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,CommonModule,FormsModule,MatToolbarModule, MatButtonModule, MatIconModule,NgbCarouselModule,MatCardModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor( private _dialog: MatDialog,private rout:Router){
    const dialogConfig = new MatDialogConfig();
  }
  login(){
    this.rout.navigateByUrl("/login")
  }
  menu(){
  
    };
  }

