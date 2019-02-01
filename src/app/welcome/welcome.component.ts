import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Health } from '../models/ohp.model';
import { Plan } from '../models/plans.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  health:  Health [] = [
    
  ]
  plans: Plan [] = [
    new Plan("gold package",5072328888,234.99),
    new Plan("silver package",433433335,134.99),
    new Plan("bronze package",434665655,109.99)
  ]
  selectEnroll = null;
  enrollForm(){
    this.selectEnroll = true;
  }
  selectInfo = null;
  showInfo(name,address,salary,coverage) {
    this.selectInfo = true;

    let newHealth = new Health(name,address,salary,coverage=true);

    if(newHealth.salary > 35000){
      newHealth.coverage = false;
    }
    this.health.push(newHealth);

  }

  selectPlans= null;
  privatePlans(){
    this.selectPlans = true;
  }
  startOver(){
    this.selectEnroll = null;
    this.selectPlans = null;
    this.selectInfo = null;
  }
  constructor(private router: Router) { }

  ngOnInit() {

  }

}
