export const deleteProject = (id) => {
    return {
        type: 'deleteItem',
        id
    }
}

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        fireStore.collections('projects').add({
            ...project,
            authorFristName: 'Vadim',
            authorLastName: 'K',
            authorId: 1112,
            createAt: new Date()
        })
        dispatch({
            type: 'ADD_PROJECT',
            project
        })
    }

}
