// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getMenu } from '../../services/apiRestaurant';
// const initialState = {
//   menu: [],
//   status: 'idle',
// };
// export const fetchMenu = createAsyncThunk('menu/fetchMenu', async function() {
//     console.log("e");
//   const menu = await getMenu();
//   console.log("data",menu);
//   return menu;
//   // console.log(data);
// });
// const menuSlice = createSlice({
//   name: 'menu',
//   initialState,
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchMenu.pending, (state, action) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMenu.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.menu = action.payload;
//       })
//       .addCase(fetchMenu.rejected, (state, action) => {
//         state.status = 'error';
//       }),
// });
// export const getMenuItems = (state) => state.menu;
// export default menuSlice.reducer;
