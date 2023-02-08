import React from 'react'

const Child = (props) => {

    const data = 'I am child data.'
    props.onChildData(data)

  return (
    <div>
        <h3>This is Child Component:</h3>
        <h3>{props.data}</h3>
    </div>
  )
}

export default Child