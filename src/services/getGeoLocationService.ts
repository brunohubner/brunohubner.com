import axios from 'axios';

export interface GeoLocationData {
  address: string;
  ip: string;
}

export async function getGeoLocationService(): Promise<GeoLocationData> {
  const data = await axios
    .get('https://get.geojs.io/v1/ip/geo.json')
    .then(({ data }) => data)
    .catch(() => {});

  if (!data) {
    return { address: 'Desconecido', ip: 'Desconecido' };
  }

  return {
    address: `${data.city} - ${data.region} - ${data.country}`,
    ip: data.ip
  };
}
