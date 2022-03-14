import httpInstance from './index';

class Post {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async getPosts() {
    const posts = await this.request.get('posts');
    return posts;
  }

  async getPost(postId) {
    // const post = await this.request.get(`posts/${postId}`);
    const post = await this.request.get('post');
    return post;
  }

  async uploadPost(postData) {
    // return await this.request.post('posts', postData);
    return await this.request.post('uploadPost', postData);
  }

  async editPost(postData, postId) {
    // return await this.request.patch('posts/{postId}', postData);
    return await this.request.post('edit', postData);
  }

  async getComments(postId) {
    // const comments = await this.request.get(`posts/${postId}/comments`);
    const comments = await this.request.get('comments');
    return comments;
  }

  async uploadComments(postId, content) {
    // posts/{postId}/comments
    //return await this.request.post(`posts/${postId}/comments`, content);
    return await this.request.post('uploadComments', content);
  }

  async getLike(postId, liked) {
    // return await this.request.patch(`​posts​/{postId}​/likes`, liked);
    return await this.request.post('like', { liked });
  }
}

const postAPI = new Post(httpInstance);

export default postAPI;
