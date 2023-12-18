// task1

export const getMonth = (num) => {
    const month = ['Январь', 'Феврать', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return `Месяц ${month[num - 1]}`;
};

// task2

export const getTotalPrice = (arr) => {
    let totalPrice = 0;
    for (let i = 0; i < arr.length; i += 1) {
    totalPrice += arr[i][0] + arr[i][2]
    } 
    return totalPrice;
}

// task3

export const countDuplicates = (arr) => {
    const count = {};
    for (let i = 0; i < arr.lenght; i += 1) {
      if (!count[arr[i]]) {
        count[arr[i]] = 1;
      } else {
        count[arr[i]] += 1;
      }
    }
    return count;
}

console.log(countDuplicates(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']));

// task4

export function uniqueItems(arr) {
    const uniqueSet = new Set(arr);

    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  
  console.log(uniqueItems(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']));
  
  console.log(uniqueItems(['num11', 'num12', 'num11', 'num11', 'num12', 'num11', 'num12', 12, 13]));

  //task5

  export function getFavoritePizza(friends) {
    const pizzaCount = {};
  
    for (const friend of friends) {
      for (const pizza of friend.pizzas) {
        pizzaCount[pizza] = (pizzaCount[pizza] || 0) + 1;
      }
    }

    let maxPizza = '';
    let maxCount = 0;
  
    for (const pizza in pizzaCount) {
      if (pizzaCount[pizza] > maxCount) {
        maxPizza = pizza;
        maxCount = pizzaCount[pizza];
      }
    }
  
    return maxPizza;
  }

  const favoritePizza = getFavoritePizza([
    { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
    { name: 'mike', pizzas: ['salami', 'cheese'] },
    { name: 'stas', pizzas: ['pepperoni'] },
    { name: 'anna', pizzas: ['cheese'] }
  ]);
  
  console.log(favoritePizza); 
  