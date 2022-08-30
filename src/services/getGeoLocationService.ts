import { api } from '../http/api';

export interface GeoLocationData {
  address: string;
  ip: string;
}

export async function getGeoLocationService(): Promise<GeoLocationData> {
  const data = await api
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
