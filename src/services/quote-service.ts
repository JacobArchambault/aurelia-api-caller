import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


@autoinject
export class QuoteService {
  private readonly baseUrl = "https://ron-swanson-quotes.herokuapp.com/v2";

  constructor(private client: HttpClient) {
    client.configure(config => {
      config
        .withBaseUrl(this.baseUrl)
        .withDefaults({
          headers: {
            Accept: 'application/json',
          },
        });
    });
  }

  public async getOne(): Promise<string> {
    return this.client.fetch("/quotes/")
      .then((res) => res.json());
  }
}
