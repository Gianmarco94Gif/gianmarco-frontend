import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Home(){
  const [status,setStatus] = useState('checking');
  useEffect(()=>{
    const api = process.env.NEXT_PUBLIC_API_URL || 'https://tuo-backend.onrender.com';
    axios.get(api + '/health').then(r=>setStatus(JSON.stringify(r.data))).catch(e=>setStatus('error'));
  },[]);
  return (
    <div style={{padding:20,fontFamily:'Arial'}}>
      <h1>Frontend Ready</h1>
      <p>API: <code>{process.env.NEXT_PUBLIC_API_URL || 'https://tuo-backend.onrender.com'}</code></p>
      <p>Health: <strong>{status}</strong></p>
    </div>
  );
}
