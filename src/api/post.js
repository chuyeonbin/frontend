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

  async uploadPost(postData) {
    //posts
    return await this.request.post('uploadPost', postData);
  }

  async getComments() {
    const comments = await this.request.get('comments');
    return comments;
  }

  async uploadComments(postId, content) {
    // posts/{postId}/comments
    return await this.request.post('uploadComments', content);
  }
}

const postAPI = new Post(httpInstance);

export default postAPI;
