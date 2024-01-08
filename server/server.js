const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://01fe21bcs180:Sonikanti%402003@database.lvyvjl3.mongodb.net/Wt', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect('mongodb+srv://01fe21bcs180:QrZRz5q7C8SLkTY3@cluster0.fmjmpgk.mongodb.net/SE', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const formDataSchema = new mongoose.Schema({
  addictname: String,
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
  ಮೊಬೈಲ: Number,
  
  ಹೆಸರು: String,
  ನಿವಾಸ: String,
  age: String,
  place: String,
  ಸಾಕ್ಷಿದಾರ1: String,
  ನಿವಾಸ1: String,
  ಸಾಕ್ಷಿದಾರ2: String,
  ನಿವಾಸ2: String,
  name1: String,
  age1: String,
  place1: String,
  name2: String,
  age2: String,
  place2: String,

  SpecialNoteವಿಶೇಷಸೂಚನೆ:String,
  name:String,
  MobileNo:Number,
  ದಿನ:Number,
  ತಿಂಗಳು:String,
  ವರ್ಷ:Number,
  Date:Number,
  Month:String,
  Year: Number,
  attenderName1:String,
  attenderName2:String,
  date:Number,
  MonthYear:String,
  sig1:String,
  sig2:String,
  sig3:String,
  sig4:String,
  sig5:String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಸಹಿ:String,
  signature1: String,
  signature2: String,
  PhysicalComplications:String

});

const FormDataModel = mongoose.model('formData', formDataSchema);

let isSaving = false;

app.post('/api/saveFormData/:addictName', async (req, res) => {
  try {
    while (isSaving) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    isSaving = true;

    const formData = req.body;
    const componentName = formData.component;
    const addictName = req.params.addictName;

    let formDataModel;

    formDataModel = await FormDataModel.findOne({ addictname: addictName });
  // ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: 
  //formData.ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು

    if (!formDataModel) {
      console.log("formdata null");
      formDataModel = new FormDataModel(formData);
      await formDataModel.save();
    } else {
      for (const key in formData) {
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




app.get('/api/getFormData/:addictName', async (req, res) => {
  try {
    const addictName = req.params.addictName;

    // Perform a query to retrieve data based on the addictName
    const formData = await FormDataModel.findOne({ addictname: addictName });

    if (!formData) {
      res.status(404).json({ success: false, error: 'Data not found' });
      return;
    }

    res.json({ success: true, data: formData });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




