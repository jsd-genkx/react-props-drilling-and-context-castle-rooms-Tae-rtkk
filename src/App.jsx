import { useState } from 'react'
import './App.css'
import Tower from './components/Tower'

function App() {
  const [replyMassage, setReplyMassage] = useState('Waiting for a reply');

  const handleReply = (message) => {
    setReplyMassage(message);
  };

  const massage1 = 'Do you love React?'


  return (
    <div>
      <h1>Massage for JSD8:{massage1}</h1>
      <p>Reply from the Secret Room :{replyMassage}</p>
      <Tower handleReply={handleReply} massage1={massage1} />
    </div>
  )
}

export default App
