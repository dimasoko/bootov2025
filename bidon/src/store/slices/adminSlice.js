import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const logAdminAction = createAsyncThunk(
  'admin/logAction',
  async ({ action, target, timestamp }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const logEntry = {
          id: Date.now(),
          action,
          target,
          timestamp: timestamp || new Date().toISOString()
        };
        console.log('Admin action logged:', logEntry);
        resolve(logEntry);
      }, 100);
    });
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isAdminMode: false,
    lastEditedEntity: null, 
    actionHistory: [],
    loading: false
  },
  reducers: {
    enableAdminMode: (state) => {
      state.isAdminMode = true;
    },
    disableAdminMode: (state) => {
      state.isAdminMode = false;
    },
    setLastEdited: (state, action) => {
      state.lastEditedEntity = action.payload;
    },
    clearActionHistory: (state) => {
      state.actionHistory = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logAdminAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(logAdminAction.fulfilled, (state, action) => {
        state.actionHistory.push(action.payload);
        state.loading = false;
      })
      .addCase(logAdminAction.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const {
  enableAdminMode,
  disableAdminMode,
  setLastEdited,
  clearActionHistory
} = adminSlice.actions;

export default adminSlice.reducer;
