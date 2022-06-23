import { autoinject } from 'aurelia-framework';
import { QuoteService } from 'services/quote-service';

@autoinject
export class RonSwansonQuotes {
  private values: string;

  constructor(private quoteService: QuoteService) {
  }

  private async addOne(): Promise<void> {
    try {
      this.values = await this.quoteService.getOne();
    } catch (ex) {
      console.error(ex);
    }
  }
}
