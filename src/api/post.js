import httpInstance from './index';

class Post {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async getPosts() {
    const posts = await this.request.get('posts');
    return posts;
  }
}

const postAPI = new Post(httpInstance);

export default postAPI;
