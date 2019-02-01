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
quickstarts: FirebaseListObservable<any[]>;

  constructor(private router: Router,private quickstartService: QuickstartService) { }

  ngOnInit() {
  }
  submitForm(name: string, address: string, salary: number) {
  var newHealth: Enroll = new Enroll(name, address, salary);
  this.quickstartService.addHealth(newHealth);
  console.log(newHealth);
}


}
