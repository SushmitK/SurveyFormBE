const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  nationality: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
