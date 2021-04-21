import {RouterOutlet} from '@angular/router';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {fader} from "./route-animation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // slider,
    // bassemAnimation
    fader
  ]
})
export class AppComponent {
  title = 'ggfreaks-CLIENT';

  prepareRoute(outlet: RouterOutlet) {
    return  outlet && outlet.activatedRouteData;
  }
}
