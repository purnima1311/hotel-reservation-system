import React from 'react';

const RoomGrid = ({ rooms }) => {
  return (
    <div className="room-grid">
      {rooms.map(floor => (
        <div key={floor.floor} className="floor">
          <h3>Floor {floor.floor}</h3>
          <div className="rooms">
            {floor.rooms.map(({ room, status }) => (
              <div key={room} className={`room ${status}`}>
                {room}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;
