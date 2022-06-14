import { createSlice } from '@reduxjs/toolkit'


export const userDataSlice = createSlice({
  name: 'userData',
  initialState:{
    userData:null
  },
  reducers: {
    storeData: (state,action) => {
      state.userData = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeData } = userDataSlice.actions

export default userDataSlice.reducer