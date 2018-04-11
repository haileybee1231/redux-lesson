export const addToDo = (id, title) => (
    {
        type: 'ADD-TODO',
        payload: {
            id: id,
            title: title
        }
    }
)