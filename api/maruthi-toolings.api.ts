import { Inquiry } from '../types';

/**
 * This file acts as the API client for the frontend View.
 * It makes a real HTTP request for the contact form.
 */

const handleResponse = async (response: Response) => {
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json();
};

export const submitInquiry = async (inquiryData: Partial<Inquiry>): Promise<{ message: string }> => {
    const response = await fetch(`/api/inquiry`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
    });
    return handleResponse(response);
};
