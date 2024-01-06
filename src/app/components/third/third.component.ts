

import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThirdserService } from './thirdser.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    
    ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: [null, Validators.required],
    ಪಾಲ್ಗೊಳ್ಳಲುದಿನಾಂಕ: [''],
    ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1: [''],
    ದಾಖಲುಪಡಿಸಿದವರಹೆಸರು: [''],
    ಮೊಬೈಲ: [null, Validators.pattern('^[0-9]*$')]
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private thirdserService: ThirdserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    
    this.addictName = this.sharedService.getAddictName();

    // Fetch data when the component is initialized
    this.fetchDataByAddictName();

  }

  onSubmit() {
    if (this.formData.valid) {

      this.addictName = this.sharedService.getAddictName();
      // const dataToSend = { ...this.formData.value, component: 'third' };

      this.thirdserService.saveFormData(this.formData.value, this.addictName).subscribe(
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

  fetchDataByAddictName() {
    if (this.addictName) {
      this.thirdserService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data
          this.formData.patchValue(this.retrievedData);
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToThirdPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../fourth'], { relativeTo: this.route });
    }
  }

  url:any;
  hideChoose=false;
  hideButton=true;



  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
  
    const mimeType = event.target.files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (_event) => {
      this.url = reader.result;
      this.hideChoose = true;
      this.hideButton = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

    removeImage(){
      this.url = null;
      this.hideChoose=false;
      this.hideButton=true;

      
      
  }

    
  
}

