export interface LocationI {
  lat: number; // 0.141241
  lng: number; // 127.121
}

export interface CompleteLocationI extends LocationI {
  address: string;
}
export interface CompletePlace extends Place {
  id: string;
}

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: LocationI;
  id?: string;

  constructor(
    title: string,
    imageUri: string,
    location: CompleteLocationI,
    id?: string
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    if (id) this.id = id;
  }
}
