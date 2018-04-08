import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusbantuanPage } from '../statusbantuan/statusbantuan';
import { CetakpdfPage } from '../cetakpdf/cetakpdf';

/**
 * Generated class for the DetailsedangdiprosesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailsedangdiproses',
  templateUrl: 'detailsedangdiproses.html',
})
export class DetailsedangdiprosesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsedangdiprosesPage');
  }


  halamancetakpdf(){
    this.navCtrl.push(CetakpdfPage);
  }


  halamanstatusbantuan(){
    this.navCtrl.setRoot(StatusbantuanPage);
  }
}
