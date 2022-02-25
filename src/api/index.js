import axios from 'axios';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

const BASE_API_URL = 'https://sicksago.herokuapp.com';

const authAPI = {
  async getToken(code) {
    return axios.get(`${BASE_API_URL}/login/oauth/kakao?code=${code}`, GET);
  },
};

export { authAPI };
