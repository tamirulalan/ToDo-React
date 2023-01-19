import axios from "axios"
const URL = 'http://localhost:3001/todos/'

export const getTodos = () => {
    const response = axios.get(URL)
    return response
}

export const getTodo = (id) => {
    const response = axios.get(`${URL}/${id}`)
    return response
}

export const deleteTodo = (id) => {
    const response = axios.delete(`${URL}/${id}`)
    return response
}

export const createTodo = (addition) => {
    const response = axios.post(URL, addition)
    return response
}

export const editTodo = (id, updated) => {
    const response = axios.put(`${URL}/${id}`, updated)
    return response
}