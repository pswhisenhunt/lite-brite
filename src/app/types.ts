import * as React from "react"
import { store } from "./store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type Color = {
    id: string,
    name: string,
    value: string,
}

export type Cell = {
    id: string,
    color: string
}