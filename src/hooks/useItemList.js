import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const useItemList = () => {
  const { name } = useSelector((state) => state.user)
  const items = useSelector((state) => state.items)
  const navigate = useNavigate()

  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  }, [name, navigate])

  return {
    name,
    items,
  }
}

export default useItemList
