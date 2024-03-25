import { useParams } from "react-router-dom"
const PetDetailPage = () =>
{
  const {id} = useParams()
  return (
      <div>DetailPage of {id }</div>
  )
}

export default PetDetailPage