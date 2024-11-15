import { useState, useEffect, useCallback } from "react";
import { getGeolocation, getGreeting } from "../services/api";
import { GeoLocationData } from "../types/ILocation";

const countryToLangMap: { [key: string]: string } = {
    "BR": "pt", 
    "US": "en", 
    "FR": "fr", 
    "DE": "de", 
    "ES": "es", 
};

const useLocation = () => {

    const [greeting, setGreeting] = useState('');
    const [locationInfo, setLocationInfo] = useState<GeoLocationData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const decodeHtmlEntities = (text: string): string => {
        if (!text) return '';
      
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(text, 'text/html').body.textContent || '';
      
        return decodedString;
      };

    // Função para buscar os dados de geolocalização e saudação
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            // Obtém a geolocalização
            const location = await getGeolocation();
            setLocationInfo(location);

            // Obtém o código de idioma baseado no país
            const lang = countryToLangMap[location.countryCode] || "en"; // Fallback para 'en' caso o país não tenha mapeamento

            // Busca a saudação com base no código de idioma
            const greetingMsg = await getGreeting(lang);
            const greetingTrated = decodeHtmlEntities(greetingMsg)
            setGreeting(greetingTrated);
        } catch (error) {
            console.error("Erro ao buscar dados de geolocalização ou saudação:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]); 

    return {
        greeting,
        locationInfo,
        loading,
        getLocation: fetchData
    };
};

export default useLocation;
