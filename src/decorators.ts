import { Pizza } from './pizza.interface';

// Головний декоратор, який обгортає будь-яку піцу
export abstract class PizzaDecorator implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }

    getDescription(): string {
        return this.pizza.getDescription();
    }

    getCost(): number {
        return this.pizza.getCost();
    }
}

// Додаємо сир (+35 грн)
export class CheeseDecorator extends PizzaDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()} + сир моцарела`;
    }

    getCost(): number {
        return this.pizza.getCost() + 35;
    }
}

// Додаємо ковбасу (+45 грн)
export class SausageDecorator extends PizzaDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()} + пікантна ковбаса`;
    }

    getCost(): number {
        return this.pizza.getCost() + 45;
    }
}

// Додаємо овочі (+25 грн)
export class VegetableDecorator extends PizzaDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()} + свіжі овочі`;
    }

    getCost(): number {
        return this.pizza.getCost() + 25;
    }
}

// Додаємо соус (+20 грн)
export class SauceDecorator extends PizzaDecorator {
    private sauceName: string;

    constructor(pizza: Pizza, sauceName: string = 'часниковий соус') {
        super(pizza);
        this.sauceName = sauceName;
    }

    getDescription(): string {
        return `${this.pizza.getDescription()} + ${this.sauceName}`;
    }

    getCost(): number {
        return this.pizza.getCost() + 20;
    }
}
