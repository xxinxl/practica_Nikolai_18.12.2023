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

export const uniqueItems = (arr) => {
    let acc = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!acc.includes(arr[i])) {
            acc.push(arr[i])
        }
    }
    return acc;
}

  //task5

  export const getFavoritePizza = (friends) => {
    const pizzaCount = {};
    
    friends.forEach((friend) => {
        friend.pizzas.forEach((pizza) => {
            if (pizzaCount[pizza]) {
                pizzaCount[pizza] += 1;
            } else {
                pizzaCount[pizza] = 1;
            }
        });
    });

    let maxPizza = '';
    let maxCount = 0;

    for (const pizza in pizzaCount) {
        if (pizzaCount[pizza] > maxCount) {
            maxCount = pizzaCount[pizza];
            maxPizza = pizza;
        }
    }

    return maxPizza;
};

  
