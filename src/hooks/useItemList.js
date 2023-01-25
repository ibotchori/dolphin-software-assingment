import { useSelector } from 'react-redux'
const useItemList = () => {
  const { name } = useSelector((state) => state.user)
  const items = useSelector((state) => state.items)

  return {
    name,
    items,
  }
}

export default useItemList
