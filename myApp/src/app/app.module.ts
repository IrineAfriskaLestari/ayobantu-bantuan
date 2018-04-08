import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PoskoPage } from '../pages/posko/posko';
import { InventarisPage } from '../pages/inventaris/inventaris';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HubungiPage } from '../pages/hubungi/hubungi';
import { StatusbantuanPage } from '../pages/statusbantuan/statusbantuan';
import { TambahpenyumbangPage } from '../pages/tambahpenyumbang/tambahpenyumbang';
import { DetailpenyumbangPage } from '../pages/detailpenyumbang/detailpenyumbang';
import { KebutuhanperposkoPage } from '../pages/kebutuhanperposko/kebutuhanperposko';
import { DetailbarangdikirimPage } from '../pages/detailbarangdikirim/detailbarangdikirim';
import { DetailstatuspengirimanPage } from '../pages/detailstatuspengiriman/detailstatuspengiriman';
import { DetailpermintaandonaturPage } from '../pages/detailpermintaandonatur/detailpermintaandonatur';
import { DetailkebutuhanPage } from '../pages/detailkebutuhan/detailkebutuhan';
import { DetailsedangdiprosesPage } from '../pages/detailsedangdiproses/detailsedangdiproses';
import { DetaildikirimPage } from '../pages/detaildikirim/detaildikirim';
import { CetakpdfPage } from '../pages/cetakpdf/cetakpdf';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    PoskoPage,
    InventarisPage,
    StatusbantuanPage,
    HubungiPage,
    TambahpenyumbangPage,
    DetailstatuspengirimanPage,
    DetailpenyumbangPage,
    KebutuhanperposkoPage,
    DetailbarangdikirimPage,
    DetailpermintaandonaturPage,
    DetailkebutuhanPage,
    DetailsedangdiprosesPage,
    DetaildikirimPage,
    CetakpdfPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    PoskoPage,
    InventarisPage,
    StatusbantuanPage,
    HubungiPage,
    TambahpenyumbangPage,
    DetailstatuspengirimanPage,
    DetailpenyumbangPage,
    KebutuhanperposkoPage,
    DetailbarangdikirimPage,
    DetailpermintaandonaturPage,
    DetailkebutuhanPage,
    DetailsedangdiprosesPage,
    DetaildikirimPage,
    CetakpdfPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
