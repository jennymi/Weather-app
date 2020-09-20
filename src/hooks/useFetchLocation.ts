import { useEffect, useState } from "react";
import axios from 'axios';
import { config } from "../configs"
import { IUserGeoLocation } from "../models";

/**
 * get user geolocation including coordinates
 */
const useFetchLocation = (): { userGeoLocation: IUserGeoLocation | undefined } => {
  const [userGeoLocation, setUserGeolocation] = useState<IUserGeoLocation>();

  useEffect(() => {
    axios(config.GEOLOCATION_API_URL)
      .then(res => setUserGeolocation(res.data))
      .catch(error => {
        throw error;
      });
  }, []);

  return {userGeoLocation}
}

export default useFetchLocation;
