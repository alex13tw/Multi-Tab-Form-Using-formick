import React, { useContext } from 'react'
import { userContext } from '../Context/Contexts'


const Submited = () => {

  const {submittedData,setSubmittedData,submittedData2, setSubmittedData2,submittedData3, setSubmittedData3 }  =useContext(userContext)

  return (
    <div>
      <h1>submitted</h1>
      { submittedData3?(
        <div className="row justify-content-center">
                        <div className="col-5 p-3">
                            <p>First Name: {submittedData.fname}</p>
                            <p>Last Name: {submittedData.lname}</p>
                            <p>Email: {submittedData2.email}</p>
                            <p>Address : {submittedData2.address}</p>
                            <p> Number: {submittedData2.number}</p>
                            <p> Username: {submittedData3.username}</p>
                            <p> Password: {submittedData3.password}</p>
                        </div>
                    </div>
      ):""
                    
                }
    </div>
  )
}

export default Submited
