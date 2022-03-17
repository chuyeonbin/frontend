import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpInstance from '../api';
import auth from '../api/auth';

const fetchUser = createAsyncThunk('user/login', async (code, thunkAPI) => {
  const response = await auth.login(code);
  const accessToken = response.data.accessToken;

  httpInstance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${accessToken}`;

  return response.data;
});

const insertUser = createAsyncThunk(
  'user/signUp',
  async (userData, thunkAPI) => {
    console.log(userData);
    const response = await auth.insertUser(userData);
    return response.data;
  }
);

const initialState = {
  user: {
    id: null,
    nickName: null,
    email: null,
    imageUrl: null,
    profileSaveUser: false,
    gender: null,
    address: null,
    phoneNumber: null,
  },
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setName(state, action) {
      state.user.nickName = action.payload;
    },
    setGender(state, action) {
      state.user.gender = action.payload;
    },
    setAddress(state, action) {
      state.user.address = action.payload;
    },
    setEmail(state, action) {
      state.user.email = action.payload;
    },
    setPhone(state, action) {
      state.user.phoneNumber = action.payload;
    },
    setImage(state, action) {
      state.user.imageUrl = action.payload;
    },
    resetUser(state, action) {
      state.user = initialState;
      localStorage.removeItem('accessToken');
      httpInstance.defaults.headers.common['Authorization'] = '';
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('accessToken', payload.accessToken);
      state.user = payload;
      state.loading = false;
    },
    [fetchUser.rejected]: state => {
      state.loading = false;
    },
    [insertUser.fulfilled]: (state, { payload }) => {
      const user = state.user;
      user.imageUrl = payload.imageUrl;
      user.profileSaveUser = true;
    },
  },
});

const user = userSlice.reducer;

export const {
  setUser,
  setName,
  setGender,
  setAddress,
  setEmail,
  setPhone,
  setImage,
  resetUser,
} = userSlice.actions;

export { fetchUser, insertUser };

export default user;
