import axios from "axios"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { JSON_SERVER_URL } from "../../../app/constants"
import { Color } from "../../../app/types"
import { Stats } from "webpack"

interface ColorsState {
    current: Color,
    defaultValues: {
        status: "idle" | "fullfilled",
        colors: Color[]
    },
    customValues: {
        status: "idle" | "fullfilled",
        colors: Color[]
    }
}

const initialState: ColorsState = {
    current: {
        id: "",
        name: "",
        value: ""
    },
    defaultValues: {
        status: "idle",
        colors: []
    },
    customValues: {
        status: "idle",
        colors: []
    }
}

const colorsSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {
        setCurrent: {
            reducer(state, action: PayloadAction<Color>) {
                state.current = action.payload
            },
            prepare(id: string, name: string, value: string) {
                return {
                    payload: {
                        id: id,
                        name: name,
                        value: value
                    }
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDefaultColors.fulfilled, (state, action: PayloadAction<Color[]>) => {
            state.defaultValues = {
                colors: action.payload,
                status: "fullfilled"
            }
        }),
        builder.addCase(fetchCustomColors.fulfilled, (state, action: PayloadAction<Color[]>) => {
            state.customValues = {
                colors: action.payload,
                status: "fullfilled"
            }
        }),
        builder.addCase(addCustomValue.fulfilled, (state, action: PayloadAction<Color>) => {
            state.customValues.colors.push(action.payload)
        })
    }
})

export const deleteCustomColor = createAsyncThunk("colors/delete", async (id: string) => {
    const response = await axios.delete(`${JSON_SERVER_URL}/customs/${id}`)
    return response.data
})

export const addCustomValue = createAsyncThunk("colors/new", async (value: string) => {
    const response = await axios.post(`${JSON_SERVER_URL}/customs`, {value: value, name: `Custom Color: ${value}`})
    return response.data
})

export const fetchDefaultColors = createAsyncThunk("colors/defaults", async () => {
    const response = await axios.get(`${JSON_SERVER_URL}/defaults`)
    return response.data
})

export const fetchCustomColors = createAsyncThunk("colors/customs", async () => {
    const response = await axios.get(`${JSON_SERVER_URL}/customs`)
    return response.data
})

export const { setCurrent } = colorsSlice.actions

export default colorsSlice.reducer