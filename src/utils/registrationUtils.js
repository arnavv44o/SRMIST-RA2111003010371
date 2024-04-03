// utils/registrationUtils.js

export async function registerCompany() {
    try {
      const response = await fetch('http://20.244.56.144/test/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName: 'goMart',
          ownerName: 'Rahul',
          rollNo: '1',
          ownerEmail: 'rahul@abc.edu',
          accessCode: 'FKDLjg'
        })
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Registration Error:', error);
      throw error;
    }
  }
  