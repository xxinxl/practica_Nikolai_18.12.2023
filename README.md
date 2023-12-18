[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UwdGCUD4)
# Практика по массивам

Для работы создайте и используйте ветку develop, это нужно для того, чтобы избежать ошибки при обновлении этого репозитория преподавателем.
Перед началом работы ознакомьтесь с мэйкфайлом и заданиями.
Все задания выполняются в index.js и экспортируются.

### Задание №1

Напишите функцию `getMonth()`, которая будет возвращать строку вида "Месяц Декабрь". На вход функция принимает порядковый номер месяца.

**Пример использования**

    ```javascript
    getMonth(1); // Месяц Январь
    getMonth(4); // месяц Апрель
    ```

### Задание №2

Напишите функцию `getTotalPrice()`, которая будет считать конечную стоимость массива продуктов c учётом доставки. На вход функция принимает массив продуктов, где каждый продукт имеет следующий вид: [price, name, deliveryPrice].

**Пример использования**

    ```javascript
    getTotalPrice([[ 200, 'Banana', 30], [ 190, 'Apple', 25], [ 350, 'Mango', 20]]); // 815
    getTotalPrice([[ 1200, 'Monitor', 30], [ 590, 'Keyboard', 25], [ 10350, 'CPU', 20], [ 9150, 'DRAM', 20]]); // 21385
    ```

### Задание №3

Напишите функцию `countDuplicates()`, которая определяет, сколько раз каждый элемент встречается в массиве. Функция должна возвращать объект, в котором будут только уникальные ключи и их соответствующие значения.
**Пример использования**

    ```javascript
    countDuplicates(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']); // { kiwi: 3, apple: 2, orange: 1 }
    countDuplicates(['num11','num12','num11','num11','num12','num11','num12',12,13,]); // { 'num11': 4, 'num12': 3, 12: 1, 13: 1 }
    ```

### Задание №4

Напишите функцию `uniqueItems()`, которая возвращает массив уникальных значений на основе входящего.

**Пример использования**

    ```javascript
    uniqueItems(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']); // [ "kiwi", "apple", "orange" ]
    uniqueItems(['num11','num12','num11','num11','num12','num11','num12',12,13,]); // [ 'num11', 'num12', 12, 13 ]
    ```

### Задание №5

Напишите функцию `getFavoritePizza()`, которая на вход принимает список друзей и их предпочтения в пицце. Функия должна возвращать тот вид, который встречается у друзей чаще остальных.

**Пример использования**

    ```javascript
    getFavoritePizza([
        { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
        { name: 'mike', pizzas: ['salami', 'cheese'] },
        { name: 'stas', pizzas: ['pepperoni'] },
        { name: 'anna', pizzas: ['cheese'] }
    ]); // cheese
    ```
