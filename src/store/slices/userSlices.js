import { createSlice } from '@reduxjs/toolkit'


const userInitialValues = {
	firstName: "Bohdan",
	lastName: "Lee",
	email: "bohdan.lee@gmail.com",
	isFavourite: false,
}

const userSlice = createSlice({
	initialState: userInitialValues,
	name: "userInfo",
	reducers: {
		reselectFavourite: (state, action) => {
			state.isFavourite = action.payload
		}
	}
})

const {reducer, actions} = userSlice
export const { reselectFavourite } = actions 
export default reducer
