import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Hello World!',
  status: 'idle',
};

export const fetchMessage = createAsyncThunk(
  'greeting/fetchMessage',
  async () => {
    const response = await fetch('http://localhost:5000/api/message');
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
      state.status = 'success';
    });
  },
});

export default greetingSlice.reducer;