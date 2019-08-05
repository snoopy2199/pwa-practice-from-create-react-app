import React, { useState } from 'react';

const HelloWorld = () => {
  const [isCopyBoxShowing, setIsCopyBoxShowing] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        text: 'Hello World!',
      });
    } else {
      setIsCopyBoxShowing(true);
    }
  }

  return (
    <div className="hello">
      <button onClick={handleShare}>share</button>
      {isCopyBoxShowing && <input type="text" defaultValue="Hello World!" />}
    </div>
  );
}

export default HelloWorld;
