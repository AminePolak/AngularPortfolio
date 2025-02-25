import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
