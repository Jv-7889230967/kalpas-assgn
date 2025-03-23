import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    listType: String;
}

const initialState: CounterState = {
    listType: 'grid',
};

const listSlice = createSlice({
    name: 'listType',
    initialState,
    reducers: {
        updateListType: (state, action) => {
            state.listType = action.payload;
        },
    },
});

export const { updateListType } = listSlice.actions;
export default listSlice.reducer;