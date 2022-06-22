import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

const baseUrl = "http://ron-swanson-quotes.herokuapp.com/v2";

@autoinject
export class ApiWrapper {
    public values: string[];

    constructor(public client: HttpClient) {
		client.configure(config => {
			config
				.withBaseUrl(baseUrl)
				.withDefaults({
					headers: {
						Accept: 'application/json',
					},
				});
		});
	}
}
