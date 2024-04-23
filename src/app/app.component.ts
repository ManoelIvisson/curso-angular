import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FisrtComponentComponent } from './components/fisrt-component/fisrt-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent} from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FisrtComponentComponent, ParentDataComponent, DirectivesComponent, CommonModule, IfRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Tomé";
  userData = {
    email: "tome@hotmail.com",
    role: "Admin"
  };

  title = 'curso-angular';
}
