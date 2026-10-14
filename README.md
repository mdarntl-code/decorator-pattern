# Система замовлення піци (Патерн Decorator)

Проста та чиста реалізація патерну проєктування **Декоратор (Decorator)** на мові TypeScript.

---

## 🏛️ Архітектура проєкту

Файли розташовані в папці `src/` без зайвої вкладеності:

```text
decorator/
├── package.json          # Залежності та скрипти
├── tsconfig.json         # Конфігурація TypeScript
├── README.md             # Документація
└── src/
    ├── pizza.interface.ts # Окремий файл з інтерфейсом Pizza (Component)
    ├── base-pizza.ts      # Базова піца BasePizza (Concrete Component)
    ├── decorators.ts      # Базовий декоратор + усі інгредієнти
    └── main.ts            # Єдина точка входу: демонстрація замовлень
```

---

## 🧩 Опис компонентів

1. **[`src/pizza.interface.ts`](file:///Users/marta/code/kpfk/конструювання_пз/decorator/src/pizza.interface.ts)**:
   - `Pizza` (Інтерфейс) — спільний контракт для піци та її обгорток (`getDescription()`, `getCost()`).

2. **[`src/base-pizza.ts`](file:///Users/marta/code/kpfk/конструювання_пз/decorator/src/base-pizza.ts)**:
   - `BasePizza` (Компонент) — стандартна основа з тістом та томатним соусом (120 грн).

3. **[`src/decorators.ts`](file:///Users/marta/code/kpfk/конструювання_пз/decorator/src/decorators.ts)**:
   - `PizzaDecorator` — базовий абстрактний декоратор, який делегує виклики вкладеній піці.
   - `CheeseDecorator` (+35 грн), `SausageDecorator` (+45 грн), `VegetableDecorator` (+25 грн), `SauceDecorator` (+20 грн) — конкретні інгредієнти.

4. **[`src/main.ts`](file:///Users/marta/code/kpfk/конструювання_пз/decorator/src/main.ts)**:
   - Демонстрація створення та комбінування піц різними способами.

---

## 🚀 Як запустити

```bash
npm start
```
