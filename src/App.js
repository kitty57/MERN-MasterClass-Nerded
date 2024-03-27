import React, { useState, useEffect } from 'react';
import { getAllMemberships, updateMembership } from './membershipApi';
import MembershipCard from './MembershipCard';

function MembershipManagement() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = async () => {
    const membershipsData = await getAllMemberships();
    setMemberships(membershipsData);
  };

  const handleMembershipUpdate = async (updatedMembership) => {
    await updateMembership(updatedMembership);
    fetchMemberships();
  };

  return (
    <div>
      <h2>Membership Management</h2>
      {memberships.map((membership) => (
        <MembershipCard
          key={membership.id}
          membership={membership}
          onUpdate={handleMembershipUpdate}
        />
      ))}
    </div>
  );
}

export default MembershipManagement;
