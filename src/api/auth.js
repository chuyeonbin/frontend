import httpInstance from './index';

class Auth {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async login(code) {
    // const userData = await this.request.post(`login/oauth/kakao?code=${code});
    const userData = await this.request.get('data');
    return userData;
  }

  async insertUser(userData) {
    // const res = await this.request.post(`users/profile/me`, userData);
    const res = await this.request.get('inserUser', userData);
    return res;
  }

  async getUserProfile() {
    // const userData = await this.request.get('users/profile/me');
    const userData = await this.request.get('users');
    return userData;
  }
}

const auth = new Auth(httpInstance);

export default auth;
