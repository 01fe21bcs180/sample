
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SeventhService } from './seventh.service';  // Replace 'FourthService' with the actual service name
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fourth',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent{
  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private seventhService: SeventhService,  // Replace 'FourthService' with the actual service name
    private toastr: ToastrService
  ) {

    this.formData = this.fb.group({
      PhysicalComplications:[''],
    });
  }

  onSubmit(): void {
    if (this.formData.valid) {
      this.seventhService.saveFormData(this.formData.value).subscribe(
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

