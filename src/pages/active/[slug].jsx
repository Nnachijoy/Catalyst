// import React from 'react'
import { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'
import Spinner from '../../Component/Alert/Spinner/Spinner'
import { activateUserAccountAction } from '../../utils/userActions/authActions'
import { toast } from 'react-toastify'
import MyForm from '../../Component/Newpassword'


const ActivateUserAccountPage = () => {

    const { slug } = useParams()

    const [loading, setLoading] = useState(false) 
    const [createPassword, setCreatePassword] = useState(false) 
    const [token, setToken] = useState("") 

    


    const activateUserAccount = async()=>{
        
        if (!slug) return;
        setLoading(true)
        const response = await activateUserAccountAction({ activeToken: slug })

        if(response.message == "Successful"){
            toast.success("Your account has been activated")
            setCreatePassword(true)
            setToken(response.accessToken)
            setLoading(false)
        }

        console.log(response);

        setLoading(false)
    }


    useEffect(()=>{
        
        activateUserAccount()

    }, [slug])

  return (
    <div> 
        {
           createPassword && 
            <MyForm 
                accessToken={token}
                // accessToken={defaultToken}
            />
        }
        {loading && <Spinner />} 
    </div>
  )
}

export default ActivateUserAccountPage