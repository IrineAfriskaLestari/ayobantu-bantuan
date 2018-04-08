import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  splash = true;
  tabBarElement: any;

  slides = [
    {
      title: "Login melalui Google",
    
      image: "assets/imgs/google.png",
    },
  ];

  constructor(public navCtrl: NavController) {
    //this.tabBarElement = document.querySelector('.tabbar');
  }
  halamanhome(){
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad(){
    //this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      //this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
}