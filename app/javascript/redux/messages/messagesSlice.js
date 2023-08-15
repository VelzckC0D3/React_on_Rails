import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  loading: false,
  error: '',
};

const url = 'http://localhost:3000/api/v1/messages';


export const getMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.error = '';
    });
    builder.addCase(getMessages.rejected, (state, action) => {
      state.loading = false;
      state.messages = [];
      state.error = action.error.message;
    });
  },
});

export default messagesSlice.reducer;