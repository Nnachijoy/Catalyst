import MyForm from "../../Component/Newpassword"
import { useParams  } from 'react-router-dom'

const RestPasswordPage = () => {

  const { slug } = useParams()

  return (
    <div>
      <MyForm 
          accessToken={slug}
      />
    </div>
  )
}

export default RestPasswordPage