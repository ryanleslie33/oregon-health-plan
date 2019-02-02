import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { QuickstartService }   from '../quickstart.service';
import { Health } from '../models/ohp.model';
import { Enroll} from '../models/enroll.model';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css'],
  providers: [QuickstartService]
})
export class QuickStartComponent implements OnInit {
  enrollId: string;
  enrollToDisplay;
  newEnroll:Enroll;
  enrolled: Enroll[] = [

  ]
  quickstarts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute,
    private quickstartService: QuickstartService) {
        this.newEnroll = new Enroll('', '', 0);
     }

  ngOnInit() {

  }
  selectedAdd = null;
  submitForm() {
    this.selectedAdd= true;
    this.enrollId = this.quickstartService.addHealth(this.newEnroll).key;
    this.enrolled.push(this.newEnroll);
    console.log(this.newEnroll);
    this.newEnroll = new Enroll('', '', 0);
  }
  formEnroll(clickedEnroll){
    this.router.navigate(['enrolled',this.enrollId]);
  }
  selectedEdit=null;
  editEnroll(toEdit){

    this.selectedEdit=toEdit;
  }


}
