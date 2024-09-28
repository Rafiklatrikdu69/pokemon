import { inject, Injectable } from '@angular/core';
import { GetItemUseCase } from '../usecases/getIPokemon.use-case';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonCase = inject(GetItemUseCase)
  getPokemons(){
    return  this.pokemonCase.execute();
  }
}
