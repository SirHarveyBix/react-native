import { GOOGLE_MAP_API_KEY } from '@env';
import { LatLng } from '../types/types';
import * as SQLite from 'expo-sqlite';

export const getMapPreview = ({ lat, lng }: LatLng) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
  return imagePreviewURL;
};

export const getAddress = async ({ lat, lng }: LatLng): Promise<string> => {
  const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;

  const response = await fetch(geoCodeURL);
  if (response.ok == null) {
    throw new Error('FAILED TO FETCH ADRESS');
  }

  const data = await response.json();
  const address = data.results[0]?.formatted_address;
  return address;
};

/* ---DATABASE-- */

const database = SQLite.openDatabase('places.db');

export const initDatabase = () => {
  const promise = new Promise<void>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_transaction, error) => {
          reject(error);
          return true;
        }
      );
    });
  });

  return promise;
};
