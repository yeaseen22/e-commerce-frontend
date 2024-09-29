import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { authService } from "./userService";
// import { ToastContainer, toast } from 'react-toastify';
// import { productService} from "./productService";
import { blogService } from "./blogService";



export const getAllBlogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
    try {
        return await blogService.getBlogs()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getBlog = createAsyncThunk("blog/get", async (id,thunkAPI) => {
    try {
        return await blogService.getBlog(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const blogState = {
    blog: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const blogSlice = createSlice({
    name: "blog",
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllBlogs.pending, (state) => {
            state.isLoading = true;

        }).addCase(getAllBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
        }).addCase(getAllBlogs.pending, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        }).addCase(getBlog.pending, (state) => {
            state.isLoading = true;

        }).addCase(getBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleBlog = action.payload;
        }).addCase(getBlog.pending, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        })
    }
})



export default blogSlice.reducer