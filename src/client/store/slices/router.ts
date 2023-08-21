import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RouterState {
  path: string
}

const initialState: RouterState = {
  path: '/',
}

export const routerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    jump: (state, action: PayloadAction<string>) => {
      state.path = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { jump } = routerSlice.actions

export default routerSlice.reducer