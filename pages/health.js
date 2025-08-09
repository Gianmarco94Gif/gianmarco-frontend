import { useEffect, useState } from 'react';

export default function Health() {
  const [status, setStatus] = useState('Controllo in corso...');

  useEffect(() => {
    fetch('https://gianmarco-backend1.onrender.com/health')
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setStatus('✅ Backend online');
        } else {
          setStatus('❌ Backend non raggiungibile');
        }
      })
      .catch(() => setStatus('❌ Errore di connessione'));
  }, []);

  return (
    <div>
      <h1>Stato Backend</h1>
      <p>{status}</p>
    </div>
  );
}