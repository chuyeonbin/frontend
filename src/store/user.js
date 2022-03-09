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
    const response = await auth.insertUser(userData);
    return response.data;
  }
);

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
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
  reducers: {
    setName(state, action) {
      state.user.name = action.payload;
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
      state.user.phone = action.payload;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload }) => {
      const user = state.user;
      user.id = payload.id;
      user.name = payload.name;
      user.email = payload.email;
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
    [insertUser.fulfilled]: (state, { payload }) => {
      const user = state.user;
      user.imageUrl = payload.imageUrl;
      user.profileSaveUser = true;
    },
  },
});

const user = userSlice.reducer;

export const { setName, setGender, setAddress, setEmail, setPhone } =
  userSlice.actions;

export { fetchUser, insertUser };

export default user;
