import React from 'react'
import Room from './Room'

const Cahmber = ({ handleReply, massage1 }) => {
    return (
        <div>Cahmber
            <Room handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Cahmber