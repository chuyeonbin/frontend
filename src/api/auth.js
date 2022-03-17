import httpInstance from './index';

class Auth {
  constructor() {
    this.request = httpInstance;
  }

  async login(code) {
    const userData = await this.request.get(`login/oauth/kakao?code=${code}`);
    // const userData = await this.request.get('login');
    console.log(userData);
    return userData;
  }

  async insertUser(userData) {
    const res = await this.request.post(`users/profile/me`, userData, {
      headers: {
          'Content-Type': `multipart/form-data; `,
        },
    });
    console.log(userData);
    // const res = await this.request.get('inserUser', userData, {
    //   headers: {
    //     'Content-Type': `multipart/form-data; `,
    //   },
    // });
    return res;
  }

  async logout() {
    const res = await this.request.post('logout');
    // const res = await this.request.get('logout');
    return res;
  }

  async modifyUser(userData) {
    const res = await this.request.post(`users/profile/me`, userData);
    // const res = await this.request.get('modifyUser', userData);
    return res;
  }

  async deleteUser() {
    const res = await this.request.delete('users/me');
    // const res = await this.request.get('delete');
    return res;
  }

  async getUser() {
    //로그인 되있는 상태에서 새로고침시 엑세스토큰을 이용해 유저 정보 업데이트
    this.request.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('accessToken')}`;

    const userData = await this.request.get('users/me');
    return userData;
  }
}

const auth = new Auth();

export default auth;
