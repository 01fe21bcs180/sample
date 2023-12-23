
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
  // Your schema fields here...
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
  motivatingFactor: String,
  issue1: String,
  issue2: String,
  issue3: String,
  issue4: String,
  impression: String,
  actionTaken: String,
  address: String,
  mobNo1: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo2: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo3: {
    number: Number,
    name: String,
    relation: String
  },
  landlineNo1: {
    number: Number,
    name: String,
    relation: String
  },
  remarks: String,
  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: String,
  ಪಾಲ್ಗೊಳ್ಳಲುದಿನಾಂಕ: Date,
  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1: String,
  ದಾಖಲುಪಡಿಸಿದವರಹೆಸರು: String,
  ಮೊಬೈಲ: Number
});

// Define the model only once
const FormDataModel = mongoose.model('formData', formDataSchema);

// Add a lock to ensure sequential processing
let isSaving = false;

app.post('/api/saveFormData', async (req, res) => {
  try {
    // If already saving, wait for the previous operation to complete
    while (isSaving) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    isSaving = true;

    const formData = req.body;
    const componentName = formData.component;

    // Check the component name and use FormDataModel accordingly
    let formDataModel;

    // Find the record using ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1
    formDataModel = await FormDataModel.findOne({ ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: formData.ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು });

    if (!formDataModel) {
      // If no existing record, create a new one
      formDataModel = new FormDataModel(formData);
    } else {
      // Update all fields in the existing record
      for (const key in formData) {
        // Only update if the field is not null or undefined
        if (formData[key] !== null && formData[key] !== undefined) {
          formDataModel[key] = formData[key];
        }
      }
    }

    await formDataModel.save();
    res.json({ success: true, data: formDataModel });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    isSaving = false;
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
