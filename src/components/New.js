import {React} from 'react'
import {useNavigate} from "react-router-dom"
import {createTodo} from '../services/todos-api'

function New() {
    const navigate = useNavigate()

    const createTheTodo = event => {
        event.preventDefault()
        let addition = {description: event.target.description.value, complete: false}
        createTodo(addition)
        navigate('/')
    }
  return (
    <div>
        <h2>Add a To Do</h2>
        <form onSubmit={createTheTodo}>
            <input type={'text'} name="description" placeholder='Add new ToDo' />
            <input type='submit' />
        </form>
    </div>
  )
}

export default New