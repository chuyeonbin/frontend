import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  visible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCount: state => {
      state.count += 1;
    },
    setShowModal: (state, action) => {
      state.visible = action.payload;
    },
  },
});

const modal = modalSlice.reducer;

export const { setCount, setShowModal } = modalSlice.actions;

export default modal;
