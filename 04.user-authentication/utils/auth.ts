import axios from 'axios';

export const authenticate = async (
  mode: 'signUp' | 'signInWithPassword',
  email: string,
  password: string
): Promise<string> => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyAjnurj9N8bPm63tSACynnwfKA6yjSe2GQ`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
};

export const createUser = (email: string, password: string) => {
  return authenticate('signUp', email, password);
};

export const login = (email: string, password: string) => {
  return authenticate('signInWithPassword', email, password);
};
// https://authentication-74282-default-rtdb.europe-west1.firebasedatabase.app/
