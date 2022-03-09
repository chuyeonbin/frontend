import httpInstance from './index';

class Post {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async getPosts() {
    const posts = await this.request.get('posts');
    return posts;
  }

  async getPost() {
    const post = await this.request.get('post');
    return post;
  }

  async getComments() {
    const comments = await this.request.get('comments');
    return comments;
  }
}

const postAPI = new Post(httpInstance);

export default postAPI;
