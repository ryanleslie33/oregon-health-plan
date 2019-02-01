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
  enrolled: Enroll[] = [

  ]
quickstarts: FirebaseListObservable<any[]>;

  constructor(private router: Router,private location: Location,private quickstartService: QuickstartService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
   this.albumId = parseInt(urlParameters['id']);
 });
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
  this.router.navigate(['enrolled',clickedEnroll.$key]);
}
selectedEdit=null;
editEnroll(){
  this.selectedEdit=true;
}


}
