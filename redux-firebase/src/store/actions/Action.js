export const addTodo = () => {
    return {
        type: "ADD_TODO",
        
    }
}

export const deleteTodo = (data) => {
    return {
        type: "DELETE_TODO",
        id: data
    }
}