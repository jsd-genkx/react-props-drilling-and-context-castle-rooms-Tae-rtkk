import React from 'react'
import SecretRoom from './SecretRoom'

const Nook = ({ handleReply, massage1 }) => {
    return (
        <div>Nook
            <SecretRoom handleReply={handleReply} massage1={massage1} />
        </div>
    )
}

export default Nook