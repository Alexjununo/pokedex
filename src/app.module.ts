import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemons/pokemon.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    PokemonModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
