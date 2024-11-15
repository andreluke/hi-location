import axios from 'axios';
import { GeoLocationData, GreetingData } from '../types/ILocation';

const IP_API_URL = 'http://ip-api.com/json';
const HELLO_API_URL = 'https://hellosalut.stefanbohacek.dev';

export const getGeolocation = async (): Promise<GeoLocationData> => {
    const response = await axios.get<GeoLocationData>(IP_API_URL);
    return response.data;
};

// Função para obter a saudação com base no código do idioma
export const getGreeting = async (langCode: string): Promise<string> => {
    const response = await axios.get<GreetingData>(`${HELLO_API_URL}?lang=${langCode}`);
    return response.data.hello;
};
