import React, { useState } from 'react';
import './HelloWorld.css';

const fateList = [
  '大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶',
];

const HelloWorld = () => {
  const [isCopyBoxShowing, setIsCopyBoxShowing] = useState(false);
  const [fate, setFate] = useState('');

  const chance = () => {
    setIsCopyBoxShowing(false);
    setFate(fateList[Math.floor(Math.random() * fateList.length)]);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        text: `我在「PWA (React)」(https://snoopy2199.github.io/pwa-practice-from-create-react-app/)抽到了「${fate}」`,
      });
    } else {
      setIsCopyBoxShowing(true);
    }
  };

  return (
    <div className="hello">
      <div className="fate">{fate}</div>
      <div>
        <button onClick={chance}>抽籤</button>
        {fate && <button onClick={handleShare}>分享</button>}
      </div>
      {isCopyBoxShowing && (
        <textarea
          className="share-text"
          defaultValue={`我在「PWA (React)」(https://snoopy2199.github.io/pwa-practice-from-create-react-app/)抽到了「${fate}」`}
        />
      )}
    </div>
  );
}

export default HelloWorld;
