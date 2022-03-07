import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic(state, action) {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            };
        },
        addQuizId(state, action) {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

export const addQuizIdAction = (quizId, topicId) => {
    return {
        type: 'topics/addQuizId',
        payload: {quizId: quizId, topicId: topicId}
    }
}

export const addTopicsAction = (id, name, icon) => {
    return {
        type: 'topics/addTopic',
        payload: {id: id, name: name, icon: icon}
    }
}

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;