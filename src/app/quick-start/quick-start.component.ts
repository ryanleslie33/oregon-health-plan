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
  enrolled: Enroll[] = [

  ]
  quickstarts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute,
    private quickstartService: QuickstartService) { }

  ngOnInit() {
    
  }
  selectedAdd = null;
  submitForm(name: string, address: string, salary: number) {
    this.selectedAdd= true;
    var newHealth: Enroll = new Enroll(name, address, salary);
    this.enrollId = this.quickstartService.addHealth(newHealth).key;
    this.enrolled.push(newHealth);
    console.log(newHealth);
  }
  formEnroll(clickedEnroll){
    this.router.navigate(['enrolled',this.enrollId]);
  }
  selectedEdit=null;
  editEnroll(){
    this.selectedEdit=true;
  }


}
