import { User, UserItem } from 'pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/user-item' element={<UserItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
