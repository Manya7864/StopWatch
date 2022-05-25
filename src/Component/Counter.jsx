import React, { useEffect } from "react";

const Counter = ({ startTime, endTime }) => {
  const [clock, setClock] = React.useState(startTime);

  useEffect(() => {
    let id = setInterval(() => {
      if (clock < endTime) {
        setClock((prev) => prev + 1);
      } else {
        clearInterval(id);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [clock, endTime]);

  return (
    <div>
      <h3>count: {clock}</h3>
      <p>
        start time: {startTime} last time: {endTime}
      </p>
    </div>
  );
};

export default Counter;