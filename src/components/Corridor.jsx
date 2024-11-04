import React from 'react'
import Gallery from './Gallery'

const Corridor = ({ handleReply, massage1 }) => {
    return (
        <div>Corridor
            <Gallery handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Corridor