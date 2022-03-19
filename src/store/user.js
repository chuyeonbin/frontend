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

const insertUser = createAsyncThunk('user/signUp', async (user, thunkAPI) => {
  const userData = {
    id: user.id,
    nickName: user.nickName,
    address: user.address,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
  };
  const response = await auth.insertUser(user.imageUrl, userData);
  return response.data;
});

const initialState = {
  user: {
    id: null,
    nickName: null,
    email: null,
    imageUrl: null,
    profileSaveUser: false,
    gender: null,
    address: {
      city: '',
      street: '',
      zipcode: '',
    },
    phoneNumber: null,
  },
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
<<<<<<< HEAD
    setUser: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    setName(state, action) {
      state.user.nickName = action.payload;
=======
    setUser(state, { payload }) {
      state.user = payload;
    },
    setName(state, { payload }) {
      state.user.nickName = payload;
>>>>>>> feature/test
    },
    setGender(state, { payload }) {
      state.user.gender = payload;
    },
    setAddress(state, { payload }) {
      state.user.address[payload.id] = payload.value;
    },
    setEmail(state, { payload }) {
      state.user.email = payload;
    },
    setPhone(state, { payload }) {
      state.user.phoneNumber = payload;
    },
    setImage(state, { payload }) {
      console.log('image', payload);
      state.user.imageUrl = payload;
    },
    resetUser(state) {
      state.user = initialState.user;
      localStorage.removeItem('accessToken');
      httpInstance.defaults.headers.common['Authorization'] = '';
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('accessToken', payload.accessToken);
      state.user.email = payload.email;
      state.user.id = payload.id;
      state.user.imageUrl = payload.imageUrl;
      state.user.nickName = payload.nickName;
      state.user.profileSaveUser = payload.profileSaveUser;
    },
    [insertUser.fulfilled]: (state, { payload }) => {
      state.user.imageUrl = payload.imageUrl;
      state.user.profileSaveUser = true;
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
