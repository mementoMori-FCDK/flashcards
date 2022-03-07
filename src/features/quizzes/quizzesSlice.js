import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdAction } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz (state, action) {
            state.quizzes[action.payload.id] = {
                id: action.paylaod.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
        }
    }
});

export const addQuizAndQuizIdAction = (id, quizName, topicId, cardIds) => {
    return (dispatch) => {
        dispatch(addQuizIdAction(id, topicId));
        dispatch(addQuizAction(id, quizName, topicId, cardIds));
    }
}

export const addQuizAction = (id, name, topicId, cardIds) => {
    return {
        type: 'quizzes/addQuizAction',
        payload: {
            id: id,
            name: name,
            topicId: topicId,
            cardIds: cardIds
        }
    }
}



export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;