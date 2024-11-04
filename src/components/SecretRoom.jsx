import React, { useState } from 'react'

const SecretRoom = ({ massage1, handleReply }) => {
    const [reply, setReply] = useState("")
    return (
        <div>
            SecretRoom
            <p>Message for JSD8 : {massage1}</p>
            <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
            />
            <button onClick={() => handleReply(reply)}>Send Reply</button>
        </div>
    )
}

export default SecretRoom