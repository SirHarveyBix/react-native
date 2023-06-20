import { LocationI } from '../models/place';
import { GOOGLE_MAP_API_KEY } from '@env';

export const getMapPreview = ({ lat, lng }: LocationI) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
  return imagePreviewURL;
};
