

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FirstserService } from './firstser.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  formData: FormGroup = this.fb.group({
    addictname: ['', [Validators.required, this.characterValidator]],
    maritalStatus: ' ',
    occupation: [''],
    age: [null],
    dob: [null],
    dateOfIntake: [null],
    bpl: [''],
    yearOfDrinking: [null],
    yearOfExcessiveDrinking: [null],
    presentPatternOfDrinking: [null],
    useOfOtherDrugs: [''],
    psychiatricProblem: [''],
    denial: [''],
    physicalProblems: [''],
    priorTreatment: [''],
    use_of_other_drugs: [''],
    motivatingFactor: [''],
    photo:['']
  });

  retrievedData: any;
  dataFetched: boolean = false; 

  constructor(private fb: FormBuilder, private firstserService: FirstserService, private toastr: ToastrService, private http: HttpClient,private router: Router
    , private route: ActivatedRoute,private sharedService: SharedService ) {

      if(this.sharedService.getToggle()){

        
        this.fetchDataByAddictName(true, this.sharedService.getAddictName());

      }
      else{
        this.sharedService.setToggle()
      }
      
  }

  characterValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    const valid = /^[a-zA-Z\s]+$/.test(value);

    if (!valid) {
      return { 'invalidCharacters': true, 'message': 'Enter only alphabets' };
    }

    return null;
  }

  onSubmit() {
    if (this.formData.valid) {
      this.sharedService.setAddictName(this.formData.get('addictname')?.value);
      this.firstserService.saveFormData(this.formData.value, this.formData.get('addictname')?.value).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          this.toastr.success('Form data saved successfully', 'Success');
          this.formData.reset();
        },
        (error) => {
          console.error('Error saving form data:', error);
          this.toastr.error('Error saving form data', 'Error');
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }


fetchDataByAddictName(value: boolean = false, addName: String= "") {
  
  let addictName = this.formData.get('addictname')?.value;
  if(value){
    addictName = addName;
  }
  if (addictName) {
    this.firstserService.getFormDataByAddictName(addictName).subscribe(
      (data) => {
        this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
        console.log('Data retrieved successfully:', this.retrievedData);

        this.dataFetched = true;
        // Update form controls with retrieved data
        this.formData.patchValue(this.retrievedData);

        // Set addict name in the SharedService
        this.sharedService.setAddictName(this.formData.get('addictname')?.value);

        if(this.formData.get('photo')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url1 = this.formData.get('photo')?.value;
            this.hideChoose1 = true;
            this.hideButton1 = false;

          }
        
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.toastr.error('Error fetching data', 'Error');
      }
    );
  }
}

navigateToSecondPage() {

  if (this.dataFetched) {
    this.router.navigate(['../second'], { relativeTo: this.route });
  }
}

  url1: any;
  hideChoose1=false;
  hideButton1=true;
 



  selectFile1(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
  
    const mimeType = event.target.files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (_event) => {
      const formControls = this.formData.controls;
      formControls['photo'].setValue(reader.result)
      this.url1 = reader.result;
      this.hideChoose1 = true;
      this.hideButton1 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

 

    removeImage1(){
      this.url1 = null;
      this.hideChoose1=false;
      this.hideButton1=true;

    }
}