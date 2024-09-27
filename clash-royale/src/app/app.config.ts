import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GetItemUseCase } from '../domain/usecases/getIPokemon.use-case';
import { PokemonRepo } from '../domain/repository/PokemonRepo.repository';
import { PokemonImpl } from '../domain/services/PokemonImpl';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
function ItemFactory(){
  return new GetItemUseCase()
}
const  PokemonProvider  = {
  provide:GetItemUseCase,
  useFactory:ItemFactory,
  deps:[PokemonRepo]

}
const provideRepoPokemon = {
  provide:PokemonRepo,
  useClass:PokemonImpl
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(),
     provideRepoPokemon,
     PokemonProvider, provideAnimationsAsync()
    ]
};
