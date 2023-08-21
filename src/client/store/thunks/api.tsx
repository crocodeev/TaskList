import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TCard } from 'src/types'
import { TCardsFetch } from 'src/client/types/types'
import API from 'src/client/api/api'

const api = API.getInstance()

const fetchTasks = createAsyncThunk(
  'tasks/fetch',
  async (obj: { limits: number, offset: number}):Promise<TCardsFetch>  => {
    const response = await api.getTasks(obj.limits, obj.offset )
    //if user skip request one of the pages
    response.offset = obj.offset
    response.limits = obj.limits
    return response
  }
)

interface TasksState {
  cards: TCard[],
  cardsCount: number | string
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  cards: [],
  cardsCount: 0,
  loading: 'idle',
} as TasksState

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchTasks.fulfilled, (state, action) => {

      const offset = action.payload.offset
      const limits = action.payload.limits
      const cards = action.payload.cards

      console.log(cards);
      

      state.cards.splice(offset, limits, ...cards)
      state.cardsCount = action.payload.count
    })
  },
})

export { fetchTasks }
export const tasksReducer = tasksSlice.reducer
