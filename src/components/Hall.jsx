import React from 'react'
import Corridor from './Corridor'

const Hall = ({ handleReply, massage1 }) => {
    return (
        <div>Hall
            <Corridor handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Hall