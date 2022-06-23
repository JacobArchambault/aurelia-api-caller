import { autoinject } from 'aurelia-framework';
import { QuoteService } from 'services/quote-service';

@autoinject
export class RonSwansonQuotes {
  private quote: string;

  constructor(private quoteService: QuoteService) {
  }

  private async getQuote(): Promise<void> {
    try {
      this.quote = await this.quoteService.getOne();
    } catch (ex) {
      console.error(ex);
    }
  }
}
