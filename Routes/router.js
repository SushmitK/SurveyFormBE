const express = require('express');
const Router = express.Router();
const Survey = require('../models/survey');

Router.post('/survey', async (req, res) => {
    try {
      const { fullName, email, phone, nationality, message } = req.body;
      const newSurvey = new Survey({ fullName, email, phone, nationality, message });
      const savedSurvey = await newSurvey.save();
      res.status(200).json(savedSurvey);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

Router.get('/survey', async (req, res) => {
  try {
    const survey = await Survey.find().sort({createdAt : -1});
    res.status(200).json(survey);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = Router;