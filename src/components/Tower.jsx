import React from 'react'
import Cahmber from './Cahmber'

const Tower = ({ handleReply, massage1 }) => {
    return (
        <div>Tower
            <Cahmber handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Tower