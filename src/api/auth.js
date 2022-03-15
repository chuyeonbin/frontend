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

  async logout() {
    // const res = await this.request.post('logout');
    const res = await this.request.get('logout');
    return res;
  }

  async modifyUser(userData) {
    // const res = await this.request.post(`users/profile/me`, userData);
    const res = await this.request.get('modifyUser', userData);
    return res;
  }

  async deleteUser() {
    // const res = await this.request.delete('users/profile/me');
    const res = await this.request.get('delete');
    return res;
  }

  async getUser() {
    //로그인 되있는 상태에서 새로고침시 엑세스토큰을 이용해 유저 정보 업데이트
    const userData = await this.request.get('auth');
    return userData;
  }
}

const auth = new Auth(httpInstance);

export default auth;
