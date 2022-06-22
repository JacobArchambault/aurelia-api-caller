import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './services/api';

@autoinject
export class App {
  public values: string[] = [];

  constructor(public api: ApiWrapper) {
  }

  private async addOne(): Promise<void> {
    try {
      this.values.push(await this.getOne());
    } catch (ex) {
      console.error(ex);
    }
  }

  private async getOne(): Promise<string> {
    return this.api.client.fetch("/quotes/")
      .then((res) => res.json());
  }
}
