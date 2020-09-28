import { useEffect, useState } from "react";
import axios from 'axios';
import { config } from "../configs";
import { IUserGeoLocation } from "../models";

/**
 * get user geolocation including coordinates
 */
const useFetchLocation = (): { location: IUserGeoLocation | undefined } => {
  const [location, setLocation] = useState<IUserGeoLocation>();

  useEffect(() => {
    axios(config.GEOLOCATION_API_URL)
      .then(res => setLocation(res.data))
      .catch(error => {
        throw error;
      });
  }, []);
  
  return { location };
}

export default useFetchLocation;
