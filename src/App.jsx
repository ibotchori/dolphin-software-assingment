import { User, ItemList, AddItem } from 'pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/item-list' element={<ItemList />} />
        <Route path='/item-list/add-item' element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
