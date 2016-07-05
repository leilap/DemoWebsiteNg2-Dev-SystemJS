import { Component } from '@angular/core';
import { NavigationBoxComponent } from './navigation-boxes/navigation-box.component';
 import { TopMenuComponent } from './top-menu/top-menu.component';
@Component({
  selector: 'body',
  templateUrl: ('./src/app/app.component.html'),
  directives: [TopMenuComponent, NavigationBoxComponent]
})
export class AppComponent { }
