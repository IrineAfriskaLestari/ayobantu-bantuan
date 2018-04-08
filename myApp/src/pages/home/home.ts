import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailkebutuhanPage } from '../detailkebutuhan/detailkebutuhan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //this.tabBarElement = document.querySelector('.tabbar');
}

halamanDetailkebutuhan(){
 this.navCtrl.push(DetailkebutuhanPage);
}


}
