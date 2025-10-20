import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser();

interface Credentials {
    username: string;
    password: string;
    pin: string;
    submit: string;
}

interface CountryData {
    id: string;
    name: string;
    iso_code: string;
    currency: string;
    default_trans_currency: string;
    allowed_currencies: {
        currency: string[];
    };
}

interface ChargesResponse {
    source_currency: string;
    source_amount: number;
    rate: number;
    destination_currency: string;
    destination_amount: number;
    commission: number;
    agent_fee: number;
    hq_fee: number;
    total_charges: number;
    tax: number;
}

const getApiCredentials = (): Credentials => {
    if (!process.env.NEXT_PUBLIC_API_USERNAME || 
        !process.env.NEXT_PUBLIC_API_PASSWORD || 
        !process.env.NEXT_PUBLIC_API_PIN || 
        !process.env.NEXT_PUBLIC_API_SUBMIT) {
        throw new Error('Missing API credentials in environment variables');
    }

    return {
        username: process.env.NEXT_PUBLIC_API_USERNAME,
        password: process.env.NEXT_PUBLIC_API_PASSWORD,
        pin: process.env.NEXT_PUBLIC_API_PIN,
        submit: process.env.NEXT_PUBLIC_API_SUBMIT
    };
};

export const getDestinationCountries = async (): Promise<CountryData[]> => {
    try {
        const credentials = getApiCredentials();
        const formData = new FormData();
        Object.entries(credentials).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const response = await fetch('https://test4.remit.by/finasddeetest/ws/country/getDestinationCountries', {
            method: 'POST',
            body: formData,
        });

        const xmlText = await response.text();
        const result = parser.parse(xmlText);

        if (result.response.status === 'FAIL') {
            alert(result.response.result.message || 'An error occurred');
            throw new Error(result.response.result.message || 'Failed to fetch destination countries');
            
        }

        if (result.response.status === 'SUCCESS' && result.response.result.countries.country) {
            return Array.isArray(result.response.result.countries.country) 
                ? result.response.result.countries.country 
                : [result.response.result.countries.country];
        }

        return [];
    } catch (error) {
        console.error('Error fetching destination countries:', error);
        throw error;
    }
};

export const getTransactionCharges = async ({
    destinationCountry,
    amountToSend,
    destinationCurrency,
    sourceCurrency,
}: {
    destinationCountry: string;
    amountToSend: number;
    destinationCurrency: string;
    sourceCurrency: string;
}): Promise<ChargesResponse> => {
    try {
        const credentials = getApiCredentials();
        const formData = new FormData();
        Object.entries(credentials).forEach(([key, value]) => {
            formData.append(key, value);
        });

        // Add transaction specific data
        formData.append('destination_country', destinationCountry);
        formData.append('trans_type', 'Account');
        formData.append('payment_method', '3');
        formData.append('service_level', '3');
        formData.append('amount_type', 'SOURCE');
        formData.append('amount_to_send', amountToSend.toString());
        formData.append('destination_currency', destinationCurrency);
        formData.append('source_currency', sourceCurrency);

        const response = await fetch('https://test4.remit.by/finasddeetest/ws/transaction/getCharges', {
            method: 'POST',
            body: formData,
        });

        const xmlText = await response.text();
        const result = parser.parse(xmlText);

        if (result.response.status === 'FAIL') {
            alert(result.response.result.message || 'An error occurred');
            throw new Error(result.response.result.message || 'Failed to get transaction charges');
        }

        if (result.response.status === 'SUCCESS') {
            return result.response.result;
        }

        throw new Error('Invalid response format');
    } catch (error) {
        console.error('Error getting transaction charges:', error);
        throw error;
    }
};