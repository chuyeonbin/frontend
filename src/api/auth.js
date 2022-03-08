import httpInstance from './index';

class Auth {
  constructor(httpInstance) {
    this.request = httpInstance;
  }

  async login(code) {
    const userData = await this.request.get('data');
    return userData;
    // return axios.get(`${BASE_API_URL}/login/oauth/kakao?code=${code}`);
  }

  async insertUser(userData) {
    const res = await this.request.get('inserUser', userData);
    return res;
  }
}

const auth = new Auth(httpInstance);

export default auth;
