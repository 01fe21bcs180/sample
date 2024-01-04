import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

 private addictName: string = ''; 

  setAddictName(name: string): void {
    this.addictName = name;
  }

  getAddictName(): string {
    return this.addictName;
  }
}
