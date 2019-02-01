import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Health } from './models/ohp.model';
import { Plan } from './models/plans.model';
import { WelcomeComponent } from './welcome/welcome.component';

@Injectable()
export class QuickstartService {
currenthealth: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
this.currenthealth = database.list('currenthealth');
}


getHealth() {
   return this.currenthealth
 }
};
