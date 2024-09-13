const BASE_URL = 'http://tastelink.pillersofttechnologies.com/api/user';

const apiRequest = async (endpoint: string, method: string, formData: FormData) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw result;
    }
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (firstName: string, lastName: string, email: string, password: string, countryCode: string, mobileNumber: string) => {
  const formData = new FormData();
  formData.append('firstname', firstName);
  formData.append('lastname', lastName);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('password_confirmation', password);
  formData.append('phone', mobileNumber);
  formData.append('phonecode', String(countryCode).replace('+',''));

  return await apiRequest('register', 'POST', formData);
};

export const loginUser = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  return await apiRequest('login', 'POST', formData);
};