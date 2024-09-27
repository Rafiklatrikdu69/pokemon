import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { Pokemon } from "../models/pokemon.model";
import { PokemonRepo } from "../repository/PokemonRepo.repository";
import { inject } from "@angular/core";

export class GetItemUseCase implements UseCase<void,Pokemon[]>{
    pokemonRepository = inject(PokemonRepo)
    execute(): Observable<Pokemon[]> {
        return this.pokemonRepository.getAllPokemons()
    }

}