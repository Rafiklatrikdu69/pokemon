import { debounceTime, distinct, map, mergeMap, Observable, toArray } from "rxjs";
import { Pokemon } from "../models/pokemon.model";
import { PokemonRepo } from "../repository/PokemonRepo.repository";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class PokemonImpl extends PokemonRepo{
    http = inject(HttpClient)
    override typePokemons(): Observable<string[]> {
        return new Observable<string[]>()
    //   const pokemons = this.http.get<Pokemon[]>('pokemon.json').pipe(
    //     toArray()
    //   );

    //   const typePokemons = pokemons.pipe(
    //     map(p =>p.map(poke=>poke.))
    //   )
    //    pokemons.pipe(
    //     mergeMap(pokemons => pokemons.map(pokemon => pokemon.type)),
    //     mergeMap(types => types),
    //     distinct(),
    //     toArray(),
    //   )
    //   return typePokemons;
    }
    override getAllPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>('pokemon.json')
    }
    
}