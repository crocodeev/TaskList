import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCard } from 'src/types'

export interface CardsState {
  cards: TCard[],
  cardsCount: number | string
}

const initialState: CardsState = {
  cards: [],
  cardsCount: 0  
}

export const cardsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    pushCards: (state, action: PayloadAction<CardsState>) => {
      state.cards.push(...action.payload.cards)
      state.cardsCount = action.payload.cardsCount
    }
  },
})

// Action creators are generated for each case reducer function
export const { pushCards } = cardsSlice.actions

export default cardsSlice.reducer