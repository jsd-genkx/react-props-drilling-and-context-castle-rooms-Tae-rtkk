import React from 'react'
import Hall from './Hall'

const Room = ({ handleReply, massage1 }) => {
    return (
        <div>Room
            <Hall handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Room