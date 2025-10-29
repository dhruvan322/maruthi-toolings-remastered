// src/api/maruthi-toolings.api.ts
export const submitInquiry = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // ✅ Use your live Render backend URL here
    const response = await fetch('https://maruthi-toolings-remastered-backend.onrender.com/api/inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    throw error;
  }
};
