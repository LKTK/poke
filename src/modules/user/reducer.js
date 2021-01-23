import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const USER_GENDER_FEMALE = 'F'
export const USER_GENDER_MALE = 'M'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null,
        gender: USER_GENDER_MALE
    },
    reducers: {
        createUser: (state, action) => {
          state.id = uuidv4()
          state.name = action.payload
        },

        setGender: (state, action) => {
            state.gender = action.payload
        }
    }
})

export const { createUser, setGender } = userSlice.actions

export default userSlice.reducer