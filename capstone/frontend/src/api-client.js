const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Register a new user
export const register = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody; // Return the response if successful
};

export const logIn = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error('Failed to log in via API', body.message);
  }
  return body;
};

// Validate a token
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Token invalid yo!');
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: 'include',
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Error during sign out');
  }
};

export const fetchAllChampions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/champions`);

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage); // Include status code and text in the error
    }

    // Parse the response data as JSON
    const data = await response.json();

    return data; // Return the parsed data
  } catch (error) {
    console.error('Error fetching champions:', error); // Log the error for debugging
    throw new Error(error.message || 'Failed to fetch champions'); // Throw a custom error message
  }
};

// export const addMyHotel = async (hotelFormData) => {
//   const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
//     method: 'POST',
//     credentials: 'include',
//     body: hotelFormData,
//   });
//   if (!response.ok) {
//     throw new Error('API Error: Failed to add hotel.');
//   }

//   return response.json();
// };
