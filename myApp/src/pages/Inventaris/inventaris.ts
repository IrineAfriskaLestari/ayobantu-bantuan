import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { TambahpenyumbangPage } from '../tambahpenyumbang/tambahpenyumbang';
import { DetailpenyumbangPage } from '../detailpenyumbang/detailpenyumbang';

@Component({
  selector: 'page-inventaris',
  templateUrl: 'inventaris.html'
})
export class InventarisPage {

  constructor(public navCtrl: NavController, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {

  }

  halamantambahpenyumbang(){
    this.navCtrl.push(TambahpenyumbangPage);
  }

  halamandetailpenyumbang(){
    this.navCtrl.push(DetailpenyumbangPage);
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Opsi',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'View',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'eye' : null,
          handler: () => {
            console.log('Haiiiiiiiiiiiii');
          }
        },
        {
          text: 'Edit Stok',
          icon: !this.platform.is('ios') ? 'ios-create' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }

}