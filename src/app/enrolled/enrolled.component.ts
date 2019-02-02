
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { QuickstartService }   from '../quickstart.service';
import { Health } from '../models/ohp.model';
import { Enroll} from '../models/enroll.model';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css'],
    providers: [QuickstartService]
})
export class EnrolledComponent implements OnInit {
enrollment;
enrollId: string;
    constructor(private router: Router, private route: ActivatedRoute,
      private quickstartService: QuickstartService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
   this.enrollId = (urlParameters['id']);
 });
 this.enrollment = this.quickstartService.getEnrollById(this.enrollId);
  }

}
