import React, { useState, useEffect } from 'react';
import HelloWorld from './components/HelloWorld';
import './App.css';

const App = () => {
  const [promptEvent, setPromptEvent] = useState(null);

  const handlePromotion = () => {
    promptEvent.prompt();
    promptEvent.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setPromptEvent(null);
      });
  }

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setPromptEvent(e);
      console.log('beforeinstallprompt');
    });
  }, []);

  return (
    <div className="App">
      {promptEvent && <button onClick={handlePromotion}>install</button>}
      <HelloWorld />
    </div>
  );
}

export default App;
