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
  showInfo(name,address) {
    this.selectInfo = true;
    let newHealth = new Health(name,address);
    this.health.push(newHealth);

  }
}
