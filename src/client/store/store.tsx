import { configureStore } from "@reduxjs/toolkit"
import { routerReducer } from "react-router-redux"
import { tasksReducer } from "./thunks/api"
import paginator from "./slices/paginator"

export const store = configureStore({
    reducer: {
        router: routerReducer,
        tasks: tasksReducer,
        page: paginator
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch