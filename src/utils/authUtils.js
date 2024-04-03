// utils/authUtils.js

export async function getAuthToken(clientID, clientSecret) {
    try {
      const response = await fetch('http://20.244.56.144/test/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName: 'goMart',
          clientID,
          clientSecret,
          ownerName: 'Rahul',
          ownerEmail: 'rahul@abc.edu',
          rollNo: '1'
        })
      });
  
      if (!response.ok) {
        throw new Error('Authorization failed');
      }
  
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Authorization Error:', error);
      throw error;
    }
  }
  