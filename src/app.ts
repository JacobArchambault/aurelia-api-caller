import {RouterConfiguration, Router} from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";
  
export class App {
  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Routing demo';
    config.options.pushState = true;
    config.map([
      { route: '/',   moduleId: PLATFORM.moduleName('elements/home/home.html'), title: 'Home' },
      { route: 'ron-swanson-quotes',   moduleId: PLATFORM.moduleName('elements/ron-swanson-quotes/ron-swanson-quotes'), title: 'Ron Swanson quotes' }
    ]);
  }
}
