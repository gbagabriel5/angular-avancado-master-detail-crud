import { InMemoryDbService, httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, name: 'Lazer', description: 'Cinema,parques, praias, etc'},
      { id: 2, name: 'Esportes', description: 'Basquete, Natação e Futebol'}
    ];
    return { categories };
  }
}
