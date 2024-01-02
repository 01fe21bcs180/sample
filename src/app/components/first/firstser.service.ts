

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirstserService {
//   private apiUrl = 'http://localhost:3000/api/saveFormData';

//   constructor(private http: HttpClient) { }

//   saveFormData(formData: any): Observable<any> {
//     return this.http.post(this.apiUrl, { ...formData, component: 'first' });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstserService {
  private apiUrl = 'http://localhost:3000/api/saveFormData';

  constructor(private http: HttpClient) { }

  saveFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, { ...formData, component: 'first' });
  }

  // private fetchApiUrl = 'http://localhost:3000/api/getFormData';
  // getFormDataByAddictName(addictName: string): Observable<any> {
  //   const url = `${this.fetchApiUrl}/${addictName}`;
  //   return this.http.get(url);
  // }

}

