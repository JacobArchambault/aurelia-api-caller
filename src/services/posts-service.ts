import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Url } from 'url';

@autoinject
export class PostsService {
  private readonly baseUrl: string = "https://jsonplaceholder.typicode.com"

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

  public async getAll(): Promise<string[]> {
    return await this.client.fetch("/posts/")
      .then((res) => res.json());
  }
}
