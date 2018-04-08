import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailbarangdikirimPage } from '../detailbarangdikirim/detailbarangdikirim';

/**
 * Generated class for the KebutuhanperposkoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kebutuhanperposko',
  templateUrl: 'kebutuhanperposko.html',
})
export class KebutuhanperposkoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  halamandetailbarangdikirim(){
    this.navCtrl.setRoot(DetailbarangdikirimPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad KebutuhanperposkoPage');
  }

}
