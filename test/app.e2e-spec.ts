import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import pokeApiDittoNormalizeFixture from './fixtures/poke_api_ditto_normalize.json';
console.log("🚀 ~ file: app.e2e-spec.ts ~ line 6 ~ pokeApiDittoNormalizeFixture", pokeApiDittoNormalizeFixture)

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pokemons/:pokemon (GET)', () => {
    return request(app.getHttpServer())
      .get('/pokemons/ditto')
      .expect(200)
      .expect(pokeApiDittoNormalizeFixture);
  });
});
