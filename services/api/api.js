import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/SlimMom-Frontend';

// Environment variable for the API key
const API_KEY = process.env.API_KEY || 'e8938dc969e4885481c1163e17374d0f';

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
};

// Function to make a POST request
export const apiCalorieIntake = async body => {
  try {
    const res = await axios.post(END_POINTS.DailyCalorieIntake, body, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('resData', res.data);
    return res.data;
  } catch (error) {
    console.error('Error fetching calorie intake data:', error);
    throw error;
  }
};
