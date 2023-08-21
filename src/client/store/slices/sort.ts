import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ESortBy, ESortOrder } from 'src/client/types/types'

export interface SortState {
  sortOn: boolean  
  sortBy: ESortBy,
  sortOrder: ESortOrder,
}

const initialState: SortStateState = {
  sortOn: false,
  sortBy: ESortBy.username,
  sortOrder: ESortOrder.ascending
}

export const paginatorSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    switch: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectPage } = paginatorSlice.actions

export default paginatorSlice.reducer