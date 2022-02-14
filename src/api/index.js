import axios from 'axios';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

const BASE_API_URL = 'backend api url/';

const auth = {
  async getToken(code) {
    return axios.get(`${BASE_API_URL}kakao/?code=${code}`, GET);
  },
};

export { auth };
