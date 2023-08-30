import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(
    private service:PokemonService
  ){

  }

  name:string = 'PIKACHU'
  attributesType:string[] = ['FIRE', 'ROCK']

}
