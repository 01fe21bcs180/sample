// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup,Validators,AbstractControl} from '@angular/forms';
// import { SecondserService } from './secondser.service';

// @Component({
//   selector: 'app-second',
//   templateUrl: './second.component.html',
//   styleUrl: './second.component.css'
// })
// export class SecondComponent {
//   formData: FormGroup;
  

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecondserService } from './secondser.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder, private secondserService: SecondserService, private toastr: ToastrService) {
    this.formData = this.fb.group({
      issue1: [''],
      issue2: [''],
      issue3: [''],
      issue4: [''],
      impression: [''],
      actionTaken: [''],
      address: [''],
      mobNo1: this.fb.group({
        number: ['', Validators.required],
        name: ['', Validators.required],
        relation: [''],
      }),
      mobNo2: this.fb.group({
        number: ['', Validators.required],
        name: [''],
        relation: [''],
      }),
      mobNo3: this.fb.group({
        number: ['', Validators.required],
        name: [''],
        relation: [''],
      }),
      landlineNo1: this.fb.group({
        number: ['', Validators.required],
        name: [''],
        relation: [''],
      }),
      remarks: ['']
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      // If the form is valid, save the data
      this.secondserService.saveFormData(this.formData.value).subscribe(
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

