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
  showInfo(name,address,salary) {
    this.salary = salary;
    let coverage = true;
    this.selectInfo = true;
    let newHealth = new Health(name,address,salary);
    if(this.salary >= 35000){
      this.coverage = false;
    }
    this.health.push(newHealth);

  }
  findDoctor(name){

}
}
