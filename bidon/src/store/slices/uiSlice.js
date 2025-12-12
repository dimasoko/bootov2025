import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadUISettings = createAsyncThunk(
  'ui/loadSettings',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isLogin = localStorage.getItem('lastAuthMode') === 'login';
        const menuState = localStorage.getItem('menuPreference') === 'open';
        resolve({ isLogin, menuState });
      }, 100);
    });
  }
);

export const saveUISettings = createAsyncThunk(
  'ui/saveSettings',
  async ({ isLogin, isMobileMenuOpen }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('lastAuthMode', isLogin ? 'login' : 'register');
        localStorage.setItem('menuPreference', isMobileMenuOpen ? 'open' : 'closed');
        resolve({ success: true });
      }, 200);
    });
  }
);

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLogin: true, 
    isMobileMenuOpen: false,
    loading: false,
    error: null
  },
  reducers: {
    toggleAuthMode: (state) => {
      state.isLogin = !state.isLogin;
    },
    setAuthMode: (state, action) => {
      state.isLogin = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    resetUI: (state) => {
      state.isLogin = true;
      state.isMobileMenuOpen = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUISettings.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUISettings.fulfilled, (state, action) => {
        state.isLogin = action.payload.isLogin;
        state.isMobileMenuOpen = action.payload.menuState;
        state.loading = false;
      })
      .addCase(loadUISettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveUISettings.fulfilled, (state) => {
        state.error = null;
      });
  }
});

export const {
  toggleAuthMode,
  setAuthMode,
  toggleMobileMenu,
  closeMobileMenu,
  openMobileMenu,
  resetUI
} = uiSlice.actions;

export default uiSlice.reducer;
