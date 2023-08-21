import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RouterState {
  page: number
}

const initialState: RouterState = {
  page: 1,
}

export const paginatorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectPage } = paginatorSlice.actions

export default paginatorSlice.reducer