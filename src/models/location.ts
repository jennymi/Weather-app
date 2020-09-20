export interface IUserGeoLocation {
  city?: string;
  country_name?: string;
  latitude?: number;
  longitude?: number
}

export const initialUserGeoLocation: IUserGeoLocation = {
  latitude: undefined,
  longitude: undefined,
  city: undefined,
  country_name: undefined
}

