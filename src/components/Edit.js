import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {editTodo, getTodo} from '../services/todos-api'

function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id)
        .then(res => setData(res.data))
    }, [])

    const editTheTodo = event => {
        event.preventDefault()
        let updated = {description: event.target.description.value, complete: event.target.complete.checked}
        editTodo(id, updated)
        navigate(`/${id}`)
    }
  return (
    <div>
        <h2>Edit To Do</h2>
        <form onSubmit={editTheTodo}>
            <input type='text' name="description" defaultValue={data.description}/><br />
            Complete: <input type='checkbox' name="complete" defaultChecked={data.complete}/>
            <input type='submit' />
        </form>
    </div>
  )
}

export default Edit