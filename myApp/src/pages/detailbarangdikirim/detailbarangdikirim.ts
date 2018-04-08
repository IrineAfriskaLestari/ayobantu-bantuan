import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusbantuanPage } from '../statusbantuan/statusbantuan';

/**
 * Generated class for the DetailbarangdikirimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailbarangdikirim',
  templateUrl: 'detailbarangdikirim.html',
})
export class DetailbarangdikirimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailbarangdikirimPage');
  }

  halamanstatusbantuan(){
    this.navCtrl.push(StatusbantuanPage);
  }

}
