export const addToDo = (id, title) => (
    {
        type: 'ADD-TODO',
        payload: {
            id: id,
            title: title
        }
    }
)

export const removeToDo = (todo) => (
    {
        type: 'REMOVE-TODO',
        payload: todo
    }
)