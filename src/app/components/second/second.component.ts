

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SecondserService } from './secondser.service';
// import { ToastrService } from 'ngx-toastr';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-second',
//   templateUrl: './second.component.html',
//   styleUrls: ['./second.component.css']
// })
// export class SecondComponent {
//   formData: FormGroup;
//   retrievedData: any;
//   addictName: string;

//   constructor(private fb: FormBuilder, private secondserService: SecondserService, private toastr: ToastrService, private route: ActivatedRoute,private router: Router) {
//     this.formData = this.fb.group({
//       issue1: [''],
//       issue2: [''],
//       issue3: [''],
//       issue4: [''],
//       impression: [''],
//       actionTaken: [''],
//       address: [''],
//       mobNo1: this.fb.group({
//         number: ['', Validators.required],
//         name: ['', Validators.required],
//         relation: [''],
//       }),
//       mobNo2: this.fb.group({
//         number: ['', Validators.required],
//         name: [''],
//         relation: [''],
//       }),
//       mobNo3: this.fb.group({
//         number: ['', Validators.required],
//         name: [''],
//         relation: [''],
//       }),
//       landlineNo1: this.fb.group({
//         number: ['', Validators.required],
//         name: [''],
//         relation: [''],
//       }),
//       remarks: ['']
//     });

    

//      // Fetch addict name from route parameters
//      this.addictName = this.route.snapshot.params['addictName'];

//      // Fetch data when the component is initialized
//      this.fetchDataByAddictName();
//   }

//     dataFetched: boolean = false; 
  

//   onSubmit() {
//     if (this.formData.valid) {
//       // If the form is valid, save the data
//       this.secondserService.saveFormData(this.formData.value).subscribe(
//         (response) => {
//           console.log('Form data saved successfully:', response);
//           // Optionally, you can handle success here
//           this.toastr.success('Form data saved successfully', 'Success');
//           this.formData.reset();
//         },
//         (error) => {
//           console.error('Error saving form data:', error);
//           // Optionally, you can handle errors here
//           this.toastr.error('Error saving form data', 'Error');
//         }
//       );
//     } else {
//       // Form is not valid, handle accordingly
//       console.log('Form is not valid');
//     }
//   }

//   fetchDataByAddictName() {
//     const addictName = this.formData.get('addictname')?.value;
//     if (this.addictName) {
//       // Fetch data based on the addict name
//       this.secondserService.getFormDataByAddictName(this.addictName).subscribe(
//         (data) => {
//           this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
//           console.log('Data retrieved successfully:', this.retrievedData);
//           this.dataFetched = true;
//           // Update form controls with retrieved data
//           this.formData.patchValue(this.retrievedData);
//         },
//         (error) => {
//           console.error('Error fetching data:', error);
//           this.toastr.error('Error fetching data', 'Error');
//         }
//       );
//     }
//   }

//   navigateToThirdPage() {
//     // Only navigate to the second page if data is fetched
//     if (this.dataFetched) {
//       this.router.navigate(['../third', { addictName: this.formData.get('addictname')?.value }]);
//     }
//   }
// }



import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecondserService } from './secondser.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
 addictName: string;
 displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    
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
  retrievedData: any;
  dataFetched: boolean = false; 
 
  constructor(private fb: FormBuilder, private secondserService: SecondserService, private toastr: ToastrService, private route: ActivatedRoute,private router: Router
    ,private sharedService: SharedService,private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef) 
  {

    
    this.addictName = this.sharedService.getAddictName();

console.log("second service",this.addictName);
    // Fetch data when the component is initialized
    this.fetchDataByAddictName();
  }
    
  

  onSubmit() {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      // If the form is valid, save the data
      console.log("second service",this.addictName);

    

      this.secondserService.saveFormData(this.formData.value, this.addictName).subscribe(
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

  // fetchDataByAddictName() {
  //   const addictName = this.formData.get('addictname')?.value;
  //   if (this.addictName) {
  //     // Fetch data based on the addict name
  //     this.secondserService.getFormDataByAddictName(this.addictName).subscribe(
  //       (data) => {
  //         this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
  //         console.log('Data retrieved successfully:', this.retrievedData);
  //         this.dataFetched = true;
  //         // Update form controls with retrieved data
  //         this.formData.patchValue(this.retrievedData);
  //       },
  //       (error) => {
  //         console.error('Error fetching data:', error);
  //         this.toastr.error('Error fetching data', 'Error');
  //       }
  //     );
  //   }
  // }

  // navigateToThirdPage() {
  //   // Only navigate to the second page if data is fetched
  //   if (this.dataFetched) {
  //     this.router.navigate(['../third', { addictName: this.formData.get('addictname')?.value }]);
  //   }
  // }

  fetchDataByAddictName() {
    if (this.addictName) {
     
      this.secondserService.getFormDataByAddictName(this.addictName).subscribe(
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
      this.router.navigate(['../third'], { relativeTo: this.route });
    }
  }

  onFileChange(event: any) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        this.displayedImages.push(imageUrl);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    
    } else {
     console.error('No file selected.');
    }
  }

  removeImage(index: number) {
    this.displayedImages.splice(index, 1);
    this.resetFileInput();
  }

  resetFileInput() {
    // Reset file input value
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }

    // Trigger change detection
    this.cdr.detectChanges();
  }
}

