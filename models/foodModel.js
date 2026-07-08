let foods = [
  { id: 1, name: 'Tacos', origin: 'Mexico', price: 2.50 },
  { id: 2, name: 'Pizza', origin: 'Italy', price: 8.00 },
  { id: 3, name: 'Sushi', origin: 'Japan', price: 12.00 }
];

module.exports = {
  getAllFoods: () => foods,
  getFoodById: (id) => foods.find(f => f.id === parseInt(id)),
  addFood: (food) => {
    const newFood = { id: foods.length + 1, ...food };
    foods.push(newFood);
    return newFood;
  }
};
