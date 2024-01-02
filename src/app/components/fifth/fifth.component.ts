import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FifthService } from './fifth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent{
  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fifthService: FifthService,  // Replace 'FourthService' with the actual service name
    private toastr: ToastrService
  ) {

    this.formData = this.fb.group({
      'SpecialNoteವಿಶೇಷಸೂಚನೆ': [''],
      'name': ['',Validators.required],
      'MobileNo': [''],
      'ದಿನ': [''],
      'ತಿಂಗಳು': [''],
      'ವರ್ಷ': [' '],
      'Date': [' '],
      'Month': [' '],
      'Year': [' '],
      'attenderName1': [''],
      'attenderName2': [''],
      'date': [''],
      'MonthYear': ['']
    });
  }

  onSubmit(): void {
    if (this.formData.valid) {
      this.fifthService.saveFormData(this.formData.value).subscribe(
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
}
