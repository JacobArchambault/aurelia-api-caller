import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './services/api';

@autoinject
export class App {
  public values: string[] = [];

  constructor(public api: ApiWrapper) {
  }

  private async initValues() {
    try {
      this.values.push(await this.api.client.fetch("/quotes/")
        .then((res) => res.json()));
    } catch (ex) {
      console.error(ex);
    }
  }
}
