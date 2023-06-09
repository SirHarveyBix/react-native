import axios from 'axios';

export const authenticate = async (
  mode: 'signUp' | 'signInWithPassword',
  email: string,
  password: string
) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyAjnurj9N8bPm63tSACynnwfKA6yjSe2GQ`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const createUser = async (email: string, password: string) => {
  await authenticate('signUp', email, password);
};

export const login = async (email: string, password: string) => {
  await authenticate('signInWithPassword', email, password);
};
// https://authentication-74282-default-rtdb.europe-west1.firebasedatabase.app/
