import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DetailstatuspengirimanPage } from '../detailstatuspengiriman/detailstatuspengiriman';
import { DetailpermintaandonaturPage } from '../detailpermintaandonatur/detailpermintaandonatur';
import { DetailsedangdiprosesPage } from '../detailsedangdiproses/detailsedangdiproses';
import { DetaildikirimPage } from '../detaildikirim/detaildikirim';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the StatusbantuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statusbantuan',
  templateUrl: 'statusbantuan.html',
})
export class StatusbantuanPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  
    SwipedTabsIndicator :any= null;
    tabs:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.tabs=["Status Pengiriman","Permintaan Donatur","Daftar Pengiriman"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusbantuanPage');
  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

  halamandetailstatuspengiriman(position: string){
    let toast = this.toastCtrl.create({
      message: 'Barang telah sampai ditujuan',
      duration: 2000,
      position: position
    });

    toast.present(toast);
    this.navCtrl.push(DetailstatuspengirimanPage);
  }

  halamandetailpermintaandonatur(position: string){
    let toast = this.toastCtrl.create({
      message: 'Permintaan Donatur',
      duration: 2000,
      position: position
    });

    toast.present(toast);
    this.navCtrl.push(DetailpermintaandonaturPage);
  }

  halamandetailsedangdiproses(position: string){
    this.navCtrl.push(DetailsedangdiprosesPage);
  }


  halamandetaildikirim(position: string){
    let toast = this.toastCtrl.create({
      message: 'Dikirim',
      duration: 2000,
      position: position
    });

    toast.present(toast);
    this.navCtrl.push(DetaildikirimPage);
  }
}
