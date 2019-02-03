import { DoctorApiService } from '../doctor-api.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-find',
  templateUrl: './doctor-find.component.html',
  styleUrls: ['./doctor-find.component.css'],
  providers: [ DoctorApiService ]
})
export class DoctorFindComponent implements OnInit {
doctors: any[]=null;
  constructor(private doctorFind: DoctorApiService) { }
  findDoctorName(name: string) {
     this.doctorFind.findDoctor(name).subscribe(response => {
         this.doctors = response.json();
     });
   }
  ngOnInit() {
  }

}
