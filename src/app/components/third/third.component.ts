import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ThirdserService } from './thirdser.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder, private thirdserService: ThirdserService, private toastr: ToastrService) {
    this.formData = this.fb.group({
      ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: [null, Validators.required],
      ಪಾಲ್ಗೊಳ್ಳಲುದಿನಾಂಕ: [''],
      ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1: [''],
      ದಾಖಲುಪಡಿಸಿದವರಹೆಸರು: [''],
      ಮೊಬೈಲ: [null, Validators.pattern("^[0-9]*$")] 
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      const dataToSend = { ...this.formData.value, component: 'third' };
      
      console.log('Data to send:', dataToSend); // Log the data being sent
  
      this.thirdserService.saveFormData(dataToSend).subscribe(
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

