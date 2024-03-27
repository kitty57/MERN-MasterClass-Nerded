const memberships = [
    { id: 1, type: 'Basic', duration: '1 month', price: '$20' },
    { id: 2, type: 'Premium', duration: '3 months', price: '$50' },
    // Add more sample memberships as needed
  ];
  
  export const getAllMemberships = async () => {
    // Simulate fetching memberships from an API
    return memberships;
  };
  
  export const updateMembership = async (updatedMembership) => {
    // Simulate updating a membership in the API
    const index = memberships.findIndex(membership => membership.id === updatedMembership.id);
    memberships[index] = updatedMembership;
  };