import React from 'react';

const Controls = ({ rooms, setRooms, initializeRooms }) => {
  const randomize = () => {
    const newRooms = rooms.map(floor => ({
      ...floor,
      rooms: floor.rooms.map(room => ({
        ...room,
        status: Math.random() > 0.7 ? 'booked' : 'available',
      })),
    }));
    setRooms(newRooms);
  };

  const reset = () => setRooms(initializeRooms());

  return (
    <div className="controls">
      <button onClick={randomize}>Randomize Occupancy</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;
