import { Component } from '@angular/core';

@Component({
  selector: 'app-fisrt-component',
  standalone: true,
  imports: [],
  templateUrl: './fisrt-component.component.html',
  styleUrl: './fisrt-component.component.css'
})
export class FisrtComponentComponent {
  name: string = "Manoel";
  age: number = 20;
  job = "Programador";
  hobbies = ["Videogame", "Anime", "Leitura"];
  car = {
    model: "Fiat Palio",
    year: 1997
  }
}
