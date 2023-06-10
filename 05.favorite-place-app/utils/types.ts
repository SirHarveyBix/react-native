export type Place = {
  title: string;
  imageUri: string;
  address: string;
  location: Location; // { lat: 0.141241, lng: 127.121 }
  id: string;
};

export type Location = {
  lat: number;
  lng: number;
};
