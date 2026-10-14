import { Pizza } from './pizza.interface';

// Базова піца (просто корж з томатним соусом)
export class BasePizza implements Pizza {
    getDescription(): string {
        return 'Базова піца (корж, томатний соус)';
    }

    getCost(): number {
        return 120; // початкова ціна
    }
}
