// import { Component, ChangeDetectorRef } from '@angular/core';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { FifthService } from './fifth.service';
// import { ToastrService } from 'ngx-toastr';
// import { ActivatedRoute, Router } from '@angular/router';
// import { SharedService } from '../shared.service';
// @Component({
//   selector: 'app-fifth',
//   templateUrl: './fifth.component.html',
//   styleUrl: './fifth.component.css'
// })
// export class FifthComponent{
//   addictName:string;
//   displayedImages: SafeUrl[] = [];

//   formData: FormGroup=this.fb.group({
//     'SpecialNoteವಿಶೇಷಸೂಚನೆ': [''],
//     'name': ['',Validators.required],
//     'MobileNo': [''],
//     'ದಿನ': [''],
//     'ತಿಂಗಳು': [''],
//     'ವರ್ಷ': [' '],
//     'Date': [' '],
//     'Month': [' '],
//     'Year': [' '],
//     'attenderName1': [''],
//     'attenderName2': [''],
//     'date': [''],
//     'MonthYear': ['']
//   });

//   retrievedData: any;
//   dataFetched: boolean = false;
//   constructor(
//     private fb: FormBuilder,
//     private fifthService: FifthService,  // Replace 'FourthService' with the actual service name
//     private toastr: ToastrService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private sharedService: SharedService,
//     private sanitizer: DomSanitizer,
//     private cdr: ChangeDetectorRef
//   ) {

//     this.addictName = this.sharedService.getAddictName();

//     // Fetch data when the component is initialized
//     this.fetchDataByAddictName();
    
//   }

//   onSubmit(): void {
//     if (this.formData.valid) {
//       this.addictName = this.sharedService.getAddictName();
//       this.fifthService.saveFormData(this.formData.value, this.addictName).subscribe(
//         (response) => {
//           console.log('Form data saved successfully:', response);
//           this.toastr.success('Form data saved successfully', 'Success');
//           this.formData.reset();
//         },
//         (error) => {
//           console.error('Error saving form data:', error);
//           this.toastr.error('Error saving form data', 'Error');
//         }
//       );
//     } else {
//       console.log('Form is not valid');
//     }
//   }


//   fetchDataByAddictName() {
//     if (this.addictName) {
//       this.fifthService.getFormDataByAddictName(this.addictName).subscribe(
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

//   navigateToSixthPage() {
//     // Only navigate to the third page if data is fetched
//     if (this.dataFetched) {
//       this.router.navigate(['../sixth'], { relativeTo: this.route });
//     }
//   }
//   onFileChange(event: any) {
//     const files = (event.target as HTMLInputElement).files;

//     if (files && files.length > 0) {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
//         this.displayedImages.push(imageUrl);
//         this.cdr.detectChanges();
//       };
//       reader.readAsDataURL(file);
    
//     } else {
//      console.error('No file selected.');
//     }
//   }

//   removeImage(index: number) {
//     this.displayedImages.splice(index, 1);
//     this.resetFileInput();
//   }

//   resetFileInput() {
//     // Reset file input value
//     const fileInput = document.getElementById('file') as HTMLInputElement;
//     if (fileInput) {
//       fileInput.value = '';
//     }

//     // Trigger change detection
//     this.cdr.detectChanges();
//   }


//   onFileChange1(event: any) {
//     const files = (event.target as HTMLInputElement).files;

//     if (files && files.length > 0) {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
//         this.displayedImages.push(imageUrl);
//         this.cdr.detectChanges();
//       };
//       reader.readAsDataURL(file);
    
//     } else {
//      console.error('No file selected.');
//     }
//   }

//   removeImage1(index: number) {
//     this.displayedImages.splice(index, 1);
//     this.resetFileInput();
//   }
// }



import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FifthService } from './fifth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent{
  addictName:string;
  displayedImages1: SafeUrl[] = [];
  displayedImages2: SafeUrl[] = [];
  displayedImages3: SafeUrl[] = [];
  displayedImages4: SafeUrl[] = [];
  formData: FormGroup=this.fb.group({
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

  retrievedData: any;
  dataFetched: boolean = false;
  constructor(
    private fb: FormBuilder,
    private fifthService: FifthService,  // Replace 'FourthService' with the actual service name
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

  onSubmit(): void {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      this.fifthService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.fifthService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToSixthPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../sixth'], { relativeTo: this.route });
    }
  }
  onFileChange(event: any) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        this.displayedImages1.push(imageUrl);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    
    } else {
     console.error('No file selected.');
    }
  }

  onFileChange1(event: any) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        this.displayedImages2.push(imageUrl);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    
    } else {
     console.error('No file selected.');
    }
  }

  onFileChange2(event: any) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        this.displayedImages3.push(imageUrl);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    
    } else {
     console.error('No file selected.');
    }
  }

  onFileChange3(event: any) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        this.displayedImages4.push(imageUrl);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    
    } else {
     console.error('No file selected.');
    }
  }

  removeImage(index: number, section: string) {
    if (section === 'section1') {
      this.displayedImages1.splice(index, 1);
    } else if (section === 'section2') {
      this.displayedImages2.splice(index, 1);
    }else if (section === 'section3') {
      this.displayedImages3.splice(index, 1);
    }else if (section === 'section4') {
      this.displayedImages4.splice(index, 1);
    }
  
    this.resetFileInput(section);
  }
  
  resetFileInput(section: string) {
    const fileInput = document.getElementById(`file-${section}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  
    this.cdr.detectChanges();
  }
  

 
  
}



