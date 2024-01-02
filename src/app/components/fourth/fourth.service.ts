
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FourthService{
  private apiUrl = 'http://localhost:3000/api/saveFormData';

  constructor(private http: HttpClient) { }

  saveFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, { ...formData, component: 'fourth' });
  }
}