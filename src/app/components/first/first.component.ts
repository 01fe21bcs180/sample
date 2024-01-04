

// // first.component.ts

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { FirstserService } from './firstser.service';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-first',
//   templateUrl: './first.component.html',
//   styleUrls: ['./first.component.css']
// })
// export class FirstComponent {
//   formData: FormGroup;

//   constructor(private fb: FormBuilder, private firstserService: FirstserService, private toastr: ToastrService) {
//     this.formData = this.fb.group({
//       addictname: ['', [Validators.required, this.characterValidator]],
//       maritalStatus: ' ',
//       occupation: [''],
//       age: [null],
//       dob: [null],
//       dateOfIntake: [null],
//       bpl: [''],
//       yearOfDrinking: [null],
//       yearOfExcessiveDrinking: [null],
//       presentPatternOfDrinking: [null],
//       useOfOtherDrugs: [''],
//       psychiatricProblem: [''],
//       denial: [''],
//       physicalProblems: [''],
//       priorTreatment: [''],
//       use_of_other_drugs: [''],
//       motivatingFactor: ['']
//     });
//   }

//   characterValidator(control: AbstractControl): { [key: string]: any } | null {
//     const value = control.value;
//     const valid = /^[a-zA-Z]+$/.test(value);

//     if (!valid) {
//       return { 'invalidCharacters': true, 'message': 'Enter only alphabets' };
//     }

//     return null;
//   }

//   onSubmit() {
//     if (this.formData.valid) {
//       this.firstserService.saveFormData(this.formData.value).subscribe(
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
//     this.firstserService.getFormData(this.formData.get("addictname:").value).subscribe(
//       (response) => {
//         if (response.success) {
//           this.formData.patchValue(response.data);
//         } else {
//           console.error('Error fetching data:', response.error);
//           this.toastr.error('Error fetching data', 'Error');
//         }
//       },
//       (error) => {
//         console.error('Error fetching data:', error);
//         this.toastr.error('Error fetching data', 'Error');
//       }
//     );
//   }
  
// }


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { FirstserService } from './firstser.service';
// import { ToastrService } from 'ngx-toastr';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-first',
//   templateUrl: './first.component.html',
//   styleUrls: ['./first.component.css']
// })
// export class FirstComponent {
//   formData: FormGroup;
//   retrievedData: any;

//   constructor(private fb: FormBuilder, private firstserService: FirstserService, private toastr: ToastrService,private http: HttpClient) {
//     this.formData = this.fb.group({
//       addictname: ['', [Validators.required, this.characterValidator]],
//       maritalStatus: ' ',
//       occupation: [''],
//       age: [null],
//       dob: [null],
//       dateOfIntake: [null],
//       bpl: [''],
//       yearOfDrinking: [null],
//       yearOfExcessiveDrinking: [null],
//       presentPatternOfDrinking: [null],
//       useOfOtherDrugs: [''],
//       psychiatricProblem: [''],
//       denial: [''],
//       physicalProblems: [''],
//       priorTreatment: [''],
//       use_of_other_drugs: [''],
//       motivatingFactor: ['']
//     });
//   }

//   characterValidator(control: AbstractControl): { [key: string]: any } | null {
//     const value = control.value;
//     const valid = /^[a-zA-Z]+$/.test(value);

//     if (!valid) {
//       return { 'invalidCharacters': true, 'message': 'Enter only alphabets' };
//     }

//     return null;
//   }

//   onSubmit() {
//     if (this.formData.valid) {
//       this.firstserService.saveFormData(this.formData.value).subscribe(
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
//     if (this.formData && this.formData.get('addictname')) {
//       const addictName = this.formData.get('addictname').value;
  
//       // Make an HTTP request to your server with the entered addict name
//       this.firstserService.getFormDataByAddictName(addictName).subscribe(
//         (response) => {
//           // Handle the response from the server
//           console.log(response);
  
//           if (response.success) {
//             // Assuming that the server sends back the retrieved data
//             this.retrievedData = response.data;
  
//             // Optionally, you can update the form with the retrieved data
//             this.formData.patchValue(this.retrievedData);
//           }
//         },
//         (error) => {
//           console.error('Error fetching data:', error);
//           this.toastr.error('Error fetching data', 'Error');
//         }
//       );
//     } else {
//       console.error('Form or form control is null');
//     }
//   }
  
//   }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FirstserService } from './firstser.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  formData: FormGroup = this.fb.group({
    addictname: ['', [Validators.required, this.characterValidator]],
    maritalStatus: ' ',
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

  retrievedData: any;
  dataFetched: boolean = false; 

  constructor(private fb: FormBuilder, private firstserService: FirstserService, private toastr: ToastrService, private http: HttpClient,private router: Router
    , private route: ActivatedRoute,private sharedService: SharedService ) {
      
  }

  characterValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    const valid = /^[a-zA-Z]+$/.test(value);

    if (!valid) {
      return { 'invalidCharacters': true, 'message': 'Enter only alphabets' };
    }

    return null;
  }

  onSubmit() {
    if (this.formData.valid) {
      this.sharedService.setAddictName(this.formData.get('addictname')?.value);
      this.firstserService.saveFormData(this.formData.value, this.formData.get('addictname')?.value).subscribe(
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


//   fetchDataByAddictName() {
//     const addictName = this.formData.get('addictname')?.value;
//     if (addictName) {

//       this.firstserService.getFormDataByAddictName(addictName).subscribe(
//         (data) => {
//           this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
//           console.log('Data retrieved successfully:', this.retrievedData);

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

// navigateToSecondPage() {
//   // Only navigate to the second page if data is fetched
//   if (this.dataFetched) {
//     this.router.navigate(['../second', { addictName: this.formData.get('addictname')?.value }]);
//   }
// }

fetchDataByAddictName() {
  const addictName = this.formData.get('addictname')?.value;
  if (addictName) {
    this.firstserService.getFormDataByAddictName(addictName).subscribe(
      (data) => {
        this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
        console.log('Data retrieved successfully:', this.retrievedData);

        // Update form controls with retrieved data
        this.formData.patchValue(this.retrievedData);

        // Set addict name in the SharedService
        this.sharedService.setAddictName(this.formData.get('addictname')?.value);

        // Update the dataFetched flag
        this.dataFetched = true;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.toastr.error('Error fetching data', 'Error');
      }
    );
  }
}

navigateToSecondPage() {
  // Only navigate to the second page if data is fetched
  if (this.dataFetched) {
    this.router.navigate(['../second'], { relativeTo: this.route });
  }
}
}
