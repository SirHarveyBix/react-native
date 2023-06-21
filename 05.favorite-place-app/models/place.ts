export interface LocationI {
  lat: number; // 0.141241
  lng: number; // 127.121
  address: string;
}

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: Partial<LocationI>;
  id: string;

  constructor(title: string, imageUri: string, location: LocationI) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
