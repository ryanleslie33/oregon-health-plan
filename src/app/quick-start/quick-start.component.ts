import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { QuickstartService }   from '../quickstart.service';
import { Health } from '../models/ohp.model';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {
quickstarts: FirebaseListObservable<any[]>;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submitForm(name: string, address: string, salary: number, coverage: boolean) {
  var newHealth: Health = new Health(name, address, salary,coverage);
  console.log(newHealth);
}


}
