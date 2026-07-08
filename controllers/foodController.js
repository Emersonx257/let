const foodModel = require('../models/foodModel');

exports.getAllFoods = (req, res) => {
  const foods = foodModel.getAllFoods();
  res.json(foods);
};

exports.getFoodById = (req, res) => {
  const food = foodModel.getFoodById(req.params.id);
  if (food) {
    res.json(food);
  } else {
    res.status(404).json({ message: 'Comida no encontrada' });
  }
};

exports.createFood = (req, res) => {
  const newFood = foodModel.addFood(req.body);
  res.status(201).json(newFood);
};
