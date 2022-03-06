import httpInstance from './index';

class Auth {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async login(code) {
    const userData = await this.request.get('db');
    return userData;
    // return axios.get(`${BASE_API_URL}/login/oauth/kakao?code=${code}`);
  }
}

const auth = new Auth(httpInstance);

export default auth;
