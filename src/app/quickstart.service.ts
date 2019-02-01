import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QuickstartService {
quickstarts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
this.quickstarts = database.list('quickstarts');
}


getQuickStarts() {
   return this.quickstarts
 }
};
