import { autoinject } from 'aurelia-framework';
import { ApiWrapper } from './services/api';

@autoinject
export class App {
  private values: string[] = [];

  constructor(private api: ApiWrapper) {
  }

  private async addOne(): Promise<void> {
    try {
      this.values.push(await this.getOne());
    } catch (ex) {
      console.error(ex);
    }
  }

  private async getOne() : Promise<string> {
    return this.api.getOne();
  }

}
