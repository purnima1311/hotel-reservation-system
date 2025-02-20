import React, { useState } from 'react';
import RoomGrid from './components/RoomGrid';
import RoomBookingForm from './components/RoomBookingForm';
import Controls from './components/Controls';
import './styles/App.css';

const App = () => {
  const [rooms, setRooms] = useState(initializeRooms());

  function initializeRooms() {
    const floors = Array.from({ length: 10 }, (_, i) => ({
      floor: i + 1,
      rooms: i === 9 ? Array.from({ length: 7 }, (_, j) => 1001 + j) : Array.from({ length: 10 }, (_, j) => (i + 1) * 100 + j + 1),
    }));
    return floors.map(floor => ({
      ...floor,
      rooms: floor.rooms.map(room => ({ room, status: 'available' })),
    }));
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Hotel Room Reservation System</h1>
        <RoomBookingForm rooms={rooms} setRooms={setRooms} />
        <RoomGrid rooms={rooms} />
        <Controls rooms={rooms} setRooms={setRooms} initializeRooms={initializeRooms} />
      </div>
    </div>
  );
};

export default App;
