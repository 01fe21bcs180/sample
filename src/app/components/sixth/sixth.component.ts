import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SixthService } from './sixth.service';  // Replace 'FourthService' with the actual service name
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.css'
})
export class SixthComponent{
  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sixthService: SixthService,  // Replace 'FourthService' with the actual service name
    private toastr: ToastrService
  ) {

    this.formData = this.fb.group({
      ಚಿಕಿತ್ಸಾರ್ಥಿಯಸಹಿ:[''],
    });
  }

  onSubmit(): void {
    if (this.formData.valid) {
      this.sixthService.saveFormData(this.formData.value).subscribe(
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
