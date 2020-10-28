
export class PostService {
  constructor(api) {
    this.api = api
  }

  getPost(id) {
    return this.api.getPost(id);
  }
  getComments(id) {
    return this.api.getComments(id);
  }
}