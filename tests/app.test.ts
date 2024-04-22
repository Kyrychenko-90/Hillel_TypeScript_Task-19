/*
Написати декілька юніт тестів для задачі про піцу.
 */

import { PizzaBuilder, PizzaSize, PizzaShape, PizzaIngredient } from '../src/app';

describe('PizzaBuilder', () => {
    let pizzaBuilder: PizzaBuilder;

    beforeEach(() => {
        pizzaBuilder = new PizzaBuilder();
    });

    test('Створення базової піци з обов\'язковими інгредієнтами', () => {
        const pizzaDescription: string = pizzaBuilder
            .setSize(PizzaSize.MEDIUM)
            .setShape(PizzaShape.ROUND)
            .addTopping(PizzaIngredient.DOUGH_THIN)
            .addTopping(PizzaIngredient.CHEESE_MOZZARELLA)
            .build();

        expect(pizzaDescription).toContain('Розмір: Середня');
        expect(pizzaDescription).toContain('Форма: Кругла');
        expect(pizzaDescription).toContain('Тонке тісто');
        expect(pizzaDescription).toContain('Моцарела');
    });

    test('Помилка, якщо немає сиру', () => {
        const pizzaDescription: string = pizzaBuilder
            .setSize(PizzaSize.MEDIUM)
            .setShape(PizzaShape.ROUND)
            .addTopping(PizzaIngredient.DOUGH_THIN)
            .build();

        expect(pizzaDescription).toBe('');
    });

    test('Перевірка додавання інгредієнтів', () => {
        const pizzaDescription: string = pizzaBuilder
            .setSize(PizzaSize.LARGE)
            .setShape(PizzaShape.SQUARE)
            .addTopping(PizzaIngredient.DOUGH_THICK)
            .addTopping(PizzaIngredient.CHEESE_CHEDDAR)
            .addTopping(PizzaIngredient.SAUSAGE)
            .build();

        expect(pizzaDescription).toContain('Велика');
        expect(pizzaDescription).toContain('Квадратна');
        expect(pizzaDescription).toContain('Пухке тісто');
        expect(pizzaDescription).toContain('Чеддер');
        expect(pizzaDescription).toContain('Ковбаса');
    });

    test('Перевірка методу reset()', () => {
        pizzaBuilder
            .setSize(PizzaSize.LARGE)
            .setShape(PizzaShape.SQUARE)
            .addTopping(PizzaIngredient.DOUGH_THICK)
            .addTopping(PizzaIngredient.CHEESE_MOZZARELLA);

        pizzaBuilder.reset();

        const pizzaDescription: string = pizzaBuilder
            .addTopping(PizzaIngredient.DOUGH_THIN)
            .addTopping(PizzaIngredient.CHEESE_MOZZARELLA)
            .build();

        expect(pizzaDescription).toContain('Мала');
        expect(pizzaDescription).toContain('Кругла');
        expect(pizzaDescription).toContain('Тонке тісто');
        expect(pizzaDescription).toContain('Моцарела');
    });
});