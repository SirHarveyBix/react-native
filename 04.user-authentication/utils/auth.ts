import axios from 'axios';

export const createUser = async (email: string, password: string) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjnurj9N8bPm63tSACynnwfKA6yjSe2GQ',
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
};
// https://authentication-74282-default-rtdb.europe-west1.firebasedatabase.app/
