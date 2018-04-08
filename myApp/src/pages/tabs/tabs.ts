import { Component } from '@angular/core';

import { PoskoPage } from '../posko/posko';
// import { LoginPage } from '../login/login';
import { InventarisPage } from '../inventaris/inventaris';
import { HomePage } from '../home/home';
import { HubungiPage } from '../hubungi/hubungi';
import { StatusbantuanPage } from '../statusbantuan/statusbantuan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PoskoPage;
  tab3Root = InventarisPage;
  tab4Root = StatusbantuanPage;
  tab5Root = HubungiPage;

  constructor() {

  }
}
