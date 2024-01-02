// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-fourth',
//   templateUrl: './fourth.component.html',
//   styleUrl: './fourth.component.css'
// })
// export class FourthComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FourthService } from './fourth.service';  // Replace 'FourthService' with the actual service name
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent{
  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fourthService: FourthService,  // Replace 'FourthService' with the actual service name
    private toastr: ToastrService
  ) {

    this.formData = this.fb.group({
      ಹೆಸರು: [''],
      ನಿವಾಸ: [''],
      name: ['' ,Validators.required],
      age: [''],
      place: [''],
      ಸಾಕ್ಷಿದಾರ1: [''],
      ನಿವಾಸ1: [''],
      ಸಾಕ್ಷಿದಾರ2: [''],
      ನಿವಾಸ2: [''],
      name1: [''],
      age1: [''],
      place1: [''],
      name2: [''],
      age2: [''],
      place2: [''],
    });
  }

  onSubmit(): void {
    if (this.formData.valid) {
      this.fourthService.saveFormData(this.formData.value).subscribe(
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
