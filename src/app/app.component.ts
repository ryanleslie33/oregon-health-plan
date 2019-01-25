import { Component } from '@angular/core';
import { Health } from './models/ohp.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  health:  Health [] = [

  ]

  selectEnroll = null;
  enrollForm(){
    this.selectEnroll = true;
  }
selectInfo = null;
  showInfo(name,address,salary,coverage) {
    this.selectInfo = true;

    let newHealth = new Health(name,address,salary,coverage=true);

    if(this.selectEnroll.salary >= 35000){
    newHealth.coverage = false;
    }
    this.health.push(newHealth,coverage);

  }
  findDoctor(name){

}
}
