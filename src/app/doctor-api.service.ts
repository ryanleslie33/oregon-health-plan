import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DoctorApiService {
  findDoctor(name:string) {
    return this.http.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=45.5122,-122.6587,100&skip=2&limit=10&user_key=96f18561aaa75db4fdd9ef618242d8ae`)
  }
  constructor(private http: Http) { }

}
