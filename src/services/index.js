import { ApiService } from './ApiService';
import { PostService } from './PostService';
import { UserService } from './UserService';

export function createServices () {
  const api = new ApiService('https://jsonplaceholder.typicode.com');
  const userService = new UserService(api);
  const postService = new PostService(api);

  return {
    api,
    userService,
    postService
  } 
}