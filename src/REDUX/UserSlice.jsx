import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        name : '' , 
        email : ''
    }, 

    reducers : {
        addUser : (state , action ) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    },
})

export const {addUser} = userSlice.actions

export default userSlice.reducer