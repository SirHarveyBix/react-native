export interface LocationI {
  lat: number; // 0.141241
  lng: number; // 127.121
}

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: LocationI;
  id: string;

  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: LocationI
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
