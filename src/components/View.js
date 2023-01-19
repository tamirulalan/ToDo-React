import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {getTodo, deleteTodo} from '../services/todos-api'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineEdit} from 'react-icons/ai'

function View() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [todoList, setTodoList] = useState({})
    useEffect(() => {
        getTodo(id)
        .then(res => setTodoList(res.data))
    }, [])

        const deleteTheTodo = () => {
            deleteTodo(id)
            navigate('/')
        }

  return (
      <div>
        <h2>To Do:</h2>
        <h2>{todoList.description} </h2><br /><br />
        <div className='edit'>
            Complete: <input type="checkbox" checked={todoList.complete} /><br />
            <button className='editbtn' onClick={() => {navigate(`/${id}/Edit`)}}><AiOutlineEdit/></button>
            <button className='deletebtn' onClick={deleteTheTodo}><RiDeleteBin6Line/></button>
        </div>
        
    </div>
  )
}

export default View