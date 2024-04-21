import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FisrtComponentComponent } from './components/fisrt-component/fisrt-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FisrtComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
