import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  nome: string = "Julian";
  idade: string = "33 anos";
  gosto: string = "Escutar música, tocar o violão, comer, programar e dormir (muito)";
  pais: string = "Argentina";
  urlImagen: string = "./IMG_9952.JPG";
  
  constructor() { }

  ngOnInit(): void {
  }

}
