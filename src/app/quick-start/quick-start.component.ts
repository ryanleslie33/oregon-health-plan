import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
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
  // enrollId: string;
  // enrollToDisplay;
  enrolled: Enroll[] = [

  ]
  quickstarts: FirebaseListObservable<any[]>;

  constructor(private route: Router,private quickstartService: QuickstartService) { }

  ngOnInit() {
    //    this.route.params.forEach((urlParameters) => {
    //   this.enrollId = (urlParameters['id']);
    // });
    // this.enrollToDisplay = this.quickstartService.getEnrollById(this.enrollId);
  }
  selectedAdd = null;
  submitForm(name: string, address: string, salary: number) {
    this.selectedAdd= true;
    var newHealth: Enroll = new Enroll(name, address, salary);
    this.quickstartService.addHealth(newHealth);
    this.enrolled.push(newHealth);
    console.log(newHealth);
  }
  formEnroll(clickedEnroll){
    this.route.navigate(['enrolled']);
  }
  selectedEdit=null;
  editEnroll(){
    this.selectedEdit=true;
  }


}
