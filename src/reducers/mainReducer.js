const initialStore = {
    items: [
        {id: 1, value: 'first',  text: "первый"},
        {id: 2, value: 'second', text: "второй"},
        {id: 3, value: 'third',  text: "третий"}
    ]
}

const mainReducer = (state = initialStore, action) => {
    return state;
} 

export default mainReducer;