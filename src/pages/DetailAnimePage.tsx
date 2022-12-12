import { useParams } from 'react-router-dom'

const DetailAnimePage = (): JSX.Element => {
  const { id } = useParams()
  console.log(id)

  return <div>DetailAnimePage</div>
}
export default DetailAnimePage
