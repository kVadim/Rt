const initialState = {
    projects: [
            {id: 1, title: 'first',  content: "первый"},
            {id: 2, title: 'second', content: "второй"},
            {id: 3, title: 'third',  content: "третий"}
    ]
};

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': console.log ('CREATE_PROJECT',);
        return state;
        case 'CREATE_PROJECT_ERROR': console.log ('CREATE_PROJECT_ERROR', action.err);
        return state;
        default: return state;
    }
}
export default projectReducer