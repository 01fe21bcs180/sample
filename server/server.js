
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://01fe21bcs180:Sonikanti%402003@database.lvyvjl3.mongodb.net/Wt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const formDataSchema = new mongoose.Schema({
  name: String,
  maritalStatus: String,
  occupation: String,
  age: Number,
  dob: Date,
  dateOfIntake: Date,
  bpl: String,
  yearOfDrinking: Number,
  yearOfExcessiveDrinking: Number,
  presentPatternOfDrinking: String,
  useOfOtherDrugs: String,
  psychiatricProblem: String,
  denial: String,
  physicalProblems: String,
  priorTreatment: String,
  use_of_other_drugs: String,
  motivatingFactor: String
});

const FormDataModel = mongoose.model('formData', formDataSchema);

app.post('/api/saveFormData', async (req, res) => {
  try {
    const formData = req.body;
    const existingRecord = await FormDataModel.findOne({ name: formData.name });

    if (existingRecord) {
      // Update only empty fields in the existing record
      for (const key in formData) {
        if (formData[key] !== undefined && formData[key] !== null && formData[key] !== '') {
          existingRecord[key] = formData[key];
        }
      }

      await existingRecord.save();
      res.json({ success: true, data: existingRecord });
    } else {
      // If no existing record, create a new one
      const newRecord = new FormDataModel(formData);
      await newRecord.save();
      res.json({ success: true, data: newRecord });
    }
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
