// Базовий інтерфейс для піци
export interface Pizza {
    getDescription(): string; // опис складу
    getCost(): number;        // ціна
}
