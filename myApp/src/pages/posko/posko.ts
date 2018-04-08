import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KebutuhanperposkoPage } from '../kebutuhanperposko/kebutuhanperposko';

@Component({
  selector: 'page-posko',
  templateUrl: 'posko.html'
})
export class PoskoPage {

  constructor(public navCtrl: NavController) {

  }
  Halamankebutuhanperposko(){
    this.navCtrl.push(KebutuhanperposkoPage);
  }

}
