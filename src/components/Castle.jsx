import React from 'react'
import Tower from './Tower'

const Castle = ({ handleReply, massage1 }) => {
    return (
        <div>Castle
            <Tower handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Castle