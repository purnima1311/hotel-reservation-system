import React, { useState } from 'react';

const RoomBookingForm = ({ rooms, setRooms }) => {
  const [numRooms, setNumRooms] = useState(1);

  const bookRooms = () => {
    const newRooms = [...rooms];
    let roomsToBook = numRooms;

    for (const floor of newRooms) {
      const available = floor.rooms.filter(room => room.status === 'available');
      if (available.length >= roomsToBook) {
        available.slice(0, roomsToBook).forEach(room => (room.status = 'booked'));
        break;
      } else {
        available.forEach(room => (room.status = 'booked'));
        roomsToBook -= available.length;
      }
    }
    setRooms(newRooms);
  };

  return (
    <div className="booking-form">
      <input
        type="number"
        min="1"
        max="5"
        value={numRooms}
        onChange={e => setNumRooms(Number(e.target.value))}
      />
      <button onClick={bookRooms}>Book Rooms</button>
    </div>
  );
};

export default RoomBookingForm;
