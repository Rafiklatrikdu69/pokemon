import { Observable } from "rxjs";
import { Pokemon } from "../models/pokemon.model";

export abstract class PokemonRepo {
    abstract getAllPokemons(): Observable<Pokemon[]>;
    abstract typePokemons(): Observable<string[]>;
}