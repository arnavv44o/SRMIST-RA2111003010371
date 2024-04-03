import React, { useEffect } from 'react';
import { registerCompany } from '../utils/registrationUtils';
import { getAuthToken } from '../utils/authUtils';

function MyComponent() {
  useEffect(() => {
    async function fetchData() {
      try {
        const registrationData = await registerCompany();
        const { clientID, clientSecret } = registrationData;
        const authToken = await getAuthToken(clientID, clientSecret);
        console.log('Authorization Token:', authToken);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to MyComponent</h1>
      <p>This is a sample component to demonstrate fetching data and handling authentication.</p>
    </div>
  );
}

export default MyComponent;
