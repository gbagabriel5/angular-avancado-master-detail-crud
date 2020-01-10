import { InMemoryDbService, httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import {Category} from './pages/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Lazer', description: 'Cinema,parques, praias, etc'},
      { id: 2, name: 'Esportes', description: 'Basquete, Natação e Futebol'}
    ];
    return { categories };
  }
}
