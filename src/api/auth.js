import httpInstance from './index';

class Auth {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async login(code) {
    // const userData = await this.request.get(`login/oauth/kakao?code=${code});
    const userData = await this.request.get('data');
    return userData;
  }

  async insertUser(userData) {
    // const res = await this.request.post(`users/profile/me`, userData);
    console.log(userData);
    const res = await this.request.get('inserUser', userData);
    return res;
  }

  async modifyUser(userData) {
    // const res = await this.request.post(`users/profile/me`, userData);
    const res = await this.request.get('modifyUser', userData);
    return res;
  }
}

const auth = new Auth(httpInstance);

export default auth;
