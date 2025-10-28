import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function POST(request: Request) {
    const formData = await request.formData();
    const credentials = new URLSearchParams();
    
    // Add credentials
    credentials.append('username', process.env.NEXT_PUBLIC_API_USERNAME || '');
    credentials.append('password', process.env.NEXT_PUBLIC_API_PASSWORD || '');
    credentials.append('pin', process.env.NEXT_PUBLIC_API_PIN || '');
    credentials.append('submit', process.env.NEXT_PUBLIC_API_SUBMIT || '');
    
    // Add transaction data
    credentials.append('destination_country', formData.get('destination_country')?.toString() || '');
    credentials.append('trans_type', formData.get('trans_type')?.toString() || 'Account');
    credentials.append('payment_method', formData.get('payment_method')?.toString() || '3');
    credentials.append('service_level', formData.get('service_level')?.toString() || '3');
    credentials.append('amount_type', formData.get('amount_type')?.toString() || 'SOURCE');
    credentials.append('amount_to_send', formData.get('amount_to_send')?.toString() || '0');
    credentials.append('destination_currency', formData.get('destination_currency')?.toString() || 'XAF');
    credentials.append('source_currency', formData.get('source_currency')?.toString() || 'GBP');

    try {
        const response = await fetch('https://test4.remit.by/finasddeetest/ws/transaction/getCharges', {
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
            const message = responseData.message || 'Failed to get charges';
            return NextResponse.json({ error: message }, { status: 400 });
        }

        const result = {
            destination_amount: responseData.destination_amount || '0',
            total_charges: responseData.total_charges || '0',
            source_currency: responseData.source_currency || '',
            destination_currency: responseData.destination_currency || '',
            rate: responseData.rate || '0',
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error calculating charges:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to calculate charges' },
            { status: 500 }
        );
    }
}