import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function POST() {
    const credentials = new URLSearchParams();
    credentials.append('username', process.env.NEXT_PUBLIC_API_USERNAME || '');
    credentials.append('password', process.env.NEXT_PUBLIC_API_PASSWORD || '');
    credentials.append('pin', process.env.NEXT_PUBLIC_API_PIN || '');
    credentials.append('submit', process.env.NEXT_PUBLIC_API_SUBMIT || '');

    try {
        const response = await fetch('https://test4.remit.by/finasddeetest/ws/country/getDestinationCountries', {
            method: 'POST',
            body: credentials,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xmlText = await response.text();
        const parser = new XMLParser();
        const jsonObj = parser.parse(xmlText);
        
        // The structure might need adjustment based on the actual XML response
        const responseData = jsonObj.response || jsonObj;
        const status = responseData.status;

        if (status === 'FAIL') {
            const message = responseData.message || 'Failed to fetch countries';
            return NextResponse.json({ error: message }, { status: 400 });
        }

        // Handle both array and single object cases for countries
        const countriesData = Array.isArray(responseData.countries?.country) 
            ? responseData.countries.country 
            : (responseData.country ? [responseData.country] : []);
            
        const countries = countriesData.map((country: any) => ({
            id: country.id || '',
            name: country.name || '',
            iso_code: country.iso_code || '',
            currency: country.currency || '',
        }));

        return NextResponse.json({ countries });
    } catch (error) {
        console.error('Error fetching countries:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to fetch countries' },
            { status: 500 }
        );
    }
}