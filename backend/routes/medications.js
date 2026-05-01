const express = require('express');
const router = express.Router();
const Medication = require('../models/Medication');

router.get('/', async (req, res) => {
  try {
    const medications = await Medication.find();
    res.json(medications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const medication = new Medication({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category
  });

  try {
    const newMedication = await medication.save();
    res.status(201).json(newMedication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
