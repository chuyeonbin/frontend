import httpInstance from './index';

class Auth {
  constructor() {
    this.request = httpInstance;
  }

  async login(code) {
    const userData = await this.request.get(`login/oauth/kakao?code=${code}`);
    // const userData = await this.request.get('login');
    return userData;
  }

  async insertUser(file, userData) {
    const formData = new FormData();
    if (typeof a == 'undefined') {
      formData.append('file', file);
    }
    formData.append(
      'json',
      new Blob([JSON.stringify(userData)], { type: 'application/json' })
    );
    console.log(userData, file);
    // const res = await this.request.post('inserUser', formData, {
    //   headers: {
    //     'Content-Type': `multipart/form-data; `,
    //   },
    // });
    const res = await this.request.post('users/profile/me', formData, {
      headers: {
        'Content-Type': `multipart/form-data; `,
      },
    });
    return res;
  }

  async logout() {
    const res = await this.request.post('logout/me');
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
    // const userData = await this.request.get('auth');
    return userData;
  }
}

const auth = new Auth();

export default auth;
