import { Component } from '@angular/core';
import { Health } from './models/ohp.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  selectEnroll = null;
  enrollForm(name){
    this.selectEnroll = true;
  }
}
