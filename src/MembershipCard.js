import React, { useState } from 'react';

function MembershipCard({ membership, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [updatedDuration, setUpdatedDuration] = useState(membership.duration);
  const [updatedPrice, setUpdatedPrice] = useState(membership.price);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedDuration(membership.duration);
    setUpdatedPrice(membership.price);
  };

  const handleSave = () => {
    onUpdate({
      ...membership,
      duration: updatedDuration,
      price: updatedPrice
    });
    setEditing(false);
  };

  const handleDurationChange = (e) => {
    setUpdatedDuration(e.target.value);
  };

  const handlePriceChange = (e) => {
    setUpdatedPrice(e.target.value);
  };

  return (
    <div>
      <h3>{membership.type}</h3>
      {editing ? (
        <div>
          <input type="text" value={updatedDuration} onChange={handleDurationChange} />
          <input type="text" value={updatedPrice} onChange={handlePriceChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Duration: {membership.duration}</p>
          <p>Price: {membership.price}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default MembershipCard;