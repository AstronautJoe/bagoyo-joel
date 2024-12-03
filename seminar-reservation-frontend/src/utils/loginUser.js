const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
// check if account exists with that email

const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      `http://localhost:${BACKEND_PORT}/api/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();

    return data.token;
  } catch (error) {
    throw new Error('Backend Server Error: Error logging in user');
  }
};

export { loginUser };
