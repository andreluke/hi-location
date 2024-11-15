export interface GeoLocationData {
    query: string;          
    status: string;        
    country: string;        
    countryCode: string;   
    region: string;         
    regionName: string;     
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
}

export interface GreetingData {
    hello: string;      
}