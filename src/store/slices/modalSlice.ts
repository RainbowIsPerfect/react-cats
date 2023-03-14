import { createSlice } from '@reduxjs/toolkit';

interface InitialModal {
  isOpen: boolean;
}

const initialState: InitialModal = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleModal } = modalSlice.actions;

export default modalSlice.reducer;
