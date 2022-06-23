import { autoinject } from 'aurelia-framework';
import { PostsService } from './../../services/posts-service';

@autoinject
export class Posts {
  private posts: string[] = [];
  constructor(private readonly postsService: PostsService) {
    this.displayAll();
  }

  private async displayAll() {
    try {
      this.posts = await this.postsService.getAll();
    } catch (ex) {
      console.error(ex);
    }
  }
}
