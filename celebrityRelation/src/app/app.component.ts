import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompareCelebrityComponent } from './compare-celebrity/compare-celebrity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompareCelebrityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'celebrityRelation';
}
