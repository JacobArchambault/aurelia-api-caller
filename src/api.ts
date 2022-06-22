import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


@autoinject
export class ApiWrapper {
  private readonly baseUrl = "https://ron-swanson-quotes.herokuapp.com/v2";
  public values: string[];

    constructor(public client: HttpClient) {
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
}
