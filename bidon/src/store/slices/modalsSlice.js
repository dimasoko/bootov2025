import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    newsForm: {
      isOpen: false,
      editData: null
    },
    serviceForm: {
      isOpen: false,
      editData: null
    }
  },
  reducers: {
    openNewsForm: (state, action) => {
      state.newsForm.isOpen = true;
      state.newsForm.editData = action.payload || null;
    },
    closeNewsForm: (state) => {
      state.newsForm.isOpen = false;
      state.newsForm.editData = null;
    },
    openServiceForm: (state, action) => {
      state.serviceForm.isOpen = true;
      state.serviceForm.editData = action.payload || null;
    },
    closeServiceForm: (state) => {
      state.serviceForm.isOpen = false;
      state.serviceForm.editData = null;
    },
    closeAllModals: (state) => {
      state.newsForm.isOpen = false;
      state.newsForm.editData = null;
      state.serviceForm.isOpen = false;
      state.serviceForm.editData = null;
    }
  }
});

export const {
  openNewsForm,
  closeNewsForm,
  openServiceForm,
  closeServiceForm,
  closeAllModals
} = modalsSlice.actions;

export default modalsSlice.reducer;
