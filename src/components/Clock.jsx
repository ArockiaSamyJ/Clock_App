import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return ()=>clearInterval(timer);
  }, [time]);

  return <div className="clock">{time.toLocaleTimeString()}</div>;
};

export default Clock;
