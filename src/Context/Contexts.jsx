import React, { createContext, useState } from 'react'

 export const userContext = createContext(null)

const Contexts = (props) => {

    const [ submittedData, setSubmittedData ] = useState(null);
    const [submittedData2, setSubmittedData2] = useState(null);
    const [submittedData3, setSubmittedData3] = useState(null);
  
  return ( 
    <div>
      <userContext.Provider value={{ submittedData , setSubmittedData,submittedData2, setSubmittedData2,submittedData3, setSubmittedData3 }}>    
      {props.children}
      </userContext.Provider>
    </div>
  )
}

export default Contexts


