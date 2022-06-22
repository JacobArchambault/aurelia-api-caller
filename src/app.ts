import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './services/api';

@autoinject
export class App {
  private values: string[] = [];

  constructor(private api: ApiWrapper) {
  }

  private async addOne(): Promise<void> {
    try {
      this.values.push(await this.api.getOne());
    } catch (ex) {
      console.error(ex);
    }
  }
}
