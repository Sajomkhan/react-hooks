import React, {memo} from 'react'

const Message = ({numberOfMassage}) => {

    console.log(`message rerendering by counter velue change`);
    
      return (
        <div>
            <p>Send {numberOfMassage} messages</p>
        </div>
      )
    }
export default memo(Message)
