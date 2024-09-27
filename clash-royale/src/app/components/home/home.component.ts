import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PokemonService } from '../../../domain/services/PokemonService';
import { CardPokemonComponent } from "../card-pokemon/card-pokemon.component";
import { FiltreFormComponent } from "../filtre-form/filtre-form.component";
import { filter, map } from 'rxjs';
import { Pokemon } from '../../../domain/models/pokemon.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    CardPokemonComponent,
    FiltreFormComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  pokemonService = inject(PokemonService);
  pokemons$ = this.pokemonService.getPokemons()
  filter =  signal('');;
  filterComputed = computed(() => {
    const filterValue = this.filter();  
    return this.pokemons$.pipe(
      map(pokemons => pokemons.filter(pokemon => (pokemon.nom.includes(filterValue) || '')))
    );
  });
  
  
  onSubmit($event:any){
    this.filter.set($event);
    console.log($event)
  }
}
