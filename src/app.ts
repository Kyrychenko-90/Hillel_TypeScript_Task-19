showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

export enum PizzaSize {
    SMALL = 'Мала',
    MEDIUM = 'Середня',
    LARGE = 'Велика'
}

export enum PizzaShape {
    ROUND = 'Кругла',
    SQUARE = 'Квадратна'
}

export enum PizzaIngredient {
    DOUGH_THIN = 'Тонке тісто',
    DOUGH_THICK = 'Пухке тісто',
    CHEESE_MOZZARELLA = 'Моцарела',
    CHEESE_CHEDDAR = 'Чеддер',
    CHEESE_GORGONZOLA = 'Горгонзола',
    MUSHROOMS = 'Гриби',
    SAUSAGE = 'Ковбаса',
    CHICKEN = 'Курка',
    TOMATOES = 'Помідори',
    PEPPERS = 'Перець',
    ONIONS = 'Цибуля'
}

export class PizzaBuilder {
    private size: PizzaSize = PizzaSize.SMALL;
    private shape: PizzaShape = PizzaShape.ROUND;
    private toppings: PizzaIngredient[] = [];

    setSize(size: PizzaSize): this {
        this.size = size;
        return this;
    }

    setShape(shape: PizzaShape): this {
        this.shape = shape;
        return this;
    }

    addTopping(ingredient: PizzaIngredient): this {
        this.toppings.push(ingredient);
        console.log(`Інгредієнт додано: ${ingredient}`);
        return this;
    }

    reset(): this {
        this.size = PizzaSize.SMALL;
        this.shape = PizzaShape.ROUND;
        this.toppings = [];
        return this;
    }

    build(): string {
        if (this.toppings.includes(PizzaIngredient.DOUGH_THIN) || this.toppings.includes(PizzaIngredient.DOUGH_THICK)) {
            if (this.toppings.includes(PizzaIngredient.CHEESE_MOZZARELLA) || this.toppings.includes(PizzaIngredient.CHEESE_CHEDDAR) || this.toppings.includes(PizzaIngredient.CHEESE_GORGONZOLA)) {
                const sizeString = `Розмір: ${this.size}`;
                const shapeString = `Форма: ${this.shape}`;
                const toppingsString = `Інгредієнти: ${this.toppings.join(', ')}`;
                const pizzaString = `${sizeString}, ${shapeString}, ${toppingsString}`;
                this.reset();
                return pizzaString;
            }
        }
        console.log('Помилка: Тісто та сир обов\'язкові для піци!');
        return '';
    }
}

const pizzaBuilder = new PizzaBuilder();
const pizza = pizzaBuilder
    .setSize(PizzaSize.MEDIUM)
    .setShape(PizzaShape.ROUND)
    .addTopping(PizzaIngredient.DOUGH_THIN)
    .addTopping(PizzaIngredient.CHEESE_MOZZARELLA)
    .addTopping(PizzaIngredient.MUSHROOMS)
    .addTopping(PizzaIngredient.CHICKEN)
    .addTopping(PizzaIngredient.TOMATOES)
    .addTopping(PizzaIngredient.PEPPERS)
    .build();

console.log(pizza);
