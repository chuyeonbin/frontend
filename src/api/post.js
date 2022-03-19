import httpInstance from './index';

class Post {
  constructor() {
    this.request = httpInstance;
  }

  async getPosts() {
    const posts = await this.request.get('posts');
    return posts;
  }

  async getPost(postId) {
    this.request.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('accessToken')}`;

    const post = await this.request.get(`posts/${postId}`);
    // const post = await this.request.get('post');
    return post;
  }

  async uploadPost(postData) {
    return await this.request.get('users/me/posts', postData);
    // return await this.request.get('uploadPost', postData);
  }

  async editPost(postData, postId) {
    return await this.request.patch(`posts/${postId}`, postData);
    // return await this.request.post('edit', postData);
  }

  async deletePost(postId) {
    return await this.request.delete(`posts/${postId}`);
    // return await this.request.get('deletePost');
  }

  async getComments(postId) {
    const comments = await this.request.get(`posts/${postId}/comments`);
    // const comments = await this.request.get('comments');
    return comments;
  }

  async uploadComments(postId, content) {
    // posts/{postId}/comments
    return await this.request.post(`posts/${postId}/comments`, content);
    // return await this.request.post('uploadComments', content);
  }

  async getLike(postId, liked) {
    // console.log("postId : ", postId, " liked : ", liked);
    return await this.request.patch(`posts/${postId}/likes`, liked);
    // return await this.request.post('like', liked);
  }
}

const postAPI = new Post();

export default postAPI;
