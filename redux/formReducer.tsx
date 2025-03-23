import { createSlice } from '@reduxjs/toolkit';

interface openForm {
    open: boolean;
}

const initialState: openForm = {
    open: false,
};

const formSlice = createSlice({
    name: 'openForm',
    initialState,
    reducers: {
        openFeedBack: (state, action) => {
            state.open = action.payload;
        },
    },
});

export const { openFeedBack } = formSlice.actions;
export default formSlice.reducer;