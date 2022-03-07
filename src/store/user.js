import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpInstance from '../api';
import auth from '../api/auth';

const fetchUser = createAsyncThunk('user/login', async (code, thunkAPI) => {
  const response = await auth.login(code);
  const accessToken = response.data.data.accessToken;

  httpInstance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${accessToken}`;

  return response.data.data;
});

const initialState = {
  user: {
    id: null,
    name: null,
    imageUrl: null,
    profileSaveUser: false,
    gender: null,
    address: null,
    phone: null,
  },
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload }) => {
      const user = state.user;
      user.id = payload.id;
      user.name = payload.name;
      user.imageUrl = payload.imageUrl;
      user.profileSaveUser = payload.profileSaveUser;
      user.gender = payload.gender;
      user.address = payload.address;
      user.phone = payload.phone;
      state.loading = false;
    },
    [fetchUser.rejected]: state => {
      state.loading = false;
    },
  },
});

const user = userSlice.reducer;

export { fetchUser };

export default user;
