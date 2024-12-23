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

// Champion related functions

export const fetchAllChampions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/champions`);

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage); // Include status code and text in the error
    }
    const championData = await response.json();
    return championData;
  } catch (error) {
    console.error('Error fetching champions:', error);
    throw new Error(error.message || 'Failed to fetch champions');
  }
};

export const fetchChampionById = async (championId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/champions/${championId}`);

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }
    const championData = await response.json();
    return championData; // Return the parsed data
  } catch (error) {
    console.error('Error fetching champion.', error); // Log the error for debugging
    throw new Error(error.message || 'Failed to fetch champion.'); // Throw a custom error message
  }
};