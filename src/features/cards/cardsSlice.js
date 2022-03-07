import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard (state, action) {
            state.cards[action.payload.id] = {
                id: action.payload.id,
                front: action.payload.id,
                back: action.payload.back
            };
        }
    }
});

export const addCardAction = (id, front, back) => {
    return {
        type: 'cards/addCard',
        payload: {id: id, front: front, back: back}
    }
}

export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;