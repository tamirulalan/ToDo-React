import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todos from './components/Todos'
import View from './components/View'
import New from './components/New'
import Edit from './components/Edit'


function App() {

  

  return (
    <div className="App">
      <Router>
        <nav>
        <Link className='link' to="/">Home</Link><br />
        <Link className='link' to="/new">Add New To Do</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/new' element={<New />} />
          <Route path='/:id' element={<View />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App