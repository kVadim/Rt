const initialState = {
    projects: [
            {id: 1, title: 'first',  content: "первый"},
            {id: 2, title: 'second', content: "второй"},
            {id: 3, title: 'third',  content: "третий"}
    ]
};

const projectReducer = (state = initialState, action) => {
    return state;
}
export default projectReducer