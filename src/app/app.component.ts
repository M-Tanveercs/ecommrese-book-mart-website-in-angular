import { Component } from '@angular/core';
import { AuthServiceService } from './core/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-Mart';
  constructor( ){
    
  }
}
