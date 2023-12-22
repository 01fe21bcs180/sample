import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { FirstserService } from './firstser.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
formData: FormGroup;

constructor(private fb: FormBuilder, private firstserService: FirstserService,private toastr: ToastrService ) {
  this.formData = this.fb.group({
    name: ['', Validators.required],
    maritalStatus:" ",
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
    motivatingFactor: ['']
  });
}

onSubmit() {
  if (this.formData.valid) {
    // If the form is valid, save the data
    this.firstserService.saveFormData(this.formData.value).subscribe(
      (response) => {
        console.log('Form data saved successfully:', response);
        // Optionally, you can handle success here
        this.toastr.success('Form data saved successfully', 'Success');
        this.formData.reset();
      },
      (error) => {
        console.error('Error saving form data:', error);
        // Optionally, you can handle errors here
        this.toastr.error('Error saving form data', 'Error');
      }
    );
  } else {
    // Form is not valid, handle accordingly
    console.log('Form is not valid');
  }
}
}
