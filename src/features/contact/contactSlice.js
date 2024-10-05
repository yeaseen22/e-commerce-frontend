import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { authService } from "./userService";
// import { ToastContainer, toast } from 'react-toastify';
// import { productService} from "./productService";
import { contactService } from "./contactService";



export const createQuery = createAsyncThunk("contact/post", async (contactData,thunkAPI) => {
    try {
        return await contactService.postQuery(contactData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})



const constactState = {
    contact: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const contactSlice = createSlice({
    name: "product",
    initialState: constactState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(createQuery.pending, (state) => {
            state.isLoading = true;

        }).addCase(createQuery.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.contact = action.payload;
            if(state.isSuccess === true){
                toast.success('Contact Form submitted successfully')
            }
        }).addCase(createQuery.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error('Contact Form Not submitted successfully')
            }
        })
    }
})



export default contactSlice.reducer