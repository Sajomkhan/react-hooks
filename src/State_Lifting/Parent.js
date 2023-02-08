import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [childData, setChildData] = useState('')

    const data = "I am parent data."

    const handleChildData =(childContain)=> {
        return setChildData(childContain)
    }

  return (
    <div className='d-flex justify-content-start'>
        <div className='w-30 m-5 bg-primary px-5 py-3 text-white rounded-3 w-30'>
            <Child data={data} onChildData={handleChildData} />            
        </div>

         
        <div className='w-30 m-5 bg-primary px-5 py-3 text-white rounded-3 w-30'>
            <h3>This is Parrent Component:</h3>
            <h3>{childData}</h3>            
        </div>
    </div>
  )
}

export default Parent