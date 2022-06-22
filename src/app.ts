import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './api';

@autoinject
export class App {
  public values: string[];

  constructor(public api: ApiWrapper) {
    this.initValues();
  }

  private async initValues() {
    try {
      this.values = await this.api.client.fetch("/quotes/")
        .then((res) => res.json());
    } catch (ex) {
      console.error(ex);
    }
  }
}
