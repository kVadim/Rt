export const deleteProject = (id) => {
    return {
        type: 'deleteItem',
        id
    }
}

export const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_PROJECT',
            project
        })
    }

}