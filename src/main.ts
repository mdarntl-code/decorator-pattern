import { Pizza } from './pizza.interface';
import { BasePizza } from './base-pizza';
import {
    CheeseDecorator,
    SausageDecorator,
    VegetableDecorator,
    SauceDecorator
} from './decorators';

// Функція для виведення чека в консоль
function printOrder(title: string, pizza: Pizza): void {
    console.log(`\n--- ${title} ---`);
    console.log(`Склад: ${pizza.getDescription()}`);
    console.log(`Ціна:  ${pizza.getCost()} грн`);
}

console.log('🍕 Замовлення піци:');

// 1. Проста піца без добавок
const simplePizza = new BasePizza();
printOrder('Звичайна піца', simplePizza);

// 2. М\'ясна піца (додаємо подвійний сир, ковбасу і соус)
let meatPizza: Pizza = new BasePizza();
meatPizza = new CheeseDecorator(meatPizza);            // перший шар сиру
meatPizza = new CheeseDecorator(meatPizza);            // ще один сир (подвійний)
meatPizza = new SausageDecorator(meatPizza);           // ковбаса
meatPizza = new SauceDecorator(meatPizza, 'соус BBQ'); // BBQ соус
printOrder("М'ясна піца з подвійним сиром", meatPizza);

// 3. Вегетаріанська піца (огортаємо відразу все разом)
const veggiePizza: Pizza = new SauceDecorator(
    new VegetableDecorator(
        new CheeseDecorator(
            new BasePizza()
        )
    ),
    'часниковий соус'
);
printOrder('Вегетаріанська піца', veggiePizza);
