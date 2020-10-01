
export interface latlng {
  lat: number,
  lng: number,
}

export interface resObject {
  status: number,
  coords: string | latlng,
  fullAddress: string,
}