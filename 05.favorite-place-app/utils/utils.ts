import { LocationI } from '../models/place';
import { GOOGLE_MAP_API_KEY } from '@env';

export const getMapPreview = ({ lat, lng }: LocationI) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
  return imagePreviewURL;
};

export const getAddress = async ({ lat, lng }: LocationI): Promise<string> => {
  const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;

  const response = await fetch(geoCodeURL);
  if (response.ok == null) {
    throw new Error('FAILED TO FETCH ADRESS');
  }

  const data = await response.json();
  const address = data.results[0]?.formatted_address;
  return address;
};
