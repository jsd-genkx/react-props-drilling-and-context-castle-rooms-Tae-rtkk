import React from 'react'
import Nook from './Nook'

const Gallery = ({ handleReply, massage1 }) => {
    return (
        <div>Gallery
            <Nook handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Gallery