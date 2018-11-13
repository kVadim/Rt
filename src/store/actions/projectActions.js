export const deleteProject = (id) => {
    return {
        type: 'deleteItem',
        id
    }
}

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFristName: 'Vadim',
            authorLastName: 'K',
            authorId: 1112,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT',   project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })

    }

}
